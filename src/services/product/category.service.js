import {categoryApi, retrievResourceApi, resourceReferenceApi, parentCategoriesApi} from '../service.config'
import ApiRequest from '../index'
import {productCategoryTreesKey, accessTokenKey} from '../../constants/localstorage'
import {maxCategoryResourceBatchCount} from '../../constants/service'

const CategoryService = () => {
    let productCounts = {}
    const getAllCategories = async (token) => {
        const headers = {
            "X-Version": 'v2',
            "Authorization": `Bearer ${token}`,
            "Accept-Language": "en"
        }
        const res = await ApiRequest(categoryApi(), 'get', {},headers)
        return res
    }
    const getCategoryTree = (categories, layer, parenturl='product') => {
        return categories.map((category) => {
            const categoryKey = category.name.toLowerCase().replaceAll(' ', '_')
            const url = `${parenturl}/${categoryKey}`
            const items = category.subcategories !== undefined? getCategoryTree(category.subcategories, layer+1, url): []

            return {
                title: category.name,
                items: items,
                key: categoryKey,
                categoryId: category.id,
                url: url,
                total: 0
            }
        })
    }
    const getProductCategoryTrees = async () => {

        const accessToken = localStorage.getItem(accessTokenKey)
        const categories = (await getAllCategories(accessToken)).data
        const categorytrees = getCategoryTree(categories, 1)
        categorytrees.sort((a, b) => a.key.localeCompare(b.key))
        localStorage.setItem(productCategoryTreesKey, JSON.stringify(categorytrees))
        return categorytrees
    }
    let putProductCount = (category) => {

        if(category.items.length === 0){
            category.total = productCounts[category.categoryId] === undefined? 0: productCounts[category.categoryId]
            
        }  else{
            category.total = 0
            category.items.map((c) => {
                const updatedCategory = putProductCount(c)

                category.total += updatedCategory.total
                return {}
            })
            category.total += productCounts[category.categoryId] === undefined? 0: productCounts[category.categoryId]
        }
        return category
    }   
    const getProductCategoryDetail = async (mainCategoryKey, sub_categoryKey, categoryKey) => {
        const categoryTrees = JSON.parse(localStorage.getItem(productCategoryTreesKey))

        let matchMainCategory = categoryTrees.filter(category=> category.key === mainCategoryKey)
        matchMainCategory = matchMainCategory.length > 0? matchMainCategory[0]:[]

        const resources = await retrievResourceAssignedToCategory(matchMainCategory.categoryId)
        productCounts = {}
        
        resources.map((res)=> {
            if(res.ref.type === "product") 
                productCounts[res.categoryId] = (productCounts[res.categoryId] === undefined? 1: productCounts[res.categoryId] + 1)
            return []
        })
        matchMainCategory = putProductCount(matchMainCategory)
        
        let resTitle, resCategories, resCategoryId
        let products = []

        if(sub_categoryKey === undefined){
            resTitle = matchMainCategory.title
            resCategories = matchMainCategory.items
            resCategoryId = matchMainCategory.categoryId 
        }else{
            let matchSubCategory = matchMainCategory.items.filter(category => category.key === sub_categoryKey)
            matchSubCategory = matchSubCategory.length > 0? matchSubCategory[0]:[]

            if(categoryKey === undefined) {
                resTitle = matchSubCategory.title
                resCategories = matchMainCategory.items
                resCategoryId = matchSubCategory.categoryId

            }else{
                let matchCategory = matchSubCategory.items.filter(category => category.key === categoryKey)
                matchCategory = matchCategory.length > 0? matchCategory[0]:[]

                resTitle = matchCategory.title
                resCategories = matchMainCategory.items
                resCategoryId = matchCategory.categoryId

            }
            
        }

        const productResources = await retrievResourceAssignedToCategory(resCategoryId)
        productResources.map((res)=> {
            if(res.ref.type === "product") products.push(res.ref.id)
            return []
        })

        return {
            title: resTitle,
            categories: resCategories,
            productIds: products,
            categoryId: resCategoryId
        }
    }
    
    const retrievResourceAssignedToCategory = async (categoryId) => {
        
        const accessToken = localStorage.getItem(accessTokenKey)

        const headers = {
            "X-Version": 'v2',
            "Authorization": `Bearer ${accessToken}`,
            "X-Total-Count": true,
            "Accept-Language": "en"
        }
        const resource_api = `${retrievResourceApi(categoryId)}?withSubcategories=true&pageSize=${maxCategoryResourceBatchCount}`
        const resources = await ApiRequest(resource_api, 'get', {}, headers)
        return resources.data
    }
    const getRetrieveAllCategoriesWithResoureceId = async (resourceId) => {
        const accessToken = localStorage.getItem(accessTokenKey)

        const headers = {
            "X-Version": "v2",
            "Authorization": `Bearer ${accessToken}`,
            "Accept-Language": "en"
        }
        const params = {
            "X-Total-Count": true
        }
        const api = `${resourceReferenceApi()}/${resourceId}`
        const categories = await ApiRequest(api, 'get', {}, headers, params)
        return categories
    }

    const getAllParentCategories = async (categoryId) => {
        const accessToken = localStorage.getItem(accessTokenKey)
        const headers = {
            "X-Version": "v2",
            "Authorization": `Bearer ${accessToken}`,
            "Accept-Language": "en",
            "X-Total-Count": true,
        }
        const api = `${parentCategoriesApi()}/${categoryId}/parents`
        const categories = await ApiRequest(api, 'get', {}, headers)
        return categories
    }
    return {
        getAllCategories,
        getProductCategoryTrees,
        getProductCategoryDetail,
        retrievResourceAssignedToCategory,
        getRetrieveAllCategoriesWithResoureceId,
        getAllParentCategories
    }
}
export default CategoryService()
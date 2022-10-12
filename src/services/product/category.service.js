import {category_api, retriev_resource_api} from '../service.config'
import ApiRequest from '../index'
import {product_category_trees_key, acess_token_key} from '../../constants/localstorage'
import {max_category_resource_batch_count} from '../../constants/service'

const CategoryService = () => {
    let product_counts = {}
    const getAllCategories = async (token) => {
        const headers = {
            "X-Version": 'v2',
            "Authorization": `Bearer ${token}`,
            "Accept-Language": "en"
        }
        const res = await ApiRequest(category_api(), 'get', {},headers)
        return res
    }
    const getCategoryTree = (categories, layer, parenturl='product') => {
        return categories.map((category) => {
            const category_key = category.name.toLowerCase().replaceAll(' ', '_')
            const url = `${parenturl}/${category_key}`
            const items = category.subcategories !== undefined? getCategoryTree(category.subcategories, layer+1, url): []

            return {
                title: category.name,
                items: items,
                key: category_key,
                category_id: category.id,
                url: url,
                total: 0
            }
        })
    }
    const getProductCategoryTrees = async () => {

        const access_token = localStorage.getItem(acess_token_key)
        const categories = (await getAllCategories(access_token)).data
        const categorytrees = getCategoryTree(categories, 1)
        localStorage.setItem(product_category_trees_key, JSON.stringify(categorytrees))
        return categorytrees
    }
    let putProductCount = (category) => {

        if(category.items.length === 0){
            category.total = product_counts[category.category_id] === undefined? 0: product_counts[category.category_id]
            
        }  else{
            category.total = 0
            category.items.map((c) => {
                const updated_category = putProductCount(c)

                category.total += updated_category.total
                return {}
            })
            category.total += product_counts[category.category_id] === undefined? 0: product_counts[category.category_id]
        }
        return category
    }   
    const getProductCategoryDetail = async (main_category_key, sub_category_key, category_key) => {
        const category_trees = JSON.parse(localStorage.getItem(product_category_trees_key))

        let match_main_category = category_trees.filter(category=> category.key === main_category_key)
        match_main_category = match_main_category.length > 0? match_main_category[0]:[]

        const resources = await retrievResourceAssignedToCategory(match_main_category.category_id)
        product_counts = {}
        
        resources.map((res)=> {
            if(res.ref.type === "product") 
                product_counts[res.categoryId] = (product_counts[res.categoryId] === undefined? 1: product_counts[res.categoryId] + 1)
            return []
        })
        match_main_category = putProductCount(match_main_category)
        
        let res_title, res_categories, res_category_id
        let products = []

        if(sub_category_key === undefined){
            res_title = match_main_category.title
            res_categories = match_main_category.items
            res_category_id = match_main_category.category_id 
        }else{
            let match_sub_category = match_main_category.items.filter(category => category.key === sub_category_key)
            match_sub_category = match_sub_category.length > 0? match_sub_category[0]:[]

            if(category_key === undefined) {
                res_title = match_sub_category.title
                res_categories = match_main_category.items
                res_category_id = match_sub_category.category_id

            }else{
                let match_category = match_sub_category.items.filter(category => category.key === category_key)
                match_category = match_category.length > 0? match_category[0]:[]

                res_title = match_category.title
                res_categories = match_main_category.items
                res_category_id = match_category.category_id

            }
            
        }

        const product_resources = await retrievResourceAssignedToCategory(res_category_id)
        product_resources.map((res)=> {
            if(res.ref.type === "product") products.push(res.ref.id)
            return []
        })

        return {
            title: res_title,
            categories: res_categories,
            productIds: products,
            category_id: res_category_id
        }
    }
    
    const retrievResourceAssignedToCategory = async (categoryId) => {
        
        const access_token = localStorage.getItem(acess_token_key)

        const headers = {
            "X-Version": 'v2',
            "Authorization": `Bearer ${access_token}`,
            "X-Total-Count": true,
            "Accept-Language": "en"
        }
        const resource_api = `${retriev_resource_api(categoryId)}?withSubcategories=true&pageSize=${max_category_resource_batch_count}`
        const resources = await ApiRequest(resource_api, 'get', {}, headers)
        return resources.data
    }
    return {
        getAllCategories,
        getProductCategoryTrees,
        getProductCategoryDetail,
        retrievResourceAssignedToCategory
    }
}
export default CategoryService()
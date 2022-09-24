import {category_api, retriev_resource_api} from '../service.config'
import ApiRequest from '../index'
import ServiceAccessToken from '../user/serviceAccessToken'
import {product_category_trees_key} from '../../constants/localstorage'

const CategoryService = () => {
    const getAllCategories = async (token) => {
        const headers = {
            "X-Version": 'v2',
            "Authorization": `Bearer ${token}`,
            "Accept-Language": "en"
        }
        const res = await ApiRequest(category_api, 'get', {},headers)
        return res
    }
    const getCategoryTree = (categories, layer, parenturl='/product') => {
        return categories.map((category) => {
            const category_key = category.name.toLowerCase().replaceAll(' ', '_')
            const url = `${parenturl}/${category_key}`
            const items = category.subcategories != undefined && layer < 3? getCategoryTree(category.subcategories, layer+1, url): []
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
        const service_token = await ServiceAccessToken()
        const categories = (await getAllCategories(service_token)).data
        const categorytrees = getCategoryTree(categories, 1)
        localStorage.setItem(product_category_trees_key, JSON.stringify(categorytrees))
        return categorytrees
    }
    const getProductCategoryDetail = (main_category_key, sub_category_key, category_key) => {
        const category_trees = JSON.parse(localStorage.getItem(product_category_trees_key))

        let match_main_category = category_trees.filter(category=> category.key == main_category_key)
        match_main_category = match_main_category.length > 0? match_main_category[0]:[]

        if(sub_category_key == undefined) 
            return {
                title: match_main_category.title,
                categories: match_main_category.items,
                category_id: match_main_category.id
            }

        let match_sub_category = match_main_category.items.filter(category => category.key == sub_category_key)
        match_sub_category = match_sub_category.length > 0? match_sub_category[0]:[]

        if(category_key == undefined) 
            return {
                title: match_sub_category.title,
                categories: match_main_category.items,
                category_id: match_sub_category.id
            }

        let match_category = match_sub_category.items.filter(category => category.key == category_key)
        match_category = match_category.length > 0? match_category[0]:[]

        return {
            title: match_category.title,
            categories: match_main_category.items,
            category_id: match_category.id
        }
    }
    
    const retrievResourceAssignedToCategory = async (categoryId) => {
        const service_token = await ServiceAccessToken()
        const headers = {
            "X-Version": 'v2',
            "Authorization": `Bearer ${service_token}`
        }
        const resource_api = `${retriev_resource_api(categoryId)}?withSubcategories=true`
        const resources = await ApiRequest(resource_api, 'get', {}, headers)
        console.log(resources)
    }
    return {
        getAllCategories,
        getProductCategoryTrees,
        getProductCategoryDetail,
        retrievResourceAssignedToCategory
    }
}
export default CategoryService()
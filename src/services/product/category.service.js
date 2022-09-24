import {category_api} from '../service.config'
import ApiRequest from '../index'
import ServiceAccessToken from '../user/serviceAccessToken'

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
    const getCategoryTree = (categories, layer) => {
        return categories.map((category) => {
            const items = category.subcategories != undefined && layer < 3? getCategoryTree(category.subcategories, layer+1): []
            
            return {
                title: category.name,
                items: items
            }
        })
    }
    const getProductCategory = async () => {
        const service_token = await ServiceAccessToken()
        const categories = (await getAllCategories(service_token)).data
        return getCategoryTree(categories, 1)
        // return categories.map((category) => {
        //     const items = category.subcategories != undefined ? category.subcategories.map((subcategory) => {
        //        return {
        //             title
        //        }
        //     }): []
        //     return {
        //       'title': category.name,
        //       'items': items
        //     }
        //   })
    }
    return {
        getAllCategories,
        getProductCategory
        
    }
}
export default CategoryService()
import {category_api} from '../service.config'
import ApiRequest from '../index'
import ServiceAccessToken from '../user/serviceAccessToken'

const CategoryService = () => {
    const getAllCategories = () => {

        ApiRequest(category_api, {})
    }

    return {
        getAllCategories,
        
    }
}
export default CategoryService()
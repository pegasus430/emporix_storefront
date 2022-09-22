import {category_api} from '../service.config'
import ApiRequest from '../index'

const CategoryService = () => {
    const getAllCategories = () => {
        console.log('a')
        console.log(ApiRequest(category_api, {}))
    }

    return {
        getAllCategories,
        
    }
}
export default CategoryService()
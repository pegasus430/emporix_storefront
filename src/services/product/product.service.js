import ApiRequest from '../index'
import ServiceAccessToken from '../user/serviceAccessToken'
import {product_api} from '../service.config'

const ProductService = () => {
    const getProductsWithIds = async (ids = []) => {
        const service_token = await ServiceAccessToken()
        const headers = {
            "X-Version": 'v2',
            "Authorization": `Bearer ${service_token}`,
            "Accept-Language": "en"
        }
        const params = {
            'q': 'id:(' + (ids.join(','))+')'
        }
        const res = await ApiRequest(product_api(), 'get', {},headers, params)
        return res
    }
    return {
        getProductsWithIds
    }
}

export default ProductService()
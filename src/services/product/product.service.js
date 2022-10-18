import ApiRequest from '../index'
import {product_api} from '../service.config'
import {acess_token_key} from '../../constants/localstorage'

const ProductService = () => {
    const getProductsWithIds = async (ids = []) => {
        const access_token = localStorage.getItem(acess_token_key)
        const headers = {
            "X-Version": 'v2',
            "Authorization": `Bearer ${access_token}`,
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
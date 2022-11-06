import ApiRequest from '../index'
import {product_api, product_api_with_yrn} from '../service.config'
import {accessTokenKey} from '../../constants/localstorage'

const ProductService = () => {
    const getProductsWithIds = async (ids = []) => {
        const access_token = localStorage.getItem(accessTokenKey)
        const headers = {
            "X-Version": 'v2',
            "Authorization": `Bearer ${access_token}`,
            "Accept-Language": "en"
        }
        const params = {
            'q': 'id:(' + (ids.join(','))+')'
        }
        const res = await ApiRequest(product_api(), 'get', {},headers, params)
        return res.data
    }
    const getProductsWithYrns = async (yrns = []) => {
        const access_token = localStorage.getItem(accessTokenKey)
        const headers = {
            "X-Version": 'v2',
            "Authorization": `Bearer ${access_token}`,
            "Accept-Language": "en",
            "Content-Type": "application/json"
        }
        const data = {
            yrns: yrns
        }
        const res = await ApiRequest(product_api_with_yrn, 'post', data,headers)
        const products = res.data.map(product => {
            return {
                ...product,
                src: (product.media !== undefined && product.media.length > 0)? product.media[0]['url']:""
            }
        })
        return products
    }
    return {
        getProductsWithIds,
        getProductsWithYrns
    }
}

export default ProductService()
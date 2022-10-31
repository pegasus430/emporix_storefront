import {get_cart_account_api, cart_products_api} from './service.config'
import ApiRequest from './index'
import {acess_token_key} from '../constants/localstorage'

const CartService = (sessionId) => {
    const getCartAccount = async () => {
        const access_token = localStorage.getItem(acess_token_key)
        const headers = {
            "X-Version": 'v2',
            "Authorization": `Bearer ${access_token}`,
            "Accept-Language": "en"
        }
        let params = {
            'siteCode': 'main',
            'create': true
        }
        params['sessionId'] = sessionId
        const res = await ApiRequest(get_cart_account_api, 'get', {},headers, params)
        return res
    }
    const getCartProducts = async (cartAccountId) => {
        const access_token = localStorage.getItem(acess_token_key)
        const headers = {
            "X-Version": 'v2',
            "Authorization": `Bearer ${access_token}`,
            "Accept-Language": "en"
        }
        
        const res = await ApiRequest(`${cart_products_api}/${cartAccountId}/items`, 'get', {}, headers)
        return res.data
    }
    const addProuctToCart = async (cartAccountId, product) => {
        const add_product_to_cart_api = `${cart_products_api}/${cartAccountId}/items`
        const access_token = localStorage.getItem(acess_token_key)
        const headers = {
            "X-Version": 'v2',
            "Authorization": `Bearer ${access_token}`,
            "Accept-Language": "en"
        }
        const data = {
            "itemYrn": `${product.yrn}`,
            "price": {
                "priceId": "4565",
                "effectiveAmount": 0.3582,
                "originalAmount": 0.3582,
                "currency": "EUR"
            },
            "quantity": 6
        }
        const params = {
            'siteCode': 'main'
        }
        const res = await ApiRequest(add_product_to_cart_api, 'post', data, headers, params)
        return res.data
    }
    return {
        getCartAccount,
        getCartProducts,
        addProuctToCart
    }
}
export default CartService()
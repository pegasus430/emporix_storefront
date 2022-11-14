import {get_cart_account_api, cart_products_api, cart_remove_api} from './service.config'
import ApiRequest from './index'
import {accessTokenKey} from '../constants/localstorage'

const CartService = (sessionId) => {
    const getCartAccount = async () => {
        const access_token = localStorage.getItem(accessTokenKey)
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
        const res = await ApiRequest(get_cart_account_api(), 'get', {},headers, params)
        return res
    }
    const getCartList = async (cartAccountId) => {
        const access_token = localStorage.getItem(accessTokenKey)
        const headers = {
            "X-Version": 'v2',
            "Authorization": `Bearer ${access_token}`,
            "Accept-Language": "en"
        }
        
        const res = await ApiRequest(`${cart_products_api()}/${cartAccountId}/items`, 'get', {}, headers)
        return res.data
    }
    const removeCart = async (cartAccountId, cartItemId) => {
        const access_token = localStorage.getItem(accessTokenKey)
        const headers = {
            "X-Version": 'v2',
            "Authorization": `Bearer ${access_token}`,
            "Accept-Language": "en",
            "Content-Type": "application/json"
        }
        const api = `${cart_remove_api()}/${cartAccountId}/items/${cartItemId}`
        const res = await ApiRequest(api, 'delete', {}, headers)
        return res
    }
    const addMultipleProductsToCart = async (cartAccountId, products) => {
        const add_multiple_products_to_cart_api = `${cart_products_api()}/${cartAccountId}/itemsBatch`
        const access_token = localStorage.getItem(accessTokenKey)
        const headers = {
            "X-Version": 'v2',
            "Authorization": `Bearer ${access_token}`,
            "Accept-Language": "en"
        }
        const data = products.map(product => {
            return {
                "itemYrn": product.yrn,
                "price": {
                    "priceId": product.price.priceId,
                    "effectiveAmount": product.price.effectiveValue,
                    "originalAmount": product.price.originalValue,
                    "currency": product.price.currency,
                    "measurementUnit": {
                        "quantity": product.quantity,
                        "unitCode": "PC"
                    }
                },
                "quantity": product.quantity
            }
        })
        const params = {
            'siteCode': 'main'
        }
        const res = await ApiRequest(add_multiple_products_to_cart_api, 'post', data, headers, params)
        return res.data
    }
    const addProuctToCart = async (cartAccountId, product) => {
        const add_product_to_cart_api = `${cart_products_api()}/${cartAccountId}/items`
        const access_token = localStorage.getItem(accessTokenKey)
        const headers = {
            "X-Version": 'v2',
            "Authorization": `Bearer ${access_token}`,
            "Accept-Language": "en"
        }
        const data = {
            "itemYrn": product.yrn,
            "price": {
                "priceId": product.price.priceId,
                "effectiveAmount": product.price.effectiveValue,
                "originalAmount": product.price.originalValue,
                "currency": product.price.currency
            },
            "quantity": product.quantity
        }
        const params = {
            'siteCode': 'main'
        }
        const res = await ApiRequest(add_product_to_cart_api, 'post', data, headers, params)
        return res.data
    }
    return {
        getCartAccount,
        getCartList,
        addProuctToCart,
        removeCart,
        addMultipleProductsToCart
    }
}
export default CartService()
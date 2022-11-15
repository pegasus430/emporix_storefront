import {getCartAccountApi, cartProductsApi, cartRemoveApi} from './service.config'
import ApiRequest from './index'
import {accessTokenKey} from '../constants/localstorage'

const CartService = (sessionId) => {
    const getCartAccount = async () => {
        const accessToken = localStorage.getItem(accessTokenKey)
        const headers = {
            "X-Version": 'v2',
            "Authorization": `Bearer ${accessToken}`,
            "Accept-Language": "en"
        }
        let params = {
            'siteCode': 'main',
            'create': true
        }
        params['sessionId'] = sessionId
        const res = await ApiRequest(getCartAccountApi(), 'get', {},headers, params)
        console.log(res)
        return res
    }
    const getCartList = async (cartAccountId) => {
        const accessToken = localStorage.getItem(accessTokenKey)
        const headers = {
            "X-Version": 'v2',
            "Authorization": `Bearer ${accessToken}`,
            "Accept-Language": "en"
        }
        
        const res = await ApiRequest(`${cartProductsApi()}/${cartAccountId}/items`, 'get', {}, headers)
        return res.data
    }
    const removeCart = async (cartAccountId, cartItemId) => {
        const accessToken = localStorage.getItem(accessTokenKey)
        const headers = {
            "X-Version": 'v2',
            "Authorization": `Bearer ${accessToken}`,
            "Accept-Language": "en",
            "Content-Type": "application/json"
        }
        const api = `${cartRemoveApi()}/${cartAccountId}/items/${cartItemId}`
        const res = await ApiRequest(api, 'delete', {}, headers)
        return res
    }
    const addMultipleProductsToCart = async (cartAccountId, products) => {
        const add_multiple_products_to_cart_api = `${cartProductsApi()}/${cartAccountId}/itemsBatch`
        const accessToken = localStorage.getItem(accessTokenKey)
        const headers = {
            "X-Version": 'v2',
            "Authorization": `Bearer ${accessToken}`,
            "Accept-Language": "en"
        }
        const data = products.map(product => {
            return {
                "itemYrn": product.yrn,
                "price": {
                    "priceId": product.price.priceId,
                    "effectiveAmount": product.price.effectiveValue,
                    "originalAmount": product.price.originalValue,
                    // "currency": product.price.currency,
                    "currency": 'EUR',
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
        const add_product_to_cart_api = `${cartProductsApi()}/${cartAccountId}/items`
        const accessToken = localStorage.getItem(accessTokenKey)
        const headers = {
            "X-Version": 'v2',
            "Authorization": `Bearer ${accessToken}`,
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
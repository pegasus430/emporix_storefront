import ApiRequest from '../index'
import {productApi, productApiWithYrn} from '../service.config'
import {accessTokenKey} from '../../constants/localstorage'

const ProductService = () => {
    const getProductsWithIds = async (ids = []) => {
        const accessToken = localStorage.getItem(accessTokenKey)
        const headers = {
            "X-Version": 'v2',
            "Authorization": `Bearer ${accessToken}`,
            "Accept-Language": "en"
        }
        const params = {
            'q': 'id:(' + (ids.join(','))+')'
        }
        const res = await ApiRequest(productApi(), 'get', {},headers, params)
        return res.data
    }
    const getProductsWithCode = async (codes = []) => {
        const accessToken = localStorage.getItem(accessTokenKey)
        const headers = {
            "X-Version": 'v2',
            "Authorization": `Bearer ${accessToken}`,
            "Accept-Language": "en"
        }
        const params = {
            'q': 'code:(' + (codes.join(','))+')'
        }
        const res = await ApiRequest(productApi(), 'get', {},headers, params)
        return res.data
    }
    const getProductsWithYrns = async (yrns = []) => {
        const accessToken = localStorage.getItem(accessTokenKey)
        const headers = {
            "X-Version": 'v2',
            "Authorization": `Bearer ${accessToken}`,
            "Accept-Language": "en",
            "Content-Type": "application/json"
        }
        const data = {
            yrns: yrns
        }
        const res = await ApiRequest(productApiWithYrn(), 'post', data,headers)
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
        getProductsWithCode,
        getProductsWithYrns
    }
}

export default ProductService()
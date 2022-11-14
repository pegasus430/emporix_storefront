import {serviceTokenApi, grantType, clientSecret, clientId} from '../service.config'
import ApiRequest  from '..'
import {serviceTokenKey, servciceTokenExpiresInKey} from '../../constants/localstorage'
import qs from 'qs';

const scope = "product.product_create product.product_publish category.category_create category.category_publish category.category_update saasag.brand_manage product.product_update product.product_publish product.product_delete product.product_delete_all"

const headers = {
    'Content-Type': 'application/x-www-form-urlencoded'
}
const payload = {
    'grant_type': grantType,
    'client_id': clientId(),
    'client_secret': clientSecret(),
    'scope': scope
}
const GetServiceTokenFromServer = async () => {
    let now = Date.now()
    const serviceTokenExpiresIn = localStorage.getItem(servciceTokenExpiresInKey)
    if(now < parseInt(serviceTokenExpiresIn))
        return localStorage.getItem(serviceTokenKey)
    const res = await ApiRequest(serviceTokenApi(), 'post', qs.stringify(payload), headers)
    const serviceToken = res['data']['access_token']
    const expiresIn = res['data']['expires_in']
    localStorage.setItem(serviceTokenKey, serviceToken)
    localStorage.setItem(servciceTokenExpiresInKey, now + expiresIn * 1000)
    return serviceToken
}
const ServiceAccessToken = async () => {
    const res = await GetServiceTokenFromServer()
    return res
}

export default ServiceAccessToken
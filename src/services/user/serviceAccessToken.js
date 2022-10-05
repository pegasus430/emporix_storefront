import {service_token_api, grant_type, client_secret, client_id} from '../service.config'
import ApiRequest  from '..'
import {service_token_key, servcice_token_expires_in_key} from '../../constants/localstorage'
import qs from 'qs';

const scope = "product.product_create product.product_publish category.category_create category.category_publish category.category_update saasag.brand_manage product.product_update product.product_publish product.product_delete product.product_delete_all"

const headers = {
    'Content-Type': 'application/x-www-form-urlencoded'
}
const payload = {
    'grant_type': grant_type,
    'client_id': client_id(),
    'client_secret': client_secret(),
    'scope': scope
}
const GetServiceTokenFromServer = async () => {
    let now = Date.now()
    const service_token_expires_in = localStorage.getItem(servcice_token_expires_in_key)
    if(now < parseInt(service_token_expires_in))
        return localStorage.getItem(service_token_key)
    const res = await ApiRequest(service_token_api, 'post', qs.stringify(payload), headers)
    const serviceToken = res['data']['access_token']
    const expires_in = res['data']['expires_in']
    localStorage.setItem(service_token_key, serviceToken)
    localStorage.setItem(servcice_token_expires_in_key, now + expires_in * 1000)
    return serviceToken
}
const ServiceAccessToken = async () => {
    const res = await GetServiceTokenFromServer()
    return res
}

export default ServiceAccessToken
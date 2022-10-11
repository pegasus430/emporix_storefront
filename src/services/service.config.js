import tenant_lists from '../tenant.config'
import { tenant_key } from '../constants/localstorage'
export const grant_type = "client_credentials"

const API_URL = process.env.REACT_APP_API_URL_STAGE
const tenant = process.env.REACT_APP_TENANT_STAGE
const default_client_id = process.env.REACT_APP_EMPORIX_CLIENT_ID_STAGE
const default_client_secret = process.env.REACT_APP_EMPORIX_SECRET_STAGE


const get_tenant = () => {
    return localStorage.getItem(tenant_key)
}
export const client_id = () => {
    const user_tenant = get_tenant()
    if(tenant_lists[user_tenant] == undefined) return default_client_id
    return tenant_lists[user_tenant]['emporix_client_id']
}
export const client_secret = () => {
    const user_tenant = get_tenant()
    if(tenant_lists[user_tenant] == undefined) return default_client_secret
    return tenant_lists[user_tenant]['emporix_secret']
}


export const service_token_api = `${API_URL}/oauth/token`
export const category_api = () => {
    return `${API_URL}/category/${get_tenant()}/category-trees`
}
export const product_api = () => {
    return `${API_URL}/product/${get_tenant()}/products`
}
export const retriev_resource_api = (categoryId) => {
    return  `${API_URL}/category/${get_tenant()}/categories/${categoryId}/assignments`
}
export const availability_api = () => {
    return `${API_URL}/availability/${get_tenant()}/availability`
}
export const anonymous_token_api = `${API_URL}/customerlogin/auth/anonymous/login`

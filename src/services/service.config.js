import tenant_lists from '../tenant.config'

const API_URL = process.env.REACT_APP_API_URL_STAGE
const tenant = process.env.REACT_APP_TENANT_STAGE
const default_client_id = process.env.REACT_APP_EMPORIX_CLIENT_ID_STAGE
const default_client_secret = process.env.REACT_APP_EMPORIX_SECRET_STAGE
export const grant_type = "client_credentials"

const get_tenant = () => {
    let user_tenant = tenant
    let user = localStorage.getItem('user')
    if(user==undefined) return user_tenant
    user_tenant = JSON.parse(user)['userTenant']
    // if(user_tenant == undefined) user_tenant = tenant
    return user_tenant
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

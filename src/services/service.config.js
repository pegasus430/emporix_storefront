import {getTenantLists} from '../tenant.config'
import { tenant_key } from '../constants/localstorage'
export const grant_type = "client_credentials"

const API_URL = process.env.REACT_APP_API_URL_STAGE
const default_client_id = process.env.REACT_APP_EMPORIX_CLIENT_ID_STAGE
const default_client_secret = process.env.REACT_APP_EMPORIX_SECRET_STAGE


const get_tenant = () => {
    return localStorage.getItem(tenant_key)
}
export const client_id = () => {
    const user_tenant = get_tenant()
    const tenantLists = getTenantLists()
    if(tenantLists[user_tenant] === undefined) return default_client_id
    return tenantLists[user_tenant]['emporix_client_id']
}
export const client_secret = () => {
    const user_tenant = get_tenant()
    const tenantLists = getTenantLists()
    if(tenantLists[user_tenant] === undefined) return default_client_secret
    return tenantLists[user_tenant]['emporix_secret']
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
export const brand_api = `${API_URL}/brand/brands`
export const resource_reference_api = `${API_URL}/category/${get_tenant()}/assignments/references`
export const parent_categories_api = `${API_URL}/category/${get_tenant()}/categories`
// URLS
export const add_location_url = `/${get_tenant()}/my-account/locations/add`
export const my_account_location_url = `/${get_tenant()}/my-account/locations`
export const payment_edit_card_detail_url = `/${get_tenant()}/my-account/payments/edit_card_details`
export const my_account_payment_url = `/${get_tenant()}/my-account/payments`
export const my_account_replenishment_orders_url = `/${get_tenant()}/my-account/replenishment-orders`
export const add_replenishment_orders_url = `/${get_tenant()}/my-account/replenishment-orders/add`
export const edit_replenishment_orders_url = `/${get_tenant()}/my-account/replenishment-orders/edit`
export const checkout_url = `/${get_tenant()}/checkout`
export const cart_url = `/${get_tenant()}/cart`
export const login_url = `/${get_tenant()}/login`
export const home_url = `/${get_tenant()}`
export const signup_url = `/${get_tenant()}/signup`
export const product_url = `/${get_tenant()}/product`

export const add_tenant_to_url = (url) => {
    return  `/${get_tenant()}/${url}`
}
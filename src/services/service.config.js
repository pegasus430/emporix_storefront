import {getTenantLists} from '../tenant.config'
import { tenantKey } from '../constants/localstorage'
export const grantType = "client_credentials"

const API_URL = process.env.REACT_APP_API_URL_STAGE
const defaultClientId = process.env.REACT_APP_EMPORIX_CLIENT_ID_STAGE
const defaultClientSecret = process.env.REACT_APP_EMPORIX_SECRET_STAGE

const getTenant = () => localStorage.getItem(tenantKey)

export const clientId = () => {
    const userTenant = getTenant()
    const tenantLists = getTenantLists()
    if(tenantLists[userTenant] === undefined) return defaultClientId
    return tenantLists[userTenant]['emporix_client_id']
}
export const clientSecret = () => {
    const userTenant = getTenant()
    const tenantLists = getTenantLists()
    if(tenantLists[userTenant] === undefined) return defaultClientSecret
    return tenantLists[userTenant]['emporix_secret']
}

export const serviceTokenApi = ()=> `${API_URL}/oauth/token`
export const categoryApi = ()=> `${API_URL}/category/${getTenant()}/category-trees`
export const productApi = ()=>  `${API_URL}/product/${getTenant()}/products`
export const retrievResourceApi = (categoryId)=> `${API_URL}/category/${getTenant()}/categories/${categoryId}/assignments`
export const availabilityApi = ()=> `${API_URL}/availability/${getTenant()}/availability`
export const productApiWithYrn = ()=> `${API_URL}/product/${getTenant()}/search`
export const anonymousTokenApi = ()=> `${API_URL}/customerlogin/auth/anonymous/login`
export const brandApi = ()=> `${API_URL}/brand/brands`
export const resourceReferenceApi = ()=> `${API_URL}/category/${getTenant()}/assignments/references`
export const parentCategoriesApi = ()=> `${API_URL}/category/${getTenant()}/categories`
export const getCartAccountApi = ()=> `${API_URL}/cart/${getTenant()}/carts`
export const cartItemApi = ()=> `${API_URL}/cart/${getTenant()}/carts`
export const cartProductsApi = ()=> `${API_URL}/cart/${getTenant()}/carts`
export const cartRemoveApi = ()=> `${API_URL}/cart/${getTenant()}/carts`
export const priceApi = ()=> `${API_URL}/price/${getTenant()}/match-prices-by-context`
export const currencyApi = ()=> `${API_URL}/currency/${getTenant()}/currencies`
// URLS
export const addLocationUrl = ()=> `/${getTenant()}/my-account/locations/add`
export const myAccountLocationUrl = ()=> `/${getTenant()}/my-account/locations`
export const paymentEditCardDetailUrl = ()=> `/${getTenant()}/my-account/payments/edit_card_details`
export const myAccountPaymentUrl = ()=> `/${getTenant()}/my-account/payments`
export const myAccountReplenishmentOrdersUrl = ()=> `/${getTenant()}/my-account/replenishment-orders`
export const addReplenishmentOrdersUrl = ()=> `/${getTenant()}/my-account/replenishment-orders/add`
export const editReplenishmentOrdersUrl = ()=> `/${getTenant()}/my-account/replenishment-orders/edit`
export const myAccountMyOrdersViewUrl = ()=> `/${getTenant()}/my-account/my-orders/view/`
export const myAccountMyOrdersInvoiceUrl = ()=> `/${getTenant()}/my-account/my-orders/invoice/`
export const checkoutUrl = ()=> `/${getTenant()}/checkout`
export const cartUrl = ()=> `/${getTenant()}/cart`
export const loginUrl = ()=> `/${getTenant()}/login`
export const homeUrl = ()=> `/${getTenant()}`
export const signupUrl = ()=> `/${getTenant()}/signup`
export const productUrl = ()=> `/${getTenant()}/product`
export const addTenantToUrl = (url)=> `/${getTenant()}/${url}`
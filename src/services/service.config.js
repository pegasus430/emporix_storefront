const API_URL = process.env.REACT_APP_API_URL_STAGE
const tenant = process.env.REACT_APP_TENANT_STAGE
const client_id = process.env.REACT_APP_EMPORIX_SECRET_STAGE
const client_secret = process.env.REACT_APP_EMPORIX_SECRET_STAGE
const grant_type = "client_credentials"

export const service_token_api = `${API_URL}/oauth/token`
export const category_api = `${API_URL}/category/${tenant}/category-trees`



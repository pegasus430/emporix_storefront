import {tenant_list_key} from './constants/localstorage'

const tenant_lists = {
    indritstage: {
        tenant: "indritstage",
        storefront_client_id: "HRUvHjClGa1QXSptPPvWIUkTsjpvmKTK",
    }
    
}

let tenantListFromLocalStorage = localStorage.getItem(tenant_list_key)
tenantListFromLocalStorage = (tenantListFromLocalStorage === null? {}: JSON.parse(tenantListFromLocalStorage))

export const tenantLists = {
    ...tenantListFromLocalStorage,
    ...tenant_lists
}

export default tenant_lists
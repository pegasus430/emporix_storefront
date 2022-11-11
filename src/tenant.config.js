import {tenantListKey} from './constants/localstorage'
import automationTenant from './tenant.json'

const tenant_lists = {
    indritstage: {
        tenant: "indritstage",
        storefront_client_id: "HRUvHjClGa1QXSptPPvWIUkTsjpvmKTK",
    }
     
}

export const getTenantLists = () =>  {
    let tenantListFromLocalStorage = localStorage.getItem(tenantListKey)
    tenantListFromLocalStorage = (tenantListFromLocalStorage === null? {}: JSON.parse(tenantListFromLocalStorage))

    return {
        ...tenantListFromLocalStorage,
        ...tenant_lists,
        ...automationTenant
    }
}

export default tenant_lists
import {
    anonymousTokenKey, 
    anonymousTokenExpiresInKey,
    customerTokenExpiresInKey,
    customerTokenKey,
    tenantKey,
    accessTokenKey,
    sessionIdKey
} from '../../constants/localstorage'

import {getTenantLists} from '../../tenant.config'
import {anonymous_token_api} from '../service.config'
import ApiRequest  from '..'

const AccessToken = async (tenant) => {
    let now = Date.now()
    let old_tenant = localStorage.getItem(tenantKey)

    if(tenant === old_tenant){
        // about customer token
        const customer_token_expires_in = localStorage.getItem(customerTokenExpiresInKey)
        // if customer token is not expired yet, get it from localstorage.
        if(customer_token_expires_in !== undefined && now < parseInt(customer_token_expires_in)){
            localStorage.setItem(accessTokenKey, localStorage.getItem(customerTokenKey))
            return localStorage.getItem(customerTokenKey)
        }
            
        // about anonymous token
        const anonymous_token_expires_in = localStorage.getItem(anonymousTokenExpiresInKey)
        // if customer token is not expired yet, get it from localstorage.
        if(anonymous_token_expires_in !== undefined && now < parseInt(anonymous_token_expires_in)){
            localStorage.setItem(accessTokenKey, localStorage.getItem(anonymousTokenKey))
            return localStorage.getItem(anonymousTokenKey)
        }
        
    }
    // save tenant
    localStorage.setItem(tenantKey, tenant)
    const session_id = localStorage.getItem(sessionIdKey)
    const tenantLists = getTenantLists()
    const params = {
        'client_id': tenantLists[tenant]['storefront_client_id'],
        'hybris-tenant': tenant,
        'hybris-session-id': session_id
    }
    
    const res = await ApiRequest(anonymous_token_api(), 'get', {}, {}, params)
    localStorage.setItem(anonymousTokenKey, res['data']['access_token'])
    localStorage.setItem(anonymousTokenExpiresInKey, now + res['data']['expires_in'] * 1000)

    localStorage.setItem(accessTokenKey, res['data']['access_token'])
    return res['data']['access_token']
}
export default AccessToken
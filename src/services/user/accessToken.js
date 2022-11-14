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
import {anonymousTokenApi} from '../service.config'
import ApiRequest  from '..'

const AccessToken = async (tenant) => {
    let now = Date.now()
    let oldTenant = localStorage.getItem(tenantKey)

    if(tenant === oldTenant){
        // about customer token
        const customerTokenExpiresIn = localStorage.getItem(customerTokenExpiresInKey)
        // if customer token is not expired yet, get it from localstorage.
        if(customerTokenExpiresIn !== undefined && now < parseInt(customerTokenExpiresIn)){
            localStorage.setItem(accessTokenKey, localStorage.getItem(customerTokenKey))
            return localStorage.getItem(customerTokenKey)
        }
            
        // about anonymous token
        const anonymousTokenExpiresIn = localStorage.getItem(anonymousTokenExpiresInKey)
        // if customer token is not expired yet, get it from localstorage.
        if(anonymousTokenExpiresIn !== undefined && now < parseInt(anonymousTokenExpiresIn)){
            localStorage.setItem(accessTokenKey, localStorage.getItem(anonymousTokenKey))
            return localStorage.getItem(anonymousTokenKey)
        }
        
    }
    // save tenant
    localStorage.setItem(tenantKey, tenant)
    const sessionId = localStorage.getItem(sessionIdKey)
    const tenantLists = getTenantLists()
    const params = {
        'client_id': tenantLists[tenant]['storefront_client_id'],
        'hybris-tenant': tenant,
        'hybris-session-id': sessionId
    }
    
    const res = await ApiRequest(anonymousTokenApi(), 'get', {}, {}, params)
    localStorage.setItem(anonymousTokenKey, res['data']['access_token'])
    localStorage.setItem(anonymousTokenExpiresInKey, now + res['data']['expires_in'] * 1000)

    localStorage.setItem(accessTokenKey, res['data']['access_token'])
    return res['data']['access_token']
}
export default AccessToken
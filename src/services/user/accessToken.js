import {
    anonymous_token_key, 
    anonymous_token_expires_in_key,
    customer_token_expires_in_key,
    customer_token_key,
    tenant_key,
    acess_token_key
} from '../../constants/localstorage'

import tenant_lists from '../../tenant.config'
import {anonymous_token_api} from '../service.config'
import ApiRequest  from '..'
import {v4 as uuidv4} from 'uuid'

const AccessToken = async (tenant) => {
    let now = Date.now()
    let old_tenant = localStorage.getItem(tenant_key)

    if(tenant == old_tenant){
        // about customer token
        const customer_token_expires_in = localStorage.getItem(customer_token_expires_in_key)
        // if customer token is not expired yet, get it from localstorage.
        if(customer_token_expires_in != undefined && now < parseInt(customer_token_expires_in)){
            localStorage.setItem(acess_token_key, localStorage.getItem(customer_token_key))
            return localStorage.getItem(customer_token_key)
        }
            
        // about anonymous token
        const anonymous_token_expires_in = localStorage.getItem(anonymous_token_expires_in_key)
        // if customer token is not expired yet, get it from localstorage.
        if(anonymous_token_expires_in != undefined && now < parseInt(anonymous_token_expires_in)){
            localStorage.setItem(acess_token_key, localStorage.getItem(anonymous_token_key))
            return localStorage.getItem(anonymous_token_key)
        }
            
    }
    // save tenant
    localStorage.setItem(tenant_key, tenant)
    const session_id = uuidv4()
    const params = {
        'client_id': tenant_lists[tenant]['storefront_client_id'],
        'hybris-tenant': tenant,
        'hybris-session-id': session_id
    }
    const res = await ApiRequest(anonymous_token_api, 'get', {}, {}, params)
    localStorage.setItem(anonymous_token_key, res['data']['access_token'])
    localStorage.setItem(anonymous_token_expires_in_key, now + res['data']['expires_in'] * 1000)

    localStorage.setItem(acess_token_key, res['data']['access_token'])
    return res['data']['access_token']
}
export default AccessToken
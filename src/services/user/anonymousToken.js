import axios from "axios";
import {v4 as uuidv4} from 'uuid'
import {getTenantLists} from '../../tenant.config'

// const API_URL = process.env.NODE_ENV === "development" ? process.env.REACT_APP_API_URL_STAGE :process.env.REACT_APP_API_URL_PRODUCTION ;
const API_URL =  process.env.REACT_APP_API_URL_STAGE
const _tenant = process.env.REACT_APP_TENANT_STAGE
const sessionId = uuidv4()

const getAnonymousToken = async (tenant = null) => {
  let tenantName
  let clientId = process.env.REACT_APP_STOREFRONT_CLIENT_ID_STAGE
  const tenantLists = getTenantLists()
  if(tenant === null){
     tenantName = _tenant
  }
  else{
    tenantName = tenant
    if(tenantLists[tenantName] !== undefined) clientId = tenantLists[tenantName]['storefront_client_id']
  }
  
  return await axios.get(API_URL + `/customerlogin/auth/anonymous/login`, 
        
        {
            params : {
              "tenant": tenantName,
              "session-id": sessionId,
              "client_id": clientId,
            }
        }
    )
    .then((response) => {
      if (response.data.access_token) {
        localStorage.setItem("anonymous_token", JSON.stringify(response.data.access_token));
      }
      return response.data.access_token;
    });

};

export default {
    getAnonymousToken
};
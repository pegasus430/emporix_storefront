import axios from "axios";
import {v4 as uuidv4} from 'uuid'
const API_URL = process.env.NODE_ENV === "development" ? process.env.REACT_APP_API_URL_STAGE :process.env.REACT_APP_API_URL_PRODUCTION ;
const tenant = process.env.REACT_APP_TENANT_STAGE
const session_id = uuidv4()

const getAnonymousToken = async () => {
  return await axios.get(API_URL + `/customerlogin/auth/anonymous/login`, 
    
        {
            params : {
            "tenant": tenant,
            "session-id": session_id,
            "client_id": process.env.REACT_APP_STOREFRONT_CLIENT_ID_STAGE,
            }
        }
    )
    .then((response) => {
      if (response.data.access_token) {
        console.log("anonymous token is " , response.data.access_token)
        localStorage.setItem("anonymous_token", JSON.stringify(response.data.access_token));

      }
      return response.data.access_token;
    });

};

export default {
    getAnonymousToken
};
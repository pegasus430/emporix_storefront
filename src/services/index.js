import axios from "axios";
import authHeader from "./user/auth-header";

const ApiRequest = (url, type, data) => {
    let Request;
    switch(type){
        case 'post':
            Request = axios.post; break;
        case 'get':
            Request = axios.get; break;
        default:
            Request =  axios.put; break;
    }
    // authHeader['X-Version'] = 'v2'
    console.log(authHeader())
    console.log('aaa')
    return Request(url, authHeader())
}


export default ApiRequest
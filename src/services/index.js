import axios from "axios";
import authHeader from "./user/auth-header";

const ApiRequest = (url, type, data, headers) => {
    let Request;
    switch(type){
        case 'post':
            Request = axios.post; break;
        case 'get':
            Request = axios.get; break;
        default:
            Request =  axios.put; break;
    }
    return Request(url, data, {headers})
}

export default ApiRequest
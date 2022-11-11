import axios from "axios";

const ApiRequest = async (url, type, data, headers, params={}) => {
    let Request;
    switch(type){
        case 'post':
            Request = axios.post; break;
        case 'get':
            Request = axios.get; 
            return await Request(url, {headers, params})
        case 'delete':
            Request = axios.delete;
            return await Request(url, {headers})
            break;
        default:
            Request =  axios.put; break;
    }
    return await Request(url, data, {headers})
}

export default ApiRequest
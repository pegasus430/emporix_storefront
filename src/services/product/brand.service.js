import ApiRequest from '../index'
import {accessTokenKey} from '../../constants/localstorage'
import {brand_api} from '../service.config'

const BrandService = () => {
    const getBrands = async () => {
        const access_token = localStorage.getItem(accessTokenKey)
        const headers = {
            "X-Version": 'v2',
            "Authorization": `Bearer ${access_token}`,
            "Content-Type": "application/json"
        }
        const res = await ApiRequest(brand_api(), 'get', {},headers, {})
        return res.data
    }
    return {
        getBrands
    }
}
export default BrandService()
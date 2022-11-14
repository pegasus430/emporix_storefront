import ApiRequest from '../index'
import {accessTokenKey} from '../../constants/localstorage'
import {brandApi} from '../service.config'

const BrandService = () => {
    const getBrands = async () => {
        const accessToken = localStorage.getItem(accessTokenKey)
        const headers = {
            "X-Version": 'v2',
            "Authorization": `Bearer ${accessToken}`,
            "Content-Type": "application/json"
        }
        const res = await ApiRequest(brandApi(), 'get', {},headers, {})
        return res.data
    }
    return {
        getBrands
    }
}
export default BrandService()
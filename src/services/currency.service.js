import ApiRequest from './index'
import {accessTokenKey} from 'constants/localstorage'
import {currency_api} from 'services/service.config'

const CurrencyService = () => {
    const getAllCurrencies = async () => {
        const access_token = localStorage.getItem(accessTokenKey)
        const headers = {
            "X-Version": 'v2',
            "Authorization": `Bearer ${access_token}`,
            "Accept-Language": "*",
            "Content-Type": "application/json"
        }
        const res = await ApiRequest(currency_api(), 'get', {},headers)
        return res
    }
    return {
        getAllCurrencies
    }
}

export default CurrencyService()
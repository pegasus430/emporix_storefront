import ApiRequest from '../index'
import {accessTokenKey} from '../../constants/localstorage'
import {price_api} from '../service.config'

const PriceService = () => {
    const getPriceWithProductIds = async (product_ids = []) => {
        const access_token = localStorage.getItem(accessTokenKey)
        const headers = {
            'X-Version': 'v2',
            'Authorization': `Bearer ${access_token}`,
            'Content-Type': 'application/json'
        }
        let data = {
            'items': []
        }
        product_ids.map((id) => {
            data['items'].push({
                'itemId': {
                    'itemType': 'PRODUCT',
                    'includesTax': false,
                    'id': id
                },
                "quantity": {
                    "quantity": 1
                }
            });
        })
        const res = await ApiRequest(price_api, 'post',data, headers)
        return res.data
    }
    return {
        getPriceWithProductIds
    }
}

export default PriceService()
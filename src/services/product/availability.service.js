import ApiRequest from '../index'
import {availability_api} from '../service.config'
import {service_site_name} from '../../constants/service'
import {acess_token_key} from '../../constants/localstorage'

const AvailabilityService = () => {
    const getAllAvailability = async () => {
        const access_token = localStorage.getItem(acess_token_key)
        const headers = {
            "X-Version": 'v2',
            "Authorization": `Bearer ${access_token}`,
            "Accept-Language": "en"
        }
        const params = {
            'site': service_site_name
        }

        const res = await ApiRequest(availability_api(), 'get', {},headers, params)
        let availability = {}
        res.data.map(row => {
            availability[`k${row.productId}`] = row
            return availability
        })

        return availability
    }
    return {
        getAllAvailability
    }
}

export default AvailabilityService()
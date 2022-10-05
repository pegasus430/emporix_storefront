import ApiRequest from '../index'
import ServiceAccessToken from '../user/serviceAccessToken'
import {availability_api} from '../service.config'
import {service_site_name} from '../../constants/service'

const AvailabilityService = () => {
    const getAllAvailability = async () => {
        const service_token = await ServiceAccessToken()
        const headers = {
            "X-Version": 'v2',
            "Authorization": `Bearer ${service_token}`,
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
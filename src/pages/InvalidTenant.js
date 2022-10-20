import { GridLayout, Center} from "../components/Utilities/common"
import {Heading4} from '../components/Utilities/typography'
import {TextInput} from '../components/Utilities/input'
import {LargePrimaryButton} from '../components/Utilities/button'
import { useState } from "react"
import {tenant_list_key} from '../constants/localstorage'
import {setTenantList} from '../redux/slices/pageReducer'
import { setTenant } from "../redux/slices/authReducer"
import { useDispatch } from "react-redux"
import {useNavigate} from 'react-router-dom'

const InvalidTenant = () => {
    const [userTenant, setUserTenant] = useState("")
    const [clientId, setClientID] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const saveTenantAndClientID = () => {
        let tenant_lists = localStorage.getItem(tenant_list_key)
        tenant_lists = (tenant_lists=== null?  {}: JSON.parse(tenant_lists))
        tenant_lists[userTenant] = {'tenant': userTenant, 'storefront_client_id': clientId}
        tenant_lists = JSON.stringify(tenant_lists)
        localStorage.setItem(tenant_list_key, tenant_lists)
        dispatch(setTenantList({'tenant': userTenant, 'storefront_client_id': clientId}))
        dispatch(setTenant(userTenant))
        navigate(`/${userTenant}`)
    }

    return (
        <GridLayout className="invalid-tenant-page">
            <GridLayout className="gap-20 place-content-center">
                <Heading4 className="">You need to enter a valid tenant name in the URL.</Heading4>
                <Center className="gap-3 w-1/3 m-auto">
                    <TextInput label="Tenant Name" value={userTenant} placeholder="Please put tenant name" action={setUserTenant}/>
                    <TextInput label="Client ID" value={clientId} placeholder="Please put client id" action={setClientID}/>
                    <LargePrimaryButton title="MAIN PAGE" className="mt-8" onClick={()=>saveTenantAndClientID()}/>
                </Center>
                    
            </GridLayout>
        </GridLayout>
    )
}
export default InvalidTenant
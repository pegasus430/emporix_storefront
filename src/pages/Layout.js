import React, { useState, useEffect} from "react"
import {useParams} from 'react-router-dom'
import Topbar from "../components/Header/topbar"
import Footer from "../components/Footer"
import Drawer from "../components/Utilities/drawer/drawer"
import Cart from "../components/Cart/cart"
import LayoutContext from "./context"
import {LoadingCircleProgress} from '../components/Utilities/progress'
import { GridLayout } from "../components/Utilities/common"
import { useDispatch, useSelector } from "react-redux"
import { categoryLoadingSelector, GetCategory, categoryDataSelector } from "../redux/slices/categoryReducer"
import {availabilityLoadingSelector, GetAvailability} from '../redux/slices/availabilityReducer'
import {putShopItems} from "../redux/slices/pageReducer"
import tenant_lists from "../tenant.config"
import InvalidTenant from './InvalidTenant'
import {tenantSelector, setTenant, accessTokenSelector, setAccessToken} from '../redux/slices/authReducer'
import AccessToken from '../services/user/accessToken'

import { useTheme } from "@emotion/react"

const Layout = ({children, title}) => {
    const [showCart, setShowCart] = useState(false)
    const loading = useSelector(categoryLoadingSelector)
    const availabilityLoading = useSelector(availabilityLoadingSelector)
    const dispatch = useDispatch()
    const categoryData = useSelector(categoryDataSelector)
    const {tenant} = useParams()
    const userTenant = useSelector(tenantSelector)
    const accessToken_ = useSelector(accessTokenSelector)

    useEffect(() => {
        dispatch(setTenant(tenant))
    }, []);

    useEffect(() => {
        const getAccessToken = async() => {
            if(userTenant === "") return
            const token = await AccessToken(userTenant)
            dispatch(setAccessToken(token))
        }
        getAccessToken()
    }, [userTenant])
    useEffect(()=> {
        const layout_init = async () => {
            if(accessToken_ === "") return
            dispatch(GetCategory())
            dispatch(GetAvailability())
            console.log('Layout initialized.')
        }
        layout_init()
	},[accessToken_])
    
    
    useEffect(() => {
        if(loading == false) dispatch(putShopItems(categoryData))
    }, [loading])
    
    return (
        <>
            {tenant_lists[tenant] !== undefined?
                <LayoutContext.Provider value={{showCart, setShowCart}}>
                    {loading || availabilityLoading? <LoadingCircleProgress />: 
                        <GridLayout className="min-w-[375px]">
                            <Topbar title={title} />
                            <Drawer>
                                <Cart />
                            </Drawer>
                            {children}
                            <Footer />
                        </GridLayout>
                    }
                </LayoutContext.Provider>:
                <InvalidTenant />
            }
        </> 
    )
}
export default Layout;
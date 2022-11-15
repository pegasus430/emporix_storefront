import React, { useState, useEffect} from "react"
import {useParams} from 'react-router-dom'
import Topbar from "components/Header/topbar"
import Footer from "components/Footer"
import Drawer from "components/Utilities/drawer/drawer"
import Cart from "components/Cart/cart"
import LayoutContext from "./context"
import {LoadingCircleProgress} from 'components/Utilities/progress'
import { GridLayout } from "components/Utilities/common"
import { useDispatch, useSelector } from "react-redux"
import { categoryLoadingSelector, GetCategory, categoryDataSelector } from "redux/slices/categoryReducer"
import {availabilityLoadingSelector, GetAvailability} from 'redux/slices/availabilityReducer'
import {putShopItems} from "redux/slices/pageReducer"
import {tenantListSelector} from 'redux/slices/pageReducer'
import InvalidTenant from './InvalidTenant'
import {tenantSelector, setTenant, sessionIdSelector, isLoggedInSelector, accessTokenSelector, setAccessToken} from '../redux/slices/authReducer'
import AccessToken from 'services/user/accessToken'
import {getCartAccount, cartAccountSelector, getCartList} from 'redux/slices/cartReducer'
import CurrencyService from "services/currency.service"

const Layout = ({children, title}) => {
    const [showCart, setShowCart] = useState(false)
    const loading = useSelector(categoryLoadingSelector)
    const availabilityLoading = useSelector(availabilityLoadingSelector)
    const dispatch = useDispatch()
    const categoryData = useSelector(categoryDataSelector)
    const {tenant} = useParams()
    const userTenant = useSelector(tenantSelector)
    const accessToken_ = useSelector(accessTokenSelector)
    const tenant_lists = useSelector(tenantListSelector)
    const isLoggedIn = useSelector(isLoggedInSelector)
    const sessionId = useSelector(sessionIdSelector)
    const cartAccount = useSelector(cartAccountSelector)

    // First set tenant name.
    useEffect(() => {
        dispatch(setTenant(tenant))
    }, []);
    // Get Access Token and Cart Account
    useEffect(() => {
        const getAccessToken = async() => {
            if(userTenant === "") return
            if(tenant_lists[tenant] === undefined) return
            const token = await AccessToken(userTenant)
            dispatch(setAccessToken(token))
            dispatch(getCartAccount(sessionId))
        }
        getAccessToken()
    }, [userTenant])
    // Get Cart List
    useEffect(()=> {
        if(Object.keys(cartAccount).length){
            dispatch(getCartList(cartAccount.id))
        }
    }, [cartAccount])
    
    // Get Categories and Resources.
    useEffect(()=> {
        const layout_init = async () => {
            if(accessToken_ === "" || !Object.keys(cartAccount).length) return
            // const currencies = await CurrencyService.getAllCurrencies()
            dispatch(GetCategory())
            dispatch(GetAvailability())
        }
        layout_init()
	},[accessToken_, cartAccount])
    
    // Ready.
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
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

const Layout = ({children, title}) => {
    const [showCart, setShowCart] = useState(false)
    const loading = useSelector(categoryLoadingSelector)
    const availabilityLoading = useSelector(availabilityLoadingSelector)
    const dispatch = useDispatch()
    const categoryData = useSelector(categoryDataSelector)
    const {tenant} = useParams()
    

    useEffect(()=> {
        const layout_init = async () => {
            dispatch(GetCategory())
            dispatch(GetAvailability())
        }
        layout_init()
        console.log('Layout initialized.')
	},[])
    
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
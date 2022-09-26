import React, { useState, useEffect} from "react";
import Topbar from "../components/Header/topbar";
import Footer from "../components/Footer";
import Drawer from "../components/Utilities/drawer/drawer";
import Cart from "../components/Cart/cart"
import LayoutContext from "./context";
import {LoadingCircleProgress} from '../components/Utilities/progress'
import { GridLayout } from "../components/Utilities/common";
import { useDispatch, useSelector } from "react-redux"
import { categoryLoadingSelector, GetCategory, categoryDataSelector } from "../redux/slices/categoryReducer";
import {putShopItems} from "../redux/slices/pageReducer"

const Layout = ({children, title}) => {
    const [showCart, setShowCart] = useState(false)

    const loading = useSelector(categoryLoadingSelector)
    const dispatch = useDispatch()
    const categoryData = useSelector(categoryDataSelector)
    useEffect(()=> {
        const layout_init = async () => {
            dispatch(GetCategory())
        }
        layout_init()
        console.log('Layout initialized.')
	},[])
    
    useEffect(() => {
        if(categoryData != []) dispatch(putShopItems(categoryData))
    }, [loading])
    
    return (
        <LayoutContext.Provider value={{showCart, setShowCart}}>
            {loading ? <LoadingCircleProgress />: 
                <GridLayout className="min-w-[375px]">
                    <Topbar title={title} />
                    <Drawer>
                        <Cart />
                    </Drawer>
                    {children}
                    <Footer />
                </GridLayout>
            }
        </LayoutContext.Provider>
    )
}
export default Layout;
import React, { useState, createContext, useContext, useEffect} from "react";
import Topbar from "../components/Header/topbar";
import Footer from "../components/Footer";
import Drawer from "../components/Utilities/drawer/drawer";
import Cart from "../components/Cart/cart"
import LayoutContext from "./context";
import {LoadingCircleProgress} from '../components/Utilities/progress'
import { GridLayout } from "../components/Utilities/common";
import PageInitialize from "../services/init.service";
import {product_list_page} from '../constants/page'

const Layout = ({children, title, page, data, actions}) => {
    const [showCart, setShowCart] = useState(false)
    const [loading, setLoading] = useState(true)
    const [menuList, setMenuList] = useState([])

    useEffect(()=> {
        const layout_init = async () => {
            const {category_menu_list, category_details} = await PageInitialize(page, data)
            setMenuList(category_menu_list)
            setLoading(false)
            console.log(category_details)
            switch(page){
                case product_list_page:
                    actions.setTitle(category_details.title)
                    actions.setCategoryMenuList(category_details.categories)
                    break;
                default:
                    break;
            }
        }
        layout_init()
	}, [])

    return (
        <LayoutContext.Provider value={{showCart, setShowCart, menuList}}>
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
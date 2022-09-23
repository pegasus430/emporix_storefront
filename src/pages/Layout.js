import React, { useState, createContext, useContext, useEffect} from "react";
import Topbar from "../components/Header/topbar";
import Footer from "../components/Footer";
import Drawer from "../components/Utilities/drawer/drawer";
import Cart from "../components/Cart/cart"
import LayoutContext from "./context";
import {LoadingCircleProgress} from '../components/Utilities/progress'
import CategoryService from '../services/product/category.service'
import { menu_list } from '../components/Header/menu.config'

const Layout = ({children, title}) => {
    const [showCart, setShowCart] = useState(false)
    const [loading, setLoading] = useState(true)
    const [menuList, setMenuList] = useState([])

    useEffect(()=> {
		const GetCategory = async () => {
            menu_list[0]['items'] = await CategoryService.getProductCategory()
            setMenuList(menu_list)
            console.log(menu_list)
            setLoading(false)
		}
		GetCategory()

	}, [])

    return (
        <LayoutContext.Provider value={{showCart, setShowCart, menuList}}>
            {loading ? <LoadingCircleProgress />: 
                <div className="min-w-[375px]">
                    <Topbar title={title} />
                    <Drawer>
                        <Cart />
                    </Drawer>
                    {children}
                    <Footer />
                </div>
            }
        </LayoutContext.Provider>
    )
}
export default Layout;
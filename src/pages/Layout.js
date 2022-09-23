import React, { useState, createContext, useContext} from "react";
import Topbar from "../components/Header/topbar";
import Footer from "../components/Footer";
import Drawer from "../components/Utilities/drawer/drawer";
import Cart from "../components/Cart/cart"
import CartContext from "./context";
import { GridLayout } from "../components/Utilities/common";

const Layout = ({children, title}) => {
    const [showCart, setShowCart] = useState(false)
    return (
        <CartContext.Provider value={{showCart, setShowCart}}>
            <GridLayout className="min-w-[375px] font-inter">
                <Topbar title={title} />
                <Drawer>
                    <Cart />
                </Drawer>
                    {children}
                <Footer />
            </GridLayout>
        </CartContext.Provider>
    )
}
export default Layout;
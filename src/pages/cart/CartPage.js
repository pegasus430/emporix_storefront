import React, { useState }  from 'react'
import './cart.css'
import CartActionBar from './CartActionBar'
import CartTable from './CartTable'
import CartMobileContent from './CartMobileContent'
import {CartActionPanel} from '../../components/Cart/cart'
import {useSelector } from 'react-redux'
import {cartListSelector} from '../../redux/slices/cartReducer'

const CartPage = () => {
    const cartList = useSelector(cartListSelector)
    const subtotalWithoutVat = cartList.length? cartList.map(cart => cart.product.price.originalValue * cart.quantity).reduce((a,b)=> a + b): 0
    
    return (
        <div className="cart-page-wrapper ">
            <div className="cart-page-content">
                <CartActionBar view={true}/>
                <div className="lg:block hidden">
                    <CartTable cartList={cartList}/>
                </div>

                <div className="lg:hidden">
                    <CartMobileContent cartList={cartList}/>
                </div>
    
                <div className="float-right">
                    <div className="cart-action-panel-wrapper ml-auto">
                        <CartActionPanel subtotalWithoutVat={subtotalWithoutVat} />
                    </div>
                </div>   
                <CartActionBar />
            </div>
        </div>
    )
}
export default CartPage
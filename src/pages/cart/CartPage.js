import React, { useState }  from 'react'
import './cart.css'
import CartActionBar from './CartActionBar'
import CartTable from './CartTable'
import CartMobileContent from './CartMobileContent'
import {CartActionPanel} from '../../components/Cart/cart'

const CartPage = () => {
    let CartProductList = localStorage.getItem('CartProductList')

    CartProductList = CartProductList == null? {}: JSON.parse(CartProductList)

    const products = Object.values(CartProductList)
    const subtotalWithoutVat = products.length? products.map(product => product.price * product.buy_count).reduce((a,b)=> a + b): 0
    
    return (
        <div className="cart-page-wrapper ">
            <div className="cart-page-content">
                <CartActionBar view={true}/>
                <div className="lg:block hidden">
                    <CartTable products={products}/>
                </div>

                <div className="lg:hidden">
                    <CartMobileContent products={products}/>
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
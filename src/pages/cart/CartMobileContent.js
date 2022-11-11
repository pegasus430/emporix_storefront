import React, { useState }  from 'react'
import {GridLayout} from '../../components/Utilities/common'
import {CartProductCaption, CartMobileItem} from '../../components/Cart/cart'
import './cart.css'


const CartMobileContent = ({cartList}) => {
    return (
        <GridLayout className="gap-6">
            <CartProductCaption />
            {cartList.map((cart,index) => (
                <CartMobileItem cart={cart} key={index} />
            ))}
        </GridLayout>
    )
}

export default CartMobileContent
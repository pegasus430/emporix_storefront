import React, { useState }  from 'react'
import {GridLayout} from '../../components/Utilities/common'
import {CartProductCaption, CartMobileItem} from '../../components/Cart/cart'
import './cart.css'


const CartMobileContent = ({products}) => {
    return (
        <GridLayout className="gap-6">
            <CartProductCaption />
            {products.map((product,index) => (
                <CartMobileItem product={product} key={index} />
            ))}
        </GridLayout>
    )
}

export default CartMobileContent
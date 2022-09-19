import React, { useState }  from 'react'
import {useParams} from 'react-router-dom'
import CartPage from './CartPage'
import PageTemplate from "../pageTemplate";

const Cart = () => {
    const title = `Shopping Cart`
    return (
        <PageTemplate title={title}>
            <CartPage />
        </PageTemplate>
    )
}
export default Cart
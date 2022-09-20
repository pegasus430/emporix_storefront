import React, { useState }  from 'react'
import {useParams} from 'react-router-dom'
import CartPage from './CartPage'
import Layout from "../Layout";

const Cart = () => {
    const title = `Shopping Cart`
    return (
        <Layout title={title}>
            <CartPage />
        </Layout>
    )
}
export default Cart
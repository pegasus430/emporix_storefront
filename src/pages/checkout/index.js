import React, { useState }  from 'react'
import {useParams} from 'react-router-dom'
import CheckoutPage from './CheckoutPage'
import Layout from "../Layout";

const Checkout = () => {
    const title = `Checkout`
    return (
        <Layout title={title}>
            <CheckoutPage />
        </Layout>
    )
}
export default Checkout
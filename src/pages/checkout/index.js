import React, { useState }  from 'react'
import {useParams} from 'react-router-dom'
import CheckoutPage from './CheckoutPage'
import PageTemplate from "../pageTemplate";

const Checkout = () => {
    const title = `Checkout`
    return (
        <PageTemplate title={title}>
            <CheckoutPage />
        </PageTemplate>
    )
}
export default Checkout
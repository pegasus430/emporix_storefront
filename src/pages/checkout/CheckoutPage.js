import React, { useState }  from 'react'
import { Container } from '../../components/Utilities/common'
import CheckoutCotent from './CheckoutContent'
import CheckoutActionPanel from './CheckoutActionPanel'

import './checkout.css'

const CheckoutPage = () => {
    return (
        <div className="checkout-page-wrapper ">
            <div className="checkout-page-content">
                <Container className="gap-12">
                    <CheckoutCotent />
                    <CheckoutActionPanel />
                </Container>
            </div>
        </div>
    )
}

export default CheckoutPage

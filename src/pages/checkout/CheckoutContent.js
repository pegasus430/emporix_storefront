import React, { useState }  from 'react'
import {GridLayout} from '../../components/Utilities/common'
import {ProgressBar, ProgressBarItem} from '../../components/Utilities/progressbar'
import  ShippingMethod  from '../../components/Checkout/shiping_method'
import './checkout.css'

const CheckoutCotent = () => {
    return (
        <div className="checkout-content-wrapper">
            <GridLayout className="">
                <ProgressBar active="" className="">
                    <ProgressBarItem status="shipping" title="Shipping"/>
                    <ProgressBarItem status="payment" title="Payment"/>
                    <ProgressBarItem status="review_order" title="Review Order"/>
                </ProgressBar>
            </GridLayout>

            <ShippingMethod active = {false} shippingmode="Standard Shipping" date="Monday, June 6 - Tuesday June 7" price = "Free" />
            <ShippingMethod active = {false} shippingmode="Freight Carrier: LTL" date="Friday , June 3" price = "€ 124.90" />
            <ShippingMethod active = {false} shippingmode="Freight Carrier : FTL" date="Friday , June 3" price = "€ 349.90" />

        </div>
    )
}

export default CheckoutCotent
import React, { useState }  from 'react'
import {GridLayout} from '../../components/Utilities/common'
import {ProgressBar, ProgressBarItem} from '../../components/Utilities/progressbar'
import './checkout.css'

const CheckoutCotent = () => {
    return (
        <div className="checkout-content-wrapper">
            <GridLayout className="">
                <ProgressBar active="shipping" className="">
                    <ProgressBarItem status="shipping" title="Shipping"/>
                    <ProgressBarItem status="payment" title="Payment"/>
                    <ProgressBarItem status="review_order" title="Review Order"/>
                </ProgressBar>
            </GridLayout>
        </div>
    )
}

export default CheckoutCotent
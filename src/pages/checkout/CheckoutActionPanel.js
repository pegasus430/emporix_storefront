import React, { useState }  from 'react'
import {CartActionPanel} from '../../components/Cart/cart'
import { LargePrimaryButton } from '../../components/Utilities/button'
import { GridLayout, DesktopMDContainer, MobileMDContainer} from '../../components/Utilities/common'
import {cartProductKey} from '../../constants/localstorage'
import './checkout.css'

const ShippingAction = ({action}) => {
    return (
        <>
            <DesktopMDContainer>
                <LargePrimaryButton className = "md:block hidden" title="GO TO PAYMENT" onClick={action}/>
            </DesktopMDContainer>
                    
            <MobileMDContainer>
                <LargePrimaryButton title="CHECK OUT" onClick={action}/>
            </MobileMDContainer>
        </>
    )
}

const PaymentAction = ({action}) => {
    return (
        <>
            <DesktopMDContainer>
                <LargePrimaryButton className = "md:block hidden" title="REVIEW ORDER" onClick={action}/>
            </DesktopMDContainer>
                    
            <MobileMDContainer>
                <LargePrimaryButton title="CHECK OUT" onClick={action}/>
            </MobileMDContainer>
        </>
    )
}

const ReviewOrderAction = ({action}) => {
    return (
        <>
            <DesktopMDContainer>
                <LargePrimaryButton className = "md:block hidden" title="CONFIRM AND PAY" onClick={action}/>
            </DesktopMDContainer>
                    
            <MobileMDContainer>
                <LargePrimaryButton title="CONFIRM AND PAY" onClick={action}/>
            </MobileMDContainer>
        </>
    )
}


const CheckoutActionPanel = ({setStatus,status, setFinal}) => {
    let CartProductList = localStorage.getItem(cartProductKey)
    CartProductList = CartProductList === null? {}: JSON.parse(CartProductList)
    const products = Object.values(CartProductList)
    const subtotalWithoutVat = products.length? products.map(product => product.price * product.buy_count).reduce((a,b)=> a + b): 0
    const handlePayment = () => {
        setStatus("payment")
    }
    const handleReview = () => {
        setStatus('review_order')
    }
    const handleViewOrder = () => {
        setFinal(true)
    }
    return (
        <div className="checkout-action-panel-wrapper">
            <GridLayout className="gap-6">
                <CartActionPanel subtotalWithoutVat = {subtotalWithoutVat} action={false}/>
                {status ==="shipping"? <ShippingAction action={handlePayment}/>: ""}
                {status ==="payment"? <PaymentAction action={handleReview}/>: ""}
                {status ==="review_order"? <ReviewOrderAction action={handleViewOrder}/>: ""}
            </GridLayout>
                
        </div>
    )
}

export default CheckoutActionPanel
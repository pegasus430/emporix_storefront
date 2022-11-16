import React from 'react'
import {useSelector } from 'react-redux'
import {GridLayout, LayoutBetween, DesktopMDContainer,MobileXLContainer, DesktopXLContainer,  MobileMDContainer, DesktopLGContainer, MobileLGContainer} from '../../components/Utilities/common'
import {ProgressBar, ProgressBarItem} from '../../components/Utilities/progressbar'
import  ShippingMethod  from '../../components/Checkout/shiping_method'
import  PaymentMethodItem  from '../../components/Checkout/PaymentMethodItem'
import  PaymentInvoiceItem  from '../../components/Checkout/PaymentInvoiceItem'
import {Heading3, Heading4, Heading5, TextRegular3, TextRegular4, TextBold6, Underline, TextRegular1, TextBold5, TextBold1, TextBold3,TextBold4, TextRegular} from '../../components/Utilities/typography'
import {DropdownWithLabel} from '../../components/Utilities/dropdown'
import { RadioGroup } from '../../components/Utilities/radio'
import './checkout.css'
import Checkbox from '../../components/Utilities/checkbox'
import { Container } from '../../components/Utilities/common'
import { cartListSelector } from 'redux/slices/cartReducer'
import { CurrencyBeforeValue } from 'components/Utilities/common'

const ShipingContent = () => {
    const locations = [
        {value: "Munich Office", label: "Munich Office"},
        {value: "Head Office", label: "Head Office"}
    ]
    return (
        <>
            <GridLayout className="gap-6">
                <GridLayout className="gap-4">
                    <DesktopMDContainer>
                        <LayoutBetween className="items-center">
                            <Heading3 >Shipping Details</Heading3>
                            <TextRegular3><Underline>Ship to multiple addresses</Underline></TextRegular3>
                        </LayoutBetween>
                    </DesktopMDContainer>
                    <MobileMDContainer>
                        <GridLayout className="gap-6">
                            <Heading3 >Shipping Details</Heading3>
                            <TextRegular3><Underline>Ship to multiple addresses</Underline></TextRegular3>
                        </GridLayout>
                            
                    </MobileMDContainer>
                </GridLayout>  
            
                <GridLayout className="gap-6">
                    <DropdownWithLabel label="Location" options={locations}/>
                    <GridLayout className="location-info">
                        <TextRegular1>Barer Str. 27</TextRegular1>
                        <TextRegular1>80333 München</TextRegular1>
                        <TextRegular1>Germany</TextRegular1>
                    </GridLayout>
                </GridLayout>
            </GridLayout>
            <GridLayout className="gap-6">
                <Heading3>Shipping Method</Heading3>
                <MobileMDContainer>
                    <TextRegular3><Underline>Ship to multiple addresses</Underline></TextRegular3>
                </MobileMDContainer>
                <RadioGroup active="radio1">
                    <ShippingMethod radioKey="radio1" shippingmode="Standard Shipping" date="Monday, June 6 - Tuesday June 7" price = "Free" />
                    <ShippingMethod radioKey="radio2" shippingmode="Freight Carrier: LTL" date="Friday , June 3" price = { CurrencyBeforeValue('124.90') } />
                    <ShippingMethod radioKey="radio3" shippingmode="Freight Carrier : FTL" date="Friday , June 3" price = { CurrencyBeforeValue('349.90') } />
                </RadioGroup>
            </GridLayout>
        </>
    )
}

const PaymentContent = () => {
    const address = [
        {value: "Munich Office", label: "Munich Office"},
        {value: "Head Office", label: "Head Office"}
    ]

    return (
        <>
            <GridLayout className="payment-method-wrapper gap-6"> 
                <TextBold1>Payment Methods</TextBold1>
                <RadioGroup active="radio1">
                    <GridLayout className="gap-4">
                        <PaymentInvoiceItem radioKey="radio1"/>
                        <PaymentMethodItem radioKey="radio2" title="Trevipay"/>
                        <PaymentMethodItem radioKey="radio3" title="Pre Payment (Bank Transfer)"/>
                        <PaymentMethodItem radioKey="radio4" title="Credit / Debit Card"/>
                    </GridLayout>
                    
                </RadioGroup>
            </GridLayout>
            <GridLayout className="billing-details-wrapper gap-6"> 
                <TextBold1>Billing Details</TextBold1>
                <Checkbox title="My billing address and shipping address are the same"/>
                <GridLayout className="address-wrapper gap-6">
                    <div className="address-dropdown-wrapper">
                        <DropdownWithLabel label="Address" options={address} placeholder="Please select delivery address"/>
                    
                    </div>
                        
                    <GridLayout className="address-info">
                        <TextRegular1>Name Lastname</TextRegular1>
                        <TextRegular1>Address Line 1</TextRegular1>
                        <TextRegular1>Line 2</TextRegular1>
                        <TextRegular1>Postcode – City</TextRegular1>
                        <TextRegular1>Country</TextRegular1>
                    </GridLayout>
                </GridLayout>
            </GridLayout>
        </>
    )
}

const BillingContent = () => {
    return (
        <GridLayout>
            <TextRegular1>Name Lastname</TextRegular1>
            <TextRegular1>Address Line 1</TextRegular1>
            <TextRegular1>Line 2</TextRegular1>
            <TextRegular1>Postcode – City</TextRegular1>
            <TextRegular1>Country</TextRegular1>
        </GridLayout>
    )
}
const ShipmentAddressContent = () => {
    return (
        <GridLayout>
            <div className="mb-3">
                <Heading4>Shipment 1 of 2</Heading4>
            </div>
            <TextBold3>4 items</TextBold3>
            <TextRegular1>Name Lastname</TextRegular1>
            <TextRegular1>Address Line 1</TextRegular1>
            <TextRegular1>Line 2</TextRegular1>
            <TextRegular1>Postcode – City</TextRegular1>
            <TextRegular1>Country</TextRegular1>
        </GridLayout>
    )
}
const ShipmentDeliveryContent = () => {
    return (
        <GridLayout className="gap-6 !h-18">
            <div>
                <div className="mb-6">
                    <TextBold3>Estimated Delivery: 06.11.2022</TextBold3>
                </div>
                    
                <TextRegular>Delivery Method: Priority</TextRegular>
            </div>
        </GridLayout>
    )
}
const ShipmentContent = () => {
    return (
        <GridLayout className="gap-6">
            <DesktopXLContainer>
                <Container className="gap-12">
                    <ShipmentAddressContent />
                    <ShipmentDeliveryContent />
                </Container>
            </DesktopXLContainer>

            <MobileXLContainer>
                <GridLayout className="gap-6">
                    <ShipmentAddressContent />
                    <ShipmentDeliveryContent />
                </GridLayout>
            </MobileXLContainer>

            <DesktopXLContainer>
                <Container className="gap-12">
                    <ShipmentAddressContent />
                    <ShipmentDeliveryContent />
                </Container>
            </DesktopXLContainer>

            <MobileXLContainer>
                <GridLayout className="gap-6">
                    <ShipmentAddressContent />
                    <ShipmentDeliveryContent />
                </GridLayout>
            </MobileXLContainer>

        </GridLayout>
    )
}
const ProductContent = () => {
    const cartList = useSelector(cartListSelector)
    
    const products = cartList.map(cart => {
        return {
            id: cart.product.id,
            name: cart.product.name,
            sku: cart.product.code,
            estimated_delivery: '23.05.2022',
            quantity: cart.quantity,
            src: cart.product.media.length > 0 ? cart.product.media[0]['url']: '',
            price: cart.product.price.totalValue
        }
    })
    
    return (
        <GridLayout className="gap-6">
            <GridLayout className="gap-6 border-grey-bottom pb-6">
                <Heading4>Shipment 1 of 2</Heading4>
                {products.map((product,index) => (
                    <Container key={index} className="gap-6 w-full">
                            <img src={product.src} className={"checkout-product-image"}/>

                            <GridLayout className="lg:w-[650px] md:w-[450px] w-[400px] ">
                                <TextBold5>{product.name}</TextBold5>
                                <Container>
                                    <TextBold6>SKU:</TextBold6>
                                    <TextRegular4>&nbsp;{product.sku}</TextRegular4>
                                </Container>
                                <LayoutBetween>
                                    <Container>
                                        <TextBold6>Quantity:</TextBold6>
                                        <TextRegular4>&nbsp;{product.quantity}</TextRegular4>
                                    </Container>
                                    <Heading5>{ CurrencyBeforeValue(product.price) }</Heading5>
                                </LayoutBetween>
                            </GridLayout>

                    </Container>
                    
                ))}
            </GridLayout>
            <GridLayout className="gap-6 border-grey-bottom pb-6">
                <Heading4>Shipment 2 of 2</Heading4>
                {products.map((product,index) => (
                    <Container key={index} className="gap-6 w-full">
                            <img src={product.src} className={"checkout-product-image"}/>

                            <GridLayout className="lg:w-[650px] md:w-[450px] w-[400px] ">
                                <TextBold5>{product.name}</TextBold5>
                                <Container>
                                    <TextBold6>SKU:</TextBold6>
                                    <TextRegular4>&nbsp;{product.sku}</TextRegular4>
                                </Container>
                                <LayoutBetween>
                                    <Container>
                                        <TextBold6>Quantity::</TextBold6>
                                        <TextRegular4>&nbsp;{product.quantity}</TextRegular4>
                                    </Container>
                                    <Heading5>{ CurrencyBeforeValue(product.price) }</Heading5>
                                </LayoutBetween>
                            </GridLayout>

                    </Container>
                    
                ))}
            </GridLayout>
        </GridLayout>
    )
}
const ReviewOrderContent = () => {

    
    return (
        <>
            <DesktopLGContainer>
                <LayoutBetween className="billing-information pb-12 border-grey-bottom">
                    <Container className="gap-12">
                        <div className="property-wrapper">
                            <TextBold3>Billing Information</TextBold3>
                        </div>
                        <BillingContent /> 
                    </Container>
                    <TextBold4><Underline>Edit</Underline></TextBold4>
                </LayoutBetween>
            </DesktopLGContainer>

            <MobileLGContainer>
                <GridLayout className="billing-information gap-6 pb-12 border-grey-bottom">
                    <LayoutBetween className="gap-12">
                        <div className="property-wrapper">
                            <TextBold3>Billing Information</TextBold3>
                        </div>
                        <TextBold4><Underline>Edit</Underline></TextBold4>
                        
                    </LayoutBetween>
                    <BillingContent /> 
                </GridLayout>
            </MobileLGContainer>
            
            <MobileLGContainer>
                <GridLayout className="gap-6 pb-12 border-grey-bottom">

                    <LayoutBetween className="gap-12">
                        <div className="property-wrapper">
                            <TextBold3>Shipping Information</TextBold3>
                        </div>
                        <TextBold4><Underline>Edit</Underline></TextBold4>
                    </LayoutBetween>
                    <ShipmentContent />
                    
                </GridLayout>
            </MobileLGContainer>

            <DesktopLGContainer>
                <LayoutBetween className="pb-12 border-grey-bottom">

                <Container className="gap-12">
                    <div className="property-wrapper">
                        <TextBold3>Shipping Information</TextBold3>
                    </div>
                    <ShipmentContent />
                </Container>
                <TextBold4><Underline>Edit</Underline></TextBold4>
                </LayoutBetween>
            </DesktopLGContainer>
                
            
            <DesktopLGContainer>
                <LayoutBetween className=" pb-12 border-grey-bottom">
                    <Container className="gap-12">
                        <div className="property-wrapper">
                            <TextBold3>Payment Method</TextBold3>
                        </div>
                        <GridLayout>
                            <TextBold3>Invoice</TextBold3>
                            <TextRegular>PO Number: 970465640469</TextRegular>
                        </GridLayout>
                    </Container>
                    <TextBold4><Underline>Edit</Underline></TextBold4>
                </LayoutBetween>
            </DesktopLGContainer>

            <MobileLGContainer>
                <GridLayout className="gap-2 pb-12 border-grey-bottom">
                    <LayoutBetween className="gap-12">
                        <div className="property-wrapper">
                            <TextBold3>Payment Method</TextBold3>
                        </div>
                        <TextBold4><Underline>Edit</Underline></TextBold4>
                    </LayoutBetween>
                    
                    <GridLayout>
                        <TextBold3>Invoice</TextBold3>
                        <TextRegular>PO Number: 970465640469</TextRegular>
                    </GridLayout>
                </GridLayout>
            </MobileLGContainer>
                
            <DesktopLGContainer>
                <LayoutBetween className=" pb-12 border-grey-bottom">
                    <Container className="gap-12">
                        <div className="property-wrapper">
                            <TextBold3>Your Products</TextBold3>
                        </div>
                        <ProductContent />
                    </Container>
                    <TextBold4><Underline>Edit</Underline></TextBold4>
                </LayoutBetween>
            </DesktopLGContainer>
            
            <MobileLGContainer>
                <GridLayout className="gap-6 pb-12 border-grey-bottom">
                    <LayoutBetween className="gap-12">
                        <div className="property-wrapper">
                            <TextBold3>Your Products</TextBold3>
                        </div>
                        <TextBold4><Underline>Edit</Underline></TextBold4>
                    </LayoutBetween>
                    <ProductContent />
                    
                </GridLayout>
            </MobileLGContainer>

        </>
    )
}

const CheckoutCotent = ({status}) => {
    
    return (
        <div className="checkout-content-wrapper">
            <GridLayout className="gap-12">
                <ProgressBar active={status} className="">
                    <ProgressBarItem status="shipping" title="Shipping"/>
                    <ProgressBarItem status="payment" title="Payment"/>
                    <ProgressBarItem status="review_order" title="Review Order"/>
                </ProgressBar>
                {status == "shipping"? <ShipingContent />: status == "payment" ? <PaymentContent /> : <ReviewOrderContent />}
                
            </GridLayout>
        </div>
    )
}

export default CheckoutCotent
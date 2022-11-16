import React, { useState } from 'react'
import './cart.css'
import '../index.css'
import { Link } from 'react-router-dom'
import {LayoutBetween, GridLayout} from 'components/Utilities/common'
import Quantity from 'components/Utilities/quantity/quantity'
import {cartUrl, checkoutUrl} from 'services/service.config'
import Badge from '@mui/material/Badge';
import {useDispatch, useSelector } from 'react-redux'
import {deleteCart, cartListSelector, cartAccountSelector} from 'redux/slices/cartReducer'
import { CurrencyBeforeValue, CurrencyAfterValue } from 'components/Utilities/common'

const CartProductContent = ({children}) => {
    return (
        <div className="cart-product-content">
            {children}
        </div>
    )
}
export const CartProductCaption = () => {
    return (
        <div className="h-10 border-bottom cart-product-caption">
            Products
        </div>
    )
}
export const CartProductImage = ({src, className}) => {
    return (
        <img src={src} className={"cart-product-image " + (className? className: "")}/>
    )
}
export const PriceExcludeVAT = ({price, caption}) => {
    return (
        <div className="price-exclude-vat">
            <div className="">{ CurrencyBeforeValue(price) }</div>
            <div className="caption">{caption==undefined? 'ex. VAT': caption}</div>
        </div>
    )
}

export const PriceExcludeVAT1 = ({price, caption}) => {
    return (
        <div className="price-exclude-vat1">
            <div className="price">{ CurrencyBeforeValue(price) }</div>
            <div className="caption">{caption==undefined? 'ex. VAT': caption}</div>
        </div>
    )
}

export const CartMobileItem = ({cart}) => {
   return (
        <GridLayout className="gap-4">
            <div className="flex gap-6">
               
                <div className="w-[56px]">
                    <CartProductImage className="cart-product-image-mobile" src={cart.product.src} />
                </div>
                <div className="flex-auto gap-4" >
                    <LayoutBetween>
                        <GridLayout className="gap-[10px]">
                            <div className="cart-product-name">{cart.product.name}</div>
                            <div className="cart-product-sku-wrapper">SKU:&nbsp;<span className="cart-product-sku">{cart.product.code}</span></div>
                        </GridLayout>
                        <div>
                            <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.8956 0.818182L4.94886 4.28835H5.02841L7.09162 0.818182H9.52273L6.41548 5.90909L9.59233 11H7.11648L5.02841 7.52486H4.94886L2.8608 11H0.394886L3.58168 5.90909L0.454545 0.818182H2.8956Z" fill="black"/>
                                <path d="M-0.0078125 13.7841H9.99503V14.7386H-0.0078125V13.7841Z" fill="black"/>
                            </svg>
                        </div>
                    </LayoutBetween>
                    <GridLayout className="gap-2 mt-4">
                        <span className="cart-product-mobile-info-wrapper"><span className="font-bold">Unit Price: </span>{ CurrencyAfterValue(cart.product.price.effectiveValue) }</span>
                        <span className="cart-product-mobile-info-wrapper"><span className="font-bold">Subtotal: : </span>{ CurrencyAfterValue(cart.product.price.effectiveValue * cart.quantity) }</span>
                        <span className="cart-product-mobile-info-wrapper"><span className="font-bold">Discount: </span>{ CurrencyAfterValue(0.00) }</span>
                        <span className="cart-product-mobile-info-wrapper"><span className="font-bold">VAT: </span>{ CurrencyAfterValue(Math.trunc(cart.product.price.originalValue * 0.2 * 100) / 100) }</span>
                    </GridLayout>
                </div>
            </div>
            <div className="cart-product-stock-wrapper flex">
                <span className={"cart-product-stock w-[80px] " + (cart.product.stock == "Low" ? "text-[#FFA800]" : cart.product.stock == "In" ? "text-[#4BCB67] " : "text-[#F30303]")}>
                    {cart.product.stock} Stock
                </span>
                <span className="">
                    Est. delivery time: 3 days
                </span>
            </div>
            <LayoutBetween className="items-center">
                <div className="w-[67px]">
                    <Quantity value={cart.quantity}/> 
                </div>
                <div className="!font-bold">
                    <PriceExcludeVAT1 price={Math.trunc(cart.quantity * cart.product.price.originalValue * 1.2 * 100) / 100} caption='incl. VAT'/>
                </div>
                    
            </LayoutBetween>
        </GridLayout>
   ) 
}

const CartProductImageAndQuantitiy = ({image_url, count}) => {
    return (
        <div className="cart-product-image-and-quantitiy">
            <GridLayout className="gap-4">
                <CartProductImage src={image_url}/>
                <Quantity value={count}/>
            </GridLayout>
        </div>
    )
}
export const CartProductBasicInfo = ({cart}) => {
    return (
        <div className="cart-product-basic-info">
            <GridLayout className="gap-2">
                <div className="cart-product-name">{cart.product.name}</div>
                <div className="cart-product-sku-wrapper">SKU:&nbsp;<span className="cart-product-sku">{cart.product.code}</span></div>
                <div className="cart-product-stock-wrapper">
                    <span className={"cart-product-stock " + (cart.product.stock == "Low" ? "text-[#FFA800]" : cart.product.stock == "In" ? "text-[#4BCB67] " : "text-[#F30303]")}>
                        {cart.product.stock} Stock
                    </span>
                    <span className="cart-product-lead-time">
                        Lead Time: 1 week
                    </span>
                </div>
                    
            </GridLayout>
            
        </div>
    )
}
const CartProductPriceExcludeVat = ({price}) => {
    return (
        <div className="text-right">
            <GridLayout>
                <div className="cart-product-price-except-vat"> { CurrencyBeforeValue(price) }</div>
                <div >exclu. VAT</div>
            </GridLayout>
           
        </div>
    )
}
const CartProductInfo = ({cart}) => {
    let listPrice, price
    listPrice = Math.trunc(cart.product.price.totalValue * 100) / 100
    price = listPrice
    if(cart.product.price.priceModel !== undefined && cart.product.price.priceModel.includesTax === false){
        price = Math.trunc(price * 10000 / (100 + cart.product.price.tax.taxRate)) / 100
    }
    return (
        <div className="cart-product-info">
            <GridLayout className="gap-[22px]">
                <CartProductBasicInfo cart={cart}/>
                <CartProductPriceExcludeVat price={price}/>
            </GridLayout>
            
        </div>
    )
}
const CartProductItem = ({cart, onMouseEnter,onMouseLeave }) => {
   
    return (
        <div className="cart-product-item p-2" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <CartProductImageAndQuantitiy image_url={cart.product.src} count={cart.quantity}/>
            <CartProductInfo cart={cart}/>
        </div>
    )
}
const CartProductWrapper = ({cart}) => {
    const [isHover, setIsHover] = useState(false)
    const dispatch = useDispatch()
    const cartAccount = useSelector(cartAccountSelector)
    const removeCart = (e, cartItemId) => {
        if ((e.target).nodeName === "SPAN" && (e.target).outerText === "X") {
          dispatch(deleteCart(cartAccount.id, cartItemId))
        }
      };
    
    return (
        <>
            {isHover?
                <div className="hover:shadow-inner" onMouseLeave={()=> setIsHover(false)} onMouseEnter={()=> setIsHover(true)}>
                    <Badge badgeContent='X' color="warning" onClick={(e) => removeCart(e,cart.id)}>
                        <CartProductItem cart={cart} />
                  </Badge>
                </div> :
                <CartProductItem cart={cart} onMouseEnter={()=> setIsHover(true)} onMouseLeave={()=> setIsHover(false)}/>
            }
            
        </>
    )
}
const CartActionRow = ({children}) => {
    return (
        <div className="cart-action-row">
            {children}
        </div>
    )
}
const CartSubTotalExcludeVat = ({value}) => {
    return (
        <>
            <span className="font-semibold">Subtotal without VAT</span>
            <span className="font-semibold">{ CurrencyBeforeValue(value) }</span>
        </>
    )
}
const CartSubTotalIncludeVat = ({value}) => {
    return (
        <>
            <span className="font-semibold">Subtotal with VAT</span>
            <span className="font-semibold">{ CurrencyBeforeValue(Math.trunc(value * 1.2 * 100) / 100) }</span>
        </>
    )
}
const CartVat0 = () => {
    return (
        <>
            <span>VAT 0% of { CurrencyBeforeValue('00.00') }</span>
            <span>{ CurrencyBeforeValue('00.00') }</span>
        </>
    )
}
const CartVat20 = ({value}) => {
    return (
        <>
            <span>VAT 20% of { CurrencyBeforeValue(value) }</span>
            <span> { CurrencyBeforeValue(Math.trunc(value * 0.2 * 100) / 100) }</span>
        </>
    )
}
const CartShipingCost = () => {
    return (
        <>
            <span>Shipping Costs</span>
            <span>Free</span>
        </>
    )
}
const CartTotalPrice = ({value}) => {
    return (
        <>
            <span className="font-bold ">Total Price</span>
            <span className="font-bold">{ CurrencyBeforeValue(Math.trunc(value * 1.2 * 100) / 100) }</span>
        </>
    )
}
const CartGoCheckout = () => {
   
    return (
        <Link to={checkoutUrl()} className="w-full">
            <button className="cart-go-checkout-btn">GO TO CHECKOUT</button>
        </Link>
    )
}
const CartOpenCart = () => {
    return (
        <Link to={cartUrl()} className="w-full">
            <button className="cart-open-cart-btn">
                OPEN CART
            </button>
        </Link>
    )
}
export const CartActionPanel = ({subtotalWithoutVat, action}) => {
    return (
        <div className="cart-action-panel">
            <GridLayout className="gap-4">
                <CartActionRow>
                    <LayoutBetween>
                        <CartSubTotalExcludeVat value={subtotalWithoutVat}/>
                    </LayoutBetween>
                </CartActionRow>

                <CartActionRow>
                    <LayoutBetween>
                        <CartVat0 />
                    </LayoutBetween>
                    <LayoutBetween>
                        <CartVat20 value={subtotalWithoutVat}/>
                    </LayoutBetween>
                    <LayoutBetween>
                        <CartSubTotalIncludeVat value={subtotalWithoutVat}/>
                    </LayoutBetween>
                </CartActionRow>

                <CartActionRow>
                    <LayoutBetween>
                        <CartShipingCost />
                    </LayoutBetween>
                </CartActionRow>
                {action == undefined || action == true ? 
                    <CartActionRow>
                        <div className="cart-total-price-wrapper">
                            <LayoutBetween>
                                <CartTotalPrice value={subtotalWithoutVat}/>
                            </LayoutBetween>
                        </div>
                            
                        <CartOpenCart />
                        <CartGoCheckout />
                    </CartActionRow>:
                    <></>
                }
                
            </GridLayout>
        </div>
    )
}
const Cart = () => {
    
    const cartList = useSelector(cartListSelector)
    const subtotalWithoutVat = cartList.length? cartList.map(cart => cart.product.price.originalValue * cart.quantity).reduce((a,b)=> a + b): 0
    return (
        <>
            <LayoutBetween>
                <span className="cart-caption-font">My Cart</span>
                <span className="cart-caption-font">{cartList.length} items</span>
            </LayoutBetween>
            <CartProductContent>
                <GridLayout className="gap-4">
                    {cartList.map((cart, index) => (
                        <CartProductWrapper cart={cart} key={index} />
                    ))}
                </GridLayout>
            </CartProductContent>
            <CartActionPanel subtotalWithoutVat={subtotalWithoutVat}/>
        </>
    )
}
export default Cart
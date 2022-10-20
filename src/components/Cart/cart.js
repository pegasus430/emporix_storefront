import React, { useState } from 'react'
import './cart.css'
import '../index.css'
import { Link } from 'react-router-dom'
import {LayoutBetween, GridLayout} from '../Utilities/common'
import Quantity from '../Utilities/quantity/quantity'
import {cart_url, checkout_url} from '../../services/service.config'
import Badge from '@mui/material/Badge';
import { useDispatch, useSelector } from 'react-redux'
import {deleteCart, cartProductSelector} from '../../redux/slices/cartReducer'

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
            <div className="">&euro; {price}</div>
            <div className="caption">{caption==undefined? 'ex. VAT': caption}</div>
        </div>
    )
}

export const PriceExcludeVAT1 = ({price, caption}) => {
    return (
        <div className="price-exclude-vat1">
            <div className="price">&euro; {price}</div>
            <div className="caption">{caption==undefined? 'ex. VAT': caption}</div>
        </div>
    )
}

export const CartMobileItem = ({product}) => {
   return (
        <GridLayout className="gap-4">
            <div className="flex gap-6">
               
                <div className="w-[56px]">
                    <CartProductImage className="cart-product-image-mobile" src={product.src} />
                </div>
                <div className="flex-auto gap-4" >
                    <LayoutBetween>
                        <GridLayout className="gap-[10px]">
                            <div className="cart-product-name">{product.name}</div>
                            <div className="cart-product-sku-wrapper">SKU:&nbsp;<span className="cart-product-sku">{product.sku}</span></div>
                        </GridLayout>
                        <div>
                            <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.8956 0.818182L4.94886 4.28835H5.02841L7.09162 0.818182H9.52273L6.41548 5.90909L9.59233 11H7.11648L5.02841 7.52486H4.94886L2.8608 11H0.394886L3.58168 5.90909L0.454545 0.818182H2.8956Z" fill="black"/>
                                <path d="M-0.0078125 13.7841H9.99503V14.7386H-0.0078125V13.7841Z" fill="black"/>
                            </svg>
                        </div>
                    </LayoutBetween>
                    <GridLayout className="gap-2 mt-4">
                        <span className="cart-product-mobile-info-wrapper"><span className="font-bold">Unit Price: </span>{product.price} &euro;</span>
                        <span className="cart-product-mobile-info-wrapper"><span className="font-bold">Subtotal: : </span>{product.price * product.product_count} &euro;</span>
                        <span className="cart-product-mobile-info-wrapper"><span className="font-bold">Discount: </span>{0.00}  &euro;</span>
                        <span className="cart-product-mobile-info-wrapper"><span className="font-bold">VAT: </span>{Math.trunc(product.price * 0.2 * 100) / 100} &euro;</span>
                    </GridLayout>
                </div>
            </div>
            <div className="cart-product-stock-wrapper flex">
                <span className={"cart-product-stock w-[80px] " + (product.stock == "Low" ? "text-[#FFA800]" : product.stock == "In" ? "text-[#4BCB67] " : "text-[#F30303]")}>
                    {product.stock} Stock
                </span>
                <span className="">
                    Est. delivery time: 3 days
                </span>
            </div>
            <LayoutBetween className="items-center">
                <div className="w-[67px]">
                    <Quantity value={product.product_count}/> 
                </div>
                <div className="!font-bold">
                    <PriceExcludeVAT1 price={Math.trunc(product.count * product.price * 1.2 * 100) / 100} caption='incl. VAT'/>
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
export const CartProductBasicInfo = ({product}) => {
    return (
        <div className="cart-product-basic-info">
            <GridLayout className="gap-2">
                <div className="cart-product-name">{product.name}</div>
                <div className="cart-product-sku-wrapper">SKU:&nbsp;<span className="cart-product-sku">{product.sku}</span></div>
                <div className="cart-product-stock-wrapper">
                    <span className={"cart-product-stock " + (product.stock == "Low" ? "text-[#FFA800]" : product.stock == "In" ? "text-[#4BCB67] " : "text-[#F30303]")}>
                        {product.stock} Stock
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
                <div className="cart-product-price-except-vat"> &euro; {price}</div>
                <div >exclu. VAT</div>
            </GridLayout>
           
        </div>
    )
}
const CartProductInfo = ({product}) => {
    return (
        <div className="cart-product-info">
            <GridLayout className="gap-[22px]">
                <CartProductBasicInfo product={product}/>
                <CartProductPriceExcludeVat price={product.price}/>
            </GridLayout>
            
        </div>
    )
}
const CartProductItem = ({product, onMouseEnter,onMouseLeave }) => {
   
    return (
        <div className="cart-product-item p-2" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <CartProductImageAndQuantitiy image_url={product.src} count={product.buy_count}/>
            <CartProductInfo product={product}/>
        </div>
    )
}
const CartProductWrapper = ({product}) => {
    const [isHover, setIsHover] = useState(false)
    const dispatch = useDispatch()
    const removeCart = (e, code) => {
        if ((e.target).nodeName === "SPAN" && (e.target).outerText === "X") {
          dispatch(deleteCart(code))
        }
      };
    return (
        <>
            {isHover?
                <div className="hover:shadow-inner" onMouseLeave={()=> setIsHover(false)} onMouseEnter={()=> setIsHover(true)}>
                    <Badge badgeContent='X' color="warning" onClick={(e) => removeCart(e,product.code)}>
                        <CartProductItem product={product} />
                  </Badge>
                </div> :
                <CartProductItem product={product} onMouseEnter={()=> setIsHover(true)} onMouseLeave={()=> setIsHover(false)}/>
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
            <span className="font-semibold">&euro; {value}</span>
        </>
    )
}
const CartSubTotalIncludeVat = ({value}) => {
    return (
        <>
            <span className="font-semibold">Subtotal with VAT</span>
            <span className="font-semibold">&euro; {Math.trunc(value * 1.2 * 100) / 100}</span>
        </>
    )
}
const CartVat0 = () => {
    return (
        <>
            <span>VAT 0% of € 00.00</span>
            <span>€ 0.00</span>
        </>
    )
}
const CartVat20 = ({value}) => {
    return (
        <>
            <span>VAT 20% of € {value}</span>
            <span>€ {Math.trunc(value * 0.2 * 100) / 100}</span>
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
            <span className="font-bold">&euro; {Math.trunc(value * 1.2 * 100) / 100}</span>
        </>
    )
}
const CartGoCheckout = () => {
   
    return (
        <Link to={checkout_url} className="w-full">
            <button className="cart-go-checkout-btn">GO TO CHECKOUT</button>
        </Link>
    )
}
const CartOpenCart = () => {
    return (
        <Link to={cart_url} className="w-full">
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
    
    // const products = [
    //     {
    //         id : 3,
    //         stock : "In", 
    //         sku: "CF085A",
    //         rating : 4, 
    //         count : 8 ,
    //         product_count: 16,
    //         src : "/img/products/chair3.png" ,
    //         category : "ICA-CT 073BK",
    //         name : "Jysk Office Chair DALMOSE",
    //         price : "58.05",
    //         list_price : "64.50"
    //     },
    //     {
    //         id : 7,
    //         stock : "Low", 
    //         sku: "CF085A",
    //         rating : 4, 
    //         count : 8 ,
    //         product_count: 16,
    //         src : "/img/products/comfort_chair.png" ,
    //         category : "ICA-CT 073BK",
    //         name : "Comfort Ergo 2-Lever Operator Chairs",
    //         price : "53.99",
    //         list_price : "59.99"
    //     } ,
    //     {
    //         id : 8,
    //         stock : "In", 
    //         sku: "CF085A",
    //         rating : 4, 
    //         count : 8 ,
    //         product_count: 16,
    //         src : "/img/products/chair7.png" ,
    //         category : "ICA-CT 073BK",
    //         name : "Techly Office chair with padded seat",
    //         price : "61.65",
    //         list_price : "72.50"
    //     },
         

    // ]

    const CartProductList = useSelector(cartProductSelector)

    const products = Object.values(CartProductList)

    const subtotalWithoutVat = products.length? products.map(product => product.price * product.buy_count).reduce((a,b)=> a + b): 0
    
    return (
        <>
            <LayoutBetween>
                <span className="cart-caption-font">My Cart</span>
                <span className="cart-caption-font">{products.length} items</span>
            </LayoutBetween>
            <CartProductContent>
                <GridLayout className="gap-4">
                    {products.map((product, index) => (
                        
                        <CartProductWrapper product={product} key={index} />

                    ))}
                </GridLayout>
            </CartProductContent>
            <CartActionPanel subtotalWithoutVat={subtotalWithoutVat}/>
        </>
    )
}
export default Cart
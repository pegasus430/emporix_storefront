import React, { useState, useContext}  from 'react'
import { cart_product_key } from '../../constants/localstorage'

const HandleProductAddToCart = (product, action, quantitiy) => {
    let CartProductList = localStorage.getItem(cart_product_key)

    CartProductList = CartProductList == null? {}: JSON.parse(CartProductList)
    
    const CartID = `Cart${product.id}`
    product.buy_count = quantitiy

    if(CartProductList[CartID] == undefined) CartProductList[CartID] = product
    else CartProductList[CartID].buy_count += product.buy_count

    localStorage.setItem(cart_product_key, JSON.stringify(CartProductList))
    action(true)
}
export default HandleProductAddToCart
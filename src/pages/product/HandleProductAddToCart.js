import React, { useState, useContext}  from 'react'
import { cartProductKey } from '../../constants/localstorage'

const HandleProductAddToCart = (product, action, quantitiy) => {
    let CartProductList = localStorage.getItem(cartProductKey)

    CartProductList = CartProductList == null? {}: JSON.parse(CartProductList)
    
    const CartID = `Cart${product.id}`
    product.buy_count = quantitiy

    if(CartProductList[CartID] == undefined) CartProductList[CartID] = product
    else CartProductList[CartID].buy_count += product.buy_count

    localStorage.setItem(cartProductKey, JSON.stringify(CartProductList))
    action(true)
}
export default HandleProductAddToCart
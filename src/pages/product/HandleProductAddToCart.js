import React, { useState, useContext}  from 'react'

const HandleProductAddToCart = (product, action, quantitiy) => {
    let CartProductList = localStorage.getItem('CartProductList')

    CartProductList = CartProductList == null? {}: JSON.parse(CartProductList)
    
    const CartID = `Cart${product.id}`
    product.buy_count = quantitiy

    if(CartProductList[CartID] == undefined) CartProductList[CartID] = product
    else CartProductList[CartID].buy_count += product.buy_count

    localStorage.setItem('CartProductList', JSON.stringify(CartProductList))
    action(true)
}
export default HandleProductAddToCart
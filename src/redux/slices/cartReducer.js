import { createSlice } from '@reduxjs/toolkit'
import {cart_product_key} from '../../constants/localstorage'

let cartProductList = localStorage.getItem(cart_product_key)
cartProductList = (cartProductList === null? {}: JSON.parse(cartProductList))
export const initialState = {
    cartProductList: cartProductList,
}

const cartSlicer = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCartProduct: (state, action) => {
            const obj = {}
            obj[`Cart${action.payload.code}`] = action.payload
            state.cartProductList = {
                ...state.cartProductList,
                ...obj
            }
            console.log(state.cartProductList)
            localStorage.setItem(cart_product_key, JSON.stringify(state.cartProductList))
        },
        removeCartProduct: (state, action) => {
            delete(state.cartProductList[`Cart${action.payload}`])
            localStorage.setItem(cart_product_key, JSON.stringify(state.cartProductList))
        },
        clearCart: (state) => {
            state.cartProductList = {}
            localStorage.setItem(cart_product_key, JSON.stringify(state.cartProductList))
        }
    }
})
// The Cart Reducer
export default cartSlicer.reducer
// The Cart Actions.
export const {
    addCartProduct,
    clearCart,
    removeCartProduct
} = cartSlicer.actions

export const putCartProduct = (product) => async (dispatch) => {
    dispatch(addCartProduct(product))
}
export const deleteCart = (code) => async (dispatch) => {
    dispatch(removeCartProduct(code))
}
// The Cart Selector
export const cartProductSelector = (state) => state.cart.cartProductList
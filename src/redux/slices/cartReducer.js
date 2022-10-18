import { createSlice } from '@reduxjs/toolkit'
import {cart_product_key} from '../../constants/localstorage'

let cartProductList = localStorage.getItem(cart_product_key)
cartProductList = (cartProductList === null? {}: JSON.parse(cartProductList))
export const initialState = {
    cartProductList: cartProductList
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
    clearCart
} = cartSlicer.actions

export const putCartProduct = (product) => async (dispatch) => {
    dispatch(addCartProduct(product))
}
// The Cart Selector
export const cartProductSelector = (state) => state.cart.cartProductList
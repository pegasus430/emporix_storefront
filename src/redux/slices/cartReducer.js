import { createSlice } from '@reduxjs/toolkit'
import CartService from '../../services/cart.service'
import productService from '../../services/product/product.service'

export const initialState = {
    cartProductList: [],
    cartProductIds: [],
    cartAccount: {}
}

const cartSlicer = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCartProductList: (state, action) => {
            state.cartProductList = action.payload;
        },
        addCartProduct: (state, action) => {
            const obj = {}
            obj[`Cart${action.payload.code}`] = action.payload
            state.cartProductList = {
                ...state.cartProductList,
                ...obj
            }
           
        },
        removeCartProduct: (state, action) => {
            delete(state.cartProductList[`Cart${action.payload}`])
            
        },
        clearCart: (state) => {
            state.cartProductList = {}
            
        },
        setCartAccount: (state, action) => {
            state.cartAccount = action.payload
        },
        setCartProductIds: (state, action) => {
            state.cartProductIds = action.payload
        }
    }
})
// The Cart Reducer
export default cartSlicer.reducer
// The Cart Actions.
export const {
    addCartProduct,
    clearCart,
    removeCartProduct,
    setCartAccount,
    setCartProductIds,
    setCartProductList
} = cartSlicer.actions

export const putCartProduct = (cartAccountId,product) => async (dispatch) => {
    await CartService.addProuctToCart(cartAccountId,product)
    dispatch(addCartProduct(product))
}
export const deleteCart = (code) => async (dispatch) => {
    dispatch(removeCartProduct(code))
}
export const getCartAccount = (sessionId) => async (dispatch) => {
    const cart = await CartService.getCartAccount(sessionId)
    dispatch(setCartAccount(cart.data))
}
export const getCartProductIDs = (cartAccountId) => async (dispatch) => {
    const cartProducts = await CartService.getCartProducts(cartAccountId)

    dispatch(setCartProductIds(cartProducts))
}
export const getCartProducts = (cartProductIds) => async (dispatch) => {
    const productYrns = cartProductIds.map((cartProduct) => cartProduct.itemYrn)
    let products = await productService.getProductsWithYrns(productYrns)
    let obj = {}
    products = products.data
    products.map((product) => {
        obj[`Cart${product.code}`] = product
        return ""
    })
    dispatch(setCartProductList(obj))
}
// The Cart Selector
export const cartProductSelector = (state) => state.cart.cartProductList
export const cartAccountSelector = (state) => state.cart.cartAccount
export const cartProductIdsSelector = (state) => state.cart.cartProductIds
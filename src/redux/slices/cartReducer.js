import { createSlice } from '@reduxjs/toolkit'
import CartService from 'services/cart.service'
import productService from 'services/product/product.service'
import priceService from 'services/product/price.service'

export const initialState = {
    cartList: [],
    cartAccount: {}
}

const cartSlicer = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCartList: (state, action) => {
            state.cartList = action.payload;
        },
        setCartAccount: (state, action) => {
            state.cartAccount = action.payload
        },
        removeCart: (state, action) => {
            state.cartList = state.cartList.filter(cart => cart.id !== action.payload)
        },
        addCart: (state, action) => {
            
        },
        clearCart: (state) => {
            state.cartList = []
            
        }
    }
})
// The Cart Reducer
export default cartSlicer.reducer
// The Cart Actions.
export const {
    setCartList,
    addCart,
    removeCart,
    clearCart,
    setCartAccount
} = cartSlicer.actions

// Get Cart Acccount Information
export const getCartAccount = (sessionId) => async (dispatch) => {
    const cart = await CartService.getCartAccount(sessionId)
    dispatch(setCartAccount(cart.data))
}
// Get Cart List
export const getCartList = (cartAccountId) => async (dispatch) => {
    // Get cart list without product's detail information.
    const cartList = await CartService.getCartList(cartAccountId)
    // Put product's detail information
    const productYrns = cartList.map((cart) => cart.itemYrn)
    const products = await productService.getProductsWithYrns(productYrns)
    // Get price of cart Product
    const productIds = products.map(product => product.id)
    const prices = await priceService.getPriceWithProductIds(productIds)

    const productsWithPrice = products.map(product => {
        const matchPrice = prices.filter(price => price.itemId.id === product.id)
        if(matchPrice.length)  
            return {
                ...product,
                price: matchPrice[0]
            }
        return product
    })
    const cartListWithProduct = cartList.map(cart => {
        const matchProduct = productsWithPrice.filter(product => product.yrn === cart.itemYrn)
        if(matchProduct.length) 
            return {
                ...cart,
                product: matchProduct[0]
            }
        return cart
    })
    dispatch(setCartList(cartListWithProduct))
}


export const putCartProduct = (product, cartAccountId,cartList) => async (dispatch) => {
    // Check if the product is existed at cart.
    const matchCart = cartList.filter(cart => {
        return cart.itemYrn === product.itemYrn
    })
    // Not existed case.
    if(matchCart.length === 0){
        const res = await CartService.addProuctToCart(cartAccountId,product)
        // dispatch(addCart({
        //     ...res,
        //     product: product
        // }))
        dispatch(getCartList(cartAccountId))
    }else{
        
    }
        
}
export const deleteCart = (cartAccountId,cartItemId) => async (dispatch) => {
    await CartService.removeCart(cartAccountId, cartItemId)
    dispatch(removeCart(cartItemId))
}

// The Cart Selector
export const cartListSelector = (state) => state.cart.cartList
export const cartAccountSelector = (state) => state.cart.cartAccount


import { createSlice } from '@reduxjs/toolkit'
import products from '../../pages/product/products'
import productService from '../../services/product/product.service'

export const initialState = {
    loading: true,
    productIds: [],
    products: [],
    total: 0
}

const ProductReducer = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProductDataSuccess: (state, action) => {
            state.products = action.payload.products
            state.total = action.payload.total
            state.loading = false
        },
        setLoadingStatusSuccess: (state, action) => {
            state.loading = action.payload
        },
        setProductIdsSucess: (state, action) => {
            state.productIds = action.payload
        }
    }
})
// The Product Reducer
export default ProductReducer.reducer
// The Product Actions
export const {
    setProductDataSuccess,
    setLoadingStatusSuccess,
    setProductIdsSucess
} = ProductReducer.actions

export const getProductData = (productIds, total, pageNumber, itemsPerPage) => async (dispatch) => {
    const products = await productService.getProductsWithIds(productIds.slice(itemsPerPage * (pageNumber - 1), itemsPerPage * pageNumber))
    
    dispatch(setProductDataSuccess({products: products.data, total: total}))
}
export const setProductIds = (productIds) => (dispatch) => {
    dispatch(setProductIdsSucess(productIds))
}
export const setLoadingStatus = (status) => (dispatch) => {
    dispatch(setLoadingStatusSuccess(status))
}
// The Product Selector.
export const productLoadingSelector = (state) => state.product.loading
export const productDataSelector = (state) => state.product.products
export const productTotalSelector = (state) => state.product.total
export const productIdsSelector = (state) => state.product.productIds
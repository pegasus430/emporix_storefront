
import { createSlice } from '@reduxjs/toolkit'
import products from '../../pages/product/products'
import priceService from '../../services/product/price.service'
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
    const ids = productIds.slice(itemsPerPage * (pageNumber - 1), itemsPerPage * pageNumber)
    let products = await productService.getProductsWithIds(ids)
    // Get Product's Price.
    let prices = await priceService.getPriceWithProductIds(ids)
    let prices_obj = {}
    prices.map((p) => {
        prices_obj[`p${p.itemId.id}`] = p
    })
    let price_id;
    for(let i = 0; i < products.length; i++){
        price_id = `p${products[i]['id']}`
        if(prices_obj[price_id] !== undefined)
            products[i]['price'] = prices_obj[price_id]
    }
    dispatch(setProductDataSuccess({products: products, total: total}))
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
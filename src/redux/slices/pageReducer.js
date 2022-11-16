import { createSlice } from '@reduxjs/toolkit'
import tenant_lists from '../../tenant.config'
import {currencyCodeKey, tenantListKey} from '../../constants/localstorage'
import automationTenant from '../../tenant.json'

let tenantListFromLocalStorage = localStorage.getItem(tenantListKey)
tenantListFromLocalStorage = (tenantListFromLocalStorage === null? {}: JSON.parse(tenantListFromLocalStorage))

const tenantLists = {
    ...tenantListFromLocalStorage,
    ...tenant_lists,
    ...automationTenant
}
export const initialState = {
    menu: [
        {
            "title" : "Shop",
            "items" : []
        },
        {
            "title"  : "Brands" ,
            "items" : [],
            "url" : "brand"
        } ,
        {
            "title"  : "Quick Order" ,
            "items" : [],
            "url" : "quick_order"
        },
        {
            "title"  : "About Us" ,
            "items" : []
        } 
    ],
    tenantList: tenantLists,
    currencyList: [],
    activeCurrency: {}
}

const pageSlice = createSlice({
    name: 'page',
    initialState,
    reducers: {
        setShopItems: (state, action) => {
            state.menu[0]['items'] = action.payload
        },
        setTenantList: (state, action) => {
            state.tenantList[action.payload.tenant] = action.payload.tenant
        },
        setCurrencyList: (state, action) => {
            state.currencyList = action.payload
        },
        setActiveCurrency: (state, action) => {
            state.activeCurrency = action.payload
            localStorage.setItem(currencyCodeKey, action.payload.code)
        }
    }
})
// The Page Reducer
export default pageSlice.reducer
// The Page Actions.
export const {
    setShopItems,
    setTenantList,
    setCurrencyList,
    setActiveCurrency
} = pageSlice.actions

export const putShopItems = (items) => async (dispatch) => {
    dispatch(setShopItems(items))
}
// The Page Selector
export const pageMenuSelector = (state) => state.page.menu
export const tenantListSelector = (state) => state.page.tenantList
export const currencyListSelector = (state) => state.page.currencyList
export const activeCurrencySelector = (state) => state.page.activeCurrency
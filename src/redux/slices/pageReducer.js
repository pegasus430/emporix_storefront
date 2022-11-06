import { createSlice } from '@reduxjs/toolkit'
import tenant_lists from '../../tenant.config'
import {tenantListKey} from '../../constants/localstorage'

let tenantListFromLocalStorage = localStorage.getItem(tenantListKey)
tenantListFromLocalStorage = (tenantListFromLocalStorage === null? {}: JSON.parse(tenantListFromLocalStorage))

const tenantLists = {
    ...tenantListFromLocalStorage,
    ...tenant_lists
}
export const initialState = {
    menu: [
        {
            "title" : "Shop",
            "items" : []
        },
        {
            "title"  : "Services" ,
            "items" : []
        } ,
        {
            "title"  : "Brands" ,
            "items" : [],
            "url" : "brand"
        } ,
        {
            "title"  : "About Us" ,
            "items" : []
        } ,
        {
            "title"  : "Quick Order" ,
            "items" : [],
            "url" : "quick_order"
        }
    ],
    tenantList: tenantLists
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
        }
    }
})
// The Page Reducer
export default pageSlice.reducer
// The Page Actions.
export const {
    setShopItems,
    setTenantList
} = pageSlice.actions

export const putShopItems = (items) => async (dispatch) => {
    dispatch(setShopItems(items))
}
// The Page Selector
export const pageMenuSelector = (state) => state.page.menu
export const tenantListSelector = (state) => state.page.tenantList
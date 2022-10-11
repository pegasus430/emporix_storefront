import { createSlice } from '@reduxjs/toolkit'

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
            "items" : []
        }
    ]
}

const pageSlice = createSlice({
    name: 'page',
    initialState,
    reducers: {
        setShopItems: (state, action) => {
            state.menu[0]['items'] = action.payload
        }
    }
})
// The Page Reducer
export default pageSlice.reducer
// The Page Actions.
export const {
    setShopItems
} = pageSlice.actions

export const putShopItems = (items) => async (dispatch) => {
    dispatch(setShopItems(items))
}
// The Page Selector
export const pageMenuSelector = (state) => state.page.menu
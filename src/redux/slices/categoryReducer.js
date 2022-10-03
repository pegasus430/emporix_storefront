
import { createSlice } from '@reduxjs/toolkit'
import categoryService from '../../services/product/category.service'

export const initialState = {
    loading: true,
    data: []
}

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        setCategory:(state, action) => {
            // set category while loading...
            if(state.loading === true) 
                state.data = action.payload
        },
        setLoading: (state, action) => {
            state.loading = action.payload
        }
    }
})
// The Category Reduce
export default categorySlice.reducer
// The Category Actions
export const {
    setCategory,
    setLoading
} = categorySlice.actions

export const GetCategory = () => async (dispatch) => {
    const category = await categoryService.getProductCategoryTrees()
    dispatch(setCategory(category))
    dispatch(setLoading(false))
}

// Selector
export const categoryLoadingSelector = (state) => state.category.loading
export const categoryDataSelector = (state) => state.category.data



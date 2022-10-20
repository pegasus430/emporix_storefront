import { configureStore } from "@reduxjs/toolkit"
import authReducer from './slices/authReducer'
import messageReducer from "./slices/messageReducer"
import categoryReducer from "./slices/categoryReducer"
import pageReducer from "./slices/pageReducer"
import productReducer from "./slices/productReducer"
import availabilityReducer from "./slices/availabilityReducer"
import cartReducer from "./slices/cartReducer"

const store = configureStore({
  reducer: {
    message: messageReducer,
    auth: authReducer,
    category: categoryReducer,
    page: pageReducer,
    product: productReducer,
    availability: availabilityReducer,
    cart: cartReducer
  }
});

export default store;
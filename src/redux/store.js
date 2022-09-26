import { configureStore } from "@reduxjs/toolkit"
import authReducer from './slices/authReducer'
import messageReducer from "./slices/messageReducer"
import categoryReducer from "./slices/categoryReducer"
import pageReducer from "./slices/pageReducer"
import productReducer from "./slices/productReducer"

const store = configureStore({
  reducer: {
    message: messageReducer,
    auth: authReducer,
    category: categoryReducer,
    page: pageReducer,
    product: productReducer
  }
});

export default store;
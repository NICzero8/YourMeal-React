import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './slices/productsSlice'
import modalReducer from './slices/modalSlice'
import cartReducer from './slices/cartSlice'

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    modal: modalReducer,
  },
})
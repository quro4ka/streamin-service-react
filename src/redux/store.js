import { configureStore } from '@reduxjs/toolkit'
import user from './slices/userSlice'
import popup from './slices/popupSlice'

export const store = configureStore({
  reducer: {
    user,
    popup,
  },
})

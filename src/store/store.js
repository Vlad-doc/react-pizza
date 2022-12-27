import { configureStore } from '@reduxjs/toolkit'
import filter from './slices/filterSlice'
import search from './slices/searchSlice'

const store = configureStore({
  reducer: {
    filter,
    search
  }
})


export default store
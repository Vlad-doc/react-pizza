import { configureStore } from '@reduxjs/toolkit'
import filter from './slices/filterSlice'
import search from './slices/searchSlice'
import pagination from './slices/paginationSlice'

const store = configureStore({
  reducer: {
    filter,
    search,
    pagination
  }
})

export default store
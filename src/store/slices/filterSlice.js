import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
  sort: {
    name: 'популярности',
    sortProperty: 'rating'
  },
  search: {
    value: ''
  },
  currentPage: 0
}

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryId: (state, { payload }) => {
      state.categoryId = payload
    },
    setSort: (state, { payload }) => {
      state.sort = payload
    },
    searchPizzaByTitle: (state, { payload }) => {
      state.search.value = payload
    },
    setCurrentPage: (state, { payload }) => {
      state.currentPage = payload
    }
  }
})


export default filterSlice.reducer
export const { setCategoryId, setSort, searchPizzaByTitle, setCurrentPage } = filterSlice.actions

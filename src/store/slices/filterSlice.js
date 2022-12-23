import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: {
    categoryId: 0,
    categories: ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
  },
  sort: {
    init: 'популярности',
    type: {
      price: 'цене',
      title: 'алфавиту',
      rating: 'популярности'
    },
    sortingBy: ['популярности', 'цене', 'алфавиту'],
  }
}

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryId: (state, { payload }) => {
      state.filter.categoryId = payload
    },
    setSortType: (state, { payload }) => {
      state.sort.init = Object.keys(state.sort.type).find(item => state.sort.type[item] === payload ? item : '')
    }
  }
})


export default filterSlice.reducer
export const { setCategoryId, setSortType } = filterSlice.actions

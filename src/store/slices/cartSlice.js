import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  totalCount: 0,
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, { payload }) => {
      const findItem = state.items.find(obj => obj.id === payload.id)
      if (findItem) {
        findItem.count++
      } else {
        state.items.push({
          ...payload,
          count: 1
        })
      }
      state.totalPrice = state.items.reduce((acc, item) => acc + item.price * item.count, 0)
      state.totalCount = state.items.reduce((acc, item) => acc + item.count, 0)
    },
    removeItem: (state, { payload }) => {
      const findItem = state.items.find(obj => obj.id === payload.id)
      if (findItem) {
        findItem.count--
      }
      state.totalPrice = state.items.reduce((acc, item) => acc + item.price * item.count, 0)
      state.totalCount = state.items.reduce((acc, item) => acc + item.count, 0)
    },
    clearItem: (state, { payload }) => {
      state.items = state.items.filter(item => item.id !== payload)
      state.totalPrice = state.items.reduce((acc, item) => acc + item.price * item.count, 0)
      state.totalCount = state.items.reduce((acc, item) => acc + item.count, 0)
    },
    clearItems: (state) => {
      state.items = []
      state.totalPrice = state.items.reduce((acc, item) => acc + item.price * item.count, 0)
      state.totalCount = state.items.reduce((acc, item) => acc + item.count, 0)
    },
  }
})


export default cartSlice.reducer
export const { addItem, removeItem, clearItem, clearItems } = cartSlice.actions

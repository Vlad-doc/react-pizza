import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { calcTotalPrice } from "../../utils/calcTotalPrice"
import { getCartFromLS } from "../../utils/getCartFromLS"
import { CartItemStore, CartSliceState } from "./types"

const initialState: CartSliceState = getCartFromLS()

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, { payload }: PayloadAction<CartItemStore>) => {
      const findItem = state.items.find((obj) => obj.id === payload.id)
      if (findItem) {
        findItem.count++
      } else {
        state.items.push({
          ...payload,
          count: 1,
        })
      }
      state.totalPrice = calcTotalPrice(state.items)
    },
    removeItem: (state, { payload }: PayloadAction<CartItemStore>) => {
      const findItem = state.items.find((obj) => obj.id === payload.id)
      if (findItem) {
        findItem.count--
      }
      state.totalPrice = calcTotalPrice(state.items)
    },
    clearItem: (state, { payload }: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== payload)
      state.totalPrice = calcTotalPrice(state.items)
    },
    clearItems: (state) => {
      state.items = []
      state.totalPrice = 0
    },
  },
})

export default cartSlice.reducer
export const { addItem, removeItem, clearItem, clearItems } = cartSlice.actions

import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../store"

export type CartItemStore = {
  id: string
  title: string
  price: number
  types: string
  sizes: number
  imageUrl: string
  count: number
}

interface CartSliceState {
  totalPrice: number
  totalCount: number
  items: CartItemStore[]
}

const initialState: CartSliceState = {
  totalPrice: 0,
  totalCount: 0,
  items: [],
}

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
      state.totalPrice = state.items.reduce(
        (acc, item) => acc + item.price * item.count,
        0,
      )
      state.totalCount = state.items.reduce((acc, item) => acc + item.count, 0)
    },
    removeItem: (state, { payload }: PayloadAction<CartItemStore>) => {
      const findItem = state.items.find((obj) => obj.id === payload.id)
      if (findItem) {
        findItem.count--
      }
      state.totalPrice = state.items.reduce(
        (acc, item) => acc + item.price * item.count,
        0,
      )
      state.totalCount = state.items.reduce((acc, item) => acc + item.count, 0)
    },
    clearItem: (state, { payload }: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== payload)
      state.totalPrice = state.items.reduce(
        (acc, item) => acc + item.price * item.count,
        0,
      )
      state.totalCount = state.items.reduce((acc, item) => acc + item.count, 0)
    },
    clearItems: (state) => {
      state.items = []
      state.totalPrice = state.items.reduce(
        (acc, item) => acc + item.price * item.count,
        0,
      )
      state.totalCount = state.items.reduce((acc, item) => acc + item.count, 0)
    },
  },
})

export const selectCart = (state: RootState) => state.cart
export const selectCartItemById = (id: string) => (state: RootState) =>
  state.cart.items.find((pizza) => pizza.id === id)
export default cartSlice.reducer
export const { addItem, removeItem, clearItem, clearItems } = cartSlice.actions

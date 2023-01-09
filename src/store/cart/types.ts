export type CartItemStore = {
  id: string
  title: string
  price: number
  types: string
  sizes: number
  imageUrl: string
  count: number
}

export interface CartSliceState {
  totalPrice: number
  items: CartItemStore[]
}

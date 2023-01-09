import { CartItemStore } from "../store/cart/types"

export const calcTotalPrice = (items: CartItemStore[]) => {
  return items.reduce((acc, item) => acc + item.price * item.count, 0)
}

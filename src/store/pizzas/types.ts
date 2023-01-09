export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

export type Pizza = {
  category: number
  id: string
  imageUrl: string
  price: number
  rating: number
  sizes: number[]
  title: string
  types: number[]
}

export interface PizzasSliceState {
  pizzas: Pizza[]
  status: Status
}

export interface FetchPizzaParams {
  currentPage: number
  category: string
  sortType: string
  search: string
}

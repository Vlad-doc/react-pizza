import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { RootState } from "../store"

enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

type Pizza = {
  category: number
  id: string
  imageUrl: string
  price: number
  rating: number
  sizes: number[]
  title: string
  types: number[]
}

interface PizzasSliceState {
  pizzas: Pizza[]
  status: Status
}

interface FetchPizzaParams {
  currentPage: number
  category: string
  sortType: string
  search: string
}

export const fetchPizzas = createAsyncThunk(
  "pizza/fetchPizzas",
  async (params: FetchPizzaParams) => {
    const { currentPage, category, sortType, search } = params
    const { data } = await axios.get<Pizza[]>(
      `https://63a3630f471b38b2060dfc76.mockapi.io/pizzas?page=${currentPage}&limit=4&${category}&sortBy=${sortType}${search}`,
    )
    return data
  },
)

const initialState: PizzasSliceState = {
  pizzas: [],
  status: Status.LOADING,
}

const pizzasSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPizzas.pending, (state) => {
        state.status = Status.LOADING
        state.pizzas = []
      })
      .addCase(fetchPizzas.fulfilled, (state, { payload }) => {
        state.pizzas = payload
        state.status = Status.SUCCESS
      })
      .addCase(fetchPizzas.rejected, (state) => {
        state.status = Status.ERROR
        state.pizzas = []
      })
  },
})

export const pizzasSelector = (state: RootState) => state.pizzas
export default pizzasSlice.reducer

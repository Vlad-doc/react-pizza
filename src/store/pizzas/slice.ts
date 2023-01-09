import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { FetchPizzaParams, Pizza, PizzasSliceState, Status } from "./types"

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

export default pizzasSlice.reducer

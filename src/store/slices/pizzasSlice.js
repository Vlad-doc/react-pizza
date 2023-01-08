import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPizzas = createAsyncThunk(
  'pizza/fetchPizzas',
  async (params) => {
    const { currentPage, category, sortType, search } = params
    const { data } = await axios.get(`https://63a3630f471b38b2060dfc76.mockapi.io/pizzas?page=${currentPage}&limit=4&${category}&sortBy=${sortType}${search}`)
    return data
  }
)

const initialState = {
  pizzas: [],
  status: 'loading'
}

const pizzasSlice = createSlice({
  name: 'pizza',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchPizzas.pending, (state) => {
        state.status = 'loading'
        state.pizzas = []
      })
      .addCase(fetchPizzas.fulfilled, (state, { payload }) => {
        state.pizzas = payload
        state.status = 'success'
      })
      .addCase(fetchPizzas.rejected, (state) => {
        state.status = 'error'
        state.pizzas = []
      })
  }
})

export default pizzasSlice.reducer
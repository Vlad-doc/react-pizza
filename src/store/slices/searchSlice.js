import { createSlice } from "@reduxjs/toolkit";


const searchSlice = createSlice({
  name: 'search',
  initialState: {
    value: ''
  },
  reducers: {
    searchPizzaByTitle: (state, { payload }) => {
      state.value = payload
      console.log(state.value)
    }
  }
})

export default searchSlice.reducer
export const { searchPizzaByTitle } = searchSlice.actions
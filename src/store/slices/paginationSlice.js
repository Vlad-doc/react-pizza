import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPage: 0
}

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setCurrentPage: (state, { payload }) => {
      state.currentPage = payload
    }
  }
})


export default paginationSlice.reducer
export const { setCurrentPage } = paginationSlice.actions

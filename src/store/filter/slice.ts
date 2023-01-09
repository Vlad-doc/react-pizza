import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { FilterSliceState, Sort } from "./types"

const initialState: FilterSliceState = {
  categoryId: 0,
  sort: {
    name: "популярности",
    sortProperty: "rating",
  },
  search: {
    value: "",
  },
  currentPage: 0,
}

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategoryId: (state, { payload }: PayloadAction<number>) => {
      state.categoryId = payload
    },
    setSort: (state, { payload }: PayloadAction<Sort>) => {
      state.sort = payload
    },
    searchPizzaByTitle: (state, { payload }: PayloadAction<string>) => {
      state.search.value = payload
    },
    setCurrentPage: (state, { payload }: PayloadAction<number>) => {
      state.currentPage = payload
    },
    setFilters: (state, { payload }: PayloadAction<FilterSliceState>) => {
      state.sort.sortProperty = payload.sort.sortProperty
      state.currentPage = Number(payload.currentPage)
      state.categoryId = Number(payload.categoryId)
    },
  },
})

export default filterSlice.reducer
export const {
  setCategoryId,
  setSort,
  searchPizzaByTitle,
  setCurrentPage,
  setFilters,
} = filterSlice.actions

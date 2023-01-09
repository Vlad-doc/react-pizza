import { RootState } from "../store"

export const sortSelector = (state: RootState) => state.filter.sort
export const currentPageSelector = (state: RootState) =>
  state.filter.currentPage
export const categoryIdSelector = (state: RootState) => state.filter.categoryId
export const sortTypeSelector = (state: RootState) =>
  state.filter.sort.sortProperty
export const searchValueSelector = (state: RootState) =>
  state.filter.search.value

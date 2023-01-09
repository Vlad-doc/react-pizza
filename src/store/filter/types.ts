export type Sort = {
  name: string
  sortProperty: "rating" | "price" | "title"
}

type Search = {
  value: string
}

export interface FilterSliceState {
  categoryId: number
  sort: Sort
  search: Search
  currentPage: number
}

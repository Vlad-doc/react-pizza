import React from "react"
import ReactPaginate from "react-paginate"
import s from "./pagination.module.scss"

interface IPagination {
  currentPage: number
  onChangePage: (page: number) => void
}

const Pagination: React.FC<IPagination> = ({ onChangePage, currentPage }) => {
  return (
    <ReactPaginate
      className={s.root}
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={3}
      initialPage={currentPage}
    />
  )
}

export default Pagination

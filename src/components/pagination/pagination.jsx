import React from 'react'
import ReactPaginate from 'react-paginate'
import s from './pagination.module.scss'

const Pagination = ({ onChangePage, currentPage }) => {
  return (
    <ReactPaginate
      className={s.root}
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={event => onChangePage(event.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={3}
      initialPage={currentPage}
      renderOnZeroPageCount={null}
    />
  )
}

export default Pagination
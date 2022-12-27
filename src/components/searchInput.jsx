import React from 'react'
import searchLogo from "../assets/img/free-icon-search-3991270.png"
import reject from "../assets/img/reject.png"
import { useDispatch, useSelector } from 'react-redux'
import { searchPizzaByTitle } from '../store/slices/searchSlice'

const SearchInput = () => {
  const searchValue = useSelector(state => state.search.value)
  const dispatch = useDispatch()
  return (
    <div className='header__input'>
      <img src={searchLogo} alt="" className='img img-search' />
      <input type="text" className='input' value={searchValue} onChange={event => dispatch(searchPizzaByTitle(event.target.value))} />
      {searchValue &&
        <img src={reject} alt="" className='img img-reject' onClick={() => dispatch(searchPizzaByTitle(''))} />}
    </div>
  )
}

export default SearchInput
import React, { useCallback, useRef, useState } from 'react'
import searchLogo from "../assets/img/free-icon-search-3991270.png"
import reject from "../assets/img/reject.png"
import { useDispatch } from 'react-redux'
import { searchPizzaByTitle } from '../store/slices/searchSlice'
import { debounce } from 'lodash'

const SearchInput = () => {
  const [value, setValue] = useState('')
  // const searchValue = useSelector(state => state.search.value)
  const dispatch = useDispatch()
  const inputRef = useRef()
  const updateSearchInput = debounce((str) => {
    dispatch(searchPizzaByTitle(str))
  }, 500)
  const onChangeInput = useCallback(event => {
    setValue(event.target.value)
    updateSearchInput(event.target.value)
  }, [updateSearchInput])
  return (
    <div className='header__input'>
      <img src={searchLogo} alt="" className='img img-search' />
      <input
        type="text"
        className='input'
        value={value}
        onChange={onChangeInput}
        ref={inputRef}
      />
      {value &&
        <img
          src={reject}
          alt=""
          className='img img-reject'
          onClick={() => {
            dispatch(searchPizzaByTitle(''))
            setValue('')
            inputRef.current.focus()
          }}

        />}
    </div>
  )
}

export default SearchInput
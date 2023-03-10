import React, { useCallback, useRef, useState } from "react"
import searchLogo from "../assets/img/free-icon-search-3991270.png"
import reject from "../assets/img/reject.png"
import { useDispatch } from "react-redux"
import { searchPizzaByTitle } from "../store/filter/slice"
import { debounce } from "lodash"

const SearchInput: React.FC = () => {
  const [value, setValue] = useState("")
  const dispatch = useDispatch()
  const inputRef = useRef<HTMLInputElement>(null)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updateSearchInput = useCallback(
    debounce((str: string) => {
      dispatch(searchPizzaByTitle(str))
    }, 1000),
    [],
  )
  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
    updateSearchInput(event.target.value)
  }
  return (
    <div className="header__input">
      <img src={searchLogo} alt="" className="img img-search" />
      <input
        type="text"
        className="input"
        value={value}
        onChange={onChangeInput}
        ref={inputRef}
      />
      {value && (
        <img
          src={reject}
          alt=""
          className="img img-reject"
          onClick={() => {
            dispatch(searchPizzaByTitle(""))
            setValue("")
            inputRef.current?.focus()
          }}
        />
      )}
    </div>
  )
}

export default SearchInput

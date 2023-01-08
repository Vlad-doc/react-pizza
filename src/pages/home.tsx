import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Categories from "../components/categories"
import PizzaBlock from "../components/pizzaBlock/pizzaBlock"
import Sort from "../components/sort"
import Skeleton from "../components/pizzaBlock/contentLoader"
import Pagination from "../components/pagination/pagination"
import {
  categoryIdSelector,
  currentPageSelector,
  searchValueSelector,
  setCategoryId,
  setCurrentPage,
  sortTypeSelector,
} from "../store/slices/filterSlice"
import { fetchPizzas, pizzasSelector } from "../store/slices/pizzasSlice"

const Home: React.FC = () => {
  const dispatch = useDispatch()
  const currentPage = useSelector(currentPageSelector)
  const categoryId = useSelector(categoryIdSelector)
  const sortType = useSelector(sortTypeSelector)
  const searchValue = useSelector(searchValueSelector)
  const { pizzas, status } = useSelector(pizzasSelector)

  const category = categoryId > 0 ? `category=${categoryId}` : ""
  const search = searchValue ? `search=${searchValue}` : ""

  const onClickChange = (id: number) => dispatch(setCategoryId(id))
  const setPage = (number: number) => dispatch(setCurrentPage(number))

  useEffect(() => {
    dispatch(
      // @ts-ignore
      fetchPizzas({ category, sortType, currentPage, search }),
    )
    window.scrollTo(0, 0)
  }, [category, sortType, currentPage, search, dispatch])
  return (
    <>
      <div className="content__top">
        <Categories categoryId={categoryId} changeCategory={onClickChange} />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>

      {status === "error" ? (
        <div className="content__error-info">
          <h2>Произошла ошибка 😕</h2>
          <p>
            К сожалению, не удалось получить пиццы. Попробуйте повторить попытку
            позже.
          </p>
        </div>
      ) : (
        <div className="content__items">
          {status === "loading"
            ? [...new Array(4)].map((_, index) => <Skeleton key={index} />)
            : pizzas
                .filter((pizza: any) =>
                  pizza.title.toLowerCase().includes(searchValue.toLowerCase()),
                )
                .map((pizza: any) => <PizzaBlock {...pizza} key={pizza.id} />)}
        </div>
      )}
      <Pagination currentPage={currentPage} onChangePage={setPage} />
    </>
  )
}

export default Home

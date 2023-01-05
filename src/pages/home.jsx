import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import Categories from '../components/categories';
import PizzaBlock from '../components/pizzaBlock/pizzaBlock';
import Sort from '../components/sort'
import Skeleton from '../components/pizzaBlock/contentLoader';
import Pagination from '../components/pagination/pagination';
import { setCategoryId, setCurrentPage } from '../store/slices/filterSlice';

const Home = () => {
  const [pizzas, setPizzas] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch()
  const currentPage = useSelector(state => state.filter.currentPage)
  const categoryId = useSelector(state => state.filter.categoryId)
  const sortType = useSelector(state => state.filter.sort.sortProperty)
  const searchValue = useSelector(state => state.filter.search.value)


  const category = categoryId > 0 ? `category=${categoryId}` : ''
  const search = searchValue ? `search=${searchValue}` : ''

  const onClickChange = id => dispatch(setCategoryId(id))
  const setPage = number => dispatch(setCurrentPage(number))

  useEffect(() => {
    setIsLoading(true)
    axios.get(`https://63a3630f471b38b2060dfc76.mockapi.io/pizzas?${category}&sortBy=${sortType}&page=${currentPage}&limit=4&${search}`)
      .then(res => {
        setPizzas(res.data)
        setIsLoading(false)
      })
    window.scrollTo(0, 0)
  }, [category, sortType, currentPage, search])
  return (
    <>
      <div className="content__top">
        <Categories categoryId={categoryId} changeCategory={onClickChange} />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {
          isLoading ?
            [...new Array(10)].map((_, index) =>
              <Skeleton key={index} />)
            :
            pizzas
              .filter(pizza => pizza.title.toLowerCase().includes(searchValue.toLowerCase()))
              .map(pizza =>
                <PizzaBlock {...pizza} key={pizza.id} />
              )}
      </div>
      <Pagination currentPage={currentPage} onChangePage={setPage} />
    </>
  )
}

export default Home
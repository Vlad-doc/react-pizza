import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import qs from 'qs'
import { useNavigate } from 'react-router-dom';
import Categories from '../components/categories';
import PizzaBlock from '../components/pizzaBlock/pizzaBlock';
import Sort from '../components/sort'
import Skeleton from '../components/pizzaBlock/contentLoader';
import Pagination from '../components/pagination/pagination';
import { setCategoryId, setCurrentPage, setFilters } from '../store/slices/filterSlice';
import { list } from '../components/sort'

const Home = () => {
  const [pizzas, setPizzas] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const currentPage = useSelector(state => state.filter.currentPage)
  const categoryId = useSelector(state => state.filter.categoryId)
  const sortType = useSelector(state => state.filter.sort.sortProperty)
  const searchValue = useSelector(state => state.filter.search.value)


  const category = categoryId > 0 ? `category=${categoryId}` : ''
  const search = searchValue ? `search=${searchValue}` : ''
  const isSearch = useRef(false)
  const isMounted = useRef(false)

  const onClickChange = id => dispatch(setCategoryId(id))
  const setPage = number => dispatch(setCurrentPage(number))

  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        category,
        sortType,
        currentPage,
      })
      navigate(`?${queryString}`)
    }
    isMounted.current = true
  }, [category, sortType, currentPage, navigate])
  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1))
      const sort = list.find(item => item.sortProperty === params.sortProperty)
      dispatch(setFilters({
        ...params,
        sort
      }))
      isSearch.current = true
    }
  }, [dispatch])
  useEffect(() => {
    if (!isSearch.current) {
      setIsLoading(true)
      axios.get(`https://63a3630f471b38b2060dfc76.mockapi.io/pizzas?page=${currentPage}&limit=4&${category}&sortBy=${sortType}${search}`)
        .then(res => {
          setPizzas(res.data)
          setIsLoading(false)
        })
    }
    isSearch.current = false
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
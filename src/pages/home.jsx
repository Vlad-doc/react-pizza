import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Categories from '../components/categories';
import PizzaBlock from '../components/pizzaBlock/pizzaBlock';
import Sort from '../components/sort'
import Skeleton from '../components/pizzaBlock/contentLoader';
import { setCategoryId, setSortType } from '../store/slices/filterSlice';
import axios from 'axios';

const Home = () => {
  const [pizzas, setPizzas] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const filtrating = useSelector(state => state.filter.filter)
  const sorting = useSelector(state => state.filter.sort)
  const dispatch = useDispatch()
  const onClickChange = id => dispatch(setCategoryId(id))
  const changeSortType = type => dispatch(setSortType(type))
  useEffect(() => {
    setIsLoading(true)
    axios.get(`https://63a3630f471b38b2060dfc76.mockapi.io/pizzas?category=${filtrating.categoryId === 0 ? '' : filtrating.categoryId}&sortBy=${sorting.init}`)
      .then(res => {
        setPizzas(res.data)
        setIsLoading(false)
      })
    window.scrollTo(0, 0)
  }, [filtrating.categoryId, sorting.init])
  return (
    <>
      <div className="content__top">
        <Categories filtrating={filtrating} changeCategory={onClickChange} />
        <Sort sorting={sorting} changeSort={changeSortType} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {
          isLoading ?
            [...new Array(10)].map((_, index) =>
              <Skeleton key={index} />)
            :
            pizzas.map(pizza =>
              <PizzaBlock {...pizza} key={pizza.id} />
            )}
      </div>
    </>
  )
}

export default Home
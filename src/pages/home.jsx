import React, { useEffect, useState } from 'react'
import Categories from '../components/categories';
import PizzaBlock from '../components/pizzaBlock/pizzaBlock';
import Sort from '../components/sort'
import Skeleton from '../components/pizzaBlock/contentLoader';

const Home = () => {
  const [pizzas, setPizzas] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    setIsLoading(true)
    fetch('https://63a3630f471b38b2060dfc76.mockapi.io/pizzas')
      .then(data => data.json())
      .then(res => {
        setPizzas(res)
        setIsLoading(false)
      })
  }, [])
  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
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
import Categories from './components/categories';
import Header from './components/header';
import PizzaBlock from './components/pizzaBlock';
import Sort from './components/sort'
import './scss/app.scss'
import { useEffect, useState } from 'react';


function App() {
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
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {isLoading ? <div>Loading...</div> : pizzas.map(pizza =>
              <PizzaBlock {...pizza} key={pizza.id} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

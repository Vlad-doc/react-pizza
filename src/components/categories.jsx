import React, { useState } from 'react'

const Categories = () => {
  const [active, setActive] = useState(0)
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
  return (
    <div className="categories">
      <ul>
        {categories.map((item, index) =>
        (<li
          key={item}
          className={active === index ? 'active' : ''}
          onClick={() => { setActive(index) }}>
          {item}
        </li>
        ))}
      </ul>
    </div>
  )
}

export default Categories
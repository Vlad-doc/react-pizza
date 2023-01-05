import React from 'react'

const Categories = ({ categoryId, changeCategory }) => {
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
  return (
    <div className="categories">
      <ul>
        {categories.map((item, index) =>
        (<li
          key={item}
          className={categoryId === index ? 'active' : ''}
          onClick={() => changeCategory(index)}>
          {item}
        </li>
        ))}
      </ul>
    </div>
  )
}

export default Categories
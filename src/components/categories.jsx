import React from 'react'

const Categories = ({ filtrating, changeCategory }) => {
  return (
    <div className="categories">
      <ul>
        {filtrating.categories.map((item, index) =>
        (<li
          key={item}
          className={filtrating.categoryId === index ? 'active' : ''}
          onClick={() => changeCategory(index)}>
          {item}
        </li>
        ))}
      </ul>
    </div>
  )
}

export default Categories
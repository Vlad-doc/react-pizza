import React from 'react'
import s from './notFoundBlock.module.scss'

const NotFoundBlock = () => {
  return (
    <div className={s.root}>
      <h1 >
        <span>😣</span>
        <br />
        Ничего не найдено
      </h1>
      <p className={s.description}>Данная страница отсутствует в интернет-магазине</p>
    </div>

  )
}

export default NotFoundBlock 
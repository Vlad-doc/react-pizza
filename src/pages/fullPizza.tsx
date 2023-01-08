import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"

const FullPizza: React.FC = () => {
  const [pizza, setPizza] = useState<{
    imageUrl: string
    title: string
    price: number
  }>()
  const navigate = useNavigate()
  const { id } = useParams()
  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const res = await axios.get(
          `https://63a3630f471b38b2060dfc76.mockapi.io/pizzas/${id}`,
        )
        setPizza(res.data)
      } catch (error) {
        alert("Пицца не найдена")
        navigate("/")
      }
    }
    fetchPizza()
  }, [id, navigate])
  if (!pizza) {
    return <>"Loading..."</>
  }
  return (
    <div className="container">
      <img src={pizza.imageUrl} alt={pizza.title} />
      <h2>{pizza.title}</h2>
      <h4>{pizza.price} ₽</h4>
    </div>
  )
}

export default FullPizza

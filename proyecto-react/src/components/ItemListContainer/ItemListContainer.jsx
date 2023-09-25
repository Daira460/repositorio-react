import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getProducts, getProductsByCategory } from "../../asynMock"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = useState ([])
  
  const {categoryId} = useParams()

  useEffect (() => {
    const asynFunc = categoryId ? getProductsByCategory : getProducts
    asynFunc(categoryId)
    .then (response =>{
      setProducts (response)
    })
    .catch (error => {
      console.error (error)
    })
  }, [categoryId])
 
  return (
    <div>
      <h1>{greeting}</h1>
      <ItemList products= {products}/>
    </div>
  )
}

export default ItemListContainer





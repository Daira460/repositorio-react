import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from "../../services/firebase/firebaseConfig"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  
  const { categoryId } = useParams()

  useEffect(() => {
    setLoading(true)

    const collectionRef = categoryId 
      ? query(collection(db, 'items'), where('category', '==', categoryId))
      : collection(db, 'items')

    getDocs(collectionRef)
      .then(response => {
        const productsAdapted = response.docs.map(doc => {
          const data = doc.data()
          return { id: doc.id, ...data }
        })
        setProducts(productsAdapted)
      })
      .catch(error => {
        console.log(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [categoryId]) 
}

export default ItemListContainer;

  

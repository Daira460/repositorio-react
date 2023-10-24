import React, { useContext, useState } from 'react';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import { db } from '../../services/firebase/firebaseConfig';
import { CartContext } from '../../context/CartContext';
import { Timestamp, addDoc, collection, documentId, getDocs, query, where, writeBatch } from 'firebase/firestore';


const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState('');

  const { cart, total, clearCart } = useContext(CartContext);

  const createOrder = async ({ name, phone, email }) => {
    setLoading(true);

    try {
      const objOrder = {
        buyer: {
          name, phone, email
        },
        item: cart,
        total: total,
        date: Timestamp.fromDate(new Date()),
      };

      const batch = writeBatch(db);
      const outOfStock = [];
      const ids = cart.map (prod => prod.id)
      const productsRef = collection (db, 'items')
      const productsAdaptedFromFirestore = await getDocs (query(productsRef, where (documentId(), 'in, id')))
      const { docs } = productsAdaptedFromFirestore

      docs.forEach (doc => {
        const dataDoc = doc.data ()
        const stockDb = dataDoc.stock

        const productsAdaptedToCart = cart.find (prod => prod.id === doc.id)
        const prodQuantity = productsAdaptedToCart?.quantity

        if (stockDb >= prodQuantity) {
          batch.update (doc.ref, {stock: stockDb - prodQuantity})
      
        } else {
          outOfStock.push ({id: doc.id, ...dataDoc})
        }


      })

      if (outOfStock.length === 0) {
        await batch.commit()

        const orderRef = collection (db, 'orders')
        const orderAdded = await addDoc (orderRef, objOrder)

        setOrderId (orderAdded.id)
        clearCart ()
      } else {
        console.error ('No se encuentran en stock')
      }

    } catch (error) {
      console.error (error)
    } finally {
      setLoading (false)
    }


  };

  if (loading) {
    return <h1>Se está generando su orden</h1>;
  }
  if (orderId) {
    return <h1>Aquí está el ID de su orden: {orderId}</h1>;
  }
  

  return (
    <div>
      <h1>Finalizar compra</h1>
      <CheckoutForm onConfirm={createOrder} />
    </div>
  );
};

export default Checkout;

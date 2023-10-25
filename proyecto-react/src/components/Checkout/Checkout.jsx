import React, { useContext, useState } from 'react';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import { db } from '../../services/firebase/firebaseConfig';
import { CartContext } from '../../context/CartContext';
import { Timestamp, addDoc, collection } from 'firebase/firestore';

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState('');

  const { cart, total, clearCart } = useContext(CartContext);

  const createOrder = async ({ name, phone, email }) => {
    setLoading(true);

    try {
      const objOrder = {
        buyer: {
          name,
          phone,
          email
        },
        item: cart,
        total: total,
        date: Timestamp.fromDate(new Date()),
      };

      console.log(objOrder);

      const orderRef = collection(db, 'orders');
      const orderAdded = await addDoc(orderRef, objOrder);

      setOrderId(orderAdded.id);
      clearCart();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
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





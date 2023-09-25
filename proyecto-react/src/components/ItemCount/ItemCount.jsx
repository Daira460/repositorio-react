import { useState } from 'react';
import React from 'react';




const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };


  return (
    <div className="counter">
      <div className="controls">
        <button className="boton" onClick={decrement}>-</button>
        <h3 className="numero">{quantity}</h3>
        <button className="boton" onClick={increment}>+</button>
      </div>
      <div>
        <button className="boton" onClick={() => onAdd(quantity)} disabled={!stock}>
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;

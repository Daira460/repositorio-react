import React from 'react';

const CartWidget = () => {
  // Número hardcodeado (fijo)
  const itemCount = 5; 

  return (
    <>
      <img src="https://i.pinimg.com/originals/bf/19/90/bf1990e247292b756ca7926443f00ab6.jpg" alt="carrito" width={50} height={50} />
      <span className="cart-item-count">{itemCount}</span>
    </>
  );
};

export default CartWidget;



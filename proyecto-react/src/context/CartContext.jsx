import { createContext, useState, useMemo } from "react";

export const CartContext = createContext({
  cart: [],
  total: 0,
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  console.log(cart);

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCart((prev) => [...prev, { ...item, quantity }]);
    } else {
      console.error("Este producto ya fue agregado");
    }
  };

  const removeItem = (itemId) => {
    const cartUpdated = cart.filter((prod) => prod.id !== itemId);
    setCart(cartUpdated);
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (itemId) => {
    return cart.some((prod) => prod.id === itemId);
  };

  // Calcula el total sumando el precio de los productos en el carrito
  const total = useMemo(() => {
    return cart.reduce((acc, product) => acc + product.price * product.quantity, 0);
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, total }}>
      {children}
    </CartContext.Provider>
  );
};

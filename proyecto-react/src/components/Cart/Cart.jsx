import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, clearCart, totalQuantity } = useContext(CartContext);

  if (totalQuantity === 0) {
    return (
      <div>
        <h2>No hay ítems agregados al carrito</h2>
        <Link to="/" className="Option">
          Productos
        </Link>
      </div>
    );
  }

  return (
    <div>
 {cart.map((p, i) => (
  <CartItem key={`${p.id}-${i}`} {...p} />
))}



      <button onClick={() => clearCart()} className="Button">
        Limpiar Carrito
      </button>
      <Link to="/checkout" className="Option">
        Checkout
      </Link>
    </div>
  );
}

export default Cart;





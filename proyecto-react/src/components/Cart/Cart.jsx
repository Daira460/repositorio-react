import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";


const Cart = () => {
    const {cart, clearCart, totalQuantity, total} = useContext (CartContext)

    if (totalQuantity === 0) {
        return (
            <div>
                <h2>No hay item agregados al carrito</h2>
                <Link to= '/' className="Option"> Productos</Link>
            </div>
        )
    }
    return (
        <div>
            {cart.map (p => <CartItem key={p.id} {...p}/>)}
            <h3>Total: $ {total}</h3>
            <button onClick={() => clearCart()} className="Boton">Limpiar Carrito</button>
            <Link to= '/Checkout'className="Option">Finalizar Compra</Link>
        </div>
    )
}

export default Cart
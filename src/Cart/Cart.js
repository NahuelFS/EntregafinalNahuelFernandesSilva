import { useContext } from "react";
import { CartContext } from "../contex/CartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, clearCart, totalQuantity, totalPrice } =
        useContext(CartContext);

    if (totalQuantity === 0) {
        return (
            <div>
                <h1>No hay items en el carrito</h1>
                <Link to='/' className='Option'>
                    Productos
                </Link>
            </div>
        );
    }
    return (
        <div>
            {cart.map((p) => (
                <CartItem key={p.id} {...p} />
            ))}
            <h3>Total: ${totalPrice}</h3>
            <button onClick={() => clearCart()} className='btn'>
                Limpiar Carrito
            </button>
            <div style={{ marginTop: "30px" }}>
                <Link to='/checkout' className='Option'>
                    Checkout
                </Link>
            </div>
        </div>
    );
};
export default Cart;

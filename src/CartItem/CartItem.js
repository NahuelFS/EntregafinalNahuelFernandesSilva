import { useContext } from "react";
import { CartContext } from "../contex/CartContext";

const CartItem = (cartItem) => {
    const { id, name, price, quantity } = cartItem;

    const { removeItem } = useContext(CartContext);
    const subtotal = price * quantity;
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                backgroundColor: "#efefef",
                borderRadius: "10px",
                margin: "20px 0",
            }}
        >
            <h4>{name}</h4>
            <h4>Cantidad: {quantity}</h4>
            <h4>Precio por unidad: ${price}</h4>
            <h4>Subtotal: ${subtotal}</h4>
            <button onClick={() => removeItem(id)} className='btn'>
                x
            </button>
        </div>
    );
};

export default CartItem;

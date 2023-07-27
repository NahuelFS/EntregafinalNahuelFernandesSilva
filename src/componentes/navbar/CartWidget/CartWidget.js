import icono from "./asset/iconocarrito.jpeg";
import { useContext } from "react";
import { CartContext } from "../../../contex/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext);
    // const total = totalQuantity();

    return (
        <div
        // style={{
        //     display: "flex",
        //     alignItems: "center",
        //     justifyContent: "center",
        // }}
        >
            <Link to='/cart' className='CartWidget'>
                <img
                    className='carrito-img'
                    src={icono}
                    alt='icono carrito'
                    width={40}
                />
            </Link>
            {totalQuantity}
        </div>
    );
};
export default CartWidget;

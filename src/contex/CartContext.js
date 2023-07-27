import { createContext, useState } from "react";

export const CartContext = createContext({
    cart: [],
});

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    console.log(cart);

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart((prev) => [...prev, { ...item, quantity }]);
        } else {
            console.error("el producto ya fue agregado");
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

    const calculateTotalQuantity = () => {
        let total = 0;
        cart.forEach((item) => {
            total = total + item.quantity;
        });

        return total;
    };

    const calculateTotalPrice = () =>
        cart.reduce(
            (total, current) => total + current.price * current.quantity,
            0
        );

    const totalQuantity = calculateTotalQuantity();
    const totalPrice = calculateTotalPrice();

    return (
        <CartContext.Provider
            value={{
                cart,
                addItem,
                removeItem,
                clearCart,
                totalQuantity,
                totalPrice,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

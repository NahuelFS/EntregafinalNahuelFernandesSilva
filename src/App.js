import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./Cart/Cart";
import Checkout from "./Checkout/Checkout";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import ItemsListContainer from "./componentes/navbar/ItemsListContainer/ItemsListContainer";
import Navbar from "./componentes/navbar/Navbar";
import { CartProvider } from "./contex/CartContext";

function App() {
    return (
        <div className='App'>
            <CartProvider>
                <Navbar />
                <Routes>
                    <Route
                        path='/'
                        element={
                            <ItemsListContainer
                                greeting={
                                    "Hola Bienvenidos a PuntoSano Tienda Saludable"
                                }
                            />
                        }
                    />
                    <Route
                        path='/category/:categoryId'
                        element={<ItemsListContainer />}
                    />
                    <Route
                        path='/Item/:ItemId'
                        element={<ItemDetailContainer />}
                    />
                    <Route path='/cart' element={<Cart />}>
                        {" "}
                    </Route>
                    <Route path='/checkout' element={<Checkout />}>
                        {" "}
                    </Route>
                    <Route path='*' element={<h1>404 NOT FOUND</h1>} />
                </Routes>
            </CartProvider>
        </div>
    );
}

export default App;

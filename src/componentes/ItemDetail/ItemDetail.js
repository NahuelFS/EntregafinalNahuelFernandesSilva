import ItemCount from "../navbar/ItemCount/ItemCount";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contex/CartContext";

const ItemDetail = ({
    id,
    nombre,
    imagen,
    categoria,
    descripcion,
    precio,
    stock,
}) => {
    const [quantityAdded, setQuantityAdded] = useState(0);

    const { addItem } = useContext(CartContext);

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity);

        const item = {
            id,
            name: nombre,
            price: precio,
        };
        addItem(item, quantity);
    };

    return (
        <article className='cardItem'>
            <header className=' '>
                <h2 className=''>{nombre}</h2>
            </header>
            <picture>
                <img
                    src={imagen}
                    alt={nombre}
                    width={250}
                    height={250}
                    className='itemImg'
                ></img>
            </picture>
            <section>
                <p className='info'>Categoria: {categoria}</p>
                <p className='info'>Descripcion {descripcion}</p>
                <p className='info'>Precio: ${precio}</p>
            </section>
            <footer className='ItemFooter'>
                {quantityAdded > 0 ? (
                    <Link to='/cart' clasName='Option'>
                        {" "}
                        Terminar compra{" "}
                    </Link>
                ) : (
                    <ItemCount initial={0} stock={stock} onAdd={handleOnAdd} />
                )}
            </footer>
        </article>
    );
};
export default ItemDetail;

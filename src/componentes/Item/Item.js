import { Link } from "react-router-dom";

const Item = ({ id, nombre, imagen, precio, stock }) => {
    return (
        <article>
            <header>
                <h2> {nombre}</h2>
            </header>
            <picture>
                <img
                    src={imagen}
                    alt={nombre}
                    width={200}
                    height={200}
                    className='itemImg'
                />
            </picture>
            <section>
                <p className='info'>{`Precio: $${precio}`}</p>
                <p className='info'>Stock disponible: {stock}</p>
            </section>
            <footer className='itemFooter'>
                <Link to={`/Item/${id}`} className='Option'>
                    ver detalle
                </Link>
            </footer>
        </article>
    );
};
export default Item;

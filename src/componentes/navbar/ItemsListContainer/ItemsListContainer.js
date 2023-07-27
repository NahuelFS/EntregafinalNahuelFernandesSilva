import { useState, useEffect } from "react";
import ItemList from "../../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../../config/firebase";

const ItemsListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    //recupara el parametro
    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true);

        const collectionRef = categoryId
            ? query(
                  collection(db, "productos"),
                  where("categoria", "==", categoryId)
              )
            : collection(db, "productos");

        getDocs(collectionRef)
            //Si la promesa se resuelve bien
            .then((response) => {
                const prodcutAdapted = response.docs.map((doc) => {
                    const data = doc.data();
                    return {
                        id: doc.id,
                        ...data,
                    };
                });
                setProducts(prodcutAdapted);
            })

            //Si resuelve mal
            .catch(console.error)

            //Se ejecuta siempre
            .finally(() => {
                setLoading(false);
            });
    }, [categoryId]);

    return (
        <div style={{ paddingTop: "60px" }}>
            <h1 style={{ padding: "30px" }}> {greeting} </h1>
            {loading ? (
                <h3>Cargando productos...</h3>
            ) : products.length === 0 ? (
                <h3>No hay productos...</h3>
            ) : (
                <ItemList products={products} />
            )}
        </div>
    );
};

export default ItemsListContainer;

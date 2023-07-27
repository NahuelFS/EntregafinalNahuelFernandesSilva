import { useState, useEffect } from "react";

import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc, collection } from "firebase/firestore";
import { db } from "../../config/firebase";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const { ItemId } = useParams();

    useEffect(() => {
        setLoading(true);

        const docRef = doc(db, "productos", ItemId);

        getDoc(docRef)
            .then((response) => {
                console.log(response);
                const data = response.data();
                const prodcutAdapted = { id: response.id, ...data };
                setProduct(prodcutAdapted);
            })
            .catch((error) => {
                console.log("entra al error");

                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [ItemId]);
    return (
        <div clasName='ItemDetailContainer'>
            <ItemDetail {...product} />
        </div>
    );
};

export default ItemDetailContainer;

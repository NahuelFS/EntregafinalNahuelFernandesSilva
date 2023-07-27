import panPeregrino from "./ItemImg/panPeregrino.jpeg";
import yamani from "./ItemImg/yamani.jpeg";
import mermelada from "./ItemImg/mermelada.jpeg";

const products = [
    {
        id: "1",
        category: "Secos",
        price: "$1750",
        name: "Arroz Yamani",
        img: yamani,
        stock: 30,
        description: "",
    },

    {
        id: "2",
        name: "Pan del peregrino",
        price: "$1560",
        category: "Artesanales",
        img: panPeregrino,
        stock: 20,
        description: "Frutos Secos,",
    },

    {
        id: "3",
        name: "Mermelada",
        price: "$1610",
        category: "Dulces",
        img: mermelada,
        stock: 100,
        description: "mermeladas de manzana,naranja,durazo",
    },
];
export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 500);
    });
};

export const getProductsByid = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find((prod) => prod.id === productId));
        }, 500);
    });
};
export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const filteredProducts = products.filter(
                (product) => product.category === category
            );
            resolve(filteredProducts);
        }, 500);
    });
};

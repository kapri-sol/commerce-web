import React, { createContext, useEffect, useState, ReactNode } from "react";

interface Props {
    children: ReactNode;
}

export const ProductContext = createContext<any>([]);

const ProductProvider = ({ children }: Props) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();
            console.log(data);
            setProducts(data);
        };
        fetchProducts();
    }, []);
    return <ProductContext.Provider value={{ products }}>{children}</ProductContext.Provider>;
};

export default ProductProvider;

import React, { createContext, useEffect, useState, ReactNode } from "react";
import MainApi from "../api/main.api";

interface Props {
    children: ReactNode;
}

export const ProductContext = createContext<any>([]);

const ProductProvider = ({ children }: Props) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            const response = await MainApi.get("/products");
            const data = response.data;
            setProducts(data);
        };
        fetchProducts();
    }, []);
    return <ProductContext.Provider value={{ products }}>{children}</ProductContext.Provider>;
};

export default ProductProvider;

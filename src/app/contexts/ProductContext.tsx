import React, { createContext, useEffect, useState, ReactNode } from "react";
import MainApi from "../api/main.api";

interface Props {
    children: ReactNode;
}

export interface ProductData {
    data: ProductData[];
    count: number;
}

export interface ProductData {
    id: number;
    title: string;
    description: string;
    image: string;
    price: number;
    stockQuantity: number;
}

export const ProductContext = createContext<any>([]);

const ProductProvider = ({ children }: Props) => {
    const [products, setProducts] = useState<ProductData[]>([]);
    useEffect(() => {
        const getProducts = async () => {
            const response = await MainApi.get("/products");
            const data: ProductData = response.data;
            setProducts([...data.data]);
        };
        getProducts();
    }, []);
    return <ProductContext.Provider value={{ products }}>{children}</ProductContext.Provider>;
};

export default ProductProvider;

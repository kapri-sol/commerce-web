import React, { createContext, ReactNode, useState } from "react";

interface Props {
    children: ReactNode;
}

export const CartContext = createContext<any>(null);

const CartProvider = ({ children }: Props) => {
    const [cart, setCart] = useState<any>([]);

    const addToCart = (product: any, id: string) => {
        const newItem = { ...product, amount: 1 };
        const cartItem: any = cart.find((item: any) => item.id == id);

        if (cartItem) {
            const newCart = [...cart].map((item: any) => {
                if (item.id == id) {
                    return { ...item, amount: cartItem.amount + 1 };
                }
                return item;
            });
            setCart(newCart);
        } else {
            setCart([...cart, newItem]);
        }
    };
    return <CartContext.Provider value={{ cart, addToCart }}>{children}</CartContext.Provider>;
};
export default CartProvider;

import React, { createContext, ReactNode, useEffect, useState } from "react";

interface Props {
    children: ReactNode;
}

export const CartContext = createContext<any>(null);

const CartProvider = ({ children }: Props) => {
    const [cart, setCart] = useState<any>([]);
    const [itemAmount, setItemAmount] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const total = cart.reduce((accumulator: any, currentItem: any) => accumulator + currentItem.price * currentItem.amount, 0);
        setTotal(total);
    });

    useEffect(() => {
        if (cart) {
            const amount = cart.reduce((accumulator: number, currentItem: any) => accumulator + currentItem.amount, 0);
            setItemAmount(amount);
        }
    }, [cart]);

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
    const removeFromCart = (id: any) => {
        const newCart = cart.filter((item: any) => {
            return item.id !== id;
        });
        setCart(newCart);
    };

    const clearCart = () => {
        setCart([]);
    };

    const increaseAmount = (id: any) => {
        const cartItem = cart.find((item: any) => item.id == id);
        addToCart(cartItem, id);
    };

    const decreaseAmount = (id: any) => {
        const cartItem = cart.find((item: any) => item.id == id);
        if (cartItem) {
            const newCart = cart.map((item: any) => {
                if (item.id == id) {
                    return { ...item, amount: cartItem.amount - 1 };
                } else {
                    return item;
                }
            });
            setCart(newCart);
        }
        if (cartItem.amount < 2) {
            removeFromCart(id);
        }
    };
    return <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, increaseAmount, decreaseAmount, itemAmount, total }}>{children}</CartContext.Provider>;
};
export default CartProvider;

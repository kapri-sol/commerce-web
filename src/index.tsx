import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import CartProvider from "./app/contexts/CartContext";
import ProductProvider from "./app/contexts/ProductContext";
import SidebarProvider from "./app/contexts/SidebarContext";
import "./tailwind.css";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <SidebarProvider>
        <CartProvider>
            <ProductProvider>
                <React.StrictMode>
                    <App />
                </React.StrictMode>
            </ProductProvider>
        </CartProvider>
    </SidebarProvider>
);
import React from "react";
import Main from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SingUp";
import MainLayout from "./layout/main";
import ProductDetails from "./pages/ProductDetails";
import SignLayout from "./layout/sign/SignLayout";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route element={<MainLayout />}>
                        <Route path="/" element={<Main />} />
                        <Route path="products/:id" element={<ProductDetails />} />
                    </Route>
                    <Route element={<SignLayout />}>
                        <Route path="sign-in" element={<SignIn />} />
                        <Route path="sign-up" element={<SignUp />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

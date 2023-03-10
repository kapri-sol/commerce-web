import React from "react";
import Main from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SingUp";
import ProductDetails from "./pages/ProductDetails";
import SignLayout from "./layout/SignLayout";
import InternalServcerError from "./pages/error/InernalServerError";
import NotFound from "./pages/error/NotFound";
import ProductRegist from "./pages/ProductRegist";
import Customer from "./pages/Customer";
import RecoveryPassword from "./pages/RecoveryPassword";
import Account from "./pages/Account";
import Seller from "./pages/Seller";
import Shop from "./pages/Shop";
import MainLayout from "./layout/MainLayout";

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
                        <Route path="shop" element={<Shop />} />
                        <Route path="products" element={<ProductRegist />} />
                        <Route path="recovery-password" element={<RecoveryPassword />} />
                        <Route path="profile/account" element={<Account />} />
                        <Route path="profile/customer" element={<Customer />} />
                        <Route path="profile/seller" element={<Seller />} />
                        <Route path="internal-server-error" element={<InternalServcerError />} />
                        <Route path="/*" element={<NotFound />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

import React from "react";
import Main from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SingUp";
import MainLayout from "./layout/main";
import ProductDetails from "./pages/ProductDetails";
import SignLayout from "./layout/sign/SignLayout";
import InternalServcerError from "./pages/error/InernalServerError";
import NotFound from "./pages/error/NotFound";
import ProductRegist from "./pages/ProductRegist";
import Profile from "./pages/Profile";
import Customer from "./pages/Customer";
import RecoveryPassword from "./pages/RecoveryPassword";

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
                        <Route path="customer" element={<Customer />} />
                        <Route path="products" element={<ProductRegist />} />
                        <Route path="recovery-password" element={<RecoveryPassword />} />
                        <Route path="profile" element={<Profile />} />
                        <Route path="internal-server-error" element={<InternalServcerError />} />
                        <Route path="/*" element={<NotFound />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

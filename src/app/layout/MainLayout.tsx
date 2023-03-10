import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

const MainLayout = () => (
    <div>
        <Header />
        <Sidebar />
        <Outlet />
        <Footer />
    </div>
);

export default MainLayout;

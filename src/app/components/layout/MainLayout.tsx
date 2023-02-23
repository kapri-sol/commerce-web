import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../footer";
import Header from "../header/Header";
import Sidebar from "../sidebar";

const MainLayout = () => (
    <div>
        <Header />
        <Sidebar />
        <Outlet />
        <Footer />
    </div>
);

export default MainLayout;

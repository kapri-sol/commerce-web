import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../footer";
import Header from "../header";
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

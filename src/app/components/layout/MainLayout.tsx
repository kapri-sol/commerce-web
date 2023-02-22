import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Sidebar from "../sidebar";

const MainLayout = () => (
    <div>
        <Header />
        <Sidebar />
        <Outlet />
    </div>
);

export default MainLayout;

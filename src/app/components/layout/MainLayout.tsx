import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/Header";

const MainLayout = () => (
    <div>
        <Header />
        <Outlet />
    </div>
);

export default MainLayout;

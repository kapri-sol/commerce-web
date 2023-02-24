import React, { useContext, useEffect, useState } from "react";
import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import { SidebarContext } from "../../contexts/SidebarContext";

const Header = () => {
    const [isActiive, setIsActive] = useState(false);
    const { isOpen, setIsOpen } = useContext(SidebarContext);
    const { itemAmount } = useContext(CartContext);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
        });
    });
    return (
        <header className={`${isActiive ? "bg-white py-4 shadow-md" : "bg-none py-6"} fixed w-full z-10 transition-all`}>
            <div className="container mx-auto flex items-center justify-between h-full">
                <Link to={"/"}>
                    <img src="https://cdn-icons-png.flaticon.com/512/5968/5968887.png" alt="" className="w-[40px]" />
                </Link>
                <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer flex relative">
                    <BsBag className="text-2xl" />
                    <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">{itemAmount}</div>
                </div>
            </div>
        </header>
    );
};

export default Header;

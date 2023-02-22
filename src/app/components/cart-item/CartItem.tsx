import React from "react";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { Link } from "react-router-dom";

const CartItem = ({ item }: any) => {
    const { id, title, image, price, amount } = item;
    return (
        <div>
            <div className="w-full min-h-[150px] flex items-center gap-x-4">
                <Link to={`/products/${id}`}>
                    <img className="max-w-[80px]" src={image} alt="" />
                </Link>
            </div>
            <div className="w-full flex flex-col">
                <div className="flex justify-between mb-2">
                    <Link to={`/products/${id}`} className="text-sm uppercase font-medium max-w-[240px] text-primary hover:underline">
                        {title}
                    </Link>
                    <div className="text-xl cursor-pointer">
                        <IoMdClose className="text-gray-500 hover:text-red-500 transition" />
                    </div>
                </div>
                <div className="bg-pink-200 flex gap-x-2 h-[36px] text-sm">
                    <div className="flex flex-1 max-w-[100]px bg-blue-400 items-center h-full border font-medium">
                        <div>
                            <IoMdRemove />
                        </div>
                        <div>1</div>
                        <div>
                            <IoMdAdd />
                        </div>
                    </div>
                    <div>item price</div>
                    <div>final price</div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
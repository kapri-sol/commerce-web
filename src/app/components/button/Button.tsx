import React from "react";
import { ButtonValue } from "./Button.type";

const Button = (value: ButtonValue) => {
    const { name, type } = value;

    return (
        <button type={type} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            {name}
        </button>
    );
};

export default Button;

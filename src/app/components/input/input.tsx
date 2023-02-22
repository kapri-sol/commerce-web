import React from "react";
import { InputValue } from "./input.type";

const Input = (value: InputValue) => {
    const { register, name, ...rest } = value;
    return <input name={name} {...register(name)} {...rest} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />;
};

export default Input;

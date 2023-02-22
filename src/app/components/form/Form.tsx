import React from "react";
import { useForm } from "react-hook-form";
import Button from "../button";
import Input from "../input";
import Label from "../label";
import { FormValue } from "./Form.type";

const Form = (values: FormValue) => {
    const { register, handleSubmit } = useForm();
    const { name, inputs, buttons } = values;
    return (
        <div className="w-full max-w-lg">
            <h2>{name}</h2>
            <form onSubmit={handleSubmit((data) => alert(JSON.stringify(data)))} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                {inputs.map(({ id, name, placeholder }) => (
                    <div className="mb-4">
                        <Label name={name} htmlFor="id" />
                        <Input id={id} name={name} placeholder={placeholder} register={register} />
                    </div>
                ))}
                {buttons?.map(({ name, type }) => (
                    <Button name={name} type={type}></Button>
                ))}
            </form>
        </div>
    );
};
export default Form;

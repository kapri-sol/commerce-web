import React from "react";
import Form from "../components/form";

const SignUp = () => (
    <Form
        name="Sign Up"
        inputs={[
            {
                id: "email",
                name: "email",
                type: "email",
                placeholder: "test@email.com"
            },

            {
                id: "password",
                name: "password",
                type: "password",
                placeholder: "********"
            },
            {
                id: "name",
                name: "name",
                type: "name",
                placeholder: "name"
            },
            {
                id: "address",
                name: "address",
                type: "address",
                placeholder: "address"
            }
        ]}
        buttons={[
            {
                name: "Sign Up",
                type: "submit"
            }
        ]}
    />
);

export default SignUp;

import React from "react";
import Form from "../components/form";

const SignIn = () => (
    <Form
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
            }
        ]}
        buttons={[
            {
                name: "Sign In",
                type: "submit"
            }
        ]}
    />
);

export default SignIn;

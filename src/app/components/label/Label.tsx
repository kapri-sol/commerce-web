import React from "react";
import { LabelValue } from "./Label.type";

const Label = (values: LabelValue) => {
    const { name, htmlFor } = values;
    return (
        <label htmlFor={htmlFor} className="block text-gray-700 text-sm font-bold mb-2">
            {name}
        </label>
    );
};

export default Label;

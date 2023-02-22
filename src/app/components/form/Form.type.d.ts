import { ButtonValue } from "../button/Button.type";
import { InputType } from "../input/input.type";

export type FormInput = Pick<InputType, "id" | "name" | "placeholder" | "type">;

export type FormValue = {
    name?: string;
    inputs: FormInput[];
    buttons?: ButtonValue[];
};

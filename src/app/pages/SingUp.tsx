import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainApi from "../api/main.api";
import Modal from "../components/Modal";

const SignUp = () => {
    const [accountHidden, setAccountHidden] = useState(true);

    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [checkPassword, setCheckPassword] = useState("");

    const navigate = useNavigate();

    const onClickBtn = () => {
        navigate("/sign-in");
    };

    const handleSubmit = async (event: React.MouseEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            await MainApi.post("/accounts", {
                email,
                name,
                phoneNumber,
                password
            });
            setAccountHidden(false);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Sign Up</h1>
                        <h3 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Account</h3>
                        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    email
                                </label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="test@email.com"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required={true}
                                />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">name</label>
                                <input
                                    type={"text"}
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="+82 10-1234-1234"
                                />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">phone number</label>
                                <input
                                    type={"tel"}
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="+82 10-1234-1234"
                                />
                            </div>

                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">password</label>
                                <input
                                    type={"password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder={"********"}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </div>
                            <div className="mb-4 my-2">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">check password</label>
                                <input
                                    type={"password"}
                                    value={checkPassword}
                                    onChange={(e) => setCheckPassword(e.target.value)}
                                    placeholder={"********"}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                            >
                                Sign Up
                            </button>
                            <Modal message="Create account success" button="ok" hidden={accountHidden} setHidden={setAccountHidden} onClick={onClickBtn} />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignUp;

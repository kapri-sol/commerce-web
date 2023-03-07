import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MainApi from "../api/main.api";
import Modal from "../components/Modal";

const Customer = () => {
    const [hidden, setHidden] = useState(true);
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const navigate = useNavigate();

    const onClickBtn = () => {
        navigate("/");
    };

    const createSubmit = async (e: React.MouseEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();
            await MainApi.post("/customers", {
                name,
                address
            });
            setHidden(false);
        } catch (err) {
            console.error(err);
        }
    };

    const updateSubmit = async (e: React.MouseEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();
            await MainApi.patch("/customers", {
                name: name || null,
                address: address || null
            });
            setHidden(false);
        } catch (err) {
            console.error(err);
        }
    };
    const getCustomer = async () => {
        try {
            const { data } = await MainApi.get("/customers/me");
            const { name, address } = data;

            if (name) {
                setName(name);
            }

            if (address) {
                setAddress(address);
            }
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        getCustomer();
    });

    return name && address ? (
        <section className="bg-white dark:bg-gray-900">
            <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
                <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Update account</h2>
                <form>
                    <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
                        <div className="sm:col-span-2">
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                readOnly={true}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="test@email.com"
                                required={true}
                            />
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Address
                            </label>
                            <input
                                type="text"
                                name="address"
                                id="address"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                placeholder="+82 10-1234-5678"
                                required={true}
                            />
                        </div>
                    </div>
                    <div className="flex justify-between space-b space-x-4">
                        <button
                            type="submit"
                            className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                        >
                            Update customer
                        </button>
                    </div>
                </form>
            </div>
        </section>
    ) : (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Sign Up</h1>
                        <h3 className="text-l font-bold leading-tight tracking-tight text-gray-900 dark:text-white">Customer</h3>
                        <form onSubmit={createSubmit} className="space-y-4 md:space-y-6">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    name
                                </label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="test@email.com"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required={true}
                                />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">address</label>
                                <input
                                    type={"textarea"}
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Seoul"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                            >
                                Sign Up
                            </button>
                        </form>
                        <Modal message="Registe customer information success" button="ok" hidden={hidden} setHidden={setHidden} onClick={onClickBtn} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Customer;

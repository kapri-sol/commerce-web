import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MainApi from "../api/main.api";
import Modal from "../components/Modal";

const Customer = () => {
    const [modlHidden, setModalHidden] = useState<boolean>(true);
    const [isExistCustomer, setIsExistCustomer] = useState<boolean>(false);
    const [loading, setLoading] = useState(true);
    const [name, setName] = useState<string>("");
    const [address, setAddress] = useState<string>("");

    const onSubmit = async (e: React.MouseEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();
            await MainApi.patch("/customers", {
                name: name || null,
                address: address || null
            });
            setModalHidden(false);
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

            if (name && address) {
                setIsExistCustomer(true);
                setLoading(false);
            }
        } catch (err) {
            console.error(err);
            setLoading(false);
        }
    };

    useEffect(() => {
        getCustomer();
    }, []);

    return loading ? (
        <div role="status" className="max-w-sm animate-pulse mx-auto">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
            <span className="sr-only">Loading...</span>
        </div>
    ) : isExistCustomer ? (
        <form onSubmit={onSubmit}>
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
            <Modal message="Update success" button="ok" hidden={modlHidden} setHidden={setModalHidden} />
        </form>
    ) : (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                <h2 className="mb-2 py-4 text-xl font-semibold leading-none text-gray-900 md:text-2xl dark:text-white">Customer</h2>
                <dl className="flex items-center space-x-6">
                    <div className="flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                        <svg aria-hidden="true" className="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
                        </svg>
                        <span className="sr-only">Info</span>
                        <div>
                            <span className="font-medium">Information Empty!</span> You must register customer information.
                        </div>
                    </div>
                </dl>

                <div className="flex items-center space-x-4">
                    <button
                        type="button"
                        className="mx-auto text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                        <Link to={"/register/customer"}>
                            <svg aria-hidden="true" className="mr-1 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path>
                                <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd"></path>
                            </svg>
                            Register
                        </Link>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Customer;

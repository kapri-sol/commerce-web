import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MainApi from "../api/main.api";
import Modal from "../components/Modal";

const Seller = () => {
    const [modlHidden, setModalHidden] = useState<boolean>(true);
    const [isExistSeller, setIsExistSeller] = useState<boolean>(false);
    const [loading, setLoading] = useState(true);
    const [name, setName] = useState<string>("");
    const [address, setAddress] = useState<string>("");

    const navigate = useNavigate();

    const onSubmitUpdate = async (e: React.MouseEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();
            await MainApi.patch("/sellers", {
                name: name || null,
                address: address || null
            });
            setModalHidden(false);
        } catch (err) {
            console.error(err);
        }
    };

    const onSubmitRegister = async (e: React.MouseEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();
            await MainApi.post("/sellers", {
                name: name || null,
                address: address || null
            });
            setName(name);
            setAddress(address);
            navigate("/seller");
        } catch (err) {
            console.error(err);
        }
    };

    const getSeller = async () => {
        try {
            const { data } = await MainApi.get("/sellers/me");
            const { name, address } = data;

            if (name) {
                setName(name);
            }

            if (address) {
                setAddress(address);
            }

            if (name && address) {
                setIsExistSeller(true);
                setLoading(false);
            }
        } catch (err) {
            console.error(err);
            setLoading(false);
        }
    };

    useEffect(() => {
        console.log("call");
        getSeller();
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
    ) : (
        <section className="bg-white dark:bg-gray-900">
            <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
                <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">{isExistSeller ? "Update seller" : "Register seller"} </h2>

                <form onSubmit={isExistSeller ? onSubmitUpdate : onSubmitRegister}>
                    <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
                        <div className="sm:col-span-2">
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Paul"
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
                                placeholder="Seoul Gangnam-gu"
                                required={true}
                            />
                        </div>
                    </div>
                    <div className="flex justify-between space-b space-x-4">
                        <button
                            type="submit"
                            className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                        >
                            {isExistSeller ? "Update" : "Register"}
                        </button>
                    </div>
                    <Modal message="Success" button="ok" hidden={modlHidden} setHidden={setModalHidden} />
                </form>
            </div>
        </section>
    );
};
export default Seller;

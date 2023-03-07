import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MainApi from "../api/main.api";
import Modal from "../components/Modal";

const Profile = () => {
    const [hidden, setHidden] = useState<boolean>(true);
    const [email, setEmail] = useState<string>("");
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [checkPassword, setCheckPassword] = useState<string>("");

    const navigate = useNavigate();

    const getAccount = async () => {
        try {
            const response = await MainApi.get("/accounts/me");
            const data = response.data;
            if (data.email) {
                setEmail(data.email);
            }
            if (data.phoneNumber) {
                setPhoneNumber(data.phoneNumber);
            }
        } catch (err) {
            navigate("/internal-server-error");
        }
    };

    const onSubmit = async (e: React.MouseEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await MainApi.patch("/accounts", {
                phoneNumber,
                password: password || null
            });
            setHidden(false);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        getAccount();
    }, []);

    return (
        <>
            <section className="bg-white dark:bg-gray-900">
                <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
                    <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Update account</h2>
                    <form onSubmit={onSubmit}>
                        <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
                            <div className="sm:col-span-2">
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    readOnly={true}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="test@email.com"
                                    required={true}
                                />
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Phone Number
                                </label>
                                <input
                                    type="text"
                                    name="phone-number"
                                    id="phone-number"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    placeholder="+82 10-1234-5678"
                                    required={true}
                                />
                            </div>
                            <div className="w-full">
                                <label htmlFor="brand" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="********"
                                    required={false}
                                />
                            </div>
                            <div className="w-full">
                                <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Check Password
                                </label>
                                <input
                                    type="password"
                                    name="check-password"
                                    id="check-password"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    value={checkPassword}
                                    onChange={(e) => setCheckPassword(e.target.value)}
                                    placeholder="********"
                                    required={false}
                                />
                            </div>
                        </div>
                        <div className="flex justify-between space-b space-x-4">
                            <button
                                type="submit"
                                className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                            >
                                Update account
                            </button>
                        </div>
                    </form>
                </div>
            </section>
            <Modal message="Success update profile" button="Ok" hidden={hidden} setHidden={setHidden} />
        </>
    );
};

export default Profile;

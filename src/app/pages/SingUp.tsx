import React from "react";

const SignUp = () => {
    return (
        <div className="pt-[100px] flex flex-col justify-center">
            <div>Commerce</div>
            <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800">
                <div>
                    <h2 className="bg-blue-400 py-8 text-center">Sign Up</h2>
                    <form className="py-8 my-8">
                        <div className="bg-gray-300 mx-auto px-12 py-2">
                            <div className="mb-4 my-2">
                                <label className="mx-4 p-1 font-semibold">email</label>
                                <input type={"email"} placeholder={"test@email.com"} className="shadow border p-1" />
                            </div>
                            <div className="mb-4 my-2">
                                <label className="mx-4 p-1">name</label>
                                <input type={"text"} className="shadow border p-1" />
                            </div>
                            <div className="mb-4 my-2">
                                <label className="mx-4 p-1">phone number</label>
                                <input type={"tel"} className="shadow border p-1" />
                            </div>
                            <div className="mb-4 my-2">
                                <label className="mx-4 p-1">password</label>
                                <input type={"password"} placeholder={"********"} className="shadow border p-1" />
                            </div>
                            <div className="mb-4 my-2">
                                <label className="mx-4 p-1">check password</label>
                                <input type={"password"} placeholder={"********"} className="shadow border p-1" />
                            </div>
                            <div className="bg-red-300 mx-auto">
                                <button type="submit" className="my-8">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;

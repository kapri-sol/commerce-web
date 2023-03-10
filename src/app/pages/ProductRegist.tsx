import React, { DragEvent, useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import MainApi from "../api/main.api";
import Modal from "../components/Modal";
const ProductRegist = () => {
    const [hidden, setHidden] = useState<boolean>(true);
    const [name, setName] = useState<string>();
    const [price, setPrice] = useState<string>();
    const [stockQuantity, setStockQuantity] = useState<string>();
    const [description, setDescription] = useState<string>();
    const [file, setFile] = useState<File | null>(null);
    const [image, setImage] = useState<string | null>(null);
    const navigate = useNavigate();

    const onChangeImage = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files === null) {
            return;
        }
        setFile(e.target.files[0]);
        const formData = new FormData();
        formData.append("file", e.target.files[0]);
        try {
            const response = await MainApi.post("/files", formData);
            setImage(response.data.filePath);
        } catch (err) {
            console.error(err);
        }
    }, []);

    const onSubmit = async (e: React.MouseEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await MainApi.post("/products", {
                name,
                price: Number(price),
                stockQuantity: Number(stockQuantity),
                description,
                image
            });
            navigate("/");
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add a new product</h2>
                <form onSubmit={onSubmit}>
                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                        <div className="sm:col-span-2">
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Product Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Type product name"
                                required={true}
                            />
                        </div>
                        <div className="w-full">
                            <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Price
                            </label>
                            <input
                                type="number"
                                name="price"
                                id="price"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="$2999"
                                required={true}
                            />
                        </div>
                        <div className="w-full">
                            <label htmlFor="brand" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Stock Quantity
                            </label>
                            <input
                                type="number"
                                name="stock-quantity"
                                id="stock-quantity"
                                value={stockQuantity}
                                onChange={(e) => setStockQuantity(e.target.value)}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="100"
                                required={true}
                            />
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Description
                            </label>
                            <textarea
                                id="description"
                                rows={8}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Your description here"
                            ></textarea>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Product Images
                            </label>
                            <label
                                htmlFor="dropzone-file"
                                className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                            >
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    {file === null ? (
                                        <div>
                                            <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                                            </svg>
                                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                                <span className="font-semibold">Click to upload</span> or drag and drop
                                            </p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                        </div>
                                    ) : (
                                        <div>
                                            <img src={window.URL.createObjectURL(file)} alt="preview" className="object-scale-down h-56 w-auto" />
                                        </div>
                                    )}
                                </div>
                                {image === null ? <input id="dropzone-file" name="file" type="file" accept="image/*" onChange={onChangeImage} className="hidden" /> : <input type="text" name="image-path" value={image} className=" hidden" />}
                            </label>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
                    >
                        Add product
                    </button>
                </form>
                <Modal message="Add product success" button="Ok" hidden={hidden} setHidden={setHidden} />
            </div>
        </section>
    );
};

export default ProductRegist;

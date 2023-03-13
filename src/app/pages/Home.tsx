import React, {useContext, useEffect, useState} from "react";
import {Link, useSearchParams} from "react-router-dom";
import Product from "../components/product";
import { ProductPage} from "../type/ProductPage.type";
import MainApi from "../api/main.api";

const Home = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const page = searchParams.get("page")
    const size = searchParams.get("size")

    const [productPage, setProductPage] = useState<ProductPage>({
        content: [],
        size: 0,
        totalPage: 0
    });

    if(page === null && size === null) {
        setSearchParams({
            page: "1",
            size: "5"
        })
    }

    const getProducts = async () => {
        const response = await MainApi.get(`/products?page=${Number(page)-1}&size=${5}`);
        const productPage: ProductPage = response.data;
        setProductPage(productPage);
    };

    useEffect(() => {
        getProducts();
    }, [searchParams]);

    return (
        <section className="py-16">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
                    {productPage.content.map((product: any) => {
                        return <Product key={product.id} product={product} />;
                    })}
                </div>
            </div>
            <div className="flex justify-center">
                <nav aria-label="Page navigation example">
                    <ul className="inline-flex items-center -space-x-px">
                        <li>
                            <Link
                                to="#"
                                className="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                            >
                                <span className="sr-only">Previous</span>
                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                </svg>
                            </Link>
                        </li>
                        {
                            Array.from({length: productPage.totalPage}, (_, i) => i+1).map((i) => (
                                <li>
                                    {Number(page) === i ?
                                        <Link to={`/?page=${i}`} aria-current="page"
                                              className="z-10 px-3 py-2 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                                        >
                                            {i}
                                        </Link>:
                                        <Link to={`/?page=${i}`}
                                              className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                        >
                                            {i}
                                        </Link>
                                    }
                                </li>
                            ))

                        }
                        <li>
                            <Link
                                to="#"
                                className="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                            >
                                <span className="sr-only">Next</span>
                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                                </svg>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </section>
    );
};

export default Home;

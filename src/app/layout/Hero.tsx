import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        // <section className="h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24">
        //     <div className="container mx-auto justify-around h-full">
        //         <div className="flex flex-col justify-center">
        //             <div className="font-semibold flex items-center uppercase">
        //                 <div className="w-10 h-[2px] bg-red-500 mr-3"></div>New Trend
        //             </div>
        //             <h1 className="text-[70px] leading-[1.1] font-light mb-4">
        //                 AUTUMN SALE STYLISH <br />
        //                 <span className="font-semibold">WOMENS</span>
        //             </h1>
        //             <Link to={"/"} className="self-start uppercase font-semibold border-b-2 border-primary">
        //                 Discover More
        //             </Link>
        //             <div className="hidden lg:block">
        //                 <img src="https://images.unsplash.com/photo-1605092676920-8ac5ae40c7c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dGlnZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" alt="" className="max-h-[484px]" />
        //             </div>
        //         </div>
        //     </div>
        // </section>
        <section className="py-24">
            <div className="flex justify-center items-center w-full">
                <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" alt="" className="justify-center items-center" />
            </div>
        </section>
    );
};

export default Hero;

import React, { useState } from 'react';

const ProductsIntro = () => {

    const [productbtn, setProductbtn] = useState("products");

    return (
        <div>
            <div className='max-w-[1200px] mx-auto mt-32 text-center'>
                <h1 className='font-extrabold text-5xl text-black mb-4'>Premium Digital Tools</h1>

                <p className='text-base leading-5 text-[#627382] mb-4'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>

                <button onClick={()=> setProductbtn("products")} className={`${productbtn === "products" ? "py-3.5 px-6 text-white bg-linear-to-r from-violet-600 to-purple-600 rounded-full text-base font-bold cursor-pointer transition-transform duration-150 active:scale-95" : "px-8 py-3.5 font-medium text-base text-black bg-white cursor-pointer transition-transform duration-150 active:scale-95"}`}>Products</button>

                <button onClick={()=> setProductbtn("cart")} className={`${productbtn === "cart" ? "py-3.5 px-6 text-white bg-linear-to-r from-violet-600 to-purple-600 rounded-full text-base font-bold cursor-pointer transition-transform duration-150 active:scale-95" : "px-8 py-3.5 font-medium text-base text-black bg-white cursor-pointer transition-transform duration-150 active:scale-95" } `}>Cart (0)</button>

            </div>
        </div>
    );
};

export default ProductsIntro;
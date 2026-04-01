import React, { use, useState } from 'react';
import { TiTick } from 'react-icons/ti';

const Products = ({ promiseProduct }) => {

    console.log(promiseProduct)

    const products = use(promiseProduct);

    console.log(products);


    const [productbtn, setProductbtn] = useState("products");
    return (
        <div>
            <div className='max-w-[1200px] mx-auto text-center'>
                <button onClick={() => setProductbtn("products")} className={`${productbtn === "products" ? "py-3.5 px-6 text-white bg-linear-to-r from-violet-600 to-purple-600 rounded-full text-base font-bold cursor-pointer transition-transform duration-150 active:scale-95" : "px-8 py-3.5 font-medium text-base text-black bg-white cursor-pointer transition-transform duration-150 active:scale-95"}`}>Products</button>

                <button onClick={() => setProductbtn("cart")} className={`${productbtn === "cart" ? "py-3.5 px-6 text-white bg-linear-to-r from-violet-600 to-purple-600 rounded-full text-base font-bold cursor-pointer transition-transform duration-150 active:scale-95" : "px-8 py-3.5 font-medium text-base text-black bg-white cursor-pointer transition-transform duration-150 active:scale-95"} `}>Cart (0)</button>
            </div>
            <div className='max-w-[1200px] mx-auto grid grid-cols-3 gap-7 mt-10'>
                {
                    products.map((product) => {
                        return <div className="card bg-base-100 w-96 shadow-sm p-6 rounded-2xl cursor-pointer transition-transform duration-200 active:scale-95">
                    <div className='flex justify-between items-center'>
                        <img src="/src/assets/products/writing_2327400 1.png" alt="" />
                        <span className='inline-block text-[#BB4D00] py-1.5 px-3 bg-[#FEF3C6] rounded-full'>Best Seller</span>
                    </div>
                    <div className="card-body">
                        <h1>AI Writing Pro</h1>
                        <p>Generate high-quality content, blogs, and marketing copy in seconds with advanced AI.</p>
                        <h3>$29/Mo</h3>
                        <div>
                            <p className='flex items-center'><TiTick className='text-green-600 text-2xl'></TiTick><span className='text-base'>Unlimited AI generations</span></p>
                            <p className='flex items-center'><TiTick className='text-green-600 text-2xl'></TiTick><span className='text-base'>50+ writing templates</span></p>
                            <p className='flex items-center'><TiTick className='text-2xl text-green-600'></TiTick><span className='text-base'>Grammar checker</span></p>
                        </div>
                        <div className="card-actions justify-end">
                            <button className="btn w-full rounded-full bg-linear-to-r from-violet-600 to-purple-600 text-white">Buy Now</button>
                        </div>
                    </div>
                </div>
                    })
                }
            </div>
        </div>
    );
};

export default Products;
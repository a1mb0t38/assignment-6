import React, { use, useState } from 'react';

import Cards from './Cards';
import Carts from '../carts/Carts';

const Products = ({ promiseProduct, setCartCount, cartCount }) => {

    // console.log(promiseProduct)

    const products = use(promiseProduct);

    // console.log(products);


    const [productbtn, setProductbtn] = useState("products");
    const [cartdata, setCartData] = useState([])
     const [priceCount, setPriceCount] = useState(0);
    return (
        <div>
            <div className='max-w-[1200px] mx-auto text-center'>
                <button onClick={() => setProductbtn("products")} className={`${productbtn === "products" ? "py-3.5 px-6 text-white bg-linear-to-r from-violet-600 to-purple-600 rounded-full text-base font-bold cursor-pointer transition-transform duration-150 active:scale-95" : "px-8 py-3.5 font-medium text-base text-black bg-white cursor-pointer transition-transform duration-150 active:scale-95"}`}>Products</button>

                <button onClick={() => setProductbtn("cart")} className={`${productbtn === "cart" ? "py-3.5 px-6 text-white bg-linear-to-r from-violet-600 to-purple-600 rounded-full text-base font-bold cursor-pointer transition-transform duration-150 active:scale-95" : "px-8 py-3.5 font-medium text-base text-black bg-white cursor-pointer transition-transform duration-150 active:scale-95"} `}>Cart ({cartCount})</button>
            </div>
            
            <div className='max-w-[1200px] mx-auto grid grid-cols-3 gap-7 mt-10'>
                
                {
                    productbtn === "products" ? products.map((product, index) => {
                        return <Cards key={index} product={product} setCartCount={setCartCount} cartCount={cartCount} cartdata={cartdata} setCartData={setCartData}></Cards>
                    }) : <Carts cartdata={cartdata} priceCount={priceCount} setPriceCount={setPriceCount}></Carts>
                    
                }
            </div>
        </div>
    );
};

export default Products;
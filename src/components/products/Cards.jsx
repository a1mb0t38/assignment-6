import React, { useState } from 'react';
import { TiTick } from 'react-icons/ti';

const Cards = ({product, setCartCount, cartCount, cartdata, setCartData}) => {
    // console.log(product);
    const [bought, setBought] = useState(false);
   


    const handleCartCount = () => {
        setBought(true); 
        setCartCount(cartCount + 1);
        setCartData([...cartdata, product])
    }

    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm p-6 rounded-2xl cursor-pointer transition-transform duration-200 active:scale-95">
                    <div className='flex justify-between items-center'>
                        <img src="/src/assets/products/writing_2327400 1.png" alt="" />
                        {
                            product.tag === "Best Seller" && <span className='inline-block text-[#BB4D00] py-1.5 px-3 bg-[#FEF3C6] rounded-full'>{product.tag}</span>
                        }   
                        {
                            product.tag === "Popular" && <span className='inline-block text-purple-500 py-1.5 px-3 bg-[#E1E7FF] rounded-full'>{product.tag}</span>
                        }
                        {
                            product.tag === "New" && <span className='inline-block text-green-600 py-1.5 px-3 bg-green-200 rounded-full'>{product.tag}</span>
                        }
                    </div>
                    <div className="card-body">
                        <h1 className='text-2xl font-bold text-black'>{product.name}</h1>
                        <p className='text-base leading-5 text-[#627382]'>{product.description}</p>
                        <h3 className='text-[#627382]'><span className='font-bold text-2xl text-black'>${product.price}</span>/Mo</h3>
                        <div>
                            
                            {
                                product.features.map((feature, index)=> {
                                    return <p key={index}    className='flex items-center'><TiTick className='text-green-600 text-2xl'></TiTick><span className='text-base'>{feature}</span></p>
                                })
                            }
                        </div>
                        <div className="card-actions justify-end">
                            <button onClick={handleCartCount} className="btn w-full rounded-full bg-linear-to-r from-violet-600 to-purple-600 text-white">{bought === true ? <span className='bg-gray-500'>Went to Cart</span> : "Buy Now"}</button>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Cards;
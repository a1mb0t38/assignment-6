import React from 'react';

const Carts = ({ cartdata }) => {
    return (
        <div>
            {
                cartdata.map((cart, index) => {
                    return <div key={index} className='flex items-center justify-between border rounded-xl p-2 gap-6'>
                        <div>
                            <img src="" alt="" />

                            <div>
                                <h2>{cart.name}</h2>
                                <p>${cart.price}</p>
                            </div>
                        </div>
                        <span className='text-red-700 cursor-pointer'>Remove</span>
                    </div>

                })
            }
           
        </div>
    );
};

export default Carts;
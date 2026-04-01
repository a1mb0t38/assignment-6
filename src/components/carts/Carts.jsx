import React from 'react';

const Carts = ({ cartdata,setCartData, setCartCount, cartCount }) => {

    const handleDelete = (cart) => {
        // console.log(cartdata, "cart")
        const filterCart = cartdata.filter(carts => carts.name !== cart.name);
        // console.log(filterCart, "filterCart");
        setCartData(filterCart);
        setCartCount(cartCount -1)
    }
    return (
        <div>
            {
                cartdata.map((cart, index) => {
                    return <div key={index} className='flex items-center justify-between border rounded-xl p-2 gap-6'>
                        <div>
                            {/* <img src="../../assets/products/writing_2327400 1.png" alt="png" /> */}

                            <div>
                                <h2 className='font-semibold text-2xl text-black'>{cart.name}</h2>
                                <p className='font-medium text-base'>${cart.price}</p>
                            </div>
                        </div>
                        <span onClick={()=>handleDelete(cart)} className='text-red-700 cursor-pointer'>Remove</span>
                    </div>

                })
            }
           
        </div>
    );
};

export default Carts;
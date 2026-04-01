import React from 'react';
import logo from '../../assets/DigiTools.png';

const NavBar = ({cartCount}) => {
    return (
        <div>
            <div className="flex justify-between items-center px-52 py-3">
                <div className="">
                    <img src={logo} alt="" />
                </div>
                <div>
                    <ul className='flex items-center gap-8 font-semibold text-base text-black'>
                        <li><a href="">Products</a></li>
                        <li><a href="">Features</a></li>
                        <li><a href="">Pricing</a></li>
                        <li><a href="">Testimonials</a></li>
                        <li><a href="">FAQ</a></li>
                    </ul>
                </div>
                <div className="flex items-center">

                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle mr-4">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
                            <span className="badge badge-sm indicator-item bg-red-600 text-white">{cartCount}</span>
                        </div>
                    </div>

                    <div className='flex items-center gap-3'>
                        <button className='cursor-pointer text-base font-semibold text-black'>Login</button>

                        <button className='cursor-pointer px-4 py-3 text-white bg-linear-to-r from-blue-700 to-purple-600 rounded-full cursor-pointer transition-transform duration-150 active:scale-95'>Get Started</button>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default NavBar;
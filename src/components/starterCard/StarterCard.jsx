import React from 'react';
import user from "../../assets/user.png";
import packag from "../../assets/package.png";
import rocket from "../../assets/rocket.png";

const StarterCard = () => {
    return (
        <div>
            <div className='max-w-[1200px] mx-auto mb-28'>
                <h1 className='text-center font-extrabold text-5xl text-black'>Get Started in 3 Steps</h1>
                <p className='text-sm text-[#627382] text-center mt-4'>Start using premium digital tools in minutes, not hours.</p>
                <div className='max-w-[1200px] w-full grid grid-cols-1 md:grid-cols-3 gap-8 mt-10'>
                    <div className=' relative shadow-sm space-y-4 rounded-2xl p-6'>
                        <span className='absolute top-4 right-4 bg-purple-600 text-white text-xs font-bold rounded-full p-2.5'>01</span>
                        <div className='flex justify-center'>
                            <img className='bg-violet-200 rounded-full p-3.5' src={user} alt="" />
                        </div>
                        <h3 className='text-center text-2xl font-bold text-black'>Create Account</h3>
                        <p className='text-center'>Sign up for free in seconds. No credit card required to get started.</p>
                    </div>
                    <div className='relative shadow-sm space-y-4 rounded-2xl p-6'>
                        <span className='absolute top-4 right-4 bg-purple-600 text-white text-xs font-bold rounded-full p-2.5'>02</span>
                        <div className='flex justify-center'>
                            <img className='bg-violet-200 rounded-full p-3.5' src={packag} alt="" />
                        </div>
                        <h3 className='text-center text-2xl font-bold text-black'>Choose Products</h3>
                        <p className='text-center'>Browse our catalog and select the toolsthat fit your needs.</p>
                    </div>
                    <div className='relative shadow-sm space-y-4 rounded-2xl p-6'>
                        <span className='absolute top-4 right-4 bg-purple-600 text-white text-xs font-bold rounded-full p-2.5'>03</span>
                        <div className='flex justify-center'>
                            <img className='bg-violet-200 rounded-full p-3.5' src={rocket} alt="" />
                        </div>
                        <h3 className='text-center text-2xl font-bold text-black'>Start Creating</h3>
                        <p className='text-center'>Download and start using your premium tools immediately.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StarterCard;
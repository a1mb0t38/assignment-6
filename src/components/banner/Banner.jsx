import React from 'react';
import { CiPlay1 } from 'react-icons/ci';
import banner from '../../assets/banner.png';

const Banner = () => {
    return (
        <div>
            <div className='max-w-[1200px] mx-auto my-16 flex items-center gap-16'>
                <div>
                    <div className='flex items-center gap-2 bg-purple-200 rounded-full w-fit px-4 py-2 cursor-pointer transition-transform duration-150 active:scale-95 mb-6'>
                        <span className='relative flex h-3 w-3'>
                            <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-500 opacity-65'></span>
                            <span className='relative inline-flex rounded-full h-3 w-3 bg-purple-600'></span>
                        </span>
                        <span className='text-base font-medium bg-linear-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent'>
                            New: AI-Powered Tools Available
                        </span>
                    </div>
                    <h1 className='font-extrabold text-black text-7xl leading-20 mb-4'>Supercharge YourDigital Workflow</h1>
                    <p className='text-[#627382] text-[18px] leading-5 mb-8'>Access premium AI tools, design assets, templates, and productivity
                        software—all in one place. Start creating faster today.
                        Explore Products
                    </p>
                    <div className='flex items-center'>
                        <button className='text-white bg-linear-to-r from-violet-600 to-purple-600 px-4 py-3.5 rounded-full mr-4 text-base font-bold cursor-pointer transition-transform duration-150 active:scale-95'>Explore Products</button>
                    <button className='flex items-center gap-1 px-4 py-3.5 border rounded-full text-base font-bold cursor-pointer transition-transform duration-150 active:scale-95'><CiPlay1></CiPlay1> <span className='inline-block bg-linear-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent'>Watch Demo</span></button>
                    </div>
                </div>
                <div>
                    <img className='w-fit rounded-[8px]' src={banner} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;
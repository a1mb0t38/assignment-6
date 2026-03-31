import React from 'react';

const Intro = () => {
    return (
        <div className='bg-linear-to-r from-violet-600 to-purple-600'>
            <div className='flex max-w-[1200px] mx-auto items-center justify-around text-white py-16 divide-x divide-white/30'>
                <div className='px-20'>
                    <h1 className='font-extrabold text-6xl'>50K+</h1>
                    <p className='font-medium text-2xl'>Active Users</p>
                </div>
                <div className='px-20'>
                    <h1 className='font-extrabold text-6xl'>200+</h1>
                    <p className='font-medium text-2xl'>Premium Tools</p>
                </div>
                <div>
                    <h1 className='font-extrabold text-6xl'>4.9</h1>
                    <p className='font-medium text-2xl'>Rating</p>
                </div>
            </div>
        </div>
    );
};

export default Intro;
import React from 'react';
import { TiTick } from 'react-icons/ti';


const SimplePricing = () => {
    return (
        <div>
            <h1 className='text-center font-extrabold text-5xl text-black'>Simple, Transparent Pricing</h1>

            <p className='text-base leading-4 text-[#627382] text-center mt-4'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>

            <div className='max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 mb-28'>
                <div className="card w-96 bg-base-100 shadow-sm">
                <div className="card-body">
                    <div className="">
                        <h2 className="text-3xl font-bold">Starter</h2>
                        <p className='text-[#627382] mb-6'>Perfect for getting started</p>
                        <p><span className='font-bold text-black text-4xl mb-6'>$0</span>/month</p>
                    </div>
                    <ul className="mt-6 flex flex-col gap-2 text-xs">
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span className='text-[#627382]'>Access to 10 free tools</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span className='text-[#627382]'>Basic templates</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span className='text-[#627382]'>Community support</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span className='text-[#627382]'>1 project per month</span>
                        </li>
                        
                    </ul>
                    <div className="mt-6">
                        <button className="btn bg-linear-to-r from-violet-600 to-purple-600 rounded-full text-white w-full">Get Started Free</button>
                    </div>
                </div>
            </div>
            <div className="card bg-linear-to-r from-violet-600 to-purple-600 w-96 bg-base-100 shadow-sm">
                <div className="card-body">
                    <div className="">
                        <h2 className="text-3xl font-bold text-white">Pro</h2>
                        <p className='text-[#627382] mb-6 text-white'>Best for professionals</p>
                        <p className='text-white'><span className='font-bold text-white text-4xl mb-6'>$29</span>/month</p>
                    </div>
                    <ul className="mt-6 flex flex-col gap-2 text-xs">
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span className='text-white'>Access to all premium tools</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span className='text-white'>Unlimited templates</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span className='text-white'>Priority support</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span className='text-white'>Unlimited projects</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span className='text-white'>Cloud sync</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span className='text-white'>Advanced analytics</span>
                        </li>
                        
                    </ul>
                    <div className="mt-6">
                        <button className="btn bg-white text-purple-600 rounded-full w-full">Start Pro Trial</button>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-sm">
                <div className="card-body">
                    <div className="">
                        <h2 className="text-3xl font-bold">Enterprise</h2>
                        <p className='text-[#627382] mb-6'>For teams and businesses</p>
                        <p><span className='font-bold text-black text-4xl mb-6'>$99</span>/month</p>
                    </div>
                    <ul className="mt-6 flex flex-col gap-2 text-xs">
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span className='text-[#627382]'>Everything in Pro</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span className='text-[#627382]'>Team collaboration</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span className='text-[#627382]'>Custom integrations</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span className='text-[#627382]'>Dedicated support</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span className='text-[#627382]'>SLA guarantee</span>
                        </li>
                         <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span className='text-[#627382]'>Custom branding</span>
                        </li>

                        
                    </ul>
                    <div className="mt-6">
                        <button className="btn bg-linear-to-r from-violet-600 to-purple-600 rounded-full text-white w-full">Contact Sales</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default SimplePricing;
import React from 'react';

const GetStarted = () => {
    return (
        <div className='mx-auto my-10 py-10 px-5 bg-[#edeff3] space-y-5'>
            <h2 className='text-5xl font-bold text-center '>Get Started in 3 Steps</h2>
            <p className='text-[#627382] text-center'>Start using premium digital tools in minutes, not hours.</p>
            <div className='container mx-auto grid md:grid-cols-3 justify-between gap-5'>
                <div className='flex flex-col items-center justify-center space-y-5 bg-white rounded-xl p-10 relative'>
                    <p className='badge bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white p-1 rounded-[50%] absolute top-3 right-3'>01</p>
                    <img src="../../src/assets/user.png" alt="" className='bg-linear-to-r from-[#4f39f62f] to-[#9614fa2f] p-3 rounded-[50%]' />
                    <h4 className='text-2xl font-bold text-center '>Create Account</h4>
                    <p className='text-[#627382] text-center'>Sign up for free in seconds. No credit card required to get started.</p>
                </div>
                <div className='flex flex-col items-center justify-center space-y-5 bg-white rounded-xl p-10 relative'>
                    <p className='badge bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white p-1 rounded-[50%] absolute top-3 right-3'>02</p>
                    <img src="../../src/assets/package.png" alt="" className='bg-linear-to-r from-[#4f39f62f] to-[#9614fa2f] p-3 rounded-[50%]' />
                    <h4 className='text-2xl font-bold text-center '>Choose Products</h4>
                    <p className='text-[#627382] text-center'>Browse our catalog and select the tools that fit your needs.</p>
                </div>
                <div className='flex flex-col items-center justify-center space-y-5 bg-white rounded-xl p-10 relative'>
                    <p className='badge bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white p-1 rounded-[50%] absolute top-3 right-3'>03</p>
                    <img src="../../src/assets/rocket.png" alt="" className='bg-linear-to-r from-[#4f39f62f] to-[#9614fa2f]  p-3 rounded-[50%] ' />
                    <h4 className='text-2xl font-bold text-center '>Start Creating</h4>
                    <p className='text-[#627382] text-center'>Download and start using your premium tools immediately.</p>
                </div>
                
            </div>
        </div>
    );
};

export default GetStarted;
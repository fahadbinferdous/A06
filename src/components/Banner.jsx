import React from 'react';
import Play from "/src/assets/Play.png"
import BannerImg from "/src/assets/banner.png"

const Banner = () => {
    return (
        <div className='container mx-auto my-10 px-5 md:flex md:flex-row-reverse justify-between'>
            <div>
                <img src={BannerImg} alt="" />
            </div>
            <div className='flex flex-col justify-center items-start space-y-3'>
                <p className='badge bg-linear-to-r from-[#4f39f621] to-[#9614fa18] text-primary rounded-full'>
                    <img src="/src/assets/badge icon.png" alt="" />
                    New : AI-Powered Tools Available
                </p>
                <h1 className='text-5xl font-bold'>Supercharge Your Digital Workflow</h1>
                <p className='text-[#627382]'>Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.<br />Explore Products
                </p>
                <div className='space-x-2'>
                    <button className='btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full'>Explore Products</button>
                    <button className='btn btn-primary btn-outline  rounded-full'>
                        <img src={Play} alt="" />
                        Watch Demo
                    </button>
                </div>           
            </div>
            
            
        </div>
    );
};

export default Banner;
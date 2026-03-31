import React from 'react';

const Navbar = () => {
    return (
        
        <nav className='container mx-auto flex items-center justify-between py-3'>
            <h1 className='text-4xl font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>DigiTools</h1>
            <div>
                <ul className='flex items-center justify-between gap-7  text-[#101727]'>
                    <li>Products</li>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Testimonials</li>
                    <li>FAQ</li>
                </ul>
            </div>
            <div className='flex items-center justify-between gap-7'>
                <img src="../../src/assets/shopping-cart.png" alt="" />
                <p className=' text-[#101727]'>Login</p>
                <button className='btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full'>Get Started</button>
            </div>
        </nav>  
    );
};

export default Navbar;
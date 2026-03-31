import React from 'react';

const Stat = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] grid grid-cols-3 items-center justify-center py-20'>
            <div className='text-center'>
                <h2 className='text-5xl font-bold text-white'>50K+</h2>
                <p className='text-xl text-white'>Active Users</p>
            </div>
            <div className='text-center'>
                <h2 className='text-5xl font-bold text-white'>200+</h2>
                <p className='text-xl text-white'>Premium Tools</p>
            </div>
            <div className='text-center'>
                <h2 className='text-5xl font-bold text-white'>4.9</h2>
                <p className='text-xl text-white'>Rating</p>
            </div>
            
        </div>
    );
};

export default Stat;
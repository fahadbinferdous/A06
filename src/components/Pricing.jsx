import React from 'react';

const Pricing = () => {
    return (
        <div className='container mx-auto my-10 space-y-5'>
            <h2 className='text-5xl font-bold text-center '>Simple, Transparent Pricing</h2>
            <p className='text-[#627382] text-center'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            <div className='container mx-auto grid grid-cols-3 justify-between gap-5 items-stretch'>
                <div className='flex flex-col  space-y-5 bg-[#edeff3] rounded-xl p-10 relative'>
                      
                    <h4 className='text-2xl'>Starter</h4>
                    <p className='text-[#627382]'>Perfect for getting started</p>
                    <h2 className='text-[#627382]'><span className='text-black text-3xl font-bold'>$0</span>/Month</h2>
                    <ul className='text-[#627382]'>
                        <li className='flex gap-2'>
                            <img src="../../src/assets/tic mark.png" alt="" className='object-contain' />
                            Access to 10 free tools
                        </li>
                        <li className='flex gap-2'>
                            <img src="../../src/assets/tic mark.png" alt="" className='object-contain' />
                            Basic templates
                        </li>
                        <li className='flex gap-2'>
                            <img src="../../src/assets/tic mark.png" alt="" className='object-contain' />
                            Community support
                        </li>
                        <li className='flex gap-2'>
                            <img src="../../src/assets/tic mark.png" alt="" className='object-contain' />
                            1 project per month
                        </li>
                    </ul>
                    <button  className='btn mt-auto bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white w-full rounded-full'>Get Started Free</button>
                </div>
                <div className='space-y-5 bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-xl p-10 relative'>
                    <p className='badge badge-soft badge-outline badge-warning rounded-full absolute -top-2 right-50'>Most Popular</p>    
                    <h4 className='text-2xl text-white'>Pro</h4>
                    <p className='text-white'>Best for professionals</p>
                    <h2 className='text-white'><span className='text-white text-3xl font-bold'>$29</span>/Month</h2>
                    <ul className='text-white'>
                        <li className='flex gap-2 text-white'>
                            <img src="../../src/assets/tic mark.png" alt="" className='object-contain' />
                            Access to all premium tools
                        </li>
                        <li className='flex gap-2 text-white'>
                            <img src="../../src/assets/tic mark.png" alt="" className='object-contain' />
                            Unlimited templates
                        </li>
                        <li className='flex gap-2 text-white'>
                            <img src="../../src/assets/tic mark.png" alt="" className='object-contain' />
                            Priority support
                        </li>
                        <li className='flex gap-2 text-white'>
                            <img src="../../src/assets/tic mark.png" alt="" className='object-contain' />
                            Unlimited projects
                        </li>
                        <li className='flex gap-2 text-white'>
                            <img src="../../src/assets/tic mark.png" alt="" className='object-contain' />
                            Cloud sync
                        </li>
                        <li className='flex gap-2 text-white'>
                            <img src="../../src/assets/tic mark.png" alt="" className='object-contain' />
                            Advanced analytics
                        </li>
                    </ul>
                    <button  className='btn text-primary w-full rounded-full'>Start Pro Trial</button>
                </div>
                <div className='space-y-5 bg-[#edeff3] rounded-xl p-10 relative'>
                       
                    <h4 className='text-2xl'>Enterprise</h4>
                    <p className='text-[#627382]'>For teams and businesses</p>
                    <h2 className='text-[#627382]'><span className='text-black text-3xl font-bold'>$99</span>/Month</h2>
                    <ul className='text-[#627382]'>
                        <li className='flex gap-2'>
                            <img src="../../src/assets/tic mark.png" alt="" className='object-contain' />
                            Everything in Pro
                        </li>
                        <li className='flex gap-2'>
                            <img src="../../src/assets/tic mark.png" alt="" className='object-contain' />
                            Team collaboration
                        </li>
                        <li className='flex gap-2'>
                            <img src="../../src/assets/tic mark.png" alt="" className='object-contain' />
                            Custom integrations
                        </li>
                        <li className='flex gap-2'>
                            <img src="../../src/assets/tic mark.png" alt="" className='object-contain' />
                            Dedicated support
                        </li>
                        <li className='flex gap-2'>
                            <img src="../../src/assets/tic mark.png" alt="" className='object-contain' />
                            SLA guarantee
                        </li>
                        <li className='flex gap-2'>
                            <img src="../../src/assets/tic mark.png" alt="" className='object-contain' />
                            Custom branding
                        </li>
                    </ul>
                    <button  className='btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white w-full rounded-full'>Contact Sales</button>
                </div>
                
                
            </div>
        </div>
    );
};

export default Pricing;
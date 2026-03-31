import React, { use, useState } from 'react';
import ToolCards from './ToolCards';
import Cart from './Cart';

const ToolsDetails = ({chatgptPromise}) => {
    const toolsData=use(chatgptPromise)
    const [activeTab,setActive]=useState('Products')
    const [cart,setCart]=useState([])
    
    
    
    return (
        <div className='container mx-auto my-10 flex flex-col items-center justify-center space-y-5'>
            <h2 className='text-5xl font-bold '>Premium Digital Tools</h2>
            <p className='text-[#627382]'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
            {/* <div className='inline-block items-center justify-center border-2 border-[#F6F6F6] rounded-full'>
                <button className='btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full'>Products</button>
                <button className='rounded-full'>Cart(0)</button>
            </div> */}
            <div className="tabs tabs-box rounded-full">
                <input type="radio" name="my_tabs_1" className="tab rounded-full " aria-label="Products" onClick={()=>setActive('Products')} defaultChecked/>
                <input type="radio" name="my_tabs_1" className="tab rounded-full" aria-label={`Cart(${cart.length})`} onClick={()=>setActive('Cart')} />
            </div>
            
            {activeTab==='Products' &&
                <div className='grid grid-cols-3 gap-5'>
                    {toolsData.map(tool=>
                        <ToolCards key={tool.id} cart={cart} setCart={setCart} tool={tool}/>    
                    )}
                </div>
            }
            
            {activeTab==='Cart' && <Cart cart={cart} setCart={setCart}/>}

        </div>
        
    );
};

export default ToolsDetails;
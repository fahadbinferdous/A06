import React, { useState } from 'react';
import { toast } from 'react-toastify';

const ToolCards = ({tool,cart,setCart}) => {
    const tagStyles = {
                popular: "badge badge-primary",
                new: "badge badge-success",
                "best-seller": "badge badge-warning",
            }
    const [isBought,setBuy]=useState(false)
    const handleBuyNow=()=>{
        setBuy(true)

        const isFound=cart.find(item=>item.id===tool.id)
        if(isFound){
            toast.error('Product already added to cart') 
            return}

        setCart([...cart,tool])
        toast('Product added to cart')
    }
    return (
        <div className='border border-[#F2F2F2] rounded-3xl p-5 space-y-5'>
            <div className="flex justify-end">
                <p className={`${tagStyles[tool.tagType] || "badge"} badge-soft`}>
                    {tool.tag}
                </p>
            </div>
            <img src={tool.icon} alt="" />
            <h4 className='text-xl font-bold '>{tool.name}</h4>
            <p className='text-[#627382]'>{tool.description}</p>
            <p><span className='text-xl font-bold'>${tool.price}</span>/{tool.period}</p>
            <ol className='text-[#627382]'>{tool.features.map((feature,index)=>         
                    <li key={index} className='flex gap-2'>
                        <img src="../../src/assets/tic mark.png" alt="" className='object-contain' />
                        {feature}
                    </li>
                )}
            </ol>
            <button onClick={handleBuyNow} className='btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white w-full rounded-full'>{isBought?'Added to cart':'Buy Now'}</button>
        </div>
    );
};

export default ToolCards;
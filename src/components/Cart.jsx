import React from 'react';
import { toast } from 'react-toastify';

const Cart = ({cart,setCart}) => {
    const totalPrice= cart.reduce((sum,tool)=>sum+tool.price,0)
    const handleProceed=()=>{
        setCart([])
        toast.success('Ready for payment')
    }
    const handleRemove=(tool)=>{
        const filteredArrayAfterRemove=cart.filter(remainingTool=>remainingTool.id!==tool.id)
        setCart(filteredArrayAfterRemove)
        toast.error('Product removed cart')
    }
    return (
        <div className='border-2 border-gray-200 rounded-3xl p-5 w-full'>
            <h4 className='font-bold text-center'>Your Cart</h4>
            {cart.length===0?<p className='text-center'>Cart is empty</p>:
            <>
            {cart.map(tool=>
            
            <div key={tool.id} className='flex justify-between items-center my-2 p-5 w-full bg-[#eceff4] rounded-4xl'>
                
                <div className='flex gap-3'>
                    <img src={tool.icon} alt="" className='object-contain'/>
                    <div>
                        <h6 className='text-xl font-bold'>{tool.name}</h6>
                        <p className='text-xl text-[#627382]'>${tool.price}</p>
                    </div>
                    
                </div>              
                <p onClick={()=>handleRemove(tool)} className='btn btn-error btn-outline rounded-full'>Remove</p>
            </div>)}
            <div className='flex justify-center items-center'>
                <h6 className='text-xl'>Total:</h6>
                <p className='text-xl font-bold'>${totalPrice}</p>
            </div>
            <button onClick={handleProceed} className='btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white w-full rounded-full'>Proceed to Checkout</button>
            </>
            
            }

            
            
        </div>

    );
};

export default Cart;
import React from 'react';

const Cart = ({cart,setCart}) => {
    const totalPrice= cart.reduce((sum,tool)=>sum+tool.price,0)
    const handleProceed=()=>{
        setCart([])
    }
    const handleRemove=(tool)=>{
        const filteredArrayAfterRemove=cart.filter(remainingTool=>remainingTool.id!==tool.id)
        setCart(filteredArrayAfterRemove)
    }
    return (
        <div className=''>
            <h4>Your Cart</h4>
            {cart.length===0?<p>Cart is empty</p>:
            <>
            {cart.map(tool=>
            
            <div key={tool.id} className=''>
                <h6 className='text-2xl'>{tool.name}</h6>
                <p className='text-xl text-[#627382]'>${tool.price}</p>
                <p onClick={()=>handleRemove(tool)} className='btn btn-error btn-outline rounded-full'>Remove</p>
            </div>)}
            <div>
                <h6 className='text-2xl'>Total</h6>
                <p className='text-xl text-[#627382]'>${totalPrice}</p>
            </div>
            <button onClick={handleProceed} className='btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full'>Proceed to Checkout</button>
            </>
            
            }

            
            
        </div>

    );
};

export default Cart;
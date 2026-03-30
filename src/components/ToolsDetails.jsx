import React, { use } from 'react';

const ToolsDetails = ({chatgptPromise}) => {
    const toolsData=use(chatgptPromise)
    const tagStyles = {
            popular: "badge badge-primary",
            new: "badge badge-success",
            "best-seller": "badge badge-warning",
        };
    return (
        <div className='container mx-auto flex flex-col items-center justify-center space-y-5'>
            <h2 className='text-5xl font-bold '>Premium Digital Tools</h2>
            <p className='text-[#627382]'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
            <div className='inline-block items-center justify-center border-2 border-[#F6F6F6] rounded-full'>
                <button className='btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full'>Products</button>
                <button className='rounded-full'>Cart(0)</button>
            </div>
            <div className='grid grid-cols-3 gap-5'>
                {toolsData.map(tool=>
                    <div key={tool.id} className='border border-[#F2F2F2] rounded-lg p-5 space-y-5'>
                        <div className="flex justify-end">
                            <p className={`${tagStyles[tool.tagType] || "badge"} badge-soft`}>
                                {tool.tag}
                            </p>
                        </div>
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
                        <button className='btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white w-full rounded-full'>Subscribe</button>
                    </div>)}
            </div>
        </div>
        
    );
};

export default ToolsDetails;
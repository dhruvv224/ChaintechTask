import React, { useState, useEffect, useMemo, useContext } from 'react';
import { UseContext } from '../ContextApi/UseContext';

const Memo = ({ staticData }) => {
    const [count, setCount] = useState(0);
    const{data}=useContext(UseContext)
    console.log("data is>>>>>>>>>>",data)
    
    useEffect(() => {
        console.log('Received staticData:', staticData);  // Debugging
    },[]);
    console.log("static data",staticData)
    const useofMemo=useMemo(()=>{
        console.log("ths is memo",staticData)
    },[staticData])

    return (
        <div className='max-w-7xl mx-auto mt-5'>
            <h1 className='text-[38px] font-bold'>
                {count}
            </h1>
            <button className='bg-yellow-400 p-4 rounded-md text-[20px]' onClick={()=>setCount(count+1)}>Click me </button>
        </div>
    );
};

export default Memo;

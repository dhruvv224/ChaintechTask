import React, { useEffect, useState } from 'react'
import axios from 'axios'



const Api = () => {
    const[data,setData]=useState([])
    const fetchData=async()=>{
        axios.get("https://api.escuelajs.co/api/v1/products")
        .then(response=>setData(response.data))

    }
    useEffect(()=>{
        fetchData()
    },[])
  return (
    <div>
        {
            data.map((item,index)=>(
                <>
                
<div className='grid grid-cols-3 gap-4 '>
<div key={index}>
                    {
                        item.title
                    }
<img src={item.category.image} alt='image' className='w-full h-full object-cover'/>
</div>
                </div>



                </>
            ))
        }
    </div>
  )
}

export default Api
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Memo from '../Memo/Memo';

const Api = () => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get("https://api.escuelajs.co/api/v1/products");
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const staticData =["helloo"];

    return (
        <div>
            <div className='grid grid-cols-3 gap-4'>
                {data.map((item, index) => (
                    <div key={index}>
                        <p>{item.title}</p>
                        <img src={item.category.image} alt='item' className='w-full h-full object-cover'/>
                    </div>
                ))}
            </div>
            <Memo staticData={staticData} />
        </div>
    );
};

export default Api;

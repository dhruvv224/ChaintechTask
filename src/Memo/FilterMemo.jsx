import React, { useState, useMemo } from 'react';

const MemoExample = () => {
  
  const [searchTerm, setSearchTerm] = useState('');
  const [count, setCount] = useState(0);

  // Imagine this is a large list of items
  const items = [
    'Apple', 'Banana', 'Orange', 'Mango', 'Pineapple', 'Strawberry', 
    'Watermelon', 'Grapes', 'Peach', 'Blueberry', 'Avocado', 'Kiwi'
  ];
  
  // Filter the items based on the searchTerm
  const filteredItems = useMemo(() => {
    console.log('Filtering items...');
    return items.filter(item => item.toLowerCase().includes(searchTerm.toLowerCase()));
  }, [searchTerm,items]);

console.log(count)

  return (
    <div className='max-w-7xl mx-auto mt-5'>
      <h1 className='text-[38px] font-bold'>useMemo Example</h1>
      {/* Input field to update search term */}
      <input
        type="text"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        placeholder="Search items..."
        className='p-2 border rounded-md'
      />

      <ul className='list-disc'>
       { filteredItems.length<=0 ?
       <h1>Not found</h1> :
       <>
          {filteredItems.map((item, index) => (
          <li key={index} className='mt-2'>{item}</li>
        ))}
       
       </>
    
       }
      </ul>

      <div className='mt-5'>
        <p>Counter (just to trigger re-renders): {count}</p>
        <button
          onClick={() => setCount(count + 1)}
          className='bg-yellow-400 p-4 rounded-md text-[20px]'
        >
          Increment Counter
        </button>
      </div>
    </div>
  );
};

export default MemoExample;

import React from 'react';

const FeedsHead = () => {
  return (
    <div className='border-b-2 border-gray-500'>
      <div className='p-3'>
        <h1 className='text-2xl font-medium'>Home</h1>
      </div>
      <div className='flex w-full text-center text-gray-500'>
        <div className='w-full cursor-pointer hover:bg-gray-500/30 p-3 transition-all'>
          <h2>Following</h2>
        </div>
        <div className='w-full cursor-pointer hover:bg-gray-500/30 p-3 transition-all'>
          <h2>Around the World</h2>
        </div>
      </div>
    </div>
  );
};

export default FeedsHead;
import React from 'react';
import Feeds from './feeds/Feeds';
import Navbar from '@/common/navbar/Navbar';
import Trending from '../trending/Trending';

const Main = () => {
  return (
    <div className='flex flex-row w-full h-screen bg-white dark:bg-black'>
      <Navbar/>
      <Feeds/>
      <Trending/>
    </div>
  );
};

export default Main;
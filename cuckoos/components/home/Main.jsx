import React from 'react';
import Feeds from './feeds/Feeds';
import Navbar from '@/common/navbar/Navbar';
import Trending from '../trending/Trending';

const Main = () => {
  return (
    <div className='flex flex-col-reverse lg:flex-row w-full h-screen'>
      <Navbar/>
      <Feeds/>
      <Trending/>
    </div>
  );
};

export default Main;
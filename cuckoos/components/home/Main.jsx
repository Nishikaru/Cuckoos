import React from 'react';
import Feeds from './feeds/Feeds';
import Navbar from '@/common/navbar/Navbar';
import Trending from '../trending/Trending';
import MNavbar from '@/common/navbar/MNavbar';

const Main = () => {
  return (
    <div className='flex flex-col md:flex-row w-full h-screen bg-white dark:bg-black'>
      <Navbar/>
      <Feeds/>
      <Trending/>
      <MNavbar/>
    </div>
  );
};

export default Main;
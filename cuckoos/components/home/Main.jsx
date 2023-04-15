import React from 'react';
import Feeds from './feeds/Feeds';
import Navbar from '@/common/navbar/Navbar';

const Main = () => {
  return (
    <div>
      <Navbar/>
      <Feeds/>
    </div>
  );
};

export default Main;
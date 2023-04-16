import { navData } from '@/data/navData';
import React from 'react';
import {GiHummingbird} from 'react-icons/gi'
import NavLinks from './nav_links/NavLinks';

const Navbar = () => {
  return (
    <div className='w-full flex flex-row-reverse'>
      <div className='w-1/2'>
      <div className='p-2 flex flex-col gap-5'>
        {
          navData.map((item,index)=><NavLinks key={index} item={item} />)
        }
      </div>
      </div>
    </div>
  );
};

export default Navbar;
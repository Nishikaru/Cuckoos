import React from 'react';
import ProfilePic from './nav_links/profile_pic/ProfilePic';
import NavLinks from './nav_links/NavLinks';
import { navData } from '@/data/navData';

const MNavbar = () => {
  return (
    <div>
      <div className="md:hidden lg:w-full h-full flex lg:flex-row-reverse text-black dark:text-slate-200 border-x border-t border-gray-500">
      <div className="w-full flex flex-col items-center">
        <div className="w-full flex justify-around p-2 gap-5">
          {navData.map((item, index) => (
            <NavLinks key={index} index={index} item={item} />
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default MNavbar;
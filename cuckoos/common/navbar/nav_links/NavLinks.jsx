import React from 'react';
// import {GiHummingbird} from 'react-icons/gi'

const NavLinks = ({item}) => {
  return (
    <div className='flex items-center gap-3 rounded-full w-fit cursor-pointer hover:bg-gray-500/30 p-3 text-3xl'>
      <div className='w-fit flex justify-center items-center'>{item.icon}</div>
      {item.label?<div className='text-2xl'>{item.label}</div>:null}
    </div>
  );
};

export default NavLinks;
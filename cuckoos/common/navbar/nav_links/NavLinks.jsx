import React from "react";
// import {GiHummingbird} from 'react-icons/gi'

const NavLinks = ({ item,index }) => {
  return (
    <div className="flex items-center gap-3 rounded-full w-fit cursor-pointer hover:bg-gray-500/30 p-3 text-2xl">
      <div className={`w-fit flex justify-center items-center ${index==0?'text-orange-500 dark:text-slate-200':null}`}>{item.icon}</div>
      {item.label ? <div className="text-xl hidden lg:block">{item.label}</div> : null}
    </div>
  );
};

export default NavLinks;

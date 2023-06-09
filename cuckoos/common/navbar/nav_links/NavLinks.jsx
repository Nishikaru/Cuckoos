import { navData } from "@/data/navData";
import Link from "next/link";
import React from "react";
import ProfilePic from "./profile_pic/ProfilePic";
// import {GiHummingbird} from 'react-icons/gi'

const NavLinks = ({ item,index }) => {
  return (
    <Link href={item.link} className={`${index==0?'hidden md:flex':'flex'} items-center gap-3 rounded-full w-fit cursor-pointer hover:bg-gray-500/30 p-3 text-2xl`}>
    <div className={`w-fit flex justify-center items-center ${index==0?'text-orange-500 dark:text-slate-200':null}`}>{item.icon}</div>
    {item.label ? <div className="text-xl hidden lg:block">{item.label}</div> : null}
  </Link>
  );
};

export default NavLinks;

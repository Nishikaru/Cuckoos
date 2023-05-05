import { navData } from "@/data/navData";
import React from "react";
import NavLinks from "./nav_links/NavLinks";
import ProfilePic from "./nav_links/profile_pic/ProfilePic";
import LoginBtn from "./login_btn/LoginBtn";

const Navbar = () => {
  return (
    <div className="hidden lg:w-full h-full md:flex lg:flex-row-reverse text-black dark:text-slate-200">
      <div className="lg:w-1/2 flex flex-col items-center lg:items-start justify-between">
        <div className="p-2 flex flex-col gap-5">
          {navData.map((item, index) => (
            <NavLinks key={index} index={index} item={item} />
          ))}
        </div>
        <div className="p-2">
          {/* <ProfilePic /> */}
          <LoginBtn/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

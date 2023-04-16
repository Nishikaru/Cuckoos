import { navData } from "@/data/navData";
import React from "react";
import NavLinks from "./nav_links/NavLinks";
import ProfilePic from "./nav_links/profile_pic/ProfilePic";

const Navbar = () => {
  return (
    <div className="w-full h-full flex flex-row-reverse">
      <div className="w-1/2 flex flex-col justify-between">
        <div className="p-2 flex flex-col gap-5">
          {navData.map((item, index) => (
            <NavLinks key={index} index={index} item={item} />
          ))}
        </div>
        <div className="p-2">
          <ProfilePic />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import CardProfilePic from "@/components/feed_card/card_profile_pic/CardProfilePic";
import React from "react";
import {MdOutlinePhotoLibrary} from "react-icons/md"

const PostBox = () => {
  const userProfile = "https://picsum.photos/50/50";
  return (
    <div className="p-4 flex gap-3 border-b border-gray-600">
      <div>
        <CardProfilePic userProfile={userProfile} />
      </div>
      <form className="w-full">
        <div className="w-full ">
          <input
            className="w-full bg-transparent text-2xl p-3 focus:border-b-2 focus:border-orange-500 focus:outline-none"
            placeholder="What's happing?"
            type="text"
            name=""
            id=""
          />
        </div>
        <div className="flex pt-3 items-center justify-between">
          <div className="text-orange-500 hover:bg-orange-500/20 p-2 rounded-full transition-all cursor-pointer"><MdOutlinePhotoLibrary/></div>
          <button className="bg-orange-500 rounded-full p-1 px-3">Cucks</button>
        </div>
      </form>
    </div>
  );
};

export default PostBox;

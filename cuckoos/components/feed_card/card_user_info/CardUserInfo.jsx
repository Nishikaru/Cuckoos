import React from "react";

const CardUserInfo = ({name,user,postTime}) => {
  return (
    <div className="font-medium flex gap-2 text-sm md:text-base">
      <span className="hover:underline">{name}</span>
      <div>
        <span>{user}</span>~<span>{postTime}h</span>
      </div>
    </div>
  );
};

export default CardUserInfo;

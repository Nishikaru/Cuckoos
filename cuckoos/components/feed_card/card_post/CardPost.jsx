import React from "react";

const CardPost = ({postText,imgUrl}) => {
  return (
    <>
      <div>
        {postText}
      </div>
      <div className="w-full">
        {imgUrl?<img
          className="w-auto max-h-[400px] rounded-2xl"
          src={imgUrl}
          alt=""
        />:null}
      </div>
    </>
  );
};

export default CardPost;

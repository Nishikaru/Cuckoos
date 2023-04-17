import React from 'react';

const CardProfilePic = ({userProfile}) => {
  return (
      <div className="w-[50px]">
        <img
          className="rounded-full w-[100px]"
          src={userProfile}
        />
      </div>
  );
};

export default CardProfilePic;
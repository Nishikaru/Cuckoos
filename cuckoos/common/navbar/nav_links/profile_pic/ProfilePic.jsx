import React from 'react';
import {CgProfile} from 'react-icons/cg'

const ProfilePic = () => {
  return (
    <div className='p-2 flex gap-6 items-center rounded-full w-fit cursor-pointer hover:bg-gray-500/30 text-3xl lg:pr-10'>
      <div className='text-4xl'>
        <CgProfile/>
      </div>
      <div className='hidden lg:block'>
        <div className='text-lg font-semibold'>User</div>
        <div className='text-sm'>@user_name</div>
      </div>
    </div>
  );
};

export default ProfilePic;
import { profileData } from '@/data/profileData';
import Link from 'next/link';
import React from 'react';
import {AiOutlineArrowLeft} from 'react-icons/ai'
import {BiCurrentLocation} from 'react-icons/bi'

const ProfileHead = () => {
  return (
    <div className='border-b border-gray-500'>
      <div>
        <div className='relative'>
          <div style={{backgroundImage:`url(${profileData.userCover})`,backgroundSize:"cover",backgroundPosition:"center"}} className='w-full h-[250px]'>
          </div>
          <img className='rounded-full border-4 border-white dark:border-black absolute bottom-0 translate-y-[50%] left-6 w-40' src={profileData.userProfile} alt="" />
        </div>
        <div className='w-full'>
          <div className='flex flex-row-reverse p-6'>
          <button className='hover:bg-gray-500/50 capitalize px-2 py-1 border rounded-full'>edit profile</button>
          </div>
          <div className='w-full flex flex-col p-6 gap-2'>
            <h3 className='text-2xl font-bold'>{profileData.name}</h3>
            <div className='flex gap-3'>
            <h6 className='text-sm '>{profileData.user}</h6>
            <p className='flex gap-1 items-center'><span><BiCurrentLocation/></span><span>{profileData.location}</span></p>
            </div>
            <div className='flex gap-6'>
              <p><span className='font-semibold'>{profileData.follower}</span> followers</p>
              <p><span className='font-semibold'>{profileData.following}</span> following</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHead;
import Navbar from '@/common/navbar/Navbar';
import React from 'react';
import ProfileSec from './profile_sec/ProfileSec';
import Trending from '../trending/Trending';

const Profile = () => {
  return (
    <div className='flex flex-row w-full h-screen bg-white dark:bg-black'>
      <Navbar/>
      <ProfileSec/>
      <Trending/>
    </div>
  );
};

export default Profile;
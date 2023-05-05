import Navbar from '@/common/navbar/Navbar';
import React from 'react';
import ProfileSec from './profile_sec/ProfileSec';
import Trending from '../trending/Trending';
import MNavbar from '@/common/navbar/MNavbar';

const Profile = () => {
  return (
    <div className='flex flex-col md:flex-row w-full h-screen bg-white dark:bg-black'>
      <Navbar/>
      <ProfileSec/>
      <Trending/>
      <MNavbar/>
    </div>
  );
};

export default Profile;
import React from 'react';

const LoginBtn = () => {
  return (
    <button className='p-2 px-4 flex gap-6 items-center justify-center rounded-full w-fit cursor-pointer hover:bg-gray-500/30 text-xl text-black hover:text-white bg-orange-500 transition-all'>
        Login with google
    </button>
  );
};

export default LoginBtn;
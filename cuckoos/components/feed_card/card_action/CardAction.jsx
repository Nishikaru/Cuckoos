import React from 'react';
import {SlBubbles} from 'react-icons/sl'
import {BsBookmarkHeart} from 'react-icons/bs'
import {AiOutlineHeart,AiOutlineRetweet} from 'react-icons/ai'
import {FiShare} from 'react-icons/fi'

const CardAction = ({like,reply,retweet,bookMark}) => {
  return (
    <div className='w-full flex items-center justify-around text-sm lg:text-base'>
      <div className='flex items-center gap-2 hover:text-orange-500 transition-all'>
      <SlBubbles/>
      {reply}
      </div>
      <div className='hover:text-orange-500 transition-all'>
      <BsBookmarkHeart/>
      </div>
      <div className='flex items-center gap-2 hover:text-orange-500 transition-all'>
      <AiOutlineHeart/>
      {like}
      </div>
      <div className='flex items-center gap-2 hover:text-orange-500 transition-all'>
      <AiOutlineRetweet/>
      {retweet}
      </div>
      <div className='hover:text-orange-500 transition-all'>
      <FiShare/>
      </div>
    </div>
  );
};

export default CardAction;
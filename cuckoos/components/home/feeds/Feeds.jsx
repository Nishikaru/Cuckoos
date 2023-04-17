import React from 'react';
import FeedsHead from './feeds_head/FeedsHead';
import FeedCard from '@/components/feed_card/FeedCard';
import { fakeFeeds } from '@/data/fakeFeeds';

const Feeds = () => {
  return (
    <div className='w-full border-x-2 border-gray-500 text-black dark:text-slate-200 overflow-auto'>
      <div className='w-full sticky top-0 bg-white dark:bg-black/5 backdrop-blur-xl'>
        <FeedsHead/>
      </div>
      <div>
        {
          fakeFeeds.map((item,index)=><FeedCard key={index} item={item} />)
        }
      </div>
    </div>
  );
};

export default Feeds;
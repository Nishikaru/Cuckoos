import React from 'react';
import FeedsHead from './feeds_head/FeedsHead';
import FeedCard from '@/components/feed_card/FeedCard';
import { fakeFeeds } from '@/data/fakeFeeds';
import PostBox from './post_box/PostBox';

const Feeds = () => {
  return (
    <div className='w-full border-x border-gray-500 text-black dark:text-slate-200 overflow-auto scrollbar-hide'>
      <div className='w-full sticky top-0 bg-white/70 dark:bg-black/70 backdrop-blur-xl'>
        <FeedsHead/>
      </div>
      <div>
        <PostBox/>
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
import React from "react";
import SearchBox from "./search/SearchBox";
import { trendingData } from "@/data/trendingData";

const Trending = () => {
  return (
    <div className="w-full h-full overflow-auto scrollbar-hide pl-2 pl-6 flex flex-col gap-6">
      <div className="w-full sticky top-0 bg-white pt-2 pb-4">
      <SearchBox />
      </div>
      <div className="w-1/2 mt-5 bg-gray-200 dark:bg-zinc-600/50 rounded-3xl py-4 flex flex-col gap-5 items-start justify-center">
        <div className="font-semibold text-xl px-4">Trending Now</div>
        {trendingData.map((item, index) => (
          <div key={index} className="hover:bg-gray-300 dark:hover:bg-zinc-600 cursor-pointer w-full transition-all px-4">
            <div className="font-medium text-lg">{item.tag}</div>
            <div className="text-sm">{item.topic} - topic</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;

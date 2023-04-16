import React from "react";

const SearchBox = () => {
  return (
    <div>
      <form className="w-1/2">
        <input
          className="w-full p-2 px-4 rounded-3xl focus:dark:bg-black bg-gray-200 dark:bg-zinc-600/50"
          placeholder="#search"
          type="text"
          name=""
          id=""
        />
      </form>
    </div>
  );
};

export default SearchBox;

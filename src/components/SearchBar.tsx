'use client';
import React, { useState } from 'react';
import { Search } from 'lucide-react';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  

  return (
    <form  className="relative max-w-screen-xl mx-auto ">
      <div className="h-[50px] flex items-center border border-gray-400 rounded-lg p-2 bg-white">
        
        <input
          type="text"
          placeholder="Search "
          value={searchQuery}
        
          className="w-full outline-none text-base text-gray-700 focus:outline-none placeholder:text-gray-400"
        />
        <button
          type="submit"
          className="bg-white text-black rounded-full p-2 ml-2 focus:outline-none"
        >
          <Search size={18} />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;

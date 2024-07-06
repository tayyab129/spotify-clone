import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router";
const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="w-[25%] h-full p-2 flex-col gap-2 hidden lg:flex text-white">
      <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around">
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-3 pl-8 cursor-pointer"
        >
          <img className="w-6" src={assets.home_icon} alt="home-icon" />
          <p className="font-bold ">Home</p>
        </div>
        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <img className="w-6" src={assets.search_icon} alt="search-icon" />
          <p className="font-bold ">Search</p>
        </div>
      </div>
      <div className="bg-[#121212] h-[85%] rounded">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img className="w-8" src={assets.stack_icon} alt="stack-icon" />
            <p className="font-semibold ">Your Library</p>
          </div>
          <div className="flex items-center gap-3">
            <img className="w-5" src={assets.arrow_icon} alt="arrow-icon" />
            <img className="w-5" src={assets.plus_icon} alt="plus-icon" />
          </div>
        </div>
        <div className="p-4 bg-[#242424] m-2 rounded flex flex-col font-semibold items-start justify-start gap-1">
          <h1>Create your first playlist</h1>
          <p className="font-light">it's easy, we will help you</p>
          <button className="px-4 py-1.5 rounded-full text-black bg-white text-[15px]">
            Create Playlist
          </button>
        </div>
        <div className="p-4 bg-[#242424] m-2 rounded flex flex-col font-semibold items-start justify-start gap-1 mt-4">
          <h1>Let's find some podcast to follow</h1>
          <p className="font-light">we'll Keep you on new episodes</p>
          <button className="px-4 py-1.5 rounded-full text-black bg-white text-[15px]">
            Browes podcasts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

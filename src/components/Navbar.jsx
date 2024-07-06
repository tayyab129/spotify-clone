import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full flex justify-between items-center font-semibold">
        <div className="flex items-center gap-2">
          <img
            onClick={() => navigate(-1)}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_left}
            alt=""
          />
          <img
            onClick={() => navigate(1)}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_right}
            alt=""
          />
        </div>
        <div className="flex items-center gap-4">
          <p className="bg-white text-black rounded-2xl text-[15px] px-4 py-1 cursor-pointer hidden md:block font-semibold">
            Explore Premium
          </p>
          <p className="bg-black rounded-2xl text-[15px] px-3 py-1 cursor-pointer font-semibold">
            Install App
          </p>
          <p className="bg-[#f573A0] text-black w-7 h-7 rounded-full cursor-pointer flex items-center justify-center border-2 border-black">
            T
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <p className="bg-white text-black rounded-2xl px-4 py-1 cursor-pointer">
          All
        </p>
        <p className="bg-black rounded-2xl px-4 py-1 cursor-pointer">Music</p>
        <p className="bg-black rounded-2xl px-4 py-1 cursor-pointer">Podcast</p>
      </div>
    </>
  );
};

export default Navbar;

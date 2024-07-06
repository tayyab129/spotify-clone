import React from "react";
import Navbar from "./Navbar";
import { albumsData, songsData } from "../assets/assets";
import AlbumItem from "./AlbumItem";
import SongsItem from "./SongsItem";
const DisplayHome = () => {
  return (
    <>
      <Navbar />
      <div className="mb-4">
        <h1 className="font-bold text-2xl my-5">Featured Charts</h1>
        <div className="flex overflow-auto">
          {albumsData.map((item, index) => (
            <AlbumItem
              key={index}
              name={item.name}
              desc={item.desc}
              id={item.id}
              image={item.image}
            />
          ))}
        </div>
        <h1 className="font-bold text-2xl my-5">Today's biggest hits</h1>
        <div className="flex overflow-auto">
          {songsData.map((item, index) => (
            <SongsItem
              key={index}
              name={item.name}
              desc={item.desc}
              id={item.id}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default DisplayHome;

import React from "react";

const GridItem = () => {
  return (
    <>
      <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg ">
        <img
          className="w-full h-48 object-cover"
          src="./assets/image.jpg"
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4 ">
          <div className="font-bold text-xl ">The Coldest Sunset</div>
          <div className=" h-px bg-green-400 w-1/2 mb-3 mx-auto"></div>

          <p className="text-gray-700 text-base  mb-2">
          Lorem ipsum dolor sit amet, consectetur.
          </p>
          <p className="text-gray-700 text-base ">
          Lorem ipsum dolor sit amet.
          </p>
          <p className="text-gray-700 text-base  mt-2">
          Lorem ipsum dolor amet, consectetur.
          </p>
        </div>
        
        
      </div>
    </>
  );
};

export default GridItem;

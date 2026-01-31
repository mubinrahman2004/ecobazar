import Image from "next/image";
import React from "react";
import meat from "../../../public/meat.png";

const MeatItem = () => {
  return (
    <div className="relative w-full max-w-sm mx-auto bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
     
      <div className="relative w-full h-[536px]">
        <Image
          src={meat}
          alt="meat"
          fill
          className="object-cover"
        />
      </div>
      
    
      <div className="absolute inset-0 flex flex-col justify-center items-center p-4 sm:p-6">
        <div className="text-white space-y-3 sm:space-y-4 text-center">
      
          <p className="text-xs sm:text-sm font-medium px-3 py-1 bg-green-600 rounded-full w-fit mx-auto">
            85% Fat Free
          </p>
          
       
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight">
            Low-Fat Meat
          </h2>
          
          
          <h3 className="text-lg sm:text-xl font-semibold text-green-300">
            Starts at $79.99
          </h3>
          
          
          <button className="mt-3 sm:mt-4 px-5 cursor-pointer sm:px-7 py-2 sm:py-3 bg-white text-gray-900 rounded-full font-semibold text-sm sm:text-base hover:bg-red-300 transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default MeatItem;
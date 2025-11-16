import Image from "next/image";
import React from "react";
import logo from "../../../public/Logo.png";

const Subscribe = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        
          <div className="flex">
            <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 relative">
              <Image 
                src={logo} 
                alt="logo" 
                fill
                className="object-contain"
              
              />
            </div>
          </div>

          <div className="flex-1 text-center lg:text-left">
            <p className="text-sm sm:text-base text-black-600  mb-2 sm:mb-3">
              Subscribe our Newsletter
            </p>
            <h2 className="text-[14px] sm:text-[14px] lg:text-[14px] md:text-[14px] font-bold text-gray-300 ">
              Pellentesque eu nibh eget mauris congue mattis matti.
            </h2>
          </div>

          <div className="flex-1 w-full max-w-md">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-0">
              <input 
                type="email" 
                placeholder="Your email address"
                className="flex-1 px-4 py-1 sm:py-4 border border-gray-300 rounded-2xl sm:rounded-r-none sm:rounded-l-2xl text-base placeholder-gray-400"
              />
              <button className="bg-green-400 hover:bg-green-500 text-white font-semibold px-3 py-1 sm:py-4 rounded-2xl sm:rounded-l-none sm:rounded-r-2xl transition-all duration-300 transform hover:scale-105  text-base sm:text-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
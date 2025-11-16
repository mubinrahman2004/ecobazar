import Image from "next/image";
import React from "react";
import popular from "../../../public/popularcatagori.png";

const PopularCatagoriesItems = () => {
  return (
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-green-300 cursor-pointer">
  
      <div className="relative w-full h-32 sm:h-36 md:h-40 lg:h-44 xl:h-48">
        <Image 
          src={popular} 
          alt="Vegetables" 
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
       
        <div className="absolute  group-hover:bg-black/10 transition-all duration-300" />
      </div>
      
      
      <div className="p-3 sm:p-4 text-center">
        <p className="text-sm sm:text-base font-semibold text-gray-800 group-hover:text-green-600 transition-colors duration-200">
          Vegetables
        </p>
        <span className="text-xs text-gray-500 mt-1 block">24 products</span>
      </div>
    </div>
  );
};

export default PopularCatagoriesItems;
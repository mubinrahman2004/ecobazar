import Image from "next/image";
import React from "react";

const PopularCatagoriesItems = ({ mubinproduct } ) => {
  return (
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-green-300 cursor-pointer">
  
      <div className="relative w-full h-32 sm:h-36 md:h-40 lg:h-44 xl:h-48">
       <Image
        fill
        src={mubinproduct?.thumbnail}
        alt={mubinproduct?.title}
        className="object-cover rounded-md"
      />
       
        <div className="absolute  group-hover:bg-black/10 transition-all duration-300" />
      </div>
      
      
      <div className="p-3 sm:p-4 text-center">
        <p className="text-sm sm:text-base font-semibold text-gray-800 group-hover:text-green-600 transition-colors duration-200">
          {mubinproduct?.title}
        </p>
        
      </div>
    </div>
  );
};

export default PopularCatagoriesItems;
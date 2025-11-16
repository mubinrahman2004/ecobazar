import Image from "next/image";
import React from "react";
import vegetable from "../../../public/apple.png";
import { FaShopify } from "react-icons/fa";
import { CiStar } from "react-icons/ci";

const PopularProductItem = () => {
  return (
    <div
      className="w-full bg-white rounded-2xl shadow-md hover:shadow-xl  transition-all duration-300 overflow-hidden border border-gray-100"
    >
      {/* PRODUCT IMAGE */}
      <div className="relative w-full h-48 sm:h-56 md:h-60 lg:h-64">
        <Image
          src={vegetable}
          alt="Chinese cabbage"
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* CONTENT */}
      <div className="p-4 sm:p-5 md:p-6">
        {/* Product Name */}
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-2 line-clamp-1">
          Chinese cabbage
        </h3>

        {/* PRICE + BUTTON */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-xl sm:text-2xl md:text-3xl font-bold text-green-600">
              $12.00
            </span>
            <span className="text-sm sm:text-base md:text-lg text-gray-500 line-through">
              $24.00
            </span>
          </div>

          <button
            className="bg-green-600 hover:bg-green-700 text-white  p-2 sm:p-3 md:p-4 rounded-full  transition duration-200 shadow-lg hover:shadow-xl   transform hover:scale-110 active:scale-95"
          >
            <FaShopify className="text-xl sm:text-2xl md:text-3xl" />
          </button>
        </div>

        {/* RATINGS */}
        <div className="flex items-center space-x-2 mb-2">
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, index) => (
              <CiStar key={index} className="text-yellow-400 text-xl" />
            ))}
          </div>
          <span className="text-sm text-gray-600">(824 reviews)</span>
        </div>
      </div>
    </div>
  );
};

export default PopularProductItem;

import React from "react";
import { FaLeaf } from "react-icons/fa";

const AboutCard = ({ about }) => {
  return (
    <div className="group bg-gradient-to-br from-white to-green-50 p-4 sm:p-5 lg:p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-green-100 hover:border-green-300 hover:-translate-y-1">
      <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mb-3 sm:mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
        <FaLeaf className="text-white text-lg sm:text-xl lg:text-2xl" />
      </div>
      <h2 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 text-center mb-1 sm:mb-2 group-hover:text-green-700 transition-colors">
        100% Organic Food
      </h2>
      <h3 className="text-xs sm:text-sm text-gray-600 text-center">
        100% healthy & Fresh food directly from farms
      </h3>
      {/* Hover indicator */}
      <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-green-400 to-emerald-400 mx-auto mt-3 transition-all duration-300" />
    </div>
  );
};

export default AboutCard;
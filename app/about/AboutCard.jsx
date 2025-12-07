import React from "react";
import { FaLeaf } from "react-icons/fa";

const AboutCard = ({ about }) => {
  return (
    <div className="bg-green-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-green-100">
      <div className="flex items-center justify-center w-12 h-12 bg-green-500 rounded-full mb-4 mx-auto">
        <FaLeaf className="text-white text-xl" />
      </div>
      <h2 className="text-lg font-semibold text-gray-800 text-center mb-2">100% Organic  food</h2>
      <h3 className="text-sm text-gray-600 text-center">100% healthy & Fresh food.</h3>
    </div>
  );
};

export default AboutCard;
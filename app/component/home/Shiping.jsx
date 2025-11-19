
import React from "react";
import { FcShipped } from "react-icons/fc";
import { MdOutlineHeadsetMic } from "react-icons/md";
import { FaShopify, FaBox } from "react-icons/fa";

const Shipping = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        
        <div className="flex items-center gap-3 p-4 border rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
          <FcShipped className="text-4xl" />
          <div>
            <h1 className="text-base font-semibold font-sans">
              Free Shipping
            </h1>
            <p className="text-sm font-normal font-sans text-gray-500">
              Free shipping on all your orders
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-4 border rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
          <MdOutlineHeadsetMic className="text-4xl text-[#00B207]" />
          <div>
            <h1 className="text-base font-semibold font-sans">
              Customer Support 24/7
            </h1>
            <p className="text-sm font-normal font-sans text-gray-500">
              Instant access to Support
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-4 border rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
          <FaShopify className="text-4xl text-[#00B207]" />
          <div>
            <h1 className="text-base font-semibold font-sans">
              100% Secure Payment
            </h1>
            <p className="text-sm font-normal font-sans text-gray-500">
              We ensure your money is safe
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-4 border rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
          <FaBox className="text-4xl text-[#00B207]" />
          <div>
            <h1 className="text-base font-semibold font-sans">
              Money-Back Guarantee
            </h1>
            <p className="text-sm font-normal font-sans text-gray-500">
              30 Days Money-Back Guarantee
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Shipping;

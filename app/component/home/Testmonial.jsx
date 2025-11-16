import Image from "next/image";
import React from "react";
import { RiDoubleQuotesR } from "react-icons/ri";
import testimage from '../../../public/testimag.png'
import { CiStar } from "react-icons/ci";

const Testmonial = () => {
  return (
    <section className="bg-green-100 py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
      
       <h2 className="">Client Testimonial</h2>
        
        <div className=" grid lg:grid-cols-3 md:grid-cols-1  gap-6 mt-12">
         
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6">
              <RiDoubleQuotesR className="text-2xl text-green-600 mb-4" />
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
                Phasellus imperdiet elit eu magna dictum.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden">
                    <Image 
                      src={testimage} 
                      alt="testimage"
                      fill
                      className="object-cover"
                      sizes="40px"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">Robert Fox</h3>
                    <h4 className="text-gray-600 text-xs">Customer</h4>
                  </div>
                </div>
                <div className="flex gap-1">
                  {[1,2,3,4,5].map((star) => (
                    <CiStar key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testmonial;
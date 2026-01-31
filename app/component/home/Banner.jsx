import Image from "next/image";
import React from "react";
import banner from "../../../public/Bannar.png";
import banner1 from '../../../public/Bannar1.png';
import banner2 from '../../../public/Bannar2.png';

const Banner = () => {
  return (
    <>
      <section className="py-11 bg-white">
        <div className="container m-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
          <div className="w-full lg:w-2/3">
            <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[500px] rounded-xl overflow-hidden">
              <Image
                src={banner}
                alt="banner"
               width='870px'
                className="object-cover hover:scale-105 transition-transform duration-300 rounded-2xl"
                priority
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
          </div>
          
          <div className="w-full lg:w-1/3 flex flex-col gap-4 lg:gap-6">
            <div className="relative w-full h-48 sm:h-64 md:h-72 lg:h-[242px] rounded-xl overflow-hidden">
              <Image
                src={banner1}
                alt="banner1"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
            <div className="relative w-full h-48 sm:h-64 md:h-72 lg:h-[242px] rounded-xl overflow-hidden">
              <Image
                src={banner2}
                alt="banner2"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
          </div>
        </div>
      </div>
      </section>
    </>
  );
};

export default Banner;
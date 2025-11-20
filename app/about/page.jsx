import Image from "next/image";
import React from "react";
import about2 from "../../public/about2.png";
import AboutCard from "./AboutCard";

const Page = () => {
  return (
    <section className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12 mb-16 lg:mb-24">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 mb-4 md:mb-6">
              100% Trusted Organic Food Store
            </h1>
            <p className="text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed">
              Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi,
              laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit.
              Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan.
              Donec a eros non massa vulputate ornare. Vivamus ornare commodo
              ante, at commodo felis congue vitae.
            </p>
          </div>
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="relative h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg">
              <Image src={about2} alt="about" fill className="object-cover" />
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12">
          <div className="w-full lg:w-1/2">
            <div className="relative h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg">
              <Image src={about2} alt="about" fill className="object-cover" />
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 mb-4 md:mb-6">
              100% Trusted Organic Food Store
            </h1>
            <p className="text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed mb-6 md:mb-8">
              Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi,
              laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit.
              Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan.
              Donec a eros non massa vulputate ornare. Vivamus ornare commodo
              ante, at commodo felis congue vitae.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              <AboutCard />
              <AboutCard />
              <AboutCard />
              <AboutCard />
              <AboutCard />
              <AboutCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;

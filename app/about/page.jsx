import Image from "next/image";
import React from "react";
import about2 from "../../public/about2.png";
import AboutCard from "./AboutCard";
import { FaLeaf, FaTruck, FaShieldAlt, FaRecycle, FaHeart, FaSeedling } from "react-icons/fa";

const Page = () => {
  const aboutFeatures = [
    {
      icon: FaLeaf,
      title: "100% Organic Food",
      description: "Certified organic produce",
      color: "bg-green-500"
    },
    {
      icon: FaTruck,
      title: "Fast Delivery",
      description: "Same-day delivery available",
      color: "bg-blue-500"
    },
    {
      icon: FaShieldAlt,
      title: "Quality Guarantee",
      description: "30-day money back guarantee",
      color: "bg-purple-500"
    },
    {
      icon: FaRecycle,
      title: "Eco-Friendly",
      description: "Sustainable packaging",
      color: "bg-emerald-500"
    },
    {
      icon: FaHeart,
      title: "Health Certified",
      description: "Nutritionist approved",
      color: "bg-pink-500"
    },
    {
      icon: FaSeedling,
      title: "Fresh Daily",
      description: "Farm to table freshness",
      color: "bg-lime-500"
    }
  ];

  return (
    <section className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              About <span className="text-green-600">Ecobazar</span>
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto text-base sm:text-lg lg:text-xl">
              Your trusted partner for premium organic products since 2010
            </p>
          </div>

          {/* Main Content Section 1 */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12 xl:gap-16 mb-12 sm:mb-16 lg:mb-20">
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                100% Trusted Organic Food Store
              </h2>
              <p className="text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed mb-6 sm:mb-8">
                At Shopery, we are committed to providing the highest quality organic products 
                sourced directly from local farms and trusted suppliers. Our mission is to make 
                healthy, sustainable living accessible to everyone.
              </p>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <FaLeaf className="text-green-600 text-sm sm:text-base" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg sm:text-xl mb-1">Organic Certification</h3>
                    <p className="text-gray-600 text-sm sm:text-base">All products are certified organic by USDA standards</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <FaTruck className="text-blue-600 text-sm sm:text-base" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg sm:text-xl mb-1">Fast Delivery</h3>
                    <p className="text-gray-600 text-sm sm:text-base">Same-day delivery within 50 miles of our stores</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 order-1 lg:order-2 mb-8 lg:mb-0">
              <div className="relative h-64 xs:h-72 sm:h-80 md:h-96 lg:h-[480px] rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src={about2} 
                  alt="Organic food store" 
                  fill 
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority
                />
                {/* Decorative overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8 sm:mb-12">
              Why Choose Shopery?
            </h2>
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-6 lg:gap-8">
              {aboutFeatures.map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl p-4 sm:p-5 lg:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-green-200 hover:-translate-y-1"
                >
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 ${feature.color} rounded-xl flex items-center justify-center mb-3 sm:mb-4 mx-auto`}>
                    <feature.icon className="text-white text-xl sm:text-2xl lg:text-3xl" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 text-center mb-1 sm:mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm text-center">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Second Content Section */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12 xl:gap-16">
            <div className="w-full lg:w-1/2">
              <div className="relative h-64 xs:h-72 sm:h-80 md:h-96 lg:h-[480px] rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src={about2} 
                  alt="Fresh organic vegetables" 
                  fill 
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Image badge */}
                <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Since 2010
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                Our Commitment to Quality
              </h2>
              <p className="text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed mb-6 sm:mb-8">
                We meticulously select each product in our inventory, ensuring it meets our 
                strict standards for freshness, quality, and sustainability. Our team works 
                directly with farmers to bring you the best organic produce year-round.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 mb-8">
                <div className="text-center p-4 bg-green-50 rounded-xl">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-700 mb-1">10K+</div>
                  <div className="text-sm sm:text-base text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-700 mb-1">500+</div>
                  <div className="text-sm sm:text-base text-gray-600">Organic Products</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-xl col-span-2 sm:col-span-1">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-700 mb-1">12</div>
                  <div className="text-sm sm:text-base text-gray-600">Years Experience</div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-6 py-3 sm:px-8 sm:py-4 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-colors duration-300 shadow-lg hover:shadow-xl">
                  Shop Organic Now
                </button>
                <button className="px-6 py-3 sm:px-8 sm:py-4 bg-white text-green-600 font-semibold rounded-xl border-2 border-green-600 hover:bg-green-50 transition-colors duration-300">
                  Visit Our Farm
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="bg-gradient-to-r from-gray-900 to-black text-white py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">
              Our Mission
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed mb-8 sm:mb-12">
              "To revolutionize the way people access healthy food by making organic, 
              sustainable products affordable and convenient for every household."
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-green-400">100%</div>
                <div className="text-gray-300">Satisfaction Guarantee</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-gray-700"></div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-green-400">24/7</div>
                <div className="text-gray-300">Customer Support</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-gray-700"></div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-green-400">30</div>
                <div className="text-gray-300">Day Return Policy</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
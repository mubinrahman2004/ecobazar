import Image from 'next/image'
import React from 'react'
import { IoHomeOutline } from 'react-icons/io5'
import discountbannar from '../../public/discountbannar.png'
import { FaArrowRight } from 'react-icons/fa'

const Banner = () => {
  return (
    <section className="py-4 md:py-6 lg:py-8">
      <div className="w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
          <div className="mb-4 md:mb-6 lg:mb-8">
            <h2 className="flex items-center gap-2 text-sm md:text-base lg:text-lg text-gray-600">
              <IoHomeOutline className="w-4 h-4 md:w-5 md:h-5 cursor-pointer"  />
              <span className='text-gray-400 hover:text-green-600 transition-all font-medium cursor-pointer'>Categories</span>
              <span className="text-gray-400">/</span>
              <span className="text-gray-400 hover:text-green-600 transition-all font-medium cursor-pointer">Vegetables</span>
            </h2>
          </div>

          <div className="relative w-full rounded-2xl overflow-hidden shadow-lg">
            <Image 
              src={discountbannar} 
              alt='discountbannar' 
              className="w-full h-auto object-cover"
              priority
            />
            
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-md lg:max-w-lg xl:max-w-xl">
                  
                  <div className="mb-2 md:mb-3 lg:mb-4">
                    <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-green-600 text-xs md:text-sm font-semibold rounded-full">
                      Best Deals
                    </span>
                  </div>

                  <div className="mb-3 md:mb-4 lg:mb-6">
                    <h3 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                      Sale of the Month{' '}
                      <span className="inline-block ml-2 px-3 py-1 md:px-4 md:py-2 lg:px-5 lg:py-2 bg-amber-600 text-white text-sm md:text-base lg:text-lg font-bold rounded-full">
                        56%
                      </span>
                    </h3>
                  </div>

                
                  <div>
                    <button className="flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-3 md:px-6 md:py-3 lg:px-8 lg:py-4 cursor-pointer bg-green-500 hover:bg-green-600 text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 text-sm sm:text-base md:text-lg">
                      Shop Now 
                      <FaArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
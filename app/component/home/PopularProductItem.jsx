'use client'
import Image from "next/image";
import { FaShopify } from "react-icons/fa";
import { CiStar } from "react-icons/ci";

const PopularProductItem = ({ product }) => {
  const imageSrc = product.thumbnail || product.images?.[0];
  const originalPrice =
    product.discountPercentage > 0
      ? product.price / (1 - product.discountPercentage / 100)
      : product.price * 1.2;
  const ratingValue = Math.round(product.rating || 0);

  return (
    <article className="w-full bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
      <div className="relative w-full aspect-[4/5]">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={product.title}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gray-100 text-sm text-gray-500">
            No image
          </div>
        )}
     
      </div>

      <div className="p-4 sm:p-5 md:p-6">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-2 line-clamp-1">
          {product.title}
        </h3>

        <p className="text-sm text-gray-500 line-clamp-2 mb-4">{product.description}</p>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-xl sm:text-2xl md:text-3xl font-bold text-green-600">
              ${product.price.toFixed(2)}
            </span>
            <span className="text-sm sm:text-base md:text-lg text-gray-500 line-through">
              ${originalPrice.toFixed(2)}
            </span>
          </div>

          <button
            className="bg-green-600 hover:bg-green-700 text-white  p-2 sm:p-3 md:p-4 rounded-full  transition duration-200 shadow-lg hover:shadow-xl   transform hover:scale-110 active:scale-95"
            type="button"
          >
            <FaShopify className="text-xl sm:text-2xl md:text-3xl" />
          </button>
        </div>

        <div className="flex items-center space-x-2 mb-2">
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, index) => (
              <CiStar
              
                className="text-xl"
                
              />
            ))}
          </div>
          
        </div>
      </div>
    </article>
  );
};

export default PopularProductItem;

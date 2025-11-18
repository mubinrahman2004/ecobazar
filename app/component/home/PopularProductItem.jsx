'use client'
import Image from "next/image";
import Link from "next/link";
import { FaShopify } from "react-icons/fa";

const PopularProductItem = ({ product }) => {
  const imageSrc =
    product.thumbnail || product.images?.[0] || "/placeholder.png";

  const originalPrice =
    product.discountPercentage > 0
      ? product.price / (1 - product.discountPercentage / 100)
      : product.price * 1.2;

  return (
    <Link href={`/product/${product.id}`}>
      <article className="w-full bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 cursor-pointer">
        
        {/* Image */}
        <div className="relative w-full ">
          <Image
  src={imageSrc}
  alt={product?.title}
  width={800}
  height={800}
  className="w-full h-auto rounded-xl object-contain"
/>
        </div>

        <div className="p-4 sm:p-5 md:p-6">
          
          {/* Title */}
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-2 line-clamp-1">
            {product.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-gray-500 line-clamp-2 mb-4">
            {product.description}
          </p>

          {/* Price section */}
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
              className="bg-green-600 hover:bg-green-700 text-white p-2 sm:p-3 md:p-4 rounded-full transition duration-200 shadow-lg hover:shadow-xl transform hover:scale-110 active:scale-95"
              type="button"
              onClick={(e) => e.preventDefault()}  // Prevent Link click
            >
              <FaShopify className="text-xl sm:text-2xl md:text-3xl" />
            </button>
          </div>

        </div>
      </article>
    </Link>
  );
};

export default PopularProductItem;

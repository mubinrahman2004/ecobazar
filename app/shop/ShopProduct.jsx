"use client";

import Image from "next/image";
import Link from "next/link";
import { SiTraccar } from "react-icons/si";

const ShopProduct = ({ product }) => {
  // Fallback for missing data
  if (!product) return null;

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // Add to cart logic here
    console.log('Add to cart:', product?.id);
  };

  return (
    <Link href={`/product/${product?.id}`} className="block group">
      <div className="bg-white shadow-sm rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full flex flex-col border border-gray-100">
        {/* Image Container */}
        <div className="relative w-full h-40 xs:h-44 sm:h-48 md:h-52 lg:h-56 overflow-hidden">
          <Image
            src={product?.thumbnail || '/placeholder-image.jpg'}
            alt={product?.title || 'Product image'}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 480px) 50vw, (max-width: 640px) 33vw, (max-width: 768px) 25vw, (max-width: 1024px) 20vw, 16vw"
            priority={false}
          />
          
          {/* Discount Badge */}
          {product?.discountPercentage > 10 && (
            <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
              {Math.round(product.discountPercentage)}% OFF
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-3 sm:p-4 flex flex-col flex-grow space-y-2 sm:space-y-3">
          {/* Title */}
          <h3 className="text-sm sm:text-base font-semibold text-gray-800 line-clamp-2 leading-tight group-hover:text-indigo-600 transition-colors">
            {product?.title || 'Product Title'}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1">
            <div className="flex items-center text-yellow-500">
              {[1, 2, 3, 4, 5].map((star) => (
                <SiTraccar
                  key={star}
                  size={14}
                  className={
                    star <= Math.round(product?.rating || 0) 
                      ? "fill-yellow-500" 
                      : "text-gray-300"
                  }
                />
              ))}
            </div>
            <span className="text-xs text-gray-500 ml-1">
              ({product?.rating || 0})
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-xs sm:text-sm line-clamp-2 leading-relaxed flex-grow">
            {product?.description || 'No description available'}
          </p>

          {/* Price & CTA */}
          <div className="flex justify-between items-center pt-2 border-t border-gray-100">
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold text-indigo-600">
                ${product?.price || 0}
              </span>
              {product?.discountPercentage > 0 && (
                <span className="text-xs text-gray-500 line-through">
                  ${Math.round(product.price * (1 + product.discountPercentage / 100))}
                </span>
              )}
            </div>
            
            <button 
              onClick={handleAddToCart}
              className="bg-indigo-600 text-white text-xs sm:text-sm px-3 sm:px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 whitespace-nowrap"
            >
              Add to Cart
            </button>
          </div>

          {/* Stock Status */}
          <div className="flex justify-between items-center text-xs text-gray-500">
            <span className={`px-2 py-1 rounded-full ${
              (product?.stock || 0) > 10 
                ? 'bg-green-100 text-green-800' 
                : (product?.stock || 0) > 0 
                  ? 'bg-yellow-100 text-yellow-800'
                  : 'bg-red-100 text-red-800'
            }`}>
              {product?.stock > 10 ? 'In Stock' : product?.stock > 0 ? 'Low Stock' : 'Out of Stock'}
            </span>
            <span>{product?.stock || 0} left</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ShopProduct;
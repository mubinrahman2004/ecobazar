"use client";

import Image from "next/image";
import Link from "next/link";
import { FaShopify } from "react-icons/fa";
import { BsStarFill, BsStar } from "react-icons/bs";

const ShopProductItem = ({ product }) => {
  const imageSrc =
    product.thumbnail || product.images?.[0] || "/placeholder.png";

  const rating = Math.round(product.rating || 0);

  return (
    <Link href={`/product/${product.id}`}>
      <div className="bg-white rounded-2xl border shadow-sm hover:shadow-md transition cursor-pointer p-3 ">
       
        <div className="relative w-full h-40 mb-3">
          <Image
            src={imageSrc}
            alt={product.title}
            fill
            className="object-contain p-2"
          />
        </div>

       
        <div className="flex justify-between">
          <div>
            <h3 className="text-sm font-semibold mb-1 line-clamp-1">
              {product.title}
            </h3>

          
            <p className="text-green-600 font-bold text-base">
              ${product.price}
            </p>

           
            <div className="flex items-center mt-2">
              {Array.from({ length: 5 }).map((_, i) =>
                i < rating ? (
                  <BsStarFill key={i} className="text-yellow-400 text-xs" />
                ) : (
                  <BsStar key={i} className="text-gray-300 text-xs" />
                )
              )}
            </div>
          </div>
          <div>
            <button
              onClick={(e) => e.preventDefault()}
              className="mt-3 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600"
            >
              <FaShopify />
            </button>
          </div>
        </div>

        {/* CART BUTTON */}
      </div>
    </Link>
  );
};

export default ShopProductItem;

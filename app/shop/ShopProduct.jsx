import Image from "next/image";
import Link from "next/link";
import { CiStar } from "react-icons/ci";

const ShopProduct = ({ product }) => {
  if (!product) return null;

  return (
    <Link href={`/product/${product?.id}`} className="block group">
      <div className="bg-white shadow-sm rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full flex flex-col border border-gray-100">
        <div className="relative w-full h-40 xs:h-44 sm:h-48 md:h-52 lg:h-56 overflow-hidden">
          <Image
            src={product?.thumbnail || "/placeholder-image.jpg"}
            alt={product?.title || "Product image"}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 480px) 50vw, (max-width: 640px) 33vw, (max-width: 768px) 25vw, (max-width: 1024px) 20vw, 16vw"
          />
        </div>

        <div className="p-3 sm:p-4 flex flex-col flex-grow space-y-2 sm:space-y-3">
          <h3 className="text-sm sm:text-base font-semibold text-gray-800 line-clamp-2 leading-tight group-hover:text-indigo-600 transition-colors">
            {product?.title || "Product Title"}
          </h3>

          <div className="flex items-center gap-1">
            <div className="flex items-center text-yellow-500">
              {[1, 2, 3, 4, 5].map((star) => (
                <CiStar
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

          <p className="text-gray-600 text-xs sm:text-sm line-clamp-2 leading-relaxed flex-grow">
            {product?.description || "No description available"}
          </p>

          <div className="flex justify-between items-center pt-2 border-t border-gray-100">
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold text-indigo-600">
                ${product?.price || 0}
              </span>
              {product?.discountPercentage > 0 && (
                <span className="text-xs text-gray-500 line-through">
                  $
                  {Math.round(
                    product.price * (1 + product.discountPercentage / 100)
                  )}
                </span>
              )}
            </div>

            <div>
              <AddToCard
                product={product}
                title="Add to Cart"
                className="mt-8 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-md hover:shadow-xl transition-transform transform hover:scale-105 active:scale-95"
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ShopProduct;

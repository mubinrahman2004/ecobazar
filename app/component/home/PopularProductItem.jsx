import Image from "next/image";
import Link from "next/link";

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
        
        <div className="relative w-full">
          <Image
            src={imageSrc}
            alt={product?.title || "Product image"}
            width={800}
            height={800}
            className="w-full h-auto rounded-xl object-contain"
            priority={false}
          />
        </div>

        <div className="p-4 sm:p-5 md:p-6">
          
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-2 line-clamp-1">
            {product.title}
          </h3>

          <p className="text-sm text-gray-500 line-clamp-2 mb-4">
            {product.description}
          </p>

          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <span className="text-xl sm:text-2xl md:text-3xl font-bold text-green-600">
                ${product.price.toFixed(2)}
              </span>
              <span className="text-sm sm:text-base md:text-lg text-gray-500 line-through">
                ${originalPrice.toFixed(2)}
              </span>
            </div>

            {/* Static shop icon - no interactivity */}
            <div className="bg-green-600 text-white p-2 sm:p-3 md:p-4 rounded-full shadow-lg">
              <svg 
                className="text-xl sm:text-2xl md:text-3xl" 
                fill="currentColor" 
                viewBox="0 0 16 16" 
                width="1em" 
                height="1em"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
              </svg>
            </div>
          </div>

        </div>
      </article>
    </Link>
  );
};

export default PopularProductItem;
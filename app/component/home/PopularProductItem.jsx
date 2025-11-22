import AddToCard from "@/app/ui/AddToCard";
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
         
            </div>

               <div>
              <AddToCard
                product={product}
                title="Add to Cart"
                className=" bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-full text-lg font-semibold shadow-md hover:shadow-xl transition-transform transform hover:scale-105 active:scale-95"
              />
            </div>          

          </div>

        </div>
      </article>
    </Link>
  );
};

export default PopularProductItem;
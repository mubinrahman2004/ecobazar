import Image from "next/image";
import Link from "next/link";

const PopularCatagoriesItems = ({ product }) => {
  const imageSrc =
    product.thumbnail || product.images?.[0] || "/placeholder.png";

  return (
    <Link href={`/category/${product.category.toLowerCase()}`}>
      <div className="group bg-white rounded-2xl border shadow-md hover:shadow-xl transition overflow-hidden cursor-pointer">
        
        <div className="relative w-full h-40">
          <Image
            fill
            src={imageSrc}
            alt={product.category}
            className="object-cover group-hover:scale-105 transition-transform"
          />
        </div>

        <div className="p-4 text-center">
          <p className="text-base font-semibold text-gray-800 group-hover:text-green-600">
            {product.category.toUpperCase()}
          </p>
        </div>

      </div>
    </Link>
  );
};

export default PopularCatagoriesItems;

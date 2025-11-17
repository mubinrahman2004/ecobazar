import Image from "next/image";
import Link from "next/link";
import { CiStar } from "react-icons/ci";
import { FaShopify } from "react-icons/fa";

const ProductListItem = ({ product, index = 0 }) => {
  const hasDiscount = product.originalPrice && product.originalPrice > product.price;
  const discountPercentage = hasDiscount
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  return (
    <article
      className="group relative rounded-2xl border border-gray-100 bg-white/80 p-4 shadow-card transition-all hover:-translate-y-1 hover:border-green-200 hover:shadow-2xl animate-fade-slide"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <div className="relative mb-4 overflow-hidden rounded-2xl bg-gray-50">
        <Link href={`/shop/${product.slug}`} className="block">
          <Image
            src={product.image}
            alt={product.name}
            className="h-48 w-full object-contain transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width:768px) 50vw, (max-width:1280px) 25vw, 20vw"
            priority={index < 2}
          />
        </Link>

        {product.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-semibold text-green-600 shadow-glow">
            {product.badge}
          </span>
        )}

        {hasDiscount && (
          <span className="absolute right-3 top-3 rounded-full bg-rose-500 px-3 py-1 text-xs font-semibold text-white shadow-lg">
            -{discountPercentage}%
          </span>
        )}
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <Link
              href={`/shop/${product.slug}`}
              className="text-lg font-semibold text-gray-800 transition-colors hover:text-green-600"
            >
              {product.name}
            </Link>
            <p className="mt-1 text-sm text-gray-500 line-clamp-2">{product.shortDescription}</p>
          </div>
          <button
            type="button"
            aria-label="Add to cart"
            className="rounded-2xl bg-green-500 p-3 text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-200"
          >
            <FaShopify className="h-5 w-5" />
          </button>
        </div>

        <div>
          <div className="flex items-baseline gap-2 text-gray-800">
            <p className="text-xl font-bold text-green-600">${product.price.toFixed(2)}</p>
            {hasDiscount && (
              <span className="text-sm text-gray-400 line-through">${product.originalPrice.toFixed(2)}</span>
            )}
            <span className="text-xs font-semibold text-gray-400">/ {product.unit}</span>
          </div>
          <p className="text-xs font-medium text-emerald-600">{product.stockStatus}</p>
        </div>

        <div className="flex items-center gap-1">
          <div className="flex text-amber-400">
            {[1, 2, 3, 4, 5].map((star) => (
              <CiStar
                key={star}
                className="h-4 w-4"
                style={{ color: product.rating >= star ? "#fbbf24" : "#d1d5db" }}
              />
            ))}
          </div>
          <span className="text-sm font-semibold text-gray-700">{product.rating.toFixed(1)}</span>
          <span className="text-xs text-gray-400">({product.reviews} reviews)</span>
        </div>

        <div className="flex flex-wrap gap-2">
          {product.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-500 transition group-hover:bg-green-50 group-hover:text-green-600"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default ProductListItem;

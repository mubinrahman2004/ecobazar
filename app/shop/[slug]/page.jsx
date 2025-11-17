import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CiStar } from "react-icons/ci";
import { FaArrowLeftLong, FaLeaf, FaSeedling, FaTruck } from "react-icons/fa6";
import ProductListItem from "../ProductListItem";
import { getProductBySlug, products } from "../../../data/products";

export const generateStaticParams = () =>
  products.map((product) => ({
    slug: product.slug,
  }));

const ProductDetailsPage = ({ params }) => {
  const product = getProductBySlug(params.slug);
  if (!product) {
    notFound();
  }

  const relatedProducts = products
    .filter((item) => item.slug !== product.slug && item.category === product.category)
    .concat(products.filter((item) => item.slug !== product.slug && item.category !== product.category))
    .slice(0, 4);

  return (
    <div className="py-8 md:py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 text-sm font-semibold text-green-600 transition hover:text-green-700"
        >
          <FaArrowLeftLong />
          Back to shop
        </Link>

        <div className="mt-6 grid gap-8 lg:grid-cols-2">
          <div className="space-y-4 animate-fade-slide">
            <div className="rounded-3xl border border-gray-100 bg-white/70 p-6 shadow-card">
              <div className="relative flex items-center justify-center rounded-3xl bg-gradient-to-br from-green-50 via-white to-amber-50 p-6">
                <Image
                  src={product.image}
                  alt={product.name}
                  className="h-80 w-full object-contain drop-shadow-2xl"
                  priority
                />
                <div className="absolute right-4 top-4 rounded-full bg-white px-4 py-1 text-sm font-semibold text-green-700 shadow-glow">
                  {product.badge}
                </div>
              </div>
            </div>

            {product.gallery?.length > 0 && (
              <div className="flex flex-wrap gap-3">
                {product.gallery.map((imageSrc, index) => (
                  <figure
                    key={`${product.slug}-gallery-${index}`}
                    className="flex-1 min-w-[90px] rounded-2xl border border-gray-100 bg-white/70 p-2 text-center"
                  >
                    <Image src={imageSrc} alt={`${product.name} ${index + 1}`} className="h-20 w-full object-contain" />
                  </figure>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-6 animate-fade-slide">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-green-600">
                {product.category}
              </p>
              <h1 className="mt-2 text-3xl font-bold text-gray-900">{product.name}</h1>
              <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
                <div className="flex text-amber-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <CiStar
                      key={star}
                      className="h-5 w-5"
                      style={{ color: product.rating >= star ? "#fbbf24" : "#e2e8f0" }}
                    />
                  ))}
                </div>
                <span className="font-semibold text-gray-800">{product.rating.toFixed(1)}</span>
                <span>({product.reviews} verified buyers)</span>
              </div>
            </div>

            <p className="text-gray-600 text-base leading-relaxed">{product.description}</p>

            <div className="rounded-3xl border border-gray-100 bg-white/80 p-6 shadow-card">
              <div className="flex flex-wrap items-center gap-4">
                <p className="text-3xl font-bold text-gray-900">
                  ${product.price.toFixed(2)}{" "}
                  <span className="text-base font-medium text-gray-400">/ {product.unit}</span>
                </p>
                {product.originalPrice && (
                  <p className="text-sm text-gray-400 line-through">${product.originalPrice.toFixed(2)}</p>
                )}
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-4 py-1 text-xs font-semibold text-emerald-600">
                  <FaLeaf />
                  {product.stockStatus}
                </span>
              </div>
              <p className="mt-2 text-sm text-gray-500">{product.deliveryEstimate}</p>

              <div className="mt-4 flex flex-wrap gap-3">
                <button className="flex-1 rounded-2xl bg-green-500 py-3 text-center font-semibold text-white shadow-lg shadow-green-200 transition hover:-translate-y-0.5 hover:bg-green-600">
                  Add to basket
                </button>
                <button className="flex-1 rounded-2xl border border-green-200 py-3 font-semibold text-green-700 transition hover:bg-green-50">
                  Save for later
                </button>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {product.benefits.map((benefit) => (
                <div key={benefit} className="rounded-2xl border border-gray-100 bg-white/70 p-4 shadow-card">
                  <div className="flex items-center gap-3 text-sm font-semibold text-gray-800">
                    <FaSeedling className="text-green-500" />
                    {benefit}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-gray-100 bg-white/80 p-6 shadow-card animate-fade-slide">
            <h2 className="text-xl font-semibold text-gray-900">Nutrition per 100g</h2>
            <dl className="mt-4 grid grid-cols-2 gap-4">
              {product.nutrition.map((item) => (
                <div key={item.label} className="rounded-2xl bg-gray-50 px-4 py-3 text-center">
                  <dt className="text-sm text-gray-500">{item.label}</dt>
                  <dd className="text-lg font-semibold text-gray-900">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="rounded-3xl border border-gray-100 bg-gradient-to-br from-amber-50 via-white to-green-50 p-6 shadow-card animate-fade-slide">
            <h2 className="text-xl font-semibold text-gray-900">Delivery timeline</h2>
            <div className="mt-4 space-y-4">
              <div className="flex items-center gap-3">
                <FaTruck className="text-green-500" />
                <div>
                  <p className="font-semibold text-gray-800">Eco cold-chain shipping</p>
                  <p className="text-sm text-gray-600">
                    Temperature controlled vans keep veggies crisp from farm to door.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FaLeaf className="text-green-500" />
                <div>
                  <p className="font-semibold text-gray-800">Zero plastic promise</p>
                  <p className="text-sm text-gray-600">Packed in breathable starch-based wraps.</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FaSeedling className="text-green-500" />
                <div>
                  <p className="font-semibold text-gray-800">Farmer spotlight</p>
                  <p className="text-sm text-gray-600">Every pack includes the name of the grower and harvest date.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-green-600">
                Keep browsing
              </p>
              <h2 className="text-2xl font-bold text-gray-900">More from this aisle</h2>
            </div>
            <Link
              href="/shop"
              className="text-sm font-semibold text-green-700 transition hover:text-green-800"
            >
              View all
            </Link>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 xs:grid-cols-2 lg:grid-cols-4">
            {relatedProducts.map((item, index) => (
              <ProductListItem key={item.id} product={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;

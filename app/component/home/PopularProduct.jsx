import PopularProductItem from "./PopularProductItem";

const fetchPopularProducts = async () => {
  const random=Math.floor (Math.random() *99)+1;
  try {
    const response = await fetch(`https://dummyjson.com/products?limit=8&skip=${random}`, {
      mathod:"GET",
      cache:"no-store",
      next: { revalidate: 60 },
    });
    if (!response.ok) {
      return [];
    }
    const data = await response.json();
    return data?.products ?? [];
  } catch (error) {
    console.error("Failed to load popular products", error);
    return [];
  }
};

const PopularProduct = async () => {
  const popularProducts = await fetchPopularProducts();

  return (
    <section className="py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold font-sans mb-8">
          Popular Products
        </h1>

        {popularProducts.length ? (
          <div className="grid  grid-cols-1  sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4   gap-6 sm:gap-8">
            {popularProducts.map((product) => (
              <PopularProductItem key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-gray-200 bg-white/70 p-10 text-center">
            <p className="text-lg font-semibold text-gray-700">
              Products are loading slowly
            </p>
            <p className="mt-2 text-sm text-gray-500">
              Please refresh the page to give it another try.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default PopularProduct;

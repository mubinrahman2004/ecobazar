import PopularCatagoriesItems from "./PopularCatagoriesItems";

async function fetchProducts() {
  const res = await fetch("https://dummyjson.com/products?limit=100", {
    cache: "no-store",
  });
  const data = await res.json();
  return data.products || [];
}

export default async function PopularCatagories() {
  const allProducts = await fetchProducts();

  // Unique Category list
  const used = new Set();
  const categories = [];

  for (let item of allProducts) {
    if (!used.has(item.category)) {
      used.add(item.category);
      categories.push(item);
    }
  }

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        
        <h2 className="text-3xl font-bold mb-6">Popular Categories</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-6">
          {categories.map((item) => (
            <PopularCatagoriesItems key={item.id} product={item} />
          ))}
        </div>

      </div>
    </section>
  );
}

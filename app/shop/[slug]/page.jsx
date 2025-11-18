import Image from "next/image";
import Link from "next/link";

async function getCategoryProducts(slug) {
  const res = await fetch(
    `https://dummyjson.com/products/category/${slug}`
  );
  const data = await res.json();
  return data.products || [];
}

export default async function CategoryPage({ params }) {
  const { slug } = params;

  const products = await getCategoryProducts(slug);

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">

        <h1 className="text-3xl font-bold mb-8 capitalize">
          {slug} Products
        </h1>

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {products.map((item) => (
            <Link key={item.id} href={`/product/${item.id}`}>
              <div className="bg-white rounded-xl shadow hover:shadow-lg p-3 cursor-pointer">
                
                <div className="relative w-full h-40">
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    fill
                    className="object-cover rounded"
                  />
                </div>

                <h3 className="mt-3 font-semibold">{item.title}</h3>
                <p className="text-green-600 font-bold">${item.price}</p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}

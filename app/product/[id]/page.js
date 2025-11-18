import Image from "next/image";

async function getProduct(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  return res.json();
}

export default async function ProductDetails({ params }) {

  const { id } = await params;  
  const product = await getProduct(id);

  const imageSrc =
    product?.thumbnail && product.thumbnail !== ""
      ? product.thumbnail
      : product?.images?.[0] || "/placeholder.png";

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-lg">
            <Image
              src={imageSrc}
              alt={product?.title}
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h1 className="text-4xl font-bold text-gray-900">
              {product?.title}
            </h1>

            <p className="text-gray-600 mt-4 text-lg leading-relaxed">
              {product?.description}
            </p>

            <p className="text-3xl font-bold text-green-600 mt-6">
              ${product?.price}
            </p>

            <button className="mt-8 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-md hover:shadow-xl transition-transform transform hover:scale-105 active:scale-95">
              Add to Cart
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}

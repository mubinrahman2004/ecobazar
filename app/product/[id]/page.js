// app/product/[id]/page.js
import AddToCard from "@/app/ui/AddToCard";
import Image from "next/image";

async function getProduct(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  return res.json();
}

export default async function ProductDetails({ params }) {
  const { id } = await params;
  const product = await getProduct(id);

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="relative h-96 rounded-xl overflow-hidden">
            <Image
              src={product?.thumbnail}
              alt={product?.title}
              fill
              className="object-cover bg-gray-200 p-5"

            />
          </div>

          <div>
            <h1 className="text-4xl font-bold text-gray-900">
              {product?.brand}
            </h1>
            <h1 className="text-2xl font-bold text-gray-900">
              {product?.title}
            </h1>

            <p className="text-gray-600 mt-4">{product?.description}</p>

            <p className="text-3xl font-bold text-green-600 mt-6">
              ${product?.price}
            </p>
            
            <div className="mt-6 space-y-2">
              <p className="text-base font-normal text-gray-500">
                <strong>Warranty:</strong> {product?.warrantyInformation || 'Not specified'}
              </p>
              <p className="text-base font-normal text-gray-500">
                <strong>Return Policy:</strong> {product?.returnPolicy || '30 days return policy'}
              </p>
              <p className="text-base font-normal text-gray-500">
                <strong>Stock:</strong> {product?.stock || 'In stock'}
              </p>
              <p className="text-base font-normal text-gray-500">
                <strong>Weight:</strong> {product?.weight || 'Not specified'}
              </p>
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
    </section>
  );
}
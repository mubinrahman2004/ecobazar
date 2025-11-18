'use client';

import { useEffect, useState } from "react";
import ShopProductItem from "./ShopProductItem";

const ShopProduct = () => {
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(12);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  // Fetch Products
  useEffect(() => {
    async function fetchProducts() {
      const skip = (page - 1) * limit;
      const res = await fetch(
        `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
      );
      const data = await res.json();

      setProducts(data.products || []);
      setTotal(data.total || 0);
    }

    fetchProducts();
  }, [limit, page]);

  const totalPages = Math.ceil(total / limit);

  // Generate page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">

        {/* TOP RIGHT LIMIT SELECT */}
        <div className="flex justify-end mb-6">
          <select
            className="border px-3 py-2 rounded-lg text-sm"
            value={limit}
            onChange={(e) => {
              setLimit(Number(e.target.value));
              setPage(1);
            }}
          >
            <option value="8">Show 8</option>
            <option value="12">Show 12</option>
            <option value="16">Show 16</option>
            <option value="20">Show 20</option>
          </select>
        </div>

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {products.map((product) => (
            <ShopProductItem key={product.id} product={product} />
          ))}
        </div>

        {/* PAGINATION (SAME AS YOUR SCREENSHOT) */}
        <div className="flex justify-center items-center gap-3 mt-10 select-none">

          {/* LEFT ARROW */}
          <button
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
            className={`w-10 h-10 flex items-center justify-center rounded-full 
              ${page === 1 ? "bg-gray-100 text-gray-400" : "bg-gray-100 hover:bg-gray-200"}
            `}
          >
            <span className="text-xl">‹</span>
          </button>

          {/* Numbers with ... */}
          {pageNumbers.map((num, index) => {
            if (
              num === 1 ||
              num === totalPages ||
              (num >= page - 1 && num <= page + 1)
            ) {
              return (
                <button
                  key={num}
                  onClick={() => setPage(num)}
                  className={`w-10 h-10 flex items-center justify-center rounded-full text-sm font-semibold 
                    ${
                      page === num
                        ? "bg-green-600 text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }
                  `}
                >
                  {num}
                </button>
              );
            }

            // Add dots (...)
            if (
              (num === page - 2 && num > 2) ||
              (num === page + 2 && num < totalPages - 1)
            ) {
              return (
                <span key={`dots-${index}`} className="px-2 text-gray-500">
                  ...
                </span>
              );
            }

            return null;
          })}

          {/* RIGHT ARROW */}
          <button
            onClick={() => setPage(page + 1)}
            disabled={page === totalPages}
            className={`w-10 h-10 flex items-center justify-center rounded-full 
              ${page === totalPages ? "bg-gray-100 text-gray-400" : "bg-white border hover:bg-gray-100"}
            `}
          >
            <span className="text-xl">›</span>
          </button>

        </div>
      </div>
    </section>
  );
};

export default ShopProduct;

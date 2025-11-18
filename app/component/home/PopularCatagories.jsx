"use client";
import PopularCatagoriesItems from "./PopularCatagoriesItems";
import { useEffect, useState } from "react";

export default function PopularCatagories() {
  const [categories, setCategories] = useState([]);

  async function fetchProducts() {
    const res = await fetch("https://dummyjson.com/products?limit=100");
    const data = await res.json();

    const uniqueCats = [];
    const used = new Set();

    for (let item of data.products) {
      if (!used.has(item.category)) {
        used.add(item.category);
        uniqueCats.push(item);
      }
    }

    setCategories(uniqueCats);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

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

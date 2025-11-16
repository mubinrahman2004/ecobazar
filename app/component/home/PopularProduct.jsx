import React from "react";
import PopularProductItem from "./PopularProductItem";

const PopularProduct = () => {
  return (
    <section className="py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold font-sans mb-8">
          Popular Products
        </h1>

        {/* Responsive Grid */}
        <div
          className="grid 
                        grid-cols-1 
                        sm:grid-cols-2 
                        md:grid-cols-3 
                        lg:grid-cols-4 
                        gap-6 sm:gap-8"
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <PopularProductItem key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProduct;

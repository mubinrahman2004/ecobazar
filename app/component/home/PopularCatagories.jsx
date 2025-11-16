import React from "react";
import PopularCatagoriesItems from "./PopularCatagoriesItems";

const PopularCatagories = () => {
  
  // const categories = [
  //   { id: 1, name: "Vegetables", count: 24 },
  //   { id: 2, name: "Fruits", count: 18 },
  //   { id: 3, name: "Meat", count: 12 },
  //   { id: 4, name: "Dairy", count: 15 },
  //   { id: 5, name: "Bakery", count: 8 },
  //   { id: 6, name: "Beverages", count: 20 },
  //   { id: 7, name: "Snacks", count: 16 },
  //   { id: 8, name: "Frozen", count: 10 },
  //   { id: 9, name: "Organic", count: 14 },
  //   { id: 10, name: "Seafood", count: 9 },
  //   { id: 11, name: "Spices", count: 22 },
  //   { id: 12, name: "Grains", count: 17 },
  // ];

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3">
            Popular Categories
          </h2>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
            Discover our most popular product categories with the best quality
            and prices
          </p>
        </div>

        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6">
          {/* {categories.map((category) => (
            <PopularCatagoriesItems key={category.id} />
          ))} */}
          <PopularCatagoriesItems/>
          <PopularCatagoriesItems/>
          <PopularCatagoriesItems/>
          <PopularCatagoriesItems/>
          <PopularCatagoriesItems/>
          <PopularCatagoriesItems/>
          <PopularCatagoriesItems/>
          <PopularCatagoriesItems/>
          <PopularCatagoriesItems/>
          <PopularCatagoriesItems/>
          <PopularCatagoriesItems/>
          <PopularCatagoriesItems/>
        </div>

       
        <div className="text-center mt-8 sm:mt-12">
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95">
            View All Categories
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularCatagories;

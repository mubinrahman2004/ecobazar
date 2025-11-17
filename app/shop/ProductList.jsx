"use client";

import { useMemo, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { LuSlidersHorizontal } from "react-icons/lu";
import ProductListItem from "./ProductListItem";
import { products } from "../../data/products";

const categories = ["All", ...new Set(products.map((product) => product.category))];
const tagPool = Array.from(new Set(products.flatMap((product) => product.tags)));
const rawPriceBounds = products.reduce(
  (acc, product) => ({
    min: Math.min(acc.min, product.price),
    max: Math.max(acc.max, product.price),
  }),
  { min: Number.POSITIVE_INFINITY, max: 0 }
);
const priceBounds = {
  min: Math.floor(rawPriceBounds.min),
  max: Math.ceil(rawPriceBounds.max),
};
const ratingFilters = [
  { label: "All ratings", value: 0 },
  { label: "4.5 & up", value: 4.5 },
  { label: "4.0 & up", value: 4 },
  { label: "3.5 & up", value: 3.5 },
];

const ProductList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState(() => ({ ...priceBounds }));
  const [minRating, setMinRating] = useState(0);
  const [sortBy, setSortBy] = useState("featured");
  const [activeTags, setActiveTags] = useState([]);
  const [visibleCount, setVisibleCount] = useState(8);
  const resetVisibleCount = () => setVisibleCount(8);

  const handleTagToggle = (tag) => {
    setActiveTags((prev) =>
      prev.includes(tag) ? prev.filter((item) => item !== tag) : [...prev, tag]
    );
    resetVisibleCount();
  };

  const handlePriceChange = (type, value) => {
    const numeric = Number(value);
    setPriceRange((prev) => {
      if (type === "min") {
        const nextMin = Math.min(numeric, prev.max - 1);
        return { ...prev, min: Math.max(priceBounds.min, nextMin) };
      }
      const nextMax = Math.max(numeric, prev.min + 1);
      return { ...prev, max: Math.min(priceBounds.max, nextMax) };
    });
    resetVisibleCount();
  };

  const removeFilter = (type, value) => {
    switch (type) {
      case "search":
        setSearchTerm("");
        break;
      case "category":
        setSelectedCategory("All");
        break;
      case "priceMin":
        setPriceRange((prev) => ({ ...prev, min: priceBounds.min }));
        break;
      case "priceMax":
        setPriceRange((prev) => ({ ...prev, max: priceBounds.max }));
        break;
      case "rating":
        setMinRating(0);
        break;
      case "tag":
        setActiveTags((prev) => prev.filter((tag) => tag !== value));
        break;
      default:
        break;
    }
    resetVisibleCount();
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("All");
    setPriceRange({ ...priceBounds });
    setMinRating(0);
    setActiveTags([]);
    setSortBy("featured");
    resetVisibleCount();
  };

  const activeFilters = useMemo(() => {
    const chips = [];
    if (searchTerm.trim()) {
      chips.push({ label: `Search: ${searchTerm}`, type: "search" });
    }
    if (selectedCategory !== "All") {
      chips.push({ label: selectedCategory, type: "category" });
    }
    if (priceRange.min > priceBounds.min) {
      chips.push({ label: `Min $${priceRange.min.toFixed(2)}`, type: "priceMin" });
    }
    if (priceRange.max < priceBounds.max) {
      chips.push({ label: `Max $${priceRange.max.toFixed(2)}`, type: "priceMax" });
    }
    if (minRating > 0) {
      chips.push({ label: `${minRating}+ stars`, type: "rating" });
    }
    activeTags.forEach((tag) => chips.push({ label: `#${tag}`, type: "tag", value: tag }));
    return chips;
  }, [searchTerm, selectedCategory, priceRange.min, priceRange.max, minRating, activeTags]);

  const filteredProducts = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();
    const base = products.filter((product) => {
      const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
      const matchesPrice = product.price >= priceRange.min && product.price <= priceRange.max;
      const matchesRating = product.rating >= minRating;
      const matchesTags =
        activeTags.length === 0 || activeTags.every((tag) => product.tags.includes(tag));
      const matchesQuery =
        !query ||
        product.name.toLowerCase().includes(query) ||
        product.shortDescription.toLowerCase().includes(query) ||
        product.tags.some((tag) => tag.toLowerCase().includes(query));
      return matchesCategory && matchesPrice && matchesRating && matchesTags && matchesQuery;
    });

    const sorted = [...base].sort((a, b) => {
      switch (sortBy) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        case "newest":
          return b.reviews - a.reviews;
        default:
          return 0;
      }
    });

    return sorted;
  }, [
    searchTerm,
    selectedCategory,
    priceRange.min,
    priceRange.max,
    minRating,
    activeTags,
    sortBy,
  ]);

  const visibleProducts = filteredProducts.slice(0, visibleCount);

  return (
    <section className="py-8 md:py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 sm:mb-8 md:mb-12 animate-fade-slide">
          <p className="text-sm font-semibold tracking-wide text-green-600 uppercase">
            Market fresh
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
            Fresh groceries, curated for you
          </h1>
          <p className="mt-2 text-gray-500 text-sm sm:text-base max-w-2xl">
            Filter, sort, and explore our seasonal catalog. Click any item to open a detailed story
            with nutrition facts and delivery timelines.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[320px,1fr] lg:items-start">
          <aside className="bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-100 p-5 shadow-soft animate-fade-slide">
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                    <LuSlidersHorizontal className="text-green-500" />
                    Filters
                  </h2>
                  {activeFilters.length > 0 && (
                    <button
                      type="button"
                      className="text-sm font-medium text-green-600 hover:text-green-700"
                      onClick={clearFilters}
                    >
                      Reset
                    </button>
                  )}
                </div>
                <p className="text-sm text-gray-500">
                  Dial in the perfect combo of freshness, flavor, and price.
                </p>
              </div>

              <label className="block">
                <span className="text-xs font-semibold tracking-wide text-gray-500 uppercase">
                  Search
                </span>
                <div className="relative mt-2">
                  <CiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Try organic, spicy, salad..."
                    value={searchTerm}
                    onChange={(event) => {
                      setSearchTerm(event.target.value);
                      resetVisibleCount();
                    }}
                    className="w-full rounded-xl border border-gray-200 bg-white py-2.5 pl-9 pr-3 text-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200"
                  />
                </div>
              </label>

              <div>
                <p className="text-xs font-semibold tracking-wide text-gray-500 uppercase">
                  Categories
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {categories.map((category) => {
                    const isActive = selectedCategory === category;
                    return (
                      <button
                        key={category}
                        type="button"
                        onClick={() => {
                          setSelectedCategory(category);
                          resetVisibleCount();
                        }}
                        className={`rounded-full border px-3 py-1.5 text-sm transition-all ${
                          isActive
                            ? "border-green-500 bg-green-50 text-green-700 shadow-glow"
                            : "border-gray-200 text-gray-600 hover:border-green-200 hover:text-green-600"
                        }`}
                      >
                        {category}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold tracking-wide text-gray-500 uppercase">
                  Price range
                </p>
                <div className="mt-3 space-y-4">
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>${priceRange.min.toFixed(2)}</span>
                    <span>${priceRange.max.toFixed(2)}</span>
                  </div>
                  <div className="space-y-3">
                    <input
                      type="range"
                      min={priceBounds.min}
                      max={priceBounds.max}
                      value={priceRange.min}
                      onChange={(event) => handlePriceChange("min", event.target.value)}
                      className="w-full accent-green-500"
                    />
                    <input
                      type="range"
                      min={priceBounds.min}
                      max={priceBounds.max}
                      value={priceRange.max}
                      onChange={(event) => handlePriceChange("max", event.target.value)}
                      className="w-full accent-green-500"
                    />
                  </div>
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold tracking-wide text-gray-500 uppercase">
                  Minimum rating
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {ratingFilters.map((option) => {
                    const isActive = minRating === option.value;
                    return (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => {
                          setMinRating(option.value);
                          resetVisibleCount();
                        }}
                        className={`rounded-full border px-3 py-1.5 text-sm transition-all ${
                          isActive
                            ? "border-amber-400 bg-amber-50 text-amber-700 shadow-glow"
                            : "border-gray-200 text-gray-600 hover:border-amber-200 hover:text-amber-600"
                        }`}
                      >
                        {option.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold tracking-wide text-gray-500 uppercase">
                  Highlight tags
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {tagPool.map((tag) => {
                    const isActive = activeTags.includes(tag);
                    return (
                      <button
                        key={tag}
                        type="button"
                        onClick={() => handleTagToggle(tag)}
                        className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-all ${
                          isActive
                            ? "bg-green-500 text-white shadow-glow"
                            : "bg-gray-100 text-gray-500 hover:bg-green-50 hover:text-green-600"
                        }`}
                      >
                        #{tag}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </aside>

          <div className="space-y-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between animate-fade-slide">
              <div>
                <p className="text-sm text-gray-500">
                  Showing <span className="font-semibold text-gray-800">{visibleProducts.length}</span>{" "}
                  of <span className="font-semibold text-gray-800">{filteredProducts.length}</span> items
                </p>
              </div>
              <label className="text-sm text-gray-500">
                Sort by
                <select
                  value={sortBy}
                  onChange={(event) => {
                    setSortBy(event.target.value);
                    resetVisibleCount();
                  }}
                  className="ml-2 rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                  <option value="newest">Trending</option>
                </select>
              </label>
            </div>

            {activeFilters.length > 0 && (
              <div className="flex flex-wrap items-center gap-2 rounded-2xl border border-green-100 bg-green-50/60 p-3 animate-fade-slide">
                <p className="text-xs font-semibold uppercase tracking-wide text-green-700">
                  Active filters
                </p>
                {activeFilters.map((filter) => (
                  <button
                    key={`${filter.type}-${filter.label}`}
                    type="button"
                    onClick={() => removeFilter(filter.type, filter.value)}
                    className="inline-flex items-center gap-1 rounded-full border border-green-200 bg-white px-3 py-1 text-xs font-medium text-green-700 shadow-sm transition hover:border-green-300"
                  >
                    {filter.label}
                    <IoClose className="text-sm" />
                  </button>
                ))}
              </div>
            )}

            {visibleProducts.length > 0 ? (
              <div className="grid grid-cols-1 gap-4 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                {visibleProducts.map((product, index) => (
                  <ProductListItem key={product.id} product={product} index={index} />
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-gray-200 bg-white/70 p-10 text-center animate-fade-slide">
                <p className="text-lg font-semibold text-gray-700">No matches yet</p>
                <p className="mt-2 text-sm text-gray-500">
                  Try removing one of the filters or searching for a different term. Fresh inventory
                  lands every morning.
                </p>
                <button
                  type="button"
                  className="mt-4 rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-600 hover:border-green-200 hover:text-green-600"
                  onClick={clearFilters}
                >
                  Clear all filters
                </button>
              </div>
            )}

            {visibleProducts.length < filteredProducts.length && (
              <div className="flex justify-center pt-4">
                <button
                  type="button"
                  onClick={() => setVisibleCount((prev) => prev + 4)}
                  className="rounded-full bg-green-500 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-green-200 transition hover:-translate-y-0.5 hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-200"
                >
                  Load more products
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductList;

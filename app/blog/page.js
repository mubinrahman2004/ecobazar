"use client";
import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import Image from "next/image";
import background from '../../public/background.png';
import { IoMdHome } from "react-icons/io";
import { TbLoader } from "react-icons/tb";

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [productImages, setProductImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchBlogs() {
    try {
      setLoading(true);
      setError(null);

      const [postRes, productRes] = await Promise.all([
        fetch("https://dummyjson.com/posts?limit=20"),
        fetch("https://dummyjson.com/products?limit=20")
      ]);

      if (!postRes.ok || !productRes.ok) {
        throw new Error('Failed to fetch data');
      }

      const postData = await postRes.json();
      const productData = await productRes.json();

      const images = productData.products.map((p) => p.thumbnail);

      setProductImages(images);
      setBlogs(postData.posts || []);
    } catch (err) {
      setError(err.message);
      console.error("Error fetching data:", err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <div className="relative w-full h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/40 z-10" />
        <Image
          src={background}
          alt="background"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
            Our Blog
          </h1>
          <div className="flex items-center gap-2 text-white/90 text-sm sm:text-base">
            <IoMdHome className="text-green-400" />
            <span>Home</span>
            <span className="mx-2">/</span>
            <span className="text-green-400">Blog</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Page Description */}
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Latest Articles & News
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-base sm:text-lg">
              Stay updated with the latest trends, tips, and insights from our expert team.
            </p>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="flex flex-col items-center justify-center py-20">
              <TbLoader className="w-12 h-12 text-green-600 animate-spin mb-4" />
              <p className="text-gray-600">Loading articles...</p>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="text-center py-20 px-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                <span className="text-2xl">⚠️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Something went wrong
              </h3>
              <p className="text-gray-600 mb-6">{error}</p>
              <button
                onClick={fetchBlogs}
                className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
              >
                Try Again
              </button>
            </div>
          )}

          {/* Blog Grid */}
          {!loading && !error && (
            <>
              <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                {blogs.map((blog, index) => (
                  <BlogCard 
                    key={blog.id} 
                    blog={blog} 
                    image={productImages[index % productImages.length] || '/api/placeholder/400/300'} 
                  />
                ))}
              </div>

              {/* No Blogs State */}
              {blogs.length === 0 && !loading && !error && (
                <div className="text-center py-20">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                    <span className="text-2xl">📝</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    No articles found
                  </h3>
                  <p className="text-gray-600">
                    Check back later for new blog posts.
                  </p>
                </div>
              )}

              {/* Load More Button */}
              {blogs.length > 0 && (
                <div className="text-center mt-12 sm:mt-16">
                  <button className="px-8 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all font-medium">
                    Load More Articles
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
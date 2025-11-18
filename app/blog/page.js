"use client";
import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import Image from "next/image";
import background from '../../public/background.png'
import { IoMdHome } from "react-icons/io";


export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [productImages, setProductImages] = useState([]);

  async function fetchBlogs() {
    const postRes = await fetch("https://dummyjson.com/posts?limit=20");
    const postData = await postRes.json();

    const productRes = await fetch("https://dummyjson.com/products?limit=20");
    const productData = await productRes.json();

    // product thumbnails
    const images = productData.products.map((p) => p.thumbnail);

    setProductImages(images);
    setBlogs(postData.posts);
  }

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      {/* <div className="absolute top-2 left-1.5">
      </div> */}
      <div className="relative ">
        <Image src={background} alt="backgrount "/>
       <p className="text-white container  absolute flex items-center gap-3 top-2 left-2"><IoMdHome /> Blog</p>
      </div>
      <div className="container pt-5 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4">

        {blogs.map((blog, index) => (
          <BlogCard 
            key={blog.id} 
            blog={blog} 
            image={productImages[index % productImages.length]} 
          />
        ))}

      </div>
    </div>
  );
}

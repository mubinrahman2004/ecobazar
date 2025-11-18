'use client';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const ShopSlider = () => {
  const [products, setProducts] = useState([]);

  async function fetchSliderProducts() {
    const res = await fetch("https://dummyjson.com/products?limit=10");
    const data = await res.json();
    setProducts(data.products || []);
  }

  useEffect(() => {
    fetchSliderProducts();
  }, []);

  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={2}
      breakpoints={{
        640: { slidesPerView: 3 },
        768: { slidesPerView: 4 },
        1024: { slidesPerView: 5 },
      }}
    >
      {products.map((item) => (
        <SwiperSlide key={item.id}>
          <Link href={`/product/${item.id}`}>
            <div className="border rounded-xl p-3 bg-white shadow hover:shadow-lg transition cursor-pointer">
              <div className="relative w-full h-32 mb-3">
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-center text-sm font-semibold">{item.title}</p>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ShopSlider;

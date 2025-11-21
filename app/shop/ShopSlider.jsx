// 'use client';

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import { Autoplay, FreeMode } from "swiper/modules";

// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useState } from "react";

// const ShopSlider = () => {
//   const [products, setProducts] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   async function fetchSliderProducts() {
//     try {
//       const res = await fetch("https://dummyjson.com/products?limit=10");
//       const data = await res.json();
//       setProducts(data.products || []);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   }

//   useEffect(() => {
//     fetchSliderProducts();
//   }, []);

//   if (isLoading) {
//     return (
//       <div className="flex space-x-4 overflow-hidden px-4">
//         {[...Array(5)].map((_, i) => (
//           <div key={i} className="flex-shrink-0 w-40 sm:w-48 md:w-56 lg:w-64">
//             <div className="border rounded-xl p-3 bg-gray-200 animate-pulse h-40"></div>
//           </div>
//         ))}
//       </div>
//     );
//   }

//   return (
//     <div className="px-3 sm:px-4 lg:px-6">
//       <Swiper
//         spaceBetween={12}
//         slidesPerView={2}
//         freeMode={true}
//         autoplay={{
//           delay: 3000,
//           disableOnInteraction: false,
//         }}
//         modules={[Autoplay, FreeMode]}
//         breakpoints={{
//           320: { slidesPerView: 2.2, spaceBetween: 12 },
//           480: { slidesPerView: 2.5, spaceBetween: 14 },
//           640: { slidesPerView: 3.2, spaceBetween: 16 },
//           768: { slidesPerView: 4, spaceBetween: 18 },
//           1024: { slidesPerView: 5, spaceBetween: 20 },
//           1280: { slidesPerView: 6, spaceBetween: 22 },
//         }}
//         className="!pb-4"
//       >
//         {products.map((item) => (
//           <SwiperSlide key={item.id}>
//             <Link href={`/product/${item.id}`}>
//               <div className="border rounded-lg sm:rounded-xl p-2 sm:p-3 bg-white shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer h-full">
//                 <div className="relative w-full h-24 xs:h-28 sm:h-32 md:h-36 mb-2 sm:mb-3">
//                   <Image
//                     src={item.thumbnail}
//                     alt={item.title}
//                     fill
//                     className="object-contain p-1"
//                     sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
//                   />
//                 </div>
//                 <p className="text-xs sm:text-sm font-semibold text-center line-clamp-2 leading-tight">
//                   {item.title}
//                 </p>
//               </div>
//             </Link>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default ShopSlider;
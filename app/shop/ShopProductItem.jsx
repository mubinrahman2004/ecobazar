// import Image from "next/image";
// import Link from "next/link";

// const ShopProductItem = ({ product }) => {
//   return (
//     <Link href={`/product/${product.id}`}>
//       <div className="bg-white rounded-lg sm:rounded-xl lg:rounded-2xl border shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer p-2 sm:p-3 h-full flex flex-col">
       
//         <div className="relative w-full h-28 xs:h-32 sm:h-36 md:h-40 mb-2 sm:mb-3 flex">
//           <Image
//             src={product?.thumbnail || '/placeholder-image.jpg'}
//             alt={product?.title}
//             fill
//             className="object-contain p-1 sm:p-2"
//             sizes="(max-width: 480px) 50vw, (max-width: 640px) 33vw, (max-width: 768px) 25vw, (max-width: 1024px) 20vw, (max-width: 1280px) 16vw, 12vw"
//             priority={false}
//           />
//         </div>

//         <div className="flex flex-col flex-grow">
//           <h3 className="text-xs xs:text-sm font-semibold mb-1 line-clamp-2 flex-grow leading-tight">
//             {product.title}
//           </h3>

//           <div className="mt-1 sm:mt-2">
//             <div className="flex items-center gap-1 sm:gap-2">
//               <p className="text-green-600 font-bold text-sm sm:text-base">
//                 $ {product.price}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Link>
//   );
// };

// export default ShopProductItem;
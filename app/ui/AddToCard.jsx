
"use client";

import { FaShoppingBag } from "react-icons/fa";
import { useCart } from "./CartProvider";
import { toast } from "react-toastify";

export default function AddToCard({ product, title, className }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product, 1);
    toast.success(`${product.title} added to cart!`);
  };

  return (
    <button
      onClick={handleAddToCart}
      className={`${
        !title && "absolute bottom-4 right-4"
      } px-1 py-2 gap-2 rounded-full bg-gray-300  text-softprimary flex items-center justify-center text-lg hover:bg-red-600 hover:text-white duration-200 cursor-pointer ${className}`}
    >
      {title}
      <FaShoppingBag />
    </button>
  );
}
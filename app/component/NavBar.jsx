// components/NavBar.js
"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../../public/Logo.png";
import { CiSearch, CiHeart } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
import { BiSolidPhoneCall } from "react-icons/bi";
import { HiMenu, HiX } from "react-icons/hi";
import { useCart } from "../ui/CartProvider";
import { CgProfile } from "react-icons/cg";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isPersonOpen, setIsPersonOpen] = useState(false);
  const { cart, cartCount, removeFromCart, updateQuantity } = useCart();

  return (
    <>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <Link href={"/"}>
              <Image
                src={logo}
                alt="logo"
                className="w-24 h-auto md:w-32 lg:w-auto"
                priority
              />
            </Link>
          </div>

          <div className="hidden md:flex flex-1 max-w-2xl mx-4">
            <div className="flex p-2 border items-center gap-2 rounded-[10px] w-full">
              <CiSearch className="text-gray-500 cursor-pointer " />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full outline-none bg-transparent"
              />
            </div>
            <button className="ml-2 text-[16px] bg-green-600 px-4 py-2 rounded-[10px] text-white cursor-pointer hover:bg-green-700 transition-colors">
              Search
            </button>
          </div>

          {/* Mobile Search Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            <CiSearch className="text-2xl" />
          </button>

          {/* Mobile Search */}
          {isSearchOpen && (
            <div className="absolute top-20 left-0 right-0 bg-white p-4 shadow-lg md:hidden z-50">
              <div className="flex gap-2">
                <div className="flex p-2 border items-center gap-2 rounded-[10px] flex-1">
                  <CiSearch className="text-gray-500" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="w-full outline-none bg-transparent"
                  />
                </div>
                <button className="bg-green-600 px-4 py-2 rounded-[10px] text-white">
                  Search
                </button>
              </div>
            </div>
          )}

          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            {/* Cart Icon with Count */}
            <div className="relative">
              <button
                className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg relative"
                onClick={() => setIsCartOpen(!isCartOpen)}
              >
                <FaShoppingCart className="text-xl" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-green-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Cart Dropdown */}
              {isCartOpen && (
                <div className="absolute right-0 top-full mt-2 w-80 bg-white shadow-lg rounded-lg z-50 border">
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-4">
                      Shopping Cart
                    </h3>

                    {cart.length === 0 ? (
                      <p className="text-gray-500 text-center py-4">
                        Your cart is empty
                      </p>
                    ) : (
                      <>
                        <div className="max-h-64 overflow-y-auto space-y-3">
                          {cart.map((item) => (
                            <div
                              key={item.id}
                              className="flex items-center gap-3 border-b pb-3"
                            >
                              <Image
                                src={item.thumbnail}
                                alt={item.title}
                                width={50}
                                height={50}
                                className="rounded object-cover"
                              />
                              <div className="flex-1">
                                <h4 className="text-sm font-medium line-clamp-1">
                                  {item.title}
                                </h4>
                                <p className="text-green-600 font-semibold">
                                  ${item.price}
                                </p>
                                <div className="flex items-center gap-2 mt-1">
                                  <button
                                    onClick={() =>
                                      updateQuantity(item.id, item.quantity - 1)
                                    }
                                    className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-xs"
                                  >
                                    -
                                  </button>
                                  <span className="text-sm">
                                    {item.quantity}
                                  </span>
                                  <button
                                    onClick={() =>
                                      updateQuantity(item.id, item.quantity + 1)
                                    }
                                    className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-xs"
                                  >
                                    +
                                  </button>
                                </div>
                              </div>
                              <button
                                onClick={() => removeFromCart(item.id)}
                                className="text-red-500 hover:text-red-700 text-sm"
                              >
                                Remove
                              </button>
                            </div>
                          ))}
                        </div>

                        <div className="mt-4 pt-4 border-t">
                          <div className="flex justify-between items-center mb-4">
                            <span className="font-semibold">Total:</span>
                            <span className="font-semibold text-green-600">
                              $
                              {cart
                                .reduce(
                                  (total, item) =>
                                    total + item.price * item.quantity,
                                  0
                                )
                                .toFixed(2)}
                            </span>
                          </div>
                          <Link
                            href="#"
                            className="block w-full bg-green-600 text-white text-center  py-2 rounded-lg hover:bg-green-700 transition-colors"
                            onClick={() => setIsCartOpen(false)}
                          >
                            View Cart
                          </Link>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Wishlist Icon */}
            <Link
              href={"/registration"}
              className="text-black hover:text-green-400 transition-colors text-3xl block py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <CgProfile />
            </Link>
          </div>

          {/* Mobile Icons */}
          <div className="md:hidden flex items-center gap-4">
            {/* Mobile Cart Icon */}
            <div className="relative">
              <button
                className="p-2 relative"
                onClick={() => setIsCartOpen(!isCartOpen)}
              >
                <FaShoppingCart className="text-xl" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-green-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {cartCount}
                  </span>
                )}
              </button>
             
            </div>
             <Link
              href={"/registration"}
              className="text-black hover:text-green-400 text-3xl transition-colors  block py-2"
              onClick={() => setIsPersonOpen(!isPersonOpen)}
            >
              <CgProfile />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <HiX className="text-2xl" />
            ) : (
              <HiMenu className="text-2xl" />
            )}
          </button>
        </div>
      </div>

      <div className="bg-black">
        <div className="container px-4">
          <div className="flex justify-between items-center py-3">
            <ul className="hidden md:flex space-x-6 lg:space-x-8">
              <li>
                <Link
                  href={"/"}
                  className="text-white hover:text-green-400 transition-colors text-sm lg:text-base"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href={"/shop"}
                  className="text-white hover:text-green-400 transition-colors text-sm lg:text-base"
                >
                  Shop
                </Link>
              </li>
             
              <li>
                <Link
                  href={"/blog"}
                  className="text-white hover:text-green-400 transition-colors text-sm lg:text-base"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href={"/about"}
                  className="text-white hover:text-green-400 transition-colors text-sm lg:text-base"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href={"/contact"}
                  className="text-white hover:text-green-400 transition-colors text-sm lg:text-base"
                >
                  Contact Us
                </Link>
              </li>
            
            </ul>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className="absolute top-20 left-0 right-0 bg-black md:hidden z-50 shadow-lg">
                <ul className="flex flex-col space-y-4 p-6">
                  <li>
                    <Link
                      href={"/"}
                      className="text-white hover:text-green-400 transition-colors text-lg block py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/shop"}
                      className="text-white hover:text-green-400 transition-colors text-lg block py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Shop
                    </Link>
                  </li>
                
                  <li>
                    <Link
                      href={"/blog"}
                      className="text-white hover:text-green-400 transition-colors text-lg block py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/about"}
                      className="text-white hover:text-green-400 transition-colors text-lg block py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/contact"}
                      className="text-white hover:text-green-400 transition-colors text-lg block py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li>
                 
                  </li>
                </ul>
              </div>
            )}

            <div className="flex items-center gap-2">
              <BiSolidPhoneCall className="text-green-400" />
              <span className="text-white text-sm lg:text-base">
                219 555-0114
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;

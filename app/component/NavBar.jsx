'use client'
import Image from "next/image";
import React, { useState } from "react";
import logo from "../../public/Logo.png";
import { CiSearch, CiHeart } from "react-icons/ci";
import { SiShopify } from "react-icons/si";
import Link from "next/link";
import { BiSolidPhoneCall } from "react-icons/bi";
import { HiMenu, HiX } from "react-icons/hi";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">

          <div className="flex items-center">
          <Link href={'/'}>
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
              <CiSearch className="text-gray-500" />
              <input 
                type="text" 
                placeholder="Search products..." 
                className="w-full outline-none bg-transparent"
              />
            </div>
            <button className="ml-2 text-[16px] bg-green-600 px-4 py-2 rounded-[10px] text-white hover:bg-green-700 transition-colors">
              Search
            </button>
          </div>

         
          <button 
            className="md:hidden p-2"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            <CiSearch className="text-2xl" />
          </button>

          
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
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <CiHeart className="text-2xl" />
            </button>
            <button className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg">
              <SiShopify className="text-xl" />
              <div className="hidden lg:block">
                <p className="text-sm text-gray-600">Shopping cart:</p>
                <p className="text-sm font-semibold">$57.00</p>
              </div>
            </button>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <CiHeart className="text-2xl" />
            <SiShopify className="text-xl" />
          </div>

          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <HiX className="text-2xl" /> : <HiMenu className="text-2xl" />}
          </button>
        </div>
      </div>

      <div className="bg-black">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-3">
           
            <ul className="hidden md:flex space-x-6 lg:space-x-8">
              <li>
                <Link href={'/'} className="text-white hover:text-green-400 transition-colors text-sm lg:text-base">Home</Link>
              </li>
              <li>
                <Link href={'/shop'} className="text-white hover:text-green-400 transition-colors text-sm lg:text-base">Shop</Link>
              </li>
              <li>
                <Link href={'/pages'} className="text-white hover:text-green-400 transition-colors text-sm lg:text-base">Pages</Link>
              </li>
              <li>
                <Link href={'/blog'} className="text-white hover:text-green-400 transition-colors text-sm lg:text-base">Blog</Link>
              </li>
              <li>
                <Link href={'/about'} className="text-white hover:text-green-400 transition-colors text-sm lg:text-base">About Us</Link>
              </li>
              <li>
                <Link href={'/contact'} className="text-white hover:text-green-400 transition-colors text-sm lg:text-base">Contact Us</Link>
              </li>
              <li>
                <Link href={'registration'} className="text-white hover:text-green-400 transition-colors text-sm lg:text-base">Account</Link>
              </li>
            </ul>

          
            {isMenuOpen && (
              <div className="absolute top-20 left-0 right-0 bg-black md:hidden z-50 shadow-lg">
                <ul className="flex flex-col space-y-4 p-6">
                  <li>
                    <Link 
                      href={'/'} 
                      className="text-white hover:text-green-400 transition-colors text-lg block py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href={'/shop'} 
                      className="text-white hover:text-green-400 transition-colors text-lg block py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Shop
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href={'/pages'} 
                      className="text-white hover:text-green-400 transition-colors text-lg block py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Pages
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href={'/blog'} 
                      className="text-white hover:text-green-400 transition-colors text-lg block py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href={'/about'} 
                      className="text-white hover:text-green-400 transition-colors text-lg block py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href={'/contact'} 
                      className="text-white hover:text-green-400 transition-colors text-lg block py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href={'/registration'} 
                      className="text-white hover:text-green-400 transition-colors text-lg block py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Account
                    </Link>
                  </li>
                </ul>
              </div>
            )}

            <div className="flex items-center gap-2">
              <BiSolidPhoneCall className="text-green-400" />
              <span className="text-white text-sm lg:text-base">219 555-0114</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
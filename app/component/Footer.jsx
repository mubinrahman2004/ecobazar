import Link from "next/link";
import React from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-lg sm:text-xl font-medium text-white">
              Ecobazar
            </h2>
            <p className="text-sm sm:text-base text-[#808080] max-w-md leading-relaxed">
              Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis
              dui, eget bibendum magna congue nec.
            </p>
            <p className="text-sm sm:text-base font-medium text-white">
              (219) 555-0114 <span className="text-[#808080]">or</span>{" "}
              Proxy@gmail.com
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 lg:gap-8">
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-lg sm:text-xl text-white font-medium">
                My Account
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {[
                  "My Account",
                  "Order History",
                  "Shopping Cart",
                  "Wishlist",
                  "Settings",
                ].map((item) => (
                  <li key={item}>
                    <Link
                      href={""}
                      className="text-sm sm:text-base text-[#999999] hover:text-white transition-colors duration-200"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-lg sm:text-xl text-white font-medium">
                Helps
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {["Contact", "Faqs", "Terms & Condition", "Privacy Policy"].map(
                  (item) => (
                    <li key={item}>
                      <Link
                        href={""}
                        className="text-sm sm:text-base text-[#999999] hover:text-white transition-colors duration-200"
                      >
                        {item}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-lg sm:text-xl text-white font-medium">
                Proxy
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {[
                  "About",
                  "Shop",
                  "Product",
                  "Privacy Policy",
                  "Track Order",
                ].map((item) => (
                  <li key={item}>
                    <Link
                      href={""}
                      className="text-sm sm:text-base text-[#999999] hover:text-white transition-colors duration-200"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <p className="text-base sm:text-lg font-normal text-white">
              Download our Mobile App
            </p>
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 sm:gap-4">
              <Link
                href="#"
                className="px-4 py-3 bg-gray-800 hover:bg-gray-700 w-full sm:w-auto rounded-xl flex items-center gap-3 transition-all duration-200 group"
              >
                <FaApple className="text-white text-xl" />
                <div className="text-white">
                  <p className="text-xs">Download on the</p>
                  <h2 className="text-sm font-semibold">App Store</h2>
                </div>
              </Link>

              <Link
                href="#"
                className="px-4 py-3 bg-gray-800 hover:bg-gray-700 w-full sm:w-auto rounded-xl flex items-center gap-3 transition-all duration-200 group"
              >
                <FaGooglePlay className="text-white text-xl" />
                <div className="text-white">
                  <p className="text-xs">Get it on</p>
                  <h2 className="text-sm font-semibold">Google Play</h2>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 sm:mt-12 lg:mt-16 pt-8 sm:pt-12 lg:pt-16">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[#808080] text-center sm:text-left">
              © {new Date().getFullYear()} Shopery. All rights reserved.
            </p>
            <div className="flex gap-4 sm:gap-6">
              {["Privacy Policy", "Terms of Service", "Cookies Settings"].map(
                (item) => (
                  <Link
                    key={item}
                    href="#"
                    className="text-sm text-[#808080] hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

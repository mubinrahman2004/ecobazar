import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaMessage } from "react-icons/fa6";
import { MdWifiCalling3 } from "react-icons/md";

const page = () => {
  return (
    <section className="min-h-screen ">
      <div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
            <div className="flex justify-between">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-6 sm:mb-8">
                  Get in Touch
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="mt-1">
                      <CiLocationOn className="text-2xl sm:text-3xl text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                        Address
                      </h3>
                      <p className="text-gray-600 text-base sm:text-lg">
                        2715 Ash Dr. San Jose, South Dakota 83475
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="mt-1">
                      <FaMessage className="text-xl sm:text-2xl text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                        Email
                      </h3>
                      <p className="text-gray-600 text-base sm:text-lg">
                        Proxy@gmail.com
                        <br />
                        Help.proxy@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="mt-1">
                      <MdWifiCalling3 className="text-2xl sm:text-3xl text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                        Phone
                      </h3>
                      <p className="text-gray-600 text-base sm:text-lg">
                        (219) 555-0114
                        <br />
                        (164) 333-0487
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg">
              <div className="mb-6 sm:mb-8">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
                  Just Say Hello!
                </h3>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  Do you fancy saying hi to me or you want to get started with
                  your project and you need my help? Feel free to contact me.
                </p>
              </div>

              <form className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 sm:py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-500 text-base sm:text-lg"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 sm:py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-500 text-base sm:text-lg"
                    />
                  </div>
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full px-4 py-3 sm:py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-500 text-base sm:text-lg"
                  />
                </div>

                <div>
                  <textarea
                    placeholder="Hello! I'd like to talk about..."
                    rows={5}
                    className="w-full px-4 py-3 sm:py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-500 text-base sm:text-lg resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="px-8 py-3 sm:py-4 bg-green-500 hover:bg-green-600 text-white rounded-2xl font-semibold text-base sm:text-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 shadow-lg hover:shadow-xl"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;

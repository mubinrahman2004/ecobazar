"use client"
import React, { useState } from "react";
import Link from "next/link";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation";

const Page = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const router=useRouter()

  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://api.freeapi.app/api/v1/users/login",
        {
          method: "POST",
          headers: { "content-type": "application/json" },
          body:JSON.stringify(userData)
        },
      );
      const data = await response.json();

      if (data.success===false) {
     return toast.error(data.massage)
        
      }
      if (data.success===true) {
        toast.success(data.massage)
        document.cookie=`cokeei=${data?.data?.accessToken}`;
        setTimeout(()=>{
            router.push("/")
        },2000)
      }

      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }


  return (
   <>
    <ToastContainer></ToastContainer>
      <div className="min-h-screen  flex items-center justify-center  ">
      <div className="w-full max-w-md mx-4 sm:mx-6  md:mx-8 lg:mx-12 xl:mx-16">
        <div className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl  shadow-lg border border-gray-300">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2 text-center lg:text-left">
            Sign in
          </h2>
          <p className="text-gray-600 mb-6 sm:mb-8 text-center lg:text-left">
            Enter your credentials to access your account
          </p>

          <form onSubmit={handelSubmit} className="space-y-4 sm:space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email Address
              </label>
              <input
                value={userData.email}
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 sm:py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Password
              </label>
              <input
                value={userData.password}
                onChange={(e) =>
                  setUserData({ ...userData, password: e.target.value })
                }
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full px-4 py-3 sm:py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white py-3 sm:py-4 px-4 rounded-2xl font-semibold text-sm sm:text-base transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Login
            </button>
          </form>

          <div className="my-6 sm:my-8 flex items-center">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="px-4 text-gray-500 text-sm">Or</span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          <div className="text-center mt-6 sm:mt-8 pt-4 border-t border-gray-200">
            <p className="text-gray-600 text-sm sm:text-base">
              Don't have an account?{" "}
              <Link
                href="/registration"
                className="text-green-500 hover:text-green-600 font-semibold transition-colors duration-200"
              >
                Sign up now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
   </>
  );
};

export default Page;

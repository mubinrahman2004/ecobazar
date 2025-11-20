"use client"
import React, { useState } from "react";
import Link from "next/link";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

const Page = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://api.freeapi.app/api/v1/users/register", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(userData),
      });

      const result = await res.json();

      if (!result.success) {
        toast.error(result.message);
        return;
      }

      toast.success("Signup successful! Redirecting...");
      setTimeout(() => {
        router.push("/login");
      }, 1500);

    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <ToastContainer />

      <div className="min-h-screen flex items-center justify-center">
        <div className="w-full max-w-md mx-4">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-300">
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">
              Sign up
            </h2>
            <p className="text-gray-600 mb-6 text-center">
              Enter your credentials to create your account
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Username
                </label>
                <input
                  value={userData.username}
                  onChange={(e) =>
                    setUserData({ ...userData, username: e.target.value })
                  }
                  type="text"
                  placeholder="Enter username"
                  className="w-full px-4 py-3 border rounded-xl"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  value={userData.email}
                  onChange={(e) =>
                    setUserData({ ...userData, email: e.target.value })
                  }
                  type="email"
                  placeholder="Enter email"
                  className="w-full px-4 py-3 border rounded-xl"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  value={userData.password}
                  onChange={(e) =>
                    setUserData({ ...userData, password: e.target.value })
                  }
                  type="password"
                  placeholder="Enter password"
                  className="w-full px-4 py-3 border rounded-xl"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-500 text-white py-3 rounded-xl"
              >
                Sign Up
              </button>
            </form>

            <p className="text-center text-gray-600 mt-6">
              Already have an account?{" "}
              <Link href="/login" className="text-green-500 font-semibold">
                Sign in now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;

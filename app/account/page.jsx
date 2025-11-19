import Image from 'next/image'
import React from 'react'
import background from '../../public/background.png'
import Link from 'next/link'

const Page = () => {
  return (
    <div className="min-h-screen  ">
      {/* Background Image Section - Hidden on mobile, visible on desktop */}
    

      {/* Login Form Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center min-h-screen lg:min-h-0 py-8 lg:py-0">
        <div className="w-full max-w-md mx-4 sm:mx-6 md:mx-8 lg:mx-12 xl:mx-16">
          {/* Mobile Header */}
          <div className="lg:hidden text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h1>
            <p className="text-gray-600">Sign in to your account</p>
          </div>

          <div className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2 text-center lg:text-left">
              Sign In
            </h2>
            <p className="text-gray-600 mb-6 sm:mb-8 text-center lg:text-left">
              Enter your credentials to access your account
            </p>

            <form className="space-y-4 sm:space-y-6">
              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input 
                  type="email" 
                  id="email"
                  placeholder='Enter your email' 
                  className="w-full px-4 py-3 sm:py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                  required
                />
              </div>

              {/* Password Input */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input 
                  type="password" 
                  id="password"
                  placeholder='Enter your password' 
                  className="w-full px-4 py-3 sm:py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                  required
                />
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center text-gray-600">
                  <input type="checkbox" className="rounded border-gray-300 text-green-500 focus:ring-green-500 mr-2" />
                  Remember me
                </label>
                <Link href="/forgot-password" className="text-green-500 hover:text-green-600 transition-colors">
                  Forgot password?
                </Link>
              </div>

              {/* Login Button */}
              <button 
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white py-3 sm:py-4 px-4 rounded-2xl font-semibold text-sm sm:text-base transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                Login
              </button>
            </form>

            {/* Divider */}
            <div className="my-6 sm:my-8 flex items-center">
              <div className="flex-1 border-t border-gray-300"></div>
              <span className="px-4 text-gray-500 text-sm">Or</span>
              <div className="flex-1 border-t border-gray-300"></div>
            </div>

            {/* Social Login Buttons */}
            <div className="space-y-3">
              <button className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 text-gray-700 py-3 rounded-xl font-medium hover:bg-gray-50 transition-colors duration-200">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Continue with Google
              </button>
              
              <button className="w-full flex items-center justify-center gap-3 bg-black text-white py-3 rounded-xl font-medium hover:bg-gray-800 transition-colors duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
                Continue with Twitter
              </button>
            </div>

            {/* Sign Up Link */}
            <div className="text-center mt-6 sm:mt-8 pt-4 border-t border-gray-200">
              <p className="text-gray-600 text-sm sm:text-base">
                Don't have an account?{' '}
                <Link 
                  href="/register" 
                  className="text-green-500 hover:text-green-600 font-semibold transition-colors duration-200"
                >
                  Sign up now
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
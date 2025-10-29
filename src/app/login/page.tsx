import Image from 'next/image'

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <div className="lg:flex-1 bg-[#F7F4FD] flex items-center justify-center p-8 lg:p-12">
        <div className="w-full max-w-md flex flex-col items-center">
          <div className="w-80 h-80 lg:w-96 lg:h-96 relative mb-8">
            <Image
              src="/logo.png"
              alt=""
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-[#C4BFFF]">
        <div className="w-full max-w-md">
          
          <div className="bg-[#F7F4FD] py-8 px-6 shadow-sm border border-gray-200 rounded-lg">
             <div className="flex justify-center mb-2">
            <div className="w-20 h-20 relative">
              <Image
                src="/loginlogo.png"
                alt=""
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
            <h2 className="text-center text-xl font-semibold text-gray-900 mb-6">
              Login to your account
            </h2>
            <form className="space-y-6">
            <div>
    <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-3">
      Username or Email
    </label>
    <input
      id="username"
      name="username"
      type="text"
      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors placeholder-gray-500 text-gray-900"
      placeholder="Enter your username or email"
    />
  </div>

  {/* Password Field */}
  <div>
    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-3">
      Password
    </label>
    <input
      id="password"
      name="password"
      type="password"
      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors placeholder-gray-500 text-gray-900"
      placeholder="Enter your password"
    />
  </div>
              {/* Remember Me & Forgot Password */}
              <div>
                <button
                  type="button"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#7277F1] hover:bg-[#6368e0] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7277F1] transition-colors duration-200"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
export default function Login() {
  return (
    <div className="font-sans">
      <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100">
        <div className="relative sm:max-w-sm w-full">
          
          {/* Background decorative cards */}
          <div className="absolute inset-0">
            <div className="bg-blue-400 shadow-lg w-full h-full rounded-3xl transform -rotate-6 z-0" />
            {/* <div className="bg-red-400 shadow-lg w-full h-full rounded-3xl transform rotate-6 z-0" /> */}
          </div>

          {/* Actual login form card */}
          <div className="relative z-10 w-full rounded-3xl px-6 py-4 bg-gray-100 shadow-md">
            <h2 className="block mt-3 text-lg text-gray-700 text-center font-semibold">
              Login
            </h2>

            <form className="mt-10">
              {/* Email */}
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 p-2"
                />
              </div>

              {/* Password */}
              <div className="mt-7">
                <input
                  type="password"
                  placeholder="Password"
                  className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 p-2"
                />
              </div>

              {/* Remember me + Forgot password */}
              <div className="mt-7 flex items-center justify-between">
                <label
                  htmlFor="remember_me"
                  className="inline-flex items-center cursor-pointer"
                >
                  <input
                    id="remember_me"
                    type="checkbox"
                    className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    name="remember"
                  />
                  <span className="ml-2 text-sm text-gray-600">Remember me</span>
                </label>
                <a
                  href="#"
                  className="underline text-sm text-gray-600 hover:text-gray-900"
                >
                  Forgot your password?
                </a>
              </div>

              {/* Login button */}
              <div className="mt-7">
                <button className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105">
                  Login
                </button>
              </div>

              {/* Divider */}
              <div className="flex mt-7 items-center text-center">
                <hr className="border-gray-300 border-1 w-full rounded-md" />
                <span className="block font-medium text-sm text-gray-600 w-full">
                  Login with
                </span>
                <hr className="border-gray-300 border-1 w-full rounded-md" />
              </div>

              {/* Social buttons */}
              <div className="flex mt-7 justify-center w-full">
                <button className="mr-5 bg-blue-500 px-4 py-2 rounded-xl text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105">
                  Facebook
                </button>
                <button className="bg-red-500 px-4 py-2 rounded-xl text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105">
                  Google
                </button>
              </div>

              {/* Signup link */}
              <div className="mt-7 text-center">
                <span className="text-gray-700 mr-2">New here ?</span>
                <a
                  href="#"
                  className="text-blue-500 font-semibold transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105"
                >
                  Create new account
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

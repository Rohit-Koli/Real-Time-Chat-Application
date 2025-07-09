import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-2xl font-bold gradient-text">TalkEase</span>
              </div>
            </div>
            <div className="hidden md:ml-6 md:flex md:items-center md:space-x-8">
              <a
                href="#"
                className="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium"
              >
                Features
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium"
              >
                Pricing
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium"
              >
                Support
              </a>
              <a
                href="#"
                className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition"
              >
                Sign In
              </a>
            </div>
            <div className="flex items-center md:hidden mr-2">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

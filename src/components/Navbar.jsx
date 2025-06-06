import React from "react";

export const Navbar = () => {
  return (
    <nav className="bg-white shadow-md font-sans">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Left side - Logo */}
          <div className="flex-shrink-0">
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/color/48/mosque.png"
              alt="mosque logo"
              className="h-8 w-auto"
            />
          </div>

          {/* Middle section - Search and Notifications */}
          <div className="flex-1 flex items-center justify-center px-4">
            <div className="w-full max-w-lg flex items-center space-x-4">
              {/* Search Bar */}
              <div className="flex-1">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 placeholder-gray-400"
                  />
                  <button className="absolute right-3 top-2.5">
                    <svg
                      className="h-5 w-5 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Notifications Button */}
              <button className="p-2 rounded-full hover:bg-gray-100 relative">
                <svg
                  className="h-6 w-6 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500"></span>
              </button>
            </div>
          </div>

          {/* Right side - Account */}
          <div className="flex items-center space-x-4">
            <span className="text-gray-800 font-medium">John Doe</span>
            <button className="flex items-center space-x-2 p-2 rounded-full hover:bg-gray-100">
              <img
                src="https://ui-avatars.com/api/?name=John+Doe"
                alt="Profile"
                className="h-8 w-8 rounded-full"
              />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

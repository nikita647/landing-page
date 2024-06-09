import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="my-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <img className="h-8 w-auto" src="logo.png" alt="Logo" />
            </div>
            <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
              <Link
                to="/"
                className="text-[#FF5555] inline-flex items-center px-1 pt-1 text-lg font-bold"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-900 inline-flex items-center px-1 pt-1 text-lg font-bold"
              >
                About Us
              </Link>
              <Link
                to="/pricing"
                className="text-gray-900 inline-flex items-center px-1 pt-1 text-lg font-bold"
              >
                Pricing
              </Link>
              <Link
                to="/features"
                className="text-gray-900 inline-flex items-center px-1 pt-1 text-lg font-bold"
              >
                Features
              </Link>
            </div>
          </div>

          <div className="items-center hidden sm:flex">
            <button className="bg-black text-white px-8 py-3 rounded text-lg">
              Download
            </button>
          </div>

          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
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
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="text-[#FF5555] block px-3 py-2 rounded-md text-base font-medium"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
              >
                About Us
              </Link>
              <Link
                to="/pricing"
                className="text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
              >
                Pricing
              </Link>
              <Link
                to="/features"
                className="text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
              >
                Features
              </Link>
              <button className="bg-black text-white block w-full text-left px-3 py-2 rounded-md text-base font-medium">
                Download
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

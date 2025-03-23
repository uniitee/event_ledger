"use client";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  const [isClick, setIsClick] = React.useState(false);
  const toggleNavbar = () => setIsClick(!isClick);

  return (
    <nav className=" bg-transparent shadow-lg p-2">
      <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-10 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="flex items-center gap-6">
            <Image
              src="/Images/mlsc_Logo.png"
              alt="logo"
              width={75}
              height={75}
              className="object-contain"
            />
            <div className="hidden md:flex text-lg font-medium text-white hover:text-blue-300">
              Azure Student Chapter
            </div>
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a
            className="text-white text-lg font-medium hover:text-blue-300 transition duration-200"
            href="/"
          >
            Home
          </a>
          <a
            className="text-white text-lg font-medium hover:text-blue-300 transition duration-200"
            href="#events"
            onClick={(e) => {
              e.preventDefault(); // Prevent default link behavior
              document
                .getElementById("events")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Events
          </a>
          <a
            className="text-white text-lg font-medium hover:text-blue-300 transition duration-200"
            href="#footers"
            onClick={(e) => {
              e.preventDefault(); // Prevent default link behavior
              document
                .getElementById("events")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="p-2 rounded-md text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
            onClick={toggleNavbar}
          >
            {isClick ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isClick && (
        <div className="md:hidden bg-zinc-800 py-3 px-6">
          <a
            className="block text-white py-2 hover:text-blue-300 transition duration-200"
            href="/"
          >
            Home
          </a>
          <a
            className="block text-white py-2 hover:text-blue-300 transition duration-200"
            href="#events"
          >
            Events
          </a>
          <a
            className="block text-white py-2 hover:text-blue-300 transition duration-200"
            href="#footers"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

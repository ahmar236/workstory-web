'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="bg-[#f7f7f7] fixed w-full z-20 top-0 start-0 border-b border-[#f7f7f7]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-10 lg:px-24 p-6">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image 
            src="/images/Logo-1.png" 
            className="h-9" 
            alt="Work Story Logo" 
            width={50} 
            height={36} 
          />
          <Image 
            src="/images/logoname.png" 
            className="h-9" 
            alt="Work Story Name" 
            width={170} 
            height={36} 
          />
        </Link>
        <div className="flex md:order-1 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            onClick={toggleMenu}
            aria-controls="navbar-sticky"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:align-middle md:order-1 ${isOpen ? 'block' : 'hidden'}`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col justify-center align-middle p-4 md:p-0 mt-4 font-medium rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 text-lg">
            <li>
              <Link href="/pricing">
                <p className="block py-2 px-3 md:p-0 mt-2" aria-current="page">
                  Pricing
                </p>
              </Link>
            </li>
            <li>
              <Link href="/support">
                <p className="block py-2 px-3 md:p-0 mt-2" aria-current="page">
                  Support
                </p>
              </Link>
            </li>
            <li>
              <Link href="/portfolio">
                <button
                  type="button"
                  className="text-white bg-[#8cc63f] focus:ring-4 focus:outline-none focus:ring-[#bbcca3] font-medium rounded-full text-lg px-7 py-1 text-center border-white border-double border-4"
                >
                  Login
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

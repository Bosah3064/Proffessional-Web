
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-white via-pink-50 to-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto container-responsive">
        <div className="flex justify-between items-center py-3 sm:py-4">
          <Link href="/" className="flex items-center cursor-pointer">
            <div className="flex items-center">
              <img
                src="https://static.readdy.ai/image/21c9d24faf4d967a452d8e5f183364c9/bed78318047bbca6ec34b0e5cedafb87.jfif"
                alt="IMEKA CONSULT LTD Logo"
                className="h-10 sm:h-12 w-auto mr-2 sm:mr-3"
              />
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-green-600 via-blue-600 to-pink-600 bg-clip-text text-transparent" style={{fontFamily: 'Times New Roman, Times, serif'}}>
                  IMEKA CONSULT LTD
                </span>
                <span className="text-xs sm:text-sm text-gray-600 -mt-1" style={{fontFamily: 'Times New Roman, Times, serif'}}>
                  CORPORATION
                </span>
              </div>
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <Link href="/" className="text-gray-700 hover:text-green-600 transition-colors cursor-pointer text-sm lg:text-base font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer text-sm lg:text-base font-medium">
              About
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-pink-600 transition-colors cursor-pointer text-sm lg:text-base font-medium">
              Services
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-red-600 transition-colors cursor-pointer text-sm lg:text-base font-medium">
              Blog
            </Link>
            <Link href="/portfolio" className="text-gray-700 hover:text-green-600 transition-colors cursor-pointer text-sm lg:text-base font-medium">
              Portfolio
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer text-sm lg:text-base font-medium">
              Contact
            </Link>
            <Link href="/contact" className="bg-gradient-to-r from-green-600 via-blue-600 to-pink-600 text-white px-4 lg:px-6 py-2 rounded-full hover:from-green-700 hover:via-blue-700 hover:to-pink-700 transition-colors cursor-pointer whitespace-nowrap text-sm lg:text-base font-medium">
              Get Started
            </Link>
          </nav>

          <button
            className="md:hidden w-8 h-8 flex items-center justify-center cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-xl sm:text-2xl text-pink-600`}></i>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t mobile-center">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-green-600 transition-colors cursor-pointer font-medium" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer font-medium" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-pink-600 transition-colors cursor-pointer font-medium" onClick={() => setIsMenuOpen(false)}>
                Services
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-red-600 transition-colors cursor-pointer font-medium" onClick={() => setIsMenuOpen(false)}>
                Blog
              </Link>
              <Link href="/portfolio" className="text-gray-700 hover:text-green-600 transition-colors cursor-pointer font-medium" onClick={() => setIsMenuOpen(false)}>
                Portfolio
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer font-medium" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
              <Link href="/contact" className="bg-gradient-to-r from-green-600 via-blue-600 to-pink-600 text-white px-6 py-2 rounded-full hover:from-green-700 hover:via-blue-700 hover:to-pink-700 transition-colors cursor-pointer whitespace-nowrap inline-block text-center font-medium mx-4" onClick={() => setIsMenuOpen(false)}>
                Get Started
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}


'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-green-900 text-white">
      <div className="max-w-7xl mx-auto container-responsive py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <div className="col-span-1 lg:col-span-2 mobile-center sm:text-left">
            <Link href="/" className="flex items-center mb-4 cursor-pointer justify-center sm:justify-start">
              <div className="flex items-center">
                <img
                  src="https://static.readdy.ai/image/21c9d24faf4d967a452d8e5f183364c9/bed78318047bbca6ec34b0e5cedafb87.jfif"
                  alt="IMEKA CONSULT LTD Logo"
                  className="h-8 sm:h-10 w-auto mr-2 sm:mr-3"
                />
                <div className="flex flex-col">
                  <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-green-400 via-blue-400 to-pink-400 bg-clip-text text-transparent" style={{fontFamily: 'Times New Roman, Times, serif'}}>
                    IMEKA CONSULT LTD
                  </span>
                  <span className="text-xs sm:text-sm text-gray-300 -mt-1" style={{fontFamily: 'Times New Roman, Times, serif'}}>
                    CORPORATION
                  </span>
                </div>
              </div>
            </Link>
            <p className="text-gray-300 mb-6 max-w-md text-sm sm:text-base">
              Empowering businesses with strategic consulting solutions. We help organizations transform challenges into opportunities and achieve sustainable growth.
            </p>
            <div className="flex space-x-4 justify-center sm:justify-start">
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-gradient-to-br from-blue-600 to-green-600 rounded-full hover:from-blue-700 hover:to-green-700 transition-colors cursor-pointer">
                <i className="ri-facebook-fill text-white text-sm sm:text-base"></i>
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-gradient-to-br from-pink-600 to-red-600 rounded-full hover:from-pink-700 hover:to-red-700 transition-colors cursor-pointer">
                <i className="ri-twitter-fill text-white text-sm sm:text-base"></i>
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-gradient-to-br from-green-600 to-blue-600 rounded-full hover:from-green-700 hover:to-blue-700 transition-colors cursor-pointer">
                <i className="ri-linkedin-fill text-white text-sm sm:text-base"></i>
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-gradient-to-br from-red-600 to-pink-600 rounded-full hover:from-red-700 hover:to-pink-700 transition-colors cursor-pointer">
                <i className="ri-instagram-fill text-white text-sm sm:text-base"></i>
              </Link>
            </div>
          </div>

          <div className="mobile-center sm:text-left">
            <h4 className="text-base sm:text-lg font-semibold mb-4 text-green-300">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer text-sm sm:text-base">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-pink-400 transition-colors cursor-pointer text-sm sm:text-base">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-300 hover:text-green-400 transition-colors cursor-pointer text-sm sm:text-base">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-red-400 transition-colors cursor-pointer text-sm sm:text-base">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer text-sm sm:text-base">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="mobile-center sm:text-left">
            <h4 className="text-base sm:text-lg font-semibold mb-4 text-pink-300">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-gray-300 hover:text-green-400 transition-colors cursor-pointer text-sm sm:text-base">
                  Business Strategy
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer text-sm sm:text-base">
                  Digital Transformation
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-pink-400 transition-colors cursor-pointer text-sm sm:text-base">
                  Process Optimization
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-red-400 transition-colors cursor-pointer text-sm sm:text-base">
                  Change Management
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-6 sm:mt-8 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center mobile-center">
            <p className="text-gray-400 text-xs sm:text-sm mb-4 md:mb-0">
              © 2024 IMEKA CONSULT LTD CORPORATION. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center space-x-4 sm:space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-green-400 text-xs sm:text-sm transition-colors cursor-pointer">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-blue-400 text-xs sm:text-sm transition-colors cursor-pointer">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-pink-400 text-xs sm:text-sm transition-colors cursor-pointer">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

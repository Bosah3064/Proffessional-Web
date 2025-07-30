
'use client';

import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20business%20consulting%20office%20environment%20with%20professional%20team%20meeting%20in%20glass%20conference%20room%2C%20contemporary%20architecture%20with%20natural%20lighting%2C%20people%20in%20business%20attire%20collaborating%20around%20table%20with%20documents%20and%20laptops%2C%20sophisticated%20interior%20design%20with%20clean%20lines%20and%20corporate%20atmosphere%2C%20green%20blue%20pink%20white%20red%20color%20scheme%2C%20vibrant%20professional%20photography%20style&width=1920&height=1080&seq=hero1colorful&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/70 via-blue-900/60 to-pink-900/70"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto container-responsive text-center">
        <h1 className="hero-responsive font-bold text-white mb-4 sm:mb-6" style={{fontFamily: 'Times New Roman, Times, serif'}}>
          Transform Your
          <span className="text-pink-300 block">Business Future</span>
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl text-gray-100 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed" style={{fontFamily: 'Times New Roman, Times, serif'}}>
          Expert consulting services to drive growth, optimize operations, and unlock your organization's full potential in today's competitive marketplace.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 sm:mb-16">
          <Link href="/contact" className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-colors cursor-pointer whitespace-nowrap">
            Start Your Transformation
          </Link>
          <Link href="/services" className="border-2 border-pink-300 text-pink-300 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-pink-300 hover:text-white transition-colors cursor-pointer whitespace-nowrap">
            Explore Our Services
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-16">
          <div className="text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-trophy-line text-xl sm:text-2xl text-white"></i>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2" style={{fontFamily: 'Times New Roman, Times, serif'}}>500+</h3>
            <p className="text-gray-200 text-sm sm:text-base" style={{fontFamily: 'Times New Roman, Times, serif'}}>Successful Projects</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-team-line text-xl sm:text-2xl text-white"></i>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2" style={{fontFamily: 'Times New Roman, Times, serif'}}>200+</h3>
            <p className="text-gray-200 text-sm sm:text-base" style={{fontFamily: 'Times New Roman, Times, serif'}}>Happy Clients</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-global-line text-xl sm:text-2xl text-white"></i>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2" style={{fontFamily: 'Times New Roman, Times, serif'}}>15+</h3>
            <p className="text-gray-200 text-sm sm:text-base" style={{fontFamily: 'Times New Roman, Times, serif'}}>Years Experience</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <i className="ri-arrow-down-line text-2xl sm:text-3xl text-pink-300"></i>
        </div>
      </div>
    </section>
  );
}

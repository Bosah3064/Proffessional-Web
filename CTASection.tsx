
'use client';

import Link from 'next/link';

export default function CTASection() {
  return (
    <section 
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20business%20meeting%20room%20with%20floor-to-ceiling%20windows%20overlooking%20city%20skyline%2C%20professional%20conference%20table%20with%20executive%20chairs%2C%20contemporary%20corporate%20interior%20design%20with%20natural%20lighting%20and%20urban%20view%2C%20sophisticated%20business%20environment%20with%20green%20blue%20pink%20white%20red%20color%20accents%2C%20vibrant%20professional%20atmosphere&width=1200&height=600&seq=ctacolorful&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/70 via-blue-900/60 to-pink-900/70"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Transform Your Business?
        </h2>
        <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
          Let's discuss how our consulting expertise can help you achieve your goals and drive sustainable growth.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-green-600 hover:to-blue-600 transition-colors cursor-pointer whitespace-nowrap">
            Schedule Free Consultation
          </Link>
          <Link href="/portfolio" className="border-2 border-pink-300 text-pink-300 px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-300 hover:text-white transition-colors cursor-pointer whitespace-nowrap">
            View Our Work
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center">
          <div>
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-phone-line text-2xl text-white"></i>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
            <p className="text-gray-200">+1 (555) 123-4567</p>
          </div>
          
          <div>
            <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-mail-line text-2xl text-white"></i>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
            <p className="text-gray-200">contact@imekaconsult.com</p>
          </div>
          
          <div>
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-map-pin-line text-2xl text-white"></i>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
            <p className="text-gray-200">New York, NY 10001</p>
          </div>
        </div>
      </div>
    </section>
  );
}

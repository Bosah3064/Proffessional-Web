
'use client';

import Link from 'next/link';

export default function AboutSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-green-600 to-pink-600 bg-clip-text text-transparent mb-6">
              Why Choose IMEKA CONSULT?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              With over 15 years of experience in strategic consulting, we've helped hundreds of organizations across industries achieve their goals and overcome their most complex challenges.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mr-4 mt-1">
                  <i className="ri-check-line text-white"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Methodology</h3>
                  <p className="text-gray-600">Our time-tested approach combines industry best practices with innovative solutions.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-red-500 rounded-full flex items-center justify-center mr-4 mt-1">
                  <i className="ri-check-line text-white"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Team</h3>
                  <p className="text-gray-600">Work with seasoned consultants who understand your industry inside and out.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mr-4 mt-1">
                  <i className="ri-check-line text-white"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Measurable Results</h3>
                  <p className="text-gray-600">We focus on delivering tangible outcomes that drive real business value.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <Link href="/about" className="bg-gradient-to-r from-pink-600 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-pink-700 hover:to-blue-700 transition-colors cursor-pointer whitespace-nowrap">
                Learn More About Us
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://readdy.ai/api/search-image?query=Professional%20business%20consulting%20team%20in%20modern%20office%20environment%20with%20colorful%20accents%2C%20diverse%20group%20of%20consultants%20collaborating%20around%20conference%20table%20with%20laptops%20and%20documents%2C%20contemporary%20workspace%20with%20glass%20walls%20and%20natural%20lighting%2C%20green%20blue%20pink%20white%20red%20color%20elements%2C%20vibrant%20business%20strategy%20meeting%20atmosphere&width=600&height=500&seq=aboutcolorful&orientation=landscape"
              alt="IMEKA CONSULT Team"
              className="rounded-2xl shadow-2xl object-cover object-top"
            />
            
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-6 border-l-4 border-gradient-to-b from-green-500 to-pink-500">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-pink-600 rounded-full flex items-center justify-center mr-4">
                  <i className="ri-award-line text-white text-xl"></i>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">Award Winning</h4>
                  <p className="text-gray-600">Consulting Excellence 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

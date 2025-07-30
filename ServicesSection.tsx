
'use client';

import Link from 'next/link';

export default function ServicesSection() {
  const services = [
    {
      icon: 'ri-lightbulb-line',
      title: 'Business Strategy',
      description: 'Develop comprehensive strategies that align with your vision and drive sustainable growth.',
      color: 'from-green-500 to-blue-500',
      hoverColor: 'hover:from-green-600 hover:to-blue-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: 'ri-smartphone-line',
      title: 'Digital Transformation',
      description: 'Modernize your operations with cutting-edge technology solutions and digital processes.',
      color: 'from-blue-500 to-pink-500',
      hoverColor: 'hover:from-blue-600 hover:to-pink-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: 'ri-settings-3-line',
      title: 'Process Optimization',
      description: 'Streamline workflows and eliminate inefficiencies to maximize productivity.',
      color: 'from-pink-500 to-red-500',
      hoverColor: 'hover:from-pink-600 hover:to-red-600',
      bgColor: 'bg-pink-50'
    },
    {
      icon: 'ri-team-line',
      title: 'Change Management',
      description: 'Guide your organization through transformational changes with proven methodologies.',
      color: 'from-red-500 to-green-500',
      hoverColor: 'hover:from-red-600 hover:to-green-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: 'ri-bar-chart-line',
      title: 'Performance Analytics',
      description: 'Leverage data-driven insights to make informed decisions and track success metrics.',
      color: 'from-green-500 to-pink-500',
      hoverColor: 'hover:from-green-600 hover:to-pink-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: 'ri-customer-service-2-line',
      title: 'Customer Experience',
      description: 'Design exceptional customer journeys that build loyalty and drive business growth.',
      color: 'from-blue-500 to-red-500',
      hoverColor: 'hover:from-blue-600 hover:to-red-600',
      bgColor: 'bg-blue-50'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white via-green-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 via-blue-600 to-pink-600 bg-clip-text text-transparent mb-6">
            Our Consulting Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive consulting solutions to help your business thrive in today's dynamic marketplace. Our expert team delivers results that matter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className={`${service.bgColor} rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer border border-white/50`}>
              <div className={`w-16 h-16 bg-gradient-to-br ${service.color} ${service.hoverColor} rounded-xl flex items-center justify-center mb-6 transition-all duration-300`}>
                <i className={`${service.icon} text-2xl text-white`}></i>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <Link href="/services" className={`inline-flex items-center text-transparent bg-gradient-to-r ${service.color} bg-clip-text font-semibold hover:underline cursor-pointer`}>
                Learn More
                <i className="ri-arrow-right-line ml-2"></i>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/services" className="bg-gradient-to-r from-green-600 via-blue-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-green-700 hover:via-blue-700 hover:to-pink-700 transition-colors cursor-pointer whitespace-nowrap">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}

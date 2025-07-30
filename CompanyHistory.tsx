
'use client';

export default function CompanyHistory() {
  const milestones = [
    {
      year: '2009',
      title: 'Company Founded',
      description: 'AkemiConsult was established with a vision to transform businesses through strategic consulting.'
    },
    {
      year: '2012',
      title: 'First Major Client',
      description: 'Successfully completed our first Fortune 500 digital transformation project.'
    },
    {
      year: '2015',
      title: 'International Expansion',
      description: 'Expanded operations to serve clients across North America and Europe.'
    },
    {
      year: '2018',
      title: 'Award Recognition',
      description: 'Received "Consulting Firm of the Year" award from Industry Excellence Council.'
    },
    {
      year: '2021',
      title: 'Digital Innovation',
      description: 'Launched our proprietary digital transformation methodology and tools.'
    },
    {
      year: '2024',
      title: 'Continued Growth',
      description: 'Celebrating 15 years of excellence with over 500 successful projects completed.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From humble beginnings to industry leadership - here's how AkemiConsult has evolved over the years.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
          
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <div className="text-3xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
                
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <i className="ri-check-line text-white text-xl"></i>
                  </div>
                </div>
                
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


'use client';

export default function ValuesSection() {
  const values = [
    {
      icon: 'ri-lightbulb-line',
      title: 'Innovation',
      description: 'We constantly seek creative solutions and embrace new technologies to solve complex business challenges.'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Integrity',
      description: 'We maintain the highest ethical standards in all our interactions and deliver on our commitments.'
    },
    {
      icon: 'ri-team-line',
      title: 'Collaboration',
      description: 'We work closely with our clients as partners, combining our expertise with their industry knowledge.'
    },
    {
      icon: 'ri-trophy-line',
      title: 'Excellence',
      description: 'We strive for exceptional results in every project, exceeding client expectations consistently.'
    },
    {
      icon: 'ri-customer-service-line',
      title: 'Client-Centric',
      description: 'Our clients\' success is our success. We tailor our approach to meet each client\'s unique needs.'
    },
    {
      icon: 'ri-rocket-line',
      title: 'Growth Mindset',
      description: 'We continuously learn and adapt, staying ahead of industry trends and best practices.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Core Values
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These fundamental principles guide everything we do and define our commitment to clients and excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <i className={`${value.icon} text-2xl text-blue-600`}></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

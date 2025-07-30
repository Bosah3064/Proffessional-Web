
'use client';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'CEO, TechCorp',
      image: 'https://readdy.ai/api/search-image?query=Professional%20businesswoman%20CEO%20in%20modern%20office%20setting%2C%20confident%20female%20executive%20in%20business%20suit%20with%20warm%20smile%2C%20corporate%20headshot%20with%20clean%20background%20and%20professional%20lighting&width=100&height=100&seq=testimonial1&orientation=squarish',
      content: 'AkemiConsult transformed our business processes completely. Their strategic approach increased our efficiency by 40% within six months.',
      rating: 5,
      color: 'from-green-500 to-blue-500'
    },
    {
      name: 'Michael Chen',
      position: 'COO, Global Industries',
      image: 'https://readdy.ai/api/search-image?query=Asian%20male%20business%20executive%20in%20professional%20attire%2C%20confident%20COO%20with%20friendly%20expression%20in%20modern%20corporate%20environment%2C%20business%20headshot%20with%20clean%20background%20and%20natural%20lighting&width=100&height=100&seq=testimonial2&orientation=squarish',
      content: 'The digital transformation project exceeded all expectations. Revenue increased by 60% post-implementation.',
      rating: 5,
      color: 'from-pink-500 to-red-500'
    },
    {
      name: 'Emily Rodriguez',
      position: 'Director, HealthFirst',
      image: 'https://readdy.ai/api/search-image?query=Hispanic%20female%20healthcare%20director%20in%20professional%20business%20attire%2C%20confident%20woman%20with%20warm%20smile%20in%20medical%20industry%20setting%2C%20corporate%20headshot%20with%20clean%20background%20and%20professional%20lighting&width=100&height=100&seq=testimonial3&orientation=squarish',
      content: 'Outstanding expertise in change management. They guided us through a complex merger seamlessly.',
      rating: 5,
      color: 'from-blue-500 to-green-500'
    },
    {
      name: 'David Thompson',
      position: 'Founder, StartupX',
      image: 'https://readdy.ai/api/search-image?query=Young%20male%20entrepreneur%20founder%20in%20casual%20business%20attire%2C%20confident%20startup%20leader%20with%20friendly%20expression%20in%20modern%20office%20environment%2C%20professional%20headshot%20with%20clean%20background&width=100&height=100&seq=testimonial4&orientation=squarish',
      content: 'Their business strategy consultation was instrumental in our successful Series A funding round.',
      rating: 5,
      color: 'from-red-500 to-pink-500'
    },
    {
      name: 'Lisa Wang',
      position: 'VP Operations, RetailPlus',
      image: 'https://readdy.ai/api/search-image?query=Asian%20female%20VP%20in%20professional%20business%20suit%2C%20confident%20operations%20executive%20with%20warm%20smile%20in%20retail%20corporate%20environment%2C%20business%20headshot%20with%20clean%20background%20and%20professional%20lighting&width=100&height=100&seq=testimonial5&orientation=squarish',
      content: 'Process optimization results were remarkable - 35% cost reduction and improved customer satisfaction.',
      rating: 5,
      color: 'from-green-500 to-pink-500'
    },
    {
      name: 'Robert Martinez',
      position: 'CTO, FinanceFlow',
      image: 'https://readdy.ai/api/search-image?query=Hispanic%20male%20CTO%20in%20professional%20attire%2C%20confident%20technology%20executive%20with%20friendly%20expression%20in%20modern%20fintech%20office%20environment%2C%20corporate%20headshot%20with%20clean%20background&width=100&height=100&seq=testimonial6&orientation=squarish',
      content: 'Performance analytics implementation delivered insights that transformed our decision-making process.',
      rating: 5,
      color: 'from-blue-500 to-red-500'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 via-blue-600 to-green-600 bg-clip-text text-transparent mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what industry leaders say about working with AkemiConsult.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-transparent hover:border-gradient-to-r hover:from-green-300 hover:to-pink-300">
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4 ring-4 ring-white shadow-lg"
                />
                <div>
                  <h4 className="text-lg font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.position}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <i key={i} className="ri-star-fill text-yellow-400 text-lg"></i>
                ))}
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                "{testimonial.content}"
              </p>
              
              <div className={`h-1 bg-gradient-to-r ${testimonial.color} rounded-full`}></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-green-100 to-pink-100 px-6 py-3 rounded-full">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <i key={i} className="ri-star-fill text-yellow-400 text-lg"></i>
              ))}
            </div>
            <span className="text-gray-800 font-semibold ml-2">4.9/5.0 Average Rating</span>
          </div>
        </div>
      </div>
    </section>
  );
}

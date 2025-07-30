
'use client';

export default function TeamSection() {
  const team = [
    {
      name: 'Akemi Nakamura',
      position: 'Founder & CEO',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Asian%20businesswoman%20CEO%20in%20elegant%20business%20suit%2C%20confident%20female%20executive%20with%20warm%20smile%20in%20modern%20office%20setting%2C%20corporate%20leadership%20portrait%20with%20clean%20background%20and%20professional%20lighting&width=300&height=400&seq=team1&orientation=portrait',
      bio: 'With over 20 years in strategic consulting, Akemi founded AkemiConsult to help businesses achieve transformational growth.',
      linkedin: '#'
    },
    {
      name: 'Marcus Thompson',
      position: 'Senior Partner, Strategy',
      image: 'https://readdy.ai/api/search-image?query=Professional%20African%20American%20male%20business%20partner%20in%20sophisticated%20suit%2C%20confident%20senior%20executive%20with%20friendly%20expression%20in%20corporate%20environment%2C%20leadership%20portrait%20with%20clean%20background&width=300&height=400&seq=team2&orientation=portrait',
      bio: 'Marcus specializes in business strategy and has led over 100 successful transformation projects across various industries.',
      linkedin: '#'
    },
    {
      name: 'Elena Rodriguez',
      position: 'Director, Digital Innovation',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Hispanic%20businesswoman%20in%20modern%20business%20attire%2C%20confident%20female%20director%20with%20warm%20smile%20in%20technology-focused%20office%20environment%2C%20corporate%20portrait%20with%20clean%20background&width=300&height=400&seq=team3&orientation=portrait',
      bio: 'Elena drives digital transformation initiatives and helps clients leverage technology for competitive advantage.',
      linkedin: '#'
    },
    {
      name: 'James Chen',
      position: 'Senior Consultant, Operations',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Asian%20male%20business%20consultant%20in%20sharp%20business%20suit%2C%20confident%20senior%20consultant%20with%20friendly%20expression%20in%20modern%20corporate%20office%2C%20professional%20portrait%20with%20clean%20background&width=300&height=400&seq=team4&orientation=portrait',
      bio: 'James focuses on operational excellence and process optimization, delivering measurable efficiency improvements.',
      linkedin: '#'
    },
    {
      name: 'Sarah Williams',
      position: 'Principal, Change Management',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Caucasian%20businesswoman%20in%20elegant%20professional%20attire%2C%20confident%20female%20principal%20with%20warm%20smile%20in%20contemporary%20office%20setting%2C%20corporate%20leadership%20portrait%20with%20clean%20background&width=300&height=400&seq=team5&orientation=portrait',
      bio: 'Sarah specializes in organizational change and has successfully guided companies through complex transformations.',
      linkedin: '#'
    },
    {
      name: 'David Kumar',
      position: 'Senior Analyst, Data Strategy',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Indian%20male%20business%20analyst%20in%20modern%20business%20attire%2C%20confident%20senior%20analyst%20with%20friendly%20expression%20in%20data-driven%20corporate%20environment%2C%20professional%20portrait%20with%20clean%20background&width=300&height=400&seq=team6&orientation=portrait',
      bio: 'David helps organizations harness the power of data analytics to make informed strategic decisions.',
      linkedin: '#'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Our Expert Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our diverse team of seasoned professionals brings decades of combined experience across industries and disciplines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-80 object-cover object-top"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-4">{member.position}</p>
                <p className="text-gray-600 mb-4">{member.bio}</p>
                <a
                  href={member.linkedin}
                  className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer"
                >
                  <i className="ri-linkedin-fill text-white"></i>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Our Team</h3>
            <p className="text-gray-600 mb-6">
              We're always looking for talented professionals to join our growing team.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap">
              View Open Positions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

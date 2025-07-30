
'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

interface BlogDetailProps {
  blogId: string;
}

export default function BlogDetail({ blogId }: BlogDetailProps) {
  const blogPosts = [
    {
      id: '1',
      title: 'Digital Transformation: A Strategic Imperative for Modern Businesses',
      author: 'Sarah Johnson',
      date: 'March 15, 2024',
      readTime: '8 min read',
      category: 'Digital Strategy',
      image: 'https://readdy.ai/api/search-image?query=Digital%20transformation%20concept%20with%20modern%20technology%20interface%20showing%20interconnected%20business%20systems%2C%20holographic%20displays%20with%20data%20analytics%2C%20futuristic%20office%20environment%20with%20digital%20screens%20and%20cloud%20connectivity%20networks%2C%20blue%20and%20white%20technology%20theme%2C%20professional%20business%20setting&width=800&height=400&seq=blog1detail&orientation=landscape',
      content: `
        <div style="font-family: 'Times New Roman', Times, serif; line-height: 1.8; color: #374151;">
          <p style="margin-bottom: 24px; font-size: 18px;">In today's rapidly evolving business landscape, digital transformation has become more than just a buzzword—it's a critical strategy for survival and growth. Organizations that embrace digital transformation are not only improving their operational efficiency but also creating new revenue streams and enhancing customer experiences.</p>

          <h2 style="font-size: 28px; font-weight: bold; margin: 32px 0 24px 0; color: #1f2937;">Understanding Digital Transformation</h2>
          <p style="margin-bottom: 24px;">Digital transformation is the integration of digital technology into all areas of a business, fundamentally changing how organizations operate and deliver value to customers. It's also a cultural change that requires organizations to continually challenge the status quo, experiment, and become comfortable with failure.</p>

          <h3 style="font-size: 24px; font-weight: 600; margin: 28px 0 20px 0; color: #374151;">Key Components of Digital Transformation</h3>
          <ul style="margin-bottom: 24px; padding-left: 24px;">
            <li style="margin-bottom: 12px;"><strong>Technology Infrastructure:</strong> Cloud computing, data analytics, and automation platforms</li>
            <li style="margin-bottom: 12px;"><strong>Process Optimization:</strong> Streamlining workflows and eliminating inefficiencies</li>
            <li style="margin-bottom: 12px;"><strong>Cultural Change:</strong> Fostering innovation and digital-first mindset</li>
            <li style="margin-bottom: 12px;"><strong>Customer Experience:</strong> Enhancing touchpoints and personalization</li>
          </ul>

          <h2 style="font-size: 28px; font-weight: bold; margin: 32px 0 24px 0; color: #1f2937;">The Business Impact</h2>
          <p style="margin-bottom: 24px;">Companies that successfully implement digital transformation strategies see significant improvements in multiple areas. Research shows that digitally mature organizations are 23% more profitable than their less digitally mature peers.</p>

          <h3 style="font-size: 24px; font-weight: 600; margin: 28px 0 20px 0; color: #374151;">Implementation Strategy</h3>
          <p style="margin-bottom: 24px;">A successful digital transformation requires a comprehensive strategy that addresses technology, people, and processes. Organizations must start with a clear vision of their digital future and work backwards to create a roadmap for transformation.</p>

          <blockquote style="border-left: 4px solid #3b82f6; padding-left: 24px; margin: 32px 0; font-style: italic; color: #6b7280; font-size: 18px;">
            "Digital transformation is not about technology—it's about strategy and new ways of thinking. Technology is just an enabler."
          </blockquote>

          <p style="margin-bottom: 24px;">The journey requires strong leadership commitment, employee engagement, and a willingness to invest in both technology and talent development. Organizations that approach digital transformation holistically are more likely to achieve lasting success.</p>
        </div>
      `
    },
    {
      id: '2',
      title: 'Data-Driven Decision Making: Transforming Business Analytics',
      author: 'Michael Chen',
      date: 'March 12, 2024',
      readTime: '6 min read',
      category: 'Business Analytics',
      image: 'https://readdy.ai/api/search-image?query=Business%20analytics%20dashboard%20with%20colorful%20charts%20graphs%20and%20data%20visualizations%20on%20multiple%20computer%20monitors%2C%20modern%20data%20center%20with%20business%20intelligence%20displays%20showing%20key%20performance%20metrics%20trends%2C%20professional%20analyst%20working%20with%20advanced%20analytics%20tools&width=800&height=400&seq=blog2detail&orientation=landscape',
      content: `
        <div style="font-family: 'Times New Roman', Times, serif; line-height: 1.8; color: #374151;">
          <p style="margin-bottom: 24px; font-size: 18px;">In the age of big data, organizations that harness the power of analytics gain a significant competitive advantage. Data-driven decision making has evolved from a nice-to-have capability to an essential business function that drives growth, efficiency, and innovation.</p>

          <h2 style="font-size: 28px; font-weight: bold; margin: 32px 0 24px 0; color: #1f2937;">The Analytics Revolution</h2>
          <p style="margin-bottom: 24px;">Modern businesses generate vast amounts of data from various sources including customer interactions, operational processes, market trends, and social media. The challenge lies not in collecting data, but in transforming it into actionable insights that drive business value.</p>

          <h3 style="font-size: 24px; font-weight: 600; margin: 28px 0 20px 0; color: #374151;">Building an Analytics-Driven Culture</h3>
          <p style="margin-bottom: 24px;">Creating a data-driven organization requires more than just implementing analytics tools. It demands a cultural shift where decisions are based on evidence rather than intuition, and where data literacy becomes a core competency across all levels of the organization.</p>

          <ul style="margin-bottom: 24px; padding-left: 24px;">
            <li style="margin-bottom: 12px;"><strong>Data Governance:</strong> Establishing policies and procedures for data quality and security</li>
            <li style="margin-bottom: 12px;"><strong>Analytics Infrastructure:</strong> Implementing robust data platforms and visualization tools</li>
            <li style="margin-bottom: 12px;"><strong>Skill Development:</strong> Training teams in data analysis and interpretation</li>
            <li style="margin-bottom: 12px;"><strong>Performance Metrics:</strong> Defining KPIs that align with business objectives</li>
          </ul>

          <p style="margin-bottom: 24px;">Organizations that excel in analytics typically see 5-6% higher productivity and profitability compared to their competitors. The key is to start with specific use cases and gradually expand analytics capabilities across the organization.</p>
        </div>
      `
    },
    {
      id: '5',
      title: 'Effective Change Management: Leading Organizational Transformation',
      author: 'Lisa Wang',
      date: 'February 28, 2024',
      readTime: '7 min read',
      category: 'Change Management',
      image: 'https://readdy.ai/api/search-image?query=Change%20management%20workshop%20with%20diverse%20team%20members%20collaborating%20around%20table%2C%20professional%20training%20session%20in%20modern%20conference%20room%20with%20facilitator%20presenting%20transformation%20strategies%20to%20engaged%20participants%2C%20positive%20workplace%20culture%20development%20environment&width=800&height=400&seq=blog5detail&orientation=landscape',
      content: `
        <div style="font-family: 'Times New Roman', Times, serif; line-height: 1.8; color: #374151;">
          <p style="margin-bottom: 24px; font-size: 18px;">Change is inevitable in today's business environment, but managing it effectively is what separates successful organizations from those that struggle to adapt. Effective change management is both an art and a science that requires careful planning, clear communication, and strong leadership.</p>

          <h2 style="font-size: 28px; font-weight: bold; margin: 32px 0 24px 0; color: #1f2937;">The Psychology of Change</h2>
          <p style="margin-bottom: 24px;">Understanding human psychology is crucial for successful change management. People naturally resist change due to fear of the unknown, comfort with existing processes, and concerns about their role in the new environment. Effective change leaders acknowledge these concerns and address them proactively.</p>

          <h3 style="font-size: 24px; font-weight: 600; margin: 28px 0 20px 0; color: #374151;">Key Principles of Change Management</h3>
          <ul style="margin-bottom: 24px; padding-left: 24px;">
            <li style="margin-bottom: 12px;"><strong>Vision and Strategy:</strong> Clear articulation of why change is necessary and what success looks like</li>
            <li style="margin-bottom: 12px;"><strong>Stakeholder Engagement:</strong> Involving key stakeholders in the planning and implementation process</li>
            <li style="margin-bottom: 12px;"><strong>Communication:</strong> Regular, transparent updates about progress and challenges</li>
            <li style="margin-bottom: 12px;"><strong>Training and Support:</strong> Providing necessary skills and resources for successful transition</li>
          </ul>

          <p style="margin-bottom: 24px;">Research shows that organizations with excellent change management practices are six times more likely to meet or exceed their project objectives. The key is to treat change management as a strategic capability rather than a one-time activity.</p>

          <blockquote style="border-left: 4px solid #3b82f6; padding-left: 24px; margin: 32px 0; font-style: italic; color: #6b7280; font-size: 18px;">
            "Change is not about perfection. It's about making progress, learning, and adapting along the way."
          </blockquote>

          <h3 style="font-size: 24px; font-weight: 600; margin: 28px 0 20px 0; color: #374151;">Implementation Framework</h3>
          <p style="margin-bottom: 24px;">Successful change initiatives follow a structured approach that begins with assessment and planning, moves through implementation and reinforcement, and concludes with evaluation and continuous improvement. Each phase requires specific activities and deliverables to ensure success.</p>

          <p style="margin-bottom: 24px;">The most effective change management approaches combine top-down leadership with bottom-up engagement, creating a coalition of change champions throughout the organization who can help drive adoption and address resistance at all levels.</p>
        </div>
      `
    }
  ];

  const blog = blogPosts.find(post => post.id === blogId) || blogPosts[0];
  const relatedPosts = blogPosts.filter(post => post.id !== blogId).slice(0, 3);

  return (
    <div className="min-h-screen bg-white" style={{fontFamily: 'Times New Roman, Times, serif'}}>
      <Header />
      
      <main className="pt-16 sm:pt-20">
        <article>
          <div className="relative h-64 sm:h-80 lg:h-96">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="max-w-4xl mx-auto container-responsive text-center">
                <div className="bg-blue-600 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium inline-block mb-4">
                  {blog.category}
                </div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 leading-tight">{blog.title}</h1>
                <div className="flex flex-col sm:flex-row items-center justify-center text-white/90 text-sm sm:text-base space-y-2 sm:space-y-0 sm:space-x-6">
                  <span>By {blog.author}</span>
                  <span className="hidden sm:block">•</span>
                  <span>{blog.date}</span>
                  <span className="hidden sm:block">•</span>
                  <span>{blog.readTime}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto container-responsive py-8 sm:py-12">
            <div className="prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: blog.content }} />
            </div>

            <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row justify-between items-center">
                <div className="mb-4 sm:mb-0">
                  <h3 className="text-base sm:text-lg font-semibold mb-2">Share this article</h3>
                  <div className="flex space-x-4">
                    <button className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                      <i className="ri-facebook-fill text-sm sm:text-base"></i>
                    </button>
                    <button className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-400 text-white rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors cursor-pointer">
                      <i className="ri-twitter-fill text-sm sm:text-base"></i>
                    </button>
                    <button className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-700 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors cursor-pointer">
                      <i className="ri-linkedin-fill text-sm sm:text-base"></i>
                    </button>
                  </div>
                </div>
                
                <Link 
                  href="/blog" 
                  className="bg-gray-100 text-gray-700 px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-gray-200 transition-colors cursor-pointer whitespace-nowrap text-sm sm:text-base font-medium"
                >
                  <i className="ri-arrow-left-line mr-2"></i>
                  Back to Blog
                </Link>
              </div>
            </div>
          </div>
        </article>

        <section className="bg-gray-50 py-8 sm:py-12">
          <div className="max-w-7xl mx-auto container-responsive">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">Related Articles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {relatedPosts.map((post) => (
                <Link href={`/blog/${post.id}`} key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-40 sm:h-48 object-cover object-top"
                  />
                  <div className="p-4 sm:p-6">
                    <div className="bg-blue-100 text-blue-600 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium inline-block mb-3">
                      {post.category}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 leading-tight">{post.title}</h3>
                    <div className="text-xs sm:text-sm text-gray-600">
                      {post.date} • {post.readTime}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

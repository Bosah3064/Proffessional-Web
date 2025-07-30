
'use client';

export default function AboutHero() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About AkemiConsult
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Empowering businesses worldwide through strategic consulting excellence and innovative solutions since 2009.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">15+</div>
            <div className="text-blue-200">Years of Excellence</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">500+</div>
            <div className="text-blue-200">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">50+</div>
            <div className="text-blue-200">Industries Served</div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Award, Target, CheckCircle } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

interface AboutProps {
  onNavigate: (page: string) => void;
}

export default function About({ onNavigate }: AboutProps) {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
  const observerRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    Object.values(observerRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="font-sans">
      <section className="relative h-64 sm:h-80 md:h-96 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1920')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-blue-900/70 to-red-700/75"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center relative z-10">
          <div className="animate-fadeInUp">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white animate-slideInLeft">
              About Red Earth Construction
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-red-100 max-w-3xl animate-slideInLeft animation-delay-200">
              Building excellence with dedication, expertise, and integrity since 2018
            </p>
          </div>
        </div>
      </section>

      <section
        id="story"
        ref={(el) => (observerRefs.current['story'] = el)}
        className="py-12 sm:py-16 md:py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div
              className={`transform transition-all duration-700 ${
                isVisible['story'] ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
              }`}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 sm:mb-8">
                Our Story
              </h2>

              <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg">
                Established in 2018, Red Earth Construction has quickly become a leading name in the construction industry, known for delivering high-quality, reliable, and innovative solutions.
              </p>

              <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg">
                In just a few years, we have successfully completed over 200 projects, ranging from residential developments to large commercial and infrastructure ventures, all reflecting our commitment to excellence and precision.
              </p>

              <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                Our team of skilled professionals combines modern construction techniques, industry expertise, and a results-driven approach to consistently deliver projects that exceed client expectations.
              </p>

              <div className="mt-6 sm:mt-8 flex items-center gap-4">
                <div className="w-1 h-12 bg-red-600"></div>
                <div>
                  <p className="text-2xl sm:text-3xl font-bold text-red-600">200+</p>
                  <p className="text-gray-600 text-sm sm:text-base">Projects Completed</p>
                </div>
              </div>
            </div>

            <div
              className={`relative transform transition-all duration-700 ${
                isVisible['story'] ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
              }`}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-blue-600/20 rounded-2xl transform rotate-3"></div>
                <img
                  src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Construction site"
                  className="relative rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300 w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="mission"
        ref={(el) => (observerRefs.current['mission'] = el)}
        className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600 rounded-full filter blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div
            className={`text-center mb-12 sm:mb-16 transform transition-all duration-700 ${
              isVisible['mission'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Mission & Vision
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            <div
              className={`bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100 transform transition-all duration-700 hover:shadow-2xl hover:-translate-y-1 ${
                isVisible['mission'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-red-600/10 rounded-lg">
                  <Target className="h-6 w-6 sm:h-8 sm:w-8 text-red-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                To deliver exceptional construction services that exceed client expectations through innovative solutions, superior craftsmanship, and unwavering commitment to quality and excellence.
              </p>
            </div>

            <div
              className={`bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100 transform transition-all duration-700 hover:shadow-2xl hover:-translate-y-1 ${
                isVisible['mission'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-red-600/10 rounded-lg">
                  <Award className="h-6 w-6 sm:h-8 sm:w-8 text-red-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                To be the most trusted and respected construction company in the region, known for integrity, innovation, excellence, and our unwavering commitment to building a better future.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="why-choose"
        ref={(el) => (observerRefs.current['why-choose'] = el)}
        className="py-12 sm:py-16 md:py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-12 sm:mb-16 transform transition-all duration-700 ${
              isVisible['why-choose'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {[
              {
                title: 'Experienced Team',
                description: 'Over 25 years of industry expertise with certified professionals'
              },
              {
                title: 'Quality Assurance',
                description: 'Strict quality control at every stage of construction'
              },
              {
                title: 'On-Time Delivery',
                description: 'Proven record of meeting and exceeding project deadlines'
              },
              {
                title: 'Transparent Pricing',
                description: 'Clear estimates with no hidden costs or surprises'
              },
              {
                title: 'Safety First',
                description: 'Industry-leading safety standards and certifications'
              },
              {
                title: 'Client Focus',
                description: '99% client satisfaction with dedicated support'
              }
            ].map((item, index) => (
              <div
                key={index}
                className={`group flex gap-4 p-4 sm:p-6 rounded-xl hover:bg-red-50 transition-all duration-300 transform ${
                  isVisible['why-choose'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-red-600 text-white group-hover:scale-110 transition-transform">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

import { ArrowRight, CheckCircle } from 'lucide-react';
import * as Icons from 'lucide-react';
import { services, stats, heroImages } from '../data';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
  const observerRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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

  const getIcon = (iconName: string) => {
    const IconComponent =
      Icons[iconName as keyof typeof Icons] as React.ComponentType<{ className: string }>;
    return IconComponent ? <IconComponent className="h-8 w-8" /> : null;
  };

  return (
    <div className="font-sans">
      <section className="relative h-[90vh] sm:h-screen overflow-hidden bg-gradient-to-r from-red-900 to-red-700 text-white">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-2000 ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url('${image}')` }}
          />
        ))}

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center relative z-10">
          <div className="max-w-3xl animate-fadeInUp">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 text-white animate-slideInLeft">
              Red Earth Construction
            </h1>

            <p className="text-lg sm:text-xl text-red-400 font-semibold mb-6 animate-slideInLeft animation-delay-200">
              Pvt Ltd
            </p>

            <p className="text-lg sm:text-xl md:text-2xl mb-8 text-white animate-slideInLeft animation-delay-400">
              Building Your Vision Into Reality with Strength, Reliability, and Precision
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-slideInLeft animation-delay-600">
              <button
                onClick={() => onNavigate('contact')}
                className="bg-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-red-500 transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
              >
                Get Started <ArrowRight className="h-5 w-5" />
              </button>

              <button
                onClick={() => onNavigate('services')}
                className="border-2 border-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-white hover:bg-white hover:text-red-700 transition-all transform hover:scale-105 shadow-lg"
              >
                Our Services
              </button>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3 text-white animate-slideInLeft animation-delay-800">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center bg-red-700 font-bold text-sm">
                  500+
                </div>
              </div>
              <p className="text-sm sm:text-base">Trusted by 500+ satisfied clients</p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="stats"
        ref={(el) => (observerRefs.current['stats'] = el)}
        className="py-16 sm:py-20 bg-white relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center transform transition-all duration-700 ${
                  isVisible['stats'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div
                  className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full mb-4 transform hover:scale-110 transition-transform bg-red-700 text-white"
                >
                  {getIcon(stat.icon)}
                </div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-red-700">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="services"
        ref={(el) => (observerRefs.current['services'] = el)}
        className="py-16 sm:py-20 bg-red-50 relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-12 sm:mb-16 transform transition-all duration-700 ${
              isVisible['services'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-900 mb-4">
              Our Services
            </h2>
            <div className="w-24 h-1 mx-auto mb-4 bg-red-700"></div>
            <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base px-4">
              Comprehensive construction solutions tailored to your needs, delivered with excellence
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="bg-white p-6 sm:p-8 rounded-xl shadow-md transition-transform transform hover:-translate-y-2"
              >
                <div className="mb-6 text-red-700">{getIcon(service.icon)}</div>
                <h3 className="text-lg sm:text-xl font-bold text-red-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6 text-sm sm:text-base">{service.description}</p>
                <button
                  onClick={() => onNavigate('services')}
                  className="flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold text-sm sm:text-base"
                >
                  Learn More <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="why-choose"
        ref={(el) => (observerRefs.current['why-choose'] = el)}
        className="py-16 sm:py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-red-900 mb-4">
              Why Choose Red Earth
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { title: 'Quality Assurance', description: 'Strict quality control at every stage' },
              { title: 'Timely Delivery', description: 'Proven record of meeting deadlines' },
              { title: 'Certified Experts', description: 'Experienced and certified professionals' }
            ].map((item, index) => (
              <div key={index} className="flex gap-4 p-4">
                <CheckCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-red-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm sm:text-base">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="bg-gradient-to-r from-red-700 to-blue-900 p-8 sm:p-10 md:p-14 rounded-2xl text-center text-white">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg sm:text-xl mb-8 sm:mb-10 text-white/90">
              Get in touch with our expert team today for a free consultation and quote
            </p>
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 bg-white text-blue-900 px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg"
            >
              Contact Us Now <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6" />
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

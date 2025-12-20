import * as Icons from 'lucide-react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { services } from '../data';
import { motion } from 'framer-motion';

interface ServicesProps {
  onNavigate: (page: string) => void;
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 }
};

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0 }
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0 }
};

export default function Services({ onNavigate }: ServicesProps) {
  const getIcon = (iconName: string) => {
    const IconComponent =
      Icons[iconName as keyof typeof Icons] as React.ComponentType<{
        className?: string;
      }>;
    return IconComponent ? (
      <IconComponent className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-red-600" />
    ) : null;
  };

  const processSteps = [
    {
      number: '01',
      title: 'Consultation',
      description: 'Understanding your vision, requirements, budget, and site conditions'
    },
    {
      number: '02',
      title: 'Planning & Design',
      description: 'Detailed drawings, approvals, material planning, and timelines'
    },
    {
      number: '03',
      title: 'Construction',
      description: 'Professional execution with strict quality control and updates'
    },
    {
      number: '04',
      title: 'Handover',
      description: 'Final inspection, documentation, and project handover'
    }
  ];

  return (
    <div className="bg-white">
      <motion.section
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="bg-gradient-to-r from-blue-900 to-red-700 text-white py-12 sm:py-16 md:py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Our Construction Services
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Reliable, high-quality construction solutions delivered with professionalism and trust.
          </p>
        </div>
      </motion.section>

      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 md:space-y-20">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center"
            >
              <motion.div
                variants={index % 2 === 0 ? fadeLeft : fadeRight}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={index % 2 === 1 ? 'lg:order-2' : ''}
              >
                <div className="mb-4">{getIcon(service.icon)}</div>

                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h2>

                <p className="text-gray-600 text-base sm:text-lg mb-6">{service.description}</p>

                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  transition={{ staggerChildren: 0.1 }}
                  className="space-y-3 mb-8"
                >
                  {[
                    'Experienced & certified professionals',
                    'High-quality materials & workmanship',
                    'Clear timelines & transparent communication',
                    'Strict safety & quality standards'
                  ].map((item, i) => (
                    <motion.div key={i} variants={fadeUp} className="flex gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm sm:text-base">{item}</span>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center gap-2 bg-blue-900 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base"
                >
                  Request a Quote <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                </motion.button>
              </motion.div>

              <motion.div
                variants={index % 2 === 0 ? fadeRight : fadeLeft}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={index % 2 === 1 ? 'lg:order-1' : ''}
              >
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  src={`https://images.pexels.com/photos/${
                    [2219024, 159306, 1396132, 3862130][index]
                  }/pexels-photo-${[2219024, 159306, 1396132, 3862130][index]}.jpeg?auto=compress&cs=tinysrgb&w=900`}
                  alt={service.title}
                  className="rounded-2xl shadow-xl w-full h-64 sm:h-80 md:h-[420px] object-cover"
                />
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 sm:mb-12 md:mb-14"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Work Process
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
              A structured and transparent approach from concept to completion.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative bg-white p-5 sm:p-6 rounded-2xl shadow-md"
              >
                <div className="text-4xl sm:text-5xl font-bold text-red-100 mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-red-700 to-blue-900 rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-14 text-center text-white"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Looking for a Custom Construction Solution?
            </h2>
            <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto mb-6 sm:mb-8">
              From residential homes to commercial projects, we deliver tailored solutions.
            </p>

            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 bg-white text-blue-900 px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base"
            >
              Contact Us <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

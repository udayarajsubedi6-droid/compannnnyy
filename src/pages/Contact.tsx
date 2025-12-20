import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, CheckCircle } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <motion.section
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-blue-900 to-red-700 text-white py-12 sm:py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-base sm:text-lg md:text-xl text-red-100 max-w-3xl mx-auto">
            Get in touch to discuss your project or request a quote
          </p>
        </div>
      </motion.section>

      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="lg:col-span-2 bg-white rounded-xl shadow-md p-6 sm:p-8"
            >
              <motion.h2 variants={item} className="text-xl sm:text-2xl font-bold text-blue-900 mb-6">
                Send Us a Message
              </motion.h2>

              {submitted ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="bg-red-50 border border-red-200 rounded-lg p-6 text-center"
                >
                  <CheckCircle className="h-10 w-10 sm:h-12 sm:w-12 text-red-600 mx-auto mb-4" />
                  <h3 className="text-lg sm:text-xl font-semibold text-blue-900 mb-2">
                    Thank You!
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base">
                    Your message has been received. We'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  variants={container}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <motion.div variants={item} className="grid sm:grid-cols-2 gap-6">
                    <Input
                      label="Full Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    <Input
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </motion.div>

                  <motion.div variants={item}>
                    <Input
                      label="Phone Number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </motion.div>

                  <motion.div variants={item}>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      name="message"
                      rows={6}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-600 text-sm sm:text-base"
                    />
                  </motion.div>

                  <motion.button
                    variants={item}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    type="submit"
                    className="w-full bg-red-700 text-white py-3 rounded-lg font-semibold text-sm sm:text-base"
                  >
                    Send Message
                  </motion.button>
                </motion.form>
              )}
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <motion.div variants={item} className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-blue-900 mb-4">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <Info icon={<Phone className="h-5 w-5" />} title="Phone" value="01-5312287" />
                  <Info
                    icon={<Mail className="h-5 w-5" />}
                    title="Email"
                    value="redearth.eng@gmail.com"
                  />
                  <Info
                    icon={<MapPin className="h-5 w-5" />}
                    title="Address"
                    value="Thaha Municipality-9 Makwanpur, Nepal"
                  />
                  <Info
                    icon={<Clock className="h-5 w-5" />}
                    title="Business Hours"
                    value="Sunday–Friday: 9:00 AM – 5:00 PM"
                  />
                </div>
              </motion.div>

              <motion.div
                variants={item}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-r from-red-700 to-blue-900 rounded-xl p-6 text-white"
              >
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Quick Response</h3>
                <p className="text-red-100 text-sm sm:text-base">
                  We respond within 24 hours.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Input({ label, ...props }: { label: string; [key: string]: unknown }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">{label}</label>
      <input
        {...props}
        required
        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-600 text-sm sm:text-base"
      />
    </div>
  );
}

function Info({
  icon,
  title,
  value
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="text-red-600 flex-shrink-0 mt-0.5">{icon}</div>
      <div>
        <div className="font-medium text-blue-900 text-sm sm:text-base">{title}</div>
        <div className="text-slate-600 text-sm break-words">{value}</div>
      </div>
    </div>
  );
}

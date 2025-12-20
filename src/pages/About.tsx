import { Award, Target, Users, CheckCircle } from 'lucide-react';
import { team } from '../data';

export default function About() {
  return (
    <div>
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About BuildPro</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Building excellence since 1998 with dedication, expertise, and integrity
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 1998, BuildPro has grown from a small family-owned business into one of the region's most trusted construction companies. Our journey has been built on a foundation of quality craftsmanship, honest business practices, and unwavering commitment to client satisfaction.
              </p>
              <p className="text-gray-600 mb-4">
                Over the past 25 years, we've completed more than 500 projects, ranging from custom residential homes to large-scale commercial developments. Each project reflects our dedication to excellence and our passion for turning architectural visions into reality.
              </p>
              <p className="text-gray-600">
                Today, our team of 50+ professionals brings together decades of combined experience, cutting-edge techniques, and a collaborative approach that ensures every project exceeds expectations.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Construction site"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <Target className="h-10 w-10 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-gray-600">
                To deliver exceptional construction services that exceed client expectations through innovative solutions, superior craftsmanship, and unwavering commitment to quality. We strive to build lasting relationships and create structures that stand the test of time.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <Award className="h-10 w-10 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-gray-600">
                To be the most trusted and respected construction company in the region, recognized for our integrity, innovation, and excellence. We aim to set new standards in the industry while maintaining our core values of quality, safety, and client satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose BuildPro
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Experienced Team',
                description: 'Over 25 years of industry expertise with certified professionals'
              },
              {
                title: 'Quality Assurance',
                description: 'Rigorous quality control at every stage of construction'
              },
              {
                title: 'On-Time Delivery',
                description: 'Proven track record of completing projects on schedule'
              },
              {
                title: 'Transparent Pricing',
                description: 'Clear, detailed estimates with no hidden costs'
              },
              {
                title: 'Safety First',
                description: 'Industry-leading safety standards and compliance'
              },
              {
                title: 'Client Focus',
                description: '99% client satisfaction rate and ongoing support'
              }
            ].map((item, index) => (
              <div key={index} className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experienced professionals dedicated to your project's success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map(member => (
              <div key={member.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Users className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
            <p className="text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
              We're always looking for talented individuals to join our growing team
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

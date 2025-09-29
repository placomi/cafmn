import { Award, MapPin, Clock, Heart } from 'lucide-react';
import ScrollAnimation from '../components/common/ScrollAnimation';
import { businessConfig } from '../config/business';

export default function About() {

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <ScrollAnimation direction="up" className="text-center mb-16" immediate={true}>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          About {businessConfig.name}
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {businessConfig.description}
        </p>
      </ScrollAnimation>

      {/* Company Story */}
      <section className="mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollAnimation direction="left" immediate={true}>
            <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.
              </p>
            </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation direction="right" immediate={true}>
            <div>
              <img
                src="/images/workshop-team.jpg"
                alt="Burnsville Cabinets team in workshop"
                className="rounded-lg shadow-lg"
              />
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="mb-16 bg-gray-50 py-12 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation direction="up">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Mission & Values</h2>
          </ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollAnimation direction="up" delay={0.1}>
              <div className="text-center">
                <Heart className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Customer First</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation direction="up" delay={0.2}>
              <div className="text-center">
                <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Quality Craftsmanship</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation direction="up" delay={0.3}>
              <div className="text-center">
              <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Local Community</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Location & Facility */}
      <section className="mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ScrollAnimation direction="left">
            <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Location</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Located in {businessConfig.address.city}, our facility serves the entire Twin Cities
                metropolitan area with premium kitchen cabinets and professional installation services.
              </p>
              <p>
                We proudly serve {businessConfig.serviceAreas.slice(0, 5).join(', ')} and surrounding
                areas throughout the Twin Cities region, bringing quality craftsmanship directly to your home.
              </p>
            </div>
            <div className="mt-6 space-y-3">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-blue-600 mr-3" />
                <span className="text-gray-700">{businessConfig.address.fullAddress}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-blue-600 mr-3" />
                <div className="text-gray-700">
                  <div>{businessConfig.hours.weekdays}</div>
                  <div>{businessConfig.hours.weekend}</div>
                  <div>Sunday: {businessConfig.hours.sunday}</div>
                </div>
              </div>
            </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation direction="right">
            <div>
              <img
                src="/images/burnsville-warehouse.jpg"
                alt="{businessConfig.name} warehouse and showroom"
                className="rounded-lg shadow-lg mb-4"
              />
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">Visit Our Location</h3>
                <p className="text-blue-800 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Certifications & Awards */}
      {/*
      <section className="mb-16 bg-gray-50 py-12 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation direction="up">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Certifications & Memberships
            </h2>
          </ScrollAnimation>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center">
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="w-20 h-20 mx-auto mb-3 object-contain"
                />
                <p className="text-sm text-gray-600">{cert.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* Stats */}
      {/*
      <section className="mb-16">
        <div className="bg-blue-900 text-white py-12 rounded-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="text-blue-200">Years in Business</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-blue-200">Kitchens Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">98%</div>
              <div className="text-blue-200">Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">A+</div>
              <div className="text-blue-200">BBB Rating</div>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* CTA */}
      <section className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Work With Us?</h2>
        <p className="text-xl text-gray-600 mb-8">
          Experience the {businessConfig.name} difference for yourself
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Schedule Consultation
          </a>
          <a
            href="/shop"
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
          >
            Browse Our Cabinets
          </a>
        </div>
      </section>
    </div>
  );
}
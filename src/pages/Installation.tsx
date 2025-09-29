import { useState } from 'react';
import { Check, Clock, Shield, Award, Phone, Mail } from 'lucide-react';
import ScrollAnimation from '../components/common/ScrollAnimation';
import { businessConfig } from '../config/business';

export default function Installation() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    projectType: '',
    timeline: '',
    details: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Installation quote form submitted:', formData);
  };

  const beforeAfterProjects = [
    {
      id: 1,
      title: 'Project 1',
      location: 'Location 1',
      before: '/wood-stained-lkl-material.jpg',
      after: '/1.-Cherry-Cabinets-.jpg'
    },
    {
      id: 2,
      title: 'Project 2',
      location: 'Location 2',
      before: '/wood-stained-lkl-material.jpg',
      after: '/green-kitchen-cabinets-16-64484b02999d7.jpg'
    },
    {
      id: 3,
      title: 'Project 3',
      location: 'Location 3',
      before: '/wood-stained-lkl-material.jpg',
      after: '/modern-custom-kitchen-remodel-lux-design-builds-img~6ed17ff20d15389a_14-9308-1-58408ce.jpg'
    }
  ];

  const testimonials = [
    {
      name: 'Customer 1',
      project: 'Kitchen Project',
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      rating: 5
    },
    {
      name: 'Customer 2',
      project: 'Kitchen Project',
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      rating: 5
    },
    {
      name: 'Customer 3',
      project: 'Kitchen Project',
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      rating: 5
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <ScrollAnimation direction="up" className="text-center mb-12" immediate={true}>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Professional Cabinet Installation Services
        </h1>
        <p className="text-xl text-gray-600 mb-2">
          Expert installation throughout the Twin Cities area
        </p>
        <p className="text-lg text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        </p>
      </ScrollAnimation>

      {/* Services Overview */}
      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ScrollAnimation direction="up" delay={0.1} immediate={true}>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Licensed & Insured</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation direction="up" delay={0.2} immediate={true}>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">On-Time Guarantee</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation direction="up" delay={0.3} immediate={true}>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quality Workmanship</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Services Offered */}
      <section className="mb-16">
        <ScrollAnimation direction="up" immediate={true}>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Installation Services</h2>
        </ScrollAnimation>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ScrollAnimation direction="left" immediate={true}>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Complete Kitchen Installation</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center"><Check className="h-4 w-4 text-green-600 mr-2" />Cabinet mounting and alignment</li>
                <li className="flex items-center"><Check className="h-4 w-4 text-green-600 mr-2" />Door and drawer adjustment</li>
                <li className="flex items-center"><Check className="h-4 w-4 text-green-600 mr-2" />Hardware installation</li>
                <li className="flex items-center"><Check className="h-4 w-4 text-green-600 mr-2" />Crown molding and trim work</li>
                <li className="flex items-center"><Check className="h-4 w-4 text-green-600 mr-2" />Countertop support installation</li>
              </ul>
            </div>
          </ScrollAnimation>
          <ScrollAnimation direction="right" immediate={true}>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Additional Services</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center"><Check className="h-4 w-4 text-green-600 mr-2" />Cabinet refacing and updates</li>
                <li className="flex items-center"><Check className="h-4 w-4 text-green-600 mr-2" />Built-in pantry installation</li>
                <li className="flex items-center"><Check className="h-4 w-4 text-green-600 mr-2" />Island and peninsula installation</li>
                <li className="flex items-center"><Check className="h-4 w-4 text-green-600 mr-2" />Lazy Susan and organizer setup</li>
                <li className="flex items-center"><Check className="h-4 w-4 text-green-600 mr-2" />Touch-up and finishing work</li>
              </ul>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Before/After Gallery */}
      <section className="mb-16">
        <ScrollAnimation direction="up" immediate={true}>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Before & After Gallery</h2>
        </ScrollAnimation>
        <div className="space-y-12">
          {beforeAfterProjects.map((project, index) => (
            <ScrollAnimation key={project.id} direction="up" delay={index * 0.2} immediate={true}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <img
                      src={project.before}
                      alt={`Before - ${project.title}`}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <img
                      src={project.after}
                      alt={`After - ${project.title}`}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Installation Quote Form */}
        <ScrollAnimation direction="left">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Request Installation Quote</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                Installation Address *
              </label>
              <input
                type="text"
                id="address"
                required
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                placeholder="Street address, city, state, zip"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-1">
                  Project Type
                </label>
                <select
                  id="projectType"
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                >
                  <option value="">Select project type</option>
                  <option value="complete-kitchen">Complete Kitchen Installation</option>
                  <option value="partial-cabinets">Partial Cabinet Installation</option>
                  <option value="island-only">Island Installation Only</option>
                  <option value="cabinet-refacing">Cabinet Refacing</option>
                  <option value="other">Other (please specify)</option>
                </select>
              </div>
              <div>
                <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-1">
                  Preferred Timeline
                </label>
                <select
                  id="timeline"
                  value={formData.timeline}
                  onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                >
                  <option value="">Select timeline</option>
                  <option value="asap">As soon as possible</option>
                  <option value="1-2weeks">1-2 weeks</option>
                  <option value="3-4weeks">3-4 weeks</option>
                  <option value="1-2months">1-2 months</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="details" className="block text-sm font-medium text-gray-700 mb-1">
                Project Details
              </label>
              <textarea
                id="details"
                rows={4}
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Request Installation Quote
            </button>
          </form>
          </div>
        </ScrollAnimation>

        {/* Customer Testimonials */}
        <ScrollAnimation direction="right">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What Our Customers Say</h2>
          <div className="space-y-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-lg">★</span>
                    ))}
                  </div>
                  <span className="ml-2 text-gray-600 text-sm">({testimonial.rating}/5)</span>
                </div>
                <blockquote className="text-gray-700 mb-4">
                  "{testimonial.review}"
                </blockquote>
                <div className="text-sm text-gray-500">
                  <div className="font-medium">{testimonial.name}</div>
                  <div>{testimonial.project}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">Ready to Get Started?</h3>
            <p className="text-blue-800 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
            </p>
            <div className="space-y-2 text-blue-800">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span className="font-medium">{businessConfig.contact.phone}</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>{businessConfig.contact.email}</span>
              </div>
            </div>
          </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
}

import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import ScrollAnimation from '../components/common/ScrollAnimation';
import { businessConfig } from '../config/business';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <ScrollAnimation direction="up" className="text-center mb-12" immediate={true}>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Contact {businessConfig.name}
        </h1>
        <p className="text-xl text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
        </p>
      </ScrollAnimation>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <ScrollAnimation direction="left" immediate={true}>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
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
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-1">
                Inquiry Type *
              </label>
              <select
                id="inquiryType"
                required
                value={formData.inquiryType}
                onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              >
                <option value="">Select inquiry type</option>
                <option value="quote">Request Quote</option>
                <option value="custom">Custom Design</option>
                <option value="installation">Installation Services</option>
                <option value="general">General Information</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message *
              </label>
              <textarea
                id="message"
                required
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
            >
              <Send className="h-5 w-5 mr-2" />
              Send Message
            </button>
          </form>
        </ScrollAnimation>

        {/* Contact Information */}
        <ScrollAnimation direction="right" className="space-y-8" immediate={true}>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                  <p className="text-gray-600">{businessConfig.contact.phone}</p>
                  <p className="text-sm text-gray-500">{businessConfig.hours.weekdays}, {businessConfig.hours.weekend}</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600">{businessConfig.contact.email}</p>
                  <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                  <p className="text-gray-600">{businessConfig.address.street}<br />{businessConfig.address.city}, {businessConfig.address.state} {businessConfig.address.zipCode}</p>
                  <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <Clock className="h-5 w-5 text-blue-600 mr-2" />
              Business Hours
            </h3>
            <div className="space-y-2 text-gray-600">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span className="font-medium">{businessConfig.hours.monday}</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span className="font-medium">{businessConfig.hours.saturday}</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span className="font-medium">{businessConfig.hours.sunday}</span>
              </div>
            </div>
          </div>

        </ScrollAnimation>
      </div>

      {/* Map */}
      <ScrollAnimation direction="up" className="mt-16" immediate={true}>
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Visit Our Location</h2>
        <div className="bg-gray-200 rounded-lg overflow-hidden" style={{ height: '400px' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d707.9123322817045!2d-93.256398!3d44.787954!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87f623ce3692c45f%3A0xdcbbfb60bad2ae8b!2sCabinets%20and%20Flooring%20Inc!5e0!3m2!1sen!2sus!4v1759156959056!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
		{/*
        <div className="mt-4 text-center">
          <p className="text-gray-600">
            Located in the heart of Burnsville, easily accessible from Highway 35W and 42.
            <br />
            Free parking available on-site.
          </p>
        </div>
		*/}
      </ScrollAnimation>

    </div>
  );
}

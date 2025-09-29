import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from 'lucide-react';
import { businessConfig, navigationConfig } from '../../config';

export default function Footer() {
    return (
        <footer className="bg-primary-950 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div>
                        <h3 className="text-2xl font-bold mb-6">{businessConfig.name}</h3>
                        <p className="text-primary-300 mb-6 leading-relaxed">
                            {businessConfig.description}
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href={businessConfig.socialMedia.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-primary-800 rounded-lg flex items-center justify-center hover:bg-accent-600 transition-colors cursor-pointer"
                            >
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a
                                href={businessConfig.socialMedia.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-primary-800 rounded-lg flex items-center justify-center hover:bg-accent-600 transition-colors cursor-pointer"
                            >
                                <Instagram className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            {navigationConfig.footerNav.quickLinks.map((item) => (
                                <li key={item.path}>
                                    <Link to={item.path} className="text-primary-300 hover:text-accent-400 transition-colors">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <div className="w-8 h-8 bg-accent-600 rounded-lg flex items-center justify-center mr-3">
                                    <Phone className="h-4 w-4" />
                                </div>
                                <span className="text-primary-300">{businessConfig.contact.phone}</span>
                            </div>
                            <div className="flex items-center">
                                <div className="w-8 h-8 bg-accent-600 rounded-lg flex items-center justify-center mr-3">
                                    <Mail className="h-4 w-4" />
                                </div>
                                <span className="text-primary-300">{businessConfig.contact.email}</span>
                            </div>
                            <div className="flex items-start">
                                <div className="w-8 h-8 bg-accent-600 rounded-lg flex items-center justify-center mr-3 mt-0.5">
                                    <MapPin className="h-4 w-4" />
                                </div>
                                <span className="text-primary-300">{businessConfig.address.fullAddress}</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-6">Hours</h4>
                        <div className="space-y-3 text-primary-300">
                            <div className="flex items-start">
                                <div className="w-8 h-8 bg-accent-600 rounded-lg flex items-center justify-center mr-3">
                                    <Clock className="h-4 w-4" />
                                </div>
                                <div>
                                    <div>{businessConfig.hours.weekdays}</div>
                                    <div>{businessConfig.hours.weekend}</div>
                                    <div>Sunday: {businessConfig.hours.sunday}</div>
                                </div>
                            </div>
                        </div>
                        {/*
            <div className="mt-8">
              <h5 className="font-semibold mb-3 text-white">Service Area</h5>
              <p className="text-primary-300 text-sm leading-relaxed">
                Proudly serving {businessConfig.serviceAreas.slice(0, 3).join(', ')} & the Twin Cities
              </p>
            </div>
			  */}
                    </div>
                </div>

                <div className="border-t border-primary-800 mt-12 pt-8 text-center">
                    <p className="text-primary-400 leading-relaxed">
                        {businessConfig.name}. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

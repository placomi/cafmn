import { Link, useLocation } from 'react-router-dom';
import { Phone, MapPin } from 'lucide-react';
import { businessConfig, navigationConfig } from '../../config';
import Logo from '../common/Logo';

export default function Header() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-sharp border-b border-neutral-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top bar with contact info */}
        <div className="hidden lg:flex items-center justify-end py-2 border-b border-neutral-100 text-sm">
          <div className="flex items-center space-x-6 text-primary-600">
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-2 text-accent-500" />
              <span className="font-medium">{businessConfig.contact.phone}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-2 text-accent-500" />
              <span className="font-medium">{businessConfig.address.city}, {businessConfig.address.state}</span>
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Logo className="h-8 w-auto" />

          {/* Navigation buttons */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigationConfig.mainNav.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-md font-medium transition-all duration-200 ${
                  isActive(item.path)
                    ? 'bg-accent-600 text-white shadow-sharp'
                    : 'text-primary-700 hover:bg-accent-50 hover:text-accent-700'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Link
              to={navigationConfig.cta.primary.path}
              className="bg-primary-950 text-white px-6 py-2.5 rounded-md font-semibold hover:bg-primary-800 transition-all duration-200 shadow-sharp hover:shadow-sharpMd"
            >
              {navigationConfig.cta.primary.label}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Link
              to="/contact"
              className="bg-accent-600 text-white px-4 py-2 rounded-md font-semibold text-sm"
            >
              Quote
            </Link>
          </div>
        </div>

        {/* Mobile navigation */}
        <div className="md:hidden pb-4">
          <nav className="flex flex-wrap items-center gap-2">
            {navigationConfig.mainNav.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
                  isActive(item.path)
                    ? 'bg-accent-600 text-white'
                    : 'text-primary-700 hover:bg-accent-50 hover:text-accent-700'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile contact info */}
          <div className="flex items-center justify-center mt-3 pt-3 border-t border-neutral-100 text-sm text-primary-600">
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-1 text-accent-500" />
              <span>{businessConfig.contact.phone}</span>
            </div>
            <span className="mx-3">•</span>
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-1 text-accent-500" />
              <span>{businessConfig.address.city}, {businessConfig.address.state}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
export interface NavItem {
  path: string;
  label: string;
  description?: string;
  isExternal?: boolean;
}

export const navigationConfig = {
  // Main navigation items
  mainNav: [
    { path: '/', label: 'Home', description: 'Welcome to Burnsville Cabinets' },
    { path: '/shop', label: 'Shop', description: 'Browse our cabinet collection' },
    { path: '/custom', label: 'Custom', description: 'Custom cabinet design' },
    { path: '/installation', label: 'Installation', description: 'Professional installation services' },
    { path: '/about', label: 'About', description: 'Learn about our company' },
    { path: '/contact', label: 'Contact', description: 'Get in touch with us' },
  ] as NavItem[],

  // Footer navigation sections
  footerNav: {
    quickLinks: [
      { path: '/shop', label: 'Shop Cabinets' },
      { path: '/custom', label: 'Custom Orders' },
      { path: '/installation', label: 'Installation' },
      { path: '/about', label: 'About Us' },
      { path: '/contact', label: 'Contact' },
    ] as NavItem[],

    services: [
      { path: '/shop', label: 'Cabinet Sales' },
      { path: '/custom', label: 'Custom Design' },
      { path: '/installation', label: 'Installation' },
      { path: '/contact', label: 'Free Consultation' },
    ] as NavItem[],

    legal: [
      { path: '/privacy', label: 'Privacy Policy' },
      { path: '/terms', label: 'Terms of Service' },
      { path: '/warranty', label: 'Warranty Information' },
    ] as NavItem[]
  },

  // Call-to-action buttons
  cta: {
    primary: {
      label: 'Get Quote',
      path: '/contact',
      description: 'Get your free consultation'
    },
    secondary: {
      label: 'Browse Catalog',
      path: '/shop',
      description: 'View our cabinet collection'
    },
    consultation: {
      label: 'Book Free Design Consult',
      path: '/contact',
      description: 'Schedule your free consultation'
    },
    customQuote: {
      label: 'Request Custom Quote',
      path: '/custom',
      description: 'Get a custom cabinet quote'
    }
  }
} as const;
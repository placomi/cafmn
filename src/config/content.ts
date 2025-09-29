export const contentConfig = {
  // Hero Section Content
  hero: {
    headline: 'Custom Kitchen',
    subHeadline: 'Cabinets',
    location: '',
    description: 'Premium quality cabinets delivered & installed in 4-6 weeks.',
    floatingBadges: {
      warranty: '5-Year Warranty',
      consultation: 'Free Consultation'
    }
  },

  // Page Titles and Descriptions
  pages: {
    home: {
      title: 'Premium Kitchen Cabinets in Burnsville, MN',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    shop: {
      title: 'Kitchen Cabinets',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
    },
    custom: {
      title: 'Custom Kitchen Cabinets in Burnsville',
      subtitle: 'Serving All of Minnesota with Personalized Cabinet Solutions',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
    },
    installation: {
      title: 'Professional Cabinet Installation Services',
      subtitle: 'Expert installation throughout the Twin Cities area',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    about: {
      title: 'About Burnsville Cabinets',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    contact: {
      title: 'Contact Burnsville Cabinets',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
    }
  },

  // Section Headlines
  sections: {
    whyChooseUs: {
      title: 'Why Choose Burnsville Cabinets?',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
    },
    featuredProducts: {
      title: 'Featured Cabinet Styles',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
    },
    localSeo: {
      title: 'Proudly Serving Burnsville and the Twin Cities',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    customerReviews: {
      title: 'What Our Customers Say',
      description: 'Lorem ipsum dolor sit amet.',
      rating: '5/5'
    },
    howItWorks: {
      title: 'How It Works',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
    },
    finalCta: {
      title: 'Ready to Transform Your Kitchen?',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  },

  // Process Steps
  process: [
    { step: 1, title: 'Measure', description: 'Lorem ipsum dolor sit amet, consectetur.' },
    { step: 2, title: 'Design', description: 'Lorem ipsum dolor sit amet, consectetur.' },
    { step: 3, title: 'Order', description: 'Lorem ipsum dolor sit amet, consectetur.' },
    { step: 4, title: 'Build', description: 'Lorem ipsum dolor sit amet, consectetur.' },
    { step: 5, title: 'Install', description: 'Lorem ipsum dolor sit amet, consectetur.' }
  ],

  // Service Areas Text
  serviceArea: {
    title: 'Service Area',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
    note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },

  // Emergency Contact
  emergency: {
    title: 'Need Immediate Help?',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit:',
    availability: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
  },

  // Forms
  forms: {
    contact: {
      inquiryTypes: [
        { value: 'quote', label: 'Request Quote' },
        { value: 'custom', label: 'Custom Design' },
        { value: 'installation', label: 'Installation Services' },
        { value: 'general', label: 'General Information' }
      ]
    },
    custom: {
      styles: [
        { value: 'shaker', label: 'Shaker' },
        { value: 'modern', label: 'Modern' },
        { value: 'traditional', label: 'Traditional' },
        { value: 'farmhouse', label: 'Farmhouse' },
        { value: 'contemporary', label: 'Contemporary' },
        { value: 'other', label: 'Other (please specify in details)' }
      ],
      budgetRanges: [
        { value: 'under-10k', label: 'Under $10,000' },
        { value: '10k-20k', label: '$10,000 - $20,000' },
        { value: '20k-30k', label: '$20,000 - $30,000' },
        { value: '30k-50k', label: '$30,000 - $50,000' },
        { value: 'over-50k', label: 'Over $50,000' }
      ],
      timelines: [
        { value: 'asap', label: 'As soon as possible' },
        { value: '1-3months', label: '1-3 months' },
        { value: '3-6months', label: '3-6 months' },
        { value: '6months+', label: '6+ months' },
        { value: 'flexible', label: 'Flexible' }
      ]
    }
  }
} as const;

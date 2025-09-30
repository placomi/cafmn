export const businessConfig = {
    // Company Information
    name: 'MCB Cabinets',
    tagline: 'Premium Kitchen Cabinets Made in Burnsville',
    description: 'Premium kitchen cabinets serving Burnsville and the Twin Cities.',

    // Logo Configuration
    logo: {
        src: '/logo.png',
        alt: 'CAFMN Logo',
        width: 'auto',
        height: '64px'
    },

    // Contact Information
    contact: {
        phone: '(612) 214-0644',
        email: 'contact@cafmn.com',
    },

    // Address & Location
    address: {
        street: '1300 Larc Industrial Blvd',
        city: 'Burnsville',
        state: 'MN',
        zipCode: '55337',
        country: 'US',
        fullAddress: '1300 Larc Industrial Blvd, Burnsville, MN 55337',
        coordinates: {
            latitude: '44.7608',
            longitude: '-93.2775'
        },
    },

    // Business Hours
    hours: {
        monday: '8:30 AM - 5:00 PM',
        tuesday: '8:30 AM - 5:00 PM',
        wednesday: '8:30 AM - 5:00 PM',
        thursday: '8:30 AM - 5:00 PM',
        friday: '8:30 AM - 5:00 PM',
        saturday: '10:00 AM - 2:00 PM',
        sunday: 'Closed',
        // Formatted versions
        weekdays: 'Mon-Fri: 8:30AM-5PM',
        weekend: 'Saturday: 10AM-2PM'
    },

    // Service Areas
    serviceAreas: [
        'Burnsville',
        'Minneapolis',
        'Saint Paul',
    ],

    // Social Media Links
    socialMedia: {
        facebook: 'https://www.facebook.com/cafmn',
        instagram: 'https://www.instagram.com/cafmn',
        linkedin: 'https://www.linkedin.com/company/cafmn',
        youtube: 'https://www.youtube.com/cafmn'
    },

    // Business Details
    details: {
        founded: '2008',
        yearsInBusiness: '15+',
        kitchensCompleted: '500+',
        warrantyYears: 5,
        deliveryWeeks: '4-6',
        bbbRating: 'A+',
        customerSatisfaction: '98%'
    },

    // Website Information
    website: {
        domain: 'burnsvillecabinets.com',
        url: 'https://burnsvillecabinets.com',
        title: 'Kitchen Cabinets Burnsville MN | Custom Cabinets Twin Cities | Burnsville Cabinets',
        metaDescription: 'Premium kitchen cabinets in Burnsville, MN. Custom cabinet design, professional installation, 5-year warranty. Serving Twin Cities. Free consultation!',
        keywords: 'kitchen cabinets, Burnsville cabinets, custom cabinets, white shaker cabinets, Twin Cities cabinets, Minneapolis cabinets, cabinet installation, kitchen remodel'
    },

    // Features & Benefits
    features: {
        warranty: {
            title: '5-Year Warranty',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae. '
        },
        measuring: {
            title: 'Free In-Home Measuring',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae. '
        },
        rating: {
            title: 'A+ Rating',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae. '
        }
    },

    // Trust Signals
    trustSignals: [
        '5-year warranty on cabinetry',
        'Free in-home measuring',
        'A+ BBB Rating'
    ]
} as const ;

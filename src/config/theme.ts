export const themeConfig = {
  // Color Palette Configuration
  colors: {
    // Primary brand colors
    primary: {
      50: '#f8f9fb',
      100: '#f1f3f6',
      200: '#e3e7ed',
      300: '#d1d7e0',
      400: '#b8c2d0',
      500: '#9ca8bc',
      600: '#7d8ca3',
      700: '#677285',
      800: '#556070',
      900: '#475058',
      950: '#2d3339',
    },

    // Accent colors (orange for CTAs)
    accent: {
      50: '#fef7ee',
      100: '#fdedd7',
      200: '#fad7ae',
      300: '#f7ba7a',
      400: '#f39344',
      500: '#f0741f',
      600: '#e15915',
      700: '#ba4514',
      800: '#943818',
      900: '#783016',
      950: '#41160a',
    },

    // Wood tones for cabinet context
    wood: {
      50: '#fdfcf9',
      100: '#fbf8f1',
      200: '#f6f0e3',
      300: '#ede2cd',
      400: '#e2cfb0',
      500: '#d4b693',
      600: '#c59c76',
      700: '#b08660',
      800: '#926f51',
      900: '#775c44',
      950: '#3f2f22',
    }
  },

  // Typography Configuration
  typography: {
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
    },

    fontSize: {
      hero: {
        mobile: 'text-5xl',
        desktop: 'text-7xl'
      },
      heading: {
        xl: 'text-4xl md:text-5xl',
        lg: 'text-3xl md:text-4xl',
        md: 'text-2xl md:text-3xl',
        sm: 'text-xl md:text-2xl'
      }
    }
  },

  // Shadow Configuration - Minimal for sharp design
  shadows: {
    sharp: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    sharpMd: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    sharpLg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  },

  // Spacing Configuration
  spacing: {
    section: {
      sm: 'py-16',
      md: 'py-20',
      lg: 'py-24',
      xl: 'py-32'
    },
    container: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'
  },

  // Border Radius Configuration - Sharp design with minimal rounding
  borderRadius: {
    card: 'rounded-md',
    cardLg: 'rounded-lg',
    button: 'rounded-md',
    input: 'rounded-md'
  },

  // Animation Configuration
  animations: {
    transition: 'transition-all duration-200',
    transitionSlow: 'transition-all duration-300',
    hover: {
      scale: 'hover:scale-[1.02]',
      shadow: 'hover:shadow-sharpLg',
      translate: 'group-hover:translate-x-1'
    }
  },

  // Component Styles - Sharp design
  components: {
    button: {
      primary: 'bg-accent-600 text-white hover:bg-accent-700 shadow-sharp hover:shadow-sharpMd',
      secondary: 'bg-primary-950 text-white hover:bg-primary-800 shadow-sharp hover:shadow-sharpMd',
      outline: 'border border-accent-300 text-accent-700 hover:bg-accent-50 hover:text-accent-800',
      ghost: 'text-primary-700 hover:bg-accent-50 hover:text-accent-700'
    },

    card: {
      default: 'bg-white rounded-md shadow-sharp hover:shadow-sharpMd transition-all duration-200 border border-neutral-200',
      feature: 'group text-center p-8 bg-white rounded-lg shadow-sharp hover:shadow-sharpMd transition-all duration-200',
      product: 'group bg-white rounded-md shadow-sharp overflow-hidden hover:shadow-sharpMd transition-all duration-200 border border-neutral-200'
    },

    input: {
      default: 'w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-accent-600 focus:border-accent-600'
    }
  }
} as const;

// CSS Custom Properties for dynamic theming
export const cssVariables = {
  '--color-primary': themeConfig.colors.primary[900],
  '--color-accent': themeConfig.colors.accent[600],
  '--color-wood': themeConfig.colors.wood[600],
  '--shadow-sharp': themeConfig.shadows.sharp,
  '--shadow-sharp-md': themeConfig.shadows.sharpMd,
  '--shadow-sharp-lg': themeConfig.shadows.sharpLg,
} as const;
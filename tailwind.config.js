/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Modern cabinet business color palette
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
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
        // Cabinet-specific colors
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
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'elegant': '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'elegant-lg': '0 20px 40px -10px rgba(0, 0, 0, 0.15), 0 10px 20px -5px rgba(0, 0, 0, 0.08)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'cabinet-hero': 'linear-gradient(135deg, #2d3339 0%, #475058 100%)',
      },
    },
  },
  plugins: [],
}
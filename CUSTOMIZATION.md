# Cabinet Website Customization Guide

This guide explains how to easily customize your cabinet website by modifying configuration files.

## 📁 Configuration Files

All customizable settings are located in `/src/config/` directory:

### 🏢 Business Information (`/src/config/business.ts`)

**Company Details:**
```typescript
name: 'Burnsville Cabinets',           // Company name
tagline: 'Premium Kitchen Cabinets...',  // Company tagline
description: 'Premium kitchen cabinets...' // Company description
```

**Contact Information:**
```typescript
contact: {
  phone: '(952) 555-0123',
  email: 'info@burnsvillecabinets.com',
  emergencyPhone: '(952) 555-0199',
  emergencyEmail: 'emergency@burnsvillecabinets.com'
}
```

**Address & Location:**
```typescript
address: {
  street: '123 Main Street',
  city: 'Burnsville',
  state: 'MN',
  zipCode: '55337',
  country: 'US',
  fullAddress: '123 Main Street, Burnsville, MN 55337',
  coordinates: { latitude: '44.7608', longitude: '-93.2775' }
}
```

**Business Hours:**
```typescript
hours: {
  monday: '8:00 AM - 6:00 PM',
  // ... other days
  weekdays: 'Mon-Fri: 8AM-6PM',
  weekend: 'Saturday: 9AM-4PM'
}
```

**Social Media Links:**
```typescript
socialMedia: {
  facebook: 'https://www.facebook.com/burnsvillecabinets',
  instagram: 'https://www.instagram.com/burnsvillecabinets',
  twitter: 'https://www.twitter.com/burnsvillecabinets',
  // Add more as needed
}
```

**Service Areas:**
```typescript
serviceAreas: [
  'Burnsville', 'Minneapolis', 'Saint Paul',
  'Bloomington', 'Eagan', 'Apple Valley'
  // Add your service cities
]
```

### 🧭 Navigation (`/src/config/navigation.ts`)

**Main Navigation:**
```typescript
mainNav: [
  { path: '/', label: 'Home', description: 'Welcome page' },
  { path: '/shop', label: 'Shop', description: 'Browse cabinets' },
  // Modify labels or add new pages
]
```

**Call-to-Action Buttons:**
```typescript
cta: {
  primary: { label: 'Get Quote', path: '/contact' },
  consultation: { label: 'Book Free Design Consult', path: '/contact' }
  // Customize button text and destinations
}
```

### 📝 Content (`/src/config/content.ts`)

**Hero Section:**
```typescript
hero: {
  headline: 'Custom Kitchen',
  subHeadline: 'Cabinets',
  location: 'Made in Burnsville',
  description: 'Delivered & installed in 4-6 weeks...'
}
```

**Page Titles:**
```typescript
pages: {
  home: { title: 'Premium Kitchen Cabinets...', description: '...' },
  shop: { title: 'Kitchen Cabinets', description: '...' }
  // Customize all page titles and descriptions
}
```

**Process Steps:**
```typescript
process: [
  { step: 1, title: 'Measure', description: 'Free in-home consultation...' },
  // Modify your business process steps
]
```

### 🎨 Theme (`/src/config/theme.ts`)

**Colors:**
```typescript
colors: {
  primary: { 50: '#f8f9fb', ..., 950: '#2d3339' },  // Gray tones
  accent: { 50: '#fef7ee', ..., 950: '#41160a' },   // Orange tones
  wood: { 50: '#fdfcf9', ..., 950: '#3f2f22' }      // Wood tones
}
```

**Component Styles:**
```typescript
components: {
  button: {
    primary: 'bg-accent-600 text-white hover:bg-accent-700...',
    secondary: 'bg-primary-950 text-white hover:bg-primary-800...'
  }
}
```

## 🔧 Quick Customization Steps

### 1. Change Company Information
Edit `/src/config/business.ts`:
- Update `name`, `contact`, `address`
- Modify `socialMedia` URLs
- Adjust `serviceAreas` for your location

### 2. Update Content
Edit `/src/config/content.ts`:
- Change hero headline and description
- Modify page titles and descriptions
- Update process steps for your workflow

### 3. Customize Navigation
Edit `/src/config/navigation.ts`:
- Add/remove navigation items
- Change button labels
- Modify call-to-action text

### 4. Adjust Colors & Styling
Edit `/src/config/theme.ts`:
- Modify color palettes
- Adjust component styles
- Change typography settings

### 5. Update Products
Edit `/src/data/products.ts`:
- Add your cabinet products
- Update pricing and descriptions
- Modify product categories

## 🚀 Advanced Customization

### Custom Color Scheme
1. Generate new color palette using tools like [Tailwind Color Generator](https://uicolors.app)
2. Replace color values in `/src/config/theme.ts`
3. Colors automatically apply throughout the site

### SEO & Meta Tags
Update website information in `/src/config/business.ts`:
```typescript
website: {
  domain: 'yourcabinetsite.com',
  title: 'Your Custom Title',
  metaDescription: 'Your SEO description',
  keywords: 'your, seo, keywords'
}
```

### Adding New Pages
1. Create new page component in `/src/pages/`
2. Add route to `/src/App.tsx`
3. Add navigation link to `/src/config/navigation.ts`

### Custom Components
- All components use configuration values
- Modify component styles in `/src/config/theme.ts`
- Components automatically inherit theme changes

## 📱 Responsive Design
- All customizations work across desktop, tablet, and mobile
- No additional configuration needed for responsiveness
- Colors and spacing adapt automatically

## 🔄 After Making Changes
1. Save your configuration files
2. The development server will automatically reload
3. Changes appear immediately in the browser

## 💡 Tips
- **Test thoroughly** after making changes
- **Keep backups** of working configurations
- **Use consistent naming** for maintainability
- **Follow existing patterns** when adding new content

## 🛠️ Development Commands
```bash
npm run dev     # Start development server
npm run build   # Build for production
npm run lint    # Check code quality
```

---

**Need Help?** All configuration files include TypeScript types for auto-completion and error checking in your code editor.
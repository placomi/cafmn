// Main configuration exports
export { businessConfig } from './business';
export { navigationConfig } from './navigation';
export { contentConfig } from './content';
export { themeConfig, cssVariables } from './theme';

// Re-export types for convenience
export type { NavItem } from './navigation';

// Import all configs for combined export
import { businessConfig } from './business';
import { navigationConfig } from './navigation';
import { contentConfig } from './content';
import { themeConfig } from './theme';

// Combined configuration object for easy access
export const siteConfig = {
  business: businessConfig,
  navigation: navigationConfig,
  content: contentConfig,
  theme: themeConfig,
} as const;

// Utility functions for common config access
export const getContactInfo = () => businessConfig.contact;
export const getSocialMedia = () => businessConfig.socialMedia;
export const getBusinessHours = () => businessConfig.hours;
export const getServiceAreas = () => businessConfig.serviceAreas;
export const getMainNavigation = () => navigationConfig.mainNav;
export const getCTAButtons = () => navigationConfig.cta;
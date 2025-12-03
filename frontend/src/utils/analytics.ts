
/**
 * Analytics Integration
 * Main entry point for all analytics tracking
 */

import { initializeScrollTracking, resetScrollTracking } from './scrollTracking';
import { initializePageTracking, updatePageTracking, stopPageTracking } from './pageTracking';
import { trackFormSubmission, trackButtonClick, sendGTMEvent, trackPageView, trackTimeOnPage } from './gtmUtils';

/**
 * Initialize all analytics tracking for a page
 * Call this when a page loads or navigation occurs
 */
export const initializeAnalytics = (pageTitle: string, pagePath: string): void => {
  if (typeof window === 'undefined') return;
  
  // Initialize page tracking
  initializePageTracking(pageTitle, pagePath);
  
  // Initialize scroll tracking
  initializeScrollTracking();
};

/**
 * Update analytics for navigation (SPA)
 * Call this when navigating to a new page
 */
export const updateAnalytics = (pageTitle: string, pagePath: string): void => {
  if (typeof window === 'undefined') return;
  
  // Update page tracking
  updatePageTracking(pageTitle, pagePath);
  
  // Reset scroll tracking for new page
  resetScrollTracking();
};

/**
 * Track form submissions across the site
 */
export const trackForm = (formName: string, formData: Record<string, any> = {}): void => {
  trackFormSubmission(formName, formData);
};

/**
 * Track button clicks across the site
 */
export const trackButton = (buttonName: string, buttonData: Record<string, any> = {}): void => {
  trackButtonClick(buttonName, buttonData);
};

// Re-export scroll tracking functions
export {
  initializeScrollTracking,
  resetScrollTracking
} from './scrollTracking';

// Re-export page tracking functions
export {
  initializePageTracking,
  updatePageTracking,
  stopPageTracking
} from './pageTracking';

// Re-export GTM functions
export {
  sendGTMEvent,
  trackPageView,
  trackTimeOnPage,
  trackFormSubmission,
  trackButtonClick
} from './gtmUtils';

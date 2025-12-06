/**
 * Google Tag Manager Utilities
 * Helper functions for sending custom events to GTM
 */

interface GTMEvent {
  event: string;
  [key: string]: any;
}

/**
 * Send a custom event to Google Tag Manager
 * @param eventName - The name of the event
 * @param eventData - Additional data to send with the event
 */
export const sendGTMEvent = (eventName: string, eventData: Record<string, any> = {}): void => {
  if (typeof window === 'undefined') return;
  
  // Ensure dataLayer exists
  if (!window.dataLayer) {
    window.dataLayer = [];
  }
  
  const gtmEvent: GTMEvent = {
    event: eventName,
    ...eventData
  };
  
  window.dataLayer.push(gtmEvent);
  console.log('GTM Event sent:', gtmEvent);
};

/**
 * Track page views for single-page applications
 * @param pageTitle - Title of the page
 * @param pagePath - Path of the page
 */
export const trackPageView = (pageTitle: string, pagePath: string): void => {
  sendGTMEvent('page_view', {
    page_title: pageTitle,
    page_location: window.location.href,
    page_path: pagePath
  });
};

/**
 * Track form submissions
 * @param formName - Name of the form
 * @param formData - Form data to track
 */
export const trackFormSubmission = (formName: string, formData: Record<string, any> = {}): void => {
  sendGTMEvent('form_submit', {
    form_name: formName,
    ...formData
  });
};

/**
 * Track button clicks
 * @param buttonName - Name of the button
 * @param buttonData - Additional button data
 */
export const trackButtonClick = (buttonName: string, buttonData: Record<string, any> = {}): void => {
  sendGTMEvent('button_click', {
    button_name: buttonName,
    ...buttonData
  });
};

/**
 * Track time spent on page when user leaves
 * @param timeSpent - Time spent in seconds
 */
export const trackTimeOnPage = (timeSpent: number): void => {
  sendGTMEvent('time_on_page', {
    time_spent_seconds: timeSpent,
    time_spent_minutes: Math.round(timeSpent / 60 * 100) / 100
  });
};

// Declare global dataLayer type
declare global {
  interface Window {
    dataLayer?: any[];
  }
}

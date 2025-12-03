/**
 * Analytics Provider Component
 * Initializes and manages analytics tracking across the app
 */

import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { initializeAnalytics, updateAnalytics } from 'utils/analytics';

interface Props {
  children: React.ReactNode;
}

export const AnalyticsProvider = ({ children }: Props) => {
  const location = useLocation();

  useEffect(() => {
    // Small delay to ensure Helmet has updated the document title
    const timeout = setTimeout(() => {
      // Get page title and path
      const pageTitle = document.title || 'Play Greenly';
      const pagePath = location.pathname;

      // Initialize analytics on first load
      if (location.pathname === '/' || location.pathname === '') {
        initializeAnalytics(pageTitle, pagePath);
      } else {
        // Update analytics for navigation
        updateAnalytics(pageTitle, pagePath);
      }
    }, 100); // Small delay to allow Helmet to update title

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return <>{children}</>;
};

export default AnalyticsProvider;

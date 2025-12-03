/**
 * Page Analytics Tracking
 * Tracks time on page, page views, and other page-level metrics
 */

import { trackPageView, trackTimeOnPage } from './gtmUtils';

class PageTracker {
  private startTime: number = 0;
  private currentPath: string = '';
  private isTracking: boolean = false;

  public startPageTracking(pageTitle: string, pagePath: string): void {
    // Track page view
    trackPageView(pageTitle, pagePath);
    
    // Start timing
    this.startTime = Date.now();
    this.currentPath = pagePath;
    this.isTracking = true;
    
    // Track when user leaves page
    this.setupPageLeaveTracking();
  }

  public stopPageTracking(): void {
    if (!this.isTracking) return;
    
    const timeSpent = Math.round((Date.now() - this.startTime) / 1000);
    
    if (timeSpent > 0) {
      trackTimeOnPage(timeSpent);
    }
    
    this.isTracking = false;
  }

  private setupPageLeaveTracking(): void {
    // Track when user leaves page or closes tab
    const handlePageLeave = () => {
      this.stopPageTracking();
    };

    // Track various page leave events
    window.addEventListener('beforeunload', handlePageLeave);
    window.addEventListener('pagehide', handlePageLeave);
    
    // Track when page becomes hidden (tab switch, minimize, etc.)
    document.addEventListener('visibilitychange', () => {
      if (document.hidden && this.isTracking) {
        this.stopPageTracking();
      }
    });
  }

  public updatePage(pageTitle: string, pagePath: string): void {
    // Stop tracking current page
    this.stopPageTracking();
    
    // Start tracking new page
    setTimeout(() => {
      this.startPageTracking(pageTitle, pagePath);
    }, 100);
  }
}

// Global page tracker instance
let pageTracker: PageTracker | null = null;

// Initialize page tracking
export const initializePageTracking = (pageTitle: string, pagePath: string): void => {
  if (typeof window === 'undefined') return;
  
  if (!pageTracker) {
    pageTracker = new PageTracker();
  }
  
  pageTracker.startPageTracking(pageTitle, pagePath);
};

// Update page tracking for navigation
export const updatePageTracking = (pageTitle: string, pagePath: string): void => {
  if (pageTracker) {
    pageTracker.updatePage(pageTitle, pagePath);
  }
};

// Stop page tracking
export const stopPageTracking = (): void => {
  if (pageTracker) {
    pageTracker.stopPageTracking();
  }
};

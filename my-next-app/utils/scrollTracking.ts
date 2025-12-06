/**
 * Scroll Depth Tracking for Google Tag Manager
 * Tracks scroll depth from 1% to 100% and sends events to GTM dataLayer
 */

interface ScrollEvent {
  event: string;
  scroll_depth: number;
  page_url: string;
  page_title: string;
}

class ScrollDepthTracker {
  private trackedDepths: Set<number> = new Set();
  private isTracking: boolean = false;
  private throttleTimeout: number | null = null;

  constructor() {
    this.handleScroll = this.handleScroll.bind(this);
  }

  public startTracking(): void {
    if (this.isTracking) return;
    
    this.isTracking = true;
    this.trackedDepths.clear();
    
    // Add scroll event listener with passive option for better performance
    window.addEventListener('scroll', this.handleScroll, { passive: true });
    
    // Track initial state (0% if at top)
    this.checkScrollDepth();
  }

  public stopTracking(): void {
    if (!this.isTracking) return;
    
    this.isTracking = false;
    window.removeEventListener('scroll', this.handleScroll);
    
    if (this.throttleTimeout) {
      clearTimeout(this.throttleTimeout);
      this.throttleTimeout = null;
    }
  }

  private handleScroll(): void {
    // Throttle scroll events for better performance
    if (this.throttleTimeout) return;
    
    this.throttleTimeout = window.setTimeout(() => {
      this.checkScrollDepth();
      this.throttleTimeout = null;
    }, 100); // Check every 100ms
  }

  private checkScrollDepth(): void {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    
    // Handle edge case where page is shorter than viewport
    if (documentHeight <= 0) {
      this.sendScrollEvent(100);
      return;
    }
    
    const scrollPercentage = Math.round((scrollTop / documentHeight) * 100);
    const clampedPercentage = Math.max(0, Math.min(100, scrollPercentage));
    
    // Track every percentage from 1% to 100%
    for (let i = 1; i <= clampedPercentage; i++) {
      if (!this.trackedDepths.has(i)) {
        this.trackedDepths.add(i);
        this.sendScrollEvent(i);
      }
    }
  }

  private sendScrollEvent(depth: number): void {
    // Ensure dataLayer exists
    if (typeof window !== 'undefined' && !window.dataLayer) {
      window.dataLayer = [];
    }

    const scrollEvent: ScrollEvent = {
      event: 'scroll_depth',
      scroll_depth: depth,
      page_url: window.location.href,
      page_title: document.title
    };

    // Send to Google Tag Manager dataLayer
    window.dataLayer?.push(scrollEvent);
    
    // Optional: Log for debugging (remove in production if needed)
    console.log(`Scroll depth: ${depth}%`, scrollEvent);
  }

  public resetTracking(): void {
    this.trackedDepths.clear();
    this.checkScrollDepth();
  }
}

// Global scroll tracker instance
let scrollTracker: ScrollDepthTracker | null = null;

// Initialize scroll tracking
export const initializeScrollTracking = (): void => {
  if (typeof window === 'undefined') return;
  
  if (!scrollTracker) {
    scrollTracker = new ScrollDepthTracker();
  }
  
  scrollTracker.startTracking();
};

// Stop scroll tracking
export const stopScrollTracking = (): void => {
  if (scrollTracker) {
    scrollTracker.stopTracking();
  }
};

// Reset tracking for new page
export const resetScrollTracking = (): void => {
  if (scrollTracker) {
    scrollTracker.resetTracking();
  }
};

// Declare global dataLayer type
declare global {
  interface Window {
    dataLayer?: any[];
  }
}


import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from 'sonner';
import { AnalyticsProvider } from 'components/AnalyticsProvider';
import { API_URL } from 'app';

interface Props {
  children: React.ReactNode;
}

/**
 * App-level providers for any global state management, context, etc.
 * This component wraps the entire app and can be used to provide
 * firebase auth, zustand stores, react-query etc.
 *
 * Note: ThemeProvider is already included in AppWrapper.tsx and does not need to be added here.
 */
export const AppProvider = ({ children }: Props) => {
  // Force override platform favicon using DOM manipulation with proper favicon formats
  React.useEffect(() => {
    // Remove any existing favicons with a more aggressive approach
    const removeExistingFavicons = () => {
      const selectors = [
        'link[rel="icon"]',
        'link[rel="shortcut icon"]', 
        'link[rel="apple-touch-icon"]',
        'link[rel*="icon"]'
      ];
      
      selectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
          console.log('Removing existing favicon:', el.href);
          el.remove();
        });
      });
    };
    
    // Force delay to ensure DOM is ready
    const injectFavicon = () => {
      removeExistingFavicons();
      
      // Create proper favicon elements using API endpoints
      const favicon = document.createElement('link');
      favicon.rel = 'icon';
      favicon.type = 'image/x-icon';
      favicon.href = `${API_URL}/favicon.ico`;
      
      const shortcutIcon = document.createElement('link');
      shortcutIcon.rel = 'shortcut icon';
      shortcutIcon.type = 'image/x-icon';
      shortcutIcon.href = `${API_URL}/favicon.ico`;
      
      // Add multiple PNG sizes for better compatibility
      const favicon32 = document.createElement('link');
      favicon32.rel = 'icon';
      favicon32.type = 'image/png';
      favicon32.sizes = '32x32';
      favicon32.href = `${API_URL}/favicon-32x32.png`;
      
      const favicon16 = document.createElement('link');
      favicon16.rel = 'icon';
      favicon16.type = 'image/png';
      favicon16.sizes = '16x16';
      favicon16.href = `${API_URL}/favicon-16x16.png`;
      
      // Also add apple-touch-icon for better mobile support
      const appleTouchIcon = document.createElement('link');
      appleTouchIcon.rel = 'apple-touch-icon';
      appleTouchIcon.sizes = '180x180';
      appleTouchIcon.href = `${API_URL}/favicon-256x256.png`;
      
      // Force inject at the very end of head
      document.head.appendChild(favicon);
      document.head.appendChild(shortcutIcon);
      document.head.appendChild(favicon32);
      document.head.appendChild(favicon16);
      document.head.appendChild(appleTouchIcon);
      
      console.log('✅ Play Greenly favicon injected successfully with proper formats');
      console.log('Favicon ICO URL:', `${API_URL}/favicon.ico`);
      console.log('New favicon elements:', document.querySelectorAll('link[rel*="icon"]'));
    };
    
    // Try multiple times to ensure it works
    injectFavicon();
    setTimeout(injectFavicon, 100);
    setTimeout(injectFavicon, 500);
    setTimeout(injectFavicon, 1000);
    
  }, []);
  
  return (
    <>
      <Helmet>
        <meta name="description" content="Shop sustainable and biodegradable sports products including eco-friendly golf balls and court marking tape. Play Greenly offers high-performance athletic gear that's kind to the planet." />
        
        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#22c55e" />
        <meta name="msapplication-TileColor" content="#22c55e" />
      </Helmet>
      <AnalyticsProvider>
        {children}
      </AnalyticsProvider>
      <Toaster position="top-right" closeButton />
    </>
  );
};

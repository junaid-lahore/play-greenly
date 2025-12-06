import type { AppProps } from 'next/app';
import '@/index.css';
import { OuterErrorBoundary } from '@/prod-components/OuterErrorBoundary';
import { ThemeProvider } from '@/internal-components/ThemeProvider';
import { DEFAULT_THEME } from '@/constants/default-theme';
import { AppProvider } from '@/components/AppProvider';

export default function PlayGreenlyApp({ Component, pageProps }: AppProps) {
  return (
    <OuterErrorBoundary>
      <ThemeProvider defaultTheme={DEFAULT_THEME}>
        <AppProvider>
          <Component {...pageProps} />
        </AppProvider>
      </ThemeProvider>
    </OuterErrorBoundary>
  );
}

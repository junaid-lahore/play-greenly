import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  webpack: (config) => {
    config.resolve.alias['react-router-dom'] = path.resolve(__dirname, 'src/lib/react-router-dom.tsx');
    config.resolve.alias['react-helmet'] = path.resolve(__dirname, 'src/lib/react-helmet.tsx');
    return config;
  },
  async rewrites() {
    return [
      { source: '/aboutus', destination: '/about-us' },
      { source: '/blog7waysgolfcoursescangogreen', destination: '/blog7ways-golf-courses-can-go-green' },
      { source: '/blogareecogolfballssafeforfishandoceans', destination: '/blog-are-eco-golf-balls-safe-for-fish-and-oceans' },
      { source: '/blogbiggestissueinsustainability', destination: '/blog-biggest-issue-in-sustainability' },
      { source: '/blogbiodegradablegolfballsecofriendlypractice', destination: '/blog-biodegradable-golf-balls-eco-friendly-practice' },
      { source: '/blogbiodegradablegolfballsmaterials', destination: '/blog-biodegradable-golf-balls-materials' },
      { source: '/blogbiodegradablevsconventional', destination: '/blog-biodegradable-vs-conventional' },
      { source: '/blogcanyouhitgolfballsintolakes', destination: '/blog-can-you-hit-golf-balls-into-lakes' },
      { source: '/blogfromteetosea', destination: '/blog-from-tee-to-sea' },
      { source: '/blogisgolfhurtingnature', destination: '/blog-is-golf-hurting-nature' },
      { source: '/blogplaygreenlyvsotherecogolfballs', destination: '/blog-play-greenly-vs-other-eco-golf-balls' },
      { source: '/blogredirect', destination: '/blog-redirect' },
      { source: '/blogsportsfloormarkingtape', destination: '/blog-sports-floor-marking-tape' },
      { source: '/blogteeoffwithabiodegradablegolfball', destination: '/blog-tee-off-with-a-biodegradable-golf-ball' },
      { source: '/contactus', destination: '/contact-us' },
      { source: '/copyblog', destination: '/copy-blog' },
      { source: '/privacypolicy', destination: '/privacy-policy' }
    ];
  }
};

export default nextConfig;

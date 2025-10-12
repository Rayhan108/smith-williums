/** @type {import('next').NextConfig} */

// Read environment variables
const API_PROTOCOL = process.env.NEXT_PUBLIC_API_PROTOCOL || "http";
const API_HOST     = process.env.NEXT_PUBLIC_API_HOST     || "10.10.20.13";
const API_PORT     = process.env.NEXT_PUBLIC_API_PORT     || "5000";

// Import next-intl plugin
// eslint-disable-next-line @typescript-eslint/no-require-imports
const withNextIntl = require('next-intl/plugin')();

// Your main Next.js configuration
const nextConfig = {
  reactStrictMode: true,

  images: {
    formats: ['image/avif', 'image/webp'],

    remotePatterns: [
      // Your backend uploads (env-configurable)
      {
        protocol: API_PROTOCOL,
        hostname: API_HOST,
        port: API_PORT,
        pathname: '/uploads/**',
      },

      // Local dev fallbacks
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '5000',
        pathname: '/uploads/**',
      },
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '5000',
        pathname: '/uploads/**',
      },

      // CDNs / third-parties you already use
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'flagcdn.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'tse3.mm.bing.net',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'example.com',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: '10.10.20.41',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: '5f05bcd58f5a.ngrok-free.app',
        pathname: '/**',
      },
    ],
  },
};

// ✅ Export with next-intl plugin
module.exports = withNextIntl(nextConfig);

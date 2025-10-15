/** @type {import('next').NextConfig} */
import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const API_PROTOCOL = (process.env.NEXT_PUBLIC_API_PROTOCOL as 'http' | 'https') || 'http';
const API_HOST     = process.env.NEXT_PUBLIC_API_HOST || '10.10.20.13';
const API_PORT     = process.env.NEXT_PUBLIC_API_PORT || '5000';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    formats: ['image/avif', 'image/webp'],

    remotePatterns: [
      // Dynamic backend
      {
        protocol: API_PROTOCOL,
        hostname: API_HOST,
        port: API_PORT,
        pathname: '/uploads/**',
      },

      // Local dev
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

    ],
  },
};
 
export default withNextIntl(nextConfig);
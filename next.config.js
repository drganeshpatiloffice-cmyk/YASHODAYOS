/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
    formats: ['image/avif', 'image/webp'],
  },
  swcMinify: true,
  experimental: {
    scrollRestoration: true,
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.apexypackers.com',
      },
    ],
    unoptimized: process.env.NODE_ENV === 'development',
  },
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  productionBrowserSourceMaps: false,
  swcMinify: true,
}

module.exports = nextConfig 
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.apexypackers.com',
      },
    ],
  },
  reactStrictMode: true,
}

module.exports = nextConfig 
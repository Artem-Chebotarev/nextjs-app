/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.seekpng.com'],
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig

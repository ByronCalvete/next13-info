/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  images: {
    domains: ['avatars.dicebar.com']
  },
  reactStrictMode: true
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    DATABASE_URL: process.env.DATABASE_URL,
    GOOGLE_MAP_API: process.env.GOOGLE_MAP_API,
    BASE_URL: process.env.BASE_URL,
  },
}

module.exports = nextConfig

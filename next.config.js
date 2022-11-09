

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n:{
    locales: ['en-US'],
    defaultLocale: 'en-US'
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['res.cloudinary.com'],
  },
}

module.exports = nextConfig


/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
  swcMinify: false,
};

module.exports = nextConfig;

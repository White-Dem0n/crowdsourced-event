/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['d22po4pjz3o32e.cloudfront.net', 'images.unsplash.com'],
  },
  // Allow external connections for mobile testing
  experimental: {
    externalDir: true,
  },
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/ecce-website',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig

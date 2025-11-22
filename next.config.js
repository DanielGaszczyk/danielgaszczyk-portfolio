/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/danielgaszczyk-portfolio',
  assetPrefix: '/danielgaszczyk-portfolio',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
}

module.exports = nextConfig
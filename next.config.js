/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Removed basePath and assetPrefix - using custom domain at root (danielgaszczyk.com)
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  productionBrowserSourceMaps: false,
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },
}

module.exports = nextConfig

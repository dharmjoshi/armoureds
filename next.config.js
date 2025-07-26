/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove output: 'export' for Vercel deployment
  trailingSlash: true,
  images: {
    domains: ['localhost'],
    formats: ['image/webp', 'image/avif'],
  },
  // Enable Turbopack for faster development
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
  // Optimize for faster development
  swcMinify: true,
  compiler: {
    removeConsole: false, // Keep console logs in development
  },
  webpack: (config, { dev, isServer }) => {
    if (dev) {
      // Optimize development build speed
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
        ignored: /node_modules/,
      }
      
      // Reduce bundle analysis overhead
      config.optimization = {
        ...config.optimization,
        removeAvailableModules: false,
        removeEmptyChunks: false,
        splitChunks: false,
      }
    }
    
    // Optimize Three.js and GSAP imports
    config.externals = config.externals || {}
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        os: false,
      }
    }
    
    return config
  }
}

module.exports = nextConfig

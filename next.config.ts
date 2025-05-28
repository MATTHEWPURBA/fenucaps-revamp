import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable detailed logging
  logging: {
    fetches: {
      fullUrl: true,
    },
  },  
  // Configure external image domains
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'assets.ctfassets.net',
        port: '',
        pathname: '/**',
      },
    ],
  },

  // ESLint configuration for builds - Allow builds to succeed with warnings
  eslint: {
    ignoreDuringBuilds: false, // Keep linting but allow warnings
  },
  
  // TypeScript configuration - Allow builds with warnings
  typescript: {
    ignoreBuildErrors: false, // Keep type checking but be more lenient
  },
  
  // Experimental features
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
  
  // Webpack configuration for better error handling
  webpack: (config, { dev, isServer }) => {
    // Handle build warnings more gracefully
    if (!dev && !isServer) {
      config.stats = 'errors-warnings';
    }
    return config;
  },
};

export default nextConfig;
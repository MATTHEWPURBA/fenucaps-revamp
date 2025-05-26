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
};

export default nextConfig;

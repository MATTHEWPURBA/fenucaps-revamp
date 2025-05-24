import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable detailed logging
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

export default nextConfig;

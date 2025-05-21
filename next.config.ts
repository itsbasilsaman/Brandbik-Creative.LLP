import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.resized.co',
      },
      {
        protocol: 'https',
        hostname: 'c.stocksy.com',
      },
      {
        protocol: 'https',
        hostname: 'image.freepik.com',
      },
    ],
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    
    domains: [
      'images.news9live.com',
      'wallpapercave.com',
      'm.economictimes.com',
       'clipart-library.com',
      'static.vecteezy.com',
      'wallup.net',
       // 👈 Add this one too
    ],
    
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
      {
        protocol: 'https',
        hostname: 'tse1.mm.bing.net',
      },
    ],
  },
};

export default nextConfig;

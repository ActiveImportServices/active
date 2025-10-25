import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'activecontracting.net',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'activecontracting.net',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;

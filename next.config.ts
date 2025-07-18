/*import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here /
    experimental: {
    ppr: 'incremental'
  }
};

export default nextConfig;*/



// next.config.js or next.config.ts (if you're using TypeScript)

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Remove the experimental feature to fix crash
  // experimental: {
  //   ppr: 'incremental'
  // }
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ['@uiw/react-md-editor'],
  eslint: {
    // Disable ESLint during builds for deployment
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Disable TypeScript errors during builds for deployment
    ignoreBuildErrors: true,
  },
};

export default nextConfig;

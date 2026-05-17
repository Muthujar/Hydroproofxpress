import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    /** Avoid picking up a sibling lockfile when the repo lives under another workspace folder */
    root: process.cwd(),
  },
  experimental: {
    /** Tree-shake icon imports — smaller client bundles */
    optimizePackageImports: ["lucide-react"],
  },
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

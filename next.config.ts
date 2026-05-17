import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    /** Avoid picking up a sibling lockfile when the repo lives under another workspace folder */
    root: process.cwd(),
  },
  images: {
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

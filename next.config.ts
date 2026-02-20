import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable persistent cache so Netlify does not require Blobs (force-dynamic in layout handles runtime)
  cacheMaxMemorySize: 0,
};

export default nextConfig;

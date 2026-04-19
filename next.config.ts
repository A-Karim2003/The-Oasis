import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  images: {
    qualities: [80, 100],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pfxghidskavifshmnpzc.supabase.co",
      },

      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
  },
};

export default nextConfig;

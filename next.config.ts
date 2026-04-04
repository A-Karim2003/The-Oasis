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
    ],
  },
};

export default nextConfig;

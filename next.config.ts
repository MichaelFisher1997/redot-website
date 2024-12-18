import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.redotengine.org",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

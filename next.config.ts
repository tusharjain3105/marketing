import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "**",
      },
    ],
  },
  experimental: {
    reactCompiler: true,
    ppr: true,
    dynamicIO: true,
  },
  compiler: {
    removeConsole: {
      exclude: ["error", "info", "warn"],
    },
  },
};

export default nextConfig;

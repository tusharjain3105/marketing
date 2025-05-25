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
    useLightningcss: false,
  },
  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production"
        ? {
            exclude: ["error", "info", "warn"],
          }
        : false,
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Keep file tracing within this project even when a parent folder has another lockfile.
  outputFileTracingRoot: __dirname,
};

export default nextConfig;

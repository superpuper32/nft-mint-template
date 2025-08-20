import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    WALLET_PROJECT_ID: process.env.WALLET_PROJECT_ID,
  }
};

export default nextConfig;

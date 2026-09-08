import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // fully static — deploys to Netlify/any static host as the out/ dir
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // fully static
  basePath: "/food-app-lucia", // served from GitHub Pages project path
};

export default nextConfig;

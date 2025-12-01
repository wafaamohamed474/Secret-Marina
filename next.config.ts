import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
const withNextIntl = createNextIntlPlugin();
const nextConfig: NextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: false, // prevents invalid source map errors
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "boat.computinggate.com",
        port: "",          
        pathname: "/**",   
      },
    ],
  },
};

export default withNextIntl(nextConfig);

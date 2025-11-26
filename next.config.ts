import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
const withNextIntl = createNextIntlPlugin();
const nextConfig: NextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: false, // prevents invalid source map errors
  images: {
    domains: ["boat.computinggate.com"],
  },
};

export default withNextIntl(nextConfig);

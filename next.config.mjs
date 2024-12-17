import createNextIntlPlugin from "next-intl/plugin";
import path from "path";

const withNextIntl = createNextIntlPlugin();

/** @type {import("next").NextConfig} */
const nextConfig = {
  // distDir: "build",
  reactStrictMode: true,
  i18n: {
    locales: ["en", "fr", "ar"],
    defaultLocale: "en",
  },
  localePath: path.resolve("./messages/locales"), // Path to your translation files

  images: {
    remotePatterns: [
      {
        hostname: "public",
        pathname: "/**/*",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "s3-eu-west-1.amazonaws.com",
      },
    ],
  },
};

export default withNextIntl(nextConfig);

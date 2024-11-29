import createNextIntlPlugin from "next-intl/plugin";
// import middleware from "./clerkMiddleware";
const withNextIntl = createNextIntlPlugin();

/** @type {import("next").NextConfig} */
const nextConfig = {
  distDir: "build",
  i18n: {
    locales: ["en", "fr", "ar"],
    defaultLocale: "en",           // Set the default locale to 'en' (English)
  },
  // middleware: [
  //   // await import("./clerkMiddleware"),
  //   // await import("./intlMiddleware"),
  // ],
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

// export default nextConfig;
export default withNextIntl(nextConfig);

import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import("next").NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*cloudinary.com*",
      },
    ],
  },
};

// export default nextConfig;
export default withNextIntl(nextConfig);

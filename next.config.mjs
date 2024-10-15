import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import("next").NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // { hostname: "*", pathname: "*" },
      {
        // Pattern for images from a specific domain
        protocol: "https",
        hostname: "*",
        port: "", // Specify the port if needed, or leave it empty
        pathname: "./public/**", // Use ** for wildcard matching
      },
// {
      //   protocol: "https",
      //   hostname: "res.cloudinary.com",
      // },
      // {
      //   protocol: "https",
      //   hostname: "s3-eu-west-1.amazonaws.com",
      // },
    ],
  },
};

// export default nextConfig;
export default withNextIntl(nextConfig);

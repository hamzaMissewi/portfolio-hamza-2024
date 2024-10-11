import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    // rewrites: async () => [
    //     {
    // source: '/',
    // source: '/sign-in',
    // destination: '/api/portfolios', // Adjust to your sign-in path
    // permanent: false,
    // },
    // ],
    distDir: 'build',
    reactStrictMode: true,
    pageExtensions: ["html", "jsx", "tsx", "ts"],
    images: {
        dangerouslyAllowSVG: true,
        // remotePatterns: [
        //     {protocol: "https", hostname: "*"},
        // ],
    },
};

export default withNextIntl(nextConfig);
// export default nextConfig;

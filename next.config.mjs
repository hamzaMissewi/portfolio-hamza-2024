import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/en',
                destination: '/',
                permanent: false, // 308 permanent redirect
            },
            {
                source: '/home',
                destination: '/',
                permanent: false, // 308 permanent redirect
            },
        ];
    },
    // rewrites: async () => [
    //     {
    //         source: '/api/:path*',
    //         destination: 'https://external-api.com/:path*', // Proxy requests
    //     },
    // ],
    distDir: 'build',
    reactStrictMode: true,
    pageExtensions: ["html", "jsx", "tsx", "ts"],
    images: {
        dangerouslyAllowSVG: true,
        remotePatterns: [
            {protocol: "https", hostname: "*"},
        ],
    },
};

export default withNextIntl(nextConfig);
// export default nextConfig;

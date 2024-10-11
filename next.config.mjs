import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/[language]',
                permanent: true, // 308 permanent redirect
            },
        ];
    },
    rewrites: async () => [
        {
            source: '/api/:path*',
            destination: 'https://external-api.com/:path*', // Proxy requests
        },
    ],
    distDir: 'build',
    reactStrictMode: true,
    pageExtensions: ["html", "jsx", "tsx", "ts"],
    images: {
        // dangerouslyAllowSVG: true,
        remotePatterns: [
            {protocol: "https", hostname: "*"},
        ],
    },
};

export default withNextIntl(nextConfig);
// export default nextConfig;

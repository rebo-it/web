/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/web",
    output: "export",
    reactStrictMode: true,
    images: {
        unoptimized: true
    },
    async redirects() {
        return [
            {
                source: "/",
                destination: "/web",
                basePath: false,
                permanent: false,
            },
        ];
    }
};

export default nextConfig;

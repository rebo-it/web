/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/web",
    output: "export",
    reactStrictMode: true,
    images: {
        unoptimized: true
    }
};

export default nextConfig;

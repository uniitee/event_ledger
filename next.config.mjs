/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "aceternity.com",
        pathname: "/images/products/thumbnails/**",
      },
    ],
  },
};

export default nextConfig;

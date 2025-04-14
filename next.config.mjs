/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "server",
  // Explicitly tell Next.js to treat this route as dynamic
  experimental: {
    serverComponents: true,
    appDir: true,
  },
  compiler: {
    styledComponents: true,
    emotion: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
    ],
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.s21i.faiusr.com',
      },
      {
        protocol: 'https',
        hostname: 'www.sunsightimage.com',
      },
    ],
  },
  trailingSlash: true,
};

export default nextConfig;

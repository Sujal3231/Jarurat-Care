/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // ✅ Allow production builds even if ESLint errors exist
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;

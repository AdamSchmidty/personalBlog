const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // Temporarily disabled until Contentlayer is configured
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    mdxRs: true,
  },
};

module.exports = withContentlayer(nextConfig);

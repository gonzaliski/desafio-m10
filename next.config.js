const withSvgr = require("next-plugin-svgr");

/** @type {import('next').NextConfig} */
const nextConfig = withSvgr({
  reactStrictMode: true,
  // swcMinify: true,
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  images: {
    domains: ["res.cloudinary.com", "images.asos-media.com"],
  },
});

module.exports = nextConfig;

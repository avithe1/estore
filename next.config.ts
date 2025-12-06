import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  images: {
    remotePatterns: [
      //new URL("https://fakestoreapi.com/**"),
      new URL("https://i.imgur.com/**"),
      new URL("https://m.media-amazon.com/**"),
      new URL("https://placehold.co/**"),
      new URL("https://placeimg.com/**"),
    ],
  },
};

export default nextConfig;

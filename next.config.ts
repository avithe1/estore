import type { NextConfig } from "next";
import { safeURLS } from "./lib/utils";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  images: {
    remotePatterns: safeURLS.map((url) => new URL(`${url}/**`)),
    // remotePatterns: [
    //   //new URL("https://fakestoreapi.com/**"),
    //   new URL("https://i.imgur.com/**"),
    //   new URL("https://m.media-amazon.com/**"),
    //   new URL("https://placeimg.com/**"),
    // ],
  },
};

export default nextConfig;

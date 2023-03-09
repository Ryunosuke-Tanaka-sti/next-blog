/** @type {import('next').NextConfig} */

const urlPrefix = process.env.BRANCH_NAME ? "/" + process.env.BRANCH_NAME : "";

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: urlPrefix,
  basePath: urlPrefix,
};

module.exports = nextConfig;

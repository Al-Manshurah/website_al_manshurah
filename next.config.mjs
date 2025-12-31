/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },

  // LOKAL
  //   assetPrefix: "./",
  //   assetPrefix: "/website_al_manshurah_publish/",

  // UPLOAD GITHUB
  // UPLOAD GITHUB
  basePath: process.env.GITHUB_PAGES ? "/website_al_manshurah_publish" : '',
  assetPrefix: process.env.GITHUB_PAGES ? "/website_al_manshurah_publish/" : '',
  env: {
    NEXT_PUBLIC_BASE_PATH: process.env.GITHUB_PAGES ? "/website_al_manshurah_publish" : '',
  },
};

export default nextConfig;

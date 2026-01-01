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
  // UPLOAD GITHUB (Only enable basePath if NOT on Vercel)
  basePath: (process.env.GITHUB_PAGES && !process.env.VERCEL) ? "/website_al_manshurah" : '',
  assetPrefix: (process.env.GITHUB_PAGES && !process.env.VERCEL) ? "/website_al_manshurah/" : '',
  env: {
    NEXT_PUBLIC_BASE_PATH: (process.env.GITHUB_PAGES && !process.env.VERCEL) ? "/website_al_manshurah" : '',
  },
};

export default nextConfig;

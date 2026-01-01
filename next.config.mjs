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
    basePath:  isProd ? "/website_al_manshurah_publish":'',
    assetPrefix:  isProd ? "/website_al_manshurah_publish/":'',
};

export default nextConfig;

// src/utils/utilsStrings.js

const isProd = process.env.NODE_ENV === 'production';

export const gitRepoS = isProd ? '/website_al_manshurah_publish/' : '';
export const imgLogoS = '/assets/images/png/logo_al_manshurah.jpg';

export const apiEndPointS = isProd
  ? 'https://api.al-manshurah.or.id/api/'
  : 'http://localhost:4000/api/';

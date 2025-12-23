// src/utils/utilsStrings.js

const isProd = process.env.NODE_ENV === "production";

export const gitRepoS = isProd ? "/website_al_manshurah_publish/" : "";
export const imgLogoS = "/assets/images/png/logo_al_manshurah.jpg";

export const apiEndPointS = isProd
  ? "https://api.al-manshurah.or.id/api/"
  : "http://localhost:4000/api/";

// WhatsApp Configuration
export const WHATSAPP_NUMBER = "6281234567890"; // Format: country code + number (tanpa +)

// Helper function untuk generate WhatsApp link
export const getWhatsAppLink = (message = "") => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}${message ? `?text=${encodedMessage}` : ''}`;
};

const strings = {
  namaOrganisasi: "Yayasan Al Manshurah",
};

export default strings;
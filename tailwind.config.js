/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#01002B", // Primary (gelap, hampir hitam biru)
        secondary: "#1E1D75", // Secondary (biru tua)
        base: "#FFFFFF", // Base (putih)

        gold1: "#DEAC45", // Gradient Gold 1
        gold2: "#C48332", // Gradient Gold 2
        gold3: "#9C621A", // Gradient Gold 3

        primary1: "#010106", // Gradient Primary 1
        primary2: "#1E1D75", // Gradient Primary 2
        primary3: "#3331C4", // Gradient Primary 3

        accent1: "#5E17EB", // Accent 1 (ungu)
        accent2: "#38B6FF", // Accent 2 (cyan)
        accent3: "#FFFFFF", // Accent 3 (abu-abu terang)
      },
      backgroundImage: {
        "gradient-gold": "linear-gradient(90deg, #DEAC45, #C48332, #9C621A)",
        "gradient-primary": "linear-gradient(90deg, #010106, #1E1D75, #3331C4)",
        "gradient-overlay":
          "linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.9))",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        kufam: ["Kufam", "sans-serif"],
      },
    },
  },
  plugins: [],
};

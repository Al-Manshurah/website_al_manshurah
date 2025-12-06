// ⛔️ JANGAN import komponen client di sini
import { Inter, Kufam, Lora } from "next/font/google";
import "./styles/globals.css";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const kufam = Kufam({
  subsets: ["latin"],
  variable: "--font-kufam",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

export const metadata = {
  title: "Yayasan Al Manshurah",
  description: "Website resmi Yayasan Pendidikan Islam Al Manshurah",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body
        className={`${inter.variable} ${kufam.variable} ${lora.variable} font-sans bg-white text-gray-800`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}

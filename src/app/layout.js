// ⛔️ JANGAN import komponen client di sini
import "./styles/globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Yayasan Al Manshurah",
  description: "Website resmi Yayasan Pendidikan Islam Al Manshurah",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="font-sans bg-white text-gray-800">
        {children}
        <Footer />
      </body>
    </html>
  );
}

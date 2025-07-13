// ⛔️ JANGAN import komponen client di sini
import "./globals.css";

export const metadata = {
  title: "Yayasan Al Manshurah",
  description: "Website resmi Yayasan Pendidikan Islam Al Manshurah",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="font-sans bg-white text-gray-800">
        {children}
        <footer className="bg-gray-100 text-center p-4 text-sm text-gray-500 mt-10">
          &copy; 2025 Yayasan Al Manshurah
        </footer>
      </body>
    </html>
  );
}

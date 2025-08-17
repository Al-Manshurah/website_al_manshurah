// ⛔️ JANGAN import komponen client di sini
import "./styles/globals.css";

export const metadata = {
  title: "Yayasan Al Manshurah",
  description: "Website resmi Yayasan Pendidikan Islam Al Manshurah",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="font-sans bg-white text-gray-800">
        {children}
        <footer className="bg-green-950 text-center py-32 px-4 text-sm text-white/30 mt-10">
          &copy; 2025 Yayasan Al Manshurah
        </footer>
      </body>
    </html>
  );
}

"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";

export default function Ceramah() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedType, setSelectedType] = useState("all");

  const categories = [
    { id: "all", name: "Semua Topik", icon: "📚" },
    { id: "aqidah", name: "Aqidah", icon: "🕌" },
    { id: "fiqh", name: "Fiqh", icon: "⚖️" },
    { id: "akhlaq", name: "Akhlaq", icon: "💎" },
    { id: "sirah", name: "Sirah", icon: "📜" },
    { id: "motivasi", name: "Motivasi", icon: "🌟" },
  ];

  const types = [
    { id: "all", name: "Semua Format", icon: "🎬" },
    { id: "video", name: "Video", icon: "📹" },
    { id: "audio", name: "Audio", icon: "🎵" },
  ];

  const ceramahData = [
    {
      id: 1,
      judul: "Keutamaan Menuntut Ilmu",
      penceramah: "Ustadz Ahmad Abdullah",
      kategori: "aqidah",
      tipe: "video",
      durasi: "45:30",
      tanggal: "15 Desember 2024",
      views: "1.2K",
      deskripsi: "Menjelaskan pentingnya menuntut ilmu dalam Islam dan keutamaannya menurut Al-Qur'an dan Hadits",
      thumbnail: "🎓",
    },
    {
      id: 2,
      judul: "Adab Bergaul dalam Islam",
      penceramah: "Ustadz Muhammad Hasan",
      kategori: "akhlaq",
      tipe: "video",
      durasi: "38:15",
      tanggal: "12 Desember 2024",
      views: "856",
      deskripsi: "Pembahasan tentang etika dan adab bergaul sesama muslim dalam kehidupan sehari-hari",
      thumbnail: "🤝",
    },
    {
      id: 3,
      judul: "Fiqh Puasa Sunnah",
      penceramah: "Ustadz Ali Zainal",
      kategori: "fiqh",
      tipe: "audio",
      durasi: "52:20",
      tanggal: "10 Desember 2024",
      views: "654",
      deskripsi: "Penjelasan lengkap tentang hukum dan tata cara puasa sunnah (Senin-Kamis, Ayyamul Bidh, dll)",
      thumbnail: "🌙",
    },
    {
      id: 4,
      judul: "Kisah Perjuangan Nabi Muhammad ﷺ",
      penceramah: "Ustadz Ibrahim As-Syafi'i",
      kategori: "sirah",
      tipe: "video",
      durasi: "1:15:45",
      tanggal: "8 Desember 2024",
      views: "2.1K",
      deskripsi: "Meneladani perjuangan Rasulullah ﷺ dalam menyebarkan agama Islam",
      thumbnail: "⭐",
    },
    {
      id: 5,
      judul: "Bangkit dari Keterpurukan",
      penceramah: "Ustadz Ahmad Abdullah",
      kategori: "motivasi",
      tipe: "video",
      durasi: "42:30",
      tanggal: "5 Desember 2024",
      views: "3.5K",
      deskripsi: "Motivasi islami untuk bangkit dari masalah dan cobaan hidup",
      thumbnail: "💪",
    },
    {
      id: 6,
      judul: "Tata Cara Shalat yang Benar",
      penceramah: "Ustadz Muhammad Hasan",
      kategori: "fiqh",
      tipe: "video",
      durasi: "55:10",
      tanggal: "1 Desember 2024",
      views: "1.8K",
      deskripsi: "Panduan lengkap tata cara shalat yang sesuai dengan sunnah Rasulullah ﷺ",
      thumbnail: "🕋",
    },
    {
      id: 7,
      judul: "Mengenal Asmaul Husna",
      penceramah: "Ustadz Ali Zainal",
      kategori: "aqidah",
      tipe: "audio",
      durasi: "48:25",
      tanggal: "28 November 2024",
      views: "892",
      deskripsi: "Penjelasan makna dan hikmah dari 99 nama-nama Allah yang indah",
      thumbnail: "✨",
    },
    {
      id: 8,
      judul: "Sabar dalam Menghadapi Ujian",
      penceramah: "Ustadz Ibrahim As-Syafi'i",
      kategori: "akhlaq",
      tipe: "audio",
      durasi: "36:50",
      tanggal: "25 November 2024",
      views: "1.1K",
      deskripsi: "Bagaimana bersikap sabar dan tawakal dalam menghadapi cobaan hidup",
      thumbnail: "🌈",
    },
  ];

  const filteredCeramah = ceramahData.filter((item) => {
    const matchCategory = selectedCategory === "all" || item.kategori === selectedCategory;
    const matchType = selectedType === "all" || item.tipe === selectedType;
    return matchCategory && matchType;
  });

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-white via-orange-50 to-red-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 text-white !pt-16 !pb-24">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-300 rounded-full blur-3xl animate-pulse"></div>
          </div>

          <div className="relative max-w-6xl mx-auto px-6">
            <div className="text-center">
              <div className="inline-block mb-4 px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                <span className="text-sm font-semibold tracking-wide uppercase">Koleksi Ceramah</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 fKufam">
                Ceramah & Kajian
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Kumpulan video dan audio ceramah dari para ustadz untuk menambah ilmu dan memperkuat iman
              </p>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" />
            </svg>
          </div>
        </section>

        {/* Filters */}
        <section className="!py-8 sticky top-0 z-30 bg-white/90 backdrop-blur-md shadow-md">
          <div className="max-w-6xl mx-auto px-6">
            {/* Category Filter */}
            <div className="mb-4">
              <h3 className="text-sm font-semibold text-gray-600 mb-2">Kategori:</h3>
              <div className="flex gap-3 flex-wrap">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-6 py-2 rounded-xl font-semibold transition-all duration-300 text-sm ${selectedCategory === cat.id
                      ? "bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg scale-105"
                      : "bg-white text-orange-700 border-2 border-orange-200 hover:border-orange-400 hover:bg-orange-50"
                      }`}
                  >
                    <span className="mr-2">{cat.icon}</span>
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Type Filter */}
            <div>
              <h3 className="text-sm font-semibold text-gray-600 mb-2">Format:</h3>
              <div className="flex gap-3 flex-wrap">
                {types.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setSelectedType(type.id)}
                    className={`px-6 py-2 rounded-xl font-semibold transition-all duration-300 text-sm ${selectedType === type.id
                      ? "bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg scale-105"
                      : "bg-white text-orange-700 border-2 border-orange-200 hover:border-orange-400 hover:bg-orange-50"
                      }`}
                  >
                    <span className="mr-2">{type.icon}</span>
                    {type.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Ceramah Grid */}
        <section className="!py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-orange-900 mb-4 fKufam">Koleksi Ceramah</h2>
              <p className="text-gray-600">Menampilkan {filteredCeramah.length} ceramah</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCeramah.map((ceramah) => (
                <div
                  key={ceramah.id}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  {/* Thumbnail */}
                  <div className="relative bg-gradient-to-br from-orange-500 to-red-500 h-48 flex items-center justify-center">
                    <div className="text-8xl group-hover:scale-110 transition-transform duration-300">
                      {ceramah.thumbnail}
                    </div>
                    <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-lg text-sm font-semibold flex items-center gap-1">
                      {ceramah.tipe === "video" ? "📹" : "🎵"}
                      {ceramah.tipe}
                    </div>
                    <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-lg text-sm font-semibold">
                      {ceramah.durasi}
                    </div>
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform cursor-pointer">
                        <div className="text-3xl text-orange-600">▶️</div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-semibold">
                        {categories.find(c => c.id === ceramah.kategori)?.name}
                      </span>
                      <span className="text-gray-400 text-xs">•</span>
                      <span className="text-gray-500 text-xs">👁️ {ceramah.views} views</span>
                    </div>

                    <h3 className="text-xl font-bold text-orange-900 mb-2 fKufam group-hover:text-red-600 transition-colors line-clamp-2">
                      {ceramah.judul}
                    </h3>

                    <div className="flex items-center gap-2 mb-3 text-sm text-gray-600">
                      <span>👨‍🏫</span>
                      <span className="font-semibold">{ceramah.penceramah}</span>
                    </div>

                    <p className="text-gray-700 text-sm mb-4 line-clamp-2">
                      {ceramah.deskripsi}
                    </p>

                    <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-200">
                      <span>📅 {ceramah.tanggal}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredCeramah.length === 0 && (
              <div className="text-center py-20">
                <div className="text-6xl mb-4">🎬</div>
                <h3 className="text-2xl font-bold text-gray-700 mb-2">Tidak ada ceramah</h3>
                <p className="text-gray-600">Coba pilih kategori atau format lain</p>
              </div>
            )}
          </div>
        </section>

        {/* Stats & CTA */}
        <section className="!py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 fKufam">Mengapa Menonton Ceramah Kami?</h2>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300">
                <div className="text-5xl mb-4">📚</div>
                <h3 className="text-3xl font-bold mb-2 fKufam">100+</h3>
                <p className="text-white/80">Koleksi Ceramah</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300">
                <div className="text-5xl mb-4">👨‍🏫</div>
                <h3 className="text-3xl font-bold mb-2 fKufam">10+</h3>
                <p className="text-white/80">Ustadz Berpengalaman</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300">
                <div className="text-5xl mb-4">🎯</div>
                <h3 className="text-3xl font-bold mb-2 fKufam">20+</h3>
                <p className="text-white/80">Topik Pembahasan</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-3xl font-bold mb-2 fKufam">Gratis</h3>
                <p className="text-white/80">Akses Tanpa Biaya</p>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Ingin Ceramah Terbaru?</h3>
              <p className="text-white/90 mb-6">Subscribe channel kami untuk mendapatkan notifikasi ceramah terbaru</p>
              <button className="bg-white text-orange-600 px-10 py-4 rounded-xl font-bold hover:bg-yellow-300 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                Subscribe Sekarang
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

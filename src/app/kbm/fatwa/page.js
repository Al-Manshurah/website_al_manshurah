'use client';
import { useState } from 'react';
import Navigation from '@/components/Navigation';

export default function Fatwa() {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");

    const categories = [
        { id: "all", name: "Semua", icon: "📚", count: 24 },
        { id: "ibadah", name: "Ibadah", icon: "🕌", count: 8 },
        { id: "muamalah", name: "Muamalah", icon: "💼", count: 6 },
        { id: "keluarga", name: "Keluarga", icon: "👨‍👩‍👧‍👦", count: 5 },
        { id: "makanan", name: "Makanan", icon: "🍽️", count: 3 },
        { id: "lainnya", name: "Lainnya", icon: "📖", count: 2 },
    ];

    const fatwaData = [
        {
            id: 1,
            kategori: "ibadah",
            pertanyaan: "Apakah boleh shalat dengan pakaian bermotif?",
            jawaban: "Boleh shalat dengan pakaian bermotif selama pakaian tersebut menutup aurat dan tidak mengandung gambar makhluk bernyawa yang jelas. Yang dilarang adalah pakaian yang bergambar makhluk bernyawa secara utuh dan jelas.",
            ustadz: "Ustadz Ahmad Abdullah",
            tanggal: "15 Desember 2024",
            tags: ["shalat", "pakaian"],
        },
        {
            id: 2,
            kategori: "ibadah",
            pertanyaan: "Bagaimana hukum shalat berjamaah secara online/virtual?",
            jawaban: "Shalat berjamaah secara online tidak sah karena salah satu syarat shal at berjamaah adalah makmum mengikuti imam dalam satu tempat yang sama. Namun, boleh mengikuti kajian atau ceramah secara online.",
            ustadz: "Ustadz Muhammad Hasan",
            tanggal: "10 Desember 2024",
            tags: ["shalat", "teknologi", "jamaah"],
        },
        {
            id: 3,
            kategori: "muamalah",
            pertanyaan: "Apakah boleh bekerja di perusahaan yang ada unsur ribawi?",
            jawaban: "Bekerja di perusahaan yang ada unsur riba hukumnya haram jika pekerjaan tersebut berkaitan langsung dengan riba, seperti mencatat transaksi riba, menjadi kasir bank konvensional, dll. Namun jika pekerjaan tidak berkaitan langsung seperti IT, cleaning service, maka masih diperbolehkan dengan catatan harus berusaha mencari pekerjaan halal.",
            ustadz: "Ustadz Ali Zainal",
            tanggal: "8 Desember 2024",
            tags: ["muamalah", "riba", "pekerjaan"],
        },
        {
            id: 4,
            kategori: "keluarga",
            pertanyaan: "Bolehkah istri bekerja tanpa izin suami?",
            jawaban: "Istri diperbolehkan bekerja dengan beberapa syarat: 1) Tidak melalaikan kewajiban rumah tangga, 2) Pekerjaan yang halal dan tidak melanggar syariat, 3) Lebih baik dengan izin suami untuk menjaga keharmonisan rumah tangga, 4) Tidak sampai mengganggu hak suami.",
            ustadz: "Ustadz Ibrahim As-Syafi'i",
            tanggal: "5 Desember 2024",
            tags: ["keluarga", "wanita", "pekerjaan"],
        },
        {
            id: 5,
            kategori: "makanan",
            pertanyaan: "Apakah makanan bersertifikat halal MUI saja yang boleh dimakan?",
            jawaban: "Sertifikat halal MUI memberikan jaminan kehalalan produk. Namun untuk makanan yang jelas-jelas halal seperti sayur, buah, ikan, tidak wajib bersertifikat halal. Yang penting bahan-bahannya halal dan proses pembuatannya tidak mengandung atau terkontaminasi dengan yang haram.",
            ustadz: "Ustadz Ahmad Abdullah",
            tanggal: "1 Desember 2024",
            tags: ["makanan", "halal"],
        },
        {
            id: 6,
            kategori: "ibadah",
            pertanyaan: "Apakah wajib membaca qunut di shalat subuh?",
            jawaban: "Membaca qunut dalam shalat subuh adalah sunnah menurut mazhab Syafi'i. Jika tidak membaca, shalatnya tetap sah. Namun lebih afdhal jika membacanya karena mengikuti sunnah Rasulullah ﷺ.",
            ustadz: "Ustadz Muhammad Hasan",
            tanggal: "28 November 2024",
            tags: ["shalat", "qunut", "subuh"],
        },
        {
            id: 7,
            kategori: "muamalah",
            pertanyaan: "Bagaimana hukum jualan online dengan sistem dropship?",
            jawaban: "Sistem dropship diperbolehkan dengan syarat: 1) Barang yang dijual jelas spesifikasinya, 2) Penjual menjelaskan bahwa barang akan dikirim dari supplier, 3) Tidak menipu pembeli, 4) Harga yang ditentukan jelas. Ini termasuk dalam kategori wakalah (perwakilan).",
            ustadz: "Ustadz Ali Zainal",
            tanggal: "25 November 2024",
            tags: ["muamalah", "jual-beli", "online"],
        },
        {
            id: 8,
            kategori: "keluarga",
            pertanyaan: "Apakah wajib memberikan nafkah kepada orang tua?",
            jawaban: "Ya, memberikan nafkah kepada orang tua yang membutuhkan adalah wajib bagi anak yang mampu. Ini termasuk nafkah berupa makanan, pakaian, tempat tinggal, dan pengobatan. Allah Subhanahu Wa Ta'ala berfirman dalam QS. Al-Isra: 23 tentang kewajiban berbakti kepada kedua orang tua.",
            ustadz: "Ustadz Ibrahim As-Syafi'i",
            tanggal: "20 November 2024",
            tags: ["keluarga", "nafkah", "orang-tua"],
        },
    ];

    const filteredFatwa = fatwaData.filter((item) => {
        const matchCategory = selectedCategory === "all" || item.kategori === selectedCategory;
        const matchSearch = item.pertanyaan.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.jawaban.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchCategory && matchSearch;
    });

    return (
        <>
            <Navigation />
            <div className="min-h-screen bg-gradient-to-br from-white via-primary/5 to-accent1/10">
                {/* Hero Section */}
                <section className="relative overflow-hidden bg-gradient-primary text-white !pt-16 !pb-24">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent2 rounded-full blur-3xl"></div>
                    </div>

                    <div className="relative max-w-6xl mx-auto px-6">
                        <div className="text-center">
                            <div className="inline-block mb-4 px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                                <span className="text-sm font-semibold tracking-wide uppercase">Tanya Jawab Agama</span>
                            </div>
                            <h1 className="text-5xl md:text-6xl font-bold mb-6 fKufam">
                                Fatwa & Tanya Jawab
                            </h1>
                            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
                                Temukan jawaban atas pertanyaan seputar agama Islam dari para ustadz terpercaya
                            </p>

                            {/* Search Bar */}
                            <div className="max-w-2xl mx-auto">
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Cari pertanyaan atau topik..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full px-6 py-4 pr-12 rounded-xl text-gray-800 font-semibold focus:outline-none focus:ring-4 focus:ring-white/50 shadow-lg"
                                    />
                                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-2xl text-gray-400">
                                        🔍
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0">
                        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" />
                        </svg>
                    </div>
                </section>

                {/* Category Filter */}
                <section className="!py-8 sticky top-0 z-30 bg-white/90 backdrop-blur-md shadow-md">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="flex gap-3 justify-center flex-wrap">
                            {categories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setSelectedCategory(cat.id)}
                                    className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${selectedCategory === cat.id
                                        ? "bg-gradient-primary text-white shadow-lg scale-105"
                                        : "bg-white text-primary border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5"
                                        }`}
                                >
                                    <span className="mr-2">{cat.icon}</span>
                                    {cat.name}
                                    <span className="ml-2 text-sm opacity-75">({cat.count})</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Fatwa List */}
                <section className="!py-16">
                    <div className="max-w-5xl mx-auto px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-primary mb-4 fKufam">
                                {selectedCategory === "all" ? "Semua Fatwa" : categories.find(c => c.id === selectedCategory)?.name}
                            </h2>
                            <p className="text-gray-600">
                                Menampilkan {filteredFatwa.length} fatwa {searchQuery && `untuk pencarian "${searchQuery}"`}
                            </p>
                        </div>

                        <div className="space-y-6">
                            {filteredFatwa.map((item) => (
                                <div
                                    key={item.id}
                                    className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-l-4 border-primary hover:border-accent1 hover:scale-[1.01]"
                                >
                                    <div className="p-8">
                                        {/* Header */}
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="flex items-center gap-3">
                                                <div className="text-4xl">
                                                    {categories.find(c => c.id === item.kategori)?.icon}
                                                </div>
                                                <div>
                                                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold mb-2">
                                                        {categories.find(c => c.id === item.kategori)?.name}
                                                    </span>
                                                    <div className="text-sm text-gray-500">
                                                        📅 {item.tanggal} • 👨‍🏫 {item.ustadz}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Pertanyaan */}
                                        <div className="mb-4">
                                            <div className="flex items-start gap-3 mb-3">
                                                <span className="text-2xl">❓</span>
                                                <h3 className="text-2xl font-bold text-primary fKufam group-hover:text-accent1 transition-colors">
                                                    {item.pertanyaan}
                                                </h3>
                                            </div>
                                        </div>

                                        {/* Jawaban */}
                                        <div className="bg-gradient-to-br from-primary/10 to-accent1/10 rounded-xl p-6 mb-4">
                                            <div className="flex items-start gap-3">
                                                <span className="text-2xl">💡</span>
                                                <div>
                                                    <h4 className="font-bold text-primary mb-2">Jawaban:</h4>
                                                    <p className="text-gray-700 leading-relaxed">{item.jawaban}</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2">
                                            {item.tags.map((tag, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-primary/10 hover:text-primary cursor-pointer transition-colors"
                                                >
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="bg-gray-50 px-8 py-4 flex justify-between items-center border-t border-gray-200">
                                        <button className="text-primary hover:text-accent1 font-semibold flex items-center gap-2 transition-colors">
                                            <span>📤</span>
                                            Bagikan
                                        </button>
                                        <button className="text-primary hover:text-accent1 font-semibold flex items-center gap-2 transition-colors">
                                            <span>🔖</span>
                                            Simpan
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {filteredFatwa.length === 0 && (
                            <div className="text-center py-20">
                                <div className="text-6xl mb-4">🔍</div>
                                <h3 className="text-2xl font-bold text-gray-700 mb-2">Tidak ada hasil</h3>
                                <p className="text-gray-600">Coba kata kunci atau kategori lain</p>
                            </div>
                        )}
                    </div>
                </section>

                {/* Ask Question CTA */}
                <section className="!py-16 bg-gradient-primary text-white">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <div className="text-6xl mb-6">💬</div>
                        <h2 className="text-4xl font-bold mb-6 fKufam">Punya Pertanyaan?</h2>
                        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                            Kirimkan pertanyaan Anda seputar agama Islam dan dapatkan jawaban dari ustadz terpercaya
                        </p>

                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
                            <h3 className="text-xl font-bold mb-4">Cara Mengirim Pertanyaan:</h3>
                            <div className="grid md:grid-cols-3 gap-6 text-left">
                                <div>
                                    <div className="text-4xl mb-2">📝</div>
                                    <h4 className="font-bold mb-2">1. Tulis Pertanyaan</h4>
                                    <p className="text-sm text-white/80">Tulis pertanyaan dengan jelas dan lengkap</p>
                                </div>
                                <div>
                                    <div className="text-4xl mb-2">📧</div>
                                    <h4 className="font-bold mb-2">2. Kirim via Email/WA</h4>
                                    <p className="text-sm text-white/80">Kirim ke kontak yang tersedia</p>
                                </div>
                                <div>
                                    <div className="text-4xl mb-2">⏰</div>
                                    <h4 className="font-bold mb-2">3. Tunggu Jawaban</h4>
                                    <p className="text-sm text-white/80">Jawaban akan dikirim max 3 hari</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4 justify-center flex-wrap">
                            <button className="bg-white text-primary px-10 py-4 rounded-xl font-bold hover:bg-gold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                                Kirim Pertanyaan
                            </button>
                            <button className="bg-white/20 backdrop-blur-sm border-2 border-white text-white px-10 py-4 rounded-xl font-bold hover:bg-white hover:text-primary transition-all duration-300">
                                Hubungi Ustadz
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

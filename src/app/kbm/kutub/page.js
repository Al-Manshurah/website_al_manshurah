"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";

export default function Kutub() {
    const [selectedCategory, setSelectedCategory] = useState("all");

    const categories = [
        { id: "all", name: "Semua Kitab", icon: "📚" },
        { id: "tafsir", name: "Tafsir", icon: "📖" },
        { id: "hadits", name: "Hadits", icon: "📜" },
        { id: "fiqh", name: "Fiqh", icon: "⚖️" },
        { id: "aqidah", name: "Aqidah", icon: "🕌" },
        { id: "akhlaq", name: "Akhlaq", icon: "💎" },
    ];

    const kitabData = [
        {
            judul: "Tafsir Ibnu Katsir",
            pengarang: "Ibnu Katsir",
            kategori: "tafsir",
            deskripsi: "Salah satu tafsir terlengkap dan paling dipercaya dalam memahami Al-Qur'an",
            jilid: "10 Jilid",
            bahasa: "Arab & Terjemahan",
            status: "Tersedia",
        },
        {
            judul: "Shahih Bukhari",
            pengarang: "Imam Bukhari",
            kategori: "hadits",
            deskripsi: "Kumpulan hadits shahih yang paling otentik",
            jilid: "9 Jilid",
            bahasa: "Arab & Terjemahan",
            status: "Tersedia",
        },
        {
            judul: "Shahih Muslim",
            pengarang: "Imam Muslim",
            kategori: "hadits",
            deskripsi: "Kumpulan hadits shahih pilihan dengan sistematika tematik",
            jilid: "5 Jilid",
            bahasa: "Arab & Terjemahan",
            status: "Tersedia",
        },
        {
            judul: "Fiqhus Sunnah",
            pengarang: "Sayyid Sabiq",
            kategori: "fiqh",
            deskripsi: "Panduan praktis fiqh berdasarkan Al-Qur'an dan Sunnah",
            jilid: "3 Jilid",
            bahasa: "Arab & Terjemahan",
            status: "Tersedia",
        },
        {
            judul: "Al-Aqidah Al-Wasithiyah",
            pengarang: "Ibnu Taimiyah",
            kategori: "aqidah",
            deskripsi: "Penjelasan aqidah Ahlus Sunnah wal Jama'ah",
            jilid: "1 Jilid",
            bahasa: "Arab & Terjemahan",
            status: "Tersedia",
        },
        {
            judul: "Riyadhus Shalihin",
            pengarang: "Imam Nawawi",
            kategori: "akhlaq",
            deskripsi: "Taman orang-orang shalih berisi hadits-hadits akhlaq",
            jilid: "2 Jilid",
            bahasa: "Arab & Terjemahan",
            status: "Tersedia",
        },
        {
            judul: "Tafsir Jalalain",
            pengarang: "Jalaluddin Al-Mahalli & As-Suyuthi",
            kategori: "tafsir",
            deskripsi: "Tafsir ringkas dengan penjelasan yang mudah dipahami",
            jilid: "2 Jilid",
            bahasa: "Arab & Terjemahan",
            status: "Tersedia",
        },
        {
            judul: "Bulughul Maram",
            pengarang: "Ibnu Hajar Al-Asqalani",
            kategori: "hadits",
            deskripsi: "Kumpulan hadits hukum untuk para pencari ilmu",
            jilid: "1 Jilid",
            bahasa: "Arab & Terjemahan",
            status: "Tersedia",
        },
    ];

    const filteredKitab = selectedCategory === "all"
        ? kitabData
        : kitabData.filter(item => item.kategori === selectedCategory);

    return (
        <>
            <Navigation />
            <div className="min-h-screen bg-gradient-to-br from-white via-secondary/5 to-primary/10">
                {/* Hero Section */}
                <section className="relative overflow-hidden bg-gradient-to-r from-secondary via-primary to-secondary text-white !pt-16 !pb-24">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
                        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent2 rounded-full blur-3xl animate-pulse"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                    </div>

                    <div className="relative max-w-6xl mx-auto px-6">
                        <div className="text-center">
                            <div className="inline-block mb-4 px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                                <span className="text-sm font-semibold tracking-wide uppercase">Perpustakaan Kitab</span>
                            </div>
                            <h1 className="text-5xl md:text-6xl font-bold mb-6 fKufam">
                                Koleksi Kutub
                            </h1>
                            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                                Koleksi kitab-kitab klasik dan referensi ilmiah untuk mendalami ilmu agama Islam
                            </p>
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
                                        : "bg-white text-secondary border-2 border-secondary/20 hover:border-secondary/40 hover:bg-secondary/5"
                                        }`}
                                >
                                    <span className="mr-2">{cat.icon}</span>
                                    {cat.name}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Kitab Grid */}
                <section className="!py-16">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-secondary mb-4 fKufam">
                                {categories.find(c => c.id === selectedCategory)?.name}
                            </h2>
                            <p className="text-gray-600">
                                Menampilkan {filteredKitab.length} kitab
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredKitab.map((kitab, index) => (
                                <div
                                    key={index}
                                    className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border-t-4 border-primary"
                                >
                                    <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 text-center">
                                        <div className="text-6xl mb-4">📕</div>
                                        <div className="inline-block px-4 py-1 bg-primary text-white rounded-full text-sm font-semibold">
                                            {categories.find(c => c.id === kitab.kategori)?.name}
                                        </div>
                                    </div>

                                    <div className="p-6 space-y-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-secondary mb-2 fKufam group-hover:text-primary transition-colors">
                                                {kitab.judul}
                                            </h3>
                                            <p className="text-gray-600 text-sm italic">
                                                oleh {kitab.pengarang}
                                            </p>
                                        </div>

                                        <p className="text-gray-700 text-sm leading-relaxed">
                                            {kitab.deskripsi}
                                        </p>

                                        <div className="space-y-2 pt-4 border-t border-gray-200">
                                            <div className="flex items-center justify-between text-sm">
                                                <span className="text-gray-600">📚 Jilid:</span>
                                                <span className="font-semibold text-secondary">{kitab.jilid}</span>
                                            </div>
                                            <div className="flex items-center justify-between text-sm">
                                                <span className="text-gray-600">🌐 Bahasa:</span>
                                                <span className="font-semibold text-secondary">{kitab.bahasa}</span>
                                            </div>
                                            <div className="flex items-center justify-between text-sm">
                                                <span className="text-gray-600">✅ Status:</span>
                                                <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                                                    {kitab.status}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="flex gap-2 pt-4">
                                            <button className="flex-1 bg-primary/10 hover:bg-gradient-primary hover:text-white text-primary px-4 py-3 rounded-xl font-semibold transition-all duration-300">
                                                Detail
                                            </button>
                                            <button className="flex-1 bg-gradient-primary text-white px-4 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
                                                Pinjam
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {filteredKitab.length === 0 && (
                            <div className="text-center py-20">
                                <div className="text-6xl mb-4">📚</div>
                                <p className="text-xl text-gray-600">Tidak ada kitab dalam kategori ini</p>
                            </div>
                        )}
                    </div>
                </section>

                {/* Info Section */}
                <section className="!py-16 bg-gradient-primary text-white">
                    <div className="max-w-4xl mx-auto px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold mb-6 fKufam">Informasi Perpustakaan</h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300">
                                <div className="text-5xl mb-4">📖</div>
                                <h3 className="text-2xl font-bold mb-2 fKufam">500+</h3>
                                <p className="text-white/80">Koleksi Kitab</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300">
                                <div className="text-5xl mb-4">👥</div>
                                <h3 className="text-2xl font-bold mb-2 fKufam">200+</h3>
                                <p className="text-white/80">Anggota Aktif</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300">
                                <div className="text-5xl mb-4">🕐</div>
                                <h3 className="text-2xl font-bold mb-2 fKufam">07:00-21:00</h3>
                                <p className="text-white/80">Jam Operasional</p>
                            </div>
                        </div>

                        <div className="mt-12 text-center">
                            <button className="bg-white text-primary px-10 py-4 rounded-xl font-bold text-lg hover:bg-accent2 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                                Daftar Keanggotaan
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

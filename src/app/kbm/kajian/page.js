"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";

export default function Kajian() {
    const [activeTab, setActiveTab] = useState("jadwal");

    const jadwalData = [
        {
            hari: "Senin",
            waktu: "19:30 - 21:00",
            materi: "Kajian Tafsir Al-Qur'an",
            pengajar: "Ustadz Ahmad",
            tempat: "Masjid Al-Manshurah",
        },
        {
            hari: "Selasa",
            waktu: "20:00 - 21:30",
            materi: "Fiqh Ibadah",
            pengajar: "Ustadz Muhammad",
            tempat: "Ruang Kajian Utama",
        },
        {
            hari: "Rabu",
            waktu: "19:00 - 20:30",
            materi: "Hadits & Sirah",
            pengajar: "Ustadz Abdullah",
            tempat: "Masjid Al-Manshurah",
        },
        {
            hari: "Kamis",
            waktu: "19:30 - 21:00",
            materi: "Aqidah Islam",
            pengajar: "Ustadz Ali",
            tempat: "Ruang Kajian Utama",
        },
        {
            hari: "Jum'at",
            waktu: "20:00 - 21:30",
            materi: "Kajian Kitab Kuning",
            pengajar: "Ustadz Hasan",
            tempat: "Masjid Al-Manshurah",
        },
    ];

    const kajianKhususData = [
        {
            judul: "Kajian Bulanan - Tafsir Intensive",
            tanggal: "Setiap Minggu Pertama",
            waktu: "08:00 - 12:00",
            pengajar: "Tim Pengajar Al-Manshurah",
            deskripsi: "Kajian mendalam tentang tafsir Al-Qur'an dengan pendekatan kontekstual",
        },
        {
            judul: "Daurah Fiqh Wanita",
            tanggal: "Setiap Minggu Kedua",
            waktu: "09:00 - 11:00",
            pengajar: "Ustadzah Fatimah",
            deskripsi: "Khusus untuk muslimah membahas fiqh seputar wanita",
        },
        {
            judul: "Halaqah Pemuda",
            tanggal: "Setiap Sabtu",
            waktu: "16:00 - 18:00",
            pengajar: "Ustadz Ibrahim",
            deskripsi: "Kajian interaktif untuk pemuda dengan tema kekinian",
        },
    ];

    return (
        <>
            <Navigation />
            <div className="min-h-screen bg-gradient-to-br from-white via-primary/5 to-accent2/10">
                {/* Hero Section */}
                <section className="relative overflow-hidden bg-gradient-primary text-white !pt-16 !pb-24">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent2 rounded-full blur-3xl"></div>
                    </div>

                    <div className="relative max-w-6xl mx-auto px-6">
                        <div className="text-center">
                            <div className="inline-block mb-4 px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                                <span className="text-sm font-semibold tracking-wide uppercase">Kajian & Jadwal</span>
                            </div>
                            <h1 className="text-5xl md:text-6xl font-bold mb-6 fKufam">
                                Jadwal Kajian Rutin
                            </h1>
                            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                                Bergabunglah dengan kajian-kajian rutin kami untuk menambah ilmu dan memperkuat iman
                            </p>
                        </div>
                    </div>

                    {/* Decorative Wave */}
                    <div className="absolute bottom-0 left-0 right-0">
                        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" />
                        </svg>
                    </div>
                </section>

                {/* Tab Navigation */}
                <section className="!py-8 sticky top-0 z-30 bg-white/80 backdrop-blur-md shadow-md">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="flex gap-4 justify-center flex-wrap">
                            <button
                                onClick={() => setActiveTab("jadwal")}
                                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${activeTab === "jadwal"
                                    ? "bg-gradient-primary text-white shadow-lg scale-105"
                                    : "bg-white text-primary border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5"
                                    }`}
                            >
                                📅 Jadwal Rutin
                            </button>
                            <button
                                onClick={() => setActiveTab("khusus")}
                                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${activeTab === "khusus"
                                    ? "bg-gradient-primary text-white shadow-lg scale-105"
                                    : "bg-white text-primary border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5"
                                    }`}
                            >
                                ⭐ Kajian Khusus
                            </button>
                        </div>
                    </div>
                </section>

                {/* Content Section */}
                <section className="!py-16">
                    <div className="max-w-6xl mx-auto px-6">
                        {activeTab === "jadwal" ? (
                            <div className="space-y-6">
                                <div className="text-center mb-12">
                                    <h2 className="text-4xl font-bold text-secondary mb-4 fKufam">Jadwal Kajian Mingguan</h2>
                                    <p className="text-gray-600">Kajian rutin yang diadakan setiap minggu</p>
                                </div>

                                <div className="grid gap-6">
                                    {jadwalData.map((item, index) => (
                                        <div
                                            key={index}
                                            className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-primary hover:scale-[1.02] hover:border-accent2"
                                        >
                                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                                <div className="flex items-center gap-6">
                                                    <div className="bg-gradient-primary text-white rounded-xl px-6 py-4 text-center min-w-[120px] group-hover:scale-110 transition-transform duration-300">
                                                        <div className="text-2xl font-bold fKufam">{item.hari}</div>
                                                        <div className="text-sm opacity-90">{item.waktu}</div>
                                                    </div>

                                                    <div>
                                                        <h3 className="text-2xl font-bold text-secondary mb-2 fKufam">{item.materi} - {item.pengajar}</h3>
                                                        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-gray-600">
                                                            <span className="flex items-center gap-2">
                                                                📍 {item.tempat}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <button className="bg-primary/10 hover:bg-gradient-primary hover:text-white text-primary px-6 py-3 rounded-xl font-semibold transition-all duration-300 whitespace-nowrap">
                                                    Selengkapnya
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <div className="space-y-6">
                                <div className="text-center mb-12">
                                    <h2 className="text-4xl font-bold text-secondary mb-4 fKufam">Kajian Khusus</h2>
                                    <p className="text-gray-600">Program kajian spesial dengan tema tertentu</p>
                                </div>

                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {kajianKhususData.map((item, index) => (
                                        <div
                                            key={index}
                                            className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                                        >
                                            <div className="bg-gradient-primary text-white p-6">
                                                <div className="text-4xl mb-4">📚</div>
                                                <h3 className="text-xl font-bold fKufam mb-2">{item.judul}</h3>
                                            </div>

                                            <div className="p-6 space-y-3">
                                                <div className="flex items-center gap-2 text-gray-700">
                                                    <span className="text-xl">📅</span>
                                                    <span>{item.tanggal}</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-gray-700">
                                                    <span className="text-xl">⏰</span>
                                                    <span>{item.waktu}</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-gray-700">
                                                    <span className="text-xl">👨‍🏫</span>
                                                    <span className="font-semibold">{item.pengajar}</span>
                                                </div>
                                                <p className="text-gray-600 text-sm pt-3 border-t border-gray-200">
                                                    {item.deskripsi}
                                                </p>

                                                <button className="w-full mt-4 bg-primary/10 hover:bg-gradient-primary hover:text-white text-primary px-6 py-3 rounded-xl font-semibold transition-all duration-300">
                                                    Daftar Sekarang
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </section>

                {/* CTA Section */}
                <section className="!py-16 bg-gradient-primary text-white">
                    <div className="max-w-4xl mx-auto text-center px-6">
                        <h2 className="text-4xl font-bold mb-6 fKufam">Ingin Bergabung?</h2>
                        <p className="text-xl mb-8 text-white/90">
                            Daftarkan diri Anda untuk mengikuti kajian-kajian kami dan tingkatkan pemahaman agama Anda
                        </p>
                        <button className="bg-white text-primary px-10 py-4 rounded-xl font-bold text-lg hover:bg-accent2 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                            Hubungi Kami
                        </button>
                    </div>
                </section>
            </div>
        </>
    );
}

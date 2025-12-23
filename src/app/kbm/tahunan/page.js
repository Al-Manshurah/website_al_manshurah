"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";

export default function KegiatanTahunan() {
    const [selectedYear, setSelectedYear] = useState("2025");

    const kegiatanData = [
        {
            bulan: "Januari",
            kegiatan: [
                {
                    nama: "Tahun Baru Hijriyah",
                    tanggal: "7-8 Januari 2025",
                    deskripsi: "Peringatan Tahun Baru Hijriyah dengan kajian tentang hijrah Nabi Muhammad ﷺ",
                    kategori: "Kajian",
                    icon: "🌙",
                },
            ],
        },
        {
            bulan: "Februari",
            kegiatan: [
                {
                    nama: "Daurah Tahfidz Intensif",
                    tanggal: "1-14 Februari 2025",
                    deskripsi: "Program menghafal Al-Qur'an selama dua minggu dengan bimbingan intensif",
                    kategori: "Tahfidz",
                    icon: "📖",
                },
            ],
        },
        {
            bulan: "Maret",
            kegiatan: [
                {
                    nama: "Peringatan Isra Mi'raj",
                    tanggal: "27 Maret 2025",
                    deskripsi: "Peringatan Isra Mi'raj dengan ceramah dan tausiyah",
                    kategori: "Kajian",
                    icon: "✨",
                },
                {
                    nama: "Bakti Sosial Bulanan",
                    tanggal: "15 Maret 2025",
                    deskripsi: "Kegiatan sosial memberikan bantuan kepada masyarakat kurang mampu",
                    kategori: "Sosial",
                    icon: "🤝",
                },
            ],
        },
        {
            bulan: "April",
            kegiatan: [
                {
                    nama: "Ramadhan Preparation",
                    tanggal: "1-10 April 2025",
                    deskripsi: "Persiapan menyambut Ramadhan dengan kajian dan training",
                    kategori: "Kajian",
                    icon: "🌟",
                },
            ],
        },
        {
            bulan: "Mei",
            kegiatan: [
                {
                    nama: "Wisata Halaqah",
                    tanggal: "17-18 Mei 2025",
                    deskripsi: "Wisata dakwah ke berbagai tempat bersejarah Islam",
                    kategori: "Wisata",
                    icon: "🚌",
                },
            ],
        },
        {
            bulan: "Juni",
            kegiatan: [
                {
                    nama: "Pelatihan Da'i Muda",
                    tanggal: "7-9 Juni 2025",
                    deskripsi: "Pelatihan untuk mencetak da'i muda yang handal",
                    kategori: "Pelatihan",
                    icon: "🎓",
                },
            ],
        },
        {
            bulan: "Juli",
            kegiatan: [
                {
                    nama: "Santunan Anak Yatim",
                    tanggal: "12 Juli 2025",
                    deskripsi: "Program santunan dan pembinaan anak yatim",
                    kategori: "Sosial",
                    icon: "❤️",
                },
                {
                    nama: "Khitanan Massal",
                    tanggal: "20 Juli 2025",
                    deskripsi: "Khitanan gratis untuk anak-anak dari keluarga kurang mampu", kategori: "Sosial",
                    icon: "👶",
                },
            ],
        },
        {
            bulan: "Agustus",
            kegiatan: [
                {
                    nama: "Peringatan HUT RI",
                    tanggal: "17 Agustus 2025",
                    deskripsi: "Upacara dan kegiatan memperingati kemerdekaan Indonesia",
                    kategori: "Nasional",
                    icon: "🇮🇩",
                },
            ],
        },
        {
            bulan: "September",
            kegiatan: [
                {
                    nama: "Seminar Fiqih Kontemporer",
                    tanggal: "13-14 September 2025",
                    deskripsi: "Seminar membahas hukum Islam dalam konteks modern",
                    kategori: "Kajian",
                    icon: "📚",
                },
            ],
        },
        {
            bulan: "Oktober",
            kegiatan: [
                {
                    nama: "Pelatihan Manasik Haji",
                    tanggal: "18-20 Oktober 2025",
                    deskripsi: "Pelatihan tata cara ibadah haji dan umrah",
                    kategori: "Pelatihan",
                    icon: "🕋",
                },
            ],
        },
        {
            bulan: "November",
            kegiatan: [
                {
                    nama: "Muktamar Tahunan",
                    tanggal: "22-24 November 2025",
                    deskripsi: "Muktamar tahunan Al-Manshurah dengan berbagai program",
                    kategori: "Muktamar",
                    icon: "🎪",
                },
            ],
        },
        {
            bulan: "Desember",
            kegiatan: [
                {
                    nama: "Evaluasi & Perencanaan",
                    tanggal: "28-30 Desember 2025",
                    deskripsi: "Evaluasi program tahunan dan perencanaan tahun depan",
                    kategori: "Rapat",
                    icon: "📊",
                },
            ],
        },
    ];

    const kategoriColors = {
        Kajian: "bg-blue-500",
        Tahfidz: "bg-green-500",
        Sosial: "bg-pink-500",
        Wisata: "bg-purple-500",
        Pelatihan: "bg-orange-500",
        Nasional: "bg-red-500",
        Muktamar: "bg-indigo-500",
        Rapat: "bg-gray-500",
    };

    return (
        <>
            <Navigation />
            <div className="min-h-screen bg-gradient-to-br from-white via-accent2/5 to-primary/10">
                {/* Hero Section */}
                <section className="relative overflow-hidden bg-gradient-to-r from-primary via-secondary to-primary text-white !pt-16 !pb-24">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent2 rounded-full blur-3xl"></div>
                    </div>

                    <div className="relative max-w-6xl mx-auto px-6">
                        <div className="text-center">
                            <div className="inline-block mb-4 px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                                <span className="text-sm font-semibold tracking-wide uppercase">Agenda Tahunan</span>
                            </div>
                            <h1 className="text-5xl md:text-6xl font-bold mb-6 fKufam">
                                Kegiatan Tahunan
                            </h1>
                            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                                Berbagai program dan kegiatan yang rutin diadakan setiap tahun untuk kemajuan bersama
                            </p>
                        </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0">
                        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" />
                        </svg>
                    </div>
                </section>

                {/* Year Selector */}
                <section className="!py-8 sticky top-0 z-30 bg-white/90 backdrop-blur-md shadow-md">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="flex gap-4 justify-center flex-wrap">
                            {["2024", "2025", "2026"].map((year) => (
                                <button
                                    key={year}
                                    onClick={() => setSelectedYear(year)}
                                    className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${selectedYear === year
                                        ? "bg-gradient-primary text-white shadow-lg scale-105"
                                        : "bg-white text-primary border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5"
                                        }`}
                                >
                                    📅 Tahun {year}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Timeline */}
                <section className="!py-16">
                    <div className="max-w-5xl mx-auto px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-secondary mb-4 fKufam">Kalender Kegiatan {selectedYear}</h2>
                            <p className="text-gray-600">Program dan kegiatan yang telah terjadwal sepanjang tahun</p>
                        </div>

                        <div className="space-y-12">
                            {kegiatanData.map((item, monthIndex) => (
                                <div key={monthIndex} className="relative">
                                    {/* Month Header */}
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="bg-gradient-primary text-white px-8 py-4 rounded-xl shadow-lg">
                                            <div className="text-2xl font-bold fKufam">{item.bulan}</div>
                                        </div>
                                        <div className="flex-1 h-1 bg-gradient-to-r from-primary to-transparent rounded-full"></div>
                                    </div>

                                    {/* Events */}
                                    <div className="space-y-4 ml-0 md:ml-12">
                                        {item.kegiatan.map((event, eventIndex) => (
                                            <div
                                                key={eventIndex}
                                                className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-primary hover:border-accent2 hover:scale-[1.02]"
                                            >
                                                {/* Event Badge */}
                                                <div className="absolute -left-2 top-6 w-4 h-4 bg-primary rounded-full border-4 border-white group-hover:bg-accent2 transition-colors"></div>

                                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                                                    <div className="flex items-start gap-4">
                                                        <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                                                            {event.icon}
                                                        </div>

                                                        <div className="flex-1">
                                                            <div className="flex items-center gap-3 mb-2">
                                                                <h3 className="text-2xl font-bold text-secondary fKufam group-hover:text-primary transition-colors">
                                                                    {event.nama}
                                                                </h3>
                                                                <span className={`px-3 py-1 ${kategoriColors[event.kategori]} text-white rounded-full text-xs font-semibold`}>
                                                                    {event.kategori}
                                                                </span>
                                                            </div>

                                                            <div className="flex items-center gap-2 text-gray-600 mb-3">
                                                                <span className="text-lg">📅</span>
                                                                <span className="font-semibold">{event.tanggal}</span>
                                                            </div>

                                                            <p className="text-gray-700 leading-relaxed">
                                                                {event.deskripsi}
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <button className="bg-primary/10 hover:bg-gradient-primary hover:text-white text-primary px-6 py-3 rounded-xl font-semibold transition-all duration-300 whitespace-nowrap">
                                                        Detail Acara
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="!py-16 bg-gradient-primary text-white">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold mb-4 fKufam">Statistik Kegiatan</h2>
                            <p className="text-white/80">Ringkasan program tahunan kami</p>
                        </div>

                        <div className="grid md:grid-cols-4 gap-6">
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105">
                                <div className="text-5xl mb-4">📚</div>
                                <h3 className="text-3xl font-bold mb-2 fKufam">24+</h3>
                                <p className="text-white/80">Total Kegiatan</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105">
                                <div className="text-5xl mb-4">🎓</div>
                                <h3 className="text-3xl font-bold mb-2 fKufam">8</h3>
                                <p className="text-white/80">Jenis Program</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105">
                                <div className="text-5xl mb-4">👥</div>
                                <h3 className="text-3xl font-bold mb-2 fKufam">500+</h3>
                                <p className="text-white/80">Peserta</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105">
                                <div className="text-5xl mb-4">🏆</div>
                                <h3 className="text-3xl font-bold mb-2 fKufam">12</h3>
                                <p className="text-white/80">Bulan Aktif</p>
                            </div>
                        </div>

                        <div className="mt-12 text-center">
                            <button className="bg-white text-primary px-10 py-4 rounded-xl font-bold text-lg hover:bg-accent2 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                                Download Kalender Lengkap
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

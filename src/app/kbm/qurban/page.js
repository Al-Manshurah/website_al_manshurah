"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";

export default function Qurban() {
    const [selectedTab, setSelectedTab] = useState("info");

    const paketQurban = [
        {
            jenis: "Kambing Lokal",
            berat: "25-30 kg",
            harga: "Rp 2.500.000",
            deskripsi: "Kambing lokal berkualitas dengan berat standar",
            fitur: ["✅ Sehat & berenergi", "✅ Sesuai syariat", "✅ Penyembelihan profesional", "✅ Pembagian daging"],
            icon: "🐐",
            popular: false,
        },
        {
            jenis: "Kambing Premium",
            berat: "35-40 kg",
            harga: "Rp 3.500.000",
            deskripsi: "Kambing pilihan dengan kualitas terbaik",
            fitur: ["✅ Sehat & berenergi", "✅ Sesuai syariat", "✅ Berat di atas rata-rata", "✅ Penyembelihan profesional", "✅ Pembagian daging"],
            icon: "🐑",
            popular: true,
        },
        {
            jenis: "Sapi 1/7",
            berat: "300-350 kg (total)",
            harga: "Rp 3.000.000",
            deskripsi: "Berbagi 1/7 bagian sapi berkualitas",
            fitur: ["✅ Sapi sehat", "✅ Sesuai syariat", "✅ Lebih banyak daging", "✅ Penyembelihan profesional", "✅ Pembagian daging"],
            icon: "🐄",
            popular: false,
        },
    ];

    const prosedurData = [
        {
            step: "1",
            title: "Pendaftaran",
            desc: "Daftar dan pilih paket qurban yang diinginkan",
            icon: "📝",
        },
        {
            step: "2",
            title: "Pembayaran",
            desc: "Lakukan pembayaran sesuai paket yang dipilih",
            icon: "💰",
        },
        {
            step: "3",
            title: "Konfirmasi",
            desc: "Tim kami akan mengkonfirmasi pendaftaran Anda",
            icon: "✅",
        },
        {
            step: "4",
            title: "Penyembelihan",
            desc: "Penyembelihan dilakukan pada hari raya Idul Adha",
            icon: "🔪",
        },
        {
            step: "5",
            title: "Pembagian",
            desc: "Daging dibagikan kepada yang berhak menerima",
            icon: "📦",
        },
    ];

    const faqData = [
        {
            q: "Kapan batas akhir pendaftaran qurban?",
            a: "Pendaftaran ditutup H-7 sebelum Idul Adha atau hingga kuota terpenuhi.",
        },
        {
            q: "Apakah saya bisa memilih sendiri hewan qurban?",
            a: "Ya, Anda dapat melihat dan memilih hewan qurban sebelum melakukan pembayaran.",
        },
        {
            q: "Bagaimana cara pembayarannya?",
            a: "Pembayaran dapat dilakukan via transfer bank, e-wallet, atau tunai langsung ke panitia.",
        },
        {
            q: "Apakah dagingnya dibagikan?",
            a: "Ya, daging akan dibagikan kepada mustahik sesuai ketentuan syariat Islam.",
        },
    ];

    return (
        <>
            <Navigation />
            <div className="min-h-screen bg-gradient-to-br from-white via-primary/5 to-accent1/10">
                {/* Hero Section */}
                <section className="relative overflow-hidden bg-gradient-primary text-white !pt-16 !pb-24">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
                        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-300 rounded-full blur-3xl animate-pulse"></div>
                    </div>

                    <div className="relative max-w-6xl mx-auto px-6">
                        <div className="text-center">
                            <div className="inline-block mb-4 px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                                <span className="text-sm font-semibold tracking-wide uppercase">Program Ibadah Qurban</span>
                            </div>
                            <h1 className="text-5xl md:text-6xl font-bold mb-6 fKufam">
                                Qurban Berkah
                            </h1>
                            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
                                Sempurnakan ibadah qurban Anda bersama Al-Manshurah dengan hewan pilihan berkualitas
                            </p>
                            <div className="flex justify-center gap-4">
                                <button className="bg-white text-primary px-8 py-4 rounded-xl font-bold hover:bg-gold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                                    Daftar Sekarang
                                </button>
                                <button className="bg-white/20 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-primary transition-all duration-300">
                                    Lihat Paket
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0">
                        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" />
                        </svg>
                    </div>
                </section>

                {/* Tab Navigation */}
                <section className="!py-8 sticky top-0 z-30 bg-white/90 backdrop-blur-md shadow-md">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="flex gap-4 justify-center flex-wrap">
                            <button
                                onClick={() => setSelectedTab("info")}
                                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${selectedTab === "info"
                                    ? "bg-gradient-primary text-white shadow-lg scale-105"
                                    : "bg-white text-primary border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5"
                                    }`}
                            >
                                📋 Info & Paket
                            </button>
                            <button
                                onClick={() => setSelectedTab("prosedur")}
                                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${selectedTab === "prosedur"
                                    ? "bg-gradient-primary text-white shadow-lg scale-105"
                                    : "bg-white text-primary border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5"
                                    }`}
                            >
                                📝 Prosedur
                            </button>
                            <button
                                onClick={() => setSelectedTab("faq")}
                                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${selectedTab === "faq"
                                    ? "bg-gradient-primary text-white shadow-lg scale-105"
                                    : "bg-white text-primary border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5"
                                    }`}
                            >
                                ❓ FAQ
                            </button>
                        </div>
                    </div>
                </section>

                {/* Content */}
                <section className="!py-16">
                    <div className="max-w-6xl mx-auto px-6">
                        {/* Info & Paket Tab */}
                        {selectedTab === "info" && (
                            <div>
                                <div className="text-center mb-12">
                                    <h2 className="text-4xl font-bold text-primary mb-4 fKufam">Paket Qurban 1446 H</h2>
                                    <p className="text-gray-600">Pilih paket qurban sesuai kemampuan Anda</p>
                                </div>

                                <div className="grid md:grid-cols-3 gap-6 mb-16">
                                    {paketQurban.map((paket, index) => (
                                        <div
                                            key={index}
                                            className={`relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 ${paket.popular ? "ring-4 ring-accent1" : ""
                                                }`}
                                        >
                                            {paket.popular && (
                                                <div className="absolute top-4 right-4 bg-gold text-primary px-4 py-1 rounded-full text-sm font-bold z-10">
                                                    ⭐ Popular
                                                </div>
                                            )}

                                            <div className="bg-gradient-primary text-white p-8 text-center">
                                                <div className="text-6xl mb-4">{paket.icon}</div>
                                                <h3 className="text-2xl font-bold fKufam mb-2">{paket.jenis}</h3>
                                                <p className="text-white/80 text-sm mb-4">{paket.berat}</p>
                                                <div className="text-3xl font-bold">{paket.harga}</div>
                                            </div>

                                            <div className="p-6 space-y-4">
                                                <p className="text-gray-700 text-center">{paket.deskripsi}</p>

                                                <div className="space-y-2 pt-4 border-t border-gray-200">
                                                    {paket.fitur.map((fitur, idx) => (
                                                        <div key={idx} className="text-sm text-gray-700">
                                                            {fitur}
                                                        </div>
                                                    ))}
                                                </div>

                                                <button className="w-full mt-4 bg-gradient-primary text-white px-6 py-4 rounded-xl font-bold hover:shadow-lg transition-all duration-300 hover:scale-105">
                                                    Pilih Paket
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Benefits Section */}
                                <div className="bg-gradient-primary text-white rounded-3xl p-12">
                                    <h3 className="text-3xl font-bold text-center mb-8 fKufam">Mengapa Qurban di Al-Manshurah?</h3>
                                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                        <div className="text-center">
                                            <div className="text-5xl mb-4">✅</div>
                                            <h4 className="font-bold mb-2">Terpercaya</h4>
                                            <p className="text-sm text-white/80">Berpengalaman mengelola qurban sejak 2010</p>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-5xl mb-4">🐑</div>
                                            <h4 className="font-bold mb-2">Berkualitas</h4>
                                            <p className="text-sm text-white/80">Hewan sehat dan sesuai syariat</p>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-5xl mb-4">👨‍⚕️</div>
                                            <h4 className="font-bold mb-2">Profesional</h4>
                                            <p className="text-sm text-white/80">Penyembelihan oleh ahli bersertifikat</p>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-5xl mb-4">📦</div>
                                            <h4 className="font-bold mb-2">Distribusi Tepat</h4>
                                            <p className="text-sm text-white/80">Daging disalurkan ke yang berhak</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Prosedur Tab */}
                        {selectedTab === "prosedur" && (
                            <div>
                                <div className="text-center mb-12">
                                    <h2 className="text-4xl font-bold text-green-800 mb-4 fKufam">Prosedur Pendaftaran</h2>
                                    <p className="text-gray-600">Ikuti langkah-langkah berikut untuk mendaftar qurban</p>
                                </div>

                                <div className="max-w-4xl mx-auto space-y-6">
                                    {prosedurData.map((item, index) => (
                                        <div
                                            key={index}
                                            className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border-l-4 border-green-600"
                                        >
                                            <div className="flex items-start gap-6">
                                                <div className="bg-gradient-to-br from-green-600 to-green-700 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold shrink-0 group-hover:scale-110 transition-transform">
                                                    {item.step}
                                                </div>

                                                <div className="flex-1">
                                                    <div className="flex items-center gap-3 mb-2">
                                                        <span className="text-4xl">{item.icon}</span>
                                                        <h3 className="text-2xl font-bold text-green-800 fKufam">{item.title}</h3>
                                                    </div>
                                                    <p className="text-gray-700">{item.desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-12 text-center">
                                    <button className="bg-gradient-to-r from-green-600 to-green-700 text-white px-12 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                                        Mulai Pendaftaran
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* FAQ Tab */}
                        {selectedTab === "faq" && (
                            <div>
                                <div className="text-center mb-12">
                                    <h2 className="text-4xl font-bold text-green-800 mb-4 fKufam">Pertanyaan yang Sering Diajukan</h2>
                                    <p className="text-gray-600">Temukan jawaban untuk pertanyaan Anda</p>
                                </div>

                                <div className="max-w-4xl mx-auto space-y-4">
                                    {faqData.map((item, index) => (
                                        <div
                                            key={index}
                                            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                                        >
                                            <div className="flex items-start gap-4">
                                                <div className="text-3xl">❓</div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-green-800 mb-2">{item.q}</h3>
                                                    <p className="text-gray-700">{item.a}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-12 text-center bg-green-50 rounded-2xl p-8">
                                    <h3 className="text-2xl font-bold text-green-800 mb-4">Masih ada pertanyaan?</h3>
                                    <p className="text-gray-700 mb-6">Hubungi kami untuk informasi lebih lanjut</p>
                                    <button className="bg-gradient-to-r from-green-600 to-green-700 text-white px-10 py-4 rounded-xl font-bold hover:shadow-xl transition-all duration-300 hover:scale-105">
                                        Hubungi Kami
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </section>
            </div>
        </>
    );
}

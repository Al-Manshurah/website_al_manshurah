'use client';
import { useState } from 'react';
import Navigation from '@/components/Navigation';

export default function LaporanKeuanganPage() {
    const [selectedPeriod, setSelectedPeriod] = useState("2024");

    const periods = ["2024", "2023", "2022"];

    const reports = [
        {
            period: "Desember 2024",
            income: "Rp 45.000.000",
            expense: "Rp 38.000.000",
            balance: "Rp 7.000.000",
            details: [
                { category: "Infaq Rutin", amount: "Rp 25.000.000" },
                { category: "Penjualan Madu", amount: "Rp 15.000.000" },
                { category: "Donasi Umum", amount: "Rp 5.000.000" }
            ]
        },
        {
            period: "November 2024",
            income: "Rp 42.000.000",
            expense: "Rp 35.000.000",
            balance: "Rp 7.000.000",
            details: [
                { category: "Infaq Rutin", amount: "Rp 23.000.000" },
                { category: "Penjualan Madu", amount: "Rp 14.000.000" },
                { category: "Donasi Umum", amount: "Rp 5.000.000" }
            ]
        }
    ];

    return (
        <>
            <Navigation />

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-primary text-white !pt-24 !pb-32">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold rounded-full blur-3xl animate-pulse"></div>
                </div>

                <div className="relative max-w-6xl mx-auto px-6">
                    <div className="text-center">
                        <div className="inline-block mb-4 px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                            <span className="text-sm font-semibold tracking-wide uppercase">Transparansi Keuangan</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 fKufam">
                            Laporan Keuangan
                        </h1>
                        <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                            Laporan keuangan Al-Manshurah disajikan secara transparan sebagai bentuk pertanggungjawaban kepada umat
                        </p>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" />
                    </svg>
                </div>
            </section>

            {/* Period Selector */}
            <section className="!py-8 sticky top-0 z-30 bg-white/90 backdrop-blur-md shadow-md">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex gap-4 justify-center flex-wrap">
                        {periods.map((period) => (
                            <button
                                key={period}
                                onClick={() => setSelectedPeriod(period)}
                                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${selectedPeriod === period
                                    ? "bg-gradient-primary text-white shadow-lg scale-105"
                                    : "bg-white text-primary border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5"
                                    }`}
                            >
                                Tahun {period}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Reports Section */}
            <section className="!py-16 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="space-y-6">
                        {reports.map((report, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-3xl shadow-xl border-2 border-primary/10 overflow-hidden hover:shadow-2xl transition-all duration-300"
                            >
                                <div className="bg-gradient-primary text-white p-6">
                                    <h3 className="text-2xl font-bold fKufam">{report.period}</h3>
                                </div>

                                <div className="p-8">
                                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                                        <div className="text-center p-6 bg-green-50 rounded-2xl">
                                            <div className="text-4xl mb-2">💰</div>
                                            <div className="text-sm font-semibold text-gray-700 mb-2">Pemasukan</div>
                                            <div className="text-2xl font-bold text-green-600">{report.income}</div>
                                        </div>
                                        <div className="text-center p-6 bg-red-50 rounded-2xl">
                                            <div className="text-4xl mb-2">📤</div>
                                            <div className="text-sm font-semibold text-gray-700 mb-2">Pengeluaran</div>
                                            <div className="text-2xl font-bold text-red-600">{report.expense}</div>
                                        </div>
                                        <div className="text-center p-6 bg-primary/10 rounded-2xl">
                                            <div className="text-4xl mb-2">💎</div>
                                            <div className="text-sm font-semibold text-gray-700 mb-2">Saldo</div>
                                            <div className="text-2xl font-bold text-primary">{report.balance}</div>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="text-xl font-bold text-primary mb-4">Detail Pemasukan:</h4>
                                        <div className="space-y-3">
                                            {report.details.map((detail, idx) => (
                                                <div key={idx} className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                                                    <span className="font-semibold text-gray-700">{detail.category}</span>
                                                    <span className="font-bold text-primary">{detail.amount}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mt-6 text-center">
                                        <button className="bg-gradient-primary text-white px-8 py-3 rounded-xl font-bold hover:shadow-lg transition-all duration-300 hover:scale-105">
                                            Download Laporan Lengkap (PDF)
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="!py-20 bg-gradient-primary text-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <div className="text-6xl mb-6">🤲</div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 fKufam">
                        Dukung Program Dakwah Kami
                    </h2>
                    <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Infaq dan sedekah Anda sangat berarti untuk kelangsungan program dakwah dan kajian ilmiah
                    </p>
                    <button className="bg-white text-primary px-10 py-4 rounded-xl font-bold hover:bg-gold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                        Donasi Sekarang
                    </button>
                </div>
            </section>
        </>
    );
}

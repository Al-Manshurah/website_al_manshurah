'use client';
import { useState } from 'react';
import Navigation from '@/components/Navigation';

export default function WaqafPage() {
    const [donationAmount, setDonationAmount] = useState('');

    const quickAmounts = ["100000", "250000", "500000", "1000000"];

    const milestones = [
        {
            icon: "📍",
            title: "Lokasi Strategis",
            status: "✅ Selesai",
            description: "Lahan telah ditemukan di lokasi strategis",
            progress: 100
        },
        {
            icon: "💰",
            title: "Pengumpulan Dana",
            status: "🔄 Sedang Berlangsung",
            description: "Target: Rp 2.000.000.000",
            progress: 45
        },
        {
            icon: "🏗️",
            title: "Pembangunan",
            status: "⏳ Menunggu",
            description: "Akan dimulai setelah dana terkumpul",
            progress: 0
        },
        {
            icon: "🕌",
            title: "Operasional",
            status: "⏳ Menunggu",
            description: "Masjid & Madrasah beroperasi",
            progress: 0
        }
    ];

    const faqs = [
        {
            q: "Apa itu wakaf tanah?",
            a: "Wakaf tanah adalah menyerahkan kepemilikan tanah untuk kepentingan umum, khususnya untuk keperluan ibadah dan dakwah."
        },
        {
            q: "Bagaimana cara berdonasi?",
            a: "Donasi dapat dilakukan melalui transfer bank, atau langsung ke panitia Al-Manshurah."
        },
        {
            q: "Apakah ada minimal donasi?",
            a: "Tidak ada minimal donasi. Setiap rupiah yang Anda sumbangkan sangat berarti bagi kami."
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
                            <span className="text-sm font-semibold tracking-wide uppercase">Investasi Akhirat</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 fKufam">
                            Rencana Tanah Wakaf
                        </h1>
                        <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                            Mari bersama-sama mewakafkan tanah untuk pembangunan masjid dan madrasah
                            Al-Manshurah yang permanen
                        </p>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" />
                    </svg>
                </div>
            </section>

            {/* Progress Section */}
            <section className="!py-16 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="bg-gradient-to-br from-primary/10 to-accent1/10 rounded-3xl p-10 shadow-2xl border-2 border-primary/20">
                        <div className="text-center mb-10">
                            <h2 className="text-4xl font-bold text-primary mb-4 fKufam">
                                Progress Pengumpulan Dana
                            </h2>
                            <p className="text-gray-600">Target pembelian tanah wakaf</p>
                        </div>

                        <div className="max-w-3xl mx-auto">
                            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
                                <div className="flex justify-between mb-4">
                                    <div>
                                        <div className="text-sm text-gray-600">Terkumpul</div>
                                        <div className="text-3xl font-bold text-green-600">Rp 900.000.000</div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-sm text-gray-600">Target</div>
                                        <div className="text-3xl font-bold text-primary">Rp 2.000.000.000</div>
                                    </div>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-8 overflow-hidden">
                                    <div
                                        className="bg-gradient-to-r from-green-500 to-green-600 h-full rounded-full transition-all duration-500 flex items-center justify-end pr-4 text-white font-bold"
                                        style={{ width: '45%' }}
                                    >
                                        45%
                                    </div>
                                </div>
                                <div className="text-center mt-4">
                                    <span className="text-lg font-semibold text-gray-700">
                                        Sisa: <span className="text-orange-600">Rp 1.100.000.000</span>
                                    </span>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <div className="text-center p-6 bg-white rounded-2xl shadow">
                                    <div className="text-3xl mb-2">👥</div>
                                    <div className="text-2xl font-bold text-primary">324</div>
                                    <div className="text-sm text-gray-600">Donatur</div>
                                </div>
                                <div className="text-center p-6 bg-white rounded-2xl shadow">
                                    <div className="text-3xl mb-2">📏</div>
                                    <div className="text-2xl font-bold text-primary">1,500m²</div>
                                    <div className="text-sm text-gray-600">Luas Tanah</div>
                                </div>
                                <div className="text-center p-6 bg-white rounded-2xl shadow">
                                    <div className="text-3xl mb-2">⏱️</div>
                                    <div className="text-2xl font-bold text-primary">18</div>
                                    <div className="text-sm text-gray-600">Bulan Lagi</div>
                                </div>
                                <div className="text-center p-6 bg-white rounded-2xl shadow">
                                    <div className="text-3xl mb-2">🎯</div>
                                    <div className="text-2xl font-bold text-primary">55%</div>
                                    <div className="text-sm text-gray-600">Tercapai</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Milestones Section */}
            <section className="!py-20 bg-gradient-to-br from-white to-primary/5">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
                            <span className="text-sm font-semibold text-primary">Tahapan</span>
                        </div>
                        <h2 className="text-4xl font-bold text-primary mb-4 fKufam">
                            Roadmap Pembangunan
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Langkah demi langkah menuju terwujudnya masjid dan madrasah Al-Manshurah
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {milestones.map((milestone, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border-2 border-primary/10"
                            >
                                <div className="text-6xl mb-4 text-center">{milestone.icon}</div>
                                <h3 className="text-lg font-bold text-primary mb-2 text-center">{milestone.title}</h3>
                                <div className="text-center mb-4">
                                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">
                                        {milestone.status}
                                    </span>
                                </div>
                                <p className="text-sm text-gray-600 text-center mb-4">{milestone.description}</p>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div
                                        className="bg-gradient-primary h-full rounded-full"
                                        style={{ width: `${milestone.progress}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Donation Form Section */}
            <section className="!py-20 bg-white">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="bg-gradient-to-br from-primary/5 to-accent1/5 rounded-3xl p-10 shadow-xl border-2 border-primary/10">
                        <div className="text-center mb-8">
                            <div className="text-6xl mb-4">🤲</div>
                            <h2 className="text-4xl font-bold text-primary mb-4 fKufam">
                                Mulai Berwakaf
                            </h2>
                            <p className="text-gray-600">
                                Investasi terbaik adalah investasi untuk akhirat
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-8">
                            <div className="mb-6">
                                <label className="block text-sm font-semibold text-gray-700 mb-4">
                                    Pilih Nominal Donasi
                                </label>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                                    {quickAmounts.map((amount) => (
                                        <button
                                            key={amount}
                                            onClick={() => setDonationAmount(amount)}
                                            className={`p-4 rounded-xl font-bold transition-all duration-300 ${donationAmount === amount
                                                    ? 'bg-gradient-primary text-white shadow-lg scale-105'
                                                    : 'bg-gray-100 text-gray-700 hover:bg-primary/10'
                                                }`}
                                        >
                                            Rp {parseInt(amount).toLocaleString('id-ID')}
                                        </button>
                                    ))}
                                </div>
                                <input
                                    type="number"
                                    value={donationAmount}
                                    onChange={(e) => setDonationAmount(e.target.value)}
                                    placeholder="Atau masukkan nominal lain"
                                    className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none"
                                />
                            </div>

                            <button className="w-full bg-gradient-primary text-white px-8 py-4 rounded-xl font-bold hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                                Donasi Sekarang
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="!py-20 bg-gradient-to-br from-white to-primary/5">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-primary mb-4 fKufam">
                            Pertanyaan Umum
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <h3 className="text-lg font-bold text-primary mb-3 flex items-start gap-3">
                                    <span className="text-2xl">❓</span>
                                    {faq.q}
                                </h3>
                                <p className="text-gray-700 pl-11">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

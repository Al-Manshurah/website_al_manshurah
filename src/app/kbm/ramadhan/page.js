'use client';
import { useState } from 'react';
import Navigation from '@/components/Navigation';

export default function RamadhanPage() {
    const [selectedSection, setSelectedSection] = useState("jadwal");

    const jadwalImsakiyah = [
        { tanggal: "1 Ramadhan", imsak: "04:30", subuh: "04:40", dzuhur: "12:05", ashar: "15:20", maghrib: "18:05", isya: "19:15" },
        { tanggal: "2 Ramadhan", imsak: "04:31", subuh: "04:41", dzuhur: "12:05", ashar: "15:20", maghrib: "18:04", isya: "19:14" },
        { tanggal: "3 Ramadhan", imsak: "04:32", subuh: "04:42", dzuhur: "12:06", ashar: "15:21", maghrib: "18:04", isya: "19:14" },
    ];

    const programRamadhan = [
        {
            nama: "Tarawih 20 Rakaat",
            waktu: "Setelah Isya",
            tempat: "Masjid Al-Manshurah",
            deskripsi: "Shalat tarawih setiap malam Ramadhan",
            icon: "🕌",
            kategori: "Ibadah",
        },
        {
            nama: "Tadarus Al-Qur'an",
            waktu: "Setelah Maghrib",
            tempat: "Masjid Al-Manshurah",
            deskripsi: "Membaca Al-Qur'an berjama'ah setiap malam",
            icon: "📖",
            kategori: "Ibadah",
        },
        {
            nama: "Kajian Ramadhan",
            waktu: "Setelah Subuh",
            tempat: "Masjid Al-Manshurah",
            deskripsi: "Kajian khusus seputar Ramadhan, puasa, dan ibadah",
            icon: "🎓",
            kategori: "Kajian",
        },
        {
            nama: "Sahur Bersama",
            waktu: "03:00 - 04:30",
            tempat: "Aula Al-Manshurah",
            deskripsi: "Sahur bersama setiap weekend (Sabtu & Minggu)",
            icon: "🍽️",
            kategori: "Sosial",
        },
        {
            nama: "Buka Puasa Bersama",
            waktu: "17:30 - 18:30",
            tempat: "Masjid Al-Manshurah",
            deskripsi: "Berbuka bersama untuk menjalin silaturahmi",
            icon: "🥘",
            kategori: "Sosial",
        },
        {
            nama: "Santunan Anak Yatim",
            waktu: "Minggu ke-3 Ramadhan",
            tempat: "Aula Al-Manshurah",
            deskripsi: "Memberikan santunan dan berbuka bersama anak yatim",
            icon: "❤️",
            kategori: "Sosial",
        },
        {
            nama: "I'tikaf 10 Hari Terakhir",
            waktu: "20 Ramadhan - 30 Ramadhan",
            tempat: "Masjid Al-Manshurah",
            deskripsi: "Program i'tikaf khusus di 10 hari terakhir Ramadhan",
            icon: "🌙",
            kategori: "Ibadah",
        },
        {
            nama: "Khataman Al-Qur'an",
            waktu: "27 Ramadhan",
            tempat: "Masjid Al-Manshurah",
            deskripsi: "Khataman Al-Qur'an pada malam Lailatul Qadr",
            icon: "✨",
            kategori: "Ibadah",
        },
    ];

    const tipsRamadhan = [
        { icon: "💧", title: "Cukupi Cairan", desc: "Minum air putih 2-3 liter saat berbuka hingga sahur" },
        { icon: "🥗", title: "Makanan Sehat", desc: "Konsumsi makanan bergizi seimbang dan hindari berlebihan" },
        { icon: "😴", title: "Istirahat Cukup", desc: "Tidur yang cukup untuk menjaga stamina selama berpuasa" },
        { icon: "📿", title: "Perbanyak Dzikir", desc: "Manfaatkan waktu untuk memperbanyak ibadah dan dzikir" },
        { icon: "📖", title: "Baca Al-Qur'an", desc: "Target minimal 1 juz per hari untuk khatam 30 juz" },
        { icon: "🤲", title: "Doa & Istighfar", desc: "Perbanyak doa dan memohon ampunan di bulan penuh berkah" },
    ];

    return (
        <>
            <Navigation />
            <div className="min-h-screen bg-gradient-to-br from-white via-primary/5 to-accent1/10">
                {/* Hero Section */}
                <section className="relative overflow-hidden bg-gradient-primary text-white !pt-16 !pb-24">
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-300 rounded-full blur-3xl animate-pulse"></div>
                        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent2 rounded-full blur-3xl animate-pulse"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                    </div>

                    <div className="relative max-w-6xl mx-auto px-6">
                        <div className="text-center">
                            <div className="inline-block mb-4 px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                                <span className="text-sm font-semibold tracking-wide uppercase">🌙 Bulan Penuh Berkah</span>
                            </div>
                            <h1 className="text-5xl md:text-6xl font-bold mb-6 fKufam">
                                Ramadhan 1446 H
                            </h1>
                            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
                                Sambut bulan suci Ramadhan dengan penuh kekhusyukan dan raih berkah-Nya
                            </p>
                            <div className="inline-block bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30">
                                <div className="text-sm text-white/80 mb-2">Ramadhan dimulai pada</div>
                                <div className="text-3xl font-bold">1 Ramadhan 1446 H / 1 Maret 2025</div>
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
                                onClick={() => setSelectedSection("jadwal")}
                                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${selectedSection === "jadwal"
                                    ? "bg-gradient-primary text-white shadow-lg scale-105"
                                    : "bg-white text-primary border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5"
                                    }`}
                            >
                                ⏰ Jadwal Imsakiyah
                            </button>
                            <button
                                onClick={() => setSelectedSection("program")}
                                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${selectedSection === "program"
                                    ? "bg-gradient-primary text-white shadow-lg scale-105"
                                    : "bg-white text-primary border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5"
                                    }`}
                            >
                                📅 Program Ramadhan
                            </button>
                            <button
                                onClick={() => setSelectedSection("tips")}
                                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${selectedSection === "tips"
                                    ? "bg-gradient-primary text-white shadow-lg scale-105"
                                    : "bg-white text-primary border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5"
                                    }`}
                            >
                                💡 Tips Ramadhan
                            </button>
                        </div>
                    </div>
                </section>

                {/* Content */}
                <section className="!py-16">
                    <div className="max-w-6xl mx-auto px-6">
                        {/* Jadwal Imsakiyah */}
                        {selectedSection === "jadwal" && (
                            <div>
                                <div className="text-center mb-12">
                                    <h2 className="text-4xl font-bold text-primary mb-4 fKufam">Jadwal Imsakiyah</h2>
                                    <p className="text-gray-600">Waktu shalat dan imsak untuk wilayah Jakarta & sekitarnya</p>
                                </div>

                                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                                    <div className="bg-gradient-primary text-white p-6">
                                        <div className="grid grid-cols-7 gap-4 font-bold text-center">
                                            <div>Tanggal</div>
                                            <div>Imsak</div>
                                            <div>Subuh</div>
                                            <div>Dzuhur</div>
                                            <div>Ashar</div>
                                            <div>Maghrib</div>
                                            <div>Isya</div>
                                        </div>
                                    </div>

                                    <div className="divide-y divide-gray-200">
                                        {jadwalImsakiyah.map((item, index) => (
                                            <div
                                                key={index}
                                                className="grid grid-cols-7 gap-4 p-6 text-center hover:bg-primary/5 transition-colors"
                                            >
                                                <div className="font-bold text-primary">{item.tanggal}</div>
                                                <div className="text-gray-700">{item.imsak}</div>
                                                <div className="text-gray-700">{item.subuh}</div>
                                                <div className="text-gray-700">{item.dzuhur}</div>
                                                <div className="text-gray-700">{item.ashar}</div>
                                                <div className="text-orange-600 font-semibold">{item.maghrib}</div>
                                                <div className="text-gray-700">{item.isya}</div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="bg-primary/5 p-6 text-center">
                                        <button className="bg-gradient-primary text-white px-10 py-4 rounded-xl font-bold hover:shadow-xl transition-all duration-300 hover:scale-105">
                                            Download Jadwal Lengkap (PDF)
                                        </button>
                                    </div>
                                </div>

                                <div className="mt-8 bg-gradient-to-r from-orange-100 to-yellow-100 rounded-2xl p-6 border-l-4 border-orange-500">
                                    <div className="flex items-start gap-4">
                                        <div className="text-4xl">⚠️</div>
                                        <div>
                                            <h4 className="font-bold text-orange-900 mb-2">Catatan Penting</h4>
                                            <p className="text-orange-800 text-sm">
                                                Jadwal ini berlaku untuk wilayah Jakarta dan sekitarnya. Untuk wilayah lain, mohon menyesuaikan dengan jadwal setempat.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Program Ramadhan */}
                        {selectedSection === "program" && (
                            <div>
                                <div className="text-center mb-12">
                                    <h2 className="text-4xl font-bold text-primary mb-4 fKufam">Program Ramadhan</h2>
                                    <p className="text-gray-600">Berbagai kegiatan spesial di bulan suci Ramadhan</p>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    {programRamadhan.map((program, index) => (
                                        <div
                                            key={index}
                                            className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border-t-4 border-primary"
                                        >
                                            <div className="flex items-start gap-6 p-6">
                                                <div className="text-6xl group-hover:scale-110 transition-transform">
                                                    {program.icon}
                                                </div>

                                                <div className="flex-1">
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <h3 className="text-xl font-bold text-primary fKufam group-hover:text-accent1 transition-colors">
                                                            {program.nama}
                                                        </h3>
                                                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">
                                                            {program.kategori}
                                                        </span>
                                                    </div>

                                                    <div className="space-y-2 mb-3">
                                                        <div className="flex items-center gap-2 text-sm text-gray-600">
                                                            <span>⏰</span>
                                                            <span>{program.waktu}</span>
                                                        </div>
                                                        <div className="flex items-center gap-2 text-sm text-gray-600">
                                                            <span>📍</span>
                                                            <span>{program.tempat}</span>
                                                        </div>
                                                    </div>

                                                    <p className="text-gray-700 text-sm">{program.deskripsi}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-12 bg-gradient-primary text-white rounded-3xl p-12 text-center">
                                    <h3 className="text-3xl font-bold mb-4 fKufam">Daftar Program Ramadhan</h3>
                                    <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                                        Ikuti seluruh program Ramadhan kami dan raih keberkahan di bulan yang penuh rahmat ini
                                    </p>
                                    <button className="bg-white text-primary px-10 py-4 rounded-xl font-bold hover:bg-gold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                                        Daftar Sekarang
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Tips Ramadhan */}
                        {selectedSection === "tips" && (
                            <div>
                                <div className="text-center mb-12">
                                    <h2 className="text-4xl font-bold text-primary mb-4 fKufam">Tips Menjalankan Ramadhan</h2>
                                    <p className="text-gray-600">Panduan agar ibadah Ramadhan lebih optimal dan berkah</p>
                                </div>

                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                                    {tipsRamadhan.map((tip, index) => (
                                        <div
                                            key={index}
                                            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 text-center"
                                        >
                                            <div className="text-6xl mb-4">{tip.icon}</div>
                                            <h3 className="text-xl font-bold text-primary mb-2 fKufam">{tip.title}</h3>
                                            <p className="text-gray-700 text-sm">{tip.desc}</p>
                                        </div>
                                    ))}
                                </div>

                                {/* Amalan Sunah */}
                                <div className="bg-gradient-to-br from-primary/10 to-accent1/10 rounded-3xl p-8">
                                    <h3 className="text-2xl font-bold text-primary mb-6 text-center fKufam">Amalan Sunah di Bulan Ramadhan</h3>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-white rounded-xl p-6 shadow-md">
                                            <h4 className="font-bold text-primary mb-4 flex items-center gap-2">
                                                <span className="text-2xl">🌙</span>
                                                <span>Malam Hari</span>
                                            </h4>
                                            <ul className="space-y-2 text-sm text-gray-700">
                                                <li>✓ Shalat Tarawih 20 rakaat</li>
                                                <li>✓ Tadarus Al-Qur'an minimal 1 juz</li>
                                                <li>✓ Qiyamul lail (shalat malam)</li>
                                                <li>✓ Doa dan dzikir</li>
                                                <li>✓ Memperbanyak istighfar</li>
                                            </ul>
                                        </div>

                                        <div className="bg-white rounded-xl p-6 shadow-md">
                                            <h4 className="font-bold text-primary mb-4 flex items-center gap-2">
                                                <span className="text-2xl">☀️</span>
                                                <span>Siang Hari</span>
                                            </h4>
                                            <ul className="space-y-2 text-sm text-gray-700">
                                                <li>✓ Menjaga puasa dari hal yang membatalkan</li>
                                                <li>✓ Membaca Al-Qur'an</li>
                                                <li>✓ Bersedekah</li>
                                                <li>✓ Menjaga lisan dari ghibah</li>
                                                <li>✓ Memperbanyak dzikir</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 text-center bg-gradient-primary text-white rounded-2xl p-8">
                                    <div className="text-4xl mb-4">🤲</div>
                                    <h4 className="text-2xl font-bold mb-4 fKufam">Doa Berbuka Puasa</h4>
                                    <div className="text-2xl mb-4 font-arabic">ذَهَبَ الظَّمَأُ وَابْتَلَّتِ الْعُرُوقُ وَثَبَتَ الأَجْرُ إِنْ شَاءَ اللهُ</div>
                                    <p className="text-white/80 italic">
                                        "Telah hilang dahaga, telah basah kerongkongan, dan telah diperoleh pahala, insya Allah"
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </section>
            </div>
        </>
    );
}

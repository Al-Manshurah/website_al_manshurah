'use client';
import Navigation from '@/components/Navigation';

export default function GajiPengajarPage() {
    const teachers = [
        {
            name: "Ustadz Ahmad Abdullah",
            expertise: "Tafsir & Hadits",
            gaji: "Rp 3.000.000",
            schedule: "Senin, Rabu, Jumat"
        },
        {
            name: "Ustadz Muhammad Hasan",
            expertise: "Fiqih & Ushul Fiqih",
            gaji: "Rp 3.000.000",
            schedule: "Selasa, Kamis"
        },
        {
            name: "Ustadz Ibrahim As-Syafi'i",
            expertise: "Aqidah & Sirah",
            gaji: "Rp 2.500.000",
            schedule: "Sabtu, Minggu"
        },
        {
            name: "Ustadz Ali Zainal",
            expertise: "Bahasa Arab & Nahwu",
            gaji: "Rp 2.500.000",
            schedule: "Rabu, Sabtu"
        }
    ];

    const totalBudget = "Rp 11.000.000";
    const targetBudget = "Rp 15.000.000";
    const percentage = 73;

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
                            <span className="text-sm font-semibold tracking-wide uppercase">Penggajian Pengajar</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 fKufam">
                            Gaji Ustadz & Pengajar
                        </h1>
                        <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                            Dukung para ustadz dan pengajar yang telah berdedikasi menyebarkan ilmu syar'i kepada umat
                        </p>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" />
                    </svg>
                </div>
            </section>

            {/* Budget Progress Section */}
            <section className="!py-16 bg-white">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="bg-gradient-to-br from-primary/10 to-accent1/10 rounded-3xl p-10 shadow-xl border-2 border-primary/20">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold text-primary mb-2 fKufam">Dana Gaji Bulan Ini</h2>
                            <p className="text-gray-600">Target vs Terkumpul</p>
                        </div>

                        <div className="mb-6">
                            <div className="flex justify-between mb-2">
                                <span className="font-semibold text-gray-700">Terkumpul: {totalBudget}</span>
                                <span className="font-semibold text-gray-700">Target: {targetBudget}</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-6 overflow-hidden">
                                <div
                                    className="bg-gradient-primary h-full rounded-full transition-all duration-500 flex items-center justify-center text-white text-sm font-bold"
                                    style={{ width: `${percentage}%` }}
                                >
                                    {percentage}%
                                </div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6 mt-8">
                            <div className="text-center p-6 bg-white rounded-2xl shadow">
                                <div className="text-4xl mb-2">👨‍🏫</div>
                                <div className="text-2xl font-bold text-primary">{teachers.length}</div>
                                <div className="text-sm text-gray-600">Pengajar Aktif</div>
                            </div>
                            <div className="text-center p-6 bg-white rounded-2xl shadow">
                                <div className="text-4xl mb-2">💰</div>
                                <div className="text-2xl font-bold text-green-600">{totalBudget}</div>
                                <div className="text-sm text-gray-600">Terkumpul</div>
                            </div>
                            <div className="text-center p-6 bg-white rounded-2xl shadow">
                                <div className="text-4xl mb-2">🎯</div>
                                <div className="text-2xl font-bold text-orange-600">Rp 4.000.000</div>
                                <div className="text-sm text-gray-600">Kekurangan</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Teachers List Section */}
            <section className="!py-16 bg-gradient-to-br from-white to-primary/5">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-primary mb-4 fKufam">
                            Ustadz & Pengajar
                        </h2>
                        <p className="text-gray-600">
                            Para pengajar yang berdedikasi menyebarkan ilmu syar'i
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {teachers.map((teacher, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border-2 border-primary/10"
                            >
                                <div className="flex items-start gap-6">
                                    <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center text-white text-3xl font-bold">
                                        {teacher.name.charAt(7)}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-primary mb-2">{teacher.name}</h3>
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                                <span>📚</span>
                                                <span>{teacher.expertise}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                                <span>📅</span>
                                                <span>{teacher.schedule}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-2xl">💵</span>
                                                <span className="text-xl font-bold text-primary">{teacher.gaji}</span>
                                                <span className="text-sm text-gray-600">/bulan</span>
                                            </div>
                                        </div>
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
                    <div className="text-6xl mb-6">❤️</div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 fKufam">
                        Dukung Gaji Ustadz
                    </h2>
                    <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Dengan mendukung gaji ustadz, Anda turut menjaga keberlangsungan kajian dan penyebaran ilmu syar'i
                    </p>
                    <div className="flex gap-4 justify-center flex-wrap">
                        <button className="bg-white text-primary px-10 py-4 rounded-xl font-bold hover:bg-gold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                            Donasi Sekarang
                        </button>
                        <button className="bg-white/20 backdrop-blur-sm border-2 border-white text-white px-10 py-4 rounded-xl font-bold hover:bg-white hover:text-primary transition-all duration-300">
                            Lihat Detail Program
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}

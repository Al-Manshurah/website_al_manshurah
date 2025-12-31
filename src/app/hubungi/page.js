'use client';
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import { getWhatsAppLink } from '@/utils/utilStrings';

export default function HubungiPage() {
    const [formData, setFormData] = useState({
        nama: '',
        email: '',
        subjek: '',
        pesan: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Implement form submission
        console.log('Form submitted:', formData);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const contactInfo = [
        {
            icon: "📍",
            title: "Alamat",
            content: "Jl. Example No. 123, Jakarta Selatan",
            link: "https://maps.google.com"
        },
        {
            icon: "📧",
            title: "Email",
            content: "info@almanshurah.org",
            link: "mailto:info@almanshurah.org"
        },
        {
            icon: "📱",
            title: "WhatsApp",
            content: "+62 812-3456-7890",
            link: getWhatsAppLink('Assalamualaikum, saya ingin bertanya tentang Al-Manshurah')
        },
        {
            icon: "🕌",
            title: "Masjid",
            content: "Masjid Al-Manshurah",
            link: "#"
        }
    ];

    const socialMedia = [
        { name: "Instagram", icon: "📸", link: "#", username: "@almanshurah" },
        { name: "YouTube", icon: "▶️", link: "#", username: "Al-Manshurah TV" },
        { name: "Facebook", icon: "👥", link: "#", username: "Al-Manshurah" },
        { name: "Telegram", icon: "✈️", link: "#", username: "@channelalmanshurah" }
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
                            <span className="text-sm font-semibold tracking-wide uppercase">Hubungi Kami</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 fKufam">
                            Terhubung Dengan Kami
                        </h1>
                        <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                            Kami siap melayani pertanyaan, saran, dan kebutuhan Anda terkait program dakwah dan kajian ilmiah
                        </p>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" />
                    </svg>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="!py-16 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-32 relative z-10">
                        {contactInfo.map((item, index) => (
                            <a
                                key={index}
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group bg-white rounded-2xl p-6 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-primary/10 hover:border-primary/30"
                            >
                                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                                <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-600">{item.content}</p>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Form & Map Section */}
            <section className="!py-20 bg-gradient-to-br from-white to-primary/5">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div>
                            <div className="mb-8">
                                <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
                                    <span className="text-sm font-semibold text-primary">Kirim Pesan</span>
                                </div>
                                <h2 className="text-4xl font-bold text-primary mb-4 fKufam">
                                    Ada Pertanyaan?
                                </h2>
                                <p className="text-gray-600">
                                    Silakan isi formulir di bawah ini, kami akan merespons secepatnya
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Nama Lengkap *
                                    </label>
                                    <input
                                        type="text"
                                        name="nama"
                                        value={formData.nama}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors"
                                        placeholder="Masukkan nama lengkap Anda"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors"
                                        placeholder="nama@email.com"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Subjek *
                                    </label>
                                    <input
                                        type="text"
                                        name="subjek"
                                        value={formData.subjek}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors"
                                        placeholder="Perihal pesan Anda"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Pesan *
                                    </label>
                                    <textarea
                                        name="pesan"
                                        value={formData.pesan}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors resize-none"
                                        placeholder="Tulis pesan Anda di sini..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-gradient-primary text-white px-8 py-4 rounded-xl font-bold hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                                >
                                    Kirim Pesan
                                </button>
                            </form>
                        </div>

                        {/* Map & Additional Info */}
                        <div className="space-y-8">
                            {/* Map */}
                            <div className="bg-gradient-primary rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                                <div className="w-full h-full flex items-center justify-center text-white text-6xl">
                                    🗺️
                                </div>
                            </div>

                            {/* Office Hours */}
                            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-primary/10">
                                <h3 className="text-2xl font-bold text-primary mb-6 fKufam">Jam Operasional</h3>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                                        <span className="text-gray-700 font-semibold">Senin - Jumat</span>
                                        <span className="text-primary font-bold">08:00 - 17:00</span>
                                    </div>
                                    <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                                        <span className="text-gray-700 font-semibold">Sabtu</span>
                                        <span className="text-primary font-bold">08:00 - 15:00</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-700 font-semibold">Minggu</span>
                                        <span className="text-red-600 font-bold">Tutup</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Social Media Section */}
            <section className="!py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
                            <span className="text-sm font-semibold text-primary">Media Sosial</span>
                        </div>
                        <h2 className="text-4xl font-bold text-primary mb-4 fKufam">
                            Ikuti Kami
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Tetap terhubung dan dapatkan update terbaru seputar kajian dan program kami
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {socialMedia.map((social, index) => (
                            <a
                                key={index}
                                href={social.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group bg-gradient-to-br from-primary/5 to-accent1/5 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-primary/10 hover:border-primary/30"
                            >
                                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">{social.icon}</div>
                                <h3 className="text-xl font-bold text-primary mb-2">{social.name}</h3>
                                <p className="text-sm text-gray-600">{social.username}</p>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="!py-20 bg-gradient-primary text-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <div className="text-6xl mb-6">💬</div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 fKufam">
                        Butuh Konsultasi Langsung?
                    </h2>
                    <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Hubungi kami melalui WhatsApp untuk mendapatkan respon yang lebih cepat
                    </p>
                    <a
                        href={getWhatsAppLink('Assalamualaikum, saya ingin konsultasi dengan Al-Manshurah')}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-white text-primary px-10 py-4 rounded-xl font-bold hover:bg-gold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                    >
                        Chat via WhatsApp
                    </a>
                </div>
            </section>
        </>
    );
}

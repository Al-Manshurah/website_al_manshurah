'use client';
import Navigation from '@/components/Navigation';
import { RiWhatsappLine, RiCheckLine } from '@remixicon/react';
import { getWhatsAppLink } from '@/utils/utilStrings';

export default function CaraPemesananPage() {
    const steps = [
        {
            number: "1",
            title: "Pilih Produk Madu",
            description: "Lihat katalog produk madu kami dan pilih yang sesuai dengan kebutuhan Anda",
            icon: "🍯"
        },
        {
            number: "2",
            title: "Hubungi via WhatsApp",
            description: "Klik tombol WhatsApp dan kirim pesan dengan menyebutkan produk yang ingin dipesan",
            icon: "💬"
        },
        {
            number: "3",
            title: "Konfirmasi Pesanan",
            description: "Admin kami akan mengkonfirmasi ketersediaan, harga, dan ongkos kirim",
            icon: "✅"
        },
        {
            number: "4",
            title: "Lakukan Pembayaran",
            description: "Transfer ke rekening yang diberikan dan kirim bukti pembayaran",
            icon: "💳"
        },
        {
            number: "5",
            title: "Pengiriman",
            description: "Pesanan akan dikirim setelah pembayaran dikonfirmasi dan Anda akan mendapat nomor resi",
            icon: "📦"
        }
    ];

    const paymentMethods = [
        { bank: "BCA", number: "1234567890", name: "Yayasan Al-Manshurah" },
        { bank: "Mandiri", number: "0987654321", name: "Yayasan Al-Manshurah" },
        { bank: "BRI", number: "5555666677", name: "Yayasan Al-Manshurah" }
    ];

    const faqs = [
        {
            q: "Berapa minimal pemesanan?",
            a: "Minimal pemesanan 1 botol madu (500ml). Kami juga melayani pembelian dalam jumlah besar dengan harga spesial."
        },
        {
            q: "Apakah ada ongkos kirim?",
            a: "Ongkos kirim disesuaikan dengan lokasi pengiriman. Untuk wilayah Jakarta gratis ongkir minimal pembelian 3 botol."
        },
        {
            q: "Berapa lama proses pengiriman?",
            a: "Estimasi pengiriman 2-3 hari kerja untuk wilayah Jabodetabek, dan 3-5 hari kerja untuk luar pulau Jawa."
        },
        {
            q: "Apakah bisa COD?",
            a: "Untuk saat ini kami belum melayani COD. Pembayaran dilakukan via transfer bank."
        }
    ];

    return (
        <>
            <Navigation />

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-primary text-white !pt-24 !pb-32">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-300 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold rounded-full blur-3xl animate-pulse"></div>
                </div>

                <div className="relative max-w-6xl mx-auto px-6">
                    <div className="text-center">
                        <div className="inline-block mb-4 px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                            <span className="text-sm font-semibold tracking-wide uppercase">Panduan Pemesanan</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 fKufam">
                            Cara Memesan Madu
                        </h1>
                        <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                            Proses pemesanan yang mudah dan cepat. Ikuti langkah-langkah berikut untuk mendapatkan madu berkualitas dari Al-Manshurah
                        </p>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" />
                    </svg>
                </div>
            </section>

            {/* Steps Section */}
            <section className="!py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
                            <span className="text-sm font-semibold text-primary">Langkah Mudah</span>
                        </div>
                        <h2 className="text-4xl font-bold text-primary mb-4 fKufam">
                            5 Langkah Pemesanan
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Proses pemesanan yang simple dan transparan
                        </p>
                    </div>

                    <div className="grid md:grid-cols-5 gap-6">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className="relative"
                            >
                                <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-primary/10">
                                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                                        {step.number}
                                    </div>
                                    <div className="text-5xl mb-4">{step.icon}</div>
                                    <h3 className="text-lg font-bold text-primary mb-2">{step.title}</h3>
                                    <p className="text-sm text-gray-600">{step.description}</p>
                                </div>
                                {index < steps.length - 1 && (
                                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-primary/30"></div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <a
                            href={getWhatsAppLink('Assalamualaikum, saya ingin memesan madu Al-Manshurah')}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-gradient-primary text-white px-10 py-4 rounded-xl font-bold hover:shadow-xl transition-all duration-300 hover:scale-105"
                        >
                            <RiWhatsappLine className="w-6 h-6" />
                            Pesan Sekarang via WhatsApp
                        </a>
                    </div>
                </div>
            </section>

            {/* Payment Methods Section */}
            <section className="!py-20 bg-gradient-to-br from-primary/5 to-white">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
                            <span className="text-sm font-semibold text-primary">Pembayaran</span>
                        </div>
                        <h2 className="text-4xl font-bold text-primary mb-4 fKufam">
                            Metode Pembayaran
                        </h2>
                        <p className="text-gray-600">
                            Transfer ke salah satu rekening berikut
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {paymentMethods.map((method, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-primary/10"
                            >
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-primary mb-2">{method.bank}</div>
                                    <div className="text-2xl font-mono font-bold text-gray-800 mb-2">{method.number}</div>
                                    <div className="text-sm text-gray-600">{method.name}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-6">
                        <div className="flex items-start gap-3">
                            <span className="text-2xl">⚠️</span>
                            <div>
                                <h4 className="font-bold text-gray-800 mb-2">Penting!</h4>
                                <p className="text-sm text-gray-700">
                                    Setelah transfer, segera kirim bukti pembayaran ke WhatsApp kami untuk proses verifikasi dan pengiriman yang lebih cepat.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="!py-20 bg-white">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
                            <span className="text-sm font-semibold text-primary">FAQ</span>
                        </div>
                        <h2 className="text-4xl font-bold text-primary mb-4 fKufam">
                            Pertanyaan Umum
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-gradient-to-br from-primary/5 to-accent1/5 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
                            >
                                <h3 className="text-lg font-bold text-primary mb-3 flex items-start gap-3">
                                    <RiCheckLine className="w-6 h-6 flex-shrink-0 text-primary" />
                                    {faq.q}
                                </h3>
                                <p className="text-gray-700 pl-9">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="!py-20 bg-gradient-primary text-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <div className="text-6xl mb-6">🛒</div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 fKufam">
                        Siap Memesan?
                    </h2>
                    <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Tim kami siap melayani pesanan Anda. Hubungi kami sekarang untuk mendapatkan madu berkualitas!
                    </p>
                    <div className="flex gap-4 justify-center flex-wrap">
                        <a
                            href={getWhatsAppLink('Assalamualaikum, saya ingin memesan madu Al-Manshurah')}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-white text-primary px-10 py-4 rounded-xl font-bold hover:bg-gold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                        >
                            <RiWhatsappLine className="w-6 h-6" />
                            Chat WhatsApp
                        </a>
                        <a
                            href="/program/madu"
                            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border-2 border-white text-white px-10 py-4 rounded-xl font-bold hover:bg-white hover:text-primary transition-all duration-300"
                        >
                            Lihat Produk
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}

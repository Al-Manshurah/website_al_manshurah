'use client';
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import { getWhatsAppLink } from '@/utils/utilStrings';
import { RiWhatsappLine } from '@remixicon/react';
import Link from 'next/link';

export default function MaduPage() {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const products = [
        {
            id: 1,
            name: "Madu Hutan Asli",
            price: "Rp 150.000",
            size: "500ml",
            image: "🍯",
            description: "Madu murni dari hutan tropis Indonesia",
            benefits: ["Meningkatkan imunitas", "Antioksidan tinggi", "Energi alami"],
            stock: "Tersedia"
        },
        {
            id: 2,
            name: "Madu Multiflora",
            price: "Rp 120.000",
            size: "500ml",
            image: "🌺",
            description: "Madu dari berbagai bunga pilihan",
            benefits: ["Kaya nutrisi", "Melancarkan pencernaan", "Anti bakteri"],
            stock: "Tersedia"
        },
        {
            id: 3,
            name: "Madu Habbatussauda",
            price: "Rp 180.000",
            size: "500ml",
            image: "🌿",
            description: "Madu dicampur dengan habbatussauda",
            benefits: ["Obat segala penyakit", "Meningkatkan daya tahan", "Herbal alami"],
            stock: "Tersedia"
        },
        {
            id: 4,
            name: "Madu Royal Jelly",
            price: "Rp 200.000",
            size: "500ml",
            image: "👑",
            description: "Madu dengan royal jelly premium",
            benefits: ["Anti aging", "Meningkatkan vitalitas", "Nutrisi lengkap"],
            stock: "Terbatas"
        }
    ];

    const testimonials = [
        {
            name: "Ahmad Fauzi",
            rating: 5,
            comment: "Madu asli dan berkualitas! Sangat membantu meningkatkan stamina saya."
        },
        {
            name: "Siti Nurhaliza",
            rating: 5,
            comment: "Alhamdulillah, cocok untuk anak-anak. Rasanya enak dan khasiatnya terasa."
        },
        {
            name: "Muhammad Rizki",
            rating: 5,
            comment: "Harga terjangkau dengan kualitas terbaik. Recommended!"
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
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-block mb-4 px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                                <span className="text-sm font-semibold tracking-wide uppercase">Program Ekonomi Mandiri</span>
                            </div>
                            <h1 className="text-5xl md:text-6xl font-bold mb-6 fKufam">
                                Madu Asli Berkualitas
                            </h1>
                            <p className="text-xl text-white/90 leading-relaxed mb-8">
                                Madu murni 100% alami dari sumber terpercaya. Setiap pembelian mendukung program dakwah Al-Manshurah
                            </p>
                            <div className="flex gap-4 flex-wrap">
                                <button className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-bold hover:bg-gold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                                    <span>📱</span>
                                    Pesan Sekarang
                                </button>
                                <button className="bg-white/20 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-primary transition-all duration-300">
                                    Lihat Produk
                                </button>
                            </div>
                        </div>
                        <div className="text-9xl text-center">
                            🍯
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" />
                    </svg>
                </div>
            </section>

            {/* Why Choose Section */}
            <section className="!py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
                            <span className="text-sm font-semibold text-primary">Keunggulan Produk</span>
                        </div>
                        <h2 className="text-4xl font-bold text-primary mb-4 fKufam">
                            Mengapa Memilih Madu Kami?
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center group">
                            <div className="text-7xl mb-6 group-hover:scale-110 transition-transform">✅</div>
                            <h3 className="text-2xl font-bold text-primary mb-4">100% Murni</h3>
                            <p className="text-gray-600">
                                Madu asli tanpa campuran gula atau bahan kimia, dijamin keasliannya
                            </p>
                        </div>
                        <div className="text-center group">
                            <div className="text-7xl mb-6 group-hover:scale-110 transition-transform">🐝</div>
                            <h3 className="text-2xl font-bold text-primary mb-4">Sumber Terpercaya</h3>
                            <p className="text-gray-600">
                                Langsung dari peternak lebah pilihan dengan standar kualitas tinggi
                            </p>
                        </div>
                        <div className="text-center group">
                            <div className="text-7xl mb-6 group-hover:scale-110 transition-transform">💝</div>
                            <h3 className="text-2xl font-bold text-primary mb-4">Mendukung Dakwah</h3>
                            <p className="text-gray-600">
                                Keuntungan dari penjualan digunakan untuk program dakwah dan kajian
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Products Section */}
            <section className="!py-20 bg-gradient-to-br from-primary/5 to-white">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
                            <span className="text-sm font-semibold text-primary">Produk Kami</span>
                        </div>
                        <h2 className="text-4xl font-bold text-primary mb-4 fKufam">
                            Pilihan Madu Berkualitas
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Berbagai jenis madu dengan manfaat yang berbeda untuk kebutuhan kesehatan Anda
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border-2 border-primary/10 hover:border-primary/30"
                            >
                                {product.stock === "Terbatas" && (
                                    <div className="bg-red-500 text-white text-xs font-bold px-4 py-1 absolute top-4 right-4 rounded-full z-10">
                                        Terbatas
                                    </div>
                                )}

                                <div className="bg-gradient-to-br from-primary/20 to-accent1/20 p-8">
                                    <div className="text-8xl text-center">{product.image}</div>
                                </div>

                                <div className="p-6">
                                    <div className="text-xs text-primary font-semibold mb-2">{product.size}</div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors">
                                        {product.name}
                                    </h3>
                                    <p className="text-sm text-gray-600 mb-4">
                                        {product.description}
                                    </p>

                                    <div className="mb-4">
                                        <div className="text-xs font-semibold text-gray-700 mb-2">Manfaat:</div>
                                        <div className="space-y-1">
                                            {product.benefits.map((benefit, idx) => (
                                                <div key={idx} className="text-xs text-gray-600 flex items-start gap-2">
                                                    <span className="text-primary">✓</span>
                                                    <span>{benefit}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                                        <div>
                                            <div className="text-2xl font-bold text-primary">{product.price}</div>
                                            <div className="text-xs text-gray-500">{product.stock}</div>
                                        </div>
                                        <a
                                            href={getWhatsAppLink(`Assalamualaikum, saya ingin memesan ${product.name} (${product.size}) seharga ${product.price}`)}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-gradient-primary text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-all duration-300 hover:scale-105 inline-block text-center"
                                        >
                                            Pesan
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="!py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
                            <span className="text-sm font-semibold text-primary">Testimoni</span>
                        </div>
                        <h2 className="text-4xl font-bold text-primary mb-4 fKufam">
                            Kata Mereka
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Pengalaman pelanggan yang telah merasakan manfaat madu kami
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="bg-gradient-to-br from-primary/5 to-accent1/5 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                            >
                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <span key={i} className="text-2xl text-gold">⭐</span>
                                    ))}
                                </div>
                                <p className="text-gray-700 mb-6 italic">"{testimonial.comment}"</p>
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                                        {testimonial.name.charAt(0)}
                                    </div>
                                    <div>
                                        <div className="font-bold text-gray-800">{testimonial.name}</div>
                                        <div className="text-sm text-gray-600">Pelanggan Setia</div>
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
                    <div className="text-6xl mb-6">🛒</div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 fKufam">
                        Siap Merasakan Manfaatnya?
                    </h2>
                    <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Pesan madu berkualitas sekarang dan dukung program dakwah Al-Manshurah
                    </p>
                    <div className="flex gap-4 justify-center flex-wrap">
                        <a
                            href={getWhatsAppLink('Assalamualaikum, saya ingin memesan madu Al-Manshurah')}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-white text-primary px-10 py-4 rounded-xl font-bold hover:bg-gold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                        >
                            <span>📱</span>
                            Pesan via WhatsApp
                        </a>
                        <Link
                            href="/program/madu/cara-pemesanan"
                            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border-2 border-white text-white px-10 py-4 rounded-xl font-bold hover:bg-white hover:text-primary transition-all duration-300"
                        >
                            <RiWhatsappLine className="w-6 h-6" />
                            Lihat Cara Pemesanan
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}

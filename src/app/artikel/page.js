import Navigation from '@/components/Navigation';
import { getSortedArticlesData } from '@/lib/articles';
import Link from 'next/link';

export default function ArtikelPage() {
    const articles = getSortedArticlesData();

    const categories = [...new Set(articles.map(article => article.category))];

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
                            <span className="text-sm font-semibold tracking-wide uppercase">Artikel & Tulisan</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 fKufam">
                            Artikel Islami
                        </h1>
                        <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                            Kumpulan artikel seputar Islam, aqidah, fiqih, dan kajian ilmiah lainnya
                        </p>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" />
                    </svg>
                </div>
            </section>

            {/* Articles Section */}
            <section className="!py-16 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    {/* Category Filter */}
                    {categories.length > 0 && (
                        <div className="flex gap-3 justify-center flex-wrap mb-12">
                            <button className="px-6 py-3 rounded-xl font-semibold bg-gradient-primary text-white shadow-lg">
                                Semua
                            </button>
                            {categories.map((category, index) => (
                                <button
                                    key={index}
                                    className="px-6 py-3 rounded-xl font-semibold bg-white text-primary border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    )}

                    {/* Articles Grid */}
                    {articles.length === 0 ? (
                        <div className="text-center py-20">
                            <div className="text-6xl mb-4">📝</div>
                            <h3 className="text-2xl font-bold text-gray-700 mb-2">Belum Ada Artikel</h3>
                            <p className="text-gray-600">Artikel akan segera ditambahkan</p>
                        </div>
                    ) : (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {articles.map((article) => (
                                <Link
                                    key={article.slug}
                                    href={`/artikel/${article.slug}`}
                                    className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border-2 border-primary/10 hover:border-primary/30"
                                >
                                    {/* Image */}
                                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent1/20 flex items-center justify-center">
                                        <div className="text-6xl">📖</div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        {/* Category & Date */}
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">
                                                {article.category}
                                            </span>
                                            <span className="text-xs text-gray-500">
                                                {new Date(article.date).toLocaleDateString('id-ID', {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric'
                                                })}
                                            </span>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                                            {article.title}
                                        </h3>

                                        {/* Excerpt */}
                                        <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                                            {article.excerpt}
                                        </p>

                                        {/* Author */}
                                        <div className="flex items-center gap-2 text-sm text-gray-600">
                                            <span>✍️</span>
                                            <span>{article.author}</span>
                                        </div>

                                        {/* Read More */}
                                        <div className="mt-4 flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                                            <span>Baca Selengkapnya</span>
                                            <span>→</span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}

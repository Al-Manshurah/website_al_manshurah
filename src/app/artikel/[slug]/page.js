import Navigation from '@/components/Navigation';
import { getArticleData, getAllArticleSlugs } from '@/lib/articles';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Generate static paths for all articles
export async function generateStaticParams() {
    const slugs = getAllArticleSlugs();
    return slugs.map((item) => ({
        slug: item.params.slug,
    }));
}

export default async function ArtikelDetail({ params }) {
    const article = await getArticleData(params.slug);

    if (!article) {
        notFound();
    }

    return (
        <>
            <Navigation />

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-primary text-white !pt-24 !pb-32">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold rounded-full blur-3xl animate-pulse"></div>
                </div>

                <div className="relative max-w-4xl mx-auto px-6">
                    <div className="text-center">
                        {/* Breadcrumb */}
                        <div className="mb-6">
                            <Link href="/artikel" className="text-white/80 hover:text-white transition-colors">
                                ← Kembali ke Artikel
                            </Link>
                        </div>

                        {/* Category Badge */}
                        <div className="inline-block mb-4 px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                            <span className="text-sm font-semibold tracking-wide uppercase">{article.category}</span>
                        </div>

                        {/* Title */}
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 fKufam">
                            {article.title}
                        </h1>

                        {/* Meta */}
                        <div className="flex items-center justify-center gap-6 text-white/80">
                            <div className="flex items-center gap-2">
                                <span>✍️</span>
                                <span>{article.author}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span>📅</span>
                                <span>
                                    {new Date(article.date).toLocaleDateString('id-ID', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" />
                    </svg>
                </div>
            </section>

            {/* Article Content */}
            <article className="!py-16 bg-white">
                <div className="max-w-4xl mx-auto px-6">
                    {/* Content */}
                    <div
                        className="prose prose-lg max-w-none
                            prose-headings:font-bold prose-headings:text-primary prose-headings:fKufam
                            prose-h1:text-4xl prose-h1:mb-6
                            prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4
                            prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3
                            prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
                            prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                            prose-strong:text-primary prose-strong:font-bold
                            prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-primary/5 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-xl prose-blockquote:not-italic
                            prose-ul:list-disc prose-ul:ml-6 prose-ul:my-6
                            prose-ol:list-decimal prose-ol:ml-6 prose-ol:my-6
                            prose-li:text-gray-700 prose-li:mb-2
                            prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:text-primary
                            prose-img:rounded-2xl prose-img:shadow-lg
                        "
                        dangerouslySetInnerHTML={{ __html: article.contentHtml }}
                    />

                    {/* Tags */}
                    {article.tags && article.tags.length > 0 && (
                        <div className="mt-12 pt-8 border-t border-gray-200">
                            <h3 className="text-lg font-bold text-primary mb-4">Tags:</h3>
                            <div className="flex flex-wrap gap-2">
                                {article.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold hover:bg-primary/20 transition-colors cursor-pointer"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Share Section */}
                    <div className="mt-12 pt-8 border-t border-gray-200">
                        <h3 className="text-lg font-bold text-primary mb-4">Bagikan Artikel:</h3>
                        <div className="flex gap-4">
                            <button className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors">
                                📱 WhatsApp
                            </button>
                            <button className="px-6 py-3 bg-blue-500 text-white rounded-xl font-semibold hover:bg-blue-600 transition-colors">
                                📘 Facebook
                            </button>
                            <button className="px-6 py-3 bg-sky-500 text-white rounded-xl font-semibold hover:bg-sky-600 transition-colors">
                                🐦 Twitter
                            </button>
                        </div>
                    </div>

                    {/* Back Button */}
                    <div className="mt-12 text-center">
                        <Link
                            href="/artikel"
                            className="inline-block bg-gradient-primary text-white px-10 py-4 rounded-xl font-bold hover:shadow-xl transition-all duration-300 hover:scale-105"
                        >
                            ← Kembali ke Daftar Artikel
                        </Link>
                    </div>
                </div>
            </article>
        </>
    );
}

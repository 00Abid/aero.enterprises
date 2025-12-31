import { blogPosts } from '../../../data/blog';
import { notFound } from 'next/navigation';
import { Calendar, Clock, ChevronLeft, Quote, AlertTriangle, TrendingUp, TrendingDown, CheckCircle, Ruler } from 'lucide-react';
import Link from 'next/link';
import CTA from '../../components/CTA';

// 1. --- DYNAMIC SEO METADATA ---
export async function generateMetadata({ params }) {
    const { slug } = await params;
    const post = blogPosts.find(p => p.slug === slug);

    if (!post) return { title: 'Article Not Found' };

    return {
        title: `${post.title} | Aero Enterprises Blog`,
        description: post.intro.substring(0, 160),
        keywords: post.tags?.join(', '),
        alternates: {
            canonical: `https://www.aeroenterprises.shop/blog/${post.slug}`,
        },
        openGraph: {
            title: post.title,
            description: post.intro,
            url: `https://www.aeroenterprises.shop/blog/${post.slug}`,
            type: 'article',
            publishedTime: post.date,
            authors: ['Aero Engineering Desk'],
            images: [{ url: '/AE-logo.webp' }],
        },
    };
}

// 2. --- PRE-BUILD THE PATHS (The Fix for 404) ---
export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug, // This must match the folder name [slug]
    }));
}

// 3. --- MAIN COMPONENT ---
export default async function BlogPost({ params }) {
    const { slug } = await params;
    const post = blogPosts.find(p => p.slug === slug);

    if (!post) notFound();

    // JSON-LD for SEO
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "datePublished": post.date,
        "description": post.intro,
        "author": { "@type": "Organization", "name": "Aero Enterprises Desk" }
    };

    return (
        <main className="bg-white text-slate-900 pb-20 font-sans">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            <article className="max-w-4xl mx-auto px-6 pt-24 md:pt-40">
                <Link href="/blog" className="inline-flex items-center text-blue-600 font-black text-[10px] uppercase tracking-widest mb-12 hover:gap-3 transition-all">
                    <ChevronLeft size={14} /> Back to Archive
                </Link>

                <header className="mb-16">
                    <div className="flex flex-wrap gap-4 items-center mb-8">
                        <span className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-widest">
                            <Calendar size={14} className="text-blue-600" /> {post.date}
                        </span>
                        <span className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-widest">
                            <Clock size={14} className="text-blue-600" /> {post.readTime}
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-12">
                        {post.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-500 font-medium italic leading-relaxed border-l-8 border-blue-600 pl-8 mb-20">
                        {post.intro}
                    </p>
                </header>

                <section className="prose prose-slate max-w-none">
                    {/* Reality Section */}
                    <div className="bg-slate-50 p-10 md:p-16 rounded-[3rem] mb-20 border border-slate-100 shadow-sm">
                        <h2 className="text-3xl font-black uppercase tracking-tight mb-8 text-slate-900 flex items-center gap-4">
                            <Quote className="text-blue-600 rotate-180" size={40} /> The Reality on the Ground
                        </h2>
                        <p className="text-lg text-slate-600 leading-relaxed font-medium mb-8">{post.humanContent?.theProblem}</p>
                        <p className="text-lg text-slate-600 leading-relaxed font-medium">
                            {post.humanContent?.theInsideScoop || post.humanContent?.theSolution}
                        </p>
                    </div>

                    {/* Live Rates */}
                    {post.liveRates && (
                        <div className="mb-24">
                            <h3 className="text-2xl font-black uppercase tracking-tight mb-10 flex items-center gap-3">
                                <TrendingUp className="text-blue-600" /> Mumbai Market Pulse
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {post.liveRates.map((item, i) => (
                                    <div key={i} className="p-8 bg-white border-2 border-slate-100 rounded-3xl flex justify-between items-center group hover:border-blue-600 transition-all">
                                        <div>
                                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 block">{item.category}</span>
                                            <span className="text-2xl font-black text-slate-900">{item.rate}</span>
                                        </div>
                                        {item.trend === "up" ? <TrendingUp className="text-red-500" /> : <TrendingDown className="text-green-500" />}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </section>

                <footer className="mt-32 pt-16 border-t border-slate-100 flex items-center gap-8">
                    <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center text-white font-black text-2xl shadow-xl shrink-0">AE</div>
                    <div>
                        <h4 className="font-black uppercase tracking-tight text-xl mb-2 text-slate-900">Aero Market Desk</h4>
                        <p className="text-slate-500 font-medium max-w-xl italic">
                            Verified industrial intelligence for the Mumbai-Palghar industrial belt.
                        </p>
                    </div>
                </footer>
            </article>

            <div className="mt-40">
                <CTA
                    title="Talk to an Industrial Expert"
                    description="Request a technical audit for your next fabrication project."
                    primaryButtonText="Contact Market Desk"
                    primaryButtonLink="/contact"
                    secondaryButtonText="View All Products"
                    secondaryButtonLink="/products"
                />
            </div>
        </main>
    );
}
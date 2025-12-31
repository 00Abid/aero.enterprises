import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '../../data/blog';
import {
    Clock, User, ArrowRight, Microscope, ShieldCheck,
    Settings, Paintbrush, TrendingUp, MapPin, Search
} from 'lucide-react';
import CTA from '../components/CTA';

// Using canonical `blogPosts` from src/data/blog.js

// 2. --- DYNAMIC SEO METADATA ---
export const metadata = {
    title: "Industrial Intelligence Blog | Mumbai Steel Prices & Fabrication | Aero Enterprises",
    description: "Daily updates on Mild Steel prices in Mumbai, supplier guides, and technical fabrication insights. Stay ahead with Aero Enterprises industrial research.",
    keywords: "Mild Steel Price Mumbai, MS Steel Suppliers Mumbai, Steel Price Trends India, MS Sheet Dealers Vasai, Mild Steel Wholesale Mumbai",
    alternates: {
        canonical: 'https://www.aeroenterprises.shop/blog',
    },
};

export default function BlogPage() {
    // JSON-LD for Blog (Google Rich Results)
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "Aero Enterprises Industrial Intelligence Hub",
        "description": "Expert analysis on Mumbai steel markets and precision manufacturing.",
        "publisher": {
            "@type": "Organization",
            "name": "Aero Enterprises"
        },
        "blogPost": blogPosts.map(post => ({
            "@type": "BlogPosting",
            "headline": post.title,
            "datePublished": post.date,
            "author": { "@type": "Person", "name": post.author || 'Market Desk' }
        }))
    };

    return (
        <main className="bg-white font-sans text-slate-900">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* 1. HERO HEADER */}
            <header className='bg-slate-900 w-full py-32 flex justify-center items-center text-center px-6 relative overflow-hidden'>
                <div className="absolute inset-0 opacity-10 bg-[url('/grid-pattern.svg')]"></div>
                <div className="relative z-10 max-w-4xl">
                    <div className="mb-6 inline-flex items-center gap-2 bg-blue-600 px-4 py-1 rounded-full text-white text-[10px] font-black uppercase tracking-[0.3em]">
                        Industrial Intelligence Hub
                    </div>
                    <h1 className="text-4xl md:text-8xl text-white font-black uppercase tracking-tighter leading-[0.85] mb-8">
                        Technical <span className="text-blue-500 italic">Insights</span>
                    </h1>
                    <p className='text-blue-100 text-lg md:text-xl font-medium max-w-2xl mx-auto italic border-l-4 border-blue-600 pl-6'>
                        Answering the most critical questions in the Mumbai steel market—from live price trends to sub-millimeter fabrication physics.
                    </p>
                </div>
            </header>



            {/* 3. BLOG GRID */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12">
                        {blogPosts.map((post) => (
                            <article
                                key={post.slug}
                                id={post.slug}
                                className="group bg-white rounded-[3.5rem] shadow-sm hover:shadow-2xl border border-gray-100 overflow-hidden flex flex-col md:flex-row transition-all duration-500"
                            >
                                <div className="relative w-full md:w-2/5 h-64 md:h-auto overflow-hidden">
                                    <Image
                                        src={post.image || '/press.webp'}
                                        alt={post.title}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                        className="transition-transform duration-1000 group-hover:scale-110"
                                    />
                                    <div className="absolute top-6 left-6">
                                        <span className="bg-slate-900 text-white text-[9px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full backdrop-blur-md bg-opacity-80">
                                            {post.category || post.tags?.[0] || 'Market Analysis'}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-10 md:p-12 w-full md:w-3/5 flex flex-col justify-between">
                                    <div>
                                        <div className="flex items-center gap-4 text-[9px] font-black text-gray-400 uppercase tracking-[0.2em] mb-6">
                                            <span className="flex items-center gap-1"><Clock size={12} className="text-blue-600" /> {post.readTime}</span>
                                            <span className="flex items-center gap-1 text-blue-600"><TrendingUp size={12} /> {post.author || 'Market Desk'}</span>
                                        </div>

                                        <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 uppercase tracking-tighter leading-tight group-hover:text-blue-600 transition-colors">
                                            <Link href={`/blog/${post.slug}`}>
                                                {post.title}
                                            </Link>
                                        </h3>

                                        <p className="text-gray-500 text-sm leading-relaxed mb-10 font-medium">
                                            {post.excerpt || post.intro}
                                        </p>
                                    </div>

                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-slate-900 border-b-2 border-blue-600 w-fit pb-2 group-hover:gap-5 transition-all"
                                    >
                                        Get Technical Brief <ArrowRight size={14} className="text-blue-600" />
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. RESEARCH DESK (AUTHORITY SECTION) */}
            <section className="py-24 bg-slate-900 px-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]"></div>
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-10">
                            <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none">
                                The Aero <br /><span className="text-blue-500">Market Desk</span>
                            </h2>
                            <p className="text-blue-100/60 text-xl font-medium leading-relaxed">
                                Our desk provides weekly analysis of the **Kalamboli Steel Market** and **Vasai Fabrication Cluster**, helping Tier-1 OEMs navigate 2026 pricing volatility.
                            </p>
                            <div className="flex flex-wrap gap-6">
                                <div className="p-6 bg-white/5 border border-white/10 rounded-3xl">
                                    <MapPin size={24} className="text-blue-500 mb-4" />
                                    <h4 className="text-white font-black text-xs uppercase mb-1">Local Insight</h4>
                                    <p className="text-white/40 text-[10px] uppercase font-bold">Kalamboli & Darukhana</p>
                                </div>
                                <div className="p-6 bg-white/5 border border-white/10 rounded-3xl">
                                    <TrendingUp size={24} className="text-blue-500 mb-4" />
                                    <h4 className="text-white font-black text-xs uppercase mb-1">Live Trends</h4>
                                    <p className="text-white/40 text-[10px] uppercase font-bold">Daily MS/SS Rates</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white/5 border border-white/10 p-12 rounded-[4rem] backdrop-blur-sm">
                            <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-8">Intelligence Verticals</h3>
                            <div className="space-y-6">
                                {[
                                    { t: 'Price Influencers', d: 'Global Iron Ore vs. Mumbai Logistics.', i: <Settings size={20} /> },
                                    { t: 'Supplier Verification', d: 'How to check MTC and GST compliance.', i: <ShieldCheck size={20} /> },
                                    { t: 'Metallurgy Trends', d: 'The shift from HR to Laser-Grade PO sheets.', i: <Microscope size={20} /> }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-6 items-start p-4 hover:bg-white/5 rounded-2xl transition-all group">
                                        <div className="p-3 bg-blue-600 text-white rounded-xl">{item.i}</div>
                                        <div>
                                            <h4 className="font-black uppercase text-white text-sm">{item.t}</h4>
                                            <p className="text-white/40 text-xs font-medium mt-1 uppercase tracking-tight italic">{item.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CTA
                title="Secure Your Steel Inventory for 2026"
                description="Our blog tracks the market, but our warehouse delivers the metal. Request a factory-direct quote for today's Mumbai rates."
                primaryButtonText="Get Live Market Quote"
                primaryButtonLink="/contact"
                secondaryButtonText="All Products"
                secondaryButtonLink="/products"
            />
        </main>
    );
}
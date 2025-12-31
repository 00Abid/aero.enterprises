import React from 'react';
import Link from 'next/link';
import { Package, Users, Mail, ArrowLeft, Search, ShieldAlert } from 'lucide-react';

// 1. --- SEO METADATA ---
export const metadata = {
    title: "404 - Material Specification Not Found | Aero Enterprises",
    description: "The industrial specification or page you are looking for has been moved or updated. Access our current steel inventory or contact our Vasai sales desk.",
};

const popularPages = [
    {
        name: 'Inventory',
        path: '/products',
        icon: <Package className="w-5 h-5" />
    },
    {
        name: 'Our Legacy',
        path: '/about',
        icon: <Users className="w-5 h-5" />
    },
    {
        name: 'Market Blog',
        path: '/blog',
        icon: <Search className="w-5 h-5" />
    },
    {
        name: 'Contact',
        path: '/contact',
        icon: <Mail className="w-5 h-5" />
    },
];

export default function NotFound() {
    return (
        <main className="min-h-[90vh] bg-white flex items-center justify-center px-6 py-20 font-sans">
            <div className="max-w-4xl mx-auto text-center">

                {/* 1. VISUAL ERROR INDICATOR */}
                <div className="mb-12 relative inline-block">
                    <span className="absolute -top-6 -right-6 bg-red-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest animate-pulse">
                        System Alert
                    </span>
                    <h1 className="text-[120px] md:text-[220px] font-black text-slate-900 leading-none select-none tracking-tighter">
                        404
                    </h1>
                </div>

                {/* 2. CORE MESSAGE */}
                <div className="mb-12">
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tighter italic">
                        Material <span className="text-blue-600">Not Found</span>
                    </h2>
                    <p className="text-slate-500 text-lg md:text-xl max-w-lg mx-auto leading-relaxed font-medium">
                        The specific industrial grade, blog post, or page you're searching for is unavailable. It may have been re-indexed in our 2026 inventory update.
                    </p>
                </div>

                {/* 3. PRIMARY ACTIONS */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
                    <Link href="/" className="bg-slate-900 px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-[11px] text-white flex items-center justify-center gap-3 hover:bg-blue-600 hover:scale-105 transition-all shadow-xl shadow-slate-900/20">
                        <ArrowLeft size={16} /> Return to Home
                    </Link>
                    <Link href="/contact" className="bg-slate-50 text-slate-900 px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-[11px] flex items-center justify-center gap-3 hover:bg-slate-200 transition-all border border-slate-200">
                        Contact Sales Desk
                    </Link>
                </div>

                {/* 4. TOPICAL RECOVERY LINKS - THE MAP TO SUCCESS */}
                <div className="pt-16 border-t border-slate-100">
                    <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mb-10">
                        Strategic Navigation Hub
                    </h3>

                    {/* Visualizing the site structure helps users orient themselves */}


                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                        {popularPages.map((page, index) => (
                            <Link key={index} href={page.path} className="group">
                                <div className="border-2 border-slate-50 rounded-[2.5rem] p-8 bg-white hover:border-blue-600 hover:shadow-2xl transition-all duration-500 flex flex-col items-center">
                                    <div className="text-blue-600 mb-4 group-hover:scale-110 group-hover:-rotate-12 transition-transform">
                                        {page.icon}
                                    </div>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-900 group-hover:text-blue-600">
                                        {page.name}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* 5. BACKEND ASSISTANCE */}
                <div className="mt-20">
                    <p className="text-[9px] font-bold text-slate-300 uppercase tracking-[0.5em]">
                        Aero Enterprises Technical Support | Error Reference: 404_NULL_REF
                    </p>
                </div>
            </div>
        </main>
    );
}
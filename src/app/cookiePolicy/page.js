import React from 'react';
import { Cookie, ShieldCheck, PieChart, Settings, Info, Lock, BarChart } from 'lucide-react';
import CTA from '../components/CTA';

// 1. --- Next.js SEO Metadata ---
export const metadata = {
    title: "Cookie Policy | Transparency & Digital Tracking | Aero Enterprises",
    description: "Learn how Aero Enterprises uses cookies to optimize your industrial procurement journey. Transparency regarding analytical, essential, and marketing data.",
    alternates: {
        canonical: 'https://www.aeroenterprises.shop/cookie-policy',
    },
};

export default function CookiePolicy() {
    return (
        <main className="bg-white font-sans text-slate-900">
            {/* 2. HERO HEADER: THE CORPORATE LOOK */}
            <div className='bg-slate-900 w-full h-[40vh] flex justify-center items-center text-center px-6 relative overflow-hidden'>
                <div className="absolute inset-0 opacity-10 bg-[url('/grid-pattern.svg')]"></div>
                <div className="relative z-10">
                    <div className="mb-4 inline-flex items-center gap-2 bg-blue-600 px-4 py-1 rounded-full text-white text-[10px] font-black uppercase tracking-[0.3em]">
                        Digital Governance
                    </div>
                    <h1 className="text-4xl md:text-7xl text-white font-black uppercase tracking-tighter leading-none mb-4">
                        Cookie <span className="text-blue-500 text-outline">Transparency</span>
                    </h1>
                    <p className='text-blue-100 text-lg md:text-xl font-medium max-w-2xl mx-auto italic'>
                        Optimizing your Industrial Browsing Experience.
                    </p>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-6 py-24">
                {/* 3. PREAMBLE & COMPLIANCE HOOK */}
                <div className="mb-20 p-10 bg-slate-50 rounded-[3rem] border border-gray-100 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 -mr-16 -mt-16 rounded-full"></div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-blue-600 mb-6">Last Updated: {new Date().getFullYear()} V1.2</p>
                    <p className="text-slate-700 leading-relaxed font-medium text-lg">
                        Aero Enterprises utilizes cookies and similar tracking technologies to analyze site traffic and enhance your industrial procurement journey. This policy explains our commitment to digital transparency and your rights regarding your data.
                    </p>
                    <div className="w-24 h-2 bg-blue-600 rounded-full mt-8"></div>
                </div>

                {/* 4. KEY HIGHLIGHTS GRID */}
                <div className="grid md:grid-cols-2 gap-6 mb-24">
                    <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
                        <div className="mb-6 p-4 bg-blue-50 text-blue-600 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                            <Cookie size={32} />
                        </div>
                        <h3 className="text-xl font-black mb-4 uppercase tracking-tight text-slate-900">What are Cookies?</h3>
                        <p className="text-gray-500 text-sm leading-relaxed font-bold">
                            Cookies are small technical data files placed on your device. They allow our server to recognize your industrial preferences and session history during your visit.
                        </p>
                    </div>
                    <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
                        <div className="mb-6 p-4 bg-slate-900 text-blue-400 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                            <Lock size={32} />
                        </div>
                        <h3 className="text-xl font-black mb-4 uppercase tracking-tight text-slate-900">Data Integrity</h3>
                        <p className="text-gray-500 text-sm leading-relaxed font-bold">
                            Our cookies do not harvest personal secrets. We focus on analytical performance data to ensure our technical material pages (HR, CR, GI) load with zero latency.
                        </p>
                    </div>
                </div>

                {/* 5. DETAILED CATEGORIES */}
                <div className="space-y-16">

                    <section className="bg-slate-900 p-12 rounded-[3.5rem] text-white shadow-2xl relative overflow-hidden">
                        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
                        <h2 className="text-3xl font-black mb-10 uppercase tracking-tighter flex items-center gap-4">
                            <span className="text-blue-500 opacity-50 text-5xl">01</span> Specific Cookie Types
                        </h2>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                                <div className="text-blue-400 mb-4"><ShieldCheck size={24} /></div>
                                <h4 className="font-black uppercase text-xs tracking-widest mb-3 text-white">Essential</h4>
                                <p className="text-[11px] text-blue-100/50 leading-relaxed">Mandatory for the core security and session management of the hub.</p>
                            </div>
                            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                                <div className="text-blue-400 mb-4"><BarChart size={24} /></div>
                                <h4 className="font-black uppercase text-xs tracking-widest mb-3 text-white">Analytical</h4>
                                <p className="text-[11px] text-blue-100/50 leading-relaxed">Uses Google Analytics to see which material grades are most in demand.</p>
                            </div>
                            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                                <div className="text-blue-400 mb-4"><PieChart size={24} /></div>
                                <h4 className="font-black uppercase text-xs tracking-widest mb-3 text-white">Functional</h4>
                                <p className="text-[11px] text-blue-100/50 leading-relaxed">Remembers your location or preferred language for a faster RFQ process.</p>
                            </div>
                        </div>
                    </section>

                    <section className="p-12 border-2 border-slate-900 rounded-[3.5rem] bg-white">
                        <h2 className="text-3xl font-black text-slate-900 mb-8 uppercase tracking-tighter flex items-center gap-4">
                            <Settings className="text-blue-600" /> 02. Preference Control
                        </h2>
                        <p className="text-gray-600 text-sm leading-relaxed mb-8 font-medium">
                            You have the absolute right to manage cookie settings via your browser. Disabling cookies may affect the speed of our **Technical Datasheet** loading and certain automated RFQ features.
                        </p>
                        <div className="p-8 bg-blue-50 rounded-4xl border border-blue-100 flex items-start gap-5">
                            <div className="p-3 bg-white rounded-xl text-blue-600 shadow-sm"><Info size={20} /></div>
                            <p className="text-blue-800 text-xs font-bold leading-relaxed uppercase tracking-tight">
                                Pro Tip: Using &quot;Incognito&quot; or &quot;Private Browsing&quot; will automatically flush all Aero Enterprises tracking data once your session closes.
                            </p>
                        </div>
                    </section>
                </div>

                {/* 6. CONTACT FOOTER */}
                <div className="mt-24 p-12 bg-slate-900 rounded-[3.5rem] flex flex-col md:flex-row justify-between items-center gap-10 shadow-2xl border border-white/5">
                    <div className="text-center md:text-left">
                        <h4 className="font-black text-2xl uppercase tracking-tighter mb-2 text-white italic">Questions?</h4>
                        <p className="text-blue-100/40 text-[10px] font-black uppercase tracking-widest">Connect with our Technical Desk regarding data tracking.</p>
                    </div>
                    <div className="text-center md:text-right">
                        <a href="mailto:aeroenterprises00@gmail.com" className="text-xl font-black text-white hover:text-blue-400 transition-all underline decoration-blue-600 underline-offset-8">aeroenterprises00@gmail.com</a>
                        <p className="text-[10px] font-black text-gray-400 uppercase mt-4 tracking-[0.3em]">Ref: AE-COOKIE-2026</p>
                    </div>
                </div>

                <CTA
                    title="Built on Industrial Trust"
                    description="Our digital transparency matches the mill-certified quality of our steel. Secure your supply chain with a partner who values every detail."
                    primaryButtonText="View Material Hub"
                    primaryButtonLink="/products"
                    secondaryButtonText="Technical RFQ"
                    secondaryButtonLink="/contact"
                />
            </div>
        </main>
    );
}
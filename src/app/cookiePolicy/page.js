import React from 'react';
import { Cookie, ShieldCheck, PieChart, Settings, Info } from 'lucide-react';
import CTA from '../components/CTA';

// 1. --- Next.js SEO Metadata ---
export const metadata = {
    title: "Cookie Policy | Transparency & Data Tracking | Aero Enterprises",
    description: "Detailed overview of how Aero Enterprises uses cookies to enhance your industrial procurement experience. Learn about essential, analytical, and marketing cookies.",
    alternates: {
        canonical: 'https://www.aeroenterprises.shop/cookie-policy',
    },
};

export default function CookiePolicy() {
    return (
        <main className="bg-white font-sans">
            {/* 2. HERO HEADER */}
            <div className='blue-metal w-full h-[35vh] flex justify-center items-center text-center px-6'>
                <div>
                    <h1 className="text-4xl md:text-6xl text-white font-black uppercase tracking-tighter mb-4">
                        Cookie Policy
                    </h1>
                    <p className='text-blue-100 text-lg md:text-xl font-medium max-w-2xl mx-auto italic'>
                        Transparency in Digital Tracking & User Experience
                    </p>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-6 py-20">
                {/* 3. PREAMBLE & LAST UPDATED */}
                <div className="mb-16 border-l-4 border-black pl-6">
                    <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2">Effective: January 4, 2025</p>
                    <p className="text-gray-700 leading-relaxed font-medium">
                        This policy explains how **Aero Enterprises** uses cookies and similar tracking technologies to recognize you when you visit our website. It outlines what these technologies are, why we use them, and your rights to control our use of them.
                    </p>
                </div>

                {/* 4. KEY HIGHLIGHTS GRID */}
                <div className="grid md:grid-cols-2 gap-8 mb-20">
                    <div className="dark-metal-card p-8 rounded-4xl border border-gray-100">
                        <Cookie className=" mb-4 w-8 h-8" />
                        <h3 className="text-xl font-black  mb-3 uppercase tracking-tight">What are Cookies?</h3>
                        <p className=" text-sm leading-relaxed font-medium">
                            Cookies are small data files placed on your device to help us remember your preferences, keep you logged in, and analyze our traffic.
                        </p>
                    </div>
                    <div className="dark-metal-card p-8 rounded-4xl border border-gray-100">
                        <ShieldCheck className=" mb-4 w-8 h-8" />
                        <h3 className="text-xl font-black  mb-3 uppercase tracking-tight">Your Privacy</h3>
                        <p className=" text-sm leading-relaxed font-medium">
                            We respect your data. Most cookies we use are analytical and do not store personally identifiable information without your consent.
                        </p>
                    </div>
                </div>

                {/* 5. DETAILED SECTIONS */}
                <div className="prose prose-slate max-w-none space-y-12">

                    <section>
                        <h2 className="text-2xl font-black text-black mb-6 uppercase tracking-tight flex items-center gap-3">
                            <PieChart className="text-black" /> 01. How We Use Cookies
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4 font-medium">
                            Aero Enterprises utilizes cookies for several technical and analytical reasons:
                        </p>
                        <ul className="grid md:grid-cols-2 gap-3 list-none p-0">
                            {['Authentication & Security', 'User Preferences', 'Marketplace Analytics', 'Technical Load Balancing'].map((item, i) => (
                                <li key={i} className="dark-metal-card p-4 rounded-xl text-sm font-bold text-gray-800 flex items-center gap-2 border border-gray-100">
                                    <div className="w-1.5 h-1.5 rounded-full bg-white"></div> {item}
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section className="dark-metal-card p-10 rounded-4xl text-white">
                        <h2 className="text-2xl font-black mb-6 uppercase tracking-tight text-white">02. Specific Cookie Types</h2>
                        <div className="space-y-6">
                            <div>
                                <h4 className=" font-black uppercase text-xs tracking-widest mb-2">Essential Cookies</h4>
                                <p className=" text-sm">Mandatory for the website to function (e.g., security protocols and session management).</p>
                            </div>
                            <div className="border-t border-white/10 pt-6">
                                <h4 className=" font-black uppercase text-xs tracking-widest mb-2">Analytics Cookies (Google Analytics)</h4>
                                <p className=" text-sm">Helps us understand which industrial material pages (HR, CR, SS) are most helpful to our clients.</p>
                            </div>
                            <div className="border-t border-white/10 pt-6">
                                <h4 className=" font-black uppercase text-xs tracking-widest mb-2">Marketing Cookies</h4>
                                <p className=" text-sm">Used to deliver relevant content and measure the effectiveness of our industrial campaigns.</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black text-black mb-6 uppercase tracking-tight flex items-center gap-3">
                            <Settings className="text-blue-600" /> 03. Managing Your Preferences
                        </h2>
                        <p className="text-gray-700 text-sm leading-relaxed mb-6">
                            You have the right to decide whether to accept or reject cookies. You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website, though your access to some functionality and areas of our website may be restricted.
                        </p>
                        <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100 flex items-start gap-4">
                            <Info className="text-blue-600 shrink-0 mt-1" />
                            <p className="text-blue-800 text-xs font-medium leading-relaxed">
                                <strong>Technical Note:</strong> Clearing your browser cache or using "Incognito" mode will reset your cookie preferences.
                            </p>
                        </div>
                    </section>
                </div>

                {/* 6. CONTACT FOOTER */}
                <div className="mt-20 p-10 dark-metal-card rounded-[2.5rem] flex flex-col md:flex-row justify-between items-center gap-8 text-white">
                    <div>
                        <h4 className="font-black text-xl uppercase tracking-tight mb-2">Questions?</h4>
                        <p className="text-white/60 text-sm font-medium italic">Contact our technical team regarding data tracking.</p>
                    </div>
                    <div className="text-right flex flex-col items-center md:items-end">
                        <a href="mailto:aeroenterprises00@gmail.com" className="text-lg font-black text-white hover:text-blue-400 transition-colors decoration-4">aeroenterprises00@gmail.com</a>
                        <p className="text-[10px] font-bold text-white/40 uppercase mt-2 tracking-widest">Policy Ref: AE-CK-2025</p>
                    </div>
                </div>

                <CTA
                    title="Procure with Transparency"
                    description="Our commitment to your digital privacy matches our commitment to material quality. Explore our certified inventory today."
                    primaryButtonText="Explore Products"
                    primaryButtonLink="/products"
                    secondaryButtonText="Contact Support"
                    secondaryButtonLink="/contact"
                />
            </div>
        </main>
    );
}
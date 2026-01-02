import React from 'react';
import { MapPin, Phone, Mail, Clock, Factory, Warehouse, ShieldCheck, Truck, Headphones, MessageSquare } from 'lucide-react';
import Form from '../components/form';
import Link from 'next/link';
import { DualFacilitySchema } from '../../components/schema/LocalBusinessSchema.js';
import { ComprehensiveContactSchema } from '../../components/schema/ContactSchema.js';

// 1. --- Core Data for NAP Consistency ---
const companyName = "AERO ENTERPRISES";
const primaryPhone = "+91 8459121717";
const secondaryPhone = "+91 9096105019";
const emailAddress = "aeroenterprises00@gmail.com";
const businessHours = "Mon - Sat: 9:00 AM - 9:00 PM";

// 🛑 IMPORTANT: Update these with your actual Google Maps Embed URLs (not just search links) 
const unitMapUrl = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2308.3092220137332!2d72.8787743824079!3d19.42853539164747!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a9de2e91e5ff%3A0x811b0c0d95c22d35!2sAERO%20ENTERPRISES%20-%20MANUFACTURING%20(%20Your%20Trusted%20Sheet%20Metal%20Supplier%20and%20Fabrication%20Patner%20)!5e0!3m2!1sen!2sin!4v1767331090326!5m2!1sen!2sin";
const godownMapUrl = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2859.17920204129!2d72.86479319473277!3d19.424404457147837!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a9b747bf5dc7%3A0x25cd218db9d15dc7!2sAERO%20ENTERPRISES%20-%20WAREHOUSE%20(%20Your%20Trusted%20Sheet%20Metal%20Supplier%20and%20Fabrication%20Partner%20)!5e0!3m2!1sen!2sin!4v1767330950722!5m2!1sen!2sin";

// 2. --- Next.js SEO Metadata ---
export const metadata = {
    title: "Contact Aero Enterprises | Industrial Supply & Fabrication Hub Vasai",
    description: "Connect with Mumbai's integrated hub for steel supply and fabrication. Visit Unit I (Manufacturing) at Vasai Phata or Unit II (Logistics) at Dhumal Nagar.",
    keywords: ["steel fabrication Vasai", "Aero Enterprises contact", "sheet metal stamping Mumbai", "MSME steel supplier Palghar"],
};

export default function ContactPage() {
    return (
        <main className='bg-white font-sans'>
            {/* Comprehensive Contact Schema */}
            <ComprehensiveContactSchema options={{ baseUrl: 'https://www.aeroenterprises.shop' }} />
            
            {/* Local Business Schema for Both Facilities */}
            <DualFacilitySchema options={{ baseUrl: 'https://www.aeroenterprises.shop' }} />

            {/* Hero Section */}
            <section className='bg-slate-900 w-full h-[50vh] flex justify-center items-center text-center px-6 relative overflow-hidden'>
                <div className="absolute inset-0 opacity-10"></div>
                <div className="relative z-10">
                    <div className="mb-6 inline-flex items-center gap-2 bg-blue-600 px-4 py-1 rounded-full text-white text-[10px] font-black uppercase tracking-[0.3em]">
                        Industrial Response Team Active
                    </div>
                    <h1 className="text-5xl md:text-8xl text-white font-black uppercase tracking-tighter leading-none mb-4">
                        Connect <span className="text-blue-500 text-outline">Directly</span>
                    </h1>
                    <p className='text-blue-100 max-w-2xl mx-auto text-lg md:text-xl font-medium'>
                        Bridging the gap between mill-certified sourcing and precision fabrication. Reach out for technical audits or industrial RFQs.
                    </p>
                </div>
            </section>

            <section className="py-24 md:py-32">
                <div className='max-w-7xl mx-auto px-6'>
                    <div className='grid gap-16 lg:grid-cols-2 items-start'>

                        {/* LEFT COLUMN: DUAL HUB ARCHITECTURE */}
                        <div className="space-y-10">

                            {/* 1. UNIT I: MANUFACTURING */}
                            <div className="p-10 rounded-[3rem] bg-slate-50 border border-gray-100 hover:shadow-2xl hover:bg-white transition-all group">
                                <div className="flex items-center gap-4 mb-6 text-slate-900">
                                    <div className="p-4 bg-blue-600 rounded-2xl text-white group-hover:rotate-12 transition-transform">
                                        <Factory size={28} />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-black uppercase tracking-tight">Unit I: Production</h3>
                                        <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Fabrication & Stamping</p>
                                    </div>
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed mb-8 font-medium">
                                    Strategic facility for CNC Bending, High-Volume Stamping, and Powder Coating. <br />
                                    <strong>Survey No. 109 Richard Compound, Manchipada Road, Vasai Phata, Vasai East, Palghar - 401208.</strong>
                                </p>
                                <div className="flex items-center gap-6">
                                    <Link href="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2308.3092220137332!2d72.8787743824079!3d19.42853539164747!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a9de2e91e5ff%3A0x811b0c0d95c22d35!2sAERO%20ENTERPRISES%20-%20MANUFACTURING%20(%20Your%20Trusted%20Sheet%20Metal%20Supplier%20and%20Fabrication%20Patner%20)!5e0!3m2!1sen!2sin!4v1767331090326!5m2!1sen!2sin" className="text-xs font-black uppercase tracking-widest text-slate-900 border-b-2 border-blue-600 pb-1">
                                        Navigate to Unit I →
                                    </Link>
                                </div>
                            </div>

                            {/* 2. UNIT II: LOGISTICS */}
                            <div className="p-10 rounded-[3rem] bg-slate-50 border border-gray-100 hover:shadow-2xl hover:bg-white transition-all group">
                                <div className="flex items-center gap-4 mb-6 text-slate-900">
                                    <div className="p-4 bg-slate-900 rounded-2xl text-white group-hover:rotate-12 transition-transform">
                                        <Warehouse size={28} />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-black uppercase tracking-tight">Unit II: Logistics</h3>
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Storage & Dispatch</p>
                                    </div>
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed mb-8 font-medium">
                                    Main hub for Bulk Coil Inventory, Digital Weighbridge, and Primary/Secondary Stock. <br />
                                    <strong>Gala No. 1, Khan Compound, Near Gausiya Weight Kata, Dhumal Nagar, Vasai East - 401208.</strong>
                                </p>
                                <Link href="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2859.17920204129!2d72.86479319473277!3d19.424404457147837!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a9b747bf5dc7%3A0x25cd218db9d15dc7!2sAERO%20ENTERPRISES%20-%20WAREHOUSE%20(%20Your%20Trusted%20Sheet%20Metal%20Supplier%20and%20Fabrication%20Partner%20)!5e0!3m2!1sen!2sin!4v1767330950722!5m2!1sen!2sin" className="text-xs font-black uppercase tracking-widest text-slate-900 border-b-2 border-blue-600 pb-1">
                                    Navigate to Unit II →
                                </Link>
                            </div>

                            {/* 3. QUICK CHANNELS */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-10 border-t border-gray-100">
                                <div className="flex gap-4">
                                    <div className="p-3 bg-blue-50 text-blue-600 rounded-xl h-fit"><Phone size={20} /></div>
                                    <div>
                                        <h4 className="font-black text-[10px] uppercase tracking-widest text-gray-400 mb-2">Technical Sales</h4>
                                        <a href={`tel:${primaryPhone}`} className="text-lg font-black block text-slate-900">{primaryPhone}</a>
                                        <a href={`tel:${secondaryPhone}`} className="text-sm font-bold text-gray-500">{secondaryPhone}</a>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="p-3 bg-blue-50 text-blue-600 rounded-xl h-fit"><Mail size={20} /></div>
                                    <div>
                                        <h4 className="font-black text-[10px] uppercase tracking-widest text-gray-400 mb-2">Corporate RFQ</h4>
                                        <a href={`mailto:${emailAddress}`} className="text-sm font-black block text-slate-900 break-all">{emailAddress}</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: INDUSTRIAL FORM */}
                        <div className="lg:sticky lg:top-32">
                            <div className="bg-white p-10 md:p-16 rounded-[4rem] border border-gray-100 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] relative">
                                <div className="mb-12">
                                    <div className="flex items-center gap-3 text-blue-600 mb-4 font-black uppercase tracking-widest text-xs">
                                        <MessageSquare size={16} /> Industrial Help-Desk
                                    </div>
                                    <h2 className="text-4xl font-black uppercase tracking-tighter text-slate-900 leading-none">Submit <br />Your RFQ</h2>
                                    <p className="text-gray-500 text-[10px] font-bold uppercase mt-4 tracking-[0.2em] flex items-center gap-2">
                                        <Clock size={12} /> Average Response Time: 120 Minutes
                                    </p>
                                </div>

                                <Form />

                                <div className="mt-12 flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-gray-400 border-t border-gray-100 pt-8">
                                    <div className="flex items-center gap-2 text-blue-600"><ShieldCheck size={14} /> ISO Standards</div>
                                    <div className="flex items-center gap-2"><Truck size={14} /> Pan-India Supply</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* DUAL MAP LOCAL SEO */}
            <section className="bg-slate-50 py-24 px-6 border-y border-gray-200">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <div className="h-[400px] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white group">
                                <iframe src={unitMapUrl} width="100%" height="100%" className="border-none" loading="lazy"></iframe>
                            </div>
                            <div className="text-center">
                                <h4 className="font-black uppercase text-sm text-slate-900">Unit I: Fabrication Hub</h4>
                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Vasai Phata Zone</p>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div className="h-[400px] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white group">
                                <iframe src={godownMapUrl} width="100%" height="100%" className="border-none" loading="lazy"></iframe>
                            </div>
                            <div className="text-center">
                                <h4 className="font-black uppercase text-sm text-slate-900">Unit II: Logistics Hub</h4>
                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Dhumal Nagar Zone</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* QUICK CONTACT ACTION */}
            <div className="py-20 text-center">
                <Link href={`tel:${primaryPhone}`} className="inline-flex items-center gap-4 p-4 bg-slate-900 text-white rounded-full px-12 hover:bg-blue-600 transition-all group">
                    <Headphones className="group-hover:animate-bounce" />
                    <span className="font-black uppercase tracking-widest text-xs">Direct Call Technical Desk</span>
                </Link>
            </div>
        </main>
    );
}
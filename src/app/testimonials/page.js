import React from 'react';
import Link from 'next/link';
import CTA from '../components/CTA';
import { Star, Quote, ShieldCheck, CheckCircle2 } from 'lucide-react';

const testimonials = [
    {
        name: "Rajesh Kumar",
        company: "Industrial Fabricator & OEM Partner",
        location: "Vasai East, Maharashtra",
        rating: 5,
        text: "Aero Enterprises has been our primary sheet metal partner for over 3 years. Their IS 2062 HR sheets are always mill-certified, and their logistics team handles Bhiwandi dispatches with zero delay.",
        product: "Hot Rolled (HR) Sheets",
        date: "2024-12-15"
    },
    {
        name: "Suresh Mehra",
        company: "HVAC Systems Manufacturer",
        location: "Thane, Maharashtra",
        rating: 5,
        text: "The 120 GSM Galvanized sheets we source from Aero have consistent coating quality. Their technical desk understands the difference between commercial and primary stock, which saves us time.",
        product: "GI Sheets (Galvanized)",
        date: "2024-11-20"
    },
    {
        name: "Amit Desai",
        company: "Automotive Component Manufacturer",
        location: "Chakan, Pune",
        rating: 5,
        text: "We rely on their CRCA sheets for high-precision deep drawing. The surface finish is consistent, and the Mill Test Certificates (MTC) provided make our internal audits seamless.",
        product: "CRCA Sheets",
        date: "2024-10-05"
    }
];

const stats = [
    { number: "500+", label: "B2B Industrial Clients" },
    { number: "4.8/5", label: "Google Business Rating" },
    { number: "36+", label: "Years Group Legacy" },
    { number: "100%", label: "MTC Compliance" }
];

export const metadata = {
    title: "Verified Industrial Reviews & Testimonials | Aero Enterprises",
    description: "Read genuine B2B reviews from fabricators, contractors, and OEMs across Maharashtra. Discover why 500+ businesses trust Aero Enterprises for certified steel supply.",
};

const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
        <Star
            key={index}
            className={`w-4 h-4 ${index < rating ? 'fill-blue-600 text-blue-600' : 'text-gray-200'}`}
        />
    ));
};

const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AERO ENTERPRISES",
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "126",
        "bestRating": "5",
        "worstRating": "1"
    },
    "review": testimonials.map(t => ({
        "@type": "Review",
        "author": { "@type": "Person", "name": t.name },
        "datePublished": t.date,
        "reviewBody": t.text,
        "reviewRating": {
            "@type": "Rating",
            "ratingValue": t.rating,
            "bestRating": "5"
        },
        "itemReviewed": {
            "@type": "Product",
            "name": t.product
        }
    }))
};

export default function TestimonialsPage() {
    return (
        <main className="bg-white font-sans">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
            />

            {/* 1. HERO SECTION */}
            <div className="blue-metal w-full h-[35vh] flex justify-center items-center text-center px-6">
                <div>
                    <h1 className="text-4xl md:text-6xl text-white font-black uppercase tracking-tighter mb-4">
                        Industrial Trust Stories
                    </h1>
                    <p className="text-blue-100 max-w-2xl mx-auto text-lg font-medium">
                        Verified feedback from engineers, procurement heads, and factory owners across the Mumbai industrial belt.
                    </p>
                </div>
            </div>

            {/* 2. LIVE STATS BAR */}
            <div className="py-12 bg-gray-50 border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center md:border-r last:border-none border-gray-200" data-aos="zoom-in">
                                <div className="text-3xl md:text-5xl font-black text-black mb-1">{stat.number}</div>
                                <p className="text-[10px] font-black uppercase tracking-widest text-gray-500">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 3. TESTIMONIALS GRID */}
            <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-100 rounded-4xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col justify-between"
                            data-aos="fade-up"
                        >
                            <div>
                                <div className="flex justify-between items-start mb-6">
                                    <Quote className="w-10 h-10 text-gray-100 fill-gray-100" />
                                    <div className="flex gap-1">{renderStars(testimonial.rating)}</div>
                                </div>
                                <p className="text-gray-700 font-medium italic mb-8 leading-relaxed">
                                    &quot;{testimonial.text}&quot;
                                </p>
                            </div>

                            <div className="pt-6 border-t border-gray-50">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="font-black text-black uppercase text-sm tracking-tight">{testimonial.name}</span>
                                    <ShieldCheck className="w-4 h-4 text-blue-600" />
                                </div>
                                <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">{testimonial.company}</p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="bg-gray-100 text-[9px] font-black px-2 py-1 rounded text-gray-500 uppercase tracking-tighter">
                                        Location: {testimonial.location}
                                    </span>
                                    <span className="bg-gray-100 text-[9px] font-black px-2 py-1 rounded text-gray-500 uppercase tracking-tighter">
                                        Product: {testimonial.product}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* 4. VERIFICATION PROMISE SECTION */}
            <section className="pb-24 px-6">
                <div className="max-w-4xl mx-auto dark-metal-card rounded-[3rem] p-10 md:p-16 text-center text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full -mr-32 -mt-32"></div>
                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6">The Aero Trust Guarantee</h2>
                    <p className="text-white/70 text-lg mb-10 leading-relaxed">
                        Every review on this page represents a real industrial transaction. We maintain 100% transparency with Mill Test Certificates (MTC) and certified digital weighbridge receipts for every ton supplied.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
                            <CheckCircle2 className="text-blue-500" /> JSW/TATA/SAIL Certified
                        </div>
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
                            <CheckCircle2 className="text-blue-500" /> ISO 9001:2015 Supply Chain
                        </div>
                    </div>
                </div>
            </section>

            <CTA
                title="Ready to Partner with a Verified Supplier?"
                description="Join 500+ manufacturing entities who have made Aero Enterprises their definitive steel partner. Experience precision, transparency, and legacy."
                primaryButtonText="Request a Technical Consultation"
                primaryButtonLink="/contact"
                secondaryButtonText="Explore Products"
                secondaryButtonLink="/products"
            />
        </main>
    );
}
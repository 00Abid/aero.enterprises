import { getProductBySlug, getAllProducts } from '../../../data/product';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
    CheckCircle2, Info, Factory, Truck, ShieldCheck,
    BarChart3, Calculator, MapPin, Layers, ChevronDown,
    FileText, Zap, Ruler
} from 'lucide-react';
import WhatsappButton from '../../components/WhatsappButton';
import CTA from '../../components/CTA';

export async function generateMetadata({ params }) {
    const { productSlug } = await params;
    const product = getProductBySlug(productSlug);
    if (!product) return { title: 'Product Not Found' };
    return {
        title: product.seo_title,
        description: product.seo_meta_description,
        keywords: product.material_keywords,
        alternates: { canonical: `https://www.aeroenterprises.shop/products/${product.material_slug}` },
        openGraph: {
            title: product.seo_title,
            description: product.seo_meta_description,
            url: `https://www.aeroenterprises.shop/products/${product.material_slug}`,
            images: [{ url: product.img }],
            type: 'website',
        },
    };
}

export async function generateStaticParams() {
    const products = getAllProducts();
    return products.map((product) => ({ productSlug: product.material_slug }));
}

export default async function ProductPage({ params }) {
    const { productSlug } = await params;
    const product = getProductBySlug(productSlug);
    if (!product) notFound();

    const specifications = product.specifications ?? {};
    const usesSection = product.hr_coil_uses ?? product.ss_coil_uses ?? product.hr_sheet_uses ?? { title: 'Industrial Applications', applications: [] };
    const gradesSection = product.grades_section ?? { title: 'Standard Grades', grades: [] };
    const deliveryAreas = product.delivery_areas ?? [];
    const faqs = product.faqs ?? [];
    const relatedProducts = product.related_products ?? [];
    const compareSection = product.hr_vs_cr_section ?? product.ss_grades_comparison ?? product.hr_vs_cr_sheet_section ?? null;
    const weightCalc = product.weight_calculator_section ?? null;
    const hsn = product.hsn_code_section ?? null;
    const secondary = product.secondary_product_mention ?? null;
    const technicalSpecs = product.technical_specs ?? {};

    const jsonLd = {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": product.material_name,
        "image": product.img,
        "description": product.description,
        "brand": { "@type": "Brand", "name": "Aero Enterprises" },
        "offers": {
            "@type": "Offer",
            "priceCurrency": "INR",
            "price": product.price_avg_inr,
            "availability": "https://schema.org/InStock",
            "url": `https://www.aeroenterprises.shop/products/${product.material_slug}`
        }
    };

    return (
        <main className="bg-white font-sans text-slate-900 overflow-x-hidden">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* 1. HERO HEADER - Improved responsive heights */}
            <header className="blue-metal w-full py-16 md:py-28 flex justify-center items-center text-center px-6">
                <div className="max-w-4xl">
                    <h1 className="text-3xl md:text-6xl font-black text-white uppercase tracking-tighter mb-6 leading-tight">
                        {product.seo_h1}
                    </h1>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
                        <span className="text-blue-100 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                            <ShieldCheck size={18} className="text-blue-400" /> Mill Certified
                        </span>
                        <span className="text-blue-100 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                            <Factory size={18} className="text-blue-400" /> Primary Stock
                        </span>
                        <span className="text-blue-100 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                            <Truck size={18} className="text-blue-400" /> Fast Dispatch
                        </span>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-6">

                {/* 2. TOP PROFILE - Better spacing and mobile layout */}
                <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-start py-16 md:py-24">
                    <div className="lg:sticky lg:top-28">
                        <div className="bg-gray-50 rounded-3xl md:rounded-[4rem] p-6 md:p-12 border-4 md:border-8 border-white shadow-2xl flex items-center justify-center aspect-square overflow-hidden group relative">
                            <Image
                                src={product.img}
                                alt={product.material_name}
                                className="w-full h-auto max-h-[400px] md:max-h-[500px] object-contain transition-transform duration-700 group-hover:scale-105"
                                width={800} height={800} priority
                            />
                            <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur px-4 py-1.5 rounded-full border border-gray-100 text-[10px] font-black uppercase tracking-widest text-slate-500 shadow-sm">
                                {product.stock_status}
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-10 md:gap-14">
                        <div className="space-y-6">
                            <div className="inline-block px-4 py-1 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full">
                                {product.category}
                            </div>
                            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">Technical Profile</h2>
                            <p className="text-slate-600 text-lg md:text-xl leading-relaxed font-medium">
                                {product.intro_content}
                            </p>
                            <div className="p-6 md:p-8 bg-blue-50 rounded-3xl border-l-10 border-blue-600 italic text-blue-900 font-bold text-lg leading-snug">
                                &ldquo;{product.usp_short}&rdquo;
                            </div>
                        </div>

                        {/* Responsive Price Card */}
                        <div className="p-8 md:p-12 dark-metal-card rounded-[2.5rem] md:rounded-[3.5rem] text-white shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-6 opacity-10 rotate-12 hidden md:block"><BarChart3 size={120} /></div>
                            <span className="text-blue-400 text-[10px] uppercase font-black tracking-[0.3em] block mb-4">Market Rate</span>
                            <div className="flex items-baseline gap-3 flex-wrap mb-8">
                                <span className="text-5xl md:text-7xl font-black tracking-tighter italic">₹{product.price_avg_inr.toLocaleString('en-IN')}</span>
                                <span className="text-white/40 text-xs md:text-sm font-black uppercase tracking-widest">/ Metric Ton</span>
                            </div>
                            <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-8">
                                <div className="bg-white/5 p-4 rounded-2xl">
                                    <span className="text-[9px] text-white/40 uppercase font-black block mb-1">Min Gauge</span>
                                    <span className="text-lg font-black">{product.min_thickness_mm} MM</span>
                                </div>
                                <div className="bg-white/5 p-4 rounded-2xl">
                                    <span className="text-[9px] text-white/40 uppercase font-black block mb-1">Max Gauge</span>
                                    <span className="text-lg font-black">{product.max_thickness_mm} MM</span>
                                </div>
                            </div>
                        </div>
                        <WhatsappButton productType={product.material_name} />
                    </div>
                </div>

                {/* 3. CORE TECHNICAL CONTENT - Significant spaces added */}
                <div className="grid lg:grid-cols-3 gap-16 md:gap-24 pb-20 md:pb-32">
                    <div className="lg:col-span-2 space-y-24 md:space-y-40">

                        {/* Summary */}
                        <section className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-10">
                                <div className="h-1.5 w-16 bg-blue-600 rounded-full"></div>
                                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter">{product.what_is_section.title}</h2>
                            </div>
                            <p className="text-slate-600 text-lg md:text-xl leading-relaxed font-medium">{product.what_is_section.content}</p>
                        </section>

                        {/* Weight Table - Mobile Scrollable */}
                        {product.thickness_weight_table && (
                            <section className="space-y-10">
                                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight flex items-center gap-4">
                                    <Ruler className="text-blue-600" /> {product.thickness_weight_table.title}
                                </h3>
                                <div className="overflow-x-auto rounded-3xl border border-gray-100 shadow-xl">
                                    <table className="w-full text-left text-sm font-bold uppercase tracking-tight min-w-[500px]">
                                        <thead className="bg-slate-900 text-white">
                                            <tr>
                                                <th className="px-8 py-6">Thickness (mm)</th>
                                                <th className="px-8 py-6 text-right">Weight (KG)</th>
                                                <th className="px-8 py-6 text-right">Weight (LBS)</th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white">
                                            {product.thickness_weight_table.weights.map((row, i) => (
                                                <tr key={i} className="border-b border-gray-50 hover:bg-blue-50 transition-colors">
                                                    <td className="px-8 py-6 text-blue-600 font-black">{row.thickness}</td>
                                                    <td className="px-8 py-6 text-right text-slate-900">{row.weight_kg}</td>
                                                    <td className="px-8 py-6 text-right text-slate-400">{row.weight_lb}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </section>
                        )}

                        {/* Applications Grid - Responsive Columns */}
                        <section className="space-y-10">
                            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight flex items-center gap-4">
                                <Zap className="text-blue-600" size={32} /> {usesSection.title}
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                                {usesSection.applications.map((use, i) => (
                                    <div key={i} className="flex items-start gap-4 p-6 bg-slate-50 rounded-4xl font-bold text-sm text-slate-800 border border-transparent hover:border-blue-200 hover:bg-white transition-all hover:shadow-md">
                                        <CheckCircle2 className="text-blue-600 shrink-0 mt-0.5" size={20} />
                                        <span>{use}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Responsive Comparison Section */}
                        {compareSection && (
                            <section className="p-8 md:p-16 bg-slate-900 rounded-[3rem] md:rounded-[4rem] text-white relative overflow-hidden">
                                <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px]"></div>
                                <h2 className="text-2xl md:text-3xl font-black mb-8 uppercase tracking-tighter flex items-center gap-4">
                                    <FileText className="text-blue-500" /> {compareSection.title}
                                </h2>
                                <p className="text-blue-100/70 text-lg md:text-xl leading-relaxed font-medium relative z-10 italic">
                                    {compareSection.content}
                                </p>
                            </section>
                        )}

                        {/* HSN & Weight Boxes - Stack on Mobile */}
                        <div className="grid md:grid-cols-2 gap-6 md:gap-10">
                            {weightCalc && (
                                <div className="p-8 md:p-12 bg-slate-50 rounded-[2.5rem] border border-gray-100 group hover:bg-blue-600 transition-all duration-500">
                                    <Calculator className="text-blue-600 mb-6 group-hover:text-white transition-colors" size={40} />
                                    <h3 className="text-xl font-black mb-4 uppercase tracking-tighter group-hover:text-white transition-colors">{weightCalc.title}</h3>
                                    <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium group-hover:text-blue-50 transition-colors italic">{weightCalc.content}</p>
                                </div>
                            )}
                            {hsn && (
                                <div className="p-8 md:p-12 bg-slate-50 rounded-[2.5rem] border border-gray-100 group hover:bg-slate-900 transition-all duration-500">
                                    <ShieldCheck className="text-blue-600 mb-6 transition-colors" size={40} />
                                    <h3 className="text-xl font-black mb-4 uppercase tracking-tighter group-hover:text-white transition-colors">{hsn.title}</h3>
                                    <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium group-hover:text-slate-400 transition-colors italic">{hsn.content}</p>
                                </div>
                            )}
                        </div>

                        {/* Tech Benchmarks - Clean Grid */}
                        <section className="bg-slate-50 p-10 md:p-16 rounded-[3rem] md:rounded-[4.5rem]">
                            <h3 className="text-2xl md:text-3xl font-black mb-12 uppercase tracking-tight text-center">Material Integrity</h3>
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                                {Object.entries(technicalSpecs).map(([key, value]) => (
                                    <div key={key} className="text-center group">
                                        <div className="text-[10px] font-black text-blue-600 uppercase tracking-widest block mb-2 underline decoration-blue-200 underline-offset-4">{key.replace('_', ' ')}</div>
                                        <span className="text-xs md:text-sm font-black text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">{value}</span>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* SIDEBAR - Authoritative Sticky */}
                    <aside className="space-y-10 lg:mt-0">
                        <div className="bg-white p-8 md:p-10 rounded-[2.5rem] md:rounded-[3.5rem] border-[3px] md:border-[6px] border-slate-900 shadow-2xl h-fit ">
                            <h3 className="text-xl font-black mb-10 border-b-4 border-blue-600 pb-4 uppercase tracking-tighter flex items-center justify-between">
                                Material Data <Info size={24} />
                            </h3>
                            <div className="space-y-8">
                                {Object.entries(specifications).map(([key, value]) => {
                                    if (key === 'title' || key === 'standard_size') return null;
                                    return (
                                        <div key={key} className="group">
                                            <span className="text-[9px] text-slate-400 uppercase font-black block mb-2 tracking-[0.2em] group-hover:text-blue-600 transition-colors">{key.replace('_', ' ')}</span>
                                            <span className="text-sm font-black text-slate-900 leading-tight block">{value}</span>
                                        </div>
                                    )
                                })}
                            </div>

                            <div className="mt-12 pt-10 border-t-2 border-slate-100">
                                <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-blue-600 mb-6">{gradesSection.title}</h4>
                                <ul className="space-y-4">
                                    {(gradesSection.grades || []).map((grade, i) => (
                                        <li key={i} className="text-[11px] font-black text-slate-700 flex items-start gap-3">
                                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-1 shrink-0 shadow-[0_0_8px_rgba(37,99,235,0.6)]" />
                                            <span className="leading-tight uppercase">{grade}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {secondary && (
                            <div className="p-10 dark-metal-card rounded-[3rem] text-white shadow-xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity"><Layers size={80} /></div>
                                <h4 className="font-black text-sm uppercase mb-4 tracking-tighter text-blue-400 italic">{secondary.title}</h4>
                                <p className="text-white/60 text-xs leading-relaxed font-bold">{secondary.content}</p>
                            </div>
                        )}

                        <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-gray-100 text-center space-y-4">
                            <Truck className="mx-auto text-blue-600" size={40} />
                            <h4 className="text-xs font-black uppercase">Unit II Logistics Hub</h4>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-relaxed">
                                Immediate 15-minute dispatch readiness to NH-48 Express Highway.
                            </p>
                        </div>
                    </aside>
                </div>

                {/* 4. BOTTOM ECOSYSTEM - Dynamic Spaces */}
                <div className="space-y-24 md:space-y-48 py-20">

                    {/* Regional Map Grid */}
                    <section className="text-center bg-slate-900 rounded-[3rem] md:rounded-[5rem] py-20 md:py-32 px-6 md:px-12 shadow-inner relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('/mesh.svg')] opacity-5 scale-150"></div>
                        <MapPin className="mx-auto text-blue-500 mb-10 animate-pulse" size={56} />
                        <h3 className="text-4xl md:text-5xl font-black text-white mb-8 uppercase tracking-tighter leading-tight italic">Strategic Supply Hubs</h3>
                        <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-5xl mx-auto">
                            {deliveryAreas.map((area, i) => (
                                <span key={i} className="px-6 py-3 md:px-8 md:py-4 bg-white/5 border border-white/10 rounded-2xl text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] text-white hover:bg-blue-600 transition-all shadow-lg">
                                    {area}
                                </span>
                            ))}
                        </div>
                    </section>

                    {/* Inventory Ecosystem */}
                    <section className="space-y-16">
                        <div className="flex items-center justify-between">
                            <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter italic">Inventory Ecosystem</h3>
                            <div className="h-1 flex-1 bg-slate-100 ml-12 hidden lg:block"></div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-8">
                            {relatedProducts.map((slug) => (
                                <Link key={slug} href={`/products/${slug}`} className="p-8 md:p-12 bg-white border border-gray-100 rounded-[2.5rem] text-center hover:shadow-2xl hover:-translate-y-2 transition-all group flex flex-col justify-center items-center">
                                    <Layers className="text-slate-100 group-hover:text-blue-600 mb-6 transition-colors" size={48} />
                                    <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-2 opacity-0 group-hover:opacity-100 transition-opacity">Request Quote</p>
                                    <p className="text-xs md:text-sm font-black uppercase text-slate-900 tracking-tighter">
                                        {slug.replace(/-/g, ' ')}
                                    </p>
                                </Link>
                            ))}
                        </div>
                    </section>

                    {/* Tech Q&A - Bold Details */}
                    <section className="max-w-4xl mx-auto space-y-16">
                        <div className="text-center">
                            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Technical Q&A</h2>
                            <p className="text-blue-600 text-[10px] md:text-xs font-black uppercase tracking-[0.5em] mt-6 leading-relaxed italic">Verified Procurement Intelligence</p>
                        </div>
                        <div className="space-y-6">
                            {faqs.map((faq, i) => (
                                <details key={i} className="group bg-white border-2 border-slate-50 rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-12 transition-all hover:border-blue-100 open:shadow-xl">
                                    <summary className="flex items-center justify-between cursor-pointer list-none font-black text-slate-900 uppercase tracking-tight text-lg md:text-xl">
                                        <span className="flex-1 pr-10">{faq.question}</span>
                                        <div className="bg-slate-100 p-3 rounded-2xl group-open:bg-blue-600 group-open:text-white transition-all">
                                            <ChevronDown className="transition-transform group-open:rotate-180" size={24} />
                                        </div>
                                    </summary>
                                    <div className="mt-10 text-slate-600 text-base md:text-lg leading-relaxed border-t border-slate-100 pt-10 font-medium italic">
                                        {faq.answer}
                                    </div>
                                </details>
                            ))}
                        </div>
                    </section>
                </div>
            </div>

            <CTA
                title={`Procure ${product.material_name}`}
                description={`Access Mill-Direct rates for ${product.material_name}. Bulk tonnage discounts and precision slitting available at our Vasai Hub.`}
                primaryButtonText="Request Direct RFQ"
                primaryButtonLink="/contact"
                secondaryButtonText="All Inventory"
                secondaryButtonLink="/products"
            />
        </main>
    );
}
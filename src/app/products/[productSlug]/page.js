import { getProductBySlug, getAllProducts } from '../../../data/product';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CheckCircle2, Info, Factory, Truck, ShieldCheck, BarChart3, Calculator, MapPin, Layers } from 'lucide-react';
import WhatsappButton from '../../components/WhatsappButton';
import CTA from '../../components/CTA';

export async function generateMetadata({ params }) {
    const { productSlug } = await params;
    const product = getProductBySlug(productSlug);
    if (!product) return { title: 'Product Not Found' };
    return {
        title: product.seo_title,
        description: product.seo_meta_description,
    };
}

export async function generateStaticParams() {
    const products = getAllProducts();
    return products.map((product) => ({
        productSlug: product.material_slug,
    }));
}

export default async function ProductPage({ params }) {
    const { productSlug } = await params;
    const product = getProductBySlug(productSlug);

    if (!product) notFound();

    // Sections Mapping from your Data structure
    const priceContent = product.hr_coil_price_section?.content ?? product.cr_coil_price_section?.content ?? product.price_trends?.content ?? '';
    const usesSection = product.hr_coil_uses ?? product.cr_coil_uses ?? { title: 'Industrial Applications', applications: [] };
    const compareSection = product.hr_vs_cr_section ?? product.cr_vs_hr_section ?? null;
    const specifications = product.specifications ?? {};
    const gradesSection = product.grades_section ?? { title: 'Standard Grades', grades: [] };
    const priceTrends = product.price_trends ?? null;
    const weightCalc = product.weight_calculator_section ?? null;
    const hsn = product.hsn_code_section ?? null;
    const whyChoose = product.why_choose_us ?? [];
    const secondary = product.secondary_product_mention ?? null;
    const relatedProducts = product.related_products ?? [];
    const technicalSpecs = product.technical_specs ?? {};
    const deliveryAreas = product.delivery_areas ?? [];
    const faqs = product.faqs ?? [];

    return (
        <main className="bg-white font-sans text-slate-900">

            {/* 1. HERO HEADER */}
            <header className="blue-metal w-full py-20 flex justify-center items-center text-center px-6">
                <div className="max-w-4xl">
                    <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4">
                        {product.seo_h1}
                    </h1>
                    <p className="text-blue-100 text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-4">
                        <span className="flex items-center gap-1"><ShieldCheck size={14} /> Verified MTC</span>
                        <span className="flex items-center gap-1"><Factory size={14} /> JSW/TATA Stock</span>
                    </p>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-6 py-16">

                {/* 2. TOP PROFILE: Image & Quick Specs */}
                <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
                    <div className="lg:sticky lg:top-28">
                        <div className="bg-gray-50 rounded-[3rem] p-12 border-8 border-white shadow-xl flex items-center justify-center aspect-square overflow-hidden group">
                            <Image
                                src={product.img}
                                alt={product.material_name}
                                className="w-full h-auto max-h-[500px] object-contain transition-transform duration-700 group-hover:scale-110"
                                width={600} height={600} priority
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-8">
                        <div>
                            <h2 className="text-2xl font-black uppercase tracking-tight mb-4">Technical Profile</h2>
                            <p className="text-slate-600 text-lg leading-relaxed mb-6 font-medium">{product.intro_content}</p>
                            <div className="p-5 bg-blue-50 rounded-2xl border-l-8 border-blue-600 italic text-blue-900 font-bold text-sm">
                                "{product.usp_short}"
                            </div>
                        </div>

                        {/* Quick Data Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                                <span className="text-[10px] uppercase tracking-widest font-black text-gray-400 block mb-1">Standard Grade</span>
                                <span className="text-sm font-black text-black">{specifications.standard}</span>
                            </div>
                            <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                                <span className="text-[10px] uppercase tracking-widest font-black text-gray-400 block mb-1">Thickness</span>
                                <span className="text-sm font-black text-black">{specifications.thickness_range}</span>
                            </div>
                        </div>

                        {/* Price Display */}
                        <div className="p-10 dark-metal-card rounded-[2.5rem] text-white shadow-2xl overflow-hidden relative">
                            <div className="absolute top-0 right-0 p-4 opacity-10"><BarChart3 size={60} /></div>
                            <span className="text-white/60 text-[10px] uppercase font-black tracking-widest block mb-2">Est. Market Rate</span>
                            <div className="flex items-baseline gap-2 flex-wrap">
                                <span className="text-6xl font-black">₹{product.price_avg_inr.toLocaleString('en-IN')}</span>
                                <span className="text-white/60 text-xs font-bold uppercase tracking-widest">/ Metric Ton</span>
                            </div>
                            <p className="mt-6 text-[10px] text-white/50 border-t border-white/10 pt-4 leading-tight">
                                *GST 18% additional. {priceContent}
                            </p>
                        </div>
                        <WhatsappButton productType={product.material_name} />
                    </div>
                </div>

                {/* 3. TECHNICAL BODY CONTENT */}
                <div className="grid lg:grid-cols-3 gap-16">
                    <div className="lg:col-span-2 space-y-24">

                        {/* What is & Uses */}
                        <section>
                            <h2 className="text-3xl font-black mb-8 uppercase tracking-tighter">{product.what_is_section.title}</h2>
                            <p className="text-slate-600 text-lg leading-relaxed font-medium mb-12">{product.what_is_section.content}</p>

                            <h3 className="text-2xl font-black mb-6 uppercase tracking-tight">{usesSection.title}</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {usesSection.applications.map((use, i) => (
                                    <div key={i} className="flex items-center gap-4 p-5 bg-gray-50 rounded-2xl font-bold text-sm text-slate-800 border border-transparent hover:border-blue-100 transition-all">
                                        <CheckCircle2 className="text-blue-600 shrink-0" size={18} /> {use}
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Comparison Matrix (Dark Section) */}
                        {compareSection && (
                            <section className="p-10 dark-metal-card rounded-[3rem] text-white">
                                <h2 className="text-2xl font-black mb-6 uppercase tracking-tight">{compareSection.title}</h2>
                                <p className="text-white/70 text-base leading-relaxed font-medium italic">{compareSection.content}</p>
                            </section>
                        )}

                        {/* Weight & HSN Info */}
                        <div className="grid md:grid-cols-2 gap-8">
                            {weightCalc && (
                                <div className="p-8 border-2 border-gray-50 rounded-4xl dark-metal-card">
                                    <Calculator className=" mb-4" />
                                    <h3 className="text-lg font-black mb-4 uppercase">{weightCalc.title}</h3>
                                    <p className="text-white text-sm leading-relaxed italic">{weightCalc.content}</p>
                                </div>
                            )}
                            {hsn && (
                                <div className="p-8 border-2 border-gray-50 rounded-4xl dark-metal-card">
                                    <Info className=" mb-4" />
                                    <h3 className="text-lg font-black mb-4 uppercase">{hsn.title}</h3>
                                    <p className="text-white text-sm leading-relaxed italic">{hsn.content}</p>
                                </div>
                            )}
                        </div>

                        {/* Detailed Technical Specs (Map from technical_specs object) */}
                        <section>
                            <h3 className="text-2xl font-black mb-8 uppercase tracking-tight">Technical Benchmarks</h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                {Object.entries(technicalSpecs).map(([key, value]) => (
                                    <div key={key} className="p-5 bg-white border border-gray-100 rounded-2xl shadow-sm">
                                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-1">{key.replace('_', ' ')}</span>
                                        <span className="text-sm font-black text-black leading-tight">{value}</span>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* SIDEBAR: Specs, Grades, and Trust */}
                    <aside className="space-y-8">
                        <div className="bg-gray-50 p-8 rounded-4xl border border-gray-100 h-fit sticky top-28">
                            <h3 className="text-lg font-black mb-8 border-b border-gray-200 pb-4 uppercase tracking-tighter">Material Data</h3>
                            <div className="space-y-6">
                                {Object.entries(specifications).map(([key, value]) => {
                                    if (key === 'title') return null;
                                    return (
                                        <div key={key}>
                                            <span className="text-[10px] text-gray-400 uppercase font-black block mb-1">{key.replace('_', ' ')}</span>
                                            <span className="text-sm font-black text-black leading-tight">{value}</span>
                                        </div>
                                    )
                                })}
                            </div>

                            {/* Grades List */}
                            <div className="mt-10 pt-10 border-t border-gray-200">
                                <h4 className="text-xs font-black uppercase tracking-widest mb-4">{gradesSection.title}</h4>
                                <ul className="space-y-2">
                                    {gradesSection.grades.map((grade, i) => (
                                        <li key={i} className="text-xs font-bold text-gray-600 flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 bg-black rounded-full" /> {grade}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Secondary Product Mention */}
                        {secondary && (
                            <div className="p-8 dark-metal-card rounded-4xl text-white">
                                <Layers className="text-blue-400 mb-4" />
                                <h4 className="font-black text-sm uppercase mb-3">{secondary.title}</h4>
                                <p className="text-white/70 text-xs leading-relaxed">{secondary.content}</p>
                            </div>
                        )}
                    </aside>
                </div>

                {/* 4. BOTTOM SECTIONS: Delivery, Related, FAQ */}
                <div className="mt-32 space-y-24">

                    {/* Delivery Map Signal */}
                    <section className="text-center bg-gray-50 rounded-[3rem] p-12">
                        <MapPin className="mx-auto  mb-6" size={40} />
                        <h3 className="text-3xl font-black mb-8 uppercase tracking-tighter">Regional Supply Hubs</h3>
                        <div className="flex flex-wrap justify-center gap-3">
                            {deliveryAreas.map((area, i) => (
                                <span key={i} className="px-5 py-2 bg-white border border-gray-200 rounded-full text-[10px] font-black uppercase tracking-widest text-gray-600 shadow-sm">
                                    {area}
                                </span>
                            ))}
                        </div>
                    </section>

                    {/* Related Products */}
                    <section>
                        <h3 className="text-2xl font-black mb-10 text-center uppercase tracking-tighter">Cross-Reference Inventory</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {relatedProducts.map((slug) => (
                                <Link key={slug} href={`/products/${slug}`} className="p-6 dark-metal-card   border border-gray-100 rounded-3xl text-center hover:shadow-xl transition-all group">
                                    <p className="text-[10px] font-black  uppercase tracking-widest mb-2">Category: Steel</p>
                                    <p className="text-xs font-black uppercase group-hover:text-blue-600 transition-colors">
                                        {slug.replace(/-/g, ' ').toUpperCase()}
                                    </p>
                                </Link>
                            ))}
                        </div>
                    </section>

                    {/* FAQ Pattern */}
                    <section className="max-w-3xl mx-auto">
                        <h2 className="text-4xl font-black text-center mb-16 uppercase tracking-tighter">Procurement Q&A</h2>
                        <div className="space-y-4">
                            {faqs.map((faq, i) => (
                                <details key={i} className="group bg-white border border-gray-100 rounded-4xl p-8 shadow-sm transition-all hover:shadow-md">
                                    <summary className="flex items-center justify-between cursor-pointer list-none font-black text-black uppercase tracking-tight text-sm">
                                        {faq.question}
                                        <ChevronDown className="transition group-open:rotate-180" size={20} />
                                    </summary>
                                    <div className="mt-6 text-slate-600 text-sm leading-relaxed border-t border-gray-50 pt-6 font-medium">
                                        {faq.answer}
                                    </div>
                                </details>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
            <CTA
                title={`Source Certified ${product.material_name}`}
                description={`Contact Aero Enterprises for latest market rates on ${product.material_name}. Immediate delivery available across the Mumbai-Thane-Vasai belt.`}
                primaryButtonText="Request Direct Quote"
                primaryButtonLink="/contact"
                secondaryButtonText="View Catalog"
                secondaryButtonLink="/products"
            />
        </main>
    );
}

function ChevronDown({ className, size }) {
    return (
        <svg fill="none" height={size} stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24" width={size} className={className}>
            <path d="M19 9l-7 7-7-7"></path>
        </svg>
    );
}
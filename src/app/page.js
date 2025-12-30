import React from 'react'
import { MoveRight, ShieldCheck, Zap, Factory, CheckCircle2, Ruler, Truck, Warehouse, Building2, MapPin } from 'lucide-react';
import CTA from './components/CTA';
import Link from 'next/link';
import FAQSectionClient from './components/FAQSectionClient';

const Home = () => {
  const currentMonth = new Date().toLocaleString('default', { month: 'long', year: 'numeric' });

  const excellenceFeatures = [
    {
      title: 'Mill-Certified Materials',
      description: 'Direct distribution of JSW, TATA, and SAIL primary steel. Every dispatch includes a Mill Test Certificate (MTC) ensuring 100% chemical and mechanical transparency.',
    },
    {
      title: 'Technical Consultation',
      description: '36 years of industrial expertise in grade selection for Automotive, HVAC, and Construction. We solve material failure issues before they hit your production line.',
    },
    {
      title: 'Standard Compliance',
      description: 'Inventory strictly adheres to IS 2062:2011, ASTM A240, and JIS G3141 standards, providing the structural safety required for high-stakes engineering projects.',
    },
  ];

  const techSpecs = [
    { material: 'HR Sheets (Hot Rolled)', slug: 'hr-sheet-supplier-mumbai', grades: 'IS 2062 E250 / E350', thickness: '1.6mm - 12mm', origin: 'JSW / SAIL / AMNS' },
    { material: 'CR Sheets (Cold Rolled)', slug: 'cr-sheet-supplier-mumbai', grades: 'IS 513 CR1/CR2/CR3', thickness: '0.5mm - 3.0mm', origin: 'TATA / JSW' },
    { material: 'Stainless Steel (SS)', slug: 'stainless-steel-coil-supplier-mumbai', grades: 'SS 304 / 316 / 316L', thickness: '0.4mm - 6.0mm', origin: 'Jindal / Imported' },
    { material: 'MS Chequered Plate', slug: 'ms-chequered-plate-supplier-mumbai', grades: 'IS 2062 Diamond/Tear-Drop', thickness: '2.5mm - 10.0mm', origin: 'Primary Mills' },
  ];

  const companies = [
    {
      name: 'SAGAR METAL CUTTING WORKS',
      desc: 'Precision Stamping and Bending. Processing MS (up to 20mm) and SS (up to 12mm) with ±0.1mm accuracy.',
      url: 'https://smcw.netlify.app/',
    },
    {
      name: 'AERO MOTOLITE',
      desc: 'Tier-1 manufacturer of Automotive Parts, LED Lighting, Hardware Parts and Accessories.',
      url: 'https://aeromotolite.vercel.app/',
    },
    {
      name: 'AERO LABS',
      desc: 'Industrial Digital Growth & SEO Engineering partner specializing in B2B technical transformation.',
      url: 'https://aerolab.vercel.app'
    }
  ];

  return (
    <main className='bg-white overflow-hidden font-sans'>

      {/* 1. HERO SECTION WITH FRESHNESS SIGNAL */}
      <section className="relative w-full h-screen md:min-h-screen overflow-hidden">
        <video
          src='/hero.mp4'
          poster='/hero-image.webp'
          autoPlay muted loop preload="metadata" playsInline
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="absolute inset-0 flex flex-col justify-center md:items-center md:text-center px-6 z-10">
          {/* THE FRESHNESS BADGE */}
          <div className="mb-6 inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 text-white text-xs font-bold uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Market Rates & Stock Updated: {currentMonth}
          </div>

          <h1 className="text-4xl md:text-7xl text-white font-black tracking-tight leading-tight uppercase">
            Aero Enterprises
          </h1>
          <h2 className="text-xl md:text-3xl text-white mt-4 max-w-4xl font-bold">
            Industrial Steel & Sheet Metal Hub | Mumbai & Vasai
          </h2>
          <p className="text-sm md:text-xl text-white/90 mt-8 max-w-3xl leading-relaxed font-medium">
            36 Years of Expertise in <strong>HR, CR, and Stainless Steel</strong> Sourcing.
            Supplying Mill-Certified Materials to the India&apos;s Core Industrial Corridors.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 md:justify-center">
            <Link href="/products" className="bg-white text-black px-10 py-4 rounded-md font-black uppercase tracking-wider hover:bg-gray-200 transition-all shadow-xl">Inventory List</Link>
            <Link href="/contact" className="border-2 border-white text-white px-10 py-4 rounded-md font-black uppercase tracking-wider hover:bg-white/10 transition-all">Quick Quote</Link>
          </div>
        </div>
      </section>

      {/* 2. E-E-A-T AUTHORITY SECTION */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-start mb-24">
            <div>
              <h2 className="text-3xl md:text-5xl text-black font-black mb-8 uppercase tracking-tighter">The Standard of Industrial Trust</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                In the <strong>Mumbai steel ecosystem</strong>, reliability is measured by the Mill Test Certificate (MTC). At Aero Enterprises, we eliminate the risks of non-prime sourcing by providing fully traceable, certified steel from <strong>JSW, SAIL, and TATA</strong>. Strategically headquartered in Vasai, we bridge the gap between heavy metallurgy and precision fabrication.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="flex items-center gap-3">
                  <Building2 className="w-6 h-6 text-black" />
                  <span className="font-bold text-sm uppercase tracking-tighter">MSME Registered Entity</span>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-black" />
                  <span className="font-bold text-sm uppercase tracking-tighter">ISO Grade Compliant</span>
                </div>
              </div>
              <div className="space-y-4 border-l-4 border-black pl-6 italic text-gray-600 font-medium">
                &quot;Providing certified steel solutions for India&apos;s infrastructure growth since 1989.&quot;
              </div>
            </div>
            <div className="space-y-6">
              {excellenceFeatures.map((feature, index) => (
                <div key={index} className="p-8 border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300" data-aos="fade-left">
                  <h3 className="text-xl font-black text-black mb-3 uppercase tracking-tight">{feature.title}</h3>
                  <p className="text-gray-700 leading-relaxed font-medium"> {feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE LINK HUB (TECHNICAL SPECS) */}
      <section className="py-24 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl text-black font-black uppercase mb-4">Material Grades & Dimensions</h2>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">Direct Mill Sourcing Specification Table</p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-300 bg-white shadow-2xl">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead className="blue-metal text-white">
                <tr>
                  <th className="p-6 text-sm font-black uppercase tracking-widest">Material Category</th>
                  <th className="p-6 text-sm font-black uppercase tracking-widest">Primary Standards</th>
                  <th className="p-6 text-sm font-black uppercase tracking-widest">Thickness Range</th>
                  <th className="p-6 text-sm font-black uppercase tracking-widest">Mill Origin</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {techSpecs.map((row, i) => (
                  <tr key={i} className="hover:bg-blue-50/30 transition-colors group">
                    <td className="p-6">
                      <Link href={`/products/${row.slug}`} className="text-base font-black text-black hover:text-blue-600 flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                        {row.material} <MoveRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </td>
                    <td className="p-6 text-sm font-medium text-gray-700">{row.grades}</td>
                    <td className="p-6 text-sm font-medium text-gray-700">{row.thickness}</td>
                    <td className="p-6 text-sm font-bold text-gray-900">{row.origin}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. INDUSTRIAL CAPABILITIES GRID */}
      <section className="py-24 blue-metal text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="md:text-center max-w-4xl md:mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter italic mb-4">Integrated Steel Processing</h2>
            <p className="text-white/70 text-lg font-medium">Advanced CNC infrastructure supporting High-Volume Fabrication.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { icon: <Ruler />, title: 'CNC Coil Slitting', desc: 'Custom slitting and Cut-to-Length (CTL) to reduce material wastage for B2B procurement.' },
              { icon: <Zap />, title: 'Fiber Laser Cutting', desc: 'Processing MS (20mm) and SS (12mm) via high-precision SAGAR METAL CUTTING WORKS Facility.' },
              { icon: <Truck />, title: 'Supply Chain Moat', desc: 'Optimized logistics network serving the Boisar-Bhiwandi-Taloja industrial belt.' }
            ].map((cap, i) => (
              <div key={i} className="dark-metal-card p-10 rounded-2xl shadow-lg border border-white/5 hover:border-blue-500 transition-all">
                <div className="mb-6 ">{cap.icon}</div>
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">{cap.title}</h3>
                <p className="text-white/70 leading-relaxed font-medium text-sm">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. GEOGRAPHIC AUTHORITY (LOCAL SEO) */}
      <section className="py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-20">
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-5xl text-black font-black mb-8 uppercase tracking-tighter">The Vasai Logistics Moat</h2>
            <p className="text-gray-800 text-lg leading-relaxed mb-8">
              Aero Enterprises operates from the <strong>Dhumal Nagar Industrial Hub in Vasai East</strong>. Located just 15 minutes from the <strong>Mumbai-Ahmedabad National Highway (NH-48)</strong>, our facility ensures zero-latency supply for the <strong>Palghar-Thane</strong> manufacturing cluster.
            </p>
            <div className="space-y-6 mb-10">
              <div className="flex gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100 items-center">
                <MapPin className="text-black w-8 h-8" />
                <div>
                  <span className="block font-black text-sm uppercase">Strategic Hub</span>
                  <span className="text-gray-600 text-xs font-bold uppercase">Dhumal Nagar, Vasai East, Palghar</span>
                </div>
              </div>
              <div className="flex gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100 items-center">
                <Warehouse className="text-black w-8 h-8" />
                <div>
                  <span className="block font-black text-sm uppercase">Stock Readiness</span>
                  <span className="text-gray-600 text-xs font-bold uppercase">Ready Inventory: 500+ Metric Tons</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 overflow-hidden rounded-[3rem] shadow-2xl">
            <video src="/about.mp4" autoPlay muted loop className="w-full h-[500px] object-cover" />
          </div>
        </div>
      </section>

      {/* 6. GROUP OF COMPANIES (ENTITY BINDING) */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="text-center max-w-4xl mx-auto px-6 mb-20">
          <h2 className="text-3xl md:text-5xl text-black font-black uppercase tracking-tight mb-4">Vertical Industrial Group</h2>
          <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">Seamless Integration of Sourcing, Fabrication, and Growth</p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
          {companies.map((company, index) => (
            <a key={index} href={company.url} target="_blank" rel="noopener noreferrer" className="group">
              <div className="dark-metal-card p-10 rounded-3xl shadow-xl h-full flex flex-col justify-between border border-white/5 hover:scale-[1.05] transition-all duration-500">
                <div>
                  <h3 className="text-xl font-black text-white border-b-4 border-black w-fit pb-2 uppercase tracking-tighter">{company.name}</h3>
                  <p className="pt-8 text-white/70 font-medium leading-relaxed">{company.desc}</p>
                </div>
                <div className="pt-10 text-white flex items-center gap-4 font-black uppercase tracking-widest text-xs">
                  Explore Company 
                  <MoveRight className='group-hover:translate-x-4 transition-transform' />
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <FAQSectionClient />

      <CTA
        title="Optimize Your Steel Supply Chain"
        description="Source mill-certified MS, SS, and GI products with total traceability. From Vasai East to the Pan-India industrial belt, Aero Enterprises is your technical partner."
        primaryButtonText="Download Full Catalogue"
        primaryButtonLink="/AERO-ENTERPRISES-CATALOGUE.pdf"
        isPrimaryDownload={true}
        secondaryButtonText="Get Market Rates"
        secondaryButtonLink="/contact"
      />
    </main>
  )
}

export default Home
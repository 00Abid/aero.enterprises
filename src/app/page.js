import React from 'react'
import {
  MoveRight, ShieldCheck, Zap, Factory, Ruler, Truck, Warehouse,
  Building2, MapPin, Settings, BarChart3, Scissors, Boxes, Gauge,
  ChevronRight, HardHat, Recycle, BadgeCheck, Microscope, Layers,
  CheckCircle2, Paintbrush, Hammer, Cpu
} from 'lucide-react';
import CTA from './components/CTA';
import Link from 'next/link';
import FAQSectionClient from './components/FAQSectionClient';
import Image from 'next/image';
import { HomePageSchema } from '../components/schema/WebPageSchema.js';

const Home = () => {
  const currentMonth = new Date().toLocaleString('default', { month: 'long', year: 'numeric' });

  return (
    <main className='bg-white overflow-hidden font-sans'>
      {/* Home Page Schema */}
      <HomePageSchema options={{ baseUrl: 'https://www.aeroenterprises.shop' }} />

      {/* 1. HERO SECTION: THE MANUFACTURING + SUPPLY HOOK */}
      <section className="relative w-full h-screen flex items-center overflow-hidden">
        <video
          src='/hero.mp4'
          poster='/hero-image.webp'
          autoPlay muted loop preload="metadata" playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-black via-black/70 to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 bg-blue-600 px-4 py-1 rounded-full text-white text-[10px] font-black uppercase tracking-[0.3em]">
              <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
              Integrated Hub: Supply & Fabrication
            </div>
            <h1 className="text-6xl md:text-[120px] text-white font-black tracking-tighter leading-[0.8] uppercase">
              AERO <br /> <span className="text-blue-500">ENTERPRISES</span>
            </h1>
            <p className="text-lg md:text-3xl text-white/90 mt-8 font-black uppercase tracking-tight">
              Sheet Metal Supply & Precision Fabrication Partner
            </p>
            <p className="text-sm md:text-xl text-white/70 mt-4 max-w-2xl leading-relaxed">
              Consolidating JSW/TATA Mill Sourcing with high-volume **Stamping, Bending, and Powder Coating**. One Partner. Total Reliability.
            </p>
            <div className="mt-12 flex flex-wrap gap-5">
              <Link href="/products" className="bg-blue-600 text-white px-10 py-5 rounded-full font-black uppercase tracking-widest hover:bg-blue-700 transition-all shadow-2xl flex items-center gap-3 text-xs">
                Sourcing Catalog <MoveRight size={18} />
              </Link>
              <Link href="/contact" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-full font-black uppercase tracking-widest hover:bg-white/20 transition-all text-xs">
                Fabrication RFQ
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DUAL-HUB ARCHITECTURE (UNIT I & UNIT II) */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Integrated Operations</h2>
          <p className="text-gray-500 font-bold uppercase tracking-widest text-xs mt-4">Bridging the gap from Mill to Assembly Line</p>
        </div>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-8">
          <div className="bg-white p-12 rounded-[3rem] shadow-sm border border-gray-100 group hover:shadow-2xl transition-all">
            <Warehouse className="text-blue-600 mb-6 group-hover:scale-110 transition-transform" size={48} />
            <h3 className="text-3xl font-black uppercase tracking-tighter mb-4">Unit II: Dhumal Nagar Hub</h3>
            <p className="text-gray-600 font-medium mb-8 leading-relaxed">Our **Logistics & Raw Material Hub**. Technical stockist of Primary and Secondary coils with 100% weight transparency via certified digital weighbridges.</p>
            <div className="grid grid-cols-2 gap-3">
              {['JSW/TATA Primary', 'Coil Slitting', 'HR/CR/GI/SS Stock', 'Digital Weighing'].map(t => (
                <div key={t} className="flex items-center gap-2 text-[10px] font-black uppercase text-slate-700 bg-gray-100 p-3 rounded-xl border border-gray-200">
                  <Truck size={12} className="text-blue-600" /> {t}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-slate-900 p-12 rounded-[3rem] text-white group hover:shadow-2xl transition-all">
            <Settings className="text-blue-400 mb-6 group-hover:rotate-90 transition-transform duration-700" size={48} />
            <h3 className="text-3xl font-black uppercase tracking-tighter mb-4">Unit I: Vasai Phata Unit</h3>
            <p className="text-white/60 font-medium mb-8 leading-relaxed">Our **Precision Production Hub**. Advanced CNC infrastructure for high-volume stamping, multi-axis bending, and automated finishing.</p>
            <div className="grid grid-cols-2 gap-3">
              {['CNC Bending', 'Metal Stamping', 'Powder Coating', 'Welding & Assembly'].map(t => (
                <div key={t} className="flex items-center gap-2 text-[10px] font-black uppercase text-blue-100 bg-white/5 p-3 rounded-xl border border-white/10">
                  <Zap size={12} className="text-blue-400" /> {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. EXPANDED SERVICE CLUSTER (THE FABRICATION PARTNER) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-slate-900 leading-none">The Fabrication <br />Mastery</h2>
              <p className="text-gray-500 font-bold uppercase tracking-widest text-xs mt-6">End-to-End Processing Capabilities</p>
            </div>
            <Link href="/services" className="bg-slate-900 text-white px-8 py-4 rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-blue-600 transition-all">All Capabilities</Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { title: 'Metal Stamping', icon: <Hammer />, desc: 'High-Volume Pressing', link: '/services/metal-stamping' },
              { title: 'CNC Bending', icon: <Layers />, desc: 'Multi-Axis Precision', link: '/services/cnc-bending' },
              { title: 'Powder Coating', icon: <Paintbrush />, desc: 'Industrial Finishing', link: '/services/powder-coating' },
              { title: 'CNC Punching', icon: <Cpu />, desc: 'Rapid Hole Profiling', link: '/services/punching' },
              { title: 'Laser Cutting', icon: <Scissors />, desc: 'Complex Geometry', link: '/services/laser-cutting' },
              { title: 'Welding', icon: <Factory />, desc: 'MIG/TIG Certified', link: '/services/welding' },
              { title: 'Shearing', icon: <Ruler />, desc: 'Custom Cut-to-Size', link: '/services/shearing-blanking' },
              { title: 'Supply Hub', icon: <Truck />, desc: 'Pan-India Logistics', link: '/services/technical-consultation' }
            ].map((s, i) => (
              <Link href={s.link} key={i} className="group p-8 border border-gray-100 bg-gray-50 hover:bg-blue-600 transition-all rounded-[2.5rem] flex flex-col justify-between h-64">
                <div className="text-blue-600 group-hover:text-white transition-colors">{s.icon}</div>
                <div>
                  <h4 className="font-black uppercase text-sm group-hover:text-white transition-colors">{s.title}</h4>
                  <p className="text-[10px] font-bold text-gray-400 group-hover:text-blue-100 mt-1 uppercase tracking-widest transition-colors">{s.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MATERIAL AUTHORITY SECTION */}
      <section className="py-24 bg-slate-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative h-[600px] rounded-[3rem] overflow-hidden group">
              <Image src="/press.webp" alt="Heavy Stamping Press" 
              fill className="object-cover  shadow-2xl" />
              <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent"></div>
              <div className="absolute bottom-10 left-10 text-white">
                <div className="text-5xl font-black uppercase italic tracking-tighter">High Volume</div>
                <div className="text-sm font-bold uppercase tracking-widest text-blue-400">Pressing & Stamping Unit</div>
              </div>
            </div>
            <div>
              <h2 className="text-5xl font-black uppercase tracking-tighter mb-8 leading-none">Mill-Certified <br />Supply Chain</h2>
              <p className="text-gray-600 font-medium text-lg leading-relaxed mb-10">
                Strategic stockist for JSW, TATA, and SAIL. We handle the complexity of grade selection (CQ, DQ, DDQ) so your production line never stops.
              </p>
              <div className="space-y-4 mb-10">
                {[
                  { label: "Hot Rolled (HR)", desc: "1.6mm - 12mm | IS 2062" },
                  { label: "Cold Rolled (CR)", desc: "0.5mm - 3.0mm | IS 513" },
                  { label: "Galvanized (GI)", desc: "0.4mm - 4.0mm | IS 277" }
                ].map((m, i) => (
                  <div key={i} className="flex justify-between p-6 bg-white rounded-2xl border border-gray-200 shadow-sm hover:border-blue-500 transition-all group">
                    <span className="font-black uppercase text-sm group-hover:text-blue-600 transition-colors">{m.label}</span>
                    <span className="text-gray-400 font-bold text-xs uppercase">{m.desc}</span>
                  </div>
                ))}
              </div>
              <Link href="/products" className="inline-flex items-center gap-3 text-xs font-black uppercase tracking-widest border-b-2 border-black pb-2">Full Material Matrix <MoveRight size={14} /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. THE INFRASTRUCTURE (THE EVIDENCE) */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-10">Production <br /><span className="text-blue-500">Infrastructure</span></h2>
              <div className="space-y-8">
                {[
                  { name: "Hydraulic Press Stamping", spec: "High-Volume Automotive & Hardware Components" },
                  { name: "Multi-Axis CNC Bending", spec: "±0.5mm Accuracy | 3100mm Bed Length" },
                  { name: "Industrial Powder Coating", spec: "Automated Conveyor Finishing | RAL Palette" },
                  { name: "Digital Weighing Facility", spec: "50MT Capacity | Mill-Direct Transparency" }
                ].map((mach, i) => (
                  <div key={i} className="border-l-4 border-blue-600 pl-6 group">
                    <h4 className="text-xl font-black uppercase group-hover:text-blue-400 transition-colors">{mach.name}</h4>
                    <p className="text-blue-300/50 text-xs font-bold uppercase tracking-widest mt-1">{mach.spec}</p>
                  </div>
                ))}
              </div>
              <Link href="/machinery" className="mt-12 inline-block bg-white text-black px-12 py-5 rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-blue-600 hover:text-white transition-all">
                Machine Inventory
              </Link>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-white/5 p-10 rounded-[3rem] border border-white/10 text-center">
                  <Gauge size={40} className="mx-auto mb-4 text-blue-500" />
                  <div className="text-4xl font-black">±0.1</div>
                  <div className="text-[10px] font-bold uppercase text-blue-300">Tolerance</div>
                </div>
                <div className="bg-blue-600 p-10 rounded-[3rem] text-center">
                  <BadgeCheck size={40} className="mx-auto mb-4 text-white" />
                  <div className="text-4xl font-black">100%</div>
                  <div className="text-[10px] font-bold uppercase text-blue-100">Certified</div>
                </div>
              </div>
              <div className="pt-12">
                <div className="bg-white/5 p-10 h-full rounded-[3rem] border border-white/10 flex flex-col justify-center text-center">
                  <BarChart3 size={40} className="mx-auto mb-4 text-blue-500" />
                  <div className="text-4xl font-black">36+</div>
                  <div className="text-[10px] font-bold uppercase text-blue-300">Years Exp.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. INDUSTRIES & SUSTAINABILITY */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-5xl font-black uppercase tracking-tighter mb-12">Vertical Industrial <br />Solutions</h2>
            <div className="grid grid-cols-1 gap-6">
              {[
                { t: 'Automotive OEMs', d: 'Tier-1 supply of DDQ grade sheets and stamped chassis parts.', i: <Settings /> },
                { t: 'HVAC & Ducting', d: 'High-coating GI supply with custom shearing and bending.', i: <Zap /> },
                { t: 'Construction', d: 'Structural HR plates for infrastructure and heavy machinery.', i: <HardHat /> }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 p-8 bg-gray-50 rounded-3xl items-start">
                  <div className="p-4 bg-white rounded-2xl text-blue-600 shadow-sm">{item.i}</div>
                  <div>
                    <h4 className="font-black uppercase text-lg">{item.t}</h4>
                    <p className="text-gray-500 text-sm font-medium mt-2">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-12">
            <div className="p-12 bg-blue-50 rounded-[4rem] relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-50"></div>
              <MapPin size={40} className="text-blue-600 mb-6" />
              <h3 className="text-3xl font-black uppercase tracking-tighter mb-4">The Vasai Advantage</h3>
              <p className="text-gray-600 font-medium">Located at the gateway of Mumbai, Unit I & II ensure zero-latency delivery to Palghar, Thane, and Mumbai industrial belts.</p>
              <div className="flex gap-6 mt-8">
                <div>
                  <div className="text-2xl font-black text-slate-900 leading-none">15 Min</div>
                  <div className="text-[10px] font-bold uppercase text-gray-400">To Highway</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-slate-900 leading-none">24/7</div>
                  <div className="text-[10px] font-bold uppercase text-gray-400">Loading Ready</div>
                </div>
              </div>
            </div>
            <div className="p-12 border-2 border-green-100 rounded-[4rem]">
              <Recycle size={40} className="text-green-600 mb-6" />
              <h3 className="text-3xl font-black uppercase tracking-tighter mb-4 text-slate-900">Green Steel Commit</h3>
              <p className="text-gray-600 font-medium">Optimized sheet nesting to reduce scrap by up to 18%. High-yield manufacturing for a sustainable industrial future.</p>
            </div>
          </div>
        </div>
      </section>

      <FAQSectionClient />

      <CTA
        title="Source Material. Build Components."
        description="Consolidate your steel procurement and fabrication with Aero Enterprises. Mill-certified stock and CNC precision, delivered Pan-India."
        primaryButtonText="Request Direct RFQ"
        primaryButtonLink="/contact"
        secondaryButtonText="Technical Brochure"
        secondaryButtonLink="/AERO-CATALOGUE.pdf"
      />
    </main>
  )
}

export default Home;
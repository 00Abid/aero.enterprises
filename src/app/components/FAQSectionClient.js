"use client";
import React, { useState } from 'react';
import { ChevronDown, Calculator, IndianRupee, MapPin } from 'lucide-react';

const AERO_ENTERPRISES_FAQS = [
  {
    question: "What is the current price of Mild Steel (MS) per kg in Mumbai?",
    answer: "MS prices in Mumbai fluctuate daily based on secondary and primary mill indices (like JSW or TATA). Currently, the rate for MS sheets ranges between ₹58 to ₹72 per kg + GST, depending on the thickness and volume. For real-time 2025 rates, we recommend contacting our Vasai sales desk directly."
  },
  {
    question: "Why is Mild Steel (MS) cheaper compared to Stainless Steel (SS)?",
    answer: "Mild Steel has a lower chromium content and is primarily iron-based, making the raw material and production cost significantly lower. While it offers excellent structural strength and weldability, it requires coating (like GI) to match the corrosion resistance of Stainless Steel."
  },
  {
    question: "What is the weight and price of a standard 8x4 MS Sheet?",
    answer: "A standard 8x4 ft (2440x1220mm) MS sheet's weight depends on its thickness. For example, a 2.5mm sheet weighs approximately 58kg. Prices for an 8x4 sheet are calculated by multiplying the current per-kg rate by the total weight. We supply both JSW and SAIL primary sheets in these dimensions."
  },
  {
    question: "Which steel is better for construction in India: 500D or 550D?",
    answer: "550D steel offers higher tensile strength and better ductility compared to 500D, making it superior for high-rise projects and earthquake-prone zones. However, for standard industrial fabrication and shed construction, 500D remains the cost-effective industry standard."
  },
  {
    question: "Do you provide TATA or Jindal (JSW) Steel at Mumbai wholesale rates?",
    answer: "Yes, Aero Enterprises is a specialized stockist for primary mills. We offer JSW and TATA steel products (Sheets & Coils) at competitive wholesale rates for the Mumbai, Thane, and Palghar industrial belts, complete with Mill Test Certificates (MTC)."
  },
  {
    question: "How much does a 20-foot tin or GI shed sheet cost?",
    answer: "The price for a 20-foot sheet depends on the GSM (Zinc coating) and the gauge (thickness). As of late 2024/early 2025, GI roofing sheets are quoted per running foot or per kg. Please provide your required gauge for a precise project quotation."
  },
  {
    question: "What is the benefit of buying 'Secondary' or Secondhand sheets?",
    answer: "Secondary sheets are surplus or over-rolled stock from mills. They offer the same structural integrity as primary steel but at a 15-25% discount. This makes them the #1 choice for non-critical applications like hoarding, site fencing, and temporary flooring."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  // 1. GENERATE SCHEMA FOR GOOGLE RICH SNIPPETS
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": AERO_ENTERPRISES_FAQS.map(f => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": { "@type": "Answer", "text": f.answer }
    }))
  };

  return (
    <section className="max-w-5xl mx-auto py-24 px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="flex flex-col md:flex-row gap-12">
        {/* Left Side: SEO Content */}
        <div className="md:w-1/3">
          <h2 className="text-4xl font-black uppercase tracking-tighter leading-none mb-6">
            Sourcing <br /><span className="">Intelligence</span>
          </h2>
          <p className="text-black text-sm font-medium mb-8">
            Common questions regarding steel pricing, mill standards, and logistics in the Mumbai industrial corridor.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-black">
              <Calculator size={16}  /> Weight Calculators
            </div>
            <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-black">
              <IndianRupee size={16}  /> Real-time Rates
            </div>
            <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-black">
              <MapPin size={16}  /> Vasai Stockyard
            </div>
          </div>
        </div>

        {/* Right Side: Accordion */}
        <div className="md:w-2/3 space-y-4">
          {AERO_ENTERPRISES_FAQS.map((f, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="border-b border-gray-100 last:border-0 overflow-hidden">
                <button
                  className="w-full py-6 text-left flex justify-between items-center group transition-all"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <h3 className={`text-sm md:text-base font-bold uppercase tracking-tight transition-colors ${isOpen ? 'text-blue-600' : 'text-black group-hover:text-blue-600'}`}>
                    {f.question}
                  </h3>
                  <ChevronDown className={`transition-transform duration-300 ${isOpen ? 'rotate-180 text-blue-600' : 'text-gray-300'}`} size={20} />
                </button>

                <div className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[300px] pb-8 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="bg-gray-50 p-6 rounded-2xl border-l-4 border-black">
                    <p className="text-sm text-gray-600 leading-relaxed font-medium">
                      {f.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
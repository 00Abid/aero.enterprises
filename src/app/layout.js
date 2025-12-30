import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Breadcrumb from "./components/Breadcrumb";
import "./globals.css";

// 1. --- ELITE METADATA CONFIGURATION ---
export const metadata = {
  title: {
    default: "AERO ENTERPRISES | Industrial Steel Sheets & Coils Supplier Mumbai",
  },
  description: "Certified suppliers of HR, CR, GI, and SS sheets in Vasai, Maharashtra. Serving Mumbai, Thane, and Palghar with Mill Test Certificates (MTC) and certified digital weighbridge accuracy.",

  metadataBase: new URL('https://www.aeroenterprises.shop'),

  keywords: [
    "AERO ENTERPRISES Vasai",
    "Sheet metal supplier Mumbai",
    "HR Coil pricing 2025",
    "Stainless Steel sheet supplier Maharashtra",
    "Industrial steel godown Vasai East",
    "JSW TATA SAIL steel dealer"
  ],

  alternates: {
    canonical: '/',
  },

  openGraph: {
    title: "AERO ENTERPRISES | Industrial Steel & Metal Solutions",
    description: "Maharashtra's leading source for technical steel sheets and coils. Mill-certified stock for automotive, pharma, and construction.",
    url: 'https://www.aeroenterprises.shop',
    siteName: 'Aero Enterprises',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Aero Enterprises Industrial Steel Stockyard',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'AERO ENTERPRISES | Technical Steel Experts',
    description: 'Leading industrial steel sheet suppliers serving the Mumbai region.',
    images: ['/og-image.webp'],
  },
};

// 2. --- ORGANIZATION SCHEMA (E-E-A-T BOOSTER) ---
const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Aero Enterprises",
  "url": "https://www.aeroenterprises.shop",
  "logo": "https://www.aeroenterprises.shop/AE-logo.webp",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-8459121717",
    "contactType": "Sales Desk",
    "areaServed": "IN",
    "availableLanguage": ["en", "Hindi", "Marathi"]
  },
  "sameAs": [
    "https://linkedin.com/company/aero-enterprisess/"
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className="antialiased text-slate-900 bg-white selection:bg-blue-600 selection:text-white">

        {/* GLOBAL NAVIGATION */}
        <Navbar />

        {/* SEO POWER MOVE: Breadcrumbs globally injected */}
        <Breadcrumb />

        {/* MAIN CONTENT AREA */}
        <main id="content" className="min-h-screen">
          {children}
        </main>

        {/* GLOBAL FOOTER */}
        <Footer />

        {/* 🛑 ADD A FLOATING WHATSAPP BUTTON COMPONENT HERE LATER FOR GLOBAL ACCESS */}
      </body>
    </html>
  );
}
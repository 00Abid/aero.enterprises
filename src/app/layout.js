import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Breadcrumb from "./components/Breadcrumb";
import "./globals.css";
import { generateOrganizationSchema, stringifySchema } from "../utils/schemaGenerator.js";
import { withErrorHandling } from "../utils/schemaErrorHandler.js";

// 1. --- ELITE METADATA CONFIGURATION (2026 ENHANCED) ---
export const metadata = {
  title: {
    template: "%s | AERO ENTERPRISES",
    default: "AERO ENTERPRISES | Industrial Sheets, Coils Supplier and Fabrication Partner in Mumbai",
  },
  description: "Certified suppliers of HR, CR, GI, and SS sheets and Fabrication Partner in Vasai, Maharashtra. Serving Mumbai, Thane, and Palghar with Mill Test Certificates (MTC) and certified digital weighbridge accuracy.",

  metadataBase: new URL('https://www.aeroenterprises.shop'),

  keywords: [
    "AERO ENTERPRISES Vasai",
    "Sheet metal supplier Mumbai",
    "HR Coil pricing 2026",
    "Stainless Steel sheet supplier Maharashtra",
    "Industrial steel godown Vasai East",
    "JSW TATA SAIL steel dealer",
    "CNC Bending Services Vasai",
    "Precision Metal Stamping Mumbai"
  ],

  alternates: {
    canonical: '/',
  },

  openGraph: {
    title: "AERO ENTERPRISES | Industrial Steel & Metal Solutions",
    description: "Maharashtra's leading source for technical sheets metal, coils and Fabrication partner. Mill-certified stock for automotive, pharma, and construction.",
    url: 'https://www.aeroenterprises.shop',
    siteName: 'Aero Enterprises',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Aero Enterprises Industrial Steel Stockyard and Manufacturing Unit',
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

  // High-authority robot instructions
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};



// 2. --- COMPREHENSIVE SCHEMA INJECTION (E-E-A-T) ---

// Generate Organization Schema with deep error handling
const generateOrgSchema = () => {
  return withErrorHandling(
    generateOrganizationSchema,
    [{ baseUrl: 'https://www.aeroenterprises.shop' }],
    {
      fallbackType: 'Organization',
      enableRetry: false,
      sanitizeData: true
    }
  );
};

// Site-wide Search and Identity Schema
const generateWebSiteSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.aeroenterprises.shop/#website",
    "name": "Aero Enterprises",
    "url": "https://www.aeroenterprises.shop",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.aeroenterprises.shop/products?search={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    "inLanguage": "en-IN"
  };
};

export const viewport = {
  themeColor: '#0f172a', // Slate-900 for mobile browser branding
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  const orgSchema = generateOrgSchema();
  const websiteSchema = generateWebSiteSchema();

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="google-site-verification" content="bxrk76tl6CCpqJtKvrIwKH-O8RonpETAavnyV6fHboI" />
        <meta name="msvalidate.01" content="B406A713428734B7264507731D5DC69A" />
        {/* Semantic Schema.org data for Organization and SearchBox */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: stringifySchema(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: stringifySchema(websiteSchema) }}
        />
      </head>
      <body className="antialiased text-slate-900 bg-white selection:bg-blue-600 selection:text-white">

        {/* 1. GLOBAL NAVIGATION BAR */}
        <Navbar />

        {/* 2. SEO HIERARCHY: Global Breadcrumb Injection */}
        {/* Positioned before main content to clarify page paths to search bots */}
        <Breadcrumb />

        {/* 3. MAIN CONTENT RENDERER */}
        <main id="content" className="min-h-screen relative">
          {children}
        </main>

        {/* 4. GLOBAL FOOTER */}
        <Footer />


      </body>
    </html>
  );
}
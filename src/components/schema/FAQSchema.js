'use client';

import React, { useState, useEffect } from 'react';
import { generateFAQSchema, stringifySchema } from '../../utils/schemaGenerator.js';
import { withErrorHandling } from '../../utils/schemaErrorHandler.js';

/**
 * INTERNAL COMPONENT: SafeSchemaScript
 * Prevents Hydration Mismatch by ensuring the script only 
 * mounts on the client side after the initial render.
 */
const SafeSchemaScript = ({ schema }) => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: stringifySchema(schema) }}
    />
  );
};

/**
 * FAQ Schema Component (Standard)
 * @param {Object} props - Component props
 */
export default function FAQSchema({ faqs = [], options = {} }) {
  if (!faqs.length) {
    console.warn('FAQSchema: No FAQ data provided');
    return null;
  }

  const generateSchema = () => {
    return withErrorHandling(
      generateFAQSchema,
      [faqs, { baseUrl: 'https://www.aeroenterprises.shop', ...options }],
      {
        fallbackType: 'Organization',
        enableRetry: false,
        sanitizeData: true
      }
    );
  };

  const schema = generateSchema();

  return <SafeSchemaScript schema={schema} />;
}

/**
 * Enhanced FAQ Schema with additional metadata
 */
export function EnhancedFAQSchema({ 
  faqs = [], 
  title = "Frequently Asked Questions", 
  description, 
  options = {} 
}) {
  if (!faqs.length) return null;

  const enhancedSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "name": title,
    "description": description || `${title} about steel products and fabrication services`,
    "about": {
      "@type": "Organization",
      "@id": "https://www.aeroenterprises.shop/#organization"
    },
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
        "author": {
          "@type": "Organization",
          "@id": "https://www.aeroenterprises.shop/#organization"
        }
      }
    })),
    "inLanguage": "en-IN",
    "datePublished": "2024-01-01T00:00:00Z",
    "dateModified": "2026-01-01T00:00:00Z" // Stable date prevents hydration mismatch
  };

  return <SafeSchemaScript schema={enhancedSchema} />;
}

/**
 * Product FAQ Schema Component
 */
export function ProductFAQSchema({ faqs = [], product, options = {} }) {
  if (!faqs.length || !product) return null;

  const productFAQSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "name": `${product.name || product.type} - Frequently Asked Questions`,
    "description": `Common questions about ${product.name || product.type} specifications, pricing, and applications`,
    "about": {
      "@type": "Product",
      "@id": `https://www.aeroenterprises.shop/products/${product.slug}`,
      "name": product.name || product.type
    },
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
        "author": {
          "@type": "Organization",
          "@id": "https://www.aeroenterprises.shop/#organization"
        }
      }
    })),
    "inLanguage": "en-IN"
  };

  return <SafeSchemaScript schema={productFAQSchema} />;
}

/**
 * Service FAQ Schema Component
 */
export function ServiceFAQSchema({ faqs = [], service, options = {} }) {
  if (!faqs.length || !service) return null;

  const serviceFAQSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "name": `${service.title || service.name} - Frequently Asked Questions`,
    "description": `Common questions about ${service.title || service.name} capabilities, processes, and specifications`,
    "about": {
      "@type": "Service",
      "@id": `https://www.aeroenterprises.shop/services/${service.slug}`,
      "name": service.title || service.name
    },
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
        "author": {
          "@type": "Organization",
          "@id": "https://www.aeroenterprises.shop/#organization"
        }
      }
    })),
    "inLanguage": "en-IN"
  };

  return <SafeSchemaScript schema={serviceFAQSchema} />;
}

/**
 * General FAQ Schema Component
 */
export function GeneralFAQSchema({ faqs = [], category = 'general', options = {} }) {
  if (!faqs.length) return null;

  const categoryTitles = {
    pricing: 'Pricing and Payment FAQs',
    shipping: 'Shipping and Delivery FAQs',
    technical: 'Technical Specifications FAQs',
    quality: 'Quality and Certification FAQs',
    general: 'General Business FAQs'
  };

  const generalFAQSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "name": categoryTitles[category] || `${category} FAQs`,
    "description": `Frequently asked questions about ${category} at Aero Enterprises`,
    "about": {
      "@type": "Organization",
      "@id": "https://www.aeroenterprises.shop/#organization"
    },
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
        "author": {
          "@type": "Organization",
          "@id": "https://www.aeroenterprises.shop/#organization"
        }
      }
    })),
    "inLanguage": "en-IN"
  };

  return <SafeSchemaScript schema={generalFAQSchema} />;
}
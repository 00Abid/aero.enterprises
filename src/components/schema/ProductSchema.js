// Product Schema Component
// Provides comprehensive product schema markup for steel products

import { generateProductSchema, stringifySchema } from '../../utils/schemaGenerator.js';
import { withErrorHandling } from '../../utils/schemaErrorHandler.js';

/**
 * Product Schema Component for individual steel products
 * @param {Object} props - Component props
 * @param {Object} props.product - Product data object
 * @param {Object} props.options - Additional options for schema generation
 * @returns {JSX.Element} Script tag with Product schema
 */
export default function ProductSchema({ product, options = {} }) {
  if (!product) {
    console.warn('ProductSchema: No product data provided');
    return null;
  }

  // Transform product data to match schema generator expectations
  const productData = {
    slug: product.material_slug,
    category: product.category,
    type: product.material_name || product.type,
    description: product.description,
    img: product.img,
    specifications: product.specifications,
    price: product.price_avg_inr,
    stockStatus: product.stock_status,
    minThickness: product.min_thickness_mm,
    maxThickness: product.max_thickness_mm,
    technicalSpecs: product.technical_specs,
    applications: product.hr_coil_uses?.applications || 
                 product.cr_coil_uses?.applications || 
                 product.gi_coil_uses?.applications || 
                 product.ss_coil_uses?.applications || [],
    hsnCode: product.hsn_code_section?.content,
    grades: product.grades_section?.grades || []
  };

  // Generate product schema with error handling
  const generateSchema = () => {
    return withErrorHandling(
      generateProductSchema,
      [productData, { baseUrl: 'https://www.aeroenterprises.shop', ...options }],
      {
        fallbackType: 'product',
        enableRetry: false,
        sanitizeData: true
      }
    );
  };

  const schema = generateSchema();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: stringifySchema(schema) }}
    />
  );
}

/**
 * Enhanced Product Schema with additional structured data
 * @param {Object} props - Component props
 * @param {Object} props.product - Product data object
 * @param {Object} props.options - Additional options
 * @returns {JSX.Element} Multiple script tags with comprehensive product data
 */
export function EnhancedProductSchema({ product, options = {} }) {
  if (!product) return null;

  // Generate main product schema
  const mainSchema = generateProductSchema({
    slug: product.material_slug,
    category: product.category,
    type: product.material_name || product.type,
    description: product.description,
    img: product.img
  }, { baseUrl: 'https://www.aeroenterprises.shop', ...options });

  // Generate FAQ schema if FAQs exist
  const faqSchema = product.faqs && product.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": product.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  // Generate HowTo schema for weight calculator if available
  const howToSchema = product.weight_calculator_section ? {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": product.weight_calculator_section.title,
    "description": product.weight_calculator_section.content,
    "step": [
      {
        "@type": "HowToStep",
        "name": "Calculate Steel Weight",
        "text": "Weight (kg) = Length (m) × Width (m) × Thickness (mm) × 7.85 (steel density)"
      }
    ]
  } : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: stringifySchema(mainSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: stringifySchema(faqSchema) }}
        />
      )}
      {howToSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: stringifySchema(howToSchema) }}
        />
      )}
    </>
  );
}

/**
 * Product Offer Schema Component
 * Generates detailed offer information for products
 * @param {Object} props - Component props
 * @param {Object} props.product - Product data object
 * @param {Object} props.options - Additional options
 * @returns {JSX.Element} Script tag with Offer schema
 */
export function ProductOfferSchema({ product, options = {} }) {
  if (!product || !product.price_avg_inr) return null;

  const offerSchema = {
    "@context": "https://schema.org",
    "@type": "Offer",
    "@id": `https://www.aeroenterprises.shop/products/${product.material_slug}#offer`,
    "itemOffered": {
      "@type": "Product",
      "@id": `https://www.aeroenterprises.shop/products/${product.material_slug}`,
      "name": product.material_name || product.type
    },
    "price": product.price_avg_inr,
    "priceCurrency": "INR",
    "priceSpecification": {
      "@type": "UnitPriceSpecification",
      "price": product.price_avg_inr,
      "priceCurrency": "INR",
      "unitCode": "TNE",
      "unitText": "Metric Ton"
    },
    "availability": product.stock_status === "High Stock" ? 
      "https://schema.org/InStock" : "https://schema.org/LimitedAvailability",
    "seller": {
      "@type": "Organization",
      "@id": "https://www.aeroenterprises.shop/#organization",
      "name": "Aero Enterprises"
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "deliveryMethod": "https://schema.org/OnSitePickup",
    "hasMerchantReturnPolicy": {
      "@type": "MerchantReturnPolicy",
      "applicableCountry": "IN",
      "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
      "merchantReturnDays": 7
    },
    "shippingDetails": {
      "@type": "OfferShippingDetails",
      "shippingRate": {
        "@type": "MonetaryAmount",
        "currency": "INR",
        "value": "0"
      },
      "deliveryTime": {
        "@type": "ShippingDeliveryTime",
        "handlingTime": {
          "@type": "QuantitativeValue",
          "minValue": 0,
          "maxValue": 1,
          "unitCode": "DAY"
        },
        "transitTime": {
          "@type": "QuantitativeValue", 
          "minValue": 1,
          "maxValue": 5,
          "unitCode": "DAY"
        }
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: stringifySchema(offerSchema) }}
    />
  );
}

/**
 * Product Review Schema Component
 * Generates aggregate rating schema for products
 * @param {Object} props - Component props
 * @param {Object} props.product - Product data object
 * @param {number} props.rating - Average rating (default 4.5)
 * @param {number} props.reviewCount - Number of reviews (default 25)
 * @returns {JSX.Element} Script tag with AggregateRating schema
 */
export function ProductReviewSchema({ product, rating = 4.5, reviewCount = 25 }) {
  if (!product) return null;

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `https://www.aeroenterprises.shop/products/${product.material_slug}`,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": rating,
      "bestRating": 5,
      "worstRating": 1,
      "ratingCount": reviewCount
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: stringifySchema(reviewSchema) }}
    />
  );
}
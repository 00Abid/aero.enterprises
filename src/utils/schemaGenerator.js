// Schema Generator Utility Functions
// Generates Schema.org compliant JSON-LD markup for different content types

import {
  organizationData,
  locationsData,
  contactPoints,
  productCategories,
  serviceCategories,
  materialSpecs,
  equipmentData,
  industryApplications,
  qualityStandards
} from '../data/schemaData.js';

/**
 * Generates comprehensive Organization schema with LocalBusiness information
 * @param {Object} options - Additional options for customization
 * @returns {Object} Complete organization schema
 */
export function generateOrganizationSchema(options = {}) {
  const baseUrl = options.baseUrl || 'https://www.aeroenterprises.shop';
  
  return {
    "@context": "https://schema.org",
    "@type": organizationData["@type"],
    "@id": `${baseUrl}/#organization`,
    "name": organizationData.name,
    "legalName": organizationData.legalName,
    "description": organizationData.description,
    "foundingDate": organizationData.foundingDate,
    "url": organizationData.url,
    "logo": {
      "@type": "ImageObject",
      "url": organizationData.logo,
      "width": 200,
      "height": 80
    },
    "image": {
      "@type": "ImageObject", 
      "url": organizationData.image,
      "width": 1200,
      "height": 630
    },
    "additionalType": organizationData.additionalType,
    "naics": organizationData.naics,
    "isicV4": organizationData.isicV4,
    "telephone": organizationData.telephone,
    "email": organizationData.email,
    "sameAs": organizationData.sameAs,
    "knowsAbout": organizationData.knowsAbout,
    "areaServed": organizationData.areaServed,
    "award": organizationData.award,
    "contactPoint": contactPoints,
    "location": locationsData.map(location => ({
      "@type": "Place",
      "name": location.name,
      "description": location.description,
      "address": location.address,
      "geo": location.geo,
      "telephone": location.telephone,
      "openingHours": location.openingHours
    })),
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Steel Products and Fabrication Services",
      "itemListElement": [
        ...Object.keys(productCategories).map(category => ({
          "@type": "OfferCatalog",
          "name": category,
          "description": productCategories[category].description
        })),
        ...Object.keys(serviceCategories).map(service => ({
          "@type": "OfferCatalog", 
          "name": service,
          "description": `Professional ${service.toLowerCase()} services`
        }))
      ]
    },
    "makesOffer": {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Integrated Steel Supply and Fabrication Services",
        "description": "Complete steel sourcing, processing, and fabrication solutions"
      },
      "areaServed": organizationData.areaServed,
      "availableDeliveryMethod": "https://schema.org/OnSitePickup"
    }
  };
}

/**
 * Generates LocalBusiness schema for specific facility locations
 * @param {string} locationName - Name of the location (Unit I or Unit II)
 * @param {Object} options - Additional options
 * @returns {Object} LocalBusiness schema
 */
export function generateLocalBusinessSchema(locationName, options = {}) {
  const location = locationsData.find(loc => loc.name.includes(locationName));
  if (!location) {
    throw new Error(`Location ${locationName} not found`);
  }

  const baseUrl = options.baseUrl || 'https://www.aeroenterprises.shop';
  
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Manufacturer"],
    "@id": `${baseUrl}/#${locationName.toLowerCase().replace(/\s+/g, '-')}`,
    "name": `${organizationData.name} - ${location.name}`,
    "description": location.description,
    "parentOrganization": {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`
    },
    "address": location.address,
    "geo": location.geo,
    "telephone": location.telephone,
    "openingHours": location.openingHours,
    "areaServed": organizationData.areaServed,
    "hasMap": `https://maps.google.com/?q=${location.geo.latitude},${location.geo.longitude}`,
    "additionalProperty": location.specialCapabilities.map(capability => ({
      "@type": "PropertyValue",
      "name": "Capability",
      "value": capability
    }))
  };
}

/**
 * Generates Product schema for steel products
 * @param {Object} productData - Product information
 * @param {Object} options - Additional options
 * @returns {Object} Product schema
 */
export function generateProductSchema(productData, options = {}) {
  const baseUrl = options.baseUrl || 'https://www.aeroenterprises.shop';
  const category = productCategories[productData.category] || productCategories["Primary Sheet"];
  
  // Extract material type from product type
  const materialType = productData.type.match(/(HR|CR|GI|SS|P&O)/)?.[1] || 'HR';
  const materialSpec = materialSpecs[materialType] || materialSpecs.HR;
  
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${baseUrl}/products/${productData.slug}`,
    "name": productData.type,
    "description": productData.description,
    "category": category.category,
    "sku": `AE-${productData.slug.toUpperCase()}`,
    "mpn": productData.slug,
    "brand": {
      "@type": "Brand",
      "name": category.brand
    },
    "manufacturer": {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      "name": category.manufacturer
    },
    "material": materialSpec.fullName,
    "image": {
      "@type": "ImageObject",
      "url": `${baseUrl}${productData.img}`,
      "width": 800,
      "height": 600
    },
    "additionalProperty": [
      ...(materialSpec.standard ? [{
        "@type": "PropertyValue",
        "name": "Standard",
        "value": materialSpec.standard
      }] : []),
      ...(materialSpec.thicknessRange ? [{
        "@type": "PropertyValue", 
        "name": "Thickness Range",
        "value": materialSpec.thicknessRange
      }] : []),
      ...(materialSpec.coating ? [{
        "@type": "PropertyValue",
        "name": "Coating",
        "value": materialSpec.coating
      }] : []),
      ...(materialSpec.grades ? [{
        "@type": "PropertyValue",
        "name": "Available Grades", 
        "value": materialSpec.grades.join(", ")
      }] : [])
    ],
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "INR",
      "seller": {
        "@type": "Organization",
        "@id": `${baseUrl}/#organization`
      },
      "areaServed": organizationData.areaServed,
      "deliveryMethod": "https://schema.org/OnSitePickup"
    },
    "isRelatedTo": materialSpec.applications.map(application => ({
      "@type": "Thing",
      "name": application
    }))
  };
}

/**
 * Generates Service schema for fabrication services
 * @param {Object} serviceData - Service information
 * @param {Object} options - Additional options
 * @returns {Object} Service schema
 */
export function generateServiceSchema(serviceData, options = {}) {
  const baseUrl = options.baseUrl || 'https://www.aeroenterprises.shop';
  
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${baseUrl}/services/${serviceData.slug}`,
    "name": serviceData.name,
    "description": serviceData.description,
    "serviceType": serviceData.serviceType || "Manufacturing Service",
    "provider": {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      "name": organizationData.name
    },
    "areaServed": organizationData.areaServed,
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceLocation": {
        "@type": "Place",
        "address": locationsData[0].address
      }
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `${serviceData.name} Services`
    },
    "additionalProperty": (serviceData.specifications || []).map(spec => ({
      "@type": "PropertyValue",
      "name": spec.name,
      "value": spec.value
    })),
    "audience": {
      "@type": "BusinessAudience",
      "audienceType": serviceData.targetIndustries || ["Manufacturing", "Construction", "Automotive"]
    }
  };
}

/**
 * Generates WebPage schema for individual pages
 * @param {Object} pageData - Page information
 * @param {Object} options - Additional options
 * @returns {Object} WebPage schema
 */
export function generateWebPageSchema(pageData, options = {}) {
  const baseUrl = options.baseUrl || 'https://www.aeroenterprises.shop';
  
  return {
    "@context": "https://schema.org",
    "@type": pageData.type || "WebPage",
    "@id": `${baseUrl}${pageData.url}`,
    "url": `${baseUrl}${pageData.url}`,
    "name": pageData.title,
    "description": pageData.description,
    "inLanguage": "en-IN",
    "isPartOf": {
      "@type": "WebSite",
      "@id": `${baseUrl}/#website`,
      "name": organizationData.name,
      "url": baseUrl
    },
    "about": {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`
    },
    "mainEntity": pageData.mainEntity || {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`
    },
    "breadcrumb": pageData.breadcrumbs ? generateBreadcrumbSchema(pageData.breadcrumbs, options) : undefined,
    "datePublished": pageData.datePublished || new Date().toISOString(),
    "dateModified": pageData.dateModified || new Date().toISOString()
  };
}

/**
 * Generates BreadcrumbList schema for navigation
 * @param {Array} breadcrumbs - Array of breadcrumb items
 * @param {Object} options - Additional options
 * @returns {Object} BreadcrumbList schema
 */
export function generateBreadcrumbSchema(breadcrumbs, options = {}) {
  const baseUrl = options.baseUrl || 'https://www.aeroenterprises.shop';
  
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": `${baseUrl}${crumb.url}`
    }))
  };
}

/**
 * Generates FAQ schema for question-answer sections
 * @param {Array} faqs - Array of FAQ items
 * @param {Object} options - Additional options
 * @returns {Object} FAQ schema
 */
export function generateFAQSchema(faqs, options = {}) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

/**
 * Generates CollectionPage schema for product/service listings
 * @param {Object} collectionData - Collection information
 * @param {Array} items - Items in the collection
 * @param {Object} options - Additional options
 * @returns {Object} CollectionPage schema
 */
export function generateCollectionPageSchema(collectionData, items, options = {}) {
  const baseUrl = options.baseUrl || 'https://www.aeroenterprises.shop';
  
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${baseUrl}${collectionData.url}`,
    "name": collectionData.title,
    "description": collectionData.description,
    "url": `${baseUrl}${collectionData.url}`,
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": items.length,
      "itemListElement": items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": item.type || "Product",
          "@id": `${baseUrl}${item.url}`,
          "name": item.name,
          "description": item.description,
          "image": item.image ? `${baseUrl}${item.image}` : undefined
        }
      }))
    },
    "isPartOf": {
      "@type": "WebSite",
      "@id": `${baseUrl}/#website`
    }
  };
}

/**
 * Generates ContactPage schema with contact information
 * @param {Object} options - Additional options
 * @returns {Object} ContactPage schema
 */
export function generateContactPageSchema(options = {}) {
  const baseUrl = options.baseUrl || 'https://www.aeroenterprises.shop';
  
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${baseUrl}/contact`,
    "name": "Contact Aero Enterprises",
    "description": "Get in touch with Aero Enterprises for steel supply and fabrication services",
    "mainEntity": {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      "contactPoint": contactPoints
    },
    "isPartOf": {
      "@type": "WebSite",
      "@id": `${baseUrl}/#website`
    }
  };
}

/**
 * Utility function to safely stringify schema for JSON-LD
 * @param {Object} schema - Schema object
 * @returns {string} JSON string
 */
export function stringifySchema(schema) {
  try {
    return JSON.stringify(schema, null, 0);
  } catch (error) {
    console.error('Error stringifying schema:', error);
    return '{}';
  }
}

/**
 * Validates basic schema structure (deprecated - use schemaValidator.js)
 * @param {Object} schema - Schema to validate
 * @returns {boolean} Whether schema is valid
 * @deprecated Use validateSchema from schemaValidator.js instead
 */
export function validateSchema(schema) {
  console.warn('validateSchema from schemaGenerator is deprecated. Use schemaValidator.js instead.');
  
  if (!schema || typeof schema !== 'object') {
    return false;
  }
  
  // Check for required Schema.org properties
  if (!schema['@context'] || !schema['@type']) {
    return false;
  }
  
  // Ensure @context is Schema.org
  if (schema['@context'] !== 'https://schema.org') {
    return false;
  }
  
  return true;
}

// Export all functions as default object for easier importing
export default {
  generateOrganizationSchema,
  generateLocalBusinessSchema,
  generateProductSchema,
  generateServiceSchema,
  generateWebPageSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateCollectionPageSchema,
  generateContactPageSchema,
  stringifySchema,
  validateSchema
};
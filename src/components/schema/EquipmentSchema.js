// Equipment and Certification Schema Component
// Provides comprehensive schema markup for manufacturing equipment and certifications

import { stringifySchema } from '../../utils/schemaGenerator.js';
import { withErrorHandling } from '../../utils/schemaErrorHandler.js';
import { equipmentData, qualityStandards } from '../../data/schemaData.js';

/**
 * Equipment Schema Component for manufacturing equipment
 * @param {Object} props - Component props
 * @param {Object} props.equipment - Equipment data object
 * @param {Object} props.options - Additional options for schema generation
 * @returns {JSX.Element} Script tag with Product schema for equipment
 */
export default function EquipmentSchema({ equipment, options = {} }) {
  if (!equipment) {
    console.warn('EquipmentSchema: No equipment data provided');
    return null;
  }

  const equipmentSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `https://www.aeroenterprises.shop/equipment/${equipment.name.toLowerCase().replace(/\s+/g, '-')}`,
    "name": equipment.name,
    "description": `Industrial ${equipment.name.toLowerCase()} used for precision manufacturing`,
    "category": "Industrial Machinery",
    "brand": {
      "@type": "Brand",
      "name": "Industrial Equipment"
    },
    "manufacturer": {
      "@type": "Organization",
      "@id": "https://www.aeroenterprises.shop/#organization",
      "name": "Aero Enterprises"
    },
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Capacity",
        "value": equipment.capacity
      },
      {
        "@type": "PropertyValue",
        "name": "Specifications",
        "value": equipment.specifications
      },
      ...(equipment.tolerance ? [{
        "@type": "PropertyValue",
        "name": "Tolerance",
        "value": equipment.tolerance
      }] : []),
      ...(equipment.materials ? [{
        "@type": "PropertyValue",
        "name": "Compatible Materials",
        "value": equipment.materials
      }] : [])
    ],
    "isRelatedTo": {
      "@type": "Organization",
      "@id": "https://www.aeroenterprises.shop/#organization"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: stringifySchema(equipmentSchema) }}
    />
  );
}

/**
 * Manufacturing Equipment Collection Schema
 * Generates schema for all manufacturing equipment
 * @param {Object} props - Component props
 * @param {Object} props.options - Additional options
 * @returns {JSX.Element} Script tag with ItemList schema for equipment
 */
export function ManufacturingEquipmentSchema({ options = {} }) {
  const equipmentListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Manufacturing Equipment at Aero Enterprises",
    "description": "Complete list of industrial manufacturing equipment and machinery",
    "numberOfItems": equipmentData.length,
    "itemListElement": equipmentData.map((equipment, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "@id": `https://www.aeroenterprises.shop/equipment/${equipment.name.toLowerCase().replace(/\s+/g, '-')}`,
        "name": equipment.name,
        "description": `${equipment.specifications} - ${equipment.capacity}`,
        "category": "Industrial Machinery",
        "additionalProperty": [
          {
            "@type": "PropertyValue",
            "name": "Capacity",
            "value": equipment.capacity
          },
          {
            "@type": "PropertyValue",
            "name": "Specifications",
            "value": equipment.specifications
          }
        ]
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: stringifySchema(equipmentListSchema) }}
    />
  );
}

/**
 * Certification Schema Component
 * Generates schema for quality certifications and standards
 * @param {Object} props - Component props
 * @param {Object} props.options - Additional options
 * @returns {JSX.Element} Script tag with certification schema
 */
export function CertificationSchema({ options = {} }) {
  const certificationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.aeroenterprises.shop/#organization",
    "hasCredential": qualityStandards.certifications.map(cert => ({
      "@type": "EducationalOccupationalCredential",
      "name": cert,
      "credentialCategory": "Professional Certification",
      "recognizedBy": {
        "@type": "Organization",
        "name": "International Standards Organization"
      }
    })),
    "knowsAbout": [
      ...qualityStandards.testingCapabilities,
      ...qualityStandards.traceability
    ],
    "additionalProperty": qualityStandards.certifications.map(cert => ({
      "@type": "PropertyValue",
      "name": "Certification",
      "value": cert
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: stringifySchema(certificationSchema) }}
    />
  );
}

/**
 * Quality Standards Schema Component
 * Generates detailed quality and testing capability schema
 * @param {Object} props - Component props
 * @param {Object} props.options - Additional options
 * @returns {JSX.Element} Script tag with quality standards schema
 */
export function QualityStandardsSchema({ options = {} }) {
  const qualitySchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Quality Standards and Testing Capabilities",
    "description": "Comprehensive quality assurance and testing capabilities at Aero Enterprises",
    "numberOfItems": qualityStandards.testingCapabilities.length,
    "itemListElement": qualityStandards.testingCapabilities.map((capability, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Service",
        "name": capability,
        "description": `${capability} service provided by Aero Enterprises`,
        "serviceType": "Quality Assurance",
        "provider": {
          "@type": "Organization",
          "@id": "https://www.aeroenterprises.shop/#organization"
        }
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: stringifySchema(qualitySchema) }}
    />
  );
}

/**
 * Technical Specification Schema Component
 * Generates schema for technical specifications and capabilities
 * @param {Object} props - Component props
 * @param {Array} props.specifications - Array of technical specifications
 * @param {string} props.title - Title for the specification set
 * @param {Object} props.options - Additional options
 * @returns {JSX.Element} Script tag with technical specification schema
 */
export function TechnicalSpecificationSchema({ specifications = [], title = "Technical Specifications", options = {} }) {
  if (!specifications.length) return null;

  const specSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "name": title,
    "description": `Technical specifications and capabilities for ${title.toLowerCase()}`,
    "author": {
      "@type": "Organization",
      "@id": "https://www.aeroenterprises.shop/#organization"
    },
    "about": specifications.map(spec => ({
      "@type": "Thing",
      "name": spec.name || spec.label,
      "description": spec.value || spec.description
    })),
    "additionalProperty": specifications.map(spec => ({
      "@type": "PropertyValue",
      "name": spec.name || spec.label,
      "value": spec.value || spec.description
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: stringifySchema(specSchema) }}
    />
  );
}

/**
 * Manufacturing Process Schema Component
 * Generates schema for manufacturing processes and workflows
 * @param {Object} props - Component props
 * @param {Object} props.process - Process information
 * @param {Object} props.options - Additional options
 * @returns {JSX.Element} Script tag with manufacturing process schema
 */
export function ManufacturingProcessSchema({ process, options = {} }) {
  if (!process) return null;

  const processSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": process.name,
    "description": process.description,
    "totalTime": process.totalTime || "PT1H",
    "supply": process.materials || [],
    "tool": process.equipment || [],
    "step": (process.steps || []).map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name || `Step ${index + 1}`,
      "text": step.description || step,
      "image": step.image ? `https://www.aeroenterprises.shop${step.image}` : undefined
    })),
    "author": {
      "@type": "Organization",
      "@id": "https://www.aeroenterprises.shop/#organization"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: stringifySchema(processSchema) }}
    />
  );
}

/**
 * Comprehensive Equipment and Certification Schema
 * Combines all equipment and certification schemas
 * @param {Object} props - Component props
 * @param {Object} props.options - Additional options
 * @returns {JSX.Element} Multiple script tags with comprehensive schemas
 */
export function ComprehensiveEquipmentSchema({ options = {} }) {
  return (
    <>
      <ManufacturingEquipmentSchema options={options} />
      <CertificationSchema options={options} />
      <QualityStandardsSchema options={options} />
    </>
  );
}
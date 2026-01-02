// Centralized Schema Data Configuration for Aero Enterprises
// This file contains all the structured data used for Schema.org markup

export const organizationData = {
  name: "Aero Enterprises",
  legalName: "Aero Enterprises",
  description: "Integrated steel supply and precision fabrication hub specializing in mill-certified steel sourcing, CNC fabrication, stamping, bending, and powder coating services",
  foundingDate: "1989",
  url: "https://www.aeroenterprises.shop",
  logo: "https://www.aeroenterprises.shop/AE-logo.webp",
  image: "https://www.aeroenterprises.shop/hero-image.webp",
  
  // Business Categories
  "@type": ["Organization", "LocalBusiness", "Manufacturer"],
  additionalType: [
    "https://schema.org/MetalWorking",
    "https://schema.org/SteelSupplier",
    "https://schema.org/ManufacturingCompany"
  ],
  
  // Power Move: E-E-A-T Personnel Link
  founder: {
    "@type": "Person",
    "name": "Amir Khan", // Replace with actual name
    "jobTitle": "CEO"
  },

  // Supply Chain Relationships
  relatedTo: [
    { "@type": "Organization", "name": "JSW Steel" },
    { "@type": "Organization", "name": "Tata Steel" },
    { "@type": "Organization", "name": "Steel Authority of India Limited (SAIL)" }
  ],

  // Industry Classifications
  naics: "331110", // Iron and Steel Mills and Ferroalloy Manufacturing
  isicV4: "2410", // Manufacture of basic iron and steel
  
  // Contact Information
  telephone: "+91-8459121717",
  email: "aeroenterprises00@gmail.com",
  
  // Social Media Profiles
  sameAs: [
    "https://www.linkedin.com/company/aero-enterprises",
    "https://www.facebook.com/aeroenterprises.vasai",
    "https://www.instagram.com/aeroenterprises_official",
    "https://twitter.com/aeroenterprises"
  ],
  
  // Business Capabilities
  knowsAbout: [
    "Steel Manufacturing",
    "CNC Machining",
    "Metal Stamping",
    "Powder Coating",
    "Sheet Metal Fabrication",
    "Industrial Supply Chain",
    "Quality Control",
    "Mill Test Certificates"
  ],
  
  // Service Areas
  areaServed: [
    {
      "@type": "State",
      "name": "Maharashtra",
      "containsPlace": [
        "Mumbai", "Thane", "Palghar", "Vasai", "Virar", "Nashik", "Pune"
      ]
    },
    {
      "@type": "Country",
      "name": "India"
    }
  ],
  
  // Awards and Certifications
  award: [
    "ISO 9001:2015 Quality Management",
    "Mill-Certified Stockist Authorization",
    "Digital Weighbridge Certification"
  ]
};

export const locationsData = [
  {
    "@type": "Place",
    name: "Unit I - Manufacturing Hub",
    description: "Advanced CNC fabrication facility with precision stamping, bending, and powder coating capabilities",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Survey No. 109 Richard Compound, Manchipada Road, Vasai Phata, Vasai East, Palghar - 401208.",
      addressLocality: "Vasai East",
      addressRegion: "Maharashtra", 
      postalCode: "401208",
      addressCountry: "IN"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 19.4667,
      longitude: 72.8167
    },
    telephone: "+91-8459121717",
    openingHours: "Mo-Sa 08:00-18:00",
    specialCapabilities: [
      "CNC Laser Cutting",
      "Multi-Axis Bending", 
      "Precision Stamping",
      "Powder Coating",
      "Welding & Assembly"
    ]
  },
  {
    "@type": "Place", 
    name: "Unit II - Logistics Hub",
    description: "Raw material storage and distribution center with digital weighbridge facility",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Gala No. 1, Khan Compound, Near Gausiya Weight Kata, Dhumal Nagar, Vasai East - 401208.",
      addressLocality: "Vasai East",
      addressRegion: "Maharashtra",
      postalCode: "401208", 
      addressCountry: "IN"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 19.4589,
      longitude: 72.8203
    },
    telephone: "+91-8459121717",
    openingHours: "Mo-Sa 07:00-19:00",
    specialCapabilities: [
      "Bulk Coil Storage",
      "Digital Weighbridge",
      "Cut-to-Length Services",
      "Mill-Direct Supply",
      "Quality Inspection"
    ]
  }
];

export const contactPoints = [
  {
    "@type": "ContactPoint",
    telephone: "+91-8459121717",
    contactType: "customer service",
    availableLanguage: ["English", "Hindi", "Marathi"],
    hoursAvailable: "Mo-Sa 08:00-18:00",
    areaServed: "Maharashtra"
  },
  {
    "@type": "ContactPoint", 
    telephone: "+91-8459121717",
    contactType: "sales",
    availableLanguage: ["English", "Hindi", "Marathi"],
    hoursAvailable: "Mo-Sa 08:00-18:00",
    areaServed: "India"
  },
  {
    "@type": "ContactPoint",
    telephone: "+91-8459121717", 
    contactType: "technical support",
    availableLanguage: ["English", "Hindi"],
    hoursAvailable: "Mo-Sa 09:00-17:00",
    areaServed: "Maharashtra"
  }
];

// Product Categories for Schema Generation
export const productCategories = {
  "Industrial Coil": {
    description: "Mill-certified steel coils for industrial applications",
    category: "Industrial Coil",
    brand: "Aero Enterprises",
    manufacturer: "Aero Enterprises"
  },
  "Primary Sheet": {
    description: "Premium grade steel sheets with mill test certificates", 
    category: "Primary Sheet",
    brand: "Aero Enterprises",
    manufacturer: "Aero Enterprises"
  },
  "Secondary Sheet": {
    description: "Cost-effective steel sheets for general fabrication",
    category: "Secondary Sheet", 
    brand: "Aero Enterprises",
    manufacturer: "Aero Enterprises"
  }
};

// Service Categories for Schema Generation
export const serviceCategories = {
  "CNC Services": {
    "@type": "Service",
    serviceType: "Manufacturing Service",
    category: "Metal Fabrication",
    provider: "Aero Enterprises"
  },
  "Stamping & Pressing": {
    "@type": "Service", 
    serviceType: "Manufacturing Service",
    category: "Metal Forming",
    provider: "Aero Enterprises"
  },
  "Surface Treatment": {
    "@type": "Service",
    serviceType: "Manufacturing Service", 
    category: "Metal Finishing",
    provider: "Aero Enterprises"
  },
  "Supply Chain": {
    "@type": "Service",
    serviceType: "Logistics Service",
    category: "Material Supply",
    provider: "Aero Enterprises"
  }
};

// Material Specifications for Products
export const materialSpecs = {
  "HR": {
    fullName: "Hot Rolled Steel",
    standard: "IS 2062",
    thicknessRange: "1.6mm - 12mm",
    applications: ["Structural fabrication", "Heavy machinery", "Base plates"]
  },
  "CR": {
    fullName: "Cold Rolled Steel", 
    standard: "IS 513",
    thicknessRange: "0.5mm - 3.0mm",
    applications: ["Automotive panels", "Appliances", "Precision components"]
  },
  "GI": {
    fullName: "Galvanized Iron",
    standard: "IS 277", 
    thicknessRange: "0.4mm - 4.0mm",
    coating: "120-180 GSM Zinc",
    applications: ["HVAC ducting", "Roofing", "Corrosion resistance"]
  },
  "SS": {
    fullName: "Stainless Steel",
    grades: ["304", "316", "316L"],
    thicknessRange: "0.5mm - 6.0mm", 
    applications: ["Food processing", "Pharmaceutical", "Chemical industry"]
  },
  "PO": {
    fullName: "Pickled & Oiled Steel",
    standard: "IS 2062",
    surface: "Scale-free, ready for welding",
    applications: ["Automotive fabrication", "Immediate processing"]
  }
};

// Equipment and Capabilities
export const equipmentData = [
  {
    name: "Hydraulic Press Stamping",
    capacity: "High-Volume Production",
    specifications: "Automotive & Hardware Components",
    tolerance: "±0.1mm"
  },
  {
    name: "Multi-Axis CNC Bending", 
    capacity: "3100mm Bed Length",
    specifications: "±0.5mm Accuracy",
    materials: "Steel, Stainless Steel, Aluminum"
  },
  {
    name: "Industrial Powder Coating",
    capacity: "Automated Conveyor System", 
    specifications: "RAL Color Palette",
    finish: "Factory-ready components"
  },
  {
    name: "Digital Weighing Facility",
    capacity: "50MT Capacity",
    specifications: "Mill-Direct Transparency", 
    certification: "Certified Digital Weighbridge"
  }
];

// Industry Applications
export const industryApplications = [
  {
    industry: "Automotive OEMs",
    description: "Tier-1 supply of DDQ grade sheets and stamped chassis parts",
    products: ["DDQ Sheets", "Stamped Components", "Chassis Parts"],
    services: ["Precision Stamping", "Quality Testing", "Just-in-Time Delivery"]
  },
  {
    industry: "HVAC & Ducting", 
    description: "High-coating GI supply with custom shearing and bending",
    products: ["GI Sheets", "Custom Cut Pieces", "Formed Components"],
    services: ["Custom Shearing", "Bending", "Surface Treatment"]
  },
  {
    industry: "Construction",
    description: "Structural HR plates for infrastructure and heavy machinery", 
    products: ["HR Plates", "Structural Components", "Base Plates"],
    services: ["Heavy Cutting", "Welding", "Surface Preparation"]
  }
];

// Quality Certifications and Standards
export const qualityStandards = {
  certifications: [
    "ISO 9001:2015 Quality Management System",
    "Mill Test Certificate (MTC) Compliance", 
    "Digital Weighbridge Certification",
    "HSN Code Compliance (7208, 7209, 7219)"
  ],
  testingCapabilities: [
    "Material Composition Analysis",
    "Tensile Strength Testing",
    "Surface Quality Inspection", 
    "Dimensional Accuracy Verification"
  ],
  traceability: [
    "Mill Source Documentation",
    "Batch Tracking System",
    "Quality Control Records",
    "Customer Delivery Certificates"
  ]
};

export default {
  organizationData,
  locationsData, 
  contactPoints,
  productCategories,
  serviceCategories,
  materialSpecs,
  equipmentData,
  industryApplications,
  qualityStandards
};
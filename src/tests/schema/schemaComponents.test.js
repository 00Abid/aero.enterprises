// Schema Components Integration Tests
// Tests for React schema components

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

// Import schema components
import ProductSchema, { EnhancedProductSchema } from '../../components/schema/ProductSchema.js';
import ServiceSchema, { EnhancedServiceSchema } from '../../components/schema/ServiceSchema.js';
import { LocalBusinessSchema, DualFacilitySchema } from '../../components/schema/LocalBusinessSchema.js';
import { CollectionSchema, ProductCollectionSchema } from '../../components/schema/CollectionSchema.js';
import { ContactSchema, ComprehensiveContactSchema } from '../../components/schema/ContactSchema.js';
import { LocationSchema, ComprehensiveLocationSchema } from '../../components/schema/LocationSchema.js';
import { FAQSchema, EnhancedFAQSchema } from '../../components/schema/FAQSchema.js';
import { BreadcrumbSchema, AutoBreadcrumbSchema } from '../../components/schema/BreadcrumbSchema.js';
import { WebPageSchema, HomePageSchema } from '../../components/schema/WebPageSchema.js';

// Mock data for testing
const mockProduct = {
  material_slug: 'test-product',
  category: 'Industrial Coil',
  type: 'Test Steel Product',
  material_name: 'Test Steel Product',
  description: 'Test product description',
  img: '/test-image.jpg',
  price_avg_inr: 55000,
  stock_status: 'High Stock',
  specifications: {
    standard: 'IS 2062',
    thickness: '1.6mm - 12mm'
  },
  faqs: [
    {
      question: 'What is this product?',
      answer: 'This is a test product.'
    }
  ]
};

const mockService = {
  slug: 'test-service',
  title: 'Test Fabrication Service',
  description: 'Test service description',
  capabilities: ['CNC Cutting', 'Welding'],
  specs: [
    { label: 'Capacity', value: '100T' },
    { label: 'Tolerance', value: '±0.1mm' }
  ],
  industries: ['Automotive', 'Construction']
};

const mockFAQs = [
  {
    question: 'What is steel?',
    answer: 'Steel is an alloy of iron and carbon.'
  },
  {
    question: 'How is steel made?',
    answer: 'Steel is made by heating iron ore in a blast furnace.'
  }
];

describe('Schema Components', () => {
  
  describe('ProductSchema', () => {
    test('should render product schema script tag', () => {
      const { container } = render(
        <ProductSchema product={mockProduct} />
      );
      
      const scriptTag = container.querySelector('script[type="application/ld+json"]');
      expect(scriptTag).toBeInTheDocument();
      
      const schemaData = JSON.parse(scriptTag.textContent);
      expect(schemaData['@context']).toBe('https://schema.org');
      expect(schemaData['@type']).toBe('Product');
      expect(schemaData.name).toBe(mockProduct.material_name);
    });

    test('should handle missing product data gracefully', () => {
      const { container } = render(
        <ProductSchema product={null} />
      );
      
      const scriptTag = container.querySelector('script[type="application/ld+json"]');
      expect(scriptTag).not.toBeInTheDocument();
    });

    test('should render enhanced product schema with multiple scripts', () => {
      const { container } = render(
        <EnhancedProductSchema product={mockProduct} />
      );
      
      const scriptTags = container.querySelectorAll('script[type="application/ld+json"]');
      expect(scriptTags.length).toBeGreaterThan(1);
      
      // Check main product schema
      const mainSchema = JSON.parse(scriptTags[0].textContent);
      expect(mainSchema['@type']).toBe('Product');
    });
  });

  describe('ServiceSchema', () => {
    test('should render service schema script tag', () => {
      const { container } = render(
        <ServiceSchema service={mockService} />
      );
      
      const scriptTag = container.querySelector('script[type="application/ld+json"]');
      expect(scriptTag).toBeInTheDocument();
      
      const schemaData = JSON.parse(scriptTag.textContent);
      expect(schemaData['@context']).toBe('https://schema.org');
      expect(schemaData['@type']).toBe('Service');
      expect(schemaData.name).toBe(mockService.title);
    });

    test('should render enhanced service schema with multiple scripts', () => {
      const { container } = render(
        <EnhancedServiceSchema service={mockService} />
      );
      
      const scriptTags = container.querySelectorAll('script[type="application/ld+json"]');
      expect(scriptTags.length).toBeGreaterThan(1);
    });
  });

  describe('LocalBusinessSchema', () => {
    test('should render local business schema for Unit I', () => {
      const { container } = render(
        <LocalBusinessSchema locationName="Unit I" />
      );
      
      const scriptTag = container.querySelector('script[type="application/ld+json"]');
      expect(scriptTag).toBeInTheDocument();
      
      const schemaData = JSON.parse(scriptTag.textContent);
      expect(schemaData['@type']).toContain('LocalBusiness');
      expect(schemaData.name).toContain('Unit I');
    });

    test('should render dual facility schema with multiple scripts', () => {
      const { container } = render(
        <DualFacilitySchema />
      );
      
      const scriptTags = container.querySelectorAll('script[type="application/ld+json"]');
      expect(scriptTags.length).toBe(2); // One for each facility
    });
  });

  describe('CollectionSchema', () => {
    const mockCollectionData = {
      title: 'Test Collection',
      description: 'Test collection description',
      url: '/test-collection'
    };

    const mockItems = [
      {
        type: 'Product',
        name: 'Product 1',
        url: '/products/product-1'
      }
    ];

    test('should render collection schema script tag', () => {
      const { container } = render(
        <CollectionSchema 
          collectionData={mockCollectionData} 
          items={mockItems} 
        />
      );
      
      const scriptTag = container.querySelector('script[type="application/ld+json"]');
      expect(scriptTag).toBeInTheDocument();
      
      const schemaData = JSON.parse(scriptTag.textContent);
      expect(schemaData['@type']).toBe('CollectionPage');
      expect(schemaData.name).toBe(mockCollectionData.title);
    });

    test('should render product collection schema', () => {
      const { container } = render(
        <ProductCollectionSchema 
          products={[mockProduct]}
          title="Test Products"
          description="Test products collection"
          url="/products"
        />
      );
      
      const scriptTag = container.querySelector('script[type="application/ld+json"]');
      expect(scriptTag).toBeInTheDocument();
      
      const schemaData = JSON.parse(scriptTag.textContent);
      expect(schemaData['@type']).toBe('CollectionPage');
    });
  });

  describe('ContactSchema', () => {
    test('should render contact schema script tag', () => {
      const { container } = render(
        <ContactSchema />
      );
      
      const scriptTag = container.querySelector('script[type="application/ld+json"]');
      expect(scriptTag).toBeInTheDocument();
      
      const schemaData = JSON.parse(scriptTag.textContent);
      expect(schemaData['@type']).toBe('ContactPage');
    });

    test('should render comprehensive contact schema with multiple scripts', () => {
      const { container } = render(
        <ComprehensiveContactSchema />
      );
      
      const scriptTags = container.querySelectorAll('script[type="application/ld+json"]');
      expect(scriptTags.length).toBeGreaterThan(1);
    });
  });

  describe('LocationSchema', () => {
    const mockLocation = {
      name: 'Test Location',
      description: 'Test location description',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Test Street',
        addressLocality: 'Test City',
        addressRegion: 'Test State',
        postalCode: '12345',
        addressCountry: 'IN'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 19.4667,
        longitude: 72.8167
      },
      telephone: '+91-9876543210',
      openingHours: 'Mo-Sa 08:00-18:00'
    };

    test('should render location schema script tag', () => {
      const { container } = render(
        <LocationSchema location={mockLocation} />
      );
      
      const scriptTag = container.querySelector('script[type="application/ld+json"]');
      expect(scriptTag).toBeInTheDocument();
      
      const schemaData = JSON.parse(scriptTag.textContent);
      expect(schemaData['@type']).toBe('Place');
      expect(schemaData.name).toBe(mockLocation.name);
    });

    test('should render comprehensive location schema with multiple scripts', () => {
      const { container } = render(
        <ComprehensiveLocationSchema />
      );
      
      const scriptTags = container.querySelectorAll('script[type="application/ld+json"]');
      expect(scriptTags.length).toBeGreaterThan(1);
    });
  });

  describe('FAQSchema', () => {
    test('should render FAQ schema script tag', () => {
      const { container } = render(
        <FAQSchema faqs={mockFAQs} />
      );
      
      const scriptTag = container.querySelector('script[type="application/ld+json"]');
      expect(scriptTag).toBeInTheDocument();
      
      const schemaData = JSON.parse(scriptTag.textContent);
      expect(schemaData['@type']).toBe('FAQPage');
      expect(schemaData.mainEntity).toHaveLength(2);
    });

    test('should render enhanced FAQ schema with metadata', () => {
      const { container } = render(
        <EnhancedFAQSchema 
          faqs={mockFAQs}
          title="Test FAQs"
          description="Test FAQ description"
        />
      );
      
      const scriptTag = container.querySelector('script[type="application/ld+json"]');
      expect(scriptTag).toBeInTheDocument();
      
      const schemaData = JSON.parse(scriptTag.textContent);
      expect(schemaData.name).toBe('Test FAQs');
      expect(schemaData.description).toBe('Test FAQ description');
    });

    test('should handle empty FAQ array gracefully', () => {
      const { container } = render(
        <FAQSchema faqs={[]} />
      );
      
      const scriptTag = container.querySelector('script[type="application/ld+json"]');
      expect(scriptTag).not.toBeInTheDocument();
    });
  });

  describe('BreadcrumbSchema', () => {
    const mockBreadcrumbs = [
      { name: 'Home', url: '/' },
      { name: 'Products', url: '/products' },
      { name: 'Steel Coil', url: '/products/steel-coil' }
    ];

    test('should render breadcrumb schema script tag', () => {
      const { container } = render(
        <BreadcrumbSchema breadcrumbs={mockBreadcrumbs} />
      );
      
      const scriptTag = container.querySelector('script[type="application/ld+json"]');
      expect(scriptTag).toBeInTheDocument();
      
      const schemaData = JSON.parse(scriptTag.textContent);
      expect(schemaData['@type']).toBe('BreadcrumbList');
      expect(schemaData.itemListElement).toHaveLength(3);
    });

    test('should render auto breadcrumb schema from pathname', () => {
      const { container } = render(
        <AutoBreadcrumbSchema pathname="/products/steel-coil" />
      );
      
      const scriptTag = container.querySelector('script[type="application/ld+json"]');
      expect(scriptTag).toBeInTheDocument();
      
      const schemaData = JSON.parse(scriptTag.textContent);
      expect(schemaData['@type']).toBe('BreadcrumbList');
    });

    test('should handle empty breadcrumbs gracefully', () => {
      const { container } = render(
        <BreadcrumbSchema breadcrumbs={[]} />
      );
      
      const scriptTag = container.querySelector('script[type="application/ld+json"]');
      expect(scriptTag).not.toBeInTheDocument();
    });
  });

  describe('WebPageSchema', () => {
    const mockPageData = {
      type: 'WebPage',
      url: '/test-page',
      title: 'Test Page',
      description: 'Test page description'
    };

    test('should render webpage schema script tag', () => {
      const { container } = render(
        <WebPageSchema pageData={mockPageData} />
      );
      
      const scriptTag = container.querySelector('script[type="application/ld+json"]');
      expect(scriptTag).toBeInTheDocument();
      
      const schemaData = JSON.parse(scriptTag.textContent);
      expect(schemaData['@type']).toBe('WebPage');
      expect(schemaData.name).toBe(mockPageData.title);
    });

    test('should render home page schema', () => {
      const { container } = render(
        <HomePageSchema />
      );
      
      const scriptTag = container.querySelector('script[type="application/ld+json"]');
      expect(scriptTag).toBeInTheDocument();
      
      const schemaData = JSON.parse(scriptTag.textContent);
      expect(schemaData['@type']).toBe('WebPage');
    });

    test('should handle missing page data gracefully', () => {
      const { container } = render(
        <WebPageSchema pageData={null} />
      );
      
      const scriptTag = container.querySelector('script[type="application/ld+json"]');
      expect(scriptTag).not.toBeInTheDocument();
    });
  });
});

describe('Schema Component Integration Tests', () => {
  test('all schema components should render valid JSON-LD', () => {
    const components = [
      <ProductSchema key="product" product={mockProduct} />,
      <ServiceSchema key="service" service={mockService} />,
      <LocalBusinessSchema key="local" locationName="Unit I" />,
      <FAQSchema key="faq" faqs={mockFAQs} />,
      <BreadcrumbSchema key="breadcrumb" breadcrumbs={[{ name: 'Home', url: '/' }]} />,
      <WebPageSchema key="webpage" pageData={{ type: 'WebPage', url: '/', title: 'Test', description: 'Test' }} />,
      <ContactSchema key="contact" />,
      <LocationSchema key="location" location={{
        name: 'Test',
        description: 'Test',
        address: { addressCountry: 'IN' },
        geo: { latitude: 0, longitude: 0 },
        telephone: '+91-1234567890',
        openingHours: 'Mo-Fr 09:00-17:00'
      }} />
    ];

    components.forEach((component, index) => {
      const { container } = render(component);
      const scriptTags = container.querySelectorAll('script[type="application/ld+json"]');
      
      expect(scriptTags.length).toBeGreaterThan(0);
      
      scriptTags.forEach(scriptTag => {
        expect(() => {
          const schemaData = JSON.parse(scriptTag.textContent);
          expect(schemaData['@context']).toBe('https://schema.org');
          expect(schemaData['@type']).toBeDefined();
        }).not.toThrow();
      });
    });
  });

  test('schema components should handle error conditions gracefully', () => {
    const errorComponents = [
      <ProductSchema key="product-error" product={null} />,
      <ServiceSchema key="service-error" service={null} />,
      <FAQSchema key="faq-error" faqs={[]} />,
      <BreadcrumbSchema key="breadcrumb-error" breadcrumbs={[]} />,
      <WebPageSchema key="webpage-error" pageData={null} />,
      <LocationSchema key="location-error" location={null} />
    ];

    errorComponents.forEach((component) => {
      expect(() => {
        render(component);
      }).not.toThrow();
    });
  });
});
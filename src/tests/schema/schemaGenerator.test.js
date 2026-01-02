// Schema Generator Tests
// Unit tests for schema generator functions

import {
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
} from '../../utils/schemaGenerator.js';

import { organizationData, locationsData } from '../../data/schemaData.js';

describe('Schema Generator Functions', () => {
  
  describe('generateOrganizationSchema', () => {
    test('should generate valid organization schema', () => {
      const schema = generateOrganizationSchema();
      
      expect(schema).toBeDefined();
      expect(schema['@context']).toBe('https://schema.org');
      expect(schema['@type']).toContain('Organization');
      expect(schema.name).toBe(organizationData.name);
      expect(schema.url).toBe(organizationData.url);
      expect(schema.contactPoint).toBeDefined();
      expect(schema.location).toBeDefined();
    });

    test('should include all required organization properties', () => {
      const schema = generateOrganizationSchema();
      
      expect(schema.foundingDate).toBeDefined();
      expect(schema.description).toBeDefined();
      expect(schema.logo).toBeDefined();
      expect(schema.sameAs).toBeDefined();
      expect(schema.areaServed).toBeDefined();
    });

    test('should handle custom options', () => {
      const options = { baseUrl: 'https://custom.example.com' };
      const schema = generateOrganizationSchema(options);
      
      expect(schema['@id']).toContain('custom.example.com');
    });
  });

  describe('generateLocalBusinessSchema', () => {
    test('should generate valid local business schema for Unit I', () => {
      const schema = generateLocalBusinessSchema('Unit I');
      
      expect(schema).toBeDefined();
      expect(schema['@context']).toBe('https://schema.org');
      expect(schema['@type']).toContain('LocalBusiness');
      expect(schema.name).toContain('Unit I');
      expect(schema.address).toBeDefined();
      expect(schema.geo).toBeDefined();
    });

    test('should generate valid local business schema for Unit II', () => {
      const schema = generateLocalBusinessSchema('Unit II');
      
      expect(schema).toBeDefined();
      expect(schema.name).toContain('Unit II');
      expect(schema.address).toBeDefined();
      expect(schema.geo).toBeDefined();
    });

    test('should throw error for invalid location', () => {
      expect(() => {
        generateLocalBusinessSchema('Invalid Location');
      }).toThrow('Location Invalid Location not found');
    });
  });

  describe('generateProductSchema', () => {
    const mockProduct = {
      slug: 'test-product',
      category: 'Industrial Coil',
      type: 'Test Steel Product',
      description: 'Test product description',
      img: '/test-image.jpg'
    };

    test('should generate valid product schema', () => {
      const schema = generateProductSchema(mockProduct);
      
      expect(schema).toBeDefined();
      expect(schema['@context']).toBe('https://schema.org');
      expect(schema['@type']).toBe('Product');
      expect(schema.name).toBe(mockProduct.type);
      expect(schema.description).toBe(mockProduct.description);
      expect(schema.brand).toBeDefined();
      expect(schema.manufacturer).toBeDefined();
    });

    test('should include product offers', () => {
      const schema = generateProductSchema(mockProduct);
      
      expect(schema.offers).toBeDefined();
      expect(schema.offers['@type']).toBe('Offer');
      expect(schema.offers.seller).toBeDefined();
    });
  });

  describe('generateServiceSchema', () => {
    const mockService = {
      slug: 'test-service',
      name: 'Test Fabrication Service',
      description: 'Test service description',
      serviceType: 'Manufacturing Service'
    };

    test('should generate valid service schema', () => {
      const schema = generateServiceSchema(mockService);
      
      expect(schema).toBeDefined();
      expect(schema['@context']).toBe('https://schema.org');
      expect(schema['@type']).toBe('Service');
      expect(schema.name).toBe(mockService.name);
      expect(schema.description).toBe(mockService.description);
      expect(schema.provider).toBeDefined();
    });

    test('should include service area', () => {
      const schema = generateServiceSchema(mockService);
      
      expect(schema.areaServed).toBeDefined();
      expect(schema.availableChannel).toBeDefined();
    });
  });

  describe('generateWebPageSchema', () => {
    const mockPageData = {
      type: 'WebPage',
      url: '/test-page',
      title: 'Test Page',
      description: 'Test page description'
    };

    test('should generate valid webpage schema', () => {
      const schema = generateWebPageSchema(mockPageData);
      
      expect(schema).toBeDefined();
      expect(schema['@context']).toBe('https://schema.org');
      expect(schema['@type']).toBe('WebPage');
      expect(schema.name).toBe(mockPageData.title);
      expect(schema.description).toBe(mockPageData.description);
    });

    test('should include breadcrumbs when provided', () => {
      const pageDataWithBreadcrumbs = {
        ...mockPageData,
        breadcrumbs: [
          { name: 'Home', url: '/' },
          { name: 'Test Page', url: '/test-page' }
        ]
      };
      
      const schema = generateWebPageSchema(pageDataWithBreadcrumbs);
      
      expect(schema.breadcrumb).toBeDefined();
      expect(schema.breadcrumb['@type']).toBe('BreadcrumbList');
    });
  });

  describe('generateBreadcrumbSchema', () => {
    const mockBreadcrumbs = [
      { name: 'Home', url: '/' },
      { name: 'Products', url: '/products' },
      { name: 'Steel Coil', url: '/products/steel-coil' }
    ];

    test('should generate valid breadcrumb schema', () => {
      const schema = generateBreadcrumbSchema(mockBreadcrumbs);
      
      expect(schema).toBeDefined();
      expect(schema['@context']).toBe('https://schema.org');
      expect(schema['@type']).toBe('BreadcrumbList');
      expect(schema.itemListElement).toHaveLength(3);
    });

    test('should have correct breadcrumb structure', () => {
      const schema = generateBreadcrumbSchema(mockBreadcrumbs);
      
      schema.itemListElement.forEach((item, index) => {
        expect(item['@type']).toBe('ListItem');
        expect(item.position).toBe(index + 1);
        expect(item.name).toBe(mockBreadcrumbs[index].name);
      });
    });
  });

  describe('generateFAQSchema', () => {
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

    test('should generate valid FAQ schema', () => {
      const schema = generateFAQSchema(mockFAQs);
      
      expect(schema).toBeDefined();
      expect(schema['@context']).toBe('https://schema.org');
      expect(schema['@type']).toBe('FAQPage');
      expect(schema.mainEntity).toHaveLength(2);
    });

    test('should have correct FAQ structure', () => {
      const schema = generateFAQSchema(mockFAQs);
      
      schema.mainEntity.forEach((item, index) => {
        expect(item['@type']).toBe('Question');
        expect(item.name).toBe(mockFAQs[index].question);
        expect(item.acceptedAnswer['@type']).toBe('Answer');
        expect(item.acceptedAnswer.text).toBe(mockFAQs[index].answer);
      });
    });
  });

  describe('generateCollectionPageSchema', () => {
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
      },
      {
        type: 'Product',
        name: 'Product 2',
        url: '/products/product-2'
      }
    ];

    test('should generate valid collection page schema', () => {
      const schema = generateCollectionPageSchema(mockCollectionData, mockItems);
      
      expect(schema).toBeDefined();
      expect(schema['@context']).toBe('https://schema.org');
      expect(schema['@type']).toBe('CollectionPage');
      expect(schema.name).toBe(mockCollectionData.title);
      expect(schema.mainEntity).toBeDefined();
    });

    test('should include all collection items', () => {
      const schema = generateCollectionPageSchema(mockCollectionData, mockItems);
      
      expect(schema.mainEntity.numberOfItems).toBe(2);
      expect(schema.mainEntity.itemListElement).toHaveLength(2);
    });
  });

  describe('generateContactPageSchema', () => {
    test('should generate valid contact page schema', () => {
      const schema = generateContactPageSchema();
      
      expect(schema).toBeDefined();
      expect(schema['@context']).toBe('https://schema.org');
      expect(schema['@type']).toBe('ContactPage');
      expect(schema.name).toBeDefined();
      expect(schema.mainEntity).toBeDefined();
    });
  });

  describe('stringifySchema', () => {
    test('should stringify valid schema object', () => {
      const schema = { '@context': 'https://schema.org', '@type': 'Thing' };
      const result = stringifySchema(schema);
      
      expect(typeof result).toBe('string');
      expect(result).toContain('schema.org');
    });

    test('should handle invalid schema gracefully', () => {
      const result = stringifySchema(null);
      
      expect(result).toBe('{}');
    });

    test('should handle circular references', () => {
      const schema = { '@context': 'https://schema.org' };
      schema.self = schema; // Create circular reference
      
      const result = stringifySchema(schema);
      
      expect(typeof result).toBe('string');
    });
  });

  describe('validateSchema (deprecated)', () => {
    test('should validate correct schema structure', () => {
      const validSchema = {
        '@context': 'https://schema.org',
        '@type': 'Thing'
      };
      
      const result = validateSchema(validSchema);
      
      expect(result).toBe(true);
    });

    test('should reject invalid schema structure', () => {
      const invalidSchema = {
        '@context': 'invalid-context'
      };
      
      const result = validateSchema(invalidSchema);
      
      expect(result).toBe(false);
    });

    test('should reject non-object input', () => {
      const result = validateSchema('not an object');
      
      expect(result).toBe(false);
    });
  });
});

describe('Schema Integration Tests', () => {
  test('all schema generators should produce valid JSON-LD', () => {
    const schemas = [
      generateOrganizationSchema(),
      generateLocalBusinessSchema('Unit I'),
      generateProductSchema({
        slug: 'test',
        category: 'Test',
        type: 'Test Product',
        description: 'Test',
        img: '/test.jpg'
      }),
      generateServiceSchema({
        slug: 'test',
        name: 'Test Service',
        description: 'Test'
      }),
      generateWebPageSchema({
        type: 'WebPage',
        url: '/test',
        title: 'Test',
        description: 'Test'
      }),
      generateBreadcrumbSchema([{ name: 'Home', url: '/' }]),
      generateFAQSchema([{ question: 'Test?', answer: 'Test.' }]),
      generateCollectionPageSchema(
        { title: 'Test', description: 'Test', url: '/test' },
        [{ type: 'Product', name: 'Test', url: '/test' }]
      ),
      generateContactPageSchema()
    ];

    schemas.forEach(schema => {
      expect(schema).toBeDefined();
      expect(schema['@context']).toBe('https://schema.org');
      expect(schema['@type']).toBeDefined();
      
      // Should be valid JSON
      const jsonString = stringifySchema(schema);
      expect(() => JSON.parse(jsonString)).not.toThrow();
    });
  });
});
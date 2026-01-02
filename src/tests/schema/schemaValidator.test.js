// Schema Validator Tests
// Unit tests for schema validation functions

import {
  validateSchema,
  validateSchemaStructure,
  validateSchemaProperties,
  validateNestedSchema,
  validateForRichResults,
  validateURL,
  validateEmail,
  validatePhone,
  validateDate,
  safeSchemaGeneration,
  SchemaLogger,
  schemaLogger,
  VALIDATION_ERRORS,
  ValidationResult
} from '../../utils/schemaValidator.js';

describe('Schema Validator Functions', () => {
  
  describe('validateSchemaStructure', () => {
    test('should validate correct schema structure', () => {
      const validSchema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        'name': 'Test Organization'
      };
      
      const result = validateSchemaStructure(validSchema);
      
      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    test('should reject schema without @context', () => {
      const invalidSchema = {
        '@type': 'Organization',
        'name': 'Test Organization'
      };
      
      const result = validateSchemaStructure(invalidSchema);
      
      expect(result.isValid).toBe(false);
      expect(result.errors).toContainEqual(
        expect.objectContaining({
          type: VALIDATION_ERRORS.MISSING_CONTEXT
        })
      );
    });

    test('should reject schema without @type', () => {
      const invalidSchema = {
        '@context': 'https://schema.org',
        'name': 'Test Organization'
      };
      
      const result = validateSchemaStructure(invalidSchema);
      
      expect(result.isValid).toBe(false);
      expect(result.errors).toContainEqual(
        expect.objectContaining({
          type: VALIDATION_ERRORS.MISSING_TYPE
        })
      );
    });

    test('should reject invalid @context', () => {
      const invalidSchema = {
        '@context': 'https://invalid-context.com',
        '@type': 'Organization',
        'name': 'Test Organization'
      };
      
      const result = validateSchemaStructure(invalidSchema);
      
      expect(result.isValid).toBe(false);
      expect(result.errors).toContainEqual(
        expect.objectContaining({
          type: VALIDATION_ERRORS.INVALID_CONTEXT
        })
      );
    });

    test('should check required properties for Organization', () => {
      const incompleteSchema = {
        '@context': 'https://schema.org',
        '@type': 'Organization'
        // Missing required 'name' and 'url'
      };
      
      const result = validateSchemaStructure(incompleteSchema);
      
      expect(result.isValid).toBe(false);
      expect(result.errors.length).toBeGreaterThan(0);
    });
  });

  describe('validateSchemaProperties', () => {
    test('should validate correct URLs', () => {
      const schemaWithValidURL = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        'url': 'https://www.example.com'
      };
      
      const result = validateSchemaProperties(schemaWithValidURL);
      
      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    test('should reject invalid URLs', () => {
      const schemaWithInvalidURL = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        'url': 'not-a-valid-url'
      };
      
      const result = validateSchemaProperties(schemaWithInvalidURL);
      
      expect(result.isValid).toBe(false);
      expect(result.errors).toContainEqual(
        expect.objectContaining({
          type: VALIDATION_ERRORS.INVALID_URL
        })
      );
    });

    test('should validate email addresses', () => {
      const schemaWithValidEmail = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        'email': 'test@example.com'
      };
      
      const result = validateSchemaProperties(schemaWithValidEmail);
      
      expect(result.isValid).toBe(true);
    });

    test('should reject invalid email addresses', () => {
      const schemaWithInvalidEmail = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        'email': 'invalid-email'
      };
      
      const result = validateSchemaProperties(schemaWithInvalidEmail);
      
      expect(result.isValid).toBe(false);
      expect(result.errors).toContainEqual(
        expect.objectContaining({
          type: VALIDATION_ERRORS.INVALID_EMAIL
        })
      );
    });

    test('should validate phone numbers', () => {
      const schemaWithValidPhone = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        'telephone': '+91-9876543210'
      };
      
      const result = validateSchemaProperties(schemaWithValidPhone);
      
      expect(result.isValid).toBe(true);
    });

    test('should validate dates', () => {
      const schemaWithValidDate = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        'foundingDate': '2015-01-01'
      };
      
      const result = validateSchemaProperties(schemaWithValidDate);
      
      expect(result.isValid).toBe(true);
    });
  });

  describe('validateNestedSchema', () => {
    test('should validate nested schema objects', () => {
      const nestedSchema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        'name': 'Test Organization',
        'contactPoint': {
          '@type': 'ContactPoint',
          'telephone': '+91-9876543210'
        }
      };
      
      const result = validateNestedSchema(nestedSchema);
      
      expect(result.isValid).toBe(true);
    });

    test('should detect circular references', () => {
      const circularSchema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        'name': 'Test Organization'
      };
      circularSchema.self = circularSchema;
      
      const result = validateNestedSchema(circularSchema);
      
      expect(result.errors).toContainEqual(
        expect.objectContaining({
          type: VALIDATION_ERRORS.CIRCULAR_REFERENCE
        })
      );
    });
  });

  describe('validateForRichResults', () => {
    test('should validate Product schema for Rich Results', () => {
      const productSchema = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        'name': 'Test Product',
        'image': 'https://example.com/image.jpg',
        'description': 'Test product description'
      };
      
      const result = validateForRichResults(productSchema, 'Product');
      
      expect(result.isValid).toBe(true);
    });

    test('should reject incomplete Product schema', () => {
      const incompleteProductSchema = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        'name': 'Test Product'
        // Missing required 'image' and 'description'
      };
      
      const result = validateForRichResults(incompleteProductSchema, 'Product');
      
      expect(result.isValid).toBe(false);
      expect(result.errors.length).toBeGreaterThan(0);
    });

    test('should validate Organization schema for Rich Results', () => {
      const orgSchema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        'name': 'Test Organization',
        'url': 'https://example.com',
        'logo': 'https://example.com/logo.jpg'
      };
      
      const result = validateForRichResults(orgSchema, 'Organization');
      
      expect(result.isValid).toBe(true);
    });
  });

  describe('Utility Validation Functions', () => {
    describe('validateURL', () => {
      test('should validate correct URLs', () => {
        expect(validateURL('https://www.example.com')).toBe(true);
        expect(validateURL('http://example.com')).toBe(true);
        expect(validateURL('https://subdomain.example.com/path')).toBe(true);
      });

      test('should reject invalid URLs', () => {
        expect(validateURL('not-a-url')).toBe(false);
        expect(validateURL('ftp://example.com')).toBe(false);
        expect(validateURL('')).toBe(false);
        expect(validateURL(null)).toBe(false);
      });
    });

    describe('validateEmail', () => {
      test('should validate correct email addresses', () => {
        expect(validateEmail('test@example.com')).toBe(true);
        expect(validateEmail('user.name@domain.co.uk')).toBe(true);
        expect(validateEmail('test+tag@example.org')).toBe(true);
      });

      test('should reject invalid email addresses', () => {
        expect(validateEmail('invalid-email')).toBe(false);
        expect(validateEmail('@example.com')).toBe(false);
        expect(validateEmail('test@')).toBe(false);
        expect(validateEmail('')).toBe(false);
        expect(validateEmail(null)).toBe(false);
      });
    });

    describe('validatePhone', () => {
      test('should validate correct phone numbers', () => {
        expect(validatePhone('+91-9876543210')).toBe(true);
        expect(validatePhone('(555) 123-4567')).toBe(true);
        expect(validatePhone('555-123-4567')).toBe(true);
        expect(validatePhone('+1 555 123 4567')).toBe(true);
      });

      test('should reject invalid phone numbers', () => {
        expect(validatePhone('123')).toBe(false);
        expect(validatePhone('abc-def-ghij')).toBe(false);
        expect(validatePhone('')).toBe(false);
        expect(validatePhone(null)).toBe(false);
      });
    });

    describe('validateDate', () => {
      test('should validate correct date formats', () => {
        expect(validateDate('2024-01-01')).toBe(true);
        expect(validateDate('2024-12-31T23:59:59Z')).toBe(true);
        expect(validateDate('2024-06-15T10:30:00')).toBe(true);
      });

      test('should reject invalid date formats', () => {
        expect(validateDate('invalid-date')).toBe(false);
        expect(validateDate('2024/01/01')).toBe(false);
        expect(validateDate('')).toBe(false);
        expect(validateDate(null)).toBe(false);
      });
    });
  });

  describe('safeSchemaGeneration', () => {
    test('should execute valid generator function', () => {
      const mockGenerator = jest.fn(() => ({
        '@context': 'https://schema.org',
        '@type': 'Thing'
      }));
      
      const result = safeSchemaGeneration(mockGenerator, [], 'Test');
      
      expect(mockGenerator).toHaveBeenCalled();
      expect(result).toBeDefined();
      expect(result['@type']).toBe('Thing');
    });

    test('should handle generator function errors', () => {
      const mockGenerator = jest.fn(() => {
        throw new Error('Generator error');
      });
      
      const result = safeSchemaGeneration(mockGenerator, [], 'Test');
      
      expect(result).toBeNull();
    });

    test('should validate generated schema', () => {
      const mockGenerator = jest.fn(() => ({
        // Invalid schema - missing @context
        '@type': 'Thing'
      }));
      
      const result = safeSchemaGeneration(mockGenerator, [], 'Test');
      
      expect(result).toBeNull();
    });
  });

  describe('SchemaLogger', () => {
    test('should create logger with default options', () => {
      const logger = new SchemaLogger();
      
      expect(logger.logLevel).toBe('error');
      expect(logger.enableConsole).toBe(true);
      expect(logger.enableStorage).toBe(false);
    });

    test('should log errors', () => {
      const logger = new SchemaLogger({ enableStorage: true });
      
      logger.error('Test error', { test: 'data' });
      
      const errors = logger.getErrors();
      expect(errors).toHaveLength(1);
      expect(errors[0].level).toBe('error');
      expect(errors[0].message).toBe('Test error');
    });

    test('should respect log level', () => {
      const logger = new SchemaLogger({ 
        logLevel: 'error',
        enableStorage: true 
      });
      
      logger.warning('Test warning');
      logger.error('Test error');
      
      const errors = logger.getErrors();
      expect(errors).toHaveLength(1);
      expect(errors[0].level).toBe('error');
    });

    test('should clear errors', () => {
      const logger = new SchemaLogger({ enableStorage: true });
      
      logger.error('Test error');
      expect(logger.getErrors()).toHaveLength(1);
      
      logger.clearErrors();
      expect(logger.getErrors()).toHaveLength(0);
    });
  });

  describe('ValidationResult', () => {
    test('should create valid result by default', () => {
      const result = new ValidationResult();
      
      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
      expect(result.warnings).toHaveLength(0);
    });

    test('should add errors and mark as invalid', () => {
      const result = new ValidationResult();
      
      result.addError('TEST_ERROR', 'Test error message');
      
      expect(result.isValid).toBe(false);
      expect(result.errors).toHaveLength(1);
      expect(result.errors[0].type).toBe('TEST_ERROR');
      expect(result.errors[0].message).toBe('Test error message');
    });

    test('should add warnings without affecting validity', () => {
      const result = new ValidationResult();
      
      result.addWarning('TEST_WARNING', 'Test warning message');
      
      expect(result.isValid).toBe(true);
      expect(result.warnings).toHaveLength(1);
      expect(result.warnings[0].type).toBe('TEST_WARNING');
    });

    test('should generate correct report', () => {
      const result = new ValidationResult();
      
      result.addError('ERROR1', 'Error 1');
      result.addWarning('WARNING1', 'Warning 1');
      
      const report = result.getReport();
      
      expect(report.isValid).toBe(false);
      expect(report.errorCount).toBe(1);
      expect(report.warningCount).toBe(1);
      expect(report.errors).toHaveLength(1);
      expect(report.warnings).toHaveLength(1);
    });
  });
});

describe('Schema Validation Integration Tests', () => {
  test('should validate complete organization schema', () => {
    const orgSchema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      'name': 'Aero Enterprises',
      'url': 'https://www.aeroenterprises.shop',
      'email': 'info@aeroenterprises.shop',
      'telephone': '+91-9820749841',
      'foundingDate': '1989-01-01',
      'logo': 'https://www.aeroenterprises.shop/logo.jpg',
      'sameAs': ['https://www.linkedin.com/company/aero-enterprises']
    };
    
    const result = validateSchema(orgSchema);
    
    expect(result.isValid).toBe(true);
    expect(result.errors).toHaveLength(0);
  });

  test('should validate complete product schema', () => {
    const productSchema = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      'name': 'HR Steel Coil',
      'description': 'High-quality hot rolled steel coil',
      'image': 'https://www.aeroenterprises.shop/hr-coil.jpg',
      'brand': {
        '@type': 'Brand',
        'name': 'Aero Enterprises'
      },
      'offers': {
        '@type': 'Offer',
        'price': '55000',
        'priceCurrency': 'INR'
      }
    };
    
    const result = validateSchema(productSchema);
    
    expect(result.isValid).toBe(true);
    expect(result.errors).toHaveLength(0);
  });

  test('should handle complex nested schema validation', () => {
    const complexSchema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      'name': 'Aero Enterprises',
      'url': 'https://www.aeroenterprises.shop',
      'contactPoint': [
        {
          '@type': 'ContactPoint',
          'telephone': '+91-9820749841',
          'contactType': 'customer service'
        }
      ],
      'location': [
        {
          '@type': 'Place',
          'name': 'Unit I',
          'address': {
            '@type': 'PostalAddress',
            'streetAddress': 'Vasai Phata',
            'addressLocality': 'Vasai East',
            'addressCountry': 'IN'
          }
        }
      ]
    };
    
    const result = validateSchema(complexSchema);
    
    expect(result.isValid).toBe(true);
    expect(result.errors).toHaveLength(0);
  });
});
// Schema Monitoring and Error Tracking System
// Provides comprehensive monitoring and alerting for schema issues

import { schemaLogger } from './schemaValidator.js';
import { validateSchema } from './schemaValidator.js';

/**
 * Schema Monitoring Configuration
 */
const MONITORING_CONFIG = {
  // Error thresholds
  errorThreshold: 5, // Maximum errors per hour
  warningThreshold: 10, // Maximum warnings per hour
  
  // Monitoring intervals
  checkInterval: 300000, // 5 minutes
  reportInterval: 3600000, // 1 hour
  
  // Alert settings
  enableAlerts: process.env.NODE_ENV === 'production',
  alertEndpoint: process.env.SCHEMA_ALERT_ENDPOINT,
  
  // Storage settings
  maxStoredErrors: 1000,
  errorRetentionDays: 7
};

/**
 * Schema Error Types for Monitoring
 */
export const SCHEMA_ERROR_TYPES = {
  VALIDATION_FAILED: 'validation_failed',
  GENERATION_ERROR: 'generation_error',
  MISSING_DATA: 'missing_data',
  INVALID_STRUCTURE: 'invalid_structure',
  NETWORK_ERROR: 'network_error',
  TIMEOUT_ERROR: 'timeout_error'
};

/**
 * Schema Monitoring Class
 * Handles error tracking, alerting, and reporting
 */
export class SchemaMonitor {
  constructor(config = {}) {
    this.config = { ...MONITORING_CONFIG, ...config };
    this.errors = [];
    this.warnings = [];
    this.metrics = {
      totalSchemas: 0,
      validSchemas: 0,
      invalidSchemas: 0,
      errorRate: 0,
      lastCheck: null
    };
    
    this.isMonitoring = false;
    this.monitoringInterval = null;
    this.reportingInterval = null;
    
    // Bind methods
    this.recordError = this.recordError.bind(this);
    this.recordWarning = this.recordWarning.bind(this);
    this.checkHealth = this.checkHealth.bind(this);
  }

  /**
   * Start monitoring schema health
   */
  startMonitoring() {
    if (this.isMonitoring) {
      console.warn('Schema monitoring is already running');
      return;
    }

    this.isMonitoring = true;
    
    // Start periodic health checks
    this.monitoringInterval = setInterval(
      this.checkHealth,
      this.config.checkInterval
    );
    
    // Start periodic reporting
    this.reportingInterval = setInterval(
      () => this.generateReport(),
      this.config.reportInterval
    );
    
    console.log('Schema monitoring started');
  }

  /**
   * Stop monitoring
   */
  stopMonitoring() {
    if (!this.isMonitoring) {
      return;
    }

    this.isMonitoring = false;
    
    if (this.monitoringInterval) {
      clearInterval(this.monitoringInterval);
      this.monitoringInterval = null;
    }
    
    if (this.reportingInterval) {
      clearInterval(this.reportingInterval);
      this.reportingInterval = null;
    }
    
    console.log('Schema monitoring stopped');
  }

  /**
   * Record a schema error
   * @param {string} type - Error type
   * @param {string} message - Error message
   * @param {Object} context - Additional context
   */
  recordError(type, message, context = {}) {
    const error = {
      id: this.generateId(),
      type,
      message,
      context,
      timestamp: new Date().toISOString(),
      severity: 'error',
      url: typeof window !== 'undefined' ? window.location.href : 'server',
      userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : 'server'
    };

    this.errors.push(error);
    this.metrics.invalidSchemas++;
    
    // Cleanup old errors
    this.cleanupOldErrors();
    
    // Log error
    schemaLogger.error(`Schema Error: ${message}`, { type, context });
    
    // Check if alert threshold is reached
    this.checkAlertThreshold();
    
    return error.id;
  }

  /**
   * Record a schema warning
   * @param {string} type - Warning type
   * @param {string} message - Warning message
   * @param {Object} context - Additional context
   */
  recordWarning(type, message, context = {}) {
    const warning = {
      id: this.generateId(),
      type,
      message,
      context,
      timestamp: new Date().toISOString(),
      severity: 'warning',
      url: typeof window !== 'undefined' ? window.location.href : 'server'
    };

    this.warnings.push(warning);
    
    // Cleanup old warnings
    this.cleanupOldWarnings();
    
    // Log warning
    schemaLogger.warning(`Schema Warning: ${message}`, { type, context });
    
    return warning.id;
  }

  /**
   * Record successful schema validation
   * @param {Object} schema - The validated schema
   */
  recordSuccess(schema) {
    this.metrics.totalSchemas++;
    this.metrics.validSchemas++;
    this.updateErrorRate();
  }

  /**
   * Check overall schema health
   */
  checkHealth() {
    const now = new Date();
    const oneHourAgo = new Date(now.getTime() - 3600000);
    
    // Count recent errors and warnings
    const recentErrors = this.errors.filter(
      error => new Date(error.timestamp) > oneHourAgo
    );
    
    const recentWarnings = this.warnings.filter(
      warning => new Date(warning.timestamp) > oneHourAgo
    );
    
    // Update metrics
    this.metrics.lastCheck = now.toISOString();
    this.updateErrorRate();
    
    // Check thresholds
    if (recentErrors.length > this.config.errorThreshold) {
      this.triggerAlert('HIGH_ERROR_RATE', {
        errorCount: recentErrors.length,
        threshold: this.config.errorThreshold,
        timeWindow: '1 hour'
      });
    }
    
    if (recentWarnings.length > this.config.warningThreshold) {
      this.triggerAlert('HIGH_WARNING_RATE', {
        warningCount: recentWarnings.length,
        threshold: this.config.warningThreshold,
        timeWindow: '1 hour'
      });
    }
    
    return {
      status: recentErrors.length === 0 ? 'healthy' : 'degraded',
      recentErrors: recentErrors.length,
      recentWarnings: recentWarnings.length,
      totalSchemas: this.metrics.totalSchemas,
      errorRate: this.metrics.errorRate
    };
  }

  /**
   * Generate monitoring report
   */
  generateReport() {
    const now = new Date();
    const oneDayAgo = new Date(now.getTime() - 86400000);
    
    const recentErrors = this.errors.filter(
      error => new Date(error.timestamp) > oneDayAgo
    );
    
    const recentWarnings = this.warnings.filter(
      warning => new Date(warning.timestamp) > oneDayAgo
    );
    
    // Group errors by type
    const errorsByType = recentErrors.reduce((acc, error) => {
      acc[error.type] = (acc[error.type] || 0) + 1;
      return acc;
    }, {});
    
    // Group warnings by type
    const warningsByType = recentWarnings.reduce((acc, warning) => {
      acc[warning.type] = (acc[warning.type] || 0) + 1;
      return acc;
    }, {});
    
    const report = {
      timestamp: now.toISOString(),
      period: '24 hours',
      summary: {
        totalSchemas: this.metrics.totalSchemas,
        validSchemas: this.metrics.validSchemas,
        invalidSchemas: this.metrics.invalidSchemas,
        errorRate: this.metrics.errorRate,
        totalErrors: recentErrors.length,
        totalWarnings: recentWarnings.length
      },
      errorsByType,
      warningsByType,
      topErrors: recentErrors
        .slice(0, 10)
        .map(error => ({
          type: error.type,
          message: error.message,
          timestamp: error.timestamp,
          url: error.url
        })),
      recommendations: this.generateRecommendations(errorsByType, warningsByType)
    };
    
    // Log report
    console.log('Schema Monitoring Report:', report);
    
    // Send report if configured
    if (this.config.alertEndpoint) {
      this.sendReport(report);
    }
    
    return report;
  }

  /**
   * Generate recommendations based on error patterns
   */
  generateRecommendations(errorsByType, warningsByType) {
    const recommendations = [];
    
    // Check for common error patterns
    if (errorsByType[SCHEMA_ERROR_TYPES.VALIDATION_FAILED] > 5) {
      recommendations.push({
        type: 'validation',
        message: 'High number of validation failures detected. Review schema generation logic.',
        priority: 'high'
      });
    }
    
    if (errorsByType[SCHEMA_ERROR_TYPES.MISSING_DATA] > 3) {
      recommendations.push({
        type: 'data',
        message: 'Missing data errors detected. Implement better fallback mechanisms.',
        priority: 'medium'
      });
    }
    
    if (errorsByType[SCHEMA_ERROR_TYPES.NETWORK_ERROR] > 2) {
      recommendations.push({
        type: 'network',
        message: 'Network errors detected. Check external service dependencies.',
        priority: 'high'
      });
    }
    
    return recommendations;
  }

  /**
   * Trigger alert for critical issues
   */
  triggerAlert(alertType, context) {
    if (!this.config.enableAlerts) {
      return;
    }
    
    const alert = {
      type: alertType,
      timestamp: new Date().toISOString(),
      context,
      severity: this.getAlertSeverity(alertType),
      source: 'schema-monitor'
    };
    
    console.error('Schema Alert Triggered:', alert);
    
    // Send alert if endpoint configured
    if (this.config.alertEndpoint) {
      this.sendAlert(alert);
    }
  }

  /**
   * Send alert to configured endpoint
   */
  async sendAlert(alert) {
    try {
      const response = await fetch(this.config.alertEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(alert)
      });
      
      if (!response.ok) {
        console.error('Failed to send alert:', response.statusText);
      }
    } catch (error) {
      console.error('Error sending alert:', error);
    }
  }

  /**
   * Send monitoring report
   */
  async sendReport(report) {
    try {
      const response = await fetch(`${this.config.alertEndpoint}/reports`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(report)
      });
      
      if (!response.ok) {
        console.error('Failed to send report:', response.statusText);
      }
    } catch (error) {
      console.error('Error sending report:', error);
    }
  }

  /**
   * Get alert severity level
   */
  getAlertSeverity(alertType) {
    const severityMap = {
      'HIGH_ERROR_RATE': 'critical',
      'HIGH_WARNING_RATE': 'warning',
      'VALIDATION_FAILURE': 'error',
      'NETWORK_ERROR': 'critical'
    };
    
    return severityMap[alertType] || 'info';
  }

  /**
   * Check if alert threshold is reached
   */
  checkAlertThreshold() {
    const now = new Date();
    const oneHourAgo = new Date(now.getTime() - 3600000);
    
    const recentErrors = this.errors.filter(
      error => new Date(error.timestamp) > oneHourAgo
    );
    
    if (recentErrors.length >= this.config.errorThreshold) {
      this.triggerAlert('HIGH_ERROR_RATE', {
        errorCount: recentErrors.length,
        threshold: this.config.errorThreshold
      });
    }
  }

  /**
   * Update error rate metric
   */
  updateErrorRate() {
    if (this.metrics.totalSchemas === 0) {
      this.metrics.errorRate = 0;
    } else {
      this.metrics.errorRate = (this.metrics.invalidSchemas / this.metrics.totalSchemas) * 100;
    }
  }

  /**
   * Cleanup old errors
   */
  cleanupOldErrors() {
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - this.config.errorRetentionDays);
    
    this.errors = this.errors.filter(
      error => new Date(error.timestamp) > cutoffDate
    );
    
    // Limit total stored errors
    if (this.errors.length > this.config.maxStoredErrors) {
      this.errors = this.errors.slice(-this.config.maxStoredErrors);
    }
  }

  /**
   * Cleanup old warnings
   */
  cleanupOldWarnings() {
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - this.config.errorRetentionDays);
    
    this.warnings = this.warnings.filter(
      warning => new Date(warning.timestamp) > cutoffDate
    );
    
    // Limit total stored warnings
    if (this.warnings.length > this.config.maxStoredErrors) {
      this.warnings = this.warnings.slice(-this.config.maxStoredErrors);
    }
  }

  /**
   * Generate unique ID
   */
  generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }

  /**
   * Get current metrics
   */
  getMetrics() {
    return { ...this.metrics };
  }

  /**
   * Get recent errors
   */
  getRecentErrors(hours = 24) {
    const cutoffDate = new Date();
    cutoffDate.setHours(cutoffDate.getHours() - hours);
    
    return this.errors.filter(
      error => new Date(error.timestamp) > cutoffDate
    );
  }

  /**
   * Get recent warnings
   */
  getRecentWarnings(hours = 24) {
    const cutoffDate = new Date();
    cutoffDate.setHours(cutoffDate.getHours() - hours);
    
    return this.warnings.filter(
      warning => new Date(warning.timestamp) > cutoffDate
    );
  }

  /**
   * Clear all stored data
   */
  clearData() {
    this.errors = [];
    this.warnings = [];
    this.metrics = {
      totalSchemas: 0,
      validSchemas: 0,
      invalidSchemas: 0,
      errorRate: 0,
      lastCheck: null
    };
  }
}

/**
 * Global schema monitor instance
 */
export const schemaMonitor = new SchemaMonitor();

/**
 * Schema validation wrapper with monitoring
 * @param {Function} validationFn - Validation function
 * @param {Object} schema - Schema to validate
 * @param {string} context - Context information
 * @returns {Object} Validation result with monitoring
 */
export function monitoredValidation(validationFn, schema, context = '') {
  try {
    const result = validationFn(schema);
    
    if (result.isValid) {
      schemaMonitor.recordSuccess(schema);
    } else {
      schemaMonitor.recordError(
        SCHEMA_ERROR_TYPES.VALIDATION_FAILED,
        'Schema validation failed',
        { context, errors: result.errors }
      );
    }
    
    return result;
  } catch (error) {
    schemaMonitor.recordError(
      SCHEMA_ERROR_TYPES.GENERATION_ERROR,
      error.message,
      { context, stack: error.stack }
    );
    
    throw error;
  }
}

/**
 * Initialize schema monitoring
 * @param {Object} config - Configuration options
 */
export function initializeSchemaMonitoring(config = {}) {
  // Only start monitoring in production or when explicitly enabled
  if (process.env.NODE_ENV === 'production' || config.forceEnable) {
    schemaMonitor.startMonitoring();
    
    // Set up error handlers
    if (typeof window !== 'undefined') {
      window.addEventListener('error', (event) => {
        if (event.error && event.error.message.includes('schema')) {
          schemaMonitor.recordError(
            SCHEMA_ERROR_TYPES.GENERATION_ERROR,
            event.error.message,
            { source: 'window.error', filename: event.filename, lineno: event.lineno }
          );
        }
      });
      
      window.addEventListener('unhandledrejection', (event) => {
        if (event.reason && event.reason.message && event.reason.message.includes('schema')) {
          schemaMonitor.recordError(
            SCHEMA_ERROR_TYPES.NETWORK_ERROR,
            event.reason.message,
            { source: 'unhandledrejection' }
          );
        }
      });
    }
    
    console.log('Schema monitoring initialized');
  }
}

/**
 * Cleanup schema monitoring
 */
export function cleanupSchemaMonitoring() {
  schemaMonitor.stopMonitoring();
  console.log('Schema monitoring cleaned up');
}

export default schemaMonitor;
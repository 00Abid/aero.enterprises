// Schema Health Dashboard Component
// Provides a dashboard for monitoring schema health and errors

'use client';
import React, { useState, useEffect } from 'react';
import { AlertTriangle, CheckCircle, XCircle, Activity, TrendingUp, Clock } from 'lucide-react';
import { schemaMonitor } from '../../utils/schemaMonitoring.js';

/**
 * Schema Health Dashboard Component
 * Displays real-time schema monitoring information
 * @param {Object} props - Component props
 * @param {boolean} props.showDetails - Whether to show detailed error information
 * @param {number} props.refreshInterval - Refresh interval in milliseconds
 * @returns {JSX.Element} Schema health dashboard
 */
export default function SchemaHealthDashboard({ showDetails = false, refreshInterval = 30000 }) {
  const [metrics, setMetrics] = useState(schemaMonitor.getMetrics());
  const [recentErrors, setRecentErrors] = useState([]);
  const [recentWarnings, setRecentWarnings] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Refresh data
  const refreshData = () => {
    setIsLoading(true);
    
    try {
      const currentMetrics = schemaMonitor.getMetrics();
      const errors = schemaMonitor.getRecentErrors(24);
      const warnings = schemaMonitor.getRecentWarnings(24);
      
      setMetrics(currentMetrics);
      setRecentErrors(errors);
      setRecentWarnings(warnings);
    } catch (error) {
      console.error('Error refreshing schema dashboard:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Auto-refresh data
  useEffect(() => {
    refreshData();
    
    const interval = setInterval(refreshData, refreshInterval);
    
    return () => clearInterval(interval);
  }, [refreshInterval]);

  // Get health status
  const getHealthStatus = () => {
    if (recentErrors.length === 0) return 'healthy';
    if (recentErrors.length < 5) return 'warning';
    return 'critical';
  };

  const healthStatus = getHealthStatus();

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Activity className="text-blue-600" size={24} />
          <h2 className="text-xl font-bold text-gray-900">Schema Health Monitor</h2>
        </div>
        <div className="flex items-center gap-2">
          {healthStatus === 'healthy' && <CheckCircle className="text-green-500" size={20} />}
          {healthStatus === 'warning' && <AlertTriangle className="text-yellow-500" size={20} />}
          {healthStatus === 'critical' && <XCircle className="text-red-500" size={20} />}
          <span className={`text-sm font-medium ${
            healthStatus === 'healthy' ? 'text-green-600' : 
            healthStatus === 'warning' ? 'text-yellow-600' : 'text-red-600'
          }`}>
            {healthStatus.toUpperCase()}
          </span>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-blue-50 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-blue-600">{metrics.totalSchemas}</div>
          <div className="text-xs text-blue-800 font-medium">Total Schemas</div>
        </div>
        <div className="bg-green-50 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-green-600">{metrics.validSchemas}</div>
          <div className="text-xs text-green-800 font-medium">Valid Schemas</div>
        </div>
        <div className="bg-red-50 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-red-600">{metrics.invalidSchemas}</div>
          <div className="text-xs text-red-800 font-medium">Invalid Schemas</div>
        </div>
        <div className="bg-gray-50 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-gray-600">{metrics.errorRate.toFixed(1)}%</div>
          <div className="text-xs text-gray-800 font-medium">Error Rate</div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-red-50 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-3">
            <XCircle className="text-red-500" size={16} />
            <h3 className="font-medium text-red-800">Recent Errors (24h)</h3>
          </div>
          <div className="text-2xl font-bold text-red-600 mb-2">{recentErrors.length}</div>
          {recentErrors.length > 0 && (
            <div className="text-xs text-red-700">
              Last: {new Date(recentErrors[recentErrors.length - 1]?.timestamp).toLocaleTimeString()}
            </div>
          )}
        </div>
        
        <div className="bg-yellow-50 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-3">
            <AlertTriangle className="text-yellow-500" size={16} />
            <h3 className="font-medium text-yellow-800">Recent Warnings (24h)</h3>
          </div>
          <div className="text-2xl font-bold text-yellow-600 mb-2">{recentWarnings.length}</div>
          {recentWarnings.length > 0 && (
            <div className="text-xs text-yellow-700">
              Last: {new Date(recentWarnings[recentWarnings.length - 1]?.timestamp).toLocaleTimeString()}
            </div>
          )}
        </div>
      </div>

      {/* Detailed Error Information */}
      {showDetails && (recentErrors.length > 0 || recentWarnings.length > 0) && (
        <div className="space-y-4">
          {recentErrors.length > 0 && (
            <div>
              <h3 className="font-medium text-gray-900 mb-3 flex items-center gap-2">
                <XCircle className="text-red-500" size={16} />
                Recent Errors
              </h3>
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {recentErrors.slice(-10).map((error, index) => (
                  <div key={index} className="bg-red-50 border border-red-200 rounded p-3">
                    <div className="flex items-start justify-between"></div>               <div className="flex-1">
                        <div className="text-sm font-medium text-red-800">{error.type}</div>
                        <div className="text-xs text-red-600 mt-1">{error.message}</div>
                        {error.url && (
                          <div className="text-xs text-red-500 mt-1">URL: {error.url}</div>
                        )}
                      </div>
                      <div className="text-xs text-red-400 flex items-center gap-1">
                        <Clock size={12} />
                        {new Date(error.timestamp).toLocaleTimeString()}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {recentWarnings.length > 0 && (
            <div>
              <h3 className="font-medium text-gray-900 mb-3 flex items-center gap-2">
                <AlertTriangle className="text-yellow-500" size={16} />
                Recent Warnings
              </h3>
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {recentWarnings.slice(-10).map((warning, index) => (
                  <div key={index} className="bg-yellow-50 border border-yellow-200 rounded p-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="text-sm font-medium text-yellow-800">{warning.type}</div>
                        <div className="text-xs text-yellow-600 mt-1">{warning.message}</div>
                        {warning.url && (
                          <div className="text-xs text-yellow-500 mt-1">URL: {warning.url}</div>
                        )}
                      </div>
                      <div className="text-xs text-yellow-400 flex items-center gap-1">
                        <Clock size={12} />
                        {new Date(warning.timestamp).toLocaleTimeString()}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Actions */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
        <div className="text-xs text-gray-500">
          Last updated: {metrics.lastCheck ? new Date(metrics.lastCheck).toLocaleString() : 'Never'}
        </div>
        <div className="flex gap-2">
          <button
            onClick={refreshData}
            disabled={isLoading}
            className="px-3 py-1 bg-blue-600 text-white text-xs rounded hover:bg-blue-700 disabled:opacity-50"
          >
            {isLoading ? 'Refreshing...' : 'Refresh'}
          </button>
          <button
            onClick={() => schemaMonitor.clearData()}
            className="px-3 py-1 bg-gray-600 text-white text-xs rounded hover:bg-gray-700"
          >
            Clear Data
          </button>
        </div>
      </div>
    </div>
  );
}

/**
 * Schema Health Badge Component
 * Small badge showing current schema health status
 * @param {Object} props - Component props
 * @param {string} props.className - Additional CSS classes
 * @returns {JSX.Element} Schema health badge
 */
export function SchemaHealthBadge({ className = '' }) {
  const [healthStatus, setHealthStatus] = useState('healthy');
  const [errorCount, setErrorCount] = useState(0);

  useEffect(() => {
    const updateStatus = () => {
      const errors = schemaMonitor.getRecentErrors(1); // Last hour
      setErrorCount(errors.length);
      
      if (errors.length === 0) setHealthStatus('healthy');
      else if (errors.length < 3) setHealthStatus('warning');
      else setHealthStatus('critical');
    };

    updateStatus();
    const interval = setInterval(updateStatus, 60000); // Update every minute
    
    return () => clearInterval(interval);
  }, []);

  const statusConfig = {
    healthy: { icon: CheckCircle, color: 'text-green-500', bg: 'bg-green-50', text: 'Healthy' },
    warning: { icon: AlertTriangle, color: 'text-yellow-500', bg: 'bg-yellow-50', text: 'Warning' },
    critical: { icon: XCircle, color: 'text-red-500', bg: 'bg-red-50', text: 'Critical' }
  };

  const config = statusConfig[healthStatus];
  const Icon = config.icon;

  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${config.bg} ${className}`}>
      <Icon className={config.color} size={14} />
      <span className={`text-xs font-medium ${config.color}`}>
        Schema: {config.text}
      </span>
      {errorCount > 0 && (
        <span className={`text-xs ${config.color} ml-1`}>
          ({errorCount})
        </span>
      )}
    </div>
  );
}

/**
 * Schema Monitoring Hook
 * React hook for accessing schema monitoring data
 * @param {number} refreshInterval - Refresh interval in milliseconds
 * @returns {Object} Monitoring data and functions
 */
export function useSchemaMonitoring(refreshInterval = 30000) {
  const [data, setData] = useState({
    metrics: schemaMonitor.getMetrics(),
    errors: [],
    warnings: [],
    healthStatus: 'healthy'
  });

  const refreshData = () => {
    const metrics = schemaMonitor.getMetrics();
    const errors = schemaMonitor.getRecentErrors(24);
    const warnings = schemaMonitor.getRecentWarnings(24);
    
    const healthStatus = errors.length === 0 ? 'healthy' : 
                        errors.length < 5 ? 'warning' : 'critical';

    setData({ metrics, errors, warnings, healthStatus });
  };

  useEffect(() => {
    refreshData();
    
    const interval = setInterval(refreshData, refreshInterval);
    
    return () => clearInterval(interval);
  }, [refreshInterval]);

  return {
    ...data,
    refreshData,
    clearData: () => {
      schemaMonitor.clearData();
      refreshData();
    }
  };
}
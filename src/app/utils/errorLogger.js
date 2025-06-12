// Error logging utility
const logError = (error, errorInfo = {}) => {
  // In production, this would send to your error tracking service
  // For now, we'll just log to console
  console.error('Error:', {
    message: error.message,
    stack: error.stack,
    ...errorInfo,
    timestamp: new Date().toISOString(),
    url: typeof window !== 'undefined' ? window.location.href : 'server-side',
  });
};

export const handleError = (error, errorInfo = {}) => {
  logError(error, errorInfo);
  
  // You can add additional error handling logic here
  // For example, sending to analytics or error tracking service
  if (process.env.NODE_ENV === 'production') {
    // Add your production error tracking service here
    // Example: Sentry.captureException(error);
  }
};

export default logError; 
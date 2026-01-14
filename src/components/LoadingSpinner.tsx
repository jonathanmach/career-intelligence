import React from 'react';

export const LoadingSpinner: React.FC = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
    <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-700 dark:border-blue-400"></div>
    <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg">Loading CV...</p>
  </div>
);

import React from 'react';

interface ErrorDisplayProps {
  error: Error;
  onRetry?: () => void;
}

export const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ error, onRetry }) => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
    <div className="bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-800 rounded-lg p-8 max-w-md shadow-lg">
      <div className="flex items-center mb-4">
        <svg
          className="w-8 h-8 text-red-600 dark:text-red-400 mr-3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <h2 className="text-2xl font-semibold text-red-800 dark:text-red-300">Error Loading CV</h2>
      </div>
      <p className="text-red-700 dark:text-red-400 mb-6">{error.message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="w-full bg-red-600 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600 text-white font-medium px-6 py-3 rounded-lg transition-colors"
        >
          Retry
        </button>
      )}
    </div>
  </div>
);

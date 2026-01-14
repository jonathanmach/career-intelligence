import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DarkModeToggle } from './DarkModeToggle';

export const HomePage: React.FC = () => {
  const [repoInput, setRepoInput] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (repoInput.trim()) {
      // Navigate to the CV viewer with the repo URL
      navigate(`/cv/${encodeURIComponent(repoInput.trim())}`);
    }
  };

  const handleExample = (repo: string) => {
    navigate(`/cv/${encodeURIComponent(repo)}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4 transition-colors">
      {/* Dark Mode Toggle - Fixed Position */}
      <div className="fixed top-4 right-4 z-50">
        <DarkModeToggle />
      </div>

      <div className="max-w-2xl w-full">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 transition-colors">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              CV Intelligence
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Transform your GitHub YAML CV into a beautiful, printable resume
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mb-8">
            <div className="mb-4">
              <label htmlFor="repo" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                Enter GitHub Repository
              </label>
              <input
                type="text"
                id="repo"
                value={repoInput}
                onChange={(e) => setRepoInput(e.target.value)}
                placeholder="username/repo or https://github.com/username/repo"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent outline-none transition"
              />
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Your repository should contain a <code className="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded">cv.yaml</code> file
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors shadow-md hover:shadow-lg"
            >
              Generate CV
            </button>
          </form>

          {/* Supported Formats */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-3">Supported Formats:</h3>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-green-500 dark:text-green-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <code className="bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded">username/repo</code>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-green-500 dark:text-green-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <code className="bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded">https://github.com/username/repo</code>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-green-500 dark:text-green-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <code className="bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded">github.com/username/repo/blob/main/cv.yaml</code>
              </div>
            </div>
          </div>

          {/* Examples */}
          <div className="border-t dark:border-gray-700 pt-6">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-3">Try an Example:</h3>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => handleExample('jonathanmach/cv')}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-lg text-sm font-medium transition-colors"
              >
                jonathanmach/cv
              </button>
            </div>
          </div>

          {/* Features */}
          <div className="mt-8 pt-6 border-t dark:border-gray-700">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-4">Features:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2 flex-shrink-0 mt-0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z"></path>
                </svg>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white text-sm">Multiple Templates</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Choose from various professional designs</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2 flex-shrink-0 mt-0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path>
                </svg>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white text-sm">Print to PDF</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Export your CV as a PDF file</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2 flex-shrink-0 mt-0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
                </svg>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white text-sm">Dark Mode</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Toggle between light and dark themes</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2 flex-shrink-0 mt-0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white text-sm">Fast & Modern</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Built with React, TypeScript & Vite</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center mt-6 text-sm text-gray-600 dark:text-gray-400">
          Based on the{' '}
          <a
            href="https://jsonresume.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            JSON Resume
          </a>{' '}
          schema
        </p>
      </div>
    </div>
  );
};

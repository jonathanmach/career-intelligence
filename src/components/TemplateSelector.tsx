import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TemplateRegistry } from '../templates';
import { DarkModeToggle } from './DarkModeToggle';

interface TemplateSelectorProps {
  selectedTemplateId: string;
  onTemplateChange: (templateId: string) => void;
  isEditMode?: boolean;
  onToggleEdit?: () => void;
  showIndustryScore?: boolean;
  onToggleIndustryScore?: () => void;
}

export const TemplateSelector: React.FC<TemplateSelectorProps> = ({
  selectedTemplateId,
  onTemplateChange,
  isEditMode = false,
  onToggleEdit,
  showIndustryScore = false,
  onToggleIndustryScore,
}) => {
  const templates = TemplateRegistry.getAll();
  const navigate = useNavigate();

  return (
    <div className="mb-6 print:hidden bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 border border-gray-200 dark:border-gray-700 transition-colors">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center flex-wrap gap-3">
          {/* Back Button */}
          <button
            onClick={() => navigate('/')}
            className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            title="Back to Home"
          >
            <svg
              className="w-5 h-5 mr-1"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            Home
          </button>

          {/* Template Selector - Only show when not in edit mode */}
          {!isEditMode && (
            <div className="flex items-center">
              <svg
                className="w-5 h-5 text-gray-600 dark:text-gray-300 mr-2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z"></path>
              </svg>
              <label htmlFor="template-select" className="font-medium text-gray-700 dark:text-gray-200 mr-3">
                Template:
              </label>
              <select
                id="template-select"
                value={selectedTemplateId}
                onChange={(e) => onTemplateChange(e.target.value)}
                className="border border-gray-300 dark:border-gray-600 rounded-md px-4 py-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent cursor-pointer"
              >
                {templates.map((template) => (
                  <option key={template.id} value={template.id}>
                    {template.name} - {template.description}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        {/* Right side buttons */}
        <div className="flex items-center gap-2">
          {/* Edit Mode Toggle */}
          {onToggleEdit && (
            <button
              onClick={onToggleEdit}
              className={`flex items-center font-medium px-4 py-2 rounded-md transition-colors whitespace-nowrap ${
                isEditMode
                  ? 'bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white'
                  : 'bg-gray-600 hover:bg-gray-700 dark:bg-gray-500 dark:hover:bg-gray-600 text-white'
              }`}
              title={isEditMode ? 'Exit Edit Mode' : 'Edit YAML'}
            >
              {isEditMode ? (
                <>
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                  </svg>
                  View Mode
                </>
              ) : (
                <>
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                  </svg>
                  Edit YAML
                </>
              )}
            </button>
          )}

          {onToggleIndustryScore && (
            <button
              onClick={onToggleIndustryScore}
              className={`flex items-center font-medium px-4 py-2 rounded-md transition-colors whitespace-nowrap ${
                showIndustryScore
                  ? 'bg-slate-900 text-white hover:bg-slate-800'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600'
              }`}
              title="Toggle industry score"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M3 3v18h18"></path>
                <path d="M7 13l4-4 4 4 5-6"></path>
              </svg>
              Industry Score
            </button>
          )}

          {/* Dark Mode Toggle */}
          <DarkModeToggle />

          {/* Print Button - Only show when not in edit mode */}
          {!isEditMode && (
            <button
              onClick={() => window.print()}
              className="flex items-center bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-md transition-colors whitespace-nowrap"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path>
              </svg>
              Print / Save PDF
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

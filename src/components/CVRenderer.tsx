import React, { useEffect, useState, useCallback } from 'react';
import type { CVData } from '../types/cv.types';
import { fetchCVDataWithYAML, parseYAML } from '../services/cvService';
import { TemplateRegistry } from '../templates';
import { TemplateSelector } from './TemplateSelector';
import { LoadingSpinner } from './LoadingSpinner';
import { ErrorDisplay } from './ErrorDisplay';
import { YAMLEditor } from './YAMLEditor';
import { IndustryScorePanel } from './IndustryScorePanel';

interface CVRendererProps {
  repoUrl?: string;
}

export const CVRenderer: React.FC<CVRendererProps> = ({ repoUrl }) => {
  const [cvData, setCvData] = useState<CVData | null>(null);
  const [yamlContent, setYamlContent] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [yamlError, setYamlError] = useState<string | null>(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [showIndustryScore, setShowIndustryScore] = useState(false);
  const defaultTemplate = TemplateRegistry.getDefault();
  const [selectedTemplateId, setSelectedTemplateId] = useState(
    defaultTemplate?.id || 'classic'
  );

  const loadCV = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await fetchCVDataWithYAML(repoUrl);
      setCvData(result.data);
      setYamlContent(result.yaml);
      setYamlError(null);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCV();
  }, [repoUrl]);

  const handleYAMLChange = useCallback((newYaml: string) => {
    setYamlContent(newYaml);

    // Try to parse the YAML in real-time
    try {
      const parsed = parseYAML(newYaml);
      setCvData(parsed);
      setYamlError(null);
    } catch (err) {
      // Set error but don't update cvData (keep showing last valid version)
      setYamlError((err as Error).message);
    }
  }, []);

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorDisplay error={error} onRetry={loadCV} />;
  if (!cvData) return null;

  const template = TemplateRegistry.get(selectedTemplateId);
  if (!template) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-red-600 text-xl">Template not found: {selectedTemplateId}</div>
      </div>
    );
  }

  const TemplateComponent = template.component;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 print:bg-white transition-colors">
      <div className="container mx-auto py-8 print:py-0">
        <TemplateSelector
          selectedTemplateId={selectedTemplateId}
          onTemplateChange={setSelectedTemplateId}
          isEditMode={isEditMode}
          onToggleEdit={toggleEditMode}
          showIndustryScore={showIndustryScore}
          onToggleIndustryScore={() => setShowIndustryScore((prev) => !prev)}
        />

        {isEditMode ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Editor Panel */}
            <div className="flex flex-col">
              <div className="mb-4">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Edit YAML
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Make changes to your CV. The preview updates in real-time.
                </p>
              </div>
              <div className="flex-1" style={{ minHeight: '600px' }}>
                <YAMLEditor
                  value={yamlContent}
                  onChange={handleYAMLChange}
                  error={yamlError}
                />
              </div>
            </div>

            {/* Preview Panel */}
            <div className="flex flex-col">
              <div className="mb-4">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Live Preview
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Preview of your CV as you edit
                </p>
              </div>
              <div className="flex-1 overflow-auto" style={{ maxHeight: '80vh' }}>
                <div className="scale-75 origin-top-left" style={{ width: '133.33%' }}>
                  <TemplateComponent data={cvData} />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className={showIndustryScore ? 'grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_500px] gap-6 items-start' : ''}>
            <div>
              <TemplateComponent data={cvData} />
            </div>
            {showIndustryScore && (
              <aside className="print:hidden bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700 transition-colors lg:sticky lg:top-8">
                <IndustryScorePanel />
              </aside>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

import yaml from 'js-yaml';
import type { CVData } from '../types/cv.types';
import { githubUrlToRaw } from '../utils/githubUrl';

const DEFAULT_GITHUB_RAW_URL = 'https://raw.githubusercontent.com/jonathanmach/cv/main/cv.yaml';

export interface CVDataWithYAML {
  data: CVData;
  yaml: string;
}

/**
 * Fetches CV data from a GitHub repository
 * @param repoUrl Optional GitHub repository URL or username/repo format. If not provided, uses default.
 * @returns Parsed CV data
 */
export async function fetchCVData(repoUrl?: string): Promise<CVData> {
  const result = await fetchCVDataWithYAML(repoUrl);
  return result.data;
}

/**
 * Fetches CV data and raw YAML from a GitHub repository
 * @param repoUrl Optional GitHub repository URL or username/repo format. If not provided, uses default.
 * @returns Parsed CV data and raw YAML
 */
export async function fetchCVDataWithYAML(repoUrl?: string): Promise<CVDataWithYAML> {
  try {
    let rawUrl: string;

    if (repoUrl) {
      // Convert various GitHub URL formats to raw content URL
      rawUrl = githubUrlToRaw(repoUrl);
    } else {
      // Use default URL
      rawUrl = DEFAULT_GITHUB_RAW_URL;
    }

    const response = await fetch(rawUrl, { cache: 'no-store' });

    if (!response.ok) {
      throw new Error(`Failed to fetch CV: ${response.statusText} (${rawUrl})`);
    }

    const yamlText = await response.text();
    const data = yaml.load(yamlText) as CVData;

    return { data, yaml: yamlText };
  } catch (error) {
    console.error('Error fetching CV data:', error);
    throw error;
  }
}

/**
 * Parses YAML content into CV data
 * @param yamlContent YAML string to parse
 * @returns Parsed CV data
 */
export function parseYAML(yamlContent: string): CVData {
  return yaml.load(yamlContent) as CVData;
}

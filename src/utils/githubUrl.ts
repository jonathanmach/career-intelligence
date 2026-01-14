/**
 * Converts various GitHub URL formats to raw content URL
 * Supports:
 * - username/repo -> https://raw.githubusercontent.com/username/repo/main/cv.yaml
 * - https://github.com/username/repo -> https://raw.githubusercontent.com/username/repo/main/cv.yaml
 * - github.com/username/repo -> https://raw.githubusercontent.com/username/repo/main/cv.yaml
 * - https://github.com/username/repo/blob/main/cv.yaml -> https://raw.githubusercontent.com/username/repo/main/cv.yaml
 */
export function githubUrlToRaw(input: string, branch: string = 'main', filePath: string = 'cv.yaml'): string {
  // Remove trailing slashes
  input = input.trim().replace(/\/+$/, '');

  // If it's already a raw.githubusercontent.com URL, return as-is
  if (input.includes('raw.githubusercontent.com')) {
    return input;
  }

  // Extract username and repo from various formats
  let username: string;
  let repo: string;
  let detectedBranch: string = branch;
  let detectedFilePath: string = filePath;

  // Format: username/repo or username/repo/blob/branch/file
  if (!input.startsWith('http://') && !input.startsWith('https://')) {
    const parts = input.split('/');

    if (parts.length >= 2) {
      username = parts[0];
      repo = parts[1];

      // Check if they provided blob/branch/file
      if (parts.length >= 5 && parts[2] === 'blob') {
        detectedBranch = parts[3];
        detectedFilePath = parts.slice(4).join('/');
      }
    } else {
      throw new Error('Invalid GitHub repository format. Expected: username/repo');
    }
  } else {
    // Format: https://github.com/username/repo or http://github.com/username/repo
    // Or: https://github.com/username/repo/blob/main/cv.yaml
    try {
      const url = new URL(input);
      const pathname = url.pathname;
      const parts = pathname.split('/').filter(p => p);

      if (parts.length >= 2) {
        username = parts[0];
        repo = parts[1];

        // Check if they provided blob/branch/file
        if (parts.length >= 4 && parts[2] === 'blob') {
          detectedBranch = parts[3];
          if (parts.length > 4) {
            detectedFilePath = parts.slice(4).join('/');
          }
        } else if (parts.length >= 4 && parts[2] === 'tree') {
          // Handle tree URLs (folder view)
          detectedBranch = parts[3];
        }
      } else {
        throw new Error('Invalid GitHub URL format');
      }
    } catch (error) {
      throw new Error('Invalid URL format');
    }
  }

  // Construct the raw content URL
  return `https://raw.githubusercontent.com/${username}/${repo}/${detectedBranch}/${detectedFilePath}`;
}

/**
 * Parses a GitHub repository identifier and returns structured info
 */
export interface RepoInfo {
  username: string;
  repo: string;
  branch: string;
  filePath: string;
  rawUrl: string;
}

export function parseGithubUrl(input: string, defaultBranch: string = 'main', defaultFilePath: string = 'cv.yaml'): RepoInfo {
  const rawUrl = githubUrlToRaw(input, defaultBranch, defaultFilePath);

  // Extract parts from the raw URL
  const match = rawUrl.match(/raw\.githubusercontent\.com\/([^\/]+)\/([^\/]+)\/([^\/]+)\/(.+)/);

  if (!match) {
    throw new Error('Failed to parse GitHub URL');
  }

  return {
    username: match[1],
    repo: match[2],
    branch: match[3],
    filePath: match[4],
    rawUrl,
  };
}

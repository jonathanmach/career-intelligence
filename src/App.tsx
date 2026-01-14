import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { CVRenderer } from './components/CVRenderer';
import './templates'; // Import to trigger template registration

// Wrapper component to extract URL params and pass to CVRenderer
function CVViewerRoute() {
  const params = useParams();

  // Capture everything after /cv/ including slashes
  // This supports patterns like:
  // - /cv/username/repo
  // - /cv/https://github.com/username/repo
  // - /cv/github.com/username/repo/blob/main/cv.yaml
  const repoPath = params['*'];

  // Decode the URL-encoded repo path
  const decodedRepoPath = repoPath ? decodeURIComponent(repoPath) : undefined;

  return <CVRenderer repoUrl={decodedRepoPath} />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cv/*" element={<CVViewerRoute />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

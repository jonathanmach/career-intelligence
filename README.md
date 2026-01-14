# CV Intelligence

Transform your GitHub YAML CV into a beautiful, printable resume with multiple professional templates.

## Features

- 🎨 **Multiple Templates**: Choose from various professional CV designs
- 🔗 **Dynamic Repository Loading**: View any GitHub CV by URL
- 📄 **Print to PDF**: Export your CV as a PDF file
- ⚡ **Fast & Modern**: Built with Vite, React, and TypeScript
- 🎯 **Extensible Architecture**: Easy to add new templates

## Getting Started

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

The app will be available at http://localhost:5173/

## Usage

### Home Page

Visit the home page to enter a GitHub repository URL containing your CV.

### Supported URL Formats

You can use any of these formats to load a CV:

1. **Username/Repo**: `jonathanmach/cv`
2. **Full GitHub URL**: `https://github.com/jonathanmach/cv`
3. **GitHub.com URL**: `github.com/jonathanmach/cv`
4. **Direct blob URL**: `https://github.com/jonathanmach/cv/blob/main/cv.yaml`

### Direct URL Access

You can also directly navigate to a CV by URL:

- `http://localhost:5173/cv/jonathanmach/cv`
- `http://localhost:5173/cv/https://github.com/jonathanmach/cv`
- `http://localhost:5173/cv/github.com/jonathanmach/cv`

The app automatically converts these URLs to the GitHub raw content URL format.

### CV Format

Your repository should contain a `cv.yaml` file following the [JSON Resume](https://jsonresume.org/) schema.

Example structure:
```yaml
basics:
  name: "John Doe"
  label: "Software Engineer"
  email: "john@example.com"
  # ... more fields

work:
  - name: "Company Name"
    position: "Software Engineer"
    startDate: "2020-01"
    endDate: "2023-12"
    summary: "Description of role"
    highlights:
      - "Achievement 1"
      - "Achievement 2"

education:
  - institution: "University Name"
    area: "Computer Science"
    studyType: "Bachelor"
    startDate: "2016-09"
    endDate: "2020-06"

# ... more sections
```

## Templates

### Built-in Templates

1. **Classic**: Traditional single-column layout with clear sections
2. **Modern**: Contemporary two-column design with colored sidebar

### Adding New Templates

The app uses a Template Registry Pattern that makes adding templates simple:

1. Create a new file in `src/templates/` (e.g., `MinimalTemplate.tsx`)

```typescript
import React from 'react';
import type { CVTemplateProps } from './TemplateRegistry';
import { registerTemplate } from './TemplateRegistry';

const MinimalTemplate: React.FC<CVTemplateProps> = ({ data }) => {
  return (
    <div className="max-w-4xl mx-auto p-8">
      {/* Your custom layout */}
      <h1>{data.basics.name}</h1>
      {/* ... more content */}
    </div>
  );
};

// Register the template
registerTemplate({
  id: 'minimal',
  name: 'Minimal',
  description: 'Clean and minimal design',
  component: MinimalTemplate,
});

export default MinimalTemplate;
```

2. Import it in `src/templates/index.ts`:

```typescript
import './MinimalTemplate';
```

That's it! The new template will automatically appear in the template selector.

## Architecture

### Key Components

- **HomePage**: Landing page with repository input
- **CVRenderer**: Main component that fetches and renders CV data
- **TemplateSelector**: UI for switching templates and printing
- **TemplateRegistry**: Core system for managing templates

### Utilities

- **githubUrl.ts**: Converts various GitHub URL formats to raw content URLs
- **cvService.ts**: Handles fetching and parsing YAML data

### Template System

The Template Registry Pattern enables:
- Zero configuration for new templates
- Type-safe template components
- Hot module reloading in development
- No central configuration file to maintain

## Tech Stack

- **React 18**: UI framework
- **TypeScript**: Type safety
- **Vite**: Build tool and dev server
- **Tailwind CSS**: Utility-first styling
- **React Router**: Client-side routing
- **js-yaml**: YAML parsing

## Print Styling

The app includes optimized print styles in `src/styles/print.css`:

- A4 page size with proper margins
- Hidden interactive elements (buttons, selectors)
- Print-friendly colors and typography
- Prevented page breaks in unwanted places

To print:
1. Click the "Print / Save PDF" button
2. Or press Ctrl+P (Cmd+P on Mac)
3. Choose "Save as PDF" in the print dialog

## Project Structure

```
cv-intelligence/
├── src/
│   ├── components/
│   │   ├── CVRenderer.tsx       # Main CV renderer
│   │   ├── HomePage.tsx         # Landing page
│   │   ├── TemplateSelector.tsx # Template switcher
│   │   ├── LoadingSpinner.tsx   # Loading state
│   │   └── ErrorDisplay.tsx     # Error handling
│   ├── templates/
│   │   ├── TemplateRegistry.ts  # Template system core
│   │   ├── ClassicTemplate.tsx  # Classic template
│   │   ├── ModernTemplate.tsx   # Modern template
│   │   └── index.ts             # Template exports
│   ├── services/
│   │   └── cvService.ts         # Data fetching
│   ├── types/
│   │   └── cv.types.ts          # TypeScript interfaces
│   ├── utils/
│   │   └── githubUrl.ts         # URL parsing utilities
│   ├── styles/
│   │   ├── index.css            # Global styles
│   │   └── print.css            # Print-specific styles
│   ├── App.tsx                  # Main app with routing
│   └── main.tsx                 # Entry point
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── package.json
```

## Contributing

To add a new feature or template:

1. Create your changes following the existing patterns
2. Test with `npm run dev`
3. Build with `npm run build` to verify TypeScript compliance
4. Ensure print functionality works correctly

## License

MIT

## Credits

Based on the [JSON Resume](https://jsonresume.org/) schema.

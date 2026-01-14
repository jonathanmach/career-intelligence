import React from 'react';
import type { CVData } from '../types/cv.types';

export interface CVTemplateProps {
  data: CVData;
}

export interface CVTemplate {
  id: string;
  name: string;
  description: string;
  component: React.ComponentType<CVTemplateProps>;
}

class TemplateRegistryClass {
  private templates = new Map<string, CVTemplate>();
  private defaultTemplateId = 'classic';

  register(template: CVTemplate): void {
    this.templates.set(template.id, template);
  }

  get(id: string): CVTemplate | undefined {
    return this.templates.get(id);
  }

  getAll(): CVTemplate[] {
    return Array.from(this.templates.values());
  }

  getDefault(): CVTemplate | undefined {
    const defaultTemplate = this.templates.get(this.defaultTemplateId);
    if (defaultTemplate) return defaultTemplate;
    return this.templates.values().next().value;
  }

  setDefault(id: string): void {
    if (this.templates.has(id)) {
      this.defaultTemplateId = id;
    }
  }
}

export const TemplateRegistry = new TemplateRegistryClass();

export function registerTemplate(template: CVTemplate): void {
  TemplateRegistry.register(template);
}

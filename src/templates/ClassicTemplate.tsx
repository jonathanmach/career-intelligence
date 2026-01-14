import React from 'react';
import type { CVTemplateProps } from './TemplateRegistry';
import { registerTemplate } from './TemplateRegistry';

const ClassicTemplate: React.FC<CVTemplateProps> = ({ data }) => {
  return (
    <div className="max-w-4xl mx-auto p-12 bg-white print:p-8 shadow-xl rounded-lg">
      {/* Header Section */}
      <header className="text-center mb-10 pb-8 border-b-2 border-gray-800">
        <h1 className="text-5xl font-bold text-gray-900 mb-3 tracking-tight">
          {data.basics.name}
        </h1>
        {data.basics.label && (
          <p className="text-2xl text-gray-600 font-light mb-6">{data.basics.label}</p>
        )}

        {/* Contact Information */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-700">
          {data.basics.email && (
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span>{data.basics.email}</span>
            </div>
          )}
          {data.basics.phone && (
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>{data.basics.phone}</span>
            </div>
          )}
          {data.basics.location && (
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span>
                {data.basics.location.city}
                {data.basics.location.region && `, ${data.basics.location.region}`}
                {data.basics.location.countryCode && ` (${data.basics.location.countryCode})`}
              </span>
            </div>
          )}
          {data.basics.url && (
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
              </svg>
              <a href={data.basics.url} className="text-blue-600 hover:underline">
                {data.basics.url.replace(/^https?:\/\//, '')}
              </a>
            </div>
          )}
        </div>

        {/* Social Profiles */}
        {data.basics.profiles && data.basics.profiles.length > 0 && (
          <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm">
            {data.basics.profiles.map((profile, index) => (
              <a
                key={index}
                href={profile.url}
                className="text-blue-600 hover:underline font-medium"
              >
                {profile.network}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Summary */}
      {data.basics.summary && (
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-300">
            Professional Summary
          </h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            {data.basics.summary}
          </p>
        </section>
      )}

      {/* Work Experience */}
      {data.work && data.work.length > 0 && (
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-300">
            Work Experience
          </h2>
          <div className="space-y-6">
            {data.work.map((job, index) => (
              <div key={index} className="relative pl-4 border-l-2 border-gray-300">
                <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{job.position}</h3>
                    <p className="text-gray-700 font-medium">{job.name}</p>
                  </div>
                  <div className="text-right text-sm">
                    <p className="text-gray-600 font-medium">
                      {job.startDate} - {job.endDate || 'Present'}
                    </p>
                    {job.location && (
                      <p className="text-gray-500">{job.location}</p>
                    )}
                  </div>
                </div>
                {job.summary && (
                  <p className="text-gray-700 leading-relaxed mb-3">{job.summary}</p>
                )}
                {job.highlights && job.highlights.length > 0 && (
                  <ul className="space-y-1.5">
                    {job.highlights.map((highlight, i) => (
                      <li key={i} className="text-gray-700 flex items-start">
                        <span className="text-blue-600 mr-2 mt-1.5 flex-shrink-0">•</span>
                        <span className="leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {data.education && data.education.length > 0 && (
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-300">
            Education
          </h2>
          <div className="space-y-5">
            {data.education.map((edu, index) => (
              <div key={index} className="relative pl-4 border-l-2 border-gray-300">
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{edu.institution}</h3>
                    <p className="text-gray-700">
                      {edu.studyType} in {edu.area}
                      {edu.score && ` • GPA: ${edu.score}`}
                    </p>
                  </div>
                  <p className="text-gray-600 text-sm font-medium">
                    {edu.startDate} - {edu.endDate}
                  </p>
                </div>
                {edu.courses && edu.courses.length > 0 && (
                  <p className="mt-2 text-gray-600 text-sm">
                    <span className="font-semibold">Relevant Coursework:</span> {edu.courses.join(', ')}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills */}
      {data.skills && data.skills.length > 0 && (
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-300">
            Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.skills.map((skill, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-gray-900">{skill.name}</span>
                  {skill.level && (
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded font-medium">
                      {skill.level}
                    </span>
                  )}
                </div>
                {skill.keywords && skill.keywords.length > 0 && (
                  <p className="text-gray-600 text-sm">
                    {skill.keywords.join(' • ')}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Certificates */}
      {data.certificates && data.certificates.length > 0 && (
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-300">
            Certifications
          </h2>
          <div className="space-y-3">
            {data.certificates.map((cert, index) => (
              <div key={index} className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900">{cert.name}</h3>
                  <p className="text-gray-600 text-sm">{cert.issuer}</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-600 text-sm">{cert.date}</p>
                  {cert.url && (
                    <a
                      href={cert.url}
                      className="text-blue-600 hover:underline text-xs"
                    >
                      View Certificate
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {data.projects && data.projects.length > 0 && (
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-300">
            Projects
          </h2>
          <div className="space-y-5">
            {data.projects.map((project, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.name}</h3>
                {project.description && (
                  <p className="text-gray-700 leading-relaxed mb-2">{project.description}</p>
                )}
                {project.highlights && project.highlights.length > 0 && (
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="text-gray-700 flex items-start text-sm">
                        <span className="text-blue-600 mr-2 mt-1 flex-shrink-0">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Languages */}
      {data.languages && data.languages.length > 0 && (
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-300">
            Languages
          </h2>
          <div className="flex flex-wrap gap-4">
            {data.languages.map((lang, index) => (
              <div key={index} className="bg-gray-50 rounded-lg px-4 py-2">
                <span className="font-semibold text-gray-900">{lang.language}</span>
                <span className="text-gray-600 text-sm ml-2">• {lang.fluency}</span>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

// Register this template
registerTemplate({
  id: 'classic',
  name: 'Classic',
  description: 'Traditional CV layout with clear sections and professional styling',
  component: ClassicTemplate,
});

export default ClassicTemplate;

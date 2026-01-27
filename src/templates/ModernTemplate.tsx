import React from 'react';
import type { CVTemplateProps } from './TemplateRegistry';
import { registerTemplate } from './TemplateRegistry';

const ModernTemplate: React.FC<CVTemplateProps> = ({ data }) => {
  return (
    <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden print:shadow-none print:w-full print:max-w-none print:mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 print:grid-cols-3 gap-0">
        {/* Left Sidebar - 1/3 width */}
        <div className="lg:col-span-1 print:col-span-1 bg-gradient-to-b from-slate-800 to-slate-900 text-white p-8 print:p-[1.5cm] print:from-slate-800 print:to-slate-900">
          {/* Profile Image Placeholder */}
          {data.basics.image && (
            <div className="mb-8">
              <img
                src={data.basics.image}
                alt={data.basics.name}
                className="w-40 h-40 rounded-full mx-auto object-cover border-4 border-white shadow-lg"
              />
            </div>
          )}

          {/* Contact Information */}
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-slate-600 uppercase tracking-wide">
              Contact
            </h2>
            <div className="space-y-3 text-sm">
              {data.basics.email && (
                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span className="break-words">{data.basics.email}</span>
                </div>
              )}
              {data.basics.phone && (
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span>{data.basics.phone}</span>
                </div>
              )}
              {data.basics.location && (
                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span>
                    {[data.basics.location.city, data.basics.location.region, data.basics.location.countryCode].filter(Boolean).join(', ')}
                  </span>
                </div>
              )}
              {data.basics.url && (
                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                  </svg>
                  <a href={data.basics.url} className="hover:text-slate-300 break-words">
                    {data.basics.url.replace(/^https?:\/\//, '')}
                  </a>
                </div>
              )}
            </div>
          </section>

          {/* Social Profiles */}
          {data.basics.profiles && data.basics.profiles.length > 0 && (
            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-slate-600 uppercase tracking-wide">
                Links
              </h2>
              <div className="space-y-3 text-sm">
                {data.basics.profiles.map((profile, index) => (
                  <a
                    key={index}
                    href={profile.url}
                    className="block hover:text-slate-300 transition-colors"
                  >
                    <div className="font-semibold">{profile.network}</div>
                    <div className="text-xs text-slate-300">{profile.username}</div>
                  </a>
                ))}
              </div>
            </section>
          )}

          {/* Skills */}
          {data.skills && data.skills.length > 0 && (
            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-slate-600 uppercase tracking-wide">
                Skills
              </h2>
              <div className="space-y-4">
                {data.skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-sm">{skill.name}</span>
                      {skill.level && (
                        <span className="text-xs bg-slate-700 px-2 py-0.5 rounded">
                          {skill.level}
                        </span>
                      )}
                    </div>
                    {skill.keywords && skill.keywords.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
                        {skill.keywords.map((keyword, i) => (
                          <span key={i} className="text-xs bg-slate-700/50 px-2 py-0.5 rounded text-slate-200">
                            {keyword}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Languages */}
          {data.languages && data.languages.length > 0 && (
            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-slate-600 uppercase tracking-wide">
                Languages
              </h2>
              <div className="space-y-2">
                {data.languages.map((lang, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="font-semibold text-sm">{lang.language}</span>
                    <span className="text-xs text-slate-300">{lang.fluency}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Certificates */}
          {data.certificates && data.certificates.length > 0 && (
            <section className="mb-6">
              <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-slate-600 uppercase tracking-wide">
                Certifications
              </h2>
              <div className="space-y-4 text-sm">
                {data.certificates.map((cert, index) => (
                  <div key={index}>
                    <div className="font-semibold">{cert.name}</div>
                    <div className="text-slate-300 text-xs mt-1">{cert.issuer}</div>
                    <div className="text-slate-400 text-xs">{cert.date}</div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Main Content - 2/3 width */}
        <div className="lg:col-span-2 print:col-span-2 p-10 print:p-[1.5cm]">
          {/* Name and Title */}
          <header className="mb-10">
            <h1 className="text-5xl font-bold text-gray-900 mb-3 tracking-tight">
              {data.basics.name}
            </h1>
            {data.basics.label && (
              <p className="text-3xl text-slate-600 font-light mb-6">
                {data.basics.label}
              </p>
            )}
            {data.basics.summary && (
              <div className="mt-6 pl-4 border-l-4 border-slate-800">
                <p className="text-gray-700 leading-relaxed">
                  {data.basics.summary}
                </p>
              </div>
            )}
          </header>

          {/* Work Experience */}
          {data.work && data.work.length > 0 && (
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-slate-800 uppercase tracking-wide">
                Work Experience
              </h2>
              <div className="space-y-8">
                {data.work.map((job, index) => (
                  <div key={index} className="relative">
                    <div className="flex justify-between items-start flex-wrap gap-2 mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{job.position}</h3>
                        <p className="text-slate-700 font-semibold text-lg">{job.name}</p>
                        {job.location && (
                          <p className="text-gray-600 text-sm">{job.location}</p>
                        )}
                      </div>
                      <div className="text-right">
                        <p className="text-slate-700 font-semibold">
                          {job.startDate} - {job.endDate || 'Present'}
                        </p>
                      </div>
                    </div>
                    {job.summary && (
                      <p className="text-gray-700 mb-3 leading-relaxed">{job.summary}</p>
                    )}
                    {job.highlights && job.highlights.length > 0 && (
                      <ul className="space-y-1">
                        {job.highlights.map((highlight, i) => (
                          <li key={i} className="text-gray-700 flex items-start">
                            <span className="text-slate-800 mr-3 mt-1.5 flex-shrink-0 font-bold">▸</span>
                            <span className="leading-snug">{highlight}</span>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-slate-800 uppercase tracking-wide">
                Education
              </h2>
              <div className="space-y-6">
                {data.education.map((edu, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-start flex-wrap gap-2">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{edu.institution}</h3>
                        <p className="text-slate-700 font-semibold">
                          {edu.studyType} in {edu.area}
                        </p>
                        {edu.score && (
                          <p className="text-gray-600 text-sm">GPA: {edu.score}</p>
                        )}
                      </div>
                      <p className="text-slate-700 font-semibold">
                        {edu.startDate} - {edu.endDate}
                      </p>
                    </div>
                    {edu.courses && edu.courses.length > 0 && (
                      <div className="mt-3">
                        <p className="text-gray-600 text-sm">
                          <span className="font-semibold">Relevant Coursework:</span> {edu.courses.join(', ')}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Projects */}
          {data.projects && data.projects.length > 0 && (
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-slate-800 uppercase tracking-wide">
                Projects
              </h2>
              <div className="space-y-6">
                {data.projects.map((project, index) => (
                  <div key={index}>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{project.name}</h3>
                    {project.description && (
                      <p className="text-gray-700 leading-relaxed mb-3">{project.description}</p>
                    )}
                    {project.highlights && project.highlights.length > 0 && (
                      <ul className="space-y-0.5">
                        {project.highlights.map((highlight, i) => (
                          <li key={i} className="text-gray-700 flex items-start text-sm">
                            <span className="text-slate-800 mr-2 mt-1 flex-shrink-0 font-bold">▸</span>
                            <span className="leading-snug">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

// Register this template
registerTemplate({
  id: 'modern',
  name: 'Modern',
  description: 'Two-column layout with colored sidebar and contemporary design',
  component: ModernTemplate,
});

export default ModernTemplate;

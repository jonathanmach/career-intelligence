import React, { useMemo, useRef, useState } from 'react';

interface IndustryScorePanelProps {
  className?: string;
}

export const IndustryScorePanel: React.FC<IndustryScorePanelProps> = ({ className = '' }) => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const hoverTimeoutRef = useRef<number | null>(null);

  const openHover = (skill: string) => {
    if (hoverTimeoutRef.current) {
      window.clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setHoveredSkill(skill);
  };

  const closeHover = (skill: string) => {
    if (hoverTimeoutRef.current) {
      window.clearTimeout(hoverTimeoutRef.current);
    }
    hoverTimeoutRef.current = window.setTimeout(() => {
      setHoveredSkill((current) => (current === skill ? null : current));
      hoverTimeoutRef.current = null;
    }, 160);
  };

  const roleDetails = useMemo(
    () => ({
      Kafka: [
        {
          title: 'ML Platform Engineer',
          company: 'Northwind AI',
          location: 'Remote',
          link: '#',
          snippet: 'Build streaming data pipelines and event-driven model serving.',
        },
        {
          title: 'Data Infrastructure Engineer',
          company: 'Helios Cloud',
          location: 'NYC',
          link: '#',
          snippet: 'Own Kafka clusters, scaling, and reliability for analytics.',
        },
        {
          title: 'Applied AI Engineer',
          company: 'Mosaic Labs',
          location: 'SF',
          link: '#',
          snippet: 'Integrate Kafka for real-time ML feature ingestion.',
        },
        {
          title: 'Backend Engineer',
          company: 'SignalWorks',
          location: 'Austin',
          link: '#',
          snippet: 'Design high-throughput event systems and observability.',
        },
        {
          title: 'Data Platform Engineer',
          company: 'Aperture',
          location: 'Remote',
          link: '#',
          snippet: 'Manage Kafka and data lake connectors for ML pipelines.',
        },
        {
          title: 'Systems Engineer',
          company: 'Atlas',
          location: 'Chicago',
          link: '#',
          snippet: 'Optimize Kafka throughput and storage retention.',
        },
      ],
      'Feature Stores': [
        {
          title: 'ML Platform Engineer',
          company: 'Northwind AI',
          location: 'Remote',
          link: '#',
          snippet: 'Implement feature store pipelines and governance.',
        },
        {
          title: 'Data Scientist',
          company: 'Cerebra',
          location: 'Seattle',
          link: '#',
          snippet: 'Leverage feature stores for model consistency.',
        },
        {
          title: 'Applied ML Engineer',
          company: 'Quanta',
          location: 'SF',
          link: '#',
          snippet: 'Ship features to online/offline feature stores.',
        },
        {
          title: 'Data Platform Engineer',
          company: 'Aperture',
          location: 'Remote',
          link: '#',
          snippet: 'Own Feast and feature lineage integrations.',
        },
        {
          title: 'ML Infrastructure Engineer',
          company: 'Vector',
          location: 'NYC',
          link: '#',
          snippet: 'Build feature pipelines and monitoring.',
        },
        {
          title: 'Analytics Engineer',
          company: 'Oasis',
          location: 'Denver',
          link: '#',
          snippet: 'Publish curated features with DBT + Feast.',
        },
      ],
      'Prompt Evaluation': [
        {
          title: 'AI Product Engineer',
          company: 'Mosaic Labs',
          location: 'SF',
          link: '#',
          snippet: 'Run prompt evals and guardrail testing for LLM apps.',
        },
        {
          title: 'LLM Engineer',
          company: 'Helios Cloud',
          location: 'Remote',
          link: '#',
          snippet: 'Build eval harnesses for prompt, model, and data drift.',
        },
        {
          title: 'Applied AI Engineer',
          company: 'SignalWorks',
          location: 'Austin',
          link: '#',
          snippet: 'Design eval suites for quality and safety.',
        },
        {
          title: 'Product ML Engineer',
          company: 'Cerebra',
          location: 'Seattle',
          link: '#',
          snippet: 'Establish prompt benchmarks for user-facing AI.',
        },
        {
          title: 'AI Research Engineer',
          company: 'Quanta',
          location: 'NYC',
          link: '#',
          snippet: 'Automate evals for retrieval and reasoning.',
        },
        {
          title: 'AI QA Engineer',
          company: 'Atlas',
          location: 'Remote',
          link: '#',
          snippet: 'Create prompt evaluation pipelines and scorecards.',
        },
      ],
      Terraform: [
        {
          title: 'Platform Engineer',
          company: 'Atlas',
          location: 'Chicago',
          link: '#',
          snippet: 'Codify cloud infra with Terraform and GitOps workflows.',
        },
        {
          title: 'Site Reliability Engineer',
          company: 'Helios Cloud',
          location: 'Remote',
          link: '#',
          snippet: 'Manage Terraform modules and infra automation.',
        },
        {
          title: 'Cloud Engineer',
          company: 'Aperture',
          location: 'SF',
          link: '#',
          snippet: 'Provision multi-cloud resources with Terraform.',
        },
        {
          title: 'DevOps Engineer',
          company: 'Northwind AI',
          location: 'NYC',
          link: '#',
          snippet: 'Standardize Terraform stacks across services.',
        },
        {
          title: 'Infrastructure Engineer',
          company: 'Mosaic Labs',
          location: 'Remote',
          link: '#',
          snippet: 'Build reusable Terraform modules and CI workflows.',
        },
        {
          title: 'Cloud Platform Engineer',
          company: 'Oasis',
          location: 'Denver',
          link: '#',
          snippet: 'Maintain Terraform for scalable ML workloads.',
        },
      ],
      TypeScript: [
        {
          title: 'Frontend Engineer',
          company: 'SignalWorks',
          location: 'Austin',
          link: '#',
          snippet: 'Own TypeScript UI architecture for product surfaces.',
        },
        {
          title: 'Full-stack Engineer',
          company: 'Mosaic Labs',
          location: 'SF',
          link: '#',
          snippet: 'Build TypeScript services and Next.js apps.',
        },
        {
          title: 'Product Engineer',
          company: 'Cerebra',
          location: 'Remote',
          link: '#',
          snippet: 'Ship TypeScript features across web dashboards.',
        },
        {
          title: 'Platform UI Engineer',
          company: 'Atlas',
          location: 'NYC',
          link: '#',
          snippet: 'Maintain TypeScript design systems and tooling.',
        },
        {
          title: 'Software Engineer',
          company: 'Aperture',
          location: 'Seattle',
          link: '#',
          snippet: 'Build client SDKs and tools in TypeScript.',
        },
        {
          title: 'Growth Engineer',
          company: 'Quanta',
          location: 'Remote',
          link: '#',
          snippet: 'Experimentation platform built in TypeScript.',
        },
      ],
      React: [
        {
          title: 'Frontend Engineer',
          company: 'Northwind AI',
          location: 'Remote',
          link: '#',
          snippet: 'Craft React dashboards for AI workflows.',
        },
        {
          title: 'UI Engineer',
          company: 'SignalWorks',
          location: 'Austin',
          link: '#',
          snippet: 'Build component libraries and React hooks.',
        },
        {
          title: 'Product Engineer',
          company: 'Helios Cloud',
          location: 'NYC',
          link: '#',
          snippet: 'Ship data-rich React interfaces for analytics.',
        },
        {
          title: 'Frontend Platform Engineer',
          company: 'Aperture',
          location: 'SF',
          link: '#',
          snippet: 'Scale React apps with performance tooling.',
        },
        {
          title: 'Design Engineer',
          company: 'Cerebra',
          location: 'Seattle',
          link: '#',
          snippet: 'Bridge product design and React implementation.',
        },
        {
          title: 'Growth Engineer',
          company: 'Quanta',
          location: 'Remote',
          link: '#',
          snippet: 'Launch experiments with React and analytics.',
        },
      ],
      'API Design': [
        {
          title: 'Backend Engineer',
          company: 'Mosaic Labs',
          location: 'SF',
          link: '#',
          snippet: 'Design APIs for ML workflows and integrations.',
        },
        {
          title: 'Platform Engineer',
          company: 'Atlas',
          location: 'NYC',
          link: '#',
          snippet: 'Define API contracts and service boundaries.',
        },
        {
          title: 'Software Engineer',
          company: 'Northwind AI',
          location: 'Remote',
          link: '#',
          snippet: 'Build public API for ML experimentation.',
        },
        {
          title: 'Product Engineer',
          company: 'SignalWorks',
          location: 'Austin',
          link: '#',
          snippet: 'Own API design and documentation.',
        },
        {
          title: 'Integrations Engineer',
          company: 'Helios Cloud',
          location: 'Chicago',
          link: '#',
          snippet: 'Design APIs for partner integrations.',
        },
        {
          title: 'Solutions Engineer',
          company: 'Aperture',
          location: 'Remote',
          link: '#',
          snippet: 'Translate customer needs into API patterns.',
        },
      ],
      'Data Viz': [
        {
          title: 'Data Visualization Engineer',
          company: 'Cerebra',
          location: 'Seattle',
          link: '#',
          snippet: 'Build analytics dashboards for model ops.',
        },
        {
          title: 'Product Engineer',
          company: 'SignalWorks',
          location: 'Austin',
          link: '#',
          snippet: 'Ship interactive charts with D3 + React.',
        },
        {
          title: 'Analytics Engineer',
          company: 'Oasis',
          location: 'Denver',
          link: '#',
          snippet: 'Create KPI dashboards for AI products.',
        },
        {
          title: 'Frontend Engineer',
          company: 'Mosaic Labs',
          location: 'SF',
          link: '#',
          snippet: 'Craft data-rich visualizations in React.',
        },
        {
          title: 'BI Engineer',
          company: 'Helios Cloud',
          location: 'Remote',
          link: '#',
          snippet: 'Publish analytics using modern visualization stacks.',
        },
        {
          title: 'Growth Analyst',
          company: 'Atlas',
          location: 'NYC',
          link: '#',
          snippet: 'Tell product stories with data visualization.',
        },
      ],
    }),
    []
  );

  const missingSignals = [
    { name: 'Kafka', demand: 86, gap: 72, roles: 18 },
    { name: 'Feature Stores', demand: 74, gap: 63, roles: 14 },
    { name: 'Prompt Evaluation', demand: 69, gap: 57, roles: 12 },
    { name: 'Terraform', demand: 66, gap: 45, roles: 16 },
  ];

  const strengthSignals = [
    { name: 'TypeScript', demand: 92, fit: 88, roles: 22 },
    { name: 'React', demand: 84, fit: 81, roles: 20 },
    { name: 'API Design', demand: 79, fit: 73, roles: 17 },
    { name: 'Data Viz', demand: 63, fit: 70, roles: 11 },
  ];

  const roleDetailsMap = roleDetails as Record<string, { title: string; company: string; location: string; link: string; snippet: string }[]>;
  const hoveredRoles = hoveredSkill ? roleDetailsMap[hoveredSkill] ?? [] : [];
  const selectedRoles = selectedSkill ? roleDetailsMap[selectedSkill] ?? [] : [];

  const roleClusters = [
    { name: 'ML Platform Engineer', score: 78, trend: '+12%' },
    { name: 'AI Product Engineer', score: 72, trend: '+9%' },
    { name: 'Data Infrastructure', score: 68, trend: '+6%' },
  ];

  return (
    <div className={className}>
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400">Industry Score</p>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mt-2">Market fit intelligence</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
            We scan thousands of live roles to surface what is missing, what is strong, and which role clusters match your profile.
          </p>
        </div>
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white rounded-2xl px-5 py-4 shadow-lg">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-300">Overall score</p>
          <div className="text-3xl font-semibold mt-2">74</div>
          <p className="text-xs text-slate-300 mt-1">Top 28% for targeted roles</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-slate-50 dark:bg-slate-900/60 rounded-2xl p-5 border border-slate-200 dark:border-slate-700">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-100">Missing skills with highest demand</h4>
            <span className="text-xs text-rose-500 font-semibold">Needs attention</span>
          </div>
          <div className="space-y-4">
            {missingSignals.map((item) => (
              <div
                key={item.name}
                className="relative"
              >
                <div className="flex items-center justify-between text-sm text-gray-700 dark:text-gray-200">
                  <span className="font-medium">{item.name}</span>
                </div>
                {hoveredSkill === item.name && (
                  <div
                    className="absolute right-0 bottom-full mb-2 z-20 w-72 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-xl p-3"
                    onMouseEnter={() => openHover(item.name)}
                    onMouseLeave={() => closeHover(item.name)}
                  >
                    <p className="text-xs font-semibold text-slate-700 dark:text-slate-200">Top roles for {item.name}</p>
                    <div className="mt-2 space-y-2 text-xs text-slate-600 dark:text-slate-300">
                      {hoveredRoles.slice(0, 5).map((role) => (
                        <div key={`${item.name}-${role.title}-${role.company}`}>
                          <p className="font-medium text-slate-800 dark:text-slate-100">
                            {role.title} · {role.company}
                          </p>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400">{role.location}</p>
                        </div>
                      ))}
                    </div>
                    <button
                      type="button"
                      className="mt-3 text-[11px] text-blue-600 dark:text-blue-400 font-semibold hover:underline"
                      onClick={() => setSelectedSkill(item.name)}
                    >
                      See more →
                    </button>
                  </div>
                )}
                <div className="mt-2 flex items-center gap-3">
                  <div className="relative group flex-1 h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-rose-400 to-rose-600"
                      style={{ width: `${item.gap}%` }}
                    />
                    <div className="absolute -top-7 right-0 rounded-md bg-slate-900 text-white text-[10px] px-2 py-1 opacity-0 transition-opacity group-hover:opacity-100">
                      {item.demand}% demand
                    </div>
                  </div>
                  <button
                    type="button"
                    className="text-xs text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 underline decoration-dotted"
                    onMouseEnter={() => openHover(item.name)}
                    onMouseLeave={() => closeHover(item.name)}
                    onFocus={() => openHover(item.name)}
                    onClick={() => setSelectedSkill(item.name)}
                  >
                    {item.roles} roles
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-50 dark:bg-slate-900/60 rounded-2xl p-5 border border-slate-200 dark:border-slate-700">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-100">Strengths aligned to the market</h4>
            <span className="text-xs text-emerald-500 font-semibold">Strong signal</span>
          </div>
          <div className="space-y-4">
            {strengthSignals.map((item) => (
              <div
                key={item.name}
                className="relative"
              >
                <div className="flex items-center justify-between text-sm text-gray-700 dark:text-gray-200">
                  <span className="font-medium">{item.name}</span>
                </div>
                {hoveredSkill === item.name && (
                  <div
                    className="absolute right-0 bottom-full mb-2 z-20 w-72 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-xl p-3"
                    onMouseEnter={() => openHover(item.name)}
                    onMouseLeave={() => closeHover(item.name)}
                  >
                    <p className="text-xs font-semibold text-slate-700 dark:text-slate-200">Top roles for {item.name}</p>
                    <div className="mt-2 space-y-2 text-xs text-slate-600 dark:text-slate-300">
                      {hoveredRoles.slice(0, 5).map((role) => (
                        <div key={`${item.name}-${role.title}-${role.company}`}>
                          <p className="font-medium text-slate-800 dark:text-slate-100">
                            {role.title} · {role.company}
                          </p>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400">{role.location}</p>
                        </div>
                      ))}
                    </div>
                    <button
                      type="button"
                      className="mt-3 text-[11px] text-blue-600 dark:text-blue-400 font-semibold hover:underline"
                      onClick={() => setSelectedSkill(item.name)}
                    >
                      See more →
                    </button>
                  </div>
                )}
                <div className="mt-2 flex items-center gap-3">
                  <div className="relative group flex-1 h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-emerald-400 to-emerald-600"
                      style={{ width: `${item.fit}%` }}
                    />
                    <div className="absolute -top-7 right-0 rounded-md bg-slate-900 text-white text-[10px] px-2 py-1 opacity-0 transition-opacity group-hover:opacity-100">
                      {item.demand}% demand
                    </div>
                  </div>
                  <button
                    type="button"
                    className="text-xs text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 underline decoration-dotted"
                    onMouseEnter={() => openHover(item.name)}
                    onMouseLeave={() => closeHover(item.name)}
                    onFocus={() => openHover(item.name)}
                    onClick={() => setSelectedSkill(item.name)}
                  >
                    {item.roles} roles
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 bg-white dark:bg-gray-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-700">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-100">Role clusters trending for you</h4>
          <span className="text-xs text-blue-500 font-semibold">Based on 36 roles</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {roleClusters.map((role) => (
            <div key={role.name} className="rounded-xl border border-slate-200 dark:border-slate-700 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">Cluster</p>
              <p className="text-sm font-semibold text-gray-900 dark:text-white mt-2">{role.name}</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-2xl font-semibold text-gray-900 dark:text-white">{role.score}</span>
                <span className="text-xs font-semibold text-emerald-500">{role.trend}</span>
              </div>
              <div className="mt-3 h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-400 to-indigo-500" style={{ width: `${role.score}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="h-2 w-24 rounded-full bg-gradient-to-r from-rose-400 via-amber-400 to-emerald-500" />
          <p className="text-xs text-gray-500 dark:text-gray-400">Relevance scale: missing → strong</p>
        </div>
        <button
          type="button"
          className="px-4 py-2 rounded-full bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 transition-colors"
        >
          View detailed analysis
        </button>
      </div>

      {selectedSkill && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4">
          <div className="w-full max-w-2xl rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-2xl">
            <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200 dark:border-slate-700">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Roles</p>
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mt-1">
                  {selectedSkill} across the market
                </h4>
              </div>
              <button
                type="button"
                onClick={() => setSelectedSkill(null)}
                className="text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200"
                aria-label="Close roles dialog"
              >
                ✕
              </button>
            </div>
            <div className="px-5 py-4 space-y-4 max-h-[60vh] overflow-y-auto">
              {selectedRoles.map((role) => (
                <div
                  key={`${selectedSkill}-${role.title}-${role.company}`}
                  className="rounded-xl border border-slate-200 dark:border-slate-700 p-4"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">
                        {role.title}
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {role.company} · {role.location}
                      </p>
                    </div>
                    <a
                      href={role.link}
                      className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      View role
                    </a>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-3">{role.snippet}</p>
                </div>
              ))}
            </div>
            <div className="px-5 py-4 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between">
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Showing {selectedRoles.length} roles for {selectedSkill}
              </p>
              <button
                type="button"
                onClick={() => setSelectedSkill(null)}
                className="px-4 py-2 rounded-full bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

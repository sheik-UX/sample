'use client';

import React, { useState } from 'react';
import { ArrowUpRight } from '@phosphor-icons/react';
import { ScrollReveal as SectionReveal } from './animations';
import { ScrollReveal } from '@/components/lightswind/scroll-reveal';

interface ProjectSlide {
  id: string;
  client: string;
  title: string;
  category: string;
  metric: string;
  tags: string[];
}

export default function PinnedCaseStudies() {
  const [activeProject, setActiveProject] = useState<number>(0);

  const projects: ProjectSlide[] = [
    {
      id: 'kronos',
      client: 'Kronos Infrastructure',
      title: 'Decentralized Workflow Cluster',
      category: 'Smart Pipeline Automation',
      metric: '+310% Task Throughput',
      tags: ['Next.js App Router', 'PaperFlow Engine', 'Sub-40ms'],
    },
    {
      id: 'aether',
      client: 'Aether Hardware',
      title: 'Inventory & Supply Ingestion Flow',
      category: 'Automated Operations',
      metric: '99.98% Accuracy SLA',
      tags: ['Automated Webhooks', 'Real-Time Sync', 'Error Recovery'],
    },
    {
      id: 'valence',
      client: 'Valence Bio Labs',
      title: 'Clinical Data Pipeline Transformation',
      category: 'Enterprise Data Router',
      metric: '14,000 evt/s Ingestion',
      tags: ['SOC2 Type II', 'ETL Automation', 'Inter Sans'],
    },
    {
      id: 'solaris',
      client: 'Solaris Energy Group',
      title: 'Grid Telemetry Smart Routing',
      category: 'Infrastructure Engine',
      metric: '4.8x Response Velocity',
      tags: ['Edge Runtime', 'REST Webhooks', 'JetBrains Mono'],
    },
  ];

  return (
    <section id="frameworks" className="relative py-14 sm:py-18 md:py-22 px-6 max-w-7xl mx-auto border-t border-[#E5E7EB] bg-[#FDFDFD] overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column with Original Illustration */}
        <SectionReveal className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#FF5722]">
            ENTERPRISE DEPLOYMENTS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-medium tracking-tight text-[#111827] leading-[1.08]">
            <ScrollReveal
              size="lg"
              align="left"
              enableBlur={true}
              baseOpacity={0.1}
              baseRotation={2}
              blurStrength={3}
              staggerDelay={0.035}
              threshold={0.5}
            >
              Proven workflow architectures across modern teams.
            </ScrollReveal>
          </h2>
          <p className="text-base sm:text-lg text-[#4B5563] font-normal leading-relaxed">
            Hover each workflow slice to inspect the node architecture, throughput telemetry, and
            measured operational gains.
          </p>

          {/* Generated Original Illustration */}
          <div className="rounded-[12px] overflow-hidden border border-[#E5E7EB] bg-white shadow-xs">
            <img
              src="/assets/workflow_cluster.jpg"
              alt="Enterprise workflow cluster and telemetry dashboard"
              loading="lazy"
              decoding="async"
              className="w-full h-52 object-cover"
            />
            <div className="p-3 bg-[#F4F4F5] border-t border-[#E5E7EB] flex items-center justify-between text-[11px] font-mono text-[#4B5563]">
              <span>Cluster: Multi-Region Edge</span>
              <span className="text-[#FF5722] font-semibold">Live Telemetry</span>
            </div>
          </div>

          <div className="pt-2">
            <a
              href="/plans-pricing"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-[#FF5722] hover:text-[#E64A19] transition-colors"
            >
              <span>Explore Deployment Blueprints</span>
              <ArrowUpRight size={14} weight="bold" />
            </a>
          </div>
        </SectionReveal>

        {/* Right Column: Horizontal Expanding Slices */}
        <SectionReveal delay={0.1} className="lg:col-span-8 flex flex-col md:flex-row h-auto md:h-[580px] gap-3 sm:gap-4 select-none">
          {projects.map((project, index) => {
            const isActive = activeProject === index;
            return (
              <div
                key={project.id}
                onMouseEnter={() => setActiveProject(index)}
                onClick={() => setActiveProject(index)}
                className={`relative rounded-[16px] overflow-hidden border border-[#E5E7EB] cursor-pointer transition-all duration-500 ease-out flex flex-col justify-between p-4 sm:p-6 md:p-8 ${
                  isActive
                    ? 'md:flex-[3] min-h-[220px] md:min-h-0 bg-white shadow-md border-[#FF5722]'
                    : 'md:flex-[1] min-h-[64px] md:min-h-0 bg-[#F4F4F5] hover:bg-[#E5E7EB]'
                }`}
              >
                {/* Top Header */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-[#4B5563] uppercase tracking-wider">
                    {project.client}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors ${
                      isActive ? 'bg-[#FF5722] text-white' : 'bg-[#E5E7EB] text-[#4B5563]'
                    }`}
                  >
                    <ArrowUpRight size={13} weight="bold" />
                  </div>
                </div>

                {/* Bottom Content */}
                {isActive ? (
                  <div className="space-y-2 sm:space-y-3 mt-4 md:mt-0">
                    <div className="inline-block px-3 py-1 rounded-full bg-[#FFF1EC] border border-[#FFD0C2] text-[11px] font-mono font-semibold text-[#FF5722]">
                      {project.metric}
                    </div>

                    <h3 className="text-lg sm:text-xl md:text-2xl font-medium tracking-tight text-[#111827]">
                      {project.title}
                    </h3>

                    <p className="text-xs text-[#4B5563] font-normal">
                      {project.category}
                    </p>

                    <div className="pt-2 flex flex-wrap gap-1.5 sm:gap-2 animate-in fade-in duration-300">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-[6px] text-[10px] sm:text-[11px] font-mono bg-[#F4F4F5] text-[#4B5563] border border-[#E5E7EB]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="hidden md:block">
                    <span className="text-[11px] font-mono text-[#9CA3AF] truncate">
                      {project.metric}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </SectionReveal>
      </div>
    </section>
  );
}

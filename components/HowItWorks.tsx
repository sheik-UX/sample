'use client';

import React from 'react';
import { Sparkles, ArrowRight, Check } from 'lucide-react';
import { ScrollReveal as SectionReveal } from './animations';
import { ScrollReveal } from '@/components/lightswind/scroll-reveal';

export default function HowItWorks() {
  const steps = [
    {
      step: '01',
      title: 'Build',
      action: 'Design your workflow using simple building blocks.',
      description:
        'Assemble declarative logic nodes, conditional triggers, and custom filters in an intuitive interface without writing boilerplate code.',
      nodePreview: (
        <div className="p-3 rounded-[10px] bg-[#F4F4F5] border border-[#E5E7EB] font-mono text-[10px] space-y-2">
          <div className="flex items-center justify-between text-[#111827] font-semibold">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5722]" /> Ingest Trigger
            </span>
            <span className="text-[#9CA3AF]">postgres.cdc</span>
          </div>
          <div className="flex items-center justify-between p-1.5 rounded bg-white border border-[#E5E7EB] text-[#4B5563]">
            <span>Filter: amount &gt; $5,000</span>
            <span className="text-emerald-600 font-bold">Pass</span>
          </div>
        </div>
      ),
    },
    {
      step: '02',
      title: 'Connect',
      action: 'Connect your existing tools, systems, and data.',
      description:
        'Securely link PostgreSQL databases, webhook endpoints, GitHub repositories, and payment APIs with instant bi-directional schema syncing.',
      nodePreview: (
        <div className="p-3 rounded-[10px] bg-[#F4F4F5] border border-[#E5E7EB] font-mono text-[10px] space-y-2">
          <div className="flex items-center justify-between text-[#111827] font-semibold">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Bi-Directional Bus
            </span>
            <span className="text-emerald-700 font-bold">Connected</span>
          </div>
          <div className="flex items-center justify-between p-1.5 rounded bg-white border border-[#E5E7EB] text-[#4B5563]">
            <span>Stripe + Linear + S3</span>
            <span className="text-[#FF5722]">3 streams</span>
          </div>
        </div>
      ),
    },
    {
      step: '03',
      title: 'Automate',
      action: 'Automate repetitive processes and keep operations moving.',
      description:
        'Deploy sub-second execution rules that route telemetry, resolve exceptions, and eliminate operational bottlenecks 24/7.',
      nodePreview: (
        <div className="p-3 rounded-[10px] bg-[#F4F4F5] border border-[#E5E7EB] font-mono text-[10px] space-y-2">
          <div className="flex items-center justify-between text-[#111827] font-semibold">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5722] animate-pulse" /> Edge Execution
            </span>
            <span className="text-emerald-600 font-bold">28ms SLA</span>
          </div>
          <div className="flex items-center justify-between p-1.5 rounded bg-[#FFF1EC] border border-[#FFD0C2] text-[#FF5722] font-semibold">
            <span>Dispatched: 0 errors</span>
            <Check size={12} />
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="how-it-works" className="relative py-14 sm:py-18 md:py-22 px-4 sm:px-6 bg-[#FDFDFD] border-t border-[#E5E7EB] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <SectionReveal className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4F4F5] border border-[#E5E7EB] text-xs font-mono font-semibold text-[#4B5563] mb-4 shadow-xs">
            <Sparkles size={13} className="text-[#FF5722] fill-[#FF5722]" />
            <span>Three-Step Orchestration</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-medium tracking-tight text-[#111827] leading-[1.06] mb-4">
            <ScrollReveal
              size="lg"
              align="center"
              enableBlur={true}
              baseOpacity={0.1}
              baseRotation={2}
              blurStrength={3}
              staggerDelay={0.035}
              threshold={0.5}
            >
              From idea to automated workflow.
            </ScrollReveal>
          </h2>

          <p className="text-base sm:text-lg text-[#4B5563] font-normal leading-relaxed">
            Eliminate complex orchestration overhead. Build, connect, and automate your company&apos;s
            most critical operational pipelines in minutes.
          </p>
        </SectionReveal>

        {/* Connected Pipeline Sequence with Interconnecting Directional Flow */}
        <SectionReveal delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {steps.map((item, idx) => (
              <div
                key={idx}
                className="group relative h-full rounded-[16px] bg-white border border-[#E5E7EB] p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:shadow-md transition-all hover:border-[#FF5722]"
              >
                <div>
                  {/* Step Header with Clean Monospace Index */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2">
                      <span className="text-xl sm:text-2xl font-mono font-bold text-[#FF5722]">
                        {item.step}
                      </span>
                      <span className="text-xs font-mono text-[#9CA3AF] uppercase">/ Phase</span>
                    </div>
                    {idx < 2 && (
                      <div className="hidden md:flex items-center gap-1 text-[11px] font-mono text-[#9CA3AF] group-hover:text-[#FF5722] transition-colors">
                        <span>Pipelined</span>
                        <ArrowRight size={12} />
                      </div>
                    )}
                  </div>

                  {/* Micro-UI Node Preview */}
                  <div className="mb-5">{item.nodePreview}</div>

                  <h3 className="text-xl font-medium tracking-tight text-[#111827] mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm font-semibold text-[#111827] mb-2 leading-snug">
                    {item.action}
                  </p>

                  <p className="text-xs sm:text-sm text-[#4B5563] font-normal leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-[#E5E7EB] flex items-center justify-between text-xs font-mono text-[#4B5563]">
                  <span className="text-[11px] text-[#9CA3AF]">Orchestration Node</span>
                  <span className="text-emerald-600 font-semibold flex items-center gap-1">
                    <Check size={13} /> Active SLA
                  </span>
                </div>
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

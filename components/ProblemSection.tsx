'use client';

import React from 'react';
import { AlertTriangle, Check, ArrowRight, XCircle } from 'lucide-react';
import { ScrollReveal as SectionReveal } from './animations';
import { ScrollReveal } from '@/components/lightswind/scroll-reveal';

export default function ProblemSection() {
  const problems = [
    {
      id: '01',
      title: 'Manual tasks & ad-hoc fixes',
      description: 'Engineers and ops teams spend hours each week running manual scripts and patching data inconsistencies.',
      tag: 'Time Drain',
      metric: '18h / week lost',
    },
    {
      id: '02',
      title: 'Repetitive scheduled jobs',
      description: 'Fragile cron triggers fail silently in production without automated retry backoff or alerting.',
      tag: 'Human Error',
      metric: '14% failure rate',
    },
    {
      id: '03',
      title: 'Too many disconnected tools',
      description: 'Crucial operational context is trapped across siloed SaaS portals, requiring complex manual reconciliation.',
      tag: 'Fragmentation',
      metric: '7+ siloed portals',
    },
    {
      id: '04',
      title: 'Slow multi-tier approvals',
      description: 'Sensitive workflows and invoices stall in email threads and Slack DMs waiting for executive sign-off.',
      tag: 'Bottlenecks',
      metric: '48h avg turnaround',
    },
  ];

  return (
    <section id="problem" className="relative py-14 sm:py-18 md:py-22 px-4 sm:px-6 bg-[#FDFDFD] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <SectionReveal className="max-w-3xl mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4F4F5] border border-[#E5E7EB] text-xs font-mono font-semibold text-[#4B5563] mb-4 shadow-xs">
            <AlertTriangle size={13} className="text-[#FF5722]" />
            <span>The Operational Challenge</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-medium tracking-tight text-[#111827] leading-[1.06] mb-4">
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
              Operations shouldn&apos;t be this complicated.
            </ScrollReveal>
          </h2>

          <p className="text-base sm:text-lg text-[#4B5563] font-normal leading-relaxed max-w-2xl">
            Modern high-growth teams lose hundreds of hours each quarter managing fragmented tooling,
            brittle custom scripts, and slow manual checkpoints that stall progress.
          </p>
        </SectionReveal>

        {/* Asymmetric Problem vs Solution Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: The 4 Bottlenecks as an Editorial List (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
            {problems.map((prob) => (
              <SectionReveal key={prob.id} delay={Number(prob.id) * 0.05}>
                <div className="p-6 rounded-[16px] bg-white border border-[#E5E7EB] shadow-xs hover:border-[#FF5722] transition-all group">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono font-bold text-[#FF5722]">
                        {prob.id}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF5722]" />
                      <h3 className="text-base sm:text-lg font-medium text-[#111827] tracking-tight">
                        {prob.title}
                      </h3>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#FFF1EC] text-[#FF5722] font-semibold border border-[#FFD0C2] shrink-0">
                      {prob.tag}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#4B5563] font-normal leading-relaxed mt-2.5 pl-6">
                    {prob.description}
                  </p>

                  <div className="mt-3 pt-3 border-t border-[#E5E7EB]/60 flex items-center justify-between text-xs font-mono text-[#9CA3AF] pl-6">
                    <span>Industry average penalty</span>
                    <span className="text-rose-600 font-semibold">{prob.metric}</span>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>

          {/* Right Column: High-Contrast Technical Console (Secondary #121212) (5 cols) */}
          <div className="lg:col-span-5">
            <SectionReveal delay={0.15} className="h-full">
              <div className="h-full rounded-[16px] bg-[#121212] border border-neutral-800 p-6 sm:p-8 text-white shadow-xl flex flex-col justify-between relative overflow-hidden">
                {/* Subtle Sentinel corner accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF5722]/10 rounded-full blur-2xl pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between pb-4 mb-6 border-b border-neutral-800">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-xs font-mono text-neutral-300 font-semibold uppercase tracking-wider">
                        PaperFlow Runtime
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800">
                      Sub-40ms DAG
                    </span>
                  </div>

                  {/* Contrast Box: The Legacy Trap */}
                  <div className="p-4 rounded-[12px] bg-neutral-900/90 border border-neutral-800 mb-4 font-mono text-xs">
                    <div className="flex items-center gap-2 text-rose-400 font-semibold text-[11px] mb-2">
                      <XCircle size={14} />
                      <span>LEGACY MANUAL OPERATIONAL FLOW</span>
                    </div>
                    <div className="space-y-1 text-neutral-400 text-[11px]">
                      <div className="line-through text-neutral-500">• Ingest via 4 manual CSV exports</div>
                      <div className="line-through text-neutral-500">• Unvalidated schema handoffs</div>
                      <div className="line-through text-neutral-500">• 36h delay on manager approvals</div>
                    </div>
                  </div>

                  {/* Contrast Box: The Sentinel Automation Flow */}
                  <div className="p-4 rounded-[12px] bg-neutral-900 border border-[#FF5722]/40 mb-6 font-mono text-xs">
                    <div className="flex items-center gap-2 text-[#FF5722] font-semibold text-[11px] mb-2">
                      <Check size={14} className="text-emerald-400" />
                      <span>PAPERFLOW AUTONOMOUS PIPELINE</span>
                    </div>
                    <div className="space-y-1.5 text-neutral-200 text-[11px]">
                      <div className="flex items-center justify-between text-neutral-300">
                        <span>→ Webhook CDC Trigger</span>
                        <span className="text-emerald-400">12ms</span>
                      </div>
                      <div className="flex items-center justify-between text-neutral-300">
                        <span>→ Schema Validation Node</span>
                        <span className="text-emerald-400">9ms</span>
                      </div>
                      <div className="flex items-center justify-between text-neutral-300">
                        <span>→ Auto-Reconciliation</span>
                        <span className="text-emerald-400">17ms</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    PaperFlow turns multi-hour manual bottlenecks into deterministic, audited execution pipelines.
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-neutral-800 flex items-center justify-between text-xs font-mono text-neutral-400">
                  <span>99.99% Execution SLA</span>
                  <a
                    href="/plans-pricing"
                    className="text-[#FF5722] hover:text-[#FF7043] font-semibold flex items-center gap-1 transition-colors"
                  >
                    Deploy Autonomous Flow <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Sparkles,
  ArrowUpRight,
  Command,
} from 'lucide-react';
import { ScrollReveal as SectionReveal, StaggerContainer, StaggerItem } from '@/components/animations';
import { ScrollReveal } from '@/components/lightswind/scroll-reveal';

export default function InterfacePatternsContent() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'Navigation',
    'Data',
    'Workflows',
    'Automation',
    'Communication',
    'Analytics',
  ];

  const patterns = [
    {
      id: 'workflow-builder',
      title: 'Workflow Builder',
      category: 'Workflows',
      description:
        'Node-based visual orchestration canvas featuring drag-and-drop connectors, conditional branches, and sub-second execution simulation.',
      spec: 'Interactive Canvas // Vector DAG',
      preview: (
        <div className="p-4 bg-[#F4F4F5] rounded-[12px] border border-[#E5E7EB] flex flex-col gap-2 font-mono text-[10px]">
          <div className="flex items-center justify-between p-2 rounded bg-white border border-[#E5E7EB] shadow-xs">
            <span className="flex items-center gap-1.5 text-[#111827] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5722]" /> Ingest Trigger
            </span>
            <span className="text-[#9CA3AF]">webhook.payload</span>
          </div>
          <div className="h-3 w-px bg-[#FF5722] mx-auto" />
          <div className="flex items-center justify-between p-2 rounded bg-[#FFF1EC] border border-[#FFD0C2] text-[#FF5722] font-semibold">
            <span>Transform & Validate</span>
            <span>28ms</span>
          </div>
          <div className="h-3 w-px bg-[#FF5722] mx-auto" />
          <div className="flex items-center justify-between p-2 rounded bg-emerald-50 border border-emerald-200 text-emerald-700">
            <span>PostgreSQL Sync</span>
            <span>Success</span>
          </div>
        </div>
      ),
    },
    {
      id: 'data-tables',
      title: 'Data Tables',
      category: 'Data',
      description:
        'High-density, sortable schemas with change data capture (CDC) indicators, column filters, and real-time streaming updates.',
      spec: 'CDC Streaming // Sortable Schema',
      preview: (
        <div className="p-3 bg-white rounded-[12px] border border-[#E5E7EB] font-mono text-[10px] space-y-1.5">
          <div className="flex justify-between pb-1 border-b border-[#E5E7EB] text-[#9CA3AF] uppercase">
            <span>Table Schema</span>
            <span>Status</span>
          </div>
          <div className="flex items-center justify-between p-1.5 rounded bg-[#F4F4F5]">
            <span className="font-semibold text-[#111827]">customers_stream</span>
            <span className="px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[9px]">Live CDC</span>
          </div>
          <div className="flex items-center justify-between p-1.5 rounded bg-[#F4F4F5]">
            <span className="font-semibold text-[#111827]">orders_ledger</span>
            <span className="px-1.5 py-0.5 rounded bg-[#FFF1EC] text-[#FF5722] text-[9px]">Synced</span>
          </div>
          <div className="flex items-center justify-between p-1.5 rounded bg-[#F4F4F5]">
            <span className="font-semibold text-[#111827]">telemetry_logs</span>
            <span className="text-[#9CA3AF] text-[9px]">14.2k evt/s</span>
          </div>
        </div>
      ),
    },
    {
      id: 'command-palette',
      title: 'Command / Search Interface',
      category: 'Navigation',
      description:
        'Global keyboard shortcut palette (Cmd+K) offering instantaneous search across nodes, execution histories, and workflow parameters.',
      spec: 'Keyboard-First // Sub-10ms Lookup',
      preview: (
        <div className="p-3 bg-[#121212] text-white rounded-[12px] border border-neutral-800 font-mono text-[10px] space-y-2">
          <div className="flex items-center gap-2 p-2 rounded bg-neutral-900 border border-neutral-700 text-neutral-300">
            <Command size={12} className="text-[#FF5722]" />
            <span>Search pipelines, schemas, nodes...</span>
          </div>
          <div className="space-y-1 pl-1">
            <div className="flex items-center justify-between p-1 rounded hover:bg-neutral-800 text-neutral-300">
              <span>Open &quot;Stripe Ingestion Flow&quot;</span>
              <span className="text-neutral-500">Node</span>
            </div>
            <div className="flex items-center justify-between p-1 rounded hover:bg-neutral-800 text-[#FF5722]">
              <span>Inspect latency bottleneck p95</span>
              <span className="text-neutral-500">Metric</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'automation-controls',
      title: 'Automation Controls',
      category: 'Automation',
      description:
        'Configurable execution switches, threshold sliders, and auto-rollback toggles designed for operational reliability.',
      spec: 'Failover Logic // Threshold Controls',
      preview: (
        <div className="p-4 bg-white rounded-[12px] border border-[#E5E7EB] space-y-3 font-mono text-[10px]">
          <div className="flex items-center justify-between">
            <span className="text-[#111827] font-semibold">Auto-Remediation</span>
            <div className="w-8 h-4 rounded-full bg-[#FF5722] p-0.5 flex items-center justify-end">
              <div className="w-3 h-3 rounded-full bg-white shadow-xs" />
            </div>
          </div>
          <div className="space-y-1">
            <div className="flex justify-between text-[#4B5563]">
              <span>Latency Threshold</span>
              <span className="text-[#FF5722] font-bold">250ms</span>
            </div>
            <div className="w-full bg-[#F4F4F5] h-1.5 rounded-full overflow-hidden">
              <div className="w-2/3 bg-[#FF5722] h-full" />
            </div>
          </div>
          <div className="flex justify-between text-[9px] text-[#9CA3AF] pt-1 border-t border-[#E5E7EB]">
            <span>Fallback: Queue Buffer</span>
            <span className="text-emerald-600">Active</span>
          </div>
        </div>
      ),
    },
    {
      id: 'dashboard-cards',
      title: 'Dashboard Cards',
      category: 'Analytics',
      description:
        'Multi-metric operational summary cards with sparkline curves, live throughput gauges, and SLA health indicators.',
      spec: 'Live Telemetry // Micro Sparkline',
      preview: (
        <div className="p-4 bg-[#F4F4F5] rounded-[12px] border border-[#E5E7EB] flex flex-col justify-between">
          <div className="flex justify-between items-center text-xs font-mono">
            <span className="text-[#4B5563] uppercase text-[10px]">Throughput</span>
            <span className="text-emerald-700 font-bold text-[10px]">+310% Velocity</span>
          </div>
          <div className="text-2xl font-medium tracking-tight text-[#111827] my-1">
            14,200 <span className="text-xs font-mono text-[#4B5563]">evt/s</span>
          </div>
          <div className="h-6 w-full pt-1">
            <svg viewBox="0 0 100 24" className="w-full h-full stroke-[#FF5722] fill-none stroke-2">
              <path d="M0 20 Q 25 5, 50 12 T 100 2" />
            </svg>
          </div>
        </div>
      ),
    },
    {
      id: 'approval-flows',
      title: 'Approval Flows',
      category: 'Workflows',
      description:
        'Human-in-the-loop validation checkpoints requiring signed confirmation for sensitive financial transactions or schema migrations.',
      spec: 'Dual-Key Auth // Audit Timestamp',
      preview: (
        <div className="p-4 bg-white rounded-[12px] border border-[#E5E7EB] space-y-2.5 font-mono text-[10px]">
          <div className="flex items-center justify-between">
            <span className="text-[#FF5722] font-semibold">ACTION REQUIRED</span>
            <span className="text-[#9CA3AF]">Tier 2 Approval</span>
          </div>
          <p className="text-xs text-[#111827] font-sans font-medium leading-tight">
            Authorize batch refund of $14,900 across 42 accounts?
          </p>
          <div className="grid grid-cols-2 gap-2 pt-1">
            <button className="py-1 rounded bg-[#FF5722] text-white font-semibold text-center">
              Approve
            </button>
            <button className="py-1 rounded bg-[#F4F4F5] border border-[#E5E7EB] text-[#4B5563] text-center">
              Inspect
            </button>
          </div>
        </div>
      ),
    },
    {
      id: 'analytics-views',
      title: 'Analytics Views',
      category: 'Analytics',
      description:
        'Comprehensive execution telemetry graphs comparing p50, p95, and p99 pipeline response times across 20+ edge regions.',
      spec: 'Percentile Latency // Heatmaps',
      preview: (
        <div className="p-3 bg-white rounded-[12px] border border-[#E5E7EB] space-y-2 font-mono text-[10px]">
          <div className="flex justify-between text-[#111827] font-semibold">
            <span>Latency Percentiles</span>
            <span className="text-emerald-600">Sub-40ms SLA</span>
          </div>
          <div className="space-y-1 text-[9px]">
            <div className="flex justify-between text-[#4B5563]">
              <span>p50 (Median)</span>
              <span className="text-[#111827] font-bold">12ms</span>
            </div>
            <div className="flex justify-between text-[#4B5563]">
              <span>p95</span>
              <span className="text-[#111827] font-bold">28ms</span>
            </div>
            <div className="flex justify-between text-[#4B5563]">
              <span>p99</span>
              <span className="text-[#FF5722] font-bold">39ms</span>
            </div>
          </div>
          <div className="w-full bg-[#F4F4F5] h-1.5 rounded-full overflow-hidden flex">
            <div className="w-3/5 bg-emerald-500 h-full" />
            <div className="w-1/4 bg-[#FFD0C2] h-full" />
            <div className="w-3/20 bg-[#FF5722] h-full" />
          </div>
        </div>
      ),
    },
    {
      id: 'integration-panels',
      title: 'Integration Panels',
      category: 'Communication',
      description:
        'Interactive webhook configuration drawer with secret token masking, payload simulation, and live response code testing.',
      spec: 'Headers Inspector // Payload Sandbox',
      preview: (
        <div className="p-3 bg-[#F4F4F5] rounded-[12px] border border-[#E5E7EB] font-mono text-[10px] space-y-2">
          <div className="flex justify-between items-center pb-1 border-b border-[#E5E7EB]">
            <span className="font-semibold text-[#111827]">POST /v1/webhooks</span>
            <span className="px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">200 OK</span>
          </div>
          <div className="p-2 rounded bg-white border border-[#E5E7EB] text-[9px] text-[#4B5563] space-y-1">
            <div>authorization: Bearer **********</div>
            <div>content-type: application/json</div>
            <div className="text-[#FF5722]">{'{ "status": "executed", "duration": 18ms }'}</div>
          </div>
        </div>
      ),
    },
    {
      id: 'notification-patterns',
      title: 'Notification Patterns',
      category: 'Communication',
      description:
        'Escalation alerts, real-time toast updates, Slack channel dispatches, and SMS incident notifications with payload previews.',
      spec: 'Multi-Channel Push // Slack & SMS',
      preview: (
        <div className="p-3.5 bg-white rounded-[12px] border border-[#E5E7EB] space-y-2 font-mono text-[10px]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="font-semibold text-[#111827]">INCIDENT RESOLVED</span>
          </div>
          <p className="text-xs text-[#4B5563] font-sans leading-snug">
            Webhook queue dropped from 4,000 back to 0. Auto-remediation script executed in 84ms.
          </p>
          <div className="text-[9px] text-[#9CA3AF] flex justify-between pt-1 border-t border-[#E5E7EB]">
            <span>Channel: #ops-telemetry</span>
            <span>Just now</span>
          </div>
        </div>
      ),
    },
    {
      id: 'form-patterns',
      title: 'Form Patterns',
      category: 'Data',
      description:
        'Declarative JSON schema forms with field-level syntax validation, parameter dry-run testing, and auto-complete dropdowns.',
      spec: 'Schema Validation // Dry-Run Testing',
      preview: (
        <div className="p-3 bg-white rounded-[12px] border border-[#E5E7EB] space-y-2 font-mono text-[10px]">
          <div>
            <span className="text-[#4B5563] text-[9px]">Trigger Event Name</span>
            <div className="p-1.5 rounded bg-[#F4F4F5] border border-[#E5E7EB] text-[#111827] mt-0.5">
              customer.subscription.renewed
            </div>
          </div>
          <div>
            <span className="text-[#4B5563] text-[9px]">Execution Mode</span>
            <div className="flex items-center justify-between p-1.5 rounded bg-[#FFF1EC] border border-[#FFD0C2] text-[#FF5722] mt-0.5 font-bold">
              <span>Immediate Edge Run</span>
              <span>Sub-40ms</span>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const filtered =
    activeCategory === 'All'
      ? patterns
      : patterns.filter((p) => p.category === activeCategory);

  return (
    <div className="w-full bg-[#FDFDFD] overflow-hidden">
      {/* 1. Hero Section */}
      <section className="relative pt-16 pb-16 md:pt-24 md:pb-24 px-4 sm:px-6 max-w-7xl mx-auto text-center">
        <SectionReveal>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4F4F5] border border-[#E5E7EB] text-xs font-mono font-semibold text-[#4B5563] mb-6 shadow-xs">
            <Sparkles size={13} className="text-[#FF5722] fill-[#FF5722]" />
            <span>UI Architecture // Component Library</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-medium tracking-tight text-[#111827] leading-[1.08] max-w-4xl mx-auto mb-6">
            <ScrollReveal
              size="xl"
              align="center"
              enableBlur={true}
              baseOpacity={0.1}
              baseRotation={2}
              blurStrength={3}
              staggerDelay={0.04}
              threshold={0.5}
            >
              Discover crafted <span className="text-[#FF5722]">interface patterns.</span>
            </ScrollReveal>
          </h1>

          <p className="text-base sm:text-lg text-[#4B5563] font-normal leading-relaxed max-w-2xl mx-auto mb-10">
            Explore how PaperFlow&apos;s interface patterns help engineering and operations teams build
            clear, powerful operational workflows with rigorous visual consistency.
          </p>

          {/* Pattern Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-medium font-mono transition-all ${
                    isActive
                      ? 'bg-[#FF5722] text-white shadow-xs font-semibold'
                      : 'bg-[#F4F4F5] text-[#4B5563] hover:text-[#111827] border border-[#E5E7EB]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </SectionReveal>
      </section>

      {/* 2. Pattern Gallery Grid with Stagger */}
      <section className="px-4 sm:px-6 max-w-7xl mx-auto pb-24">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {filtered.map((item) => (
            <StaggerItem key={item.id} className="h-full">
              <div className="group h-full rounded-[16px] bg-white border border-[#E5E7EB] p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-all hover:border-[#FF5722]">
                <div>
                  {/* Visual Preview Container */}
                  <div className="mb-5 overflow-hidden rounded-[12px]">{item.preview}</div>

                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-[#FF5722] px-2 py-0.5 rounded bg-[#FFF1EC]">
                      {item.category}
                    </span>
                    <span className="text-[10px] font-mono text-[#9CA3AF]">{item.spec}</span>
                  </div>

                  <h3 className="text-xl font-medium tracking-tight text-[#111827] mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#4B5563] font-normal leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-[#E5E7EB] flex items-center justify-between text-xs font-mono text-[#4B5563]">
                  <span>Component Pattern</span>
                  <span className="text-[#111827] group-hover:text-[#FF5722] transition-colors flex items-center gap-1 font-medium">
                    Inspect specs <ArrowUpRight size={13} />
                  </span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* 3. Final CTA */}
      <section className="py-20 px-4 sm:px-6 max-w-5xl mx-auto border-t border-[#E5E7EB] text-center">
        <SectionReveal className="rounded-[16px] border border-[#E5E7EB] bg-[#F4F4F5] p-8 sm:p-14 shadow-xs relative overflow-hidden">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5E7EB] text-xs font-mono font-semibold text-[#FF5722] mb-4">
            <Sparkles size={13} className="fill-[#FF5722]" />
            <span>Unified Design Architecture</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-[#111827] leading-tight mb-4 max-w-2xl mx-auto">
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
              Ready to build workflows with PaperFlow patterns?
            </ScrollReveal>
          </h2>

          <p className="text-base sm:text-lg text-[#4B5563] max-w-xl mx-auto mb-8 leading-relaxed">
            Every pattern shown above is available as a reusable, accessible component block in our
            core platform design system.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/plans-pricing"
              className="px-7 py-3 rounded-[8px] bg-[#FF5722] hover:bg-[#E64A19] text-white font-medium text-sm shadow-xs transition-all flex items-center gap-2"
            >
              <span>Explore Plans & Pricing</span>
              <ArrowUpRight size={15} />
            </Link>
            <Link
              href="/"
              className="px-6 py-3 rounded-[8px] bg-white border border-[#E5E7EB] text-[#111827] font-medium text-sm hover:bg-[#F4F4F5] transition-all"
            >
              Back to Home
            </Link>
          </div>
        </SectionReveal>
      </section>
    </div>
  );
}

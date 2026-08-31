'use client';

import React from 'react';
import Link from 'next/link';
import {
  Sparkles,
  ArrowUpRight,
  Cpu,
  Database,
  ShieldCheck,
  Activity,
  ArrowRight,
  Layers,
} from 'lucide-react';
import { ScrollReveal as SectionReveal, StaggerContainer, StaggerItem } from '@/components/animations';
import { ScrollReveal } from '@/components/lightswind/scroll-reveal';

export default function FrameworksContent() {
  const frameworks = [
    {
      title: 'Workflow Automation',
      tag: 'STATE MACHINE ENGINE',
      description:
        'Declarative state machines, automated exponential retry backoff, exception fallbacks, and sub-40ms multi-hop execution pipelines.',
      icon: Cpu,
      stats: 'Sub-40ms Execution SLA',
      spec: 'DAG Orchestration',
    },
    {
      title: 'Data & Integrations',
      tag: 'REAL-TIME CDC & STREAMING',
      description:
        'Bi-directional change data capture (CDC), zero-egress database pushes to Snowflake, and unified REST/Webhook event streaming.',
      icon: Database,
      stats: '14,000 evt/s Throughput',
      spec: 'Bi-Directional Bus',
    },
    {
      title: 'Approvals & Orchestration',
      tag: 'HUMAN-IN-THE-LOOP',
      description:
        'Multi-stage approval gates, dual-key authorization for high-value transactions, and team escalation hierarchies with complete audit trails.',
      icon: Layers,
      stats: 'Zero Manual Overhead',
      spec: 'Role-Based Routing',
    },
    {
      title: 'Analytics & Intelligence',
      tag: 'OBSERVABILITY & TELEMETRY',
      description:
        'Real-time throughput telemetry, anomaly detection, predictive latency routing, and continuous p50/p95/p99 execution benchmarks.',
      icon: Activity,
      stats: '99.99% Uptime Guarantee',
      spec: 'Global Edge Health',
    },
    {
      title: 'Security & Governance',
      tag: 'SOC2 & ZERO-TRUST',
      description:
        'Audited SOC2 Type II compliance, end-to-end envelope encryption, automated API token rotation, and private VPC deployment options.',
      icon: ShieldCheck,
      stats: 'SOC2 Type II Audited',
      spec: 'Zero-Trust Protocol',
    },
  ];

  const architectureStages = [
    { step: '01', name: 'Data', label: 'Ingestion Sources', desc: 'PostgreSQL, Stripe, Webhooks, APIs' },
    { step: '02', name: 'Connect', label: 'Unified Connector', desc: 'Real-time CDC & bi-directional sync' },
    { step: '03', name: 'Workflow', label: 'Declarative Engine', desc: 'Visual logic nodes & conditional DAG' },
    { step: '04', name: 'Automation', label: 'Edge Execution', desc: 'Sub-40ms runtime & automated retries' },
    { step: '05', name: 'Intelligence', label: 'Telemetry & Rules', desc: 'Anomaly detection & smart routing' },
    { step: '06', name: 'Outcome', label: 'Verified Result', desc: 'Zero errors, automated ledger, real-time SLA' },
  ];

  const examples = [
    {
      title: 'Customer Onboarding',
      category: 'Growth & Product Operations',
      metric: '< 1.2s Total Cycle',
      description:
        'Triggered instantly upon user signup. Verifies identity data, seeds PostgreSQL workspace records, issues Stripe trial subscriptions, and posts team welcome alerts in Slack.',
      tags: ['Webhook Ingestion', 'PostgreSQL CDC', 'Stripe Billing', 'Slack Bot'],
    },
    {
      title: 'Invoice Approval & Payout',
      category: 'Finance & Compliance',
      metric: '74% Less Admin Drag',
      description:
        'Ingests invoice PDFs via OCR webhook, cross-checks budget caps with ERP databases, routes approvals to finance managers if over $10,000, and triggers automated payouts.',
      tags: ['Optical Ingestion', 'Approval Gates', 'ERP Sync', 'Dual-Key Auth'],
    },
    {
      title: 'Incident Management & Rollback',
      category: 'DevOps & Reliability',
      metric: '< 45s Recovery Time',
      description:
        'Monitors Datadog p99 latency spikes. Automatically spins up a dedicated Slack incident room, pages the on-call engineer, and executes an automated GitHub rollback script.',
      tags: ['Datadog Trigger', 'Incident Room', 'Auto-Rollback', 'PagerDuty'],
    },
    {
      title: 'Data Synchronization',
      category: 'Data Engineering',
      metric: 'Zero-Loss Replication',
      description:
        'Captures changes across distributed production PostgreSQL instances and continuously streams transformed events into Snowflake data warehouses without compute spikes.',
      tags: ['PostgreSQL Stream', 'CDC Pipeline', 'Snowflake Push', 'SOC2 Validated'],
    },
  ];

  return (
    <div className="w-full bg-[#FDFDFD] overflow-hidden">
      {/* 1. Hero Section */}
      <section className="relative pt-16 pb-16 md:pt-24 md:pb-24 px-4 sm:px-6 max-w-7xl mx-auto text-center">
        <SectionReveal>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4F4F5] border border-[#E5E7EB] text-xs font-mono font-semibold text-[#4B5563] mb-6 shadow-xs">
            <Sparkles size={13} className="text-[#FF5722] fill-[#FF5722]" />
            <span>Architectural Blueprints // Engine Spec</span>
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
              Frameworks for <span className="text-[#FF5722]">powerful workflows.</span>
            </ScrollReveal>
          </h1>

          <p className="text-base sm:text-lg text-[#4B5563] font-normal leading-relaxed max-w-2xl mx-auto mb-10">
            PaperFlow provides structured foundations and modular execution engines for building
            reliable, high-throughput operational workflows without fragile custom glue code.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="#architecture"
              className="px-6 py-2.5 rounded-[8px] bg-[#FF5722] hover:bg-[#E64A19] text-white text-xs font-mono font-semibold transition-all shadow-xs flex items-center gap-2"
            >
              <span>Explore Architecture</span>
              <ArrowRight size={13} />
            </a>
            <Link
              href="/plans-pricing"
              className="px-6 py-2.5 rounded-[8px] bg-white border border-[#E5E7EB] text-[#111827] text-xs font-mono font-semibold hover:bg-[#F4F4F5] transition-all"
            >
              Deploy Blueprint
            </Link>
          </div>
        </SectionReveal>
      </section>

      {/* 2. Framework Cards Section with Stagger */}
      <section className="px-4 sm:px-6 max-w-7xl mx-auto pb-24">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {frameworks.map((fw, idx) => {
            const Icon = fw.icon;
            return (
              <StaggerItem key={idx} className="h-full">
                <div className="group h-full rounded-[16px] bg-white border border-[#E5E7EB] p-7 flex flex-col justify-between shadow-xs hover:shadow-md transition-all hover:border-[#FF5722]">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-10 h-10 rounded-[10px] bg-[#FFF1EC] border border-[#FFD0C2] flex items-center justify-center text-[#FF5722] shadow-xs group-hover:scale-105 transition-transform">
                        <Icon size={18} />
                      </div>
                      <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-[#FF5722] px-2 py-0.5 rounded bg-[#FFF1EC]">
                        {fw.tag}
                      </span>
                    </div>

                    <h3 className="text-xl font-medium tracking-tight text-[#111827] mb-2">
                      {fw.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#4B5563] font-normal leading-relaxed mb-6">
                      {fw.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#E5E7EB] flex items-center justify-between text-xs font-mono">
                    <span className="text-emerald-700 font-semibold">{fw.stats}</span>
                    <span className="text-[#111827] group-hover:text-[#FF5722] transition-colors flex items-center gap-1 font-medium">
                      Explore <ArrowUpRight size={13} />
                    </span>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </section>

      {/* 3. Visual Architecture Section */}
      <section id="architecture" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto border-t border-[#E5E7EB]">
        <SectionReveal className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#FF5722] mb-2">
            END-TO-END PIPELINE TOPOLOGY
          </div>
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-[#111827]">
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
              The PaperFlow Execution Architecture
            </ScrollReveal>
          </h2>
          <p className="text-sm sm:text-base text-[#4B5563] mt-3 leading-relaxed">
            Data flows seamlessly from ingestion sources through our declarative orchestration engine,
            triggering sub-second automated outcomes.
          </p>
        </SectionReveal>

        {/* Visual Architecture Flow Diagram */}
        <SectionReveal delay={0.1}>
          <div className="rounded-[16px] border border-[#E5E7EB] bg-white p-6 sm:p-10 shadow-xs">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 relative">
              {architectureStages.map((stage, idx) => (
                <div
                  key={idx}
                  className="relative rounded-[12px] bg-[#F4F4F5] border border-[#E5E7EB] p-5 flex flex-col justify-between hover:border-[#FF5722] transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono font-bold text-[#FF5722]">{stage.step}</span>
                      <span className="w-2 h-2 rounded-full bg-[#FF5722]" />
                    </div>
                    <h4 className="text-lg font-medium text-[#111827] mb-1">{stage.name}</h4>
                    <div className="text-[11px] font-mono font-semibold text-[#111827] mb-2">
                      {stage.label}
                    </div>
                    <p className="text-xs text-[#4B5563] leading-relaxed">{stage.desc}</p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#E5E7EB]/80 text-[10px] font-mono text-[#9CA3AF]">
                    {idx < 5 ? '→ Next Stage' : '✓ Execution Output'}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>
      </section>

      {/* 4. Workflow Examples (Real Applications) with Stagger */}
      <section className="py-20 px-4 sm:px-6 max-w-7xl mx-auto border-t border-[#E5E7EB]">
        <SectionReveal className="max-w-3xl mb-14">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#FF5722] mb-2">
            PRODUCTION BLUEPRINTS
          </div>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-[#111827]">
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
              Proven framework applications in production
            </ScrollReveal>
          </h2>
          <p className="text-sm sm:text-base text-[#4B5563] mt-2 leading-relaxed">
            Real enterprise deployment topologies operating with sub-second execution speeds.
          </p>
        </SectionReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {examples.map((ex, idx) => (
            <StaggerItem key={idx} className="h-full">
              <div className="h-full rounded-[16px] bg-white border border-[#E5E7EB] p-7 flex flex-col justify-between shadow-xs hover:shadow-md transition-all hover:border-[#FF5722]">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-[#9CA3AF] uppercase">{ex.category}</span>
                    <span className="text-xs font-mono font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      {ex.metric}
                    </span>
                  </div>

                  <h3 className="text-xl font-medium tracking-tight text-[#111827] mb-2">
                    {ex.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed mb-6">
                    {ex.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {ex.tags.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded-md bg-[#F4F4F5] border border-[#E5E7EB] text-[10px] font-mono text-[#4B5563]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-6 border-t border-[#E5E7EB] flex items-center justify-between text-xs font-mono">
                  <span className="text-[#9CA3AF]">Ready-to-Deploy</span>
                  <span className="text-[#FF5722] font-semibold flex items-center gap-1">
                    Inspect Nodes <ArrowUpRight size={13} />
                  </span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* 5. Final CTA */}
      <section className="py-20 px-4 sm:px-6 max-w-5xl mx-auto border-t border-[#E5E7EB] text-center">
        <SectionReveal className="rounded-[16px] border border-[#E5E7EB] bg-[#F4F4F5] p-8 sm:p-14 shadow-xs relative overflow-hidden">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5E7EB] text-xs font-mono font-semibold text-[#FF5722] mb-4">
            <Sparkles size={13} className="fill-[#FF5722]" />
            <span>Ready for Production</span>
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
              Deploy production-grade frameworks with PaperFlow.
            </ScrollReveal>
          </h2>

          <p className="text-base sm:text-lg text-[#4B5563] max-w-xl mx-auto mb-8 leading-relaxed">
            Eliminate complex glue code. Select an architectural blueprint, plug in your credentials,
            and launch automated pipelines with verified reliability.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/plans-pricing"
              className="px-7 py-3 rounded-[8px] bg-[#FF5722] hover:bg-[#E64A19] text-white font-medium text-sm shadow-xs transition-all flex items-center gap-2"
            >
              <span>Get Started with PaperFlow</span>
              <ArrowUpRight size={15} />
            </Link>
            <Link
              href="/interface-patterns"
              className="px-6 py-3 rounded-[8px] bg-white border border-[#E5E7EB] text-[#111827] font-medium text-sm hover:bg-[#F4F4F5] transition-all"
            >
              View Interface Patterns
            </Link>
          </div>
        </SectionReveal>
      </section>
    </div>
  );
}

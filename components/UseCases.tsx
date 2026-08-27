'use client';

import React, { useState } from 'react';
import {
  Briefcase,
  CreditCard,
  Users,
  Terminal,
  ArrowUpRight,
  Sparkles,
  Check,
  Zap,
} from 'lucide-react';
import { ScrollReveal } from './animations';

export default function UseCases() {
  const [activeTab, setActiveTab] = useState(0);

  const cases = [
    {
      title: 'Operations',
      department: 'Operations & Logistics',
      icon: Briefcase,
      summary: 'Automate recurring operational processes and handoffs.',
      details:
        'Eliminate manual coordination across operations with scheduled triggers, automated exception routing, and cross-team notifications.',
      tag: 'PROCESS FLOWS',
      stat: '74% Less Admin Drag',
      blueprint: {
        trigger: 'PostgreSQL Order Status Change',
        condition: 'status == "pending_verification"',
        action: 'Dispatch Carrier API Webhook & Notify Ops Slack',
        speed: '18ms execution',
      },
    },
    {
      title: 'Finance',
      department: 'Finance & Compliance',
      icon: CreditCard,
      summary: 'Streamline approvals, reporting, and financial workflows.',
      details:
        'Automate invoice matching, reconciliation logs, and budget threshold approvals directly connected into Stripe and ERP systems.',
      tag: 'AUDIT-READY',
      stat: 'Zero Discrepancies',
      blueprint: {
        trigger: 'Stripe Payout Event Ingest',
        condition: 'amount >= $10,000 && tax_id_verified',
        action: 'Dual-Key Approval Gate & Ledger Auto-Reconcile',
        speed: '32ms execution',
      },
    },
    {
      title: 'Sales',
      department: 'Revenue & Go-to-Market',
      icon: Users,
      summary: 'Automate repetitive sales processes and keep teams aligned.',
      details:
        'Route high-intent leads instantly, update CRM pipeline stages in real time, and trigger personalized onboarding sequences without delays.',
      tag: 'LEAD ROUTING',
      stat: '<60s Lead Velocity',
      blueprint: {
        trigger: 'Inbound Enterprise Demo Form',
        condition: 'company_size > 100 && region == "NA"',
        action: 'Enrich via Clearbit, Assign Tier 1 AE, Book Calendar',
        speed: '< 1.2s total routing',
      },
    },
    {
      title: 'IT / Engineering',
      department: 'DevOps & Reliability',
      icon: Terminal,
      summary: 'Connect systems and automate technical workflows.',
      details:
        'Automate incident triaging, schema change alerts, GitHub deployment webhooks, and multi-region database failover triggers.',
      tag: 'DEVOPS & EDGE',
      stat: 'Sub-40ms Response',
      blueprint: {
        trigger: 'Datadog p99 Latency Alert',
        condition: 'error_rate > 1.5% for 3 consecutive minutes',
        action: 'Create Incident Room, Page On-Call, Trigger Safe Rollback',
        speed: '24ms webhook dispatch',
      },
    },
  ];

  const current = cases[activeTab];
  const Icon = current.icon;

  return (
    <section id="use-cases" className="relative py-14 sm:py-18 md:py-22 px-4 sm:px-6 bg-[#FDFDFD] border-t border-[#E5E7EB] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <ScrollReveal className="max-w-3xl mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4F4F5] border border-[#E5E7EB] text-xs font-mono font-semibold text-[#4B5563] mb-4 shadow-xs">
            <Sparkles size={13} className="text-[#FF5722] fill-[#FF5722]" />
            <span>Cross-Functional Impact // Department Blueprints</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-medium tracking-tight text-[#111827] leading-[1.06] mb-4">
            Automate work across your entire organization.
          </h2>

          <p className="font-serif text-lg sm:text-xl text-[#4B5563] font-normal leading-[1.65]">
            PaperFlow adapts to your unique operational topology, providing tailored automation
            blueprints for every department from engineering to financial operations.
          </p>
        </ScrollReveal>

        {/* Department Switcher Tabs */}
        <ScrollReveal delay={0.08} className="mb-8">
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-[12px] bg-[#F4F4F5] border border-[#E5E7EB] max-w-2xl">
            {cases.map((item, idx) => {
              const TabIcon = item.icon;
              const isActive = activeTab === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`flex-1 min-w-[120px] py-2.5 px-4 rounded-[8px] text-xs font-medium transition-all flex items-center justify-center gap-2 ${
                    isActive
                      ? 'bg-white text-[#111827] shadow-xs font-semibold border border-[#E5E7EB]'
                      : 'text-[#4B5563] hover:text-[#111827]'
                  }`}
                >
                  <TabIcon size={14} className={isActive ? 'text-[#FF5722]' : 'text-[#9CA3AF]'} />
                  <span>{item.title}</span>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Active Department Deep Showcase */}
        <ScrollReveal delay={0.12}>
          <div className="rounded-[16px] bg-white border border-[#E5E7EB] p-6 sm:p-10 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Details (5 cols) */}
              <div className="lg:col-span-5 space-y-4">
                <div className="flex items-center gap-2.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#FF5722] font-semibold px-2.5 py-1 rounded bg-[#FFF1EC] border border-[#FFD0C2]">
                    {current.tag}
                  </span>
                  <span className="text-xs font-mono text-[#9CA3AF]">
                    {current.department}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-[#111827]">
                  {current.summary}
                </h3>

                <p className="font-serif text-sm sm:text-base text-[#4B5563] font-normal leading-relaxed">
                  {current.details}
                </p>

                <div className="pt-4 flex items-center gap-4">
                  <div className="p-3 rounded-[10px] bg-[#F4F4F5] border border-[#E5E7EB]">
                    <div className="text-xs font-mono text-[#9CA3AF]">Impact Benchmark</div>
                    <div className="text-lg font-mono font-bold text-emerald-700">
                      {current.stat}
                    </div>
                  </div>

                  <a
                    href="/interface-patterns"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-[#FF5722] font-semibold hover:text-[#E64A19] transition-colors"
                  >
                    <span>View Node Blueprint</span>
                    <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>

              {/* Right Visual Execution Blueprint (7 cols) */}
              <div className="lg:col-span-7">
                <div className="rounded-[12px] bg-[#121212] border border-neutral-800 p-5 sm:p-6 text-white font-mono text-xs shadow-lg space-y-3">
                  <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
                    <span className="text-[#FF5722] font-bold text-[11px] uppercase tracking-wider flex items-center gap-1.5">
                      <Zap size={13} /> Active Flow Pipeline
                    </span>
                    <span className="text-[10px] text-neutral-400 bg-neutral-900 px-2 py-0.5 rounded border border-neutral-800">
                      {current.blueprint.speed}
                    </span>
                  </div>

                  {/* Stage 1: Trigger */}
                  <div className="p-3 rounded bg-neutral-900 border border-neutral-800 space-y-1">
                    <div className="text-[10px] text-neutral-400 uppercase">01. INGESTION TRIGGER</div>
                    <div className="text-neutral-200 font-semibold">{current.blueprint.trigger}</div>
                  </div>

                  {/* Stage 2: Condition Filter */}
                  <div className="p-3 rounded bg-neutral-900/80 border border-neutral-800 space-y-1">
                    <div className="text-[10px] text-[#FF5722] uppercase">02. EVALUATION RULE</div>
                    <div className="text-neutral-300 font-mono">{current.blueprint.condition}</div>
                  </div>

                  {/* Stage 3: Automated Action */}
                  <div className="p-3 rounded bg-emerald-950/40 border border-emerald-800/60 space-y-1">
                    <div className="text-[10px] text-emerald-400 uppercase flex items-center gap-1">
                      <Check size={11} /> 03. DETERMINISTIC OUTCOME
                    </div>
                    <div className="text-emerald-200 font-semibold">{current.blueprint.action}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

'use client';

import React, { useState } from 'react';
import {
  Database,
  GitBranch,
  CreditCard,
  Cloud,
  Terminal,
  Activity,
  Layers,
  ArrowUpRight,
  Sparkles,
  Zap,
} from 'lucide-react';
import { ScrollReveal as SectionReveal } from './animations';
import { ScrollReveal } from '@/components/lightswind/scroll-reveal';

export default function Integrations() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Database & Cloud', 'CI/CD & DevOps', 'Payments & Telemetry'];

  const integrations = [
    {
      name: 'PostgreSQL',
      category: 'Database & Cloud',
      status: 'Native Connector',
      icon: Database,
      highlight: 'Sub-second read/write CDC',
      protocol: 'pg_logical_cdc',
    },
    {
      name: 'GitHub',
      category: 'CI/CD & DevOps',
      status: 'Webhook Trigger',
      icon: GitBranch,
      highlight: 'Automated release deployment',
      protocol: 'push.event.v2',
    },
    {
      name: 'Stripe',
      category: 'Payments & Telemetry',
      status: 'Event Bus',
      icon: CreditCard,
      highlight: 'Instant charge & dispute sync',
      protocol: 'stripe_event_bus',
    },
    {
      name: 'AWS S3 & Lambda',
      category: 'Database & Cloud',
      status: 'SDK Connected',
      icon: Cloud,
      highlight: 'Serverless execution triggers',
      protocol: 's3:ObjectCreated',
    },
    {
      name: 'Linear',
      category: 'CI/CD & DevOps',
      status: 'Two-Way Sync',
      icon: Terminal,
      highlight: 'Automated status escalation',
      protocol: 'linear.webhook',
    },
    {
      name: 'Redis',
      category: 'Database & Cloud',
      status: 'Low-Latency Cache',
      icon: Zap,
      highlight: 'Sub-5ms queue processing',
      protocol: 'redis.streams',
    },
    {
      name: 'Snowflake',
      category: 'Database & Cloud',
      status: 'Batch & Stream',
      icon: Layers,
      highlight: 'Zero-egress warehouse push',
      protocol: 'snowpipe_stream',
    },
    {
      name: 'Datadog',
      category: 'Payments & Telemetry',
      status: 'Telemetry Stream',
      icon: Activity,
      highlight: 'Live failure rate alerting',
      protocol: 'datadog.monitors',
    },
  ];

  const filtered =
    selectedCategory === 'All'
      ? integrations
      : integrations.filter((item) => item.category === selectedCategory);

  return (
    <section id="integrations" className="relative py-14 sm:py-18 md:py-22 px-4 sm:px-6 bg-[#FDFDFD] border-t border-[#E5E7EB] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <SectionReveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4F4F5] border border-[#E5E7EB] text-xs font-mono font-semibold text-[#4B5563] mb-4 shadow-xs">
              <Sparkles size={13} className="text-[#FF5722] fill-[#FF5722]" />
              <span>Unified Ecosystem // Native Connectors</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-medium tracking-tight text-[#111827] leading-[1.06] mb-3">
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
                Works with the tools your team already uses.
              </ScrollReveal>
            </h2>

            <p className="text-base sm:text-lg text-[#4B5563] font-normal leading-relaxed">
              Connect PaperFlow with the systems your team already relies on. Eliminate custom glue code with pre-built bi-directional connectors.
            </p>
          </div>

          {/* Category Selector Pills */}
          <div className="flex flex-wrap items-center gap-2 shrink-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#FF5722] text-white font-semibold shadow-xs'
                    : 'bg-[#F4F4F5] text-[#4B5563] hover:text-[#111827] border border-[#E5E7EB]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </SectionReveal>

        {/* High-Density Architectural Connector Matrix */}
        <SectionReveal delay={0.1}>
          <div className="rounded-[16px] border border-[#E5E7EB] bg-white overflow-hidden shadow-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#E5E7EB] border-b border-[#E5E7EB]">
              {filtered.slice(0, 4).map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 flex flex-col justify-between hover:bg-[#FDFDFD] transition-colors group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-8 h-8 rounded-[8px] bg-[#F4F4F5] border border-[#E5E7EB] flex items-center justify-center text-[#111827] group-hover:text-[#FF5722] transition-colors">
                          <IconComponent size={16} />
                        </div>
                        <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold">
                          {item.status}
                        </span>
                      </div>

                      <h3 className="text-base font-semibold text-[#111827] flex items-center justify-between">
                        <span>{item.name}</span>
                        <ArrowUpRight size={13} className="text-[#9CA3AF] group-hover:text-[#FF5722] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </h3>

                      <p className="text-xs font-mono text-[#9CA3AF] mt-0.5">
                        {item.protocol}
                      </p>

                      <p className="text-xs text-[#4B5563] mt-3 leading-relaxed">
                        {item.highlight}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Second row if more items */}
            {filtered.length > 4 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#E5E7EB]">
                {filtered.slice(4, 8).map((item, idx) => {
                  const IconComponent = item.icon;
                  return (
                    <div
                      key={idx}
                      className="p-6 flex flex-col justify-between hover:bg-[#FDFDFD] transition-colors group"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <div className="w-8 h-8 rounded-[8px] bg-[#F4F4F5] border border-[#E5E7EB] flex items-center justify-center text-[#111827] group-hover:text-[#FF5722] transition-colors">
                            <IconComponent size={16} />
                          </div>
                          <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold">
                            {item.status}
                          </span>
                        </div>

                        <h3 className="text-base font-semibold text-[#111827] flex items-center justify-between">
                          <span>{item.name}</span>
                          <ArrowUpRight size={13} className="text-[#9CA3AF] group-hover:text-[#FF5722] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </h3>

                        <p className="text-xs font-mono text-[#9CA3AF] mt-0.5">
                          {item.protocol}
                        </p>

                        <p className="text-xs text-[#4B5563] mt-3 leading-relaxed">
                          {item.highlight}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Bottom Status Ribbon */}
            <div className="px-6 py-3.5 bg-[#F4F4F5]/60 border-t border-[#E5E7EB] flex items-center justify-between text-xs font-mono text-[#4B5563]">
              <span>50+ additional custom webhook & REST endpoints supported</span>
              <a
                href="/frameworks"
                className="text-[#FF5722] hover:text-[#E64A19] font-semibold flex items-center gap-1 transition-colors"
              >
                Inspect Schema Specs <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

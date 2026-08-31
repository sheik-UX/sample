'use client';

import React from 'react';
import { Sparkles, ShieldCheck, Activity } from 'lucide-react';
import { ScrollReveal as SectionReveal } from './animations';
import { ScrollReveal } from '@/components/lightswind/scroll-reveal';

export default function TrustProof() {
  const metrics = [
    {
      value: '10K+',
      label: 'Workflows automated',
      badge: 'Sub-second DAG',
      trend: '+42% this quarter',
    },
    {
      value: '99.9%',
      label: 'Workflow reliability',
      badge: 'Zero cold starts',
      live: true,
    },
    {
      value: '50+',
      label: 'Connected integrations',
      badge: 'Native CDC & REST',
      trend: 'Bi-directional',
    },
    {
      value: '24/7',
      label: 'Operational visibility',
      badge: 'Realtime telemetry',
      trend: 'Audit-ready',
    },
  ];

  const partners = [
    { name: 'Linear', tag: 'Issue Sync', protocol: 'Webhook' },
    { name: 'Stripe', tag: 'Payment Events', protocol: 'Event Bus' },
    { name: 'Vercel', tag: 'Deploy Webhooks', protocol: 'Edge Run' },
    { name: 'Supabase', tag: 'Realtime DB', protocol: 'CDC Stream' },
    { name: 'GitHub', tag: 'CI Triggers', protocol: 'Action Bus' },
    { name: 'Raycast', tag: 'Quick Commands', protocol: 'REST API' },
  ];

  return (
    <section className="relative py-12 sm:py-16 bg-[#FDFDFD] border-y border-[#E5E7EB] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <SectionReveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#FF5722] mb-2">
              <Sparkles size={12} className="fill-[#FF5722]" />
              <span>Verified Reliability // Enterprise Benchmarks</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-[44px] font-medium tracking-tight text-[#111827] leading-[1.1]">
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
                Engineered for mission-critical operations.
              </ScrollReveal>
            </h2>
          </div>
          <div className="flex items-center gap-3 text-xs font-mono text-[#4B5563] shrink-0">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              All Systems Operational
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 text-[#9CA3AF]">
              <ShieldCheck size={14} className="text-[#FF5722]" />
              SOC2 Type II
            </span>
          </div>
        </SectionReveal>

        {/* Integrated Hairline Metrics Console */}
        <SectionReveal delay={0.08}>
          <div className="rounded-[16px] border border-[#E5E7EB] bg-white shadow-xs overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#E5E7EB]">
              {metrics.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-8 flex flex-col justify-between hover:bg-[#FDFDFD] transition-colors group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#F4F4F5] text-[#4B5563] font-medium border border-[#E5E7EB]">
                      {item.badge}
                    </span>
                    {item.live ? (
                      <span className="flex items-center gap-1 text-[10px] font-mono text-emerald-600 font-semibold">
                        <Activity size={12} className="animate-pulse" /> Live SLA
                      </span>
                    ) : (
                      <span className="text-[10px] font-mono text-[#9CA3AF]">
                        {item.trend}
                      </span>
                    )}
                  </div>

                  <div>
                    <div className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#111827] font-sans group-hover:text-[#FF5722] transition-colors">
                      {item.value}
                    </div>
                    <div className="text-xs font-mono text-[#4B5563] mt-2 font-medium">
                      {item.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Authentic Monochromatic Partner Ecosystem Strip */}
            <div className="px-6 py-4 bg-[#F4F4F5]/60 border-t border-[#E5E7EB] flex flex-col md:flex-row md:items-center justify-between gap-4">
              <span className="text-xs font-mono text-[#9CA3AF] uppercase tracking-wider">
                Production-Tested Connectors
              </span>
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                {partners.map((partner, i) => (
                  <div
                    key={i}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] bg-white border border-[#E5E7EB] text-xs font-mono text-[#111827] shadow-2xs hover:border-[#FF5722] transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF5722]" />
                    <span className="font-semibold">{partner.name}</span>
                    <span className="text-[10px] text-[#9CA3AF] font-normal hidden sm:inline">
                      ({partner.protocol})
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

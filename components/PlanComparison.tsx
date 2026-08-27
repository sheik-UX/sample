'use client';

import React, { useState } from 'react';
import { Check, ArrowRight, Sparkle } from '@phosphor-icons/react';
import { ScrollReveal, StaggerContainer, StaggerItem } from './animations';

export default function PlanComparison() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');

  const plans = [
    {
      name: 'Starter Flow',
      subtitle: 'For independent creators and early workflows',
      priceMonthly: 29,
      priceAnnual: 24,
      popular: false,
      ctaText: 'Start Free Trial',
      ctaHref: '/plans-pricing',
      ctaVariant: 'secondary',
      features: [
        'Up to 10 active smart workflows',
        '5,000 automated tasks per month',
        'Standard data transformer nodes',
        'Community & email support',
        'Basic webhook triggers',
      ],
    },
    {
      name: 'Flow Platform Pro',
      subtitle: 'Complete workflow automation for growing teams',
      priceMonthly: 89,
      priceAnnual: 69,
      popular: true,
      ctaText: 'Get Started with Pro',
      ctaHref: '/plans-pricing',
      ctaVariant: 'primary',
      features: [
        'Unlimited active smart workflows',
        '100,000 automated tasks per month',
        'Sub-second real-time transformer nodes',
        'Custom Webhooks & REST API access',
        'Team collaboration & role management',
        'Priority Slack & 4-hour SLA support',
        'Audit logs & compliance reports',
      ],
    },
    {
      name: 'Flow Enterprise',
      subtitle: 'For organizations running mission-critical workloads',
      priceMonthly: 289,
      priceAnnual: 229,
      popular: false,
      ctaText: 'Talk to Engineering',
      ctaHref: '#contact',
      ctaVariant: 'secondary',
      features: [
        'Dedicated sub-second execution engine',
        'Uncapped custom monthly task volume',
        'Custom webhooks & private VPC bus',
        'SOC2 Type II compliance reports',
        'Dedicated platform architect',
        '1-hour critical response SLA',
        'Custom integrations development',
      ],
    },
  ];

  const comparisonRows = [
    { feature: 'Active Workflows', starter: '10', pro: 'Unlimited', enterprise: 'Unlimited' },
    { feature: 'Monthly Task Volume', starter: '5,000', pro: '100,000', enterprise: 'Custom / Uncapped' },
    { feature: 'Execution Speed', starter: 'Standard (250ms)', pro: 'Sub-40ms Edge', enterprise: 'Dedicated Sub-15ms' },
    { feature: 'Webhook Triggers', starter: 'Basic', pro: 'Advanced Multi-Hop', enterprise: 'Custom Enterprise Bus' },
    { feature: 'Team Seats', starter: 'Up to 3', pro: 'Up to 25 included', enterprise: 'Unlimited' },
    { feature: 'Support Level', starter: 'Email (24h)', pro: 'Priority Slack (4h)', enterprise: 'Dedicated Architect (1h)' },
  ];

  return (
    <section id="plans" className="relative py-14 sm:py-18 md:py-22 px-6 bg-[#FDFDFD] border-t border-[#E5E7EB] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header & Billing Cycle Toggle */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4F4F5] border border-[#E5E7EB] text-xs font-mono font-semibold text-[#4B5563] mb-4">
            <Sparkle size={13} weight="fill" className="text-[#FF5722]" />
            <span>Plan Comparison & Pricing</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-medium tracking-tight text-[#111827] leading-[1.06] mb-4">
            Compare plans designed for scale and clarity.
          </h2>

          <p className="font-serif text-lg sm:text-xl text-[#4B5563] font-normal leading-[1.65]">
            Transparent subscription models with zero hidden compute penalties. Upgrade, downgrade,
            or cancel anytime with prorated billing.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="mt-8 inline-flex items-center p-1 rounded-[8px] bg-[#F4F4F5] border border-[#E5E7EB]">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-2 rounded-[6px] text-xs font-medium transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-white text-[#111827] shadow-xs font-semibold'
                  : 'text-[#4B5563] hover:text-[#111827]'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-4 py-2 rounded-[6px] text-xs font-medium transition-all flex items-center gap-1.5 ${
                billingCycle === 'annual'
                  ? 'bg-white text-[#111827] shadow-xs font-semibold'
                  : 'text-[#4B5563] hover:text-[#111827]'
              }`}
            >
              <span>Annual Billing</span>
              <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-[#FFF1EC] text-[#FF5722] font-semibold">
                Save 20%
              </span>
            </button>
          </div>
        </ScrollReveal>

        {/* 3 Plan Cards with Stagger */}
        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch mb-16">
          {plans.map((plan) => {
            const price = billingCycle === 'annual' ? plan.priceAnnual : plan.priceMonthly;
            return (
              <StaggerItem key={plan.name} className="h-full">
                <div
                  className={`relative h-full rounded-[16px] p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 ${
                    plan.popular
                      ? 'bg-white border-2 border-[#FF5722] shadow-lg ring-4 ring-[#FF5722]/10 -translate-y-1'
                      : 'bg-white border border-[#E5E7EB] shadow-xs hover:shadow-md hover:border-[#FF5722]'
                  }`}
                >
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-[#FF5722] text-white text-[11px] font-mono font-semibold tracking-wider uppercase shadow-xs">
                      Recommended for Teams
                    </div>
                  )}

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-medium text-[#111827]">{plan.name}</h3>
                    </div>

                    <p className="text-xs text-[#4B5563] min-h-[36px] mb-6 leading-relaxed">
                      {plan.subtitle}
                    </p>

                    {/* Price */}
                    <div className="flex items-baseline gap-1.5 pb-6 border-b border-[#E5E7EB]">
                      <span className="text-4xl sm:text-5xl font-medium tracking-tight text-[#111827]">
                        ${price}
                      </span>
                      <span className="text-xs font-mono text-[#4B5563]">/ user / month</span>
                    </div>

                    {/* Features List */}
                    <div className="py-6 space-y-3">
                      <div className="text-xs font-mono uppercase font-semibold text-[#4B5563] tracking-wider mb-2">
                        Included Capabilities:
                      </div>
                      {plan.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-[#111827]">
                          <Check
                            size={14}
                            weight="bold"
                            className={plan.popular ? 'text-[#FF5722] mt-0.5 shrink-0' : 'text-emerald-600 mt-0.5 shrink-0'}
                          />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Conversion Action Button */}
                  <div className="pt-6 border-t border-[#E5E7EB]">
                    <a
                      href={plan.ctaHref}
                      className={`w-full py-3 px-4 rounded-[8px] font-medium text-xs flex items-center justify-center gap-2 transition-all ${
                        plan.popular
                          ? 'bg-[#FF5722] hover:bg-[#E64A19] text-white shadow-xs'
                          : 'bg-[#F4F4F5] hover:bg-[#E5E7EB] border border-[#E5E7EB] text-[#111827]'
                      }`}
                    >
                      <span>{plan.ctaText}</span>
                      <ArrowRight size={13} weight="bold" />
                    </a>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Detailed Plan Comparison Table */}
        <ScrollReveal delay={0.1}>
          <div className="rounded-[16px] border border-[#E5E7EB] bg-white p-6 sm:p-8 overflow-x-auto shadow-xs">
            <div className="text-sm font-medium text-[#111827] mb-4">
              Feature & Workflow Node Matrix
            </div>

            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-[#E5E7EB] text-[#4B5563] font-mono">
                  <th className="py-3 pr-4 font-semibold">CAPABILITY</th>
                  <th className="py-3 px-4 font-semibold">STARTER FLOW</th>
                  <th className="py-3 px-4 font-semibold text-[#FF5722]">FLOW PLATFORM PRO</th>
                  <th className="py-3 pl-4 font-semibold">FLOW ENTERPRISE</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E7EB]">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#FDFDFD] transition-colors">
                    <td className="py-3.5 pr-4 font-medium text-[#111827]">{row.feature}</td>
                    <td className="py-3.5 px-4 text-[#4B5563]">{row.starter}</td>
                    <td className="py-3.5 px-4 font-medium text-[#111827]">{row.pro}</td>
                    <td className="py-3.5 pl-4 text-[#4B5563]">{row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

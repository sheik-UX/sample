'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Check,
  ArrowUpRight,
  Sparkles,
  ShieldCheck,
  Zap,
  Layers,
  Database,
  Minus,
  Plus,
} from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/animations';

export default function PlansPricingContent() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const plans = [
    {
      name: 'Starter',
      subtitle: 'For individuals and small teams getting started with workflow automation.',
      priceMonthly: 29,
      priceAnnual: 24,
      popular: false,
      ctaText: 'Start Free Trial',
      ctaVariant: 'secondary',
      features: [
        'Up to 10 active smart workflows',
        '5,000 automated tasks per month',
        'Standard data transformer nodes',
        'Basic webhook triggers',
        'Community & email support',
        '7-day execution logs retention',
      ],
    },
    {
      name: 'Growth',
      subtitle: 'For growing teams that need more automation, speed, and integrations.',
      priceMonthly: 89,
      priceAnnual: 69,
      popular: true,
      ctaText: 'Get Started with Growth',
      ctaVariant: 'primary',
      features: [
        'Unlimited active smart workflows',
        '100,000 automated tasks per month',
        'Sub-40ms real-time execution engine',
        'Custom Webhooks & REST API access',
        'Team collaboration & role management',
        'Priority Slack & 4-hour SLA support',
        'Audit logs & 90-day retention',
      ],
    },
    {
      name: 'Scale',
      subtitle: 'For organizations running mission-critical complex operational workflows.',
      priceMonthly: 289,
      priceAnnual: 229,
      popular: false,
      ctaText: 'Contact Enterprise',
      ctaVariant: 'secondary',
      features: [
        'Dedicated multi-region cluster',
        'Custom / uncapped task volume',
        'Sub-15ms dedicated edge runtime',
        'Custom enterprise bus & Kafka streams',
        'Dedicated solutions architect (1h SLA)',
        'SOC2 Type II compliance reports',
        'Unlimited retention & VPC deployment',
      ],
    },
  ];

  const comparisonRows = [
    { feature: 'Active Workflows', starter: '10', growth: 'Unlimited', scale: 'Unlimited' },
    { feature: 'Monthly Task Volume', starter: '5,000', growth: '100,000', scale: 'Uncapped Custom' },
    { feature: 'Execution Speed', starter: 'Standard (250ms)', growth: 'Sub-40ms Edge', scale: 'Dedicated Sub-15ms' },
    { feature: 'Webhook & CDC Connectors', starter: 'Standard', growth: 'Advanced Multi-Hop', scale: 'Custom Event Bus' },
    { feature: 'Team Seats', starter: 'Up to 3', growth: 'Up to 25 included', scale: 'Unlimited' },
    { feature: 'Data & Log Retention', starter: '7 Days', growth: '90 Days', scale: 'Unlimited / Custom' },
    { feature: 'Support Level', starter: 'Email (24h)', growth: 'Priority Slack (4h)', scale: 'Dedicated Architect (1h)' },
    { feature: 'Security & Compliance', starter: 'Standard SSL', growth: 'RBAC & Audit Trail', scale: 'SOC2 Type II & SSO' },
  ];

  const includedCategories = [
    {
      icon: Zap,
      title: 'Workflow Orchestration Engine',
      description:
        'Declarative visual pipeline editor, automated retry backoff, exception handling nodes, and conditional execution trees.',
    },
    {
      icon: Database,
      title: 'Data & Change Data Capture (CDC)',
      description:
        'Bi-directional synchronization across PostgreSQL, Snowflake, Stripe, and webhook payloads with zero egress penalties.',
    },
    {
      icon: Layers,
      title: 'Observability & Live Telemetry',
      description:
        'Continuous throughput heatmaps, p95/p99 latency tracking, automated drop alerts, and complete execution payload inspection.',
    },
    {
      icon: ShieldCheck,
      title: 'Security & Enterprise Governance',
      description:
        'Audited SOC2 Type II compliance, end-to-end envelope encryption, automated API token rotation, and private VPC deployment options.',
    },
  ];

  const faqs = [
    {
      q: 'Can I change my plan or billing cycle anytime?',
      a: 'Yes. You can upgrade, downgrade, or switch between monthly and annual billing at any time from your account settings. Prorated credits are automatically applied.',
    },
    {
      q: 'How are monthly tasks counted?',
      a: 'A task is counted each time an automated workflow node completes an action (such as executing a data transformer, triggering a webhook, or making a database update). Ingest triggers that filter out events do not consume task credits.',
    },
    {
      q: 'What happens if we exceed our monthly task limit?',
      a: 'We never shut down mission-critical workflows unexpectedly. If you approach your limit, you receive proactive alerts, and tasks continue running with a nominal overage rate or a one-click tier upgrade.',
    },
    {
      q: 'Do you offer custom enterprise security agreements or BAA?',
      a: 'Yes. Scale and Enterprise customers receive custom Service Level Agreements (99.99% uptime), custom Data Processing Agreements (DPA), Business Associate Agreements (BAA), and dedicated private VPC hosting.',
    },
    {
      q: 'Is there a free trial available?',
      a: 'Yes. Every new account receives a 14-day free trial of the Growth plan with full platform access and 10,000 complimentary task runs. No credit card is required to begin.',
    },
  ];

  return (
    <div className="w-full bg-[#FDFDFD] overflow-hidden">
      {/* 1. Hero Section */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 px-4 sm:px-6 max-w-7xl mx-auto text-center">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4F4F5] border border-[#E5E7EB] text-xs font-mono font-semibold text-[#4B5563] mb-6 shadow-xs">
            <Sparkles size={13} className="text-[#FF5722] fill-[#FF5722]" />
            <span>Plans & Pricing // Scale & Clarity</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-medium tracking-tight text-[#111827] leading-[1.08] max-w-4xl mx-auto mb-6">
            Plans designed for <span className="text-[#FF5722]">scale and clarity.</span>
          </h1>

          <p className="font-serif text-base sm:text-lg text-[#4B5563] font-normal leading-relaxed max-w-2xl mx-auto mb-10">
            Choose a plan based on your workflow and operational needs. Transparent subscription
            models with sub-second execution, enterprise security, and prorated billing.
          </p>

          {/* Monthly / Annual Billing Toggle */}
          <div className="inline-flex items-center p-1.5 rounded-full bg-[#F4F4F5] border border-[#E5E7EB] shadow-xs">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-5 py-2 rounded-full text-xs font-medium transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-white text-[#111827] shadow-xs font-semibold'
                  : 'text-[#4B5563] hover:text-[#111827]'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-5 py-2 rounded-full text-xs font-medium transition-all flex items-center gap-2 ${
                billingCycle === 'annual'
                  ? 'bg-[#FF5722] text-white shadow-xs font-semibold'
                  : 'text-[#4B5563] hover:text-[#111827]'
              }`}
            >
              <span>Annual Billing</span>
              <span
                className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold ${
                  billingCycle === 'annual' ? 'bg-white/20 text-white' : 'bg-[#FFF1EC] text-[#FF5722]'
                }`}
              >
                Save 20%
              </span>
            </button>
          </div>
        </ScrollReveal>
      </section>

      {/* 2. Pricing Cards Grid with Stagger */}
      <section className="px-4 sm:px-6 max-w-7xl mx-auto pb-20">
        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => {
            const price = billingCycle === 'annual' ? plan.priceAnnual : plan.priceMonthly;
            return (
              <StaggerItem key={idx} className="h-full">
                <div
                  className={`relative h-full rounded-[16px] p-8 flex flex-col justify-between transition-all ${
                    plan.popular
                      ? 'bg-white border-2 border-[#FF5722] shadow-xl ring-4 ring-[#FF5722]/10'
                      : 'bg-white border border-[#E5E7EB] shadow-xs hover:shadow-md hover:border-[#FF5722]'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-[#FF5722] text-white text-[10px] font-mono font-semibold uppercase tracking-wider shadow-xs">
                      Most Popular Choice
                    </div>
                  )}

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-medium tracking-tight text-[#111827]">{plan.name}</h3>
                      <span className="text-xs font-mono font-semibold text-[#FF5722] px-2 py-0.5 rounded bg-[#FFF1EC]">
                        {billingCycle === 'annual' ? 'Billed Annually' : 'Billed Monthly'}
                      </span>
                    </div>

                    <p className="text-xs text-[#4B5563] mb-6 leading-relaxed min-h-[36px]">
                      {plan.subtitle}
                    </p>

                    <div className="flex items-baseline gap-1.5 pb-6 mb-6 border-b border-[#E5E7EB]">
                      <span className="text-4xl sm:text-5xl font-medium tracking-tight text-[#111827]">
                        ${price}
                      </span>
                      <span className="text-xs font-mono text-[#4B5563]">/ user / month</span>
                    </div>

                    <div className="space-y-3 mb-8">
                      <div className="text-xs font-mono font-semibold text-[#111827] uppercase tracking-wider mb-2">
                        Included Capabilities:
                      </div>
                      {plan.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5 text-xs text-[#4B5563]">
                          <div className="mt-0.5 p-0.5 rounded-full bg-[#FFF1EC] text-[#FF5722] shrink-0">
                            <Check size={11} strokeWidth={3} />
                          </div>
                          <span className="leading-snug">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <button
                      className={`w-full py-3 px-4 rounded-[8px] text-xs font-semibold font-mono tracking-wide transition-all active:scale-[0.98] flex items-center justify-center gap-1.5 ${
                        plan.popular
                          ? 'bg-[#FF5722] hover:bg-[#E64A19] text-white shadow-xs'
                          : 'bg-[#F4F4F5] hover:bg-[#E5E7EB] text-[#111827] border border-[#E5E7EB]'
                      }`}
                    >
                      <span>{plan.ctaText}</span>
                      <ArrowUpRight size={13} strokeWidth={2.5} />
                    </button>
                    <p className="text-[10px] text-center font-mono text-[#9CA3AF] mt-2.5">
                      14-day trial • No card required
                    </p>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </section>

      {/* 3. Compare Features Table */}
      <section className="py-20 px-4 sm:px-6 max-w-7xl mx-auto border-t border-[#E5E7EB]">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#FF5722] mb-2">
            DETAILED BREAKDOWN
          </div>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-[#111827]">
            Compare features across plans
          </h2>
          <p className="font-serif text-sm sm:text-base text-[#4B5563] mt-2">
            Every specification you need to make an informed architectural decision.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="rounded-[16px] border border-[#E5E7EB] bg-white overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-[#E5E7EB] bg-[#F4F4F5] font-mono text-[11px] uppercase tracking-wider text-[#4B5563]">
                    <th className="py-4 px-6 font-semibold text-[#111827]">Platform Feature</th>
                    <th className="py-4 px-6 font-semibold">Starter</th>
                    <th className="py-4 px-6 font-semibold text-[#FF5722]">Growth (Pro)</th>
                    <th className="py-4 px-6 font-semibold">Scale</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E5E7EB]">
                  {comparisonRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-[#FDFDFD] transition-colors">
                      <td className="py-3.5 px-6 font-medium text-[#111827]">{row.feature}</td>
                      <td className="py-3.5 px-6 font-mono text-[#4B5563]">{row.starter}</td>
                      <td className="py-3.5 px-6 font-mono text-[#FF5722] font-semibold">{row.growth}</td>
                      <td className="py-3.5 px-6 font-mono text-[#111827] font-semibold">{row.scale}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 4. What's Included Categories with Stagger */}
      <section className="py-20 px-4 sm:px-6 max-w-7xl mx-auto border-t border-[#E5E7EB]">
        <ScrollReveal className="max-w-3xl mb-14">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#FF5722] mb-2">
            CORE FOUNDATION
          </div>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-[#111827]">
            What&apos;s included in every PaperFlow deployment
          </h2>
          <p className="font-serif text-sm sm:text-base text-[#4B5563] mt-2 leading-relaxed">
            Regardless of your plan size, you inherit our resilient infrastructure foundations.
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {includedCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <StaggerItem key={idx} className="h-full">
                <div className="h-full p-6 rounded-[16px] bg-white border border-[#E5E7EB] shadow-xs flex flex-col justify-between hover:border-[#FF5722] transition-all">
                  <div>
                    <div className="w-10 h-10 rounded-[10px] bg-[#FFF1EC] border border-[#FFD0C2] flex items-center justify-center text-[#FF5722] mb-4 shadow-xs">
                      <Icon size={18} />
                    </div>
                    <h3 className="text-base font-semibold text-[#111827] mb-2 leading-snug">{cat.title}</h3>
                    <p className="text-xs text-[#4B5563] leading-relaxed">{cat.description}</p>
                  </div>
                  <div className="pt-4 mt-6 border-t border-[#E5E7EB] text-[10px] font-mono text-[#9CA3AF]">
                    Standard Infrastructure
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </section>

      {/* 5. Pricing Frequently Asked Questions with Stagger */}
      <section className="py-20 px-4 sm:px-6 max-w-4xl mx-auto border-t border-[#E5E7EB]">
        <ScrollReveal className="text-center mb-12">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#FF5722] mb-2">
            BILLING CLARITY
          </div>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-[#111827]">
            Pricing questions answered
          </h2>
        </ScrollReveal>

        <StaggerContainer className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <StaggerItem key={idx}>
                <div className="rounded-[16px] border border-[#E5E7EB] bg-white overflow-hidden transition-all shadow-xs hover:border-[#FF5722]">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="text-base font-medium text-[#111827]">{faq.q}</span>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center border transition-all shrink-0 ${
                        isOpen
                          ? 'bg-[#FFF1EC] border-[#FFD0C2] text-[#FF5722]'
                          : 'bg-[#F4F4F5] border-[#E5E7EB] text-[#4B5563]'
                      }`}
                    >
                      {isOpen ? <Minus size={13} strokeWidth={2.5} /> : <Plus size={13} strokeWidth={2.5} />}
                    </div>
                  </button>
                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-5 pt-1 font-serif text-sm text-[#4B5563] font-normal leading-relaxed border-t border-[#E5E7EB]/60">
                      {faq.a}
                    </div>
                  )}
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </section>

      {/* 6. Final CTA */}
      <section className="py-20 px-4 sm:px-6 max-w-5xl mx-auto border-t border-[#E5E7EB] text-center">
        <ScrollReveal className="rounded-[16px] border border-[#E5E7EB] bg-[#F4F4F5] p-8 sm:p-14 shadow-xs relative overflow-hidden">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5E7EB] text-xs font-mono font-semibold text-[#FF5722] mb-4">
            <Sparkles size={13} className="fill-[#FF5722]" />
            <span>Instant Deployment</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-[#111827] leading-tight mb-4 max-w-2xl mx-auto">
            Start automating workflows in minutes.
          </h2>

          <p className="font-serif text-base sm:text-lg text-[#4B5563] max-w-xl mx-auto mb-8 leading-relaxed">
            Begin your 14-day free trial on Growth tier. Connect your databases, configure your rule
            nodes, and watch execution latency drop to sub-40ms.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button className="px-7 py-3 rounded-[8px] bg-[#FF5722] hover:bg-[#E64A19] text-white font-medium text-sm shadow-xs transition-all flex items-center gap-2">
              <span>Start Free 14-Day Trial</span>
              <ArrowUpRight size={15} />
            </button>
            <Link
              href="/"
              className="px-6 py-3 rounded-[8px] bg-white border border-[#E5E7EB] text-[#111827] font-medium text-sm hover:bg-[#F4F4F5] transition-all"
            >
              Back to Home
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}

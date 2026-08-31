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
import { ScrollReveal as SectionReveal, StaggerContainer, StaggerItem } from '@/components/animations';
import { ScrollReveal } from '@/components/lightswind/scroll-reveal';

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
        'Email support (24h SLA)',
        'Basic webhook triggers',
        'Community templates library',
      ],
    },
    {
      name: 'Growth (Pro)',
      subtitle: 'For scaling teams executing mission-critical operational processes.',
      priceMonthly: 89,
      priceAnnual: 69,
      popular: true,
      badge: 'RECOMMENDED FOR TEAMS',
      ctaText: 'Get Started with Pro',
      ctaVariant: 'primary',
      features: [
        'Unlimited active smart workflows',
        '100,000 automated tasks per month',
        'Sub-second real-time transformer nodes',
        'Custom Webhooks & REST API access',
        'Team collaboration & role permissions',
        'Priority Slack & 4-hour SLA support',
        'Audit logs & compliance exports',
        'Custom domain webhooks',
      ],
    },
    {
      name: 'Scale (Enterprise)',
      subtitle: 'For enterprises demanding custom compute, private VPC, and strict compliance.',
      priceMonthly: 289,
      priceAnnual: 229,
      popular: false,
      ctaText: 'Contact Architecture Team',
      ctaVariant: 'secondary',
      features: [
        'Dedicated sub-second execution engine',
        'Uncapped custom monthly task volume',
        'Custom webhooks & private VPC bus',
        'SOC2 Type II & HIPAA compliance reports',
        'Dedicated platform architect',
        '1-hour critical incident SLA',
        'Custom integrations development',
        '99.99% uptime guarantee',
      ],
    },
  ];

  const comparisonRows = [
    { feature: 'Active Workflows', starter: '10', growth: 'Unlimited', scale: 'Unlimited' },
    { feature: 'Monthly Task Volume', starter: '5,000', growth: '100,000', scale: 'Custom / Uncapped' },
    { feature: 'Execution Cycle Latency', starter: 'Standard (250ms)', growth: 'Sub-40ms Edge', scale: 'Dedicated Sub-15ms' },
    { feature: 'Webhook Architecture', starter: 'Basic Single-Trigger', growth: 'Advanced Multi-Hop', scale: 'Custom Enterprise Bus' },
    { feature: 'Team Seats', starter: 'Up to 3 seats', growth: 'Up to 25 included', scale: 'Unlimited seats' },
    { feature: 'Audit & Compliance', starter: '30-day logs', growth: '1-year logs + export', scale: 'Custom retention + SOC2' },
    { feature: 'Support Level', starter: 'Email (24h)', growth: 'Priority Slack (4h)', scale: 'Dedicated Architect (1h)' },
  ];

  const includedCategories = [
    {
      icon: Zap,
      title: 'Sub-Second Execution',
      description: 'Edge-native runtime engine processing workflow DAGs with deterministic low latency.',
    },
    {
      icon: Database,
      title: 'Real-Time Data CDC',
      description: 'Bi-directional change data capture for PostgreSQL, Stripe, GitHub, and REST APIs.',
    },
    {
      icon: ShieldCheck,
      title: 'Enterprise Security',
      description: 'End-to-end encrypted payloads, role-based access control, and audited compliance logs.',
    },
    {
      icon: Layers,
      title: 'Modular Node Patterns',
      description: 'Pre-built interface tokens, conditional routing gates, and custom JavaScript transform nodes.',
    },
  ];

  const faqs = [
    {
      q: 'Can I switch between plans at any time?',
      a: 'Yes, you can upgrade, downgrade, or change your billing cycle at any point. Upgrades take effect immediately with prorated billing, while downgrades take effect at the end of the current billing cycle.',
    },
    {
      q: 'What happens if our team exceeds monthly task volume?',
      a: 'We never pause or drop production workflows. If you exceed your plan tier, additional tasks are billed at a predictable nominal rate, or you can seamlessly upgrade to the next tier without operational interruption.',
    },
    {
      q: 'Is there a free trial available?',
      a: 'Yes! We offer a 14-day full-access trial for our Growth (Pro) plan with no credit card required upfront. You can test live database connections, build multi-hop workflows, and evaluate latency.',
    },
    {
      q: 'How does enterprise VPC peering work?',
      a: 'Scale Enterprise plans can be deployed within your private AWS, GCP, or Azure Virtual Private Cloud (VPC) with dedicated NAT gateways and isolated database subnet access.',
    },
    {
      q: 'What payment methods do you support?',
      a: 'We accept all major credit cards via Stripe, as well as ACH bank transfers, wire transfers, and custom annual PO invoicing for Enterprise contracts.',
    },
  ];

  return (
    <div className="w-full bg-[#FDFDFD] overflow-hidden">
      {/* 1. Hero Section */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 px-4 sm:px-6 max-w-7xl mx-auto text-center">
        <SectionReveal>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4F4F5] border border-[#E5E7EB] text-xs font-mono font-semibold text-[#4B5563] mb-6 shadow-xs">
            <Sparkles size={13} className="text-[#FF5722] fill-[#FF5722]" />
            <span>Plans & Pricing // Scale & Clarity</span>
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
              Plans designed for <span className="text-[#FF5722]">scale and clarity.</span>
            </ScrollReveal>
          </h1>

          <p className="text-base sm:text-lg text-[#4B5563] font-normal leading-relaxed max-w-2xl mx-auto mb-10">
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
        </SectionReveal>
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
        <SectionReveal className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#FF5722] mb-2">
            DETAILED BREAKDOWN
          </div>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-[#111827]">
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
              Compare features across plans
            </ScrollReveal>
          </h2>
          <p className="text-sm sm:text-base text-[#4B5563] mt-2">
            Every specification you need to make an informed architectural decision.
          </p>
        </SectionReveal>

        <SectionReveal delay={0.1}>
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
        </SectionReveal>
      </section>

      {/* 4. What's Included Categories with Stagger */}
      <section className="py-20 px-4 sm:px-6 max-w-7xl mx-auto border-t border-[#E5E7EB]">
        <SectionReveal className="max-w-3xl mb-14">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#FF5722] mb-2">
            CORE FOUNDATION
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
              What&apos;s included in every PaperFlow deployment
            </ScrollReveal>
          </h2>
          <p className="text-sm sm:text-base text-[#4B5563] mt-2 leading-relaxed">
            Regardless of your plan size, you inherit our resilient infrastructure foundations.
          </p>
        </SectionReveal>

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
        <SectionReveal className="text-center mb-12">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#FF5722] mb-2">
            BILLING CLARITY
          </div>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-[#111827]">
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
              Pricing questions answered
            </ScrollReveal>
          </h2>
        </SectionReveal>

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
                    <div className="px-5 sm:px-6 pb-5 pt-1 text-sm text-[#4B5563] font-normal leading-relaxed border-t border-[#E5E7EB]/60">
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
        <SectionReveal className="rounded-[16px] border border-[#E5E7EB] bg-[#F4F4F5] p-8 sm:p-14 shadow-xs relative overflow-hidden">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5E7EB] text-xs font-mono font-semibold text-[#FF5722] mb-4">
            <Sparkles size={13} className="fill-[#FF5722]" />
            <span>Instant Deployment</span>
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
              Start automating workflows in minutes.
            </ScrollReveal>
          </h2>

          <p className="text-base sm:text-lg text-[#4B5563] max-w-xl mx-auto mb-8 leading-relaxed">
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
        </SectionReveal>
      </section>
    </div>
  );
}

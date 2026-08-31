'use client';

import React from 'react';
import Link from 'next/link';
import {
  Sparkles,
  ArrowUpRight,
  Star,
  Users,
  Code,
  DollarSign,
  Award,
} from 'lucide-react';
import { ScrollReveal as SectionReveal, StaggerContainer, StaggerItem } from '@/components/animations';
import { ScrollReveal } from '@/components/lightswind/scroll-reveal';

export default function CreatorsContent() {
  const benefits = [
    {
      title: 'Build Once, Deploy Many',
      icon: Code,
      desc: 'Package your custom workflow nodes, schemas, and automation recipes into verified templates used across thousands of teams.',
      tag: 'MODULAR ASSETS',
    },
    {
      title: 'Monetize Blueprints',
      icon: DollarSign,
      desc: 'Earn recurring revenue when teams subscribe to your published operational frameworks and certified industry blueprints.',
      tag: 'RECURRING EARNINGS',
    },
    {
      title: 'Global Distribution',
      icon: Users,
      desc: 'Get your blueprints featured directly in PaperFlow’s in-app library, reaching engineering leads, founders, and operations architects.',
      tag: 'IN-APP AUDIENCE',
    },
    {
      title: 'Certified Creator Badge',
      icon: Award,
      desc: 'Receive verified Neuform & PaperFlow architect credentials, priority API access, and private access to our platform roadmap.',
      tag: 'VERIFIED STATUS',
    },
  ];

  const creators = [
    {
      name: 'Jordan Hayes',
      handle: '@jordanhayes',
      role: 'Product Engineer',
      metric: '14 Templates • 38k Runs',
      bio: 'Author of the sub-40ms edge routing engine blueprint and high-throughput multi-region Kafka connector.',
      quote:
        'PaperFlow gave me the declarative foundation to transform my internal engineering scripts into profitable, modular templates.',
      tags: ['Kafka Streaming', 'Edge Routing', 'PostgreSQL CDC'],
    },
    {
      name: 'Sourasith Phomhome',
      handle: '@madebysourasith',
      role: 'UI Architect & Creator',
      metric: 'Neuform Featured Template',
      bio: 'Creator of the Paperflow Pricing & Comparison Section pattern library and responsive Bento Grid layout systems.',
      quote:
        'Building on PaperFlow combines rigorous typographic rhythm with the flexibility to assemble high-conversion SaaS interfaces in record time.',
      tags: ['Bento Grid UI', 'Tailwind 3.4', 'Conversion Patterns'],
    },
    {
      name: 'Elena Rostova',
      handle: '@erostova',
      role: 'VP of Platform Operations',
      metric: 'Enterprise Creator of the Year',
      bio: 'Architect of the zero-discrepancy financial reconciliation workflow and automated SOC2 Type II compliance logger.',
      quote:
        'We eliminated over 2,800 hours of manual operational drag using community-published PaperFlow blueprints.',
      tags: ['Finance Orchestration', 'Stripe CDC', 'Audit Compliance'],
    },
  ];

  const lifecycle = [
    { step: '01', title: 'Design', desc: 'Create custom workflow nodes and test edge latency in the PaperFlow IDE' },
    { step: '02', title: 'Package', desc: 'Bundle inputs, parameters, and documentation into a reusable blueprint' },
    { step: '03', title: 'Certify', desc: 'Submit for automated SOC2 safety verification and performance benchmarking' },
    { step: '04', title: 'Publish', desc: 'Distribute instantly across our community marketplace with custom pricing' },
    { step: '05', title: 'Earn', desc: 'Receive automatic monthly payouts as teams execute your workflow nodes' },
  ];

  return (
    <div className="w-full bg-[#FDFDFD] overflow-hidden">
      {/* 1. Hero Section */}
      <section className="relative pt-16 pb-16 md:pt-24 md:pb-24 px-4 sm:px-6 max-w-7xl mx-auto text-center">
        <SectionReveal>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4F4F5] border border-[#E5E7EB] text-xs font-mono font-semibold text-[#4B5563] mb-6 shadow-xs">
            <Sparkles size={13} className="text-[#FF5722] fill-[#FF5722]" />
            <span>Creator Network // Certified Architects</span>
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
              Empowering the creators building <span className="text-[#FF5722]">modern operations.</span>
            </ScrollReveal>
          </h1>

          <p className="text-base sm:text-lg text-[#4B5563] font-normal leading-relaxed max-w-2xl mx-auto mb-10">
            Join an elite network of product engineers, workflow designers, and operational architects
            creating reusable templates and frameworks for modern companies.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="#apply"
              className="px-6 py-2.5 rounded-[8px] bg-[#FF5722] hover:bg-[#E64A19] text-white text-xs font-mono font-semibold transition-all shadow-xs flex items-center gap-2"
            >
              <span>Apply as a Creator</span>
              <ArrowUpRight size={14} />
            </a>
            <Link
              href="/interface-patterns"
              className="px-6 py-2.5 rounded-[8px] bg-white border border-[#E5E7EB] text-[#111827] text-xs font-mono font-semibold hover:bg-[#F4F4F5] transition-all"
            >
              Explore Public Blueprints
            </Link>
          </div>
        </SectionReveal>
      </section>

      {/* 2. Creator Benefits Grid with Stagger */}
      <section className="px-4 sm:px-6 max-w-7xl mx-auto pb-24">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <StaggerItem key={idx} className="h-full">
                <div className="group h-full rounded-[16px] bg-white border border-[#E5E7EB] p-7 flex flex-col justify-between shadow-xs hover:shadow-md transition-all hover:border-[#FF5722]">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-10 h-10 rounded-[10px] bg-[#FFF1EC] border border-[#FFD0C2] flex items-center justify-center text-[#FF5722] shadow-xs group-hover:scale-105 transition-transform">
                        <Icon size={18} />
                      </div>
                      <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-[#FF5722] px-2 py-0.5 rounded bg-[#FFF1EC]">
                        {b.tag}
                      </span>
                    </div>

                    <h3 className="text-xl font-medium tracking-tight text-[#111827] mb-2">
                      {b.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#4B5563] font-normal leading-relaxed">
                      {b.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-6 border-t border-[#E5E7EB] text-[11px] font-mono text-[#9CA3AF]">
                    PaperFlow Creator Program
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </section>

      {/* 3. Featured Creator Showcases with Stagger */}
      <section className="py-20 px-4 sm:px-6 max-w-7xl mx-auto border-t border-[#E5E7EB]">
        <SectionReveal className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#FF5722] mb-2">
            FEATURED ARCHITECTS
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
              Meet the architects shaping PaperFlow
            </ScrollReveal>
          </h2>
          <p className="text-sm sm:text-base text-[#4B5563] mt-3 leading-relaxed">
            Real creators building production blueprints, interface systems, and enterprise pipelines.
          </p>
        </SectionReveal>

        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {creators.map((c, idx) => (
            <StaggerItem key={idx} className="h-full">
              <div className="h-full rounded-[16px] bg-white border border-[#E5E7EB] p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-all hover:border-[#FF5722]">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-[8px] bg-[#FF5722] text-white flex items-center justify-center font-bold text-sm shadow-xs">
                        {c.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="text-base font-semibold text-[#111827]">{c.name}</h4>
                        <div className="text-xs font-mono text-[#FF5722]">{c.handle}</div>
                      </div>
                    </div>
                    <div className="flex text-[#FF5722]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={13} className="fill-[#FF5722]" />
                      ))}
                    </div>
                  </div>

                  <div className="text-xs font-mono text-[#4B5563] mb-3 pb-3 border-b border-[#E5E7EB]">
                    {c.role} • {c.metric}
                  </div>

                  <blockquote className="font-serif text-sm text-[#111827] italic leading-relaxed mb-4">
                    &ldquo;{c.quote}&rdquo;
                  </blockquote>

                  <p className="text-xs text-[#4B5563] leading-relaxed mb-6">{c.bio}</p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#E5E7EB]">
                    {c.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded-md bg-[#F4F4F5] border border-[#E5E7EB] text-[10px] font-mono text-[#4B5563]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* 4. Creator Lifecycle with Stagger */}
      <section className="py-20 px-4 sm:px-6 max-w-7xl mx-auto border-t border-[#E5E7EB]">
        <SectionReveal className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#FF5722] mb-2">
            CREATOR JOURNEY
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
              How to publish your first workflow blueprint
            </ScrollReveal>
          </h2>
        </SectionReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {lifecycle.map((item, idx) => (
            <StaggerItem key={idx} className="h-full">
              <div className="h-full rounded-[12px] bg-[#F4F4F5] border border-[#E5E7EB] p-5 flex flex-col justify-between hover:border-[#FF5722] transition-all">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-[#FF5722]">{item.step}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF5722]" />
                  </div>
                  <h4 className="text-base font-semibold text-[#111827] mb-1.5">{item.title}</h4>
                  <p className="text-xs text-[#4B5563] leading-relaxed">{item.desc}</p>
                </div>
                <div className="pt-3 mt-4 border-t border-[#E5E7EB] text-[10px] font-mono text-[#9CA3AF]">
                  {idx < 4 ? 'Phase Complete →' : 'Certified Active'}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* 5. Final CTA / Apply Section */}
      <section id="apply" className="py-20 px-4 sm:px-6 max-w-5xl mx-auto border-t border-[#E5E7EB] text-center">
        <SectionReveal className="rounded-[16px] border border-[#E5E7EB] bg-[#F4F4F5] p-8 sm:p-14 shadow-xs relative overflow-hidden">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5E7EB] text-xs font-mono font-semibold text-[#FF5722] mb-4">
            <Sparkles size={13} className="fill-[#FF5722]" />
            <span>Applications Open // Q3 Cohort</span>
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
              Ready to become a certified PaperFlow creator?
            </ScrollReveal>
          </h2>

          <p className="text-base sm:text-lg text-[#4B5563] max-w-xl mx-auto mb-8 leading-relaxed">
            Apply to join our creator network. Earn revenue, distribute verified operational
            blueprints, and help teams build sub-second automated workflows.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/plans-pricing"
              className="px-7 py-3 rounded-[8px] bg-[#FF5722] hover:bg-[#E64A19] text-white font-medium text-sm shadow-xs transition-all flex items-center gap-2"
            >
              <span>Apply for Creator Program</span>
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

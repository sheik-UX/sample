'use client';

import React from 'react';
import { ArrowUpRight, Cube } from '@phosphor-icons/react';
import { ScrollReveal, StaggerContainer, StaggerItem, IllustrationReveal } from './animations';

export default function BentoGrid() {
  return (
    <section id="patterns" className="relative py-14 sm:py-18 md:py-22 px-6 max-w-7xl mx-auto bg-[#FDFDFD] overflow-hidden">
      {/* Section Introduction */}
      <ScrollReveal className="max-w-3xl mb-10 sm:mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4F4F5] border border-[#E5E7EB] text-xs font-mono font-semibold text-[#4B5563] mb-4">
          <Cube size={13} weight="fill" className="text-[#FF5722]" />
          <span>Product Capabilities // Architecture</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-medium tracking-tight text-[#111827] leading-[1.06] mb-4">
          Everything you need to build powerful workflows.
        </h2>

        <p className="font-serif text-lg sm:text-xl text-[#4B5563] font-normal leading-[1.65]">
          Modular design components, intelligent automation nodes, and sub-second execution engines
          engineered for rapid assembly and rigorous operational consistency.
        </p>
      </ScrollReveal>

      {/* Gapless Bento Grid with grid-flow-dense & Stagger */}
      <StaggerContainer className="grid grid-cols-12 grid-flow-dense gap-6">
        {/* Card 1: Refined Product Assets (col-span-7) */}
        <StaggerItem className="col-span-12 lg:col-span-7">
          <div className="h-full group relative rounded-[16px] bg-white border border-[#E5E7EB] overflow-hidden p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-all hover:border-[#FF5722]">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#FF5722]">
                  DESIGN REPOSITORY
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#F4F4F5] border border-[#E5E7EB] text-[#4B5563]">
                  1,400+ SVG TOKENS
                </span>
              </div>

              {/* Generated Original Illustration */}
              <IllustrationReveal className="rounded-[12px] overflow-hidden border border-[#E5E7EB] bg-white mb-5">
                <img
                  src="/assets/product_assets.jpg"
                  alt="Refined product assets and design system tokens"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-56 sm:h-72 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </IllustrationReveal>

              <h3 className="text-2xl sm:text-3xl font-medium text-[#111827] tracking-tight">
                Refined product assets
              </h3>

              <p className="text-sm text-[#4B5563] font-normal leading-relaxed mt-2 max-w-lg">
                Vector icon collections, accessible data charts, and production-ready SVG assets
                crafted to communicate complex software states with effortless visual hierarchy.
              </p>
            </div>

            <div className="pt-6 mt-4 border-t border-[#E5E7EB] flex items-center justify-between text-xs font-mono text-[#4B5563]">
              <span>Accessible Design System</span>
              <span className="text-[#111827] font-medium flex items-center gap-1 group-hover:text-[#FF5722] transition-colors">
                Explore Asset Index <ArrowUpRight size={13} />
              </span>
            </div>
          </div>
        </StaggerItem>

        {/* Card 2: Frameworks. (col-span-5) */}
        <StaggerItem className="col-span-12 lg:col-span-5">
          <div className="h-full group relative rounded-[16px] bg-white border border-[#E5E7EB] overflow-hidden p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-all hover:border-[#FF5722]">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#FF5722]">
                  MODERN ECOSYSTEM
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 border border-emerald-200 text-emerald-700 font-semibold">
                  NEXT.JS 14 + TS
                </span>
              </div>

              {/* Generated Original Illustration */}
              <IllustrationReveal className="rounded-[12px] overflow-hidden border border-[#E5E7EB] bg-white mb-5">
                <img
                  src="/assets/frameworks_nodes.jpg"
                  alt="Software frameworks and modular code nodes"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-48 sm:h-60 object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </IllustrationReveal>

              <h3 className="text-2xl sm:text-3xl font-medium text-[#111827] tracking-tight">
                Frameworks.
              </h3>

              <p className="text-sm text-[#4B5563] font-normal leading-relaxed mt-2">
                Native bindings for Next.js App Router, Tailwind CSS 3.4, and TypeScript.
                Drop-in components designed to hydrate instantly without runtime friction.
              </p>
            </div>

            <div className="pt-6 mt-4 border-t border-[#E5E7EB] flex items-center justify-between text-xs font-mono text-[#4B5563]">
              <span>Zero Runtime Overhead</span>
              <span className="text-[#111827] font-medium flex items-center gap-1 group-hover:text-[#FF5722] transition-colors">
                Inspect Spec <ArrowUpRight size={13} />
              </span>
            </div>
          </div>
        </StaggerItem>

        {/* Card 3: Inter Sans (col-span-5) */}
        <StaggerItem className="col-span-12 lg:col-span-5">
          <div className="h-full group relative rounded-[16px] bg-white border border-[#E5E7EB] overflow-hidden p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-all hover:border-[#FF5722]">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#FF5722]">
                  TYPOGRAPHIC SPEC
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#F4F4F5] border border-[#E5E7EB] text-[#4B5563]">
                  EDITORIAL SERIF
                </span>
              </div>

              {/* Generated Original Illustration */}
              <IllustrationReveal className="rounded-[12px] overflow-hidden border border-[#E5E7EB] bg-white mb-5">
                <img
                  src="/assets/inter_typography.jpg"
                  alt="Inter Sans typographic specimen and alignment"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-48 sm:h-60 object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </IllustrationReveal>

              <h3 className="text-2xl sm:text-3xl font-medium text-[#111827] tracking-tight">
                Inter & Newsreader
              </h3>

              <p className="text-sm text-[#4B5563] font-normal leading-relaxed mt-2">
                Strictly calibrated for display moments (64px, weight 500, line-height 1.04) and
                editorial body readability in Newsreader (16px, line-height 1.6). Balanced with JetBrains Mono.
              </p>
            </div>

            <div className="pt-6 mt-4 border-t border-[#E5E7EB] flex items-center justify-between text-xs font-mono text-[#4B5563]">
              <span>Calibrated Optical Kerning</span>
              <span className="text-[#111827] font-medium flex items-center gap-1 group-hover:text-[#FF5722] transition-colors">
                Type Scale <ArrowUpRight size={13} />
              </span>
            </div>
          </div>
        </StaggerItem>

        {/* Card 4: Sub-Second Execution Engine (col-span-7) */}
        <StaggerItem className="col-span-12 lg:col-span-7">
          <div className="h-full group relative rounded-[16px] bg-white border border-[#E5E7EB] overflow-hidden p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-all hover:border-[#FF5722]">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#FF5722]">
                  OPERATIONS ENGINE
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 border border-emerald-200 text-emerald-700 font-semibold">
                  SUB-40MS EDGE
                </span>
              </div>

              {/* Generated Original Illustration */}
              <IllustrationReveal className="rounded-[12px] overflow-hidden border border-[#E5E7EB] bg-white mb-5">
                <img
                  src="/assets/pipeline_engine.jpg"
                  alt="Sub-second data execution and automated pipeline stream"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-56 sm:h-72 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </IllustrationReveal>

              <h3 className="text-2xl sm:text-3xl font-medium text-[#111827] tracking-tight">
                Sub-Second Execution
              </h3>

              <p className="text-sm text-[#4B5563] font-normal leading-relaxed mt-2 max-w-lg">
                Automated pipelines execute in under 40 milliseconds globally across multi-region edge
                deployments. Strict SOC2 Type II compliance standards and reliable error recovery.
              </p>
            </div>

            <div className="pt-6 mt-4 border-t border-[#E5E7EB] flex items-center justify-between text-xs font-mono text-[#4B5563]">
              <span>100/100 Core Web Vitals</span>
              <span className="text-[#111827] font-medium flex items-center gap-1 group-hover:text-[#FF5722] transition-colors">
                View Benchmarks <ArrowUpRight size={13} />
              </span>
            </div>
          </div>
        </StaggerItem>
      </StaggerContainer>
    </section>
  );
}

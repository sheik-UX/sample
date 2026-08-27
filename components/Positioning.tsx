'use client';

import React from 'react';
import { ArrowUpRight, Sparkles, Check, Minus } from 'lucide-react';

export default function Positioning() {
  return (
    <section id="positioning" className="relative py-24 md:py-36 bg-canvas overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
            01 // STRATEGIC POSITIONING
          </span>
          <div className="h-[1px] w-12 bg-neutral-300" />
        </div>

        {/* Oversized Manifesto Statement */}
        <div className="max-w-5xl mb-20">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-neutral-950 leading-[1.12]">
            The web is drowning in{' '}
            <span className="text-neutral-400 line-through decoration-neutral-300 font-normal">
              algorithmic mediocrity
            </span>
            . We engineer digital artifacts that{' '}
            <span className="font-serif italic font-normal text-neutral-900 underline decoration-neutral-300 decoration-1 underline-offset-8">
              command market authority
            </span>
            .
          </h2>
          <p className="text-lg sm:text-xl text-neutral-600 font-normal leading-relaxed mt-8 max-w-3xl">
            In an era of copy-paste component kits and automated layout generators, most digital
            experiences have become interchangeable. When you look like everyone else in your space,
            you surrender your pricing power and dilute your cultural impact.
          </p>
        </div>

        {/* Asymmetric Editorial Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: The Conventional Trap */}
          <div className="lg:col-span-5 rounded-2xl border border-neutral-200/90 bg-white p-8 sm:p-10 flex flex-col justify-between shadow-fine">
            <div>
              <div className="flex items-center justify-between border-b border-neutral-100 pb-4 mb-6">
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                  THE CONVENTIONAL PATH
                </span>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-neutral-100 text-neutral-500">
                  Fragile
                </span>
              </div>

              <h3 className="text-2xl font-medium tracking-tight text-neutral-900 mb-4">
                The Homogenization Trap
              </h3>

              <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                Mass-market templates assembled by junior generalists. Over-engineered libraries
                introducing 8MB javascript bundles, sluggish Core Web Vitals, and generic visual
                tropes that look outdated within six months.
              </p>

              <ul className="space-y-3 font-mono text-xs text-neutral-500">
                <li className="flex items-start gap-2.5">
                  <Minus className="w-3.5 h-3.5 text-neutral-400 mt-0.5 shrink-0" />
                  <span>Indistinguishable SaaS card grids & stock 3D renders</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Minus className="w-3.5 h-3.5 text-neutral-400 mt-0.5 shrink-0" />
                  <span>Sluggish Lighthouse scores dragging down SEO & conversions</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Minus className="w-3.5 h-3.5 text-neutral-400 mt-0.5 shrink-0" />
                  <span>Unmaintainable spaghetti CSS & zero typographic hierarchy</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-100 text-xs font-mono text-neutral-400">
              OUTCOME: Low perceived value & high bounce rates
            </div>
          </div>

          {/* Right Column: The Monolith Architectural Standard */}
          <div className="lg:col-span-7 rounded-2xl border border-neutral-950 bg-neutral-950 text-white p-8 sm:p-12 flex flex-col justify-between shadow-editorial relative overflow-hidden">
            {/* Subtle glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between border-b border-neutral-800 pb-4 mb-6">
                <span className="text-xs font-mono uppercase tracking-wider text-blue-400">
                  THE MONOLITH PROTOCOL
                </span>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-blue-900/50 text-blue-300 border border-blue-700/50">
                  Category Moat
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-white mb-4">
                Architecture as Competitive Moat
              </h3>

              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-8 max-w-xl">
                We approach digital platforms like bespoke physical architecture. Every curve,
                spatial rhythm, custom serif accent, and fluid transition is crafted specifically for
                your brand thesis. The result is an undeniable digital flagship that communicates
                category leadership at first glance.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800">
                  <div className="flex items-center gap-2 text-blue-400 text-xs font-mono mb-1">
                    <Check className="w-3.5 h-3.5" />
                    <span>BESPOKE TYPOGRAPHY</span>
                  </div>
                  <p className="text-xs text-neutral-400">
                    High-contrast editorial pairings that evoke prestige and memorability.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800">
                  <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono mb-1">
                    <Check className="w-3.5 h-3.5" />
                    <span>SUB-SECOND RUNTIME</span>
                  </div>
                  <p className="text-xs text-neutral-400">
                    Edge-rendered Next.js with perfect 100 Core Web Vitals across every viewport.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800">
                  <div className="flex items-center gap-2 text-blue-400 text-xs font-mono mb-1">
                    <Check className="w-3.5 h-3.5" />
                    <span>RESTLESS REFINEMENT</span>
                  </div>
                  <p className="text-xs text-neutral-400">
                    60fps physics-driven animations, tactile hovers, and intentional whitespace.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800">
                  <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono mb-1">
                    <Check className="w-3.5 h-3.5" />
                    <span>ENTERPRISE RIGOR</span>
                  </div>
                  <p className="text-xs text-neutral-400">
                    Strict TypeScript, accessible semantics (WCAG AAA), and automated CI/CD.
                  </p>
                </div>
              </div>
            </div>

            {/* Editorial pull quote */}
            <div className="relative z-10 mt-10 pt-6 border-t border-neutral-800 flex items-center justify-between text-xs font-mono text-neutral-400">
              <span className="italic font-serif text-sm text-neutral-200">
                “A brand that looks like everyone else cannot charge what no one else can.”
              </span>
              <span className="hidden sm:inline-block text-neutral-500">STUDIO ETHOS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

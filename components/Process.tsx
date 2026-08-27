'use client';

import React from 'react';
import { ArrowRight, Check, Compass, Cpu, Layers, Sparkles } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      step: '01',
      duration: 'WEEKS 01—02',
      title: 'Discovery & Strategic Thesis',
      icon: Compass,
      description:
        'We immerse ourselves in your technology, interview your leadership, audit market positioning, and identify the contrarian narrative that will set you apart.',
      deliverables: [
        'Strategic Narrative & Positioning Thesis',
        'Information Architecture Blueprint',
        'Competitive Gap Analysis',
        'Technical Scope & Performance Budget',
      ],
    },
    {
      step: '02',
      duration: 'WEEKS 03—05',
      title: 'Spatial Architecture & Art Direction',
      icon: Layers,
      description:
        'We establish the typographic signature, custom grid geometry, and interaction paradigms. We build working browser prototypes rather than static Figma flat files.',
      deliverables: [
        'Custom Typography & Color Token System',
        'High-Fidelity Interactive Browser Prototypes',
        'Motion Choreography & Spatial Layouts',
        'Design System Component Specifications',
      ],
    },
    {
      step: '03',
      duration: 'WEEKS 06—09',
      title: 'Creative Engineering & Motion',
      icon: Cpu,
      description:
        'Zero-compromise frontend engineering using Next.js App Router, Tailwind CSS, and edge caching. Every micro-interaction is tuned to 60fps with zero layout shifts.',
      deliverables: [
        'Production Next.js Codebase in TypeScript',
        'Hardware-Accelerated WebGL & Micro-States',
        'Headless CMS Orchestration & Schema',
        'Automated CI/CD Test Suite & Linting',
      ],
    },
    {
      step: '04',
      duration: 'WEEKS 10—12',
      title: 'Hardening & Global Acceleration',
      icon: Sparkles,
      description:
        'Rigorous cross-browser QA, accessibility compliance audits, edge CDN routing, and telemetry setup to ensure an unforgettable, flawless global launch.',
      deliverables: [
        '100/100 Core Web Vitals Certification',
        'SEO Schema & OpenGraph Meta Audit',
        'WCAG AAA Accessibility Validation',
        '30-Day Post-Launch Hypercare & Advisory',
      ],
    },
  ];

  return (
    <section id="process" className="relative py-24 md:py-36 bg-white border-y border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
              04 // THE STUDIO PROTOCOL
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-neutral-950 leading-tight">
            A disciplined, four-stage framework from strategic thesis to global launch.
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed mt-6">
            We don’t believe in bloated committee reviews or opaque handoffs. Our process is
            transparent, fast-paced, and driven directly by senior practitioners.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="group relative rounded-xl border border-neutral-200/90 bg-canvas p-6 sm:p-8 flex flex-col justify-between hover:border-neutral-900 transition-all duration-300 shadow-fine hover:shadow-editorial"
              >
                <div>
                  {/* Step & Timeline Header */}
                  <div className="flex items-center justify-between border-b border-neutral-200 pb-4 mb-6">
                    <span className="font-mono text-xl font-bold text-neutral-950 group-hover:text-blue-600 transition-colors">
                      /{item.step}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-neutral-200/60 text-neutral-600">
                      {item.duration}
                    </span>
                  </div>

                  {/* Title & Icon */}
                  <div className="flex items-start gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-white border border-neutral-200 text-neutral-800 shrink-0">
                      <Icon className="w-4 h-4 text-neutral-900" />
                    </div>
                    <h3 className="text-lg font-medium tracking-tight text-neutral-950">
                      {item.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Key Deliverables List */}
                <div className="pt-4 border-t border-neutral-200/80 space-y-2">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 mb-2">
                    KEY MILESTONES:
                  </div>
                  {item.deliverables.map((deliv, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-xs text-neutral-700">
                      <Check className="w-3.5 h-3.5 text-blue-600 mt-0.5 shrink-0" />
                      <span className="leading-tight">{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Milestone Guarantee Callout */}
        <div className="mt-12 p-6 rounded-xl bg-neutral-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-sm font-medium">
              Fixed-time, fixed-investment guarantee with weekly production demos.
            </span>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-blue-400 hover:underline"
          >
            Review scoping framework <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

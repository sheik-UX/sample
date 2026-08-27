'use client';

import React, { useState } from 'react';
import { ArrowUpRight, Plus, Minus, Sparkles, CheckCircle2 } from 'lucide-react';

interface Capability {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  timeline: string;
  tags: string[];
}

export default function Capabilities() {
  const [activeRow, setActiveRow] = useState<string>('01');

  const capabilities: Capability[] = [
    {
      id: '01',
      index: '01',
      title: 'Brand Strategy & Identity Systems',
      subtitle: 'DISTINCTIVE POSITIONING & ENDURING ARTIFACTS',
      description:
        'We distill your technological breakthrough into an authoritative brand narrative. From bespoke typographic tokens and spatial identity rules to physical & 3D assets, we define your visual signature before a single line of interface code is written.',
      deliverables: [
        'Strategic Brand Architecture & Narrative',
        'Custom Logomarks & Typographic Tokens',
        'Comprehensive Visual Identity Guidelines',
        '3D Spatial Assets & Visual Direction',
        'Print, Packaging & Exhibition Design',
      ],
      timeline: '3–5 Weeks Sprints',
      tags: ['Identity', 'Typography', 'Tokens', 'Art Direction'],
    },
    {
      id: '02',
      index: '02',
      title: 'Flagship Web & Product Design',
      subtitle: 'HIGH-CRAFT INTERACTIVE DIGITAL ARCHITECTURE',
      description:
        'We design digital flagships that convert skeptics into loyal champions. Every layout is asymmetric and intentional; every viewport transition is choregraphed to guide user intent and maximize engagement without cognitive friction.',
      deliverables: [
        'Information Architecture & Wireframes',
        'Full Interactive High-Fidelity Prototypes',
        'Design Systems & Accessible UI Toolkits',
        'Conversion & Funnel Architecture',
        'Micro-Interactions & Motion Choreography',
      ],
      timeline: '4–8 Weeks Sprints',
      tags: ['Product UX', 'Web Design', 'Prototypes', 'Conversion'],
    },
    {
      id: '03',
      index: '03',
      title: 'Creative Engineering & Systems',
      subtitle: 'NEXT.JS APP ROUTER & EDGE INFRASTRUCTURE',
      description:
        'Pixel-perfect frontend execution using modern Next.js, TypeScript, Tailwind CSS, and edge runtimes. We maintain strict zero-bloat standards, ensuring your website loads in milliseconds and achieves flawless 100/100 Core Web Vitals globally.',
      deliverables: [
        'Next.js 14/15 App Router Architecture',
        'Hardware-Accelerated WebGL & Canvas Elements',
        'Headless CMS Orchestration (Sanity, Strapi)',
        'Full Accessibility Auditing (WCAG 2.1 AAA)',
        'CI/CD Pipelines & Global Edge Deployment',
      ],
      timeline: '6–10 Weeks Sprints',
      tags: ['Next.js', 'TypeScript', 'Tailwind', 'Performance'],
    },
    {
      id: '04',
      index: '04',
      title: 'AI Interfaces & Strategic Prototyping',
      subtitle: 'MULTIMODAL ERGONOMICS & PROACTIVE AGENT UX',
      description:
        'Moving far beyond simplistic chat bubbles. We architect intuitive canvas-based interfaces for autonomous agents, streaming generative media, and complex data visualization that humanize cutting-edge machine learning models.',
      deliverables: [
        'Agentic Workflow UX & Canvas Mapping',
        'Streaming Latency Ergonomics & Feedback Loops',
        'Custom Design Exploration Sandboxes',
        'Multimodal Input & Voice Interaction Models',
        'Rapid Proof-of-Concept Validation',
      ],
      timeline: '4–6 Weeks Sprints',
      tags: ['AI Products', 'Agentic UX', 'Canvas UI', 'Fast Prototyping'],
    },
  ];

  return (
    <section id="capabilities" className="relative py-24 md:py-36 bg-white border-b border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-14 border-b border-neutral-200">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                02 // CAPABILITIES & DISCIPLINES
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-neutral-950 leading-tight">
              Disciplines built to establish, differentiate, and scale market champions.
            </h2>
          </div>

          <div className="hidden md:block text-right">
            <span className="text-xs font-mono text-neutral-400 block mb-1">METHODOLOGY</span>
            <span className="text-sm font-medium text-neutral-800">
              Senior Architects Only • No Junior Handoffs
            </span>
          </div>
        </div>

        {/* Large Editorial Rows Instead of Generic Cards */}
        <div className="divide-y divide-neutral-200">
          {capabilities.map((cap) => {
            const isOpen = activeRow === cap.id;
            return (
              <div
                key={cap.id}
                onClick={() => setActiveRow(isOpen ? '' : cap.id)}
                className={`group py-8 sm:py-12 transition-colors cursor-pointer ${
                  isOpen ? 'bg-neutral-50/60 -mx-6 px-6 sm:-mx-8 sm:px-8' : 'hover:bg-neutral-50/30'
                }`}
              >
                {/* Main Row Header */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div className="flex items-baseline gap-6 sm:gap-10">
                    <span className="font-mono text-sm sm:text-base font-semibold text-neutral-400 group-hover:text-neutral-900 transition-colors shrink-0">
                      /{cap.index}
                    </span>
                    <div>
                      <span className="block text-[11px] font-mono uppercase tracking-widest text-neutral-400 mb-1">
                        {cap.subtitle}
                      </span>
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-neutral-950 group-hover:text-blue-600 transition-colors">
                        {cap.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 self-end lg:self-center">
                    <div className="hidden sm:flex items-center gap-2">
                      {cap.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-full text-xs font-mono bg-neutral-100 text-neutral-600 border border-neutral-200/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="w-10 h-10 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-700 group-hover:border-neutral-900 group-hover:bg-neutral-900 group-hover:text-white transition-all shrink-0">
                      {isOpen ? (
                        <Minus className="w-4 h-4 transition-transform duration-200" />
                      ) : (
                        <Plus className="w-4 h-4 transition-transform duration-200" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Expanded Editorial Content */}
                {isOpen && (
                  <div className="mt-8 pt-8 border-t border-neutral-200/80 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-in fade-in-50 duration-300">
                    <div className="lg:col-span-6 space-y-4">
                      <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
                        {cap.description}
                      </p>
                      <div className="flex items-center gap-4 text-xs font-mono text-neutral-500 pt-2">
                        <span>TIMELINE: {cap.timeline}</span>
                        <span>•</span>
                        <span>FIXED-SCOPE COMMITMENT</span>
                      </div>
                    </div>

                    <div className="lg:col-span-6 bg-white p-6 rounded-xl border border-neutral-200 shadow-fine">
                      <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-4">
                        CORE DELIVERABLES & ARTIFACTS
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {cap.deliverables.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-800">
                            <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between">
                        <span className="text-xs text-neutral-500">Ready to discuss this discipline?</span>
                        <a
                          href="#contact"
                          className="inline-flex items-center gap-1 text-xs font-medium text-blue-600 hover:underline"
                        >
                          Book consultation <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Differentiation() {
  const principles = [
    {
      num: '01',
      title: 'Zero Templates. Ever.',
      highlight: 'Every line of code and spatial ratio is bespoke.',
      body: 'We reject generic component kits, off-the-shelf themes, and cookie-cutter design systems. Every typography pairing, grid layout, and interaction curve is designed from first principles to represent your unique market thesis.',
    },
    {
      num: '02',
      title: 'Senior Craftsmen Exclusively.',
      highlight: 'No junior handoffs or opaque agency hierarchies.',
      body: 'When you partner with Monolith, you collaborate directly with principal architects who have spent over a decade designing and shipping category-defining products. We operate as an elite strike team embedded alongside your leadership.',
    },
    {
      num: '03',
      title: 'Performance as an Aesthetic.',
      highlight: 'Sub-second speed that converts at the highest tier.',
      body: 'Beauty without velocity is vanity. We maintain ruthless performance budgets—eliminating script bloat, optimizing WebGL draw calls, and guaranteeing 100/100 Core Web Vitals across every global edge node.',
    },
  ];

  return (
    <section className="relative py-28 md:py-44 bg-neutral-950 text-white overflow-hidden">
      {/* Background Architectural Texture */}
      <div className="absolute inset-0 bg-grid-dark opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-8">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-8">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
            05 // THE MONOLITH ETHOS
          </span>
          <div className="h-[1px] w-12 bg-neutral-700" />
        </div>

        {/* Oversized Expressive Typography with Massive Whitespace */}
        <div className="max-w-5xl mb-24 md:mb-32">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-white leading-[1.08]">
            Built with{' '}
            <span className="font-serif italic font-normal text-neutral-300 underline decoration-neutral-600 decoration-1 underline-offset-8">
              uncompromising
            </span>{' '}
            taste. Engineered for exponential scale.
          </h2>
        </div>

        {/* 3 Stark Editorial Pillars with Hairline Dividers */}
        <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-neutral-800 border-y border-neutral-800">
          {principles.map((p) => (
            <div
              key={p.num}
              className="py-12 lg:py-16 lg:px-10 first:lg:pl-0 last:lg:pr-0 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between font-mono text-sm text-neutral-500 mb-8">
                  <span>/{p.num}</span>
                  <span className="text-blue-400 group-hover:translate-x-1 transition-transform">✦</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-white mb-3">
                  {p.title}
                </h3>

                <div className="text-sm font-medium text-neutral-300 font-mono mb-6">
                  {p.highlight}
                </div>

                <p className="text-sm text-neutral-400 leading-relaxed font-normal">
                  {p.body}
                </p>
              </div>

              <div className="mt-10 pt-6 border-t border-neutral-850 flex items-center justify-between text-xs font-mono text-neutral-500">
                <span>VERIFIED STANDARD</span>
                <span className="text-neutral-400 group-hover:text-white transition-colors flex items-center gap-1">
                  Learn more <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

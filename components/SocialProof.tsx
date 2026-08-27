'use client';

import React from 'react';

export default function SocialProof() {
  const partners = [
    { name: 'Vercel', symbol: '▲ Vercel' },
    { name: 'Linear', symbol: '⌘ Linear' },
    { name: 'Stripe', symbol: '/// Stripe' },
    { name: 'Raycast', symbol: '✦ Raycast' },
    { name: 'Supabase', symbol: '⚡ Supabase' },
    { name: 'Figma', symbol: '❖ Figma' },
  ];

  const stats = [
    {
      value: '$850M+',
      label: 'Venture Capital Raised',
      detail: 'by partner companies following flagship product launches.',
    },
    {
      value: '42',
      label: 'Global Design Accolades',
      detail: 'including Awwwards Site of the Year, FWA of the Day, and Red Dot Best of Best.',
    },
    {
      value: '99.4%',
      label: 'Client Retainer Rate',
      detail: 'over 7+ years of continuous strategic engineering and advisory.',
    },
    {
      value: '3.8×',
      label: 'Average Conversion Lift',
      detail: 'measured across redesigns and repositioning initiatives within 90 days.',
    },
  ];

  return (
    <section className="relative py-16 md:py-24 border-y border-neutral-200/80 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Sub-header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-10 border-b border-neutral-100">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400">
              TRUST & VALIDATION
            </span>
            <p className="text-sm md:text-base font-medium text-neutral-800 mt-1">
              Partnering with category leaders, high-growth venture scale-ups, and cultural pioneers.
            </p>
          </div>
          <div className="text-xs font-mono text-neutral-400">
            <span>AUDITED METRICS // 2019—2026</span>
          </div>
        </div>

        {/* Minimalist Monochrome Partner Logo Row */}
        <div className="py-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center p-3 rounded-lg border border-transparent hover:border-neutral-200/80 hover:bg-neutral-50/80 transition-all cursor-default group"
            >
              <span className="font-mono text-base sm:text-lg font-semibold tracking-tight text-neutral-400 group-hover:text-neutral-900 transition-colors">
                {partner.symbol}
              </span>
            </div>
          ))}
        </div>

        {/* 4 Stat Proof Pillars with Fine Dividers */}
        <div className="pt-10 border-t border-neutral-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="relative group">
              <div className="font-serif italic text-4xl sm:text-5xl font-normal text-neutral-950 tracking-tight">
                {stat.value}
              </div>
              <div className="font-sans font-medium text-sm text-neutral-900 mt-2">
                {stat.label}
              </div>
              <p className="text-xs text-neutral-500 font-normal leading-relaxed mt-1">
                {stat.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

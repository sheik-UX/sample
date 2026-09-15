'use client';

import React from 'react';

export default function BrandStatement() {
  return (
    <section className="relative w-full bg-[#0B0C0E] text-[#FAF8F5] py-32 md:py-48 border-t border-white/10 overflow-hidden">
      {/* Discreet background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#C5A880]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        {/* Editorial Eyebrow */}
        <div className="flex items-center gap-4 text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#C5A880] mb-10 md:mb-16">
          <span className="w-8 h-[1px] bg-[#C5A880]" />
          <span>The Sample Standard</span>
        </div>

        {/* Large Typographic Break Headline */}
        <div className="max-w-5xl">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.0] text-white uppercase font-normal tracking-tight">
            FROM THE FIRST IDEA <br />
            <span className="italic font-light text-[#C5A880]">
              TO THE FINAL APPLAUSE.
            </span>
          </h2>
        </div>

        {/* Explanatory Narrative Column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 mt-12 md:mt-20 pt-10 border-t border-white/10 items-start">
          <div className="lg:col-span-4">
            <span className="text-xs uppercase tracking-[0.22em] text-[#787B86] block">
              Holistic Craftsmanship
            </span>
            <span className="text-xs uppercase tracking-[0.2em] text-white/70 block mt-1">
              End-to-end Creative & Technical Direction
            </span>
          </div>

          <div className="lg:col-span-8 space-y-6">
            <p className="text-base sm:text-lg md:text-xl text-[#FAF8F5]/90 font-light leading-relaxed">
              We believe extraordinary events are not assembled by chance. They
              are meticulously orchestrated down to the millimeter—where
              architectural scenic design, spatial acoustic modeling, and
              uncompromising logistical discipline coalesce into an effortless,
              unforgettable reality.
            </p>
            <p className="text-sm md:text-base text-[#A5A8B2] font-light leading-relaxed">
              Our studio operates across the globe with relentless discretion,
              delivering bespoke celebrations and technical productions for
              discerning private clients, royal families, cultural
              institutions, and visionary enterprises.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

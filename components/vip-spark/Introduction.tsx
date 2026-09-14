'use client';

import React from 'react';

export default function Introduction() {
  return (
    <section
      id="about"
      className="relative w-full bg-[#FAF8F5] text-[#111215] py-28 md:py-40 border-t border-[#E5E1D8] transition-colors"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Subtle Section Label */}
        <div className="flex items-center justify-between border-b border-[#111215]/10 pb-6 mb-16 md:mb-24">
          <span className="text-[10px] md:text-xs uppercase tracking-[0.28em] text-[#9E8159] font-medium">
            Creative Ethos / The Philosophy
          </span>
          <span className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-[#787B86] hidden sm:block">
            Discretion · Craft · Precision
          </span>
        </div>

        {/* Quiet Editorial Layout: Asymmetrical typography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Statement */}
          <div className="lg:col-span-8">
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-[#111215] uppercase font-normal">
              MORE THAN AN EVENT.{' '}
              <span className="block italic text-[#9E8159] font-light">
                AN EXPERIENCE.
              </span>
            </h2>
          </div>

          {/* Supporting Paragraph & Studio Hallmark */}
          <div className="lg:col-span-4 lg:pt-4 space-y-6">
            <p className="text-base sm:text-lg text-[#4A4C52] font-light leading-relaxed">
              From intimate celebrations to large-scale productions, VIP Spark
              brings creative direction, production and execution together to
              create experiences people remember.
            </p>
            <div className="pt-4 border-t border-[#111215]/10">
              <p className="text-xs uppercase tracking-[0.2em] text-[#787B86] leading-relaxed">
                We operate as an autonomous creative agency and heavy production
                house in one unified discipline. Every sound cue, scenic wall,
                and light frequency is choreographed with intention.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

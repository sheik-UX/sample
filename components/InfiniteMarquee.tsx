'use client';

import React from 'react';

export default function InfiniteMarquee() {
  const partners = [
    'PAPERFLOW',
    'FLOW PLATFORM',
    'VERCEL',
    'LINEAR',
    'STRIPE',
    'FIGMA',
    'SUPABASE',
    'RAYCAST',
    'NOTION',
  ];

  return (
    <section className="relative py-8 md:py-10 border-y border-[#E5E7EB] overflow-hidden bg-[#F7F4EB]/60">
      <div className="flex select-none overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <div className="flex items-center gap-12 sm:gap-20 animate-marquee shrink-0 pr-12 sm:pr-20">
          {partners.map((partner, index) => (
            <span
              key={`a-${index}`}
              className="text-sm sm:text-base font-mono tracking-widest text-[#4B5563] hover:text-[#E65C00] transition-colors cursor-default font-semibold"
            >
              {partner}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-12 sm:gap-20 animate-marquee shrink-0 pr-12 sm:pr-20" aria-hidden="true">
          {partners.map((partner, index) => (
            <span
              key={`b-${index}`}
              className="text-sm sm:text-base font-mono tracking-widest text-[#4B5563] hover:text-[#E65C00] transition-colors cursor-default font-semibold"
            >
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

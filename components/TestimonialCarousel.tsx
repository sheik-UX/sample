'use client';

import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Star } from '@phosphor-icons/react';
import { ScrollReveal as SectionReveal } from './animations';
import { ScrollReveal } from '@/components/lightswind/scroll-reveal';

interface CreatorEndorsement {
  id: string;
  quote: string;
  author: string;
  role: string;
  client: string;
  metric: string;
}

export default function TestimonialCarousel() {
  const [currentIdx, setCurrentIdx] = useState(0);

  const endorsements: CreatorEndorsement[] = [
    {
      id: '01',
      quote:
        'PaperFlow replaced over 40 fragile cron jobs with a unified declarative pipeline. Our engineering team gained back 15 hours a week previously lost to ad-hoc operational fire drills.',
      author: 'Jordan Hayes',
      role: 'VP of Infrastructure Engineering',
      client: 'ScaleMetrics Corp',
      metric: 'Zero Outages Since Deploy',
    },
    {
      id: '02',
      quote:
        'The sub-40ms execution cycle and bi-directional CDC connectors made our warehouse synchronization instantaneous. It feels like magic compared to our previous ETL tools.',
      author: 'Sourasith Somphane',
      role: 'Head of Data & Operations',
      client: 'Aether Cloud',
      metric: '14,000 evt/s Real-time',
    },
    {
      id: '03',
      quote:
        'The interface patterns and modular workflow nodes allowed our cross-functional teams to design and ship customer onboarding flows without waiting for dedicated sprint cycles.',
      author: 'Elena Rostova',
      role: 'Director of Product Operations',
      client: 'Vanguard Systems',
      metric: '4.8x Deployment Velocity',
    },
  ];

  const handleNext = () => {
    setCurrentIdx((prev) => (prev + 1) % endorsements.length);
  };

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev - 1 + endorsements.length) % endorsements.length);
  };

  const active = endorsements[currentIdx];

  return (
    <section id="creator" className="relative py-14 sm:py-18 md:py-22 px-6 max-w-7xl mx-auto border-t border-[#E5E7EB] bg-[#FDFDFD] overflow-hidden">
      <SectionReveal className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-10 sm:mb-12">
        <div>
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#FF5722] mb-2">
            CUSTOMER PROOF // VERIFIED OUTCOMES
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-medium tracking-tight text-[#111827] leading-[1.06]">
            <ScrollReveal
              size="lg"
              align="left"
              enableBlur={true}
              baseOpacity={0.1}
              baseRotation={2}
              blurStrength={3}
              staggerDelay={0.035}
              threshold={0.5}
            >
              Trusted by teams building modern operations.
            </ScrollReveal>
          </h2>
        </div>

        {/* Arrow Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-[8px] border border-[#E5E7EB] bg-[#F4F4F5] hover:bg-white text-[#111827] flex items-center justify-center transition-colors shadow-xs focus:outline-none"
            aria-label="Previous endorsement"
          >
            <ArrowLeft size={16} weight="bold" />
          </button>
          <span className="text-xs font-mono text-[#4B5563]">
            0{currentIdx + 1} / 0{endorsements.length}
          </span>
          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-[8px] border border-[#E5E7EB] bg-[#F4F4F5] hover:bg-white text-[#111827] flex items-center justify-center transition-colors shadow-xs focus:outline-none"
            aria-label="Next endorsement"
          >
            <ArrowRight size={16} weight="bold" />
          </button>
        </div>
      </SectionReveal>

      {/* Featured Endorsement Card */}
      <SectionReveal delay={0.1}>
        <div className="rounded-[16px] border border-[#E5E7EB] bg-white p-8 sm:p-12 shadow-xs">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-[#FFF1EC] border border-[#FFD0C2] text-xs font-mono font-semibold text-[#FF5722]">
                {active.metric}
              </span>
              <span className="text-xs font-mono text-[#4B5563]">Neuform Verified</span>
            </div>

            <blockquote className="font-serif text-xl sm:text-2xl md:text-3xl font-normal text-[#111827] leading-relaxed tracking-tight max-w-4xl">
              “{active.quote}”
            </blockquote>

            <div className="pt-6 border-t border-[#E5E7EB] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-[8px] bg-[#FF5722] text-white flex items-center justify-center font-bold text-sm shadow-xs">
                  {active.author.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-medium text-[#111827] flex items-center gap-2">
                    <span>{active.author}</span>
                  </div>
                  <div className="text-xs text-[#4B5563]">
                    {active.role} • {active.client}
                  </div>
                </div>
              </div>

              <div className="hidden sm:flex items-center gap-1 text-[#FF5722]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} weight="fill" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}

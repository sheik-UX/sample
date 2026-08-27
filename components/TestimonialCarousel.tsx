'use client';

import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Star } from '@phosphor-icons/react';
import { ScrollReveal } from './animations';

interface CreatorEndorsement {
  id: string;
  quote: string;
  author: string;
  handle: string;
  role: string;
  company: string;
  metric: string;
}

export default function TestimonialCarousel() {
  const [currentIdx, setCurrentIdx] = useState(0);

  const endorsements: CreatorEndorsement[] = [
    {
      id: '01',
      quote:
        "I'm Jordan Hayes, a product engineer building high-throughput systems. PaperFlow's smart workflow architecture reduced our multi-hop pipeline latency to sub-40ms while maintaining complete clarity for our operations team.",
      author: 'Jordan Hayes',
      handle: '@jordanhayes',
      role: 'Product Engineer',
      company: 'Flow Platform Lead',
      metric: '393 Views • 25 Favorites',
    },
    {
      id: '02',
      quote:
        'Paperflow Design Pricing Section is specifically designed for comparing plans and supporting conversion decisions. The modular bento blocks and structured token systems make adoption effortless for subscription apps.',
      author: 'Sourasith Phomhome',
      handle: '@madebysourasith',
      role: 'Creator & UI Architect',
      company: 'Neuform Featured Creator',
      metric: 'Featured Creator Template',
    },
    {
      id: '03',
      quote:
        'We migrated 40+ manual scheduled jobs into PaperFlow automated rule nodes. The result was zero failures across 3 million tasks and a 40% reduction in cloud infrastructure expenses.',
      author: 'Elena Rostova',
      handle: '@erostova',
      role: 'VP of Platform Operations',
      company: 'Horizon Ecosystems',
      metric: '99.99% Execution SLA',
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
      <ScrollReveal className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-10 sm:mb-12">
        <div>
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#FF5722] mb-2">
            CUSTOMER PROOF // VERIFIED OUTCOMES
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-medium tracking-tight text-[#111827] leading-[1.06]">
            Trusted by teams building modern operations.
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
      </ScrollReveal>

      {/* Featured Endorsement Card */}
      <ScrollReveal delay={0.1}>
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
                    <span className="text-xs font-mono text-[#FF5722]">{active.handle}</span>
                  </div>
                  <div className="text-xs text-[#4B5563]">
                    {active.role} • {active.company}
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
      </ScrollReveal>
    </section>
  );
}

'use client';

import React, { useState } from 'react';
import { Quote, Sparkles, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  metric: string;
  avatar: string;
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: '01',
      quote:
        'Monolith transformed what we thought our flagship digital presence could achieve. Their uncompromising typographic hierarchy and sub-second Next.js architecture elevated us from an early-stage challenger into an industry benchmark overnight.',
      author: 'Elena Rostova',
      role: 'Vice President of Product',
      company: 'Horizon AI Platform',
      metric: '+280% Enterprise Inbound',
      avatar: '/assets/product_assets.jpg',
    },
    {
      id: '02',
      quote:
        'Working with Monolith was not like hiring an agency; it was like embedding a world-class design and engineering strike team directly into our executive suite. They solved foundational UX challenges before we even had the vocabulary to describe them.',
      author: 'Marcus Chen',
      role: 'Founder & Chief Executive Officer',
      company: 'Kroma Systems (Acquired)',
      metric: '$64M Series B Led by Founders Fund',
      avatar: '/assets/frameworks_nodes.jpg',
    },
    {
      id: '03',
      quote:
        'In a market crowded with generic, cookie-cutter venture websites, Monolith crafted an architectural identity that commands immense respect. The platform continues to win global design honors while effortlessly converting top-tier founders and LPs.',
      author: 'Sophia Al-Mansoor',
      role: 'Partner & Head of Brand',
      company: 'Vesper Capital Syndicate',
      metric: '4.2× Fund Inflow Rate',
      avatar: '/assets/smart_outcomes.jpg',
    },
  ];

  const current = testimonials[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="relative py-24 md:py-36 bg-canvas border-b border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-neutral-200">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                06 // PROVEN LEADERSHIP IMPACT
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-neutral-950 leading-tight">
              What visionary founders and product leaders say about our partnership.
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full border border-neutral-300 hover:border-neutral-900 bg-white text-neutral-800 transition-colors focus:outline-none"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="font-mono text-xs text-neutral-500">
              0{activeIndex + 1} / 0{testimonials.length}
            </span>
            <button
              onClick={handleNext}
              className="p-3 rounded-full border border-neutral-300 hover:border-neutral-900 bg-white text-neutral-800 transition-colors focus:outline-none"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Featured Editorial Testimonial Showcase */}
        <div className="mt-12 rounded-2xl border border-neutral-200/90 bg-white p-8 sm:p-12 lg:p-16 shadow-fine relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Large Pull Quote */}
            <div className="lg:col-span-8 space-y-8">
              <div className="flex items-center gap-3">
                <Quote className="w-8 h-8 text-neutral-300" />
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-emerald-50 text-emerald-700 border border-emerald-200/60 font-semibold">
                  {current.metric}
                </span>
              </div>

              <blockquote className="text-xl sm:text-2xl lg:text-3xl font-serif italic text-neutral-900 leading-relaxed">
                “{current.quote}”
              </blockquote>

              <div className="pt-4 border-t border-neutral-100 flex items-center gap-4">
                <img
                  src={current.avatar}
                  alt={current.author}
                  loading="lazy"
                  decoding="async"
                  className="w-14 h-14 rounded-full object-cover border border-neutral-200"
                />
                <div>
                  <div className="text-base font-sans font-medium text-neutral-950">
                    {current.author}
                  </div>
                  <div className="text-xs font-mono text-neutral-500">
                    {current.role} • {current.company}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Metric & Validation Block */}
            <div className="lg:col-span-4 rounded-xl bg-neutral-50 p-6 sm:p-8 border border-neutral-200/70 space-y-6">
              <div className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                AUDITED ENGAGEMENT DATA
              </div>

              <div className="space-y-4 font-mono text-xs">
                <div className="flex items-center justify-between pb-2 border-b border-neutral-200">
                  <span className="text-neutral-500">ENGAGEMENT SCOPE</span>
                  <span className="text-neutral-900 font-medium">Flagship Platform + Brand</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-neutral-200">
                  <span className="text-neutral-500">ENGINEERING TIMELINE</span>
                  <span className="text-neutral-900 font-medium">8-Week High-Velocity Sprint</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-neutral-200">
                  <span className="text-neutral-500">PERFORMANCE SCORE</span>
                  <span className="text-emerald-600 font-semibold">100/100 Core Web Vitals</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-500">VERIFICATION</span>
                  <span className="text-neutral-900 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" /> Confirmed
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Client Thumbnail Indicators */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {testimonials.map((t, idx) => (
            <button
              key={t.id}
              onClick={() => setActiveIndex(idx)}
              className={`p-4 rounded-xl border text-left transition-all ${
                activeIndex === idx
                  ? 'border-neutral-900 bg-white shadow-fine'
                  : 'border-neutral-200/70 bg-white/60 hover:bg-white text-neutral-500'
              }`}
            >
              <div className="font-mono text-xs text-neutral-400 mb-1">0{idx + 1} // LEADER</div>
              <div className="text-sm font-medium text-neutral-900">{t.author}</div>
              <div className="text-xs text-neutral-500 truncate">{t.company}</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

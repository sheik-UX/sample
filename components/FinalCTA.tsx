'use client';

import React, { useState } from 'react';
import { ArrowUpRight, Check, Sparkle } from '@phosphor-icons/react';
import { ScrollReveal, IllustrationReveal } from './animations';

export default function FinalCTA() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-14 sm:py-18 md:py-22 px-6 border-t border-[#E5E7EB] bg-[#FDFDFD] overflow-hidden">
      <ScrollReveal className="max-w-5xl mx-auto rounded-[16px] border border-[#E5E7EB] bg-[#F4F4F5] p-8 sm:p-14 text-center shadow-xs relative overflow-hidden">
        <div className="relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5E7EB] text-xs font-mono font-semibold text-[#FF5722]">
            <Sparkle size={13} weight="fill" />
            <span>Expand Capabilities</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-medium tracking-tight text-[#111827] leading-[1.04] max-w-3xl mx-auto">
            Streamline your operations with smart workflows.
          </h2>

          <p className="font-serif text-lg sm:text-xl text-[#4B5563] font-normal leading-[1.65] max-w-xl mx-auto">
            Optimize your daily tasks and harness data for clear outcomes. Start free today with
            full access to our standard workflow nodes.
          </p>

          {/* Generated Original Illustration */}
          <IllustrationReveal className="rounded-[12px] overflow-hidden border border-[#E5E7EB] bg-white shadow-xs max-w-2xl mx-auto">
            <img
              src="/assets/smart_outcomes.jpg"
              alt="Automated smart workflows connecting directly into clear operational outcomes"
              loading="lazy"
              decoding="async"
              className="w-full h-64 sm:h-80 object-cover"
            />
          </IllustrationReveal>

          {submitted ? (
            <div className="py-6 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-[8px] bg-emerald-50 border border-emerald-200 text-emerald-700 font-mono text-xs font-medium">
                <Check size={14} weight="bold" />
                <span>Account setup link delivered to your work email.</span>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto pt-2"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter work email..."
                className="w-full sm:w-80 px-5 py-3.5 rounded-[8px] bg-white border border-[#E5E7EB] text-[#111827] text-sm placeholder-[#9CA3AF] focus:outline-none focus:border-[#FF5722] shadow-xs transition-colors"
              />
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-6 py-3.5 rounded-[8px] bg-[#FF5722] text-white font-medium text-sm hover:bg-[#E64A19] transition-all shadow-xs shrink-0"
              >
                <span>Get Started</span>
                <ArrowUpRight size={14} weight="bold" />
              </button>
            </form>
          )}

          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-[#4B5563]">
            <span>No credit card required</span>
            <span>•</span>
            <span>14-day free trial</span>
            <span>•</span>
            <span>Instant workspace setup</span>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUp } from '@phosphor-icons/react';
import { ScrollReveal } from './animations';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#F4F4F5] border-t border-[#E5E7EB] py-14 px-6 overflow-hidden">
      <ScrollReveal className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-6 h-6 rounded-[6px] bg-[#FF5722] text-white flex items-center justify-center font-bold text-xs group-hover:scale-105 transition-transform">
              P
            </div>
            <span className="font-semibold text-sm tracking-tight text-[#111827]">
              PaperFlow Design
            </span>
          </Link>
          <span className="text-xs font-mono text-[#4B5563] ml-3 hidden sm:inline">
            (C) {new Date().getFullYear()} Flow Platform Inc. All rights reserved.
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-6 text-xs font-mono text-[#4B5563]">
          <Link
            href="/plans-pricing"
            className="hover:text-[#111827] transition-colors"
          >
            Plans & Pricing
          </Link>
          <Link
            href="/interface-patterns"
            className="hover:text-[#111827] transition-colors"
          >
            Patterns
          </Link>
          <Link
            href="/frameworks"
            className="hover:text-[#111827] transition-colors"
          >
            Frameworks
          </Link>
          <Link
            href="/creators"
            className="hover:text-[#111827] transition-colors"
          >
            Creators
          </Link>
          <button
            onClick={scrollToTop}
            className="hover:text-[#111827] transition-colors inline-flex items-center gap-1.5 ml-2"
          >
            Top <ArrowUp size={11} />
          </button>
        </div>
      </ScrollReveal>
    </footer>
  );
}

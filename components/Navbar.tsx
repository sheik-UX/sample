'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, List, X } from '@phosphor-icons/react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isNowScrolled = window.scrollY > 20;
          setScrolled((prev) => (prev !== isNowScrolled ? isNowScrolled : prev));
          ticking = false;
        });
        ticking = true;
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { name: 'Plans & Pricing', href: '/plans-pricing' },
    { name: 'Interface Patterns', href: '/interface-patterns' },
    { name: 'Frameworks', href: '/frameworks' },
    { name: 'Creators', href: '/creators' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        scrolled
          ? 'bg-[#FDFDFD]/90 backdrop-blur-md border-b border-[#E5E7EB] shadow-xs py-3'
          : 'bg-[#FDFDFD] py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Logo - Navigates Home */}
        <Link href="/" className="flex items-center gap-2 text-[#111827] focus:outline-none group shrink-0">
          <div className="w-8 h-8 rounded-[8px] bg-[#FF5722] text-white flex items-center justify-center font-bold text-sm tracking-tight shadow-sm group-hover:scale-105 transition-transform">
            P
          </div>
          <span className="font-semibold text-base sm:text-lg tracking-tight text-[#111827] flex items-center gap-2">
            PaperFlow
            <span className="hidden sm:inline-flex text-[11px] font-mono font-medium px-2 py-0.5 rounded-full bg-[#F4F4F5] border border-[#E5E7EB] text-[#4B5563]">
              Flow Platform
            </span>
          </span>
        </Link>

        {/* Desktop Navigation with Active State Indicator */}
        <nav className="hidden md:flex items-center gap-2 text-sm">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors py-1.5 px-3.5 rounded-full text-xs font-medium ${
                  isActive
                    ? 'bg-[#FFF1EC] text-[#FF5722] font-semibold border border-[#FFD0C2] shadow-xs'
                    : 'text-[#4B5563] hover:text-[#111827] hover:bg-[#F4F4F5]'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/plans-pricing"
            className="text-sm font-medium text-[#4B5563] hover:text-[#111827] transition-colors"
          >
            Sign in
          </Link>
          <Link
            href="/plans-pricing"
            className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-[8px] bg-[#FF5722] text-white text-sm font-medium shadow-sm hover:bg-[#E64A19] transition-all active:scale-[0.98]"
          >
            <span>Get Started</span>
            <ArrowUpRight size={15} weight="bold" />
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex md:hidden items-center gap-3">
          <Link
            href="/plans-pricing"
            className="px-3.5 py-1.5 rounded-[8px] bg-[#FF5722] text-white text-xs font-medium"
          >
            Get Started
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-1.5 text-[#4B5563] hover:text-[#111827] focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <List size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden border-b border-[#E5E7EB] bg-[#FDFDFD] px-6 py-6 flex flex-col gap-2 shadow-lg animate-in slide-in-from-top-2 duration-150">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`text-sm py-2 px-3 rounded-[8px] transition-colors ${
                  isActive
                    ? 'bg-[#FFF1EC] text-[#FF5722] font-semibold border border-[#FFD0C2]'
                    : 'text-[#111827] hover:bg-[#F4F4F5]'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
          <div className="pt-3 flex flex-col gap-2 border-t border-[#E5E7EB] mt-2">
            <Link
              href="/plans-pricing"
              onClick={() => setMobileOpen(false)}
              className="w-full py-3 rounded-[8px] bg-[#FF5722] text-white font-medium text-center text-sm hover:bg-[#E64A19] transition-all"
            >
              Get Started with PaperFlow
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

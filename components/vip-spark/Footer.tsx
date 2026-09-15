'use client';

import React from 'react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#ebebeb] text-[#000000] py-16 px-6 md:px-12 border-t border-[#dfdcd5]">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Left: Circled Monogram Logo Mark */}
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded-full border-[1.5px] border-[#000000] flex items-center justify-center">
            <span className="font-davinci text-lg font-medium text-[#000000] leading-none">
              S
            </span>
          </div>
          <div>
            <span className="font-helvetica text-xs uppercase tracking-[0.2em] font-medium text-[#000000] block">
              Sample
            </span>
            <span className="font-helvetica text-[10px] uppercase tracking-[0.18em] text-[#595855] block">
              Renaissance Folio & Production House
            </span>
          </div>
        </div>

        {/* Center: Studio Hubs */}
        <div className="font-helvetica text-[11px] uppercase tracking-[0.22em] text-[#595855]">
          <span>London · Paris · Lake Como · New York</span>
        </div>

        {/* Right: Links & Back to Top */}
        <div className="flex items-center gap-6 font-helvetica text-xs">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="ghost-text-link"
          >
            Instagram
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="ghost-text-link"
          >
            Facebook
          </a>
          <button
            onClick={scrollToTop}
            className="ghost-text-link cursor-pointer"
          >
            Top ↑
          </button>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto mt-12 pt-6 border-t border-[#dfdcd5] flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] font-helvetica uppercase tracking-widest text-[#595855]">
        <span>&copy; {new Date().getFullYear()} Sample. Renaissance gallery on putty paper.</span>
        <span>Strict Confidentiality Guaranteed</span>
      </div>
    </footer>
  );
}

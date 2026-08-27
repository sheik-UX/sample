'use client';

import React, { useState } from 'react';
import { ArrowUpRight, X } from 'lucide-react';

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <aside aria-label="Announcement" className="relative z-50 bg-obsidian text-canvas text-xs tracking-wide py-2.5 px-4 border-b border-obsidian-border/50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 overflow-hidden text-ellipsis whitespace-nowrap mx-auto sm:mx-0">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] uppercase font-semibold tracking-wider bg-white/10 text-white/90 border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Studio Update
          </span>
          <p className="text-neutral-300 font-normal truncate">
            Now accepting flagship partnerships for Q3/Q4 2026. Limited cohort capacity.
          </p>
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-1 text-white font-medium underline underline-offset-4 hover:text-blue-400 transition-colors"
          >
            Inquire now
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <button
          onClick={() => setIsVisible(false)}
          className="text-neutral-400 hover:text-white transition-colors p-1 rounded-sm focus:outline-none focus:ring-1 focus:ring-white/20"
          aria-label="Dismiss announcement"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
}

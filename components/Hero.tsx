'use client';

import React, { useRef, useState, useEffect } from 'react';
import {
  Sparkles,
  ArrowUpRight,
  Database,
  TrendingUp,
  Zap,
  Check,
  Plus,
  Play,
} from 'lucide-react';
import { useAnimationFrame, useReducedMotion } from 'framer-motion';
import { CloudShader } from './ui/cloud-shader';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef<number>(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isHeroInViewRef = useRef<boolean>(true);
  const isMobileRef = useRef<boolean>(false);
  const prefersReducedMotion = useReducedMotion();

  // Passive viewport and responsive checks to avoid layout thrashing during animation loop
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isHeroInViewRef.current = entry.isIntersecting;
      },
      { threshold: 0 }
    );
    observer.observe(el);

    const checkMobile = () => {
      isMobileRef.current = window.innerWidth < 640;
    };
    checkMobile();
    window.addEventListener('resize', checkMobile, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // The 7 canonical Hero Cards, styled with Sentinel design tokens
  const baseCards = [
    // Card 1: Data Ingest
    {
      id: 'data-ingest',
      render: () => (
        <div className="w-full h-full rounded-[16px] bg-white border border-[#E5E7EB] p-4 sm:p-5 flex flex-col justify-between shadow-sm select-none">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-semibold uppercase text-[#FF5722]">
                STAGE 01
              </span>
              <span className="text-[10px] font-mono text-[#9CA3AF]">v2.4</span>
            </div>
            <div className="text-sm sm:text-base font-semibold text-[#111827] mt-1">
              Data Ingest
            </div>
            <p className="text-[11px] text-[#4B5563] mt-1 leading-snug">
              Real-time API ingestion queue
            </p>
          </div>

          <div className="space-y-1.5 my-auto">
            <div className="flex items-end gap-1.5 h-16 pt-2">
              <div className="w-full bg-[#FFF1EC] h-6 rounded-t" />
              <div className="w-full bg-[#FFD0C2] h-10 rounded-t" />
              <div className="w-full bg-[#FF5722] h-14 rounded-t" />
              <div className="w-full bg-[#E64A19] h-9 rounded-t" />
              <div className="w-full bg-[#FFD0C2] h-12 rounded-t" />
            </div>
            <div className="text-[10px] font-mono text-[#4B5563] flex justify-between">
              <span>14.2k evt/s</span>
              <span className="text-emerald-600 font-medium">Live</span>
            </div>
          </div>

          <div className="pt-2 border-t border-[#E5E7EB] flex items-center justify-between text-[10px] font-mono text-[#4B5563]">
            <span>Status: Synced</span>
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
          </div>
        </div>
      ),
    },

    // Card 2: Annual Flow
    {
      id: 'annual-flow',
      render: () => (
        <div className="w-full h-full rounded-[16px] bg-white border border-[#E5E7EB] p-4 sm:p-5 flex flex-col justify-between shadow-sm select-none">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono font-semibold text-[#4B5563]">ANNUAL FLOW</span>
            <span className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-[#FFF1EC] text-[#FF5722] font-semibold">
              -20%
            </span>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-medium tracking-tight text-[#111827]">
              $4,900
            </div>
            <div className="text-[11px] text-[#4B5563] mt-0.5">Automated savings / mo</div>
          </div>

          <div className="space-y-2 py-2 border-y border-[#E5E7EB] text-[11px]">
            <div className="flex justify-between text-[#4B5563]">
              <span>Operations</span>
              <span className="font-medium text-[#111827]">2,840 hrs</span>
            </div>
            <div className="flex justify-between text-[#4B5563]">
              <span>API Latency</span>
              <span className="font-medium text-emerald-600">Sub-40ms</span>
            </div>
            <div className="flex justify-between text-[#4B5563]">
              <span>Health SLA</span>
              <span className="font-medium text-[#111827]">99.98%</span>
            </div>
          </div>

          <div className="text-[10px] font-mono text-[#FF5722] font-medium flex items-center gap-1">
            <span>Pro Plan Active</span>
            <ArrowUpRight size={11} />
          </div>
        </div>
      ),
    },

    // Card 3: Jordan Hayes Testimonial
    {
      id: 'testimonial',
      render: () => (
        <div className="w-full h-full rounded-[16px] bg-white border border-[#E5E7EB] p-4 sm:p-5 flex flex-col justify-between shadow-sm select-none">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-[#FF5722] text-white flex items-center justify-center font-bold text-xs shadow-sm">
              JH
            </div>
            <div>
              <div className="text-xs font-semibold text-[#111827]">Jordan Hayes</div>
              <div className="text-[10px] font-mono text-[#FF5722]">@jordanhayes</div>
            </div>
          </div>

          <div className="my-auto py-2">
            <div className="text-xs text-[#111827] font-medium italic leading-relaxed">
              “PaperFlow reduced pipeline latency to sub-40ms across our product ecosystem.”
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#E5E7EB]">
            <div className="p-2 rounded-[8px] bg-[#F4F4F5] border border-[#E5E7EB]">
              <div className="text-[9px] font-mono text-[#4B5563]">TASKS</div>
              <div className="text-xs font-semibold text-[#111827]">100,000+</div>
            </div>
            <div className="p-2 rounded-[8px] bg-[#F4F4F5] border border-[#E5E7EB]">
              <div className="text-[9px] font-mono text-[#4B5563]">SUCCESS</div>
              <div className="text-xs font-semibold text-emerald-600">100%</div>
            </div>
          </div>
        </div>
      ),
    },

    // Card 4: Intelligence in Every Decision (Focal Card)
    {
      id: 'decision-engine',
      render: () => (
        <div className="w-full h-full rounded-[16px] bg-white border-2 border-[#FF5722] p-4 sm:p-5 flex flex-col justify-between shadow-lg select-none ring-4 ring-[#FF5722]/10">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#FF5722]">
              FLOW ENGINE // LIVE
            </span>
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF5722] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF5722]" />
            </span>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-medium text-[#111827] leading-snug">
              Intelligence in Every Decision
            </h3>
            <p className="text-[11px] text-[#4B5563] mt-1 leading-normal">
              Automated rule nodes executing sub-second transformation logic.
            </p>
          </div>

          <div className="py-2">
            <svg className="w-full h-16 overflow-visible" viewBox="0 0 200 60">
              <defs>
                <linearGradient id="curveGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#FF5722" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#FF5722" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              <path
                d="M0 45 Q 35 15, 70 30 T 140 10 T 200 5 L 200 60 L 0 60 Z"
                fill="url(#curveGrad)"
              />
              <path
                d="M0 45 Q 35 15, 70 30 T 140 10 T 200 5"
                fill="none"
                stroke="#FF5722"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <circle cx="200" cy="5" r="4" fill="#FF5722" />
            </svg>
            <div className="flex justify-between text-[10px] font-mono text-[#4B5563] mt-1">
              <span>99.98% Precision</span>
              <span className="text-[#FF5722] font-semibold">+310% Velocity</span>
            </div>
          </div>

          <div className="pt-2 border-t border-[#E5E7EB] flex items-center justify-between text-[11px]">
            <span className="text-[#111827] font-medium">Orchestration Hub</span>
            <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-mono text-[10px] font-semibold border border-emerald-200">
              Active Node
            </span>
          </div>
        </div>
      ),
    },

    // Card 5: Intelligence / Strategy (High-Contrast Dark Card)
    {
      id: 'intelligence-dark',
      render: () => (
        <div className="w-full h-full rounded-[16px] bg-[#121212] text-white p-4 sm:p-5 flex flex-col justify-between shadow-md select-none">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono font-semibold text-[#FFD0C2] uppercase tracking-wider">
              INTELLIGENCE
            </span>
            <Zap size={16} className="text-[#FF5722] fill-[#FF5722]" />
          </div>

          <div>
            <div className="text-sm sm:text-base font-medium leading-snug text-white">
              Expertise that combines strategy, data, and automation.
            </div>
            <p className="text-[11px] text-neutral-400 mt-2 leading-normal">
              Transforming operational bottlenecks into continuous scale.
            </p>
          </div>

          <div className="p-3 rounded-[10px] bg-neutral-900 border border-neutral-800 space-y-1.5">
            <div className="flex justify-between text-[10px] font-mono">
              <span className="text-neutral-400">Throughput</span>
              <span className="text-white font-semibold">Unlimited</span>
            </div>
            <div className="flex justify-between text-[10px] font-mono">
              <span className="text-neutral-400">Security</span>
              <span className="text-emerald-400">SOC2 Type II</span>
            </div>
          </div>

          <div className="text-[10px] font-mono text-neutral-400">
            <span>PaperFlow Core Node</span>
          </div>
        </div>
      ),
    },

    // Card 6: Data Ingestion Schemas
    {
      id: 'data-ingestion',
      render: () => (
        <div className="w-full h-full rounded-[16px] bg-white border border-[#E5E7EB] p-4 sm:p-5 flex flex-col justify-between shadow-sm select-none">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono font-semibold text-[#4B5563]">INGESTION</span>
            <div className="w-6 h-6 rounded-full bg-[#F4F4F5] border border-[#E5E7EB] flex items-center justify-center text-[#FF5722]">
              <Plus size={12} strokeWidth={3} />
            </div>
          </div>

          <div className="space-y-1.5">
            <div className="w-10 h-10 rounded-[10px] bg-[#FFF1EC] border border-[#FFD0C2] flex items-center justify-center text-[#FF5722] shadow-sm">
              <Database size={18} />
            </div>
            <div className="text-sm font-semibold text-[#111827] pt-1">
              Data Ingestion
            </div>
            <p className="text-[11px] text-[#4B5563] leading-tight">
              Upload schemas and automated triggers
            </p>
          </div>

          <div className="p-2 rounded-[8px] bg-[#F4F4F5] border border-[#E5E7EB] text-[10px] font-mono text-[#4B5563]">
            <div>Ready for deployment</div>
            <div className="text-[#111827] font-semibold mt-0.5">84 Rule Nodes</div>
          </div>

          <div className="text-[10px] font-mono text-[#FF5722] flex items-center gap-1 font-medium">
            <span>Explore nodes</span>
            <ArrowUpRight size={11} />
          </div>
        </div>
      ),
    },

    // Card 7: Metrics & Telemetry
    {
      id: 'metrics',
      render: () => (
        <div className="w-full h-full rounded-[16px] bg-white border border-[#E5E7EB] p-4 sm:p-5 flex flex-col justify-between shadow-sm select-none">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono font-semibold uppercase text-[#4B5563]">
              METRICS
            </span>
            <TrendingUp size={14} className="text-[#FF5722]" />
          </div>

          <div>
            <div className="text-3xl font-medium tracking-tight text-[#111827]">
              520k+
            </div>
            <div className="text-[11px] font-medium text-[#4B5563] mt-0.5">
              Data Points Analyzed
            </div>
          </div>

          <div className="space-y-1.5 py-2 border-y border-[#E5E7EB] text-[11px] font-mono">
            <div className="flex justify-between text-[#4B5563]">
              <span>Regions</span>
              <span className="text-[#111827] font-semibold">20+ Continents</span>
            </div>
            <div className="flex justify-between text-[#4B5563]">
              <span>Latency p95</span>
              <span className="text-emerald-600 font-semibold">28ms</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono">
            <span className="text-emerald-700 font-semibold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Global Telemetry
            </span>
            <span className="text-[#9CA3AF]">99.98%</span>
          </div>
        </div>
      ),
    },
  ];

  // 3 copies = 21 cards for infinite smooth horizontal loop
  const cardInstances = [...baseCards, ...baseCards, ...baseCards];

  // Helper to calculate initial static transform positions
  const getInitialStyle = (index: number) => {
    // Center card is at index 10 (Card 4: Intelligence in Every Decision)
    const slotWidth = 265;
    const maxDist = 760;
    const relX = (index - 10) * slotWidth;
    const normX = Math.max(-1.1, Math.min(1.1, relX / maxDist));
    const absNorm = Math.abs(normX);

    const rotateY = normX * 13.5;
    const translateZ = -Math.pow(Math.min(1, absNorm), 1.4) * 45;
    const scale = 1 - Math.pow(Math.min(1, absNorm), 1.5) * 0.05;
    const opacity = Math.max(0, 1 - Math.pow(absNorm, 3) * 0.9);

    return {
      transform: `translate3d(calc(${relX}px - 50%), -50%, ${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
      opacity: `${opacity}`,
    };
  };

  // Continuous smooth 3D gallery animation loop - GPU optimized and viewport gated
  useAnimationFrame((time, delta) => {
    if (prefersReducedMotion || !isHeroInViewRef.current) return;

    const isMobile = isMobileRef.current;
    const slotWidth = isMobile ? 220 : 265;
    const cycleWidth = 7 * slotWidth;
    const maxDist = isMobile ? 440 : 760;

    // Full 7-card cycle in 30 seconds
    const speed = cycleWidth / 30000;
    offsetRef.current = (offsetRef.current + speed * delta) % cycleWidth;

    const totalCount = cardInstances.length;
    const halfTotal = (totalCount * slotWidth) / 2;

    // On mobile, use gentler 3D rotation and depth to prevent frame drops on mobile GPUs
    const maxRotateY = isMobile ? 8.5 : 13.5;
    const maxDepth = isMobile ? 28 : 45;

    cardRefs.current.forEach((el, index) => {
      if (!el) return;

      // Index 10 is the center card
      let relX = (index - 10) * slotWidth - offsetRef.current;

      // Seamless toroidal wrap within bounds
      while (relX < -halfTotal) relX += totalCount * slotWidth;
      while (relX > halfTotal) relX -= totalCount * slotWidth;

      const normX = Math.max(-1.15, Math.min(1.15, relX / maxDist));
      const absNorm = Math.abs(normX);

      // Edge opacity falloff
      const opacity = Math.max(0, 1 - Math.pow(absNorm, 3) * 0.9);

      // CULL OFFSCREEN: If card is fully faded out at edge, hide completely and skip matrix interpolation
      if (opacity <= 0.01) {
        if (el.style.visibility !== 'hidden') {
          el.style.visibility = 'hidden';
          el.style.opacity = '0';
        }
        return;
      }

      if (el.style.visibility !== 'visible') {
        el.style.visibility = 'visible';
      }

      // GPU-friendly 3D transforms only (translate3d, rotateY, scale)
      const rotateY = normX * maxRotateY;
      const translateZ = -Math.pow(Math.min(1, absNorm), 1.4) * maxDepth;
      const scale = 1 - Math.pow(Math.min(1, absNorm), 1.5) * 0.05;

      el.style.transform = `translate3d(calc(${relX}px - 50%), -50%, ${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`;
      el.style.opacity = `${opacity}`;
    });
  });

  return (
    <section className="relative pt-12 pb-14 md:pt-18 md:pb-18 px-4 sm:px-6 overflow-hidden bg-[#FDFDFD]">
      {/* Aceternity Cloud Shader: Subtle warm peach atmospheric background layer */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <CloudShader
          cloudColor="#FFC2A5"
          skyTopColor="#FFF4EE"
          skyBottomColor="#FDFDFD"
          speed={0.35}
          count={4}
          className="w-full h-full opacity-80 sm:opacity-85 [mask-image:linear-gradient(to_bottom,black_0%,black_65%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_65%,transparent_100%)]"
        />
      </div>

      {/* Soft warm center radial wash keeping heading and text readable with zero hotspot */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[500px] bg-gradient-to-b from-[#FFF4EE]/70 via-[#FDFDFD]/50 to-transparent rounded-full blur-3xl pointer-events-none z-[1]" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Centered Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4F4F5] border border-[#E5E7EB] text-xs font-mono font-semibold text-[#4B5563] mb-6 shadow-sm">
          <Sparkles size={13} className="text-[#FF5722] fill-[#FF5722]" />
          <span>Flow Platform Plans</span>
          <span className="text-[#9CA3AF]">// v2.4 Release</span>
        </div>

        {/* Centered Heading - Scaled for Dominance */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-[76px] font-medium tracking-tight text-[#111827] leading-[1.02] max-w-5xl mb-6">
          Streamline operations with{' '}
          <span className="text-[#FF5722]">smart workflows.</span>
        </h1>

        {/* Centered Description in Editorial Serif (Newsreader) */}
        <p className="font-serif text-lg sm:text-xl text-[#4B5563] font-normal leading-[1.65] max-w-2xl mb-8">
          Optimize your daily tasks and harness data for clear outcomes. Expand capabilities
          across your entire product ecosystem with precision design and structured automation.
        </p>

        {/* Centered CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-12 sm:mb-14 w-full sm:w-auto">
          <a
            href="/plans-pricing"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-[8px] bg-[#FF5722] text-white font-medium text-sm hover:bg-[#E64A19] shadow-sm transition-all active:scale-[0.98]"
          >
            <span>Get Started</span>
            <ArrowUpRight size={16} />
          </a>

          <a
            href="/interface-patterns"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[8px] bg-white border border-[#E5E7EB] text-[#111827] font-medium text-sm hover:bg-[#F4F4F5] transition-all active:scale-[0.98]"
          >
            <Play size={14} className="fill-[#111827]" />
            <span>View Patterns</span>
          </a>
        </div>

        {/* Large Visual Showcase: Wide Horizontal 3D Gallery (Shallow Arc Motion) */}
        <div className="w-full relative pt-2 pb-4 flex flex-col items-center">
          {/* Perspective 3D Gallery Container with Edge Fade Mask */}
          <div
            ref={containerRef}
            className="relative w-full h-[370px] sm:h-[410px] lg:h-[440px] flex items-center justify-center overflow-hidden select-none"
            style={{
              perspective: '1200px',
              transformStyle: 'preserve-3d',
              maskImage:
                'linear-gradient(90deg, transparent 0%, black 12%, black 88%, transparent 100%)',
              WebkitMaskImage:
                'linear-gradient(90deg, transparent 0%, black 12%, black 88%, transparent 100%)',
            }}
          >
            {/* Center Spatial Coordinate Anchor */}
            <div
              className="relative w-0 h-full flex items-center justify-center pointer-events-none"
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              {cardInstances.map((card, idx) => (
                <div
                  key={`${card.id}-${idx}`}
                  ref={(el) => {
                    cardRefs.current[idx] = el;
                  }}
                  className="absolute top-1/2 left-0 w-[215px] sm:w-[255px] lg:w-[275px] h-[310px] sm:h-[340px] lg:h-[360px] pointer-events-auto cursor-default transition-shadow"
                  style={{
                    transformStyle: 'preserve-3d',
                    willChange: 'transform, opacity',
                    ...getInitialStyle(idx),
                  }}
                >
                  {card.render()}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-3 text-center text-xs font-mono text-[#9CA3AF] tracking-wide">
            Sub-40ms execution engine // Sub-second DAG orchestration
          </div>
        </div>
      </div>
    </section>
  );
}

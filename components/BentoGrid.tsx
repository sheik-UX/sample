'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Cube } from '@phosphor-icons/react';
import { motion, useReducedMotion } from 'framer-motion';
import { ScrollReveal as SectionReveal, StaggerContainer, StaggerItem, IllustrationReveal } from './animations';
import { ScrollReveal } from '@/components/lightswind/scroll-reveal';

/* =========================================================================
   CARD 1 OVERLAY: Refined Product Assets (Design System Assembly & Browsing)
   ========================================================================= */
function ProductAssetsOverlay() {
  const shouldReduceMotion = useReducedMotion();
  if (shouldReduceMotion) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-10">
      {/* SVG Hairline Alignment Guides */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        {/* Horizontal Alignment Guide */}
        <motion.line
          x1="0%"
          y1="48%"
          x2="100%"
          y2="48%"
          stroke="#FF5722"
          strokeWidth="1"
          strokeDasharray="4 4"
          animate={{ opacity: [0, 0, 0.75, 0.75, 0, 0] }}
          transition={{ duration: 7, repeat: Infinity, times: [0, 0.22, 0.25, 0.55, 0.6, 1], ease: 'easeInOut' }}
        />
        {/* Vertical Alignment Guide */}
        <motion.line
          x1="38%"
          y1="0%"
          x2="38%"
          y2="100%"
          stroke="#FF5722"
          strokeWidth="1"
          strokeDasharray="4 4"
          animate={{ opacity: [0, 0, 0.75, 0.75, 0, 0] }}
          transition={{ duration: 7, repeat: Infinity, times: [0, 0.22, 0.25, 0.55, 0.6, 1], ease: 'easeInOut' }}
        />
        {/* Alignment Crosshairs (+) */}
        <motion.g
          animate={{ opacity: [0, 0, 1, 1, 0, 0] }}
          transition={{ duration: 7, repeat: Infinity, times: [0, 0.22, 0.26, 0.55, 0.6, 1] }}
        >
          <line x1="38%" y1="45%" x2="38%" y2="51%" stroke="#FF5722" strokeWidth="1.5" />
          <line x1="36%" y1="48%" x2="40%" y2="48%" stroke="#FF5722" strokeWidth="1.5" />
        </motion.g>
      </svg>

      {/* Swatch 1 Token Highlight */}
      <motion.div
        className="absolute top-[17%] left-[9%] w-[5.5%] h-[9%] rounded-[4px] border-2 border-[#FF5722] shadow-[0_0_10px_rgba(255,87,34,0.4)] pointer-events-none"
        animate={{ opacity: [0, 1, 1, 0, 0], scale: [0.9, 1.05, 1, 0.95, 0.9] }}
        transition={{ duration: 7, repeat: Infinity, times: [0.05, 0.1, 0.28, 0.32, 1], ease: 'easeInOut' }}
      />

      {/* Swatch 2 Token Highlight */}
      <motion.div
        className="absolute top-[17%] left-[16%] w-[5.5%] h-[9%] rounded-[4px] border-2 border-[#FF5722] shadow-[0_0_10px_rgba(255,87,34,0.4)] pointer-events-none"
        animate={{ opacity: [0, 0, 1, 1, 0, 0], scale: [0.9, 0.9, 1.05, 1, 0.95, 0.9] }}
        transition={{ duration: 7, repeat: Infinity, times: [0, 0.12, 0.16, 0.32, 0.36, 1], ease: 'easeInOut' }}
      />

      {/* Main Component Precision Selection Bounding Box */}
      <motion.div
        className="absolute top-[28%] left-[23%] w-[38%] h-[48%] rounded-[8px] border border-[#FF5722] bg-[#FF5722]/[0.03] shadow-[0_0_20px_rgba(255,87,34,0.15)] pointer-events-none"
        animate={{ opacity: [0, 0, 1, 1, 0, 0], scale: [0.98, 0.98, 1, 1, 0.99, 0.98] }}
        transition={{ duration: 7, repeat: Infinity, times: [0, 0.24, 0.28, 0.65, 0.72, 1], ease: 'easeOut' }}
      >
        <div className="absolute -top-1 -left-1 w-2 h-2 bg-white border border-[#FF5722] rounded-[1px]" />
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-white border border-[#FF5722] rounded-[1px]" />
        <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white border border-[#FF5722] rounded-[1px]" />
        <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-white border border-[#FF5722] rounded-[1px]" />
        <div className="absolute -top-6 left-0 px-2 py-0.5 rounded-[4px] bg-[#111827] text-white text-[9px] font-mono font-medium flex items-center gap-1.5 shadow-md">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF5722]" />
          <span>Card_Primary // 320×180</span>
        </div>
      </motion.div>

      {/* Component 2 Focus Selection Box */}
      <motion.div
        className="absolute top-[32%] right-[10%] w-[20%] h-[40%] rounded-[8px] border border-[#FF5722] bg-[#FF5722]/[0.03] shadow-[0_0_15px_rgba(255,87,34,0.12)] pointer-events-none"
        animate={{ opacity: [0, 0, 0, 1, 1, 0], scale: [0.97, 0.97, 0.97, 1, 1, 0.98] }}
        transition={{ duration: 7, repeat: Infinity, times: [0, 0.5, 0.55, 0.59, 0.82, 0.88], ease: 'easeOut' }}
      >
        <div className="absolute -top-1 -left-1 w-2 h-2 bg-white border border-[#FF5722] rounded-[1px]" />
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-white border border-[#FF5722] rounded-[1px]" />
        <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white border border-[#FF5722] rounded-[1px]" />
        <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-white border border-[#FF5722] rounded-[1px]" />
        <div className="absolute -top-5 right-0 px-1.5 py-0.5 rounded-[4px] bg-[#FF5722] text-white text-[8px] font-mono font-medium shadow-xs">
          Stack_Tokens
        </div>
      </motion.div>

      {/* Designer Cursor Path & Interaction */}
      <motion.div
        className="absolute z-20 pointer-events-none"
        animate={{
          top: ['65%', '20%', '20%', '35%', '35%', '42%', '42%', '70%'],
          left: ['70%', '11%', '11%', '32%', '32%', '82%', '82%', '70%'],
          opacity: [0, 1, 1, 1, 1, 1, 0, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          times: [0, 0.08, 0.18, 0.26, 0.48, 0.58, 0.85, 1],
          ease: [0.25, 1, 0.5, 1],
        }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="drop-shadow-md">
          <path d="M3 3L10.5 21L13.8 13.8L21 10.5L3 3Z" fill="#111827" stroke="#FFFFFF" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
        <div className="ml-3 -mt-1 px-1.5 py-0.5 rounded-[4px] bg-[#111827] text-white text-[8px] font-mono font-semibold shadow-md whitespace-nowrap flex items-center gap-1">
          <span className="w-1 h-1 rounded-full bg-[#FF5722]" />
          <span>PaperFlow UI</span>
        </div>
        <motion.div
          className="absolute -top-1 -left-1 w-5 h-5 rounded-full border-2 border-[#FF5722] pointer-events-none"
          animate={{ scale: [0.5, 1.8, 0.5, 1.8, 0.5], opacity: [0, 0.8, 0, 0.8, 0] }}
          transition={{ duration: 7, repeat: Infinity, times: [0.08, 0.15, 0.24, 0.32, 0.4], ease: 'easeOut' }}
        />
      </motion.div>

      {/* Bottom Telemetry Tag */}
      <motion.div
        className="absolute bottom-3 left-4 px-2.5 py-1 rounded-[6px] bg-white/90 backdrop-blur-md border border-[#E5E7EB] text-[9px] font-mono text-[#111827] font-semibold flex items-center gap-2 shadow-xs"
        animate={{ opacity: [0, 0, 1, 1, 1, 0], y: [4, 4, 0, 0, 0, 4] }}
        transition={{ duration: 7, repeat: Infinity, times: [0, 0.3, 0.35, 0.8, 0.88, 1] }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
        <span>Design System: Synced (1,400+ SVG Tokens)</span>
      </motion.div>
    </div>
  );
}

/* =========================================================================
   CARD 2 OVERLAY: Frameworks (Modular Architectural Construction & Flow)
   ========================================================================= */
function FrameworksOverlay() {
  const shouldReduceMotion = useReducedMotion();
  if (shouldReduceMotion) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-10">
      {/* SVG Isometric Flow Lines & Traveling Data Packets */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        {/* Isometric Pipeline Ingress Trace */}
        <motion.path
          d="M 280 40 L 220 80 L 160 120"
          stroke="#FF5722"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 6.5, repeat: Infinity, times: [0, 0.25, 0.8, 0.95], ease: 'easeInOut' }}
        />

        {/* Traveling Signal Pulse 1 */}
        <motion.circle
          r="3"
          fill="#FF5722"
          animate={{
            cx: ['75%', '55%', '42%'],
            cy: ['18%', '36%', '48%'],
            opacity: [0, 1, 0],
          }}
          transition={{ duration: 6.5, repeat: Infinity, times: [0.05, 0.25, 0.4], ease: 'easeInOut' }}
        />

        {/* Traveling Signal Pulse 2 to Bottom API Node */}
        <motion.circle
          r="3"
          fill="#10B981"
          animate={{
            cx: ['42%', '60%', '76%'],
            cy: ['48%', '58%', '70%'],
            opacity: [0, 1, 0],
          }}
          transition={{ duration: 6.5, repeat: Infinity, times: [0.35, 0.55, 0.72], ease: 'easeInOut' }}
        />
      </svg>

      {/* Top Ingress Node Beacon */}
      <motion.div
        className="absolute top-[16%] right-[22%] w-4 h-4 rounded-full border border-[#FF5722] bg-[#FF5722]/20 flex items-center justify-center pointer-events-none"
        animate={{ scale: [1, 1.4, 1], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#FF5722]" />
      </motion.div>

      {/* Central Modular Nodes Matrix Highlight */}
      <motion.div
        className="absolute top-[38%] left-[34%] w-[24%] h-[28%] rounded-[8px] border border-[#FF5722] bg-[#FF5722]/[0.04] pointer-events-none"
        animate={{
          opacity: [0, 0, 1, 1, 0],
          scale: [0.95, 0.95, 1.02, 1, 0.95],
          boxShadow: ['0 0 0 rgba(255,87,34,0)', '0 0 0 rgba(255,87,34,0)', '0 0 16px rgba(255,87,34,0.3)', '0 0 8px rgba(255,87,34,0.15)', '0 0 0 rgba(255,87,34,0)'],
        }}
        transition={{ duration: 6.5, repeat: Infinity, times: [0, 0.22, 0.35, 0.75, 0.9] }}
      >
        <div className="absolute -top-5 left-0 px-1.5 py-0.5 rounded-[4px] bg-[#111827] text-white text-[8px] font-mono font-medium shadow-xs">
          Modular_Nodes (3×3)
        </div>
      </motion.div>

      {/* Bottom API Logic Layer Status */}
      <motion.div
        className="absolute bottom-[20%] right-[16%] w-[22%] h-[22%] rounded-[6px] border border-emerald-400 bg-emerald-500/[0.06] pointer-events-none"
        animate={{
          opacity: [0, 0, 0, 1, 0],
          boxShadow: ['0 0 0 rgba(16,185,129,0)', '0 0 0 rgba(16,185,129,0)', '0 0 0 rgba(16,185,129,0)', '0 0 14px rgba(16,185,129,0.35)', '0 0 0 rgba(16,185,129,0)'],
        }}
        transition={{ duration: 6.5, repeat: Infinity, times: [0, 0.45, 0.52, 0.78, 0.92] }}
      >
        <div className="absolute -top-4 right-0 px-1.5 py-0.5 rounded-[3px] bg-emerald-700 text-white text-[7px] font-mono font-semibold shadow-xs">
          API_Sync: OK
        </div>
      </motion.div>

      {/* Telemetry Status Banner */}
      <motion.div
        className="absolute bottom-3 left-3 px-2 py-0.5 rounded-[4px] bg-white/95 backdrop-blur-sm border border-[#E5E7EB] text-[8.5px] font-mono text-[#111827] font-medium flex items-center gap-1.5 shadow-xs"
        animate={{ opacity: [0, 0, 1, 1, 0], y: [3, 3, 0, 0, 3] }}
        transition={{ duration: 6.5, repeat: Infinity, times: [0, 0.28, 0.35, 0.82, 0.92] }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
        <span>Next.js 14.2 // Zero Overhead</span>
      </motion.div>
    </div>
  );
}

/* =========================================================================
   CARD 3 OVERLAY: Inter & Newsreader (Editorial Typographic Specimen Exploration)
   ========================================================================= */
function TypographyOverlay() {
  const shouldReduceMotion = useReducedMotion();
  if (shouldReduceMotion) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-10">
      {/* SVG Typographic Measurement Guidelines */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        {/* Cap Height Line */}
        <motion.line
          x1="0%"
          y1="24%"
          x2="100%"
          y2="24%"
          stroke="#FF5722"
          strokeWidth="1"
          strokeDasharray="3 3"
          animate={{ opacity: [0, 0.8, 0.8, 0] }}
          transition={{ duration: 6.2, repeat: Infinity, times: [0.08, 0.2, 0.78, 0.9], ease: 'easeInOut' }}
        />

        {/* X-Height Mean Line */}
        <motion.line
          x1="0%"
          y1="44%"
          x2="100%"
          y2="44%"
          stroke="#9CA3AF"
          strokeWidth="1"
          strokeDasharray="2 2"
          animate={{ opacity: [0, 0.6, 0.6, 0] }}
          transition={{ duration: 6.2, repeat: Infinity, times: [0.12, 0.24, 0.78, 0.9], ease: 'easeInOut' }}
        />

        {/* Baseline Highlight */}
        <motion.line
          x1="0%"
          y1="64%"
          x2="100%"
          y2="64%"
          stroke="#FF5722"
          strokeWidth="1.5"
          animate={{ opacity: [0, 0.9, 0.9, 0] }}
          transition={{ duration: 6.2, repeat: Infinity, times: [0.15, 0.28, 0.8, 0.92], ease: 'easeInOut' }}
        />
      </svg>

      {/* Vector Glyph Anchor Node on Display 'A' Apex */}
      <motion.div
        className="absolute top-[23%] left-[17%] -translate-x-1/2 -translate-y-1/2 flex items-center gap-1 pointer-events-none"
        animate={{ opacity: [0, 0, 1, 1, 0], scale: [0.5, 0.5, 1, 1, 0.5] }}
        transition={{ duration: 6.2, repeat: Infinity, times: [0, 0.18, 0.25, 0.78, 0.88] }}
      >
        <div className="w-2.5 h-2.5 rounded-full border-2 border-[#FF5722] bg-white shadow-xs" />
        <span className="px-1 py-0.2 rounded bg-[#111827] text-white text-[7px] font-mono">
          Apex: 64px
        </span>
      </motion.div>

      {/* Optical Kerning Calipers on 'Aa' Specimen */}
      <motion.div
        className="absolute top-[20%] right-[18%] w-[26%] h-[48%] rounded-[4px] border border-[#FF5722] bg-[#FF5722]/[0.03] pointer-events-none"
        animate={{
          opacity: [0, 0, 1, 1, 0],
          scale: [0.96, 0.96, 1, 1, 0.96],
        }}
        transition={{ duration: 6.2, repeat: Infinity, times: [0, 0.28, 0.35, 0.8, 0.9] }}
      >
        <div className="absolute -top-4 right-0 px-1 py-0.2 rounded bg-[#FF5722] text-white text-[7px] font-mono font-medium shadow-xs">
          Glyph_Spec // 1.04lh
        </div>
      </motion.div>

      {/* Scanning Highlight Bar Gliding Down Typographic Weight Stack */}
      <motion.div
        className="absolute left-[8%] w-[42%] h-[12%] rounded-[4px] bg-[#FF5722]/10 border-l-2 border-[#FF5722] pointer-events-none"
        animate={{
          top: ['66%', '74%', '82%', '66%'],
          opacity: [0, 1, 1, 0],
        }}
        transition={{ duration: 6.2, repeat: Infinity, times: [0.38, 0.55, 0.72, 0.88], ease: 'easeInOut' }}
      />

      {/* Verification Badge */}
      <motion.div
        className="absolute bottom-3 right-3 px-2 py-0.5 rounded-[4px] bg-white/95 backdrop-blur-sm border border-[#E5E7EB] text-[8.5px] font-mono text-[#111827] font-medium flex items-center gap-1.5 shadow-xs"
        animate={{ opacity: [0, 0, 1, 1, 0], y: [3, 3, 0, 0, 3] }}
        transition={{ duration: 6.2, repeat: Infinity, times: [0, 0.32, 0.4, 0.82, 0.92] }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#FF5722]" />
        <span>Optical Kerning: Calibrated</span>
      </motion.div>
    </div>
  );
}

/* =========================================================================
   CARD 4 OVERLAY: Sub-Second Execution (High-Speed Data Flow & Pipeline Engine)
   ========================================================================= */
function PipelineEngineOverlay() {
  const shouldReduceMotion = useReducedMotion();
  const [latencyVal, setLatencyVal] = useState('38ms');

  useEffect(() => {
    if (shouldReduceMotion) return;
    const lats = ['38ms', '34ms', '28ms', '32ms', '24ms'];
    let i = 0;
    const interval = setInterval(() => {
      i = (i + 1) % lats.length;
      setLatencyVal(lats[i]);
    }, 1800);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  if (shouldReduceMotion) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-10">
      {/* SVG High-Velocity Execution Paths */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        {/* Stream 1: Ingest into Central Chamber */}
        <motion.line
          x1="18%"
          y1="34%"
          x2="38%"
          y2="44%"
          stroke="#FF5722"
          strokeWidth="2"
          strokeDasharray="6 4"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Stream 2: Processing Corridor */}
        <motion.line
          x1="38%"
          y1="44%"
          x2="64%"
          y2="58%"
          stroke="#FF5722"
          strokeWidth="2.5"
          strokeDasharray="8 4"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
        />

        {/* Stream 3: Output Dispatch Stream */}
        <motion.line
          x1="64%"
          y1="58%"
          x2="84%"
          y2="78%"
          stroke="#FF5722"
          strokeWidth="3"
          strokeDasharray="8 4"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
        />

        {/* High-Speed Traveling Signal Packet 1 */}
        <motion.circle
          r="3.5"
          fill="#FFFFFF"
          stroke="#FF5722"
          strokeWidth="2"
          animate={{
            cx: ['18%', '38%', '64%', '84%'],
            cy: ['34%', '44%', '58%', '78%'],
            opacity: [0, 1, 1, 0],
          }}
          transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* High-Speed Traveling Signal Packet 2 */}
        <motion.circle
          r="3"
          fill="#10B981"
          animate={{
            cx: ['18%', '38%', '64%', '84%'],
            cy: ['34%', '44%', '58%', '78%'],
            opacity: [0, 1, 1, 0],
          }}
          transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: 1.6 }}
        />
      </svg>

      {/* Central Processing Core Pulse Wave */}
      <div className="absolute top-[58%] left-[64%] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <motion.div
          className="w-16 h-16 rounded-full border-2 border-[#FF5722]/50 bg-[#FF5722]/10"
          animate={{ scale: [1, 1.8, 2.4], opacity: [0.8, 0.3, 0] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: 'easeOut' }}
        />
      </div>

      {/* Ingest Node Live Beacon */}
      <motion.div
        className="absolute top-[32%] left-[16%] w-5 h-5 rounded-full border border-[#FF5722] bg-[#FF5722]/20 flex items-center justify-center pointer-events-none"
        animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="w-2 h-2 rounded-full bg-[#FF5722]" />
      </motion.div>

      {/* Action Dispatcher Node Cluster Pulse */}
      <motion.div
        className="absolute top-[34%] right-[14%] w-[18%] h-[24%] rounded-[6px] border border-[#FF5722] bg-[#FF5722]/[0.05] pointer-events-none"
        animate={{
          opacity: [0.3, 0.9, 0.3],
          boxShadow: ['0 0 0 rgba(255,87,34,0)', '0 0 15px rgba(255,87,34,0.3)', '0 0 0 rgba(255,87,34,0)'],
        }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
      >
        <div className="absolute -top-4 right-0 px-1.5 py-0.2 rounded bg-[#111827] text-white text-[7.5px] font-mono shadow-xs">
          Dispatch: Active
        </div>
      </motion.div>

      {/* Live HUD Telemetry Tag */}
      <div className="absolute top-3 right-4 px-2.5 py-1 rounded-[6px] bg-white/95 backdrop-blur-md border border-[#E5E7EB] text-[9px] font-mono text-[#111827] font-semibold flex items-center gap-2.5 shadow-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
        <span>EXECUTION:</span>
        <span className="px-1.5 py-0.2 rounded bg-[#FFF1EC] text-[#FF5722] font-bold border border-[#FFD0C2] tabular-nums">
          {latencyVal}
        </span>
      </div>

      {/* Sub-Second Status Footer */}
      <motion.div
        className="absolute bottom-3 left-4 px-2.5 py-1 rounded-[6px] bg-white/90 backdrop-blur-md border border-[#E5E7EB] text-[9px] font-mono text-[#111827] font-semibold flex items-center gap-2 shadow-xs"
        animate={{ opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
        <span>Operations Engine: 100/100 Core Web Vitals</span>
      </motion.div>
    </div>
  );
}

/* =========================================================================
   MAIN BENTO GRID COMPONENT
   ========================================================================= */
export default function BentoGrid() {
  return (
    <section id="patterns" className="relative py-14 sm:py-18 md:py-22 px-6 max-w-7xl mx-auto bg-[#FDFDFD] overflow-hidden">
      {/* Section Introduction */}
      <SectionReveal className="max-w-3xl mb-10 sm:mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4F4F5] border border-[#E5E7EB] text-xs font-mono font-semibold text-[#4B5563] mb-4">
          <Cube size={13} weight="fill" className="text-[#FF5722]" />
          <span>Product Capabilities // Architecture</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-medium tracking-tight text-[#111827] leading-[1.06] mb-4">
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
            Everything you need to build powerful workflows.
          </ScrollReveal>
        </h2>

        <p className="text-base sm:text-lg text-[#4B5563] font-normal leading-relaxed">
          Modular design components, intelligent automation nodes, and sub-second execution engines
          engineered for rapid assembly and rigorous operational consistency.
        </p>
      </SectionReveal>

      {/* Gapless Bento Grid with grid-flow-dense & Stagger */}
      <StaggerContainer className="grid grid-cols-12 grid-flow-dense gap-6">
        {/* Card 1: Refined Product Assets (col-span-7) */}
        <StaggerItem className="col-span-12 lg:col-span-7">
          <div className="h-full group relative rounded-[16px] bg-white border border-[#E5E7EB] overflow-hidden p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-all hover:border-[#FF5722]">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#FF5722]">
                  DESIGN REPOSITORY
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#F4F4F5] border border-[#E5E7EB] text-[#4B5563]">
                  1,400+ SVG TOKENS
                </span>
              </div>

              {/* Generated Original Illustration with Interactive Product Demo Overlay */}
              <IllustrationReveal className="relative rounded-[12px] overflow-hidden border border-[#E5E7EB] bg-white mb-5">
                <img
                  src="/assets/product_assets.jpg"
                  alt="Refined product assets and design system tokens"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-56 sm:h-72 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <ProductAssetsOverlay />
              </IllustrationReveal>

              <h3 className="text-2xl sm:text-3xl font-medium text-[#111827] tracking-tight">
                Refined product assets
              </h3>

              <p className="text-sm text-[#4B5563] font-normal leading-relaxed mt-2 max-w-lg">
                Vector icon collections, accessible data charts, and production-ready SVG assets
                crafted to communicate complex software states with effortless visual hierarchy.
              </p>
            </div>

            <div className="pt-6 mt-4 border-t border-[#E5E7EB] flex items-center justify-between text-xs font-mono text-[#4B5563]">
              <span>Accessible Design System</span>
              <span className="text-[#111827] font-medium flex items-center gap-1 group-hover:text-[#FF5722] transition-colors">
                Explore Asset Index <ArrowUpRight size={13} />
              </span>
            </div>
          </div>
        </StaggerItem>

        {/* Card 2: Frameworks. (col-span-5) */}
        <StaggerItem className="col-span-12 lg:col-span-5">
          <div className="h-full group relative rounded-[16px] bg-white border border-[#E5E7EB] overflow-hidden p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-all hover:border-[#FF5722]">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#FF5722]">
                  MODERN ECOSYSTEM
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 border border-emerald-200 text-emerald-700 font-semibold">
                  NEXT.JS 14 + TS
                </span>
              </div>

              {/* Generated Original Illustration with Frameworks Animation Overlay */}
              <IllustrationReveal className="relative rounded-[12px] overflow-hidden border border-[#E5E7EB] bg-white mb-5">
                <img
                  src="/assets/frameworks_nodes.jpg"
                  alt="Software frameworks and modular code nodes"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-48 sm:h-60 object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <FrameworksOverlay />
              </IllustrationReveal>

              <h3 className="text-2xl sm:text-3xl font-medium text-[#111827] tracking-tight">
                Frameworks.
              </h3>

              <p className="text-sm text-[#4B5563] font-normal leading-relaxed mt-2">
                Native bindings for Next.js App Router, Tailwind CSS 3.4, and TypeScript.
                Drop-in components designed to hydrate instantly without runtime friction.
              </p>
            </div>

            <div className="pt-6 mt-4 border-t border-[#E5E7EB] flex items-center justify-between text-xs font-mono text-[#4B5563]">
              <span>Zero Runtime Overhead</span>
              <span className="text-[#111827] font-medium flex items-center gap-1 group-hover:text-[#FF5722] transition-colors">
                Inspect Spec <ArrowUpRight size={13} />
              </span>
            </div>
          </div>
        </StaggerItem>

        {/* Card 3: Inter Sans (col-span-5) */}
        <StaggerItem className="col-span-12 lg:col-span-5">
          <div className="h-full group relative rounded-[16px] bg-white border border-[#E5E7EB] overflow-hidden p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-all hover:border-[#FF5722]">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#FF5722]">
                  TYPOGRAPHIC SPEC
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#F4F4F5] border border-[#E5E7EB] text-[#4B5563]">
                  EDITORIAL SERIF
                </span>
              </div>

              {/* Generated Original Illustration with Typography Specimen Overlay */}
              <IllustrationReveal className="relative rounded-[12px] overflow-hidden border border-[#E5E7EB] bg-white mb-5">
                <img
                  src="/assets/inter_typography.jpg"
                  alt="Inter Sans typographic specimen and alignment"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-48 sm:h-60 object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <TypographyOverlay />
              </IllustrationReveal>

              <h3 className="text-2xl sm:text-3xl font-medium text-[#111827] tracking-tight">
                Inter & Newsreader
              </h3>

              <p className="text-sm text-[#4B5563] font-normal leading-relaxed mt-2">
                Strictly calibrated for display moments (64px, weight 500, line-height 1.04) and
                editorial body readability in Newsreader (16px, line-height 1.6). Balanced with JetBrains Mono.
              </p>
            </div>

            <div className="pt-6 mt-4 border-t border-[#E5E7EB] flex items-center justify-between text-xs font-mono text-[#4B5563]">
              <span>Calibrated Optical Kerning</span>
              <span className="text-[#111827] font-medium flex items-center gap-1 group-hover:text-[#FF5722] transition-colors">
                Type Scale <ArrowUpRight size={13} />
              </span>
            </div>
          </div>
        </StaggerItem>

        {/* Card 4: Sub-Second Execution Engine (col-span-7) */}
        <StaggerItem className="col-span-12 lg:col-span-7">
          <div className="h-full group relative rounded-[16px] bg-white border border-[#E5E7EB] overflow-hidden p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-all hover:border-[#FF5722]">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#FF5722]">
                  OPERATIONS ENGINE
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 border border-emerald-200 text-emerald-700 font-semibold">
                  SUB-40MS EDGE
                </span>
              </div>

              {/* Generated Original Illustration with High-Velocity Execution Overlay */}
              <IllustrationReveal className="relative rounded-[12px] overflow-hidden border border-[#E5E7EB] bg-white mb-5">
                <img
                  src="/assets/pipeline_engine.jpg"
                  alt="Sub-second data execution and automated pipeline stream"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-56 sm:h-72 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <PipelineEngineOverlay />
              </IllustrationReveal>

              <h3 className="text-2xl sm:text-3xl font-medium text-[#111827] tracking-tight">
                Sub-Second Execution
              </h3>

              <p className="text-sm text-[#4B5563] font-normal leading-relaxed mt-2 max-w-lg">
                Automated pipelines execute in under 40 milliseconds globally across multi-region edge
                deployments. Strict SOC2 Type II compliance standards and reliable error recovery.
              </p>
            </div>

            <div className="pt-6 mt-4 border-t border-[#E5E7EB] flex items-center justify-between text-xs font-mono text-[#4B5563]">
              <span>100/100 Core Web Vitals</span>
              <span className="text-[#111827] font-medium flex items-center gap-1 group-hover:text-[#FF5722] transition-colors">
                View Benchmarks <ArrowUpRight size={13} />
              </span>
            </div>
          </div>
        </StaggerItem>
      </StaggerContainer>
    </section>
  );
}


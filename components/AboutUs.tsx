'use client';

import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  Database,
  GitBranch,
  GitCommit,
  ShieldCheck,
  Table,
  Check,
  Share2,
  Cloud,
  Layers,
  Server,
  Terminal,
  Zap,
} from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { ScrollReveal as SectionReveal } from './animations';
import { ScrollReveal } from '@/components/lightswind/scroll-reveal';

export default function AboutUs() {
  const shouldReduceMotion = useReducedMotion();

  // Dynamic live stream counter for Card 3
  const [velocity, setVelocity] = useState('14,200');
  const [latency, setLatency] = useState('18ms');

  useEffect(() => {
    if (shouldReduceMotion) return;
    const rates = ['14,200', '14,340', '14,480', '14,280', '14,520'];
    const latencies = ['18ms', '16ms', '14ms', '17ms', '15ms'];
    let idx = 0;
    const interval = setInterval(() => {
      idx = (idx + 1) % rates.length;
      setVelocity(rates[idx]);
      setLatency(latencies[idx]);
    }, 2400);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  // Coordinated staggered entrance variants inspired by premium Bento design
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 26,
      scale: shouldReduceMotion ? 1 : 0.985,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: shouldReduceMotion ? 0.25 : 0.65,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section id="about" className="relative py-14 sm:py-18 md:py-22 px-4 sm:px-6 bg-[#FDFDFD] border-t border-[#E5E7EB] overflow-hidden">
      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <SectionReveal className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4F4F5] border border-[#E5E7EB] text-xs font-mono font-semibold text-[#4B5563] mb-4 shadow-xs">
            <Sparkles size={13} className="text-[#FF5722] fill-[#FF5722]" />
            <span>Platform Architecture // Core Foundation</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-medium tracking-tight text-[#111827] leading-[1.06] mb-4">
            <ScrollReveal
              size="lg"
              align="center"
              enableBlur={true}
              baseOpacity={0.1}
              baseRotation={2}
              blurStrength={3}
              staggerDelay={0.035}
              threshold={0.5}
            >
              An operational foundation engineered for modern scale.
            </ScrollReveal>
          </h2>

          <p className="text-base sm:text-lg text-[#4B5563] font-normal leading-relaxed">
            PaperFlow replaces fragile scheduled scripts and fragmented tools with resilient,
            automated workflow pipelines that execute in sub-second cycles.
          </p>
        </SectionReveal>

        {/* 4-Card Bento Grid Layout with Coordinated Framer Motion Entrance */}
        <motion.div
          className="grid grid-cols-12 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >

          {/* Card 1: Platform / Infrastructure - Connects to the entire stack (col-span-12 lg:col-span-5) */}
          <div className="col-span-12 lg:col-span-5">
            <motion.div
              variants={cardVariants}
              whileHover={shouldReduceMotion ? {} : { y: -3 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="h-full rounded-[16px] bg-white border border-[#E5E7EB] p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow hover:border-[#FF5722] group"
            >
              {/* Visual Area: Concentric Radar with Radial SVG Connection Network */}
              <div className="relative w-full h-56 sm:h-64 rounded-[12px] bg-[#F4F4F5] border border-[#E5E7EB] flex items-center justify-center overflow-hidden mb-6">
                
                {/* SVG Radial Connector Circuit Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg">
                  {/* Radial Hairlines connecting center to 6 badge coordinates */}
                  <line x1="50%" y1="50%" x2="25%" y2="20%" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="50%" y1="50%" x2="75%" y2="25%" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="50%" y1="50%" x2="28%" y2="80%" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="50%" y1="50%" x2="75%" y2="78%" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="50%" y1="50%" x2="90%" y2="50%" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="50%" y1="50%" x2="10%" y2="50%" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="3 3" />
                  
                  {/* Animated Traveling Signal Pulses */}
                  {!shouldReduceMotion && (
                    <>
                      <motion.circle
                        r="2.5"
                        fill="#FF5722"
                        animate={{
                          cx: ['50%', '25%'],
                          cy: ['50%', '20%'],
                          opacity: [0, 1, 0],
                        }}
                        transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
                      />
                      <motion.circle
                        r="2.5"
                        fill="#111827"
                        animate={{
                          cx: ['50%', '75%'],
                          cy: ['50%', '25%'],
                          opacity: [0, 1, 0],
                        }}
                        transition={{ duration: 3.1, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
                      />
                      <motion.circle
                        r="2.5"
                        fill="#FF5722"
                        animate={{
                          cx: ['50%', '28%'],
                          cy: ['50%', '80%'],
                          opacity: [0, 1, 0],
                        }}
                        transition={{ duration: 2.9, repeat: Infinity, ease: 'easeInOut', delay: 1.4 }}
                      />
                      <motion.circle
                        r="2.5"
                        fill="#111827"
                        animate={{
                          cx: ['50%', '75%'],
                          cy: ['50%', '78%'],
                          opacity: [0, 1, 0],
                        }}
                        transition={{ duration: 3.3, repeat: Infinity, ease: 'easeInOut', delay: 2.0 }}
                      />
                      <motion.circle
                        r="2.5"
                        fill="#FF5722"
                        animate={{
                          cx: ['50%', '90%'],
                          cy: ['50%', '50%'],
                          opacity: [0, 1, 0],
                        }}
                        transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut', delay: 1.0 }}
                      />
                      <motion.circle
                        r="2.5"
                        fill="#FF5722"
                        animate={{
                          cx: ['50%', '10%'],
                          cy: ['50%', '50%'],
                          opacity: [0, 1, 0],
                        }}
                        transition={{ duration: 2.7, repeat: Infinity, ease: 'easeInOut', delay: 1.6 }}
                      />
                    </>
                  )}
                </svg>

                {/* Precision Concentric Hairlines with subtle ambient breathing */}
                <motion.div
                  className="absolute w-72 h-72 rounded-full border border-[#E5E7EB]"
                  animate={shouldReduceMotion ? {} : { scale: [1, 1.015, 1], opacity: [0.7, 0.95, 0.7] }}
                  transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                  className="absolute w-56 h-56 rounded-full border border-[#E5E7EB]"
                  animate={shouldReduceMotion ? {} : { scale: [1, 1.02, 1], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                />
                <motion.div
                  className="absolute w-40 h-40 rounded-full border border-[#FFD0C2]"
                  animate={shouldReduceMotion ? {} : { scale: [1, 1.025, 1], opacity: [0.75, 1, 0.75] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                />
                <motion.div
                  className="absolute w-24 h-24 rounded-full border border-[#FF5722]/30"
                  animate={shouldReduceMotion ? {} : { scale: [1, 1.03, 1], opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                />

                {/* Central Core Hub with expanding telemetry ripple wave */}
                <div className="relative z-10 flex items-center justify-center">
                  {!shouldReduceMotion && (
                    <motion.div
                      className="absolute w-12 h-12 rounded-[10px] bg-[#FF5722]/30 pointer-events-none"
                      animate={{ scale: [1, 1.6, 2.0], opacity: [0.7, 0.3, 0] }}
                      transition={{ duration: 3.5, repeat: Infinity, ease: 'easeOut' }}
                    />
                  )}
                  <motion.div
                    className="relative z-10 w-12 h-12 rounded-[10px] bg-[#FF5722] text-white flex items-center justify-center font-bold text-base shadow-sm group-hover:scale-105 transition-transform duration-300"
                    whileHover={shouldReduceMotion ? {} : { scale: 1.08 }}
                  >
                    P
                  </motion.div>
                </div>

                {/* Grounded Integration Node Badges with Sequential Cascade & Micro-Drift */}
                {/* 1. Database (Top-Left) */}
                <motion.div
                  className="absolute top-6 left-10 p-2 rounded-[8px] bg-white border border-[#E5E7EB] shadow-xs text-[#4B5563] group-hover:-translate-y-1 transition-all duration-300"
                  animate={shouldReduceMotion ? {} : {
                    y: [0, -3, 0],
                    borderColor: ['#E5E7EB', '#FFD0C2', '#E5E7EB'],
                  }}
                  transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <Database size={15} className="text-[#FF5722]" />
                </motion.div>

                {/* 2. GitBranch (Top-Right) */}
                <motion.div
                  className="absolute top-8 right-12 p-2 rounded-[8px] bg-white border border-[#E5E7EB] shadow-xs text-[#4B5563] group-hover:translate-y-1 transition-all duration-300"
                  animate={shouldReduceMotion ? {} : {
                    y: [0, 3, 0],
                    borderColor: ['#E5E7EB', '#D1D5DB', '#E5E7EB'],
                  }}
                  transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
                >
                  <GitBranch size={15} className="text-[#111827]" />
                </motion.div>

                {/* 3. Server (Bottom-Left) */}
                <motion.div
                  className="absolute bottom-8 left-12 p-2 rounded-[8px] bg-white border border-[#E5E7EB] shadow-xs text-[#4B5563] group-hover:translate-x-1 transition-all duration-300"
                  animate={shouldReduceMotion ? {} : {
                    y: [0, -2.5, 0],
                    borderColor: ['#E5E7EB', '#FFD0C2', '#E5E7EB'],
                  }}
                  transition={{ duration: 5.1, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
                >
                  <Server size={15} className="text-[#FF5722]" />
                </motion.div>

                {/* 4. Terminal (Bottom-Right) */}
                <motion.div
                  className="absolute bottom-10 right-10 p-2 rounded-[8px] bg-white border border-[#E5E7EB] shadow-xs text-[#4B5563] group-hover:-translate-x-1 transition-all duration-300"
                  animate={shouldReduceMotion ? {} : {
                    y: [0, 2.5, 0],
                    borderColor: ['#E5E7EB', '#D1D5DB', '#E5E7EB'],
                  }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1.8 }}
                >
                  <Terminal size={15} className="text-[#111827]" />
                </motion.div>

                {/* 5. Share2 (Middle-Right) */}
                <motion.div
                  className="absolute top-1/2 right-4 -translate-y-1/2 p-2 rounded-[8px] bg-white border border-[#E5E7EB] shadow-xs text-[#4B5563] group-hover:scale-105 transition-all duration-300"
                  animate={shouldReduceMotion ? {} : {
                    y: [0, -2, 0],
                    borderColor: ['#E5E7EB', '#FFD0C2', '#E5E7EB'],
                  }}
                  transition={{ duration: 4.9, repeat: Infinity, ease: 'easeInOut', delay: 0.9 }}
                >
                  <Share2 size={15} className="text-[#FF5722]" />
                </motion.div>

                {/* 6. Zap (Middle-Left) */}
                <motion.div
                  className="absolute top-1/2 left-4 -translate-y-1/2 p-2 rounded-[8px] bg-white border border-[#E5E7EB] shadow-xs text-[#4B5563] group-hover:scale-105 transition-all duration-300"
                  animate={shouldReduceMotion ? {} : {
                    y: [0, 2, 0],
                    borderColor: ['#E5E7EB', '#FFD0C2', '#E5E7EB'],
                  }}
                  transition={{ duration: 5.3, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                >
                  <Zap size={15} className="text-[#FF5722]" />
                </motion.div>
              </div>

              {/* Content Text */}
              <div>
                <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#FF5722] mb-1.5">
                  INTEGRATED INFRASTRUCTURE
                </div>
                <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-[#111827] mb-2">
                  Connects to the entire stack
                </h3>
                <p className="text-sm text-[#4B5563] font-normal leading-relaxed">
                  PaperFlow quickly and securely connects to popular warehouses, relational databases,
                  and custom webhook APIs with sub-second event synchronization.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Card 2: Powerful & Connected - Modern controls, out of the box (col-span-12 lg:col-span-7) */}
          <div className="col-span-12 lg:col-span-7">
            <motion.div
              variants={cardVariants}
              whileHover={shouldReduceMotion ? {} : { y: -3 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="h-full rounded-[16px] bg-white border border-[#E5E7EB] p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow hover:border-[#FF5722] group"
            >
              {/* Visual Area: Three Live Orchestration Panels with Progressive State Flow */}
              <div className="relative w-full h-64 sm:h-64 rounded-[12px] bg-[#F4F4F5] border border-[#E5E7EB] p-2.5 sm:p-4 flex items-center justify-center gap-2 sm:gap-4 overflow-hidden mb-6">
                
                {/* Panel 1: Data Table Mini-Card (Phase 1: Ingest Scanning) */}
                <div className="w-1/3 max-w-[170px] h-[184px] sm:h-44 rounded-[10px] bg-white border border-[#E5E7EB] p-2 sm:p-3 flex flex-col justify-between shadow-xs transition-all duration-300 group-hover:-translate-y-1">
                  <div className="flex items-center gap-1 sm:gap-1.5 pb-2 border-b border-[#E5E7EB]">
                    <Table size={12} className="text-[#FF5722] shrink-0" />
                    <span className="text-[8.5px] sm:text-[10px] font-mono font-semibold text-[#111827] truncate">DATA SCHEMA</span>
                  </div>
                  <div className="space-y-1 sm:space-y-1.5 py-1 text-[8.5px] sm:text-[10px] font-mono text-[#4B5563]">
                    <motion.div
                      className="flex items-center gap-1 p-0.5 sm:p-1 rounded bg-[#F4F4F5] truncate"
                      animate={shouldReduceMotion ? {} : {
                        backgroundColor: ['#F4F4F5', '#FFF1EC', '#F4F4F5'],
                      }}
                      transition={{ duration: 6, repeat: Infinity, times: [0, 0.15, 0.35], ease: 'easeInOut' }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF5722] shrink-0" />
                      <span className="truncate">customers_cdc</span>
                    </motion.div>
                    <motion.div
                      className="flex items-center gap-1 p-0.5 sm:p-1 rounded bg-[#F4F4F5] truncate"
                      animate={shouldReduceMotion ? {} : {
                        backgroundColor: ['#F4F4F5', '#ECFDF5', '#F4F4F5'],
                      }}
                      transition={{ duration: 6, repeat: Infinity, times: [0.15, 0.3, 0.45], ease: 'easeInOut' }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                      <span className="truncate">orders_ledger</span>
                    </motion.div>
                    <motion.div
                      className="flex items-center gap-1 p-0.5 sm:p-1 rounded bg-[#F4F4F5] truncate"
                      animate={shouldReduceMotion ? {} : {
                        backgroundColor: ['#F4F4F5', '#F4F4F5', '#F4F4F5'],
                      }}
                      transition={{ duration: 6, repeat: Infinity, times: [0.3, 0.45, 0.6], ease: 'easeInOut' }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#9CA3AF] shrink-0" />
                      <span className="truncate">telemetry_log</span>
                    </motion.div>
                  </div>
                  <div className="text-[8px] sm:text-[9px] font-mono text-[#9CA3AF] pt-1 border-t border-[#E5E7EB] flex items-center justify-between">
                    <span className="truncate">CDC Sync Active</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                  </div>
                </div>

                {/* Panel 2: Git Commit / Deployment Node (Phase 2: CI Deployment Trigger) */}
                <div className="w-1/3 max-w-[180px] h-[184px] sm:h-44 rounded-[10px] bg-white border border-[#E5E7EB] p-2 sm:p-3 flex flex-col justify-between shadow-xs transition-all duration-300 group-hover:-translate-y-2 z-10">
                  <div className="flex items-center justify-between pb-2 border-b border-[#E5E7EB]">
                    <div className="flex items-center gap-1 sm:gap-1.5 truncate">
                      <GitCommit size={12} className="text-[#111827] shrink-0" />
                      <span className="text-[8.5px] sm:text-[10px] font-mono font-semibold text-[#111827] truncate">WORKFLOW CI</span>
                    </div>
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                  </div>
                  <div className="my-auto space-y-1">
                    <div className="text-[8.5px] sm:text-[10px] font-mono text-[#4B5563]">Commit #4a8f9</div>
                    <motion.div
                      className="p-1 sm:p-1.5 rounded bg-[#FFF1EC] border border-[#FFD0C2] text-[8.5px] sm:text-[10px] font-mono text-[#FF5722] font-semibold flex items-center justify-between overflow-hidden relative"
                      animate={shouldReduceMotion ? {} : {
                        scale: [1, 1.03, 1],
                        boxShadow: ['0 0 0 rgba(255,87,34,0)', '0 0 12px rgba(255,87,34,0.3)', '0 0 0 rgba(255,87,34,0)'],
                      }}
                      transition={{ duration: 6, repeat: Infinity, times: [0.35, 0.5, 0.7], ease: 'easeInOut' }}
                    >
                      <span className="truncate">deploy:prod</span>
                      <motion.div
                        animate={shouldReduceMotion ? {} : {
                          scale: [0.7, 1.3, 1],
                        }}
                        transition={{ duration: 6, repeat: Infinity, times: [0.35, 0.48, 0.7], ease: 'easeOut' }}
                      >
                        <Check size={10} strokeWidth={3} className="shrink-0" />
                      </motion.div>
                    </motion.div>
                  </div>
                  <div className="text-[8px] sm:text-[9px] font-mono text-[#4B5563] pt-1 border-t border-[#E5E7EB] truncate">
                    Branch: main
                  </div>
                </div>

                {/* Panel 3: DAG Execution Split (Phase 3: Sub-Second Stream) */}
                <div className="w-1/3 max-w-[170px] h-[184px] sm:h-44 rounded-[10px] bg-white border border-[#E5E7EB] p-2 sm:p-3 flex flex-col justify-between shadow-xs transition-all duration-300 group-hover:-translate-y-1">
                  <div className="flex items-center gap-1 sm:gap-1.5 pb-2 border-b border-[#E5E7EB]">
                    <Layers size={12} className="text-[#FF5722] shrink-0" />
                    <span className="text-[8.5px] sm:text-[10px] font-mono font-semibold text-[#111827] truncate">PIPELINE DAG</span>
                  </div>
                  <div className="my-auto flex flex-col items-center justify-center gap-1">
                    <motion.div
                      className="w-full text-center px-1 py-0.5 rounded bg-[#F4F4F5] text-[8px] sm:text-[9px] font-mono text-[#111827] border border-[#E5E7EB] truncate"
                      animate={shouldReduceMotion ? {} : {
                        borderColor: ['#E5E7EB', '#FF5722', '#E5E7EB'],
                        backgroundColor: ['#F4F4F5', '#FFF1EC', '#F4F4F5'],
                      }}
                      transition={{ duration: 6, repeat: Infinity, times: [0.65, 0.75, 0.95], ease: 'easeInOut' }}
                    >
                      Ingest Node
                    </motion.div>
                    <motion.div
                      className="h-2 sm:h-3 w-px bg-[#FF5722]"
                      animate={shouldReduceMotion ? {} : {
                        scaleY: [0.4, 1.2, 0.4],
                        opacity: [0.4, 1, 0.4],
                      }}
                      transition={{ duration: 6, repeat: Infinity, times: [0.7, 0.8, 0.95], ease: 'easeInOut' }}
                    />
                    <motion.div
                      className="w-full text-center px-1 py-0.5 rounded bg-[#FFF1EC] text-[8px] sm:text-[9px] font-mono text-[#FF5722] font-semibold border border-[#FFD0C2] truncate"
                      animate={shouldReduceMotion ? {} : {
                        scale: [1, 1.04, 1],
                        boxShadow: ['0 0 0 rgba(255,87,34,0)', '0 0 10px rgba(255,87,34,0.25)', '0 0 0 rgba(255,87,34,0)'],
                      }}
                      transition={{ duration: 6, repeat: Infinity, times: [0.75, 0.85, 0.98], ease: 'easeInOut' }}
                    >
                      Transform ({latency})
                    </motion.div>
                    <motion.div
                      className="h-2 sm:h-3 w-px bg-[#FF5722]"
                      animate={shouldReduceMotion ? {} : {
                        scaleY: [0.4, 1.2, 0.4],
                        opacity: [0.4, 1, 0.4],
                      }}
                      transition={{ duration: 6, repeat: Infinity, times: [0.8, 0.9, 0.98], ease: 'easeInOut' }}
                    />
                    <motion.div
                      className="w-full text-center px-1 py-0.5 rounded bg-emerald-50 text-[8px] sm:text-[9px] font-mono text-emerald-700 border border-emerald-200 truncate"
                      animate={shouldReduceMotion ? {} : {
                        scale: [1, 1.04, 1],
                        boxShadow: ['0 0 0 rgba(16,185,129,0)', '0 0 10px rgba(16,185,129,0.3)', '0 0 0 rgba(16,185,129,0)'],
                      }}
                      transition={{ duration: 6, repeat: Infinity, times: [0.85, 0.95, 1], ease: 'easeInOut' }}
                    >
                      Webhook Sent
                    </motion.div>
                  </div>
                  <div className="text-[8px] sm:text-[9px] font-mono text-emerald-600 font-semibold pt-1 border-t border-[#E5E7EB] text-center truncate">
                    Zero Latency Drop
                  </div>
                </div>

              </div>

              {/* Content Text */}
              <div>
                <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#FF5722] mb-1.5">
                  NATIVE ORCHESTRATION
                </div>
                <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-[#111827] mb-2">
                  Modern controls, out of the box
                </h3>
                <p className="text-sm text-[#4B5563] font-normal leading-relaxed">
                  Ensure engineering and operations teams are unified. Deep native integrations
                  let you orchestrate commits, schema changes, and automated webhooks without extra plumbing.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Card 3: Intelligent & Simple - Less time servicing requests (col-span-12 lg:col-span-7) */}
          <div className="col-span-12 lg:col-span-7">
            <motion.div
              variants={cardVariants}
              whileHover={shouldReduceMotion ? {} : { y: -3 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="h-full rounded-[16px] bg-white border border-[#E5E7EB] p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow hover:border-[#FF5722] group"
            >
              {/* Visual Area: Stacked Declarative Rule Nodes with Dynamic Ingestion Stream */}
              <div className="relative w-full min-h-[255px] sm:min-h-0 sm:h-64 rounded-[12px] bg-[#F4F4F5] border border-[#E5E7EB] p-3 sm:p-5 flex flex-col justify-center gap-2 sm:gap-2.5 overflow-hidden mb-6">
                
                {/* Node 1 (Automated Threshold Action) */}
                <div className="p-2.5 sm:p-3 rounded-[10px] bg-white border border-[#E5E7EB] shadow-xs flex items-center justify-between gap-2 sm:gap-3 transition-transform duration-300 group-hover:translate-x-0.5">
                  <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-[#111827] font-medium leading-snug">
                    <Sparkles size={13} className="text-[#FF5722] shrink-0" />
                    <span>Reroute webhook drops exceeding 250ms latency threshold</span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[9px] sm:text-[10px] font-mono bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0 font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Automated
                  </span>
                </div>

                {/* Node 2 (Focal Live Stream Query) */}
                <motion.div
                  className="p-2.5 sm:p-3.5 rounded-[10px] bg-white border-2 border-[#FF5722] shadow-sm flex items-center justify-between gap-2 sm:gap-3 z-10 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:shadow-md"
                  whileHover={shouldReduceMotion ? {} : { scale: 1.01 }}
                >
                  <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-sm text-[#111827] font-semibold leading-snug">
                    <motion.div
                      animate={shouldReduceMotion ? {} : { rotate: [0, 15, -15, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <Sparkles size={14} className="text-[#FF5722] fill-[#FF5722] shrink-0" />
                    </motion.div>
                    <span>What is our current multi-region edge ingestion velocity?</span>
                  </div>
                  <motion.span
                    key={velocity}
                    initial={shouldReduceMotion ? {} : { opacity: 0.6, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="px-2 sm:px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-mono bg-[#FFF1EC] text-[#FF5722] border border-[#FFD0C2] shrink-0 font-bold tabular-nums"
                  >
                    {velocity} evt/s
                  </motion.span>
                </motion.div>

                {/* Node 3 (Execution Latency Record) */}
                <div className="p-2.5 sm:p-3 rounded-[10px] bg-white border border-[#E5E7EB] shadow-xs flex items-center justify-between gap-2 sm:gap-3 transition-transform duration-300 group-hover:translate-x-0.5">
                  <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-[#111827] font-medium leading-snug">
                    <Sparkles size={13} className="text-[#FF5722] shrink-0" />
                    <span>Sync customer records to enterprise CRM with zero schema drift</span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[9px] sm:text-[10px] font-mono bg-[#F4F4F5] text-[#4B5563] border border-[#E5E7EB] shrink-0 tabular-nums">
                    Executed: {latency}
                  </span>
                </div>

              </div>

              {/* Content Text */}
              <div>
                <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#FF5722] mb-1.5">
                  SMART WORKFLOW LOGIC
                </div>
                <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-[#111827] mb-2">
                  Less time servicing requests
                </h3>
                <p className="text-sm text-[#4B5563] font-normal leading-relaxed">
                  Declarative automation empowers business and technical teams to answer critical questions
                  and execute complex data transformations instantly without ongoing operational friction.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Card 4: Secure & Scalable - Warehouse native (col-span-12 lg:col-span-5) */}
          <div className="col-span-12 lg:col-span-5">
            <motion.div
              variants={cardVariants}
              whileHover={shouldReduceMotion ? {} : { y: -3 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="h-full rounded-[16px] bg-white border border-[#E5E7EB] p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow hover:border-[#FF5722] group"
            >
              {/* Visual Area: Architectural Cloud Container with Encrypted Stream Bridge */}
              <div className="relative w-full h-56 sm:h-64 rounded-[12px] bg-[#F4F4F5] border border-[#E5E7EB] flex flex-col items-center justify-center overflow-hidden mb-6">
                
                {/* Cloud Contour Outline Container with SVG Encrypted Connector Circuit */}
                <div className="relative w-64 h-36 rounded-full border-2 border-[#E5E7EB] bg-white flex items-center justify-center gap-3 shadow-xs">
                  
                  {/* Background SVG stream connecting the 3 badges */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg">
                    <line x1="26%" y1="50%" x2="50%" y2="50%" stroke="#FFD0C2" strokeWidth="2" strokeDasharray="3 3" />
                    <line x1="50%" y1="50%" x2="74%" y2="50%" stroke="#A7F3D0" strokeWidth="2" strokeDasharray="3 3" />
                    {!shouldReduceMotion && (
                      <>
                        <motion.circle
                          r="2.5"
                          fill="#FF5722"
                          animate={{
                            cx: ['26%', '50%'],
                            opacity: [0, 1, 0],
                          }}
                          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                          cy="50%"
                        />
                        <motion.circle
                          r="2.5"
                          fill="#10B981"
                          animate={{
                            cx: ['50%', '74%'],
                            opacity: [0, 1, 0],
                          }}
                          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut', delay: 1.1 }}
                          cy="50%"
                        />
                      </>
                    )}
                  </svg>

                  {/* Visual Cloud Badge 1: Snowflake / Warehouse */}
                  <motion.div
                    className="relative z-10 w-12 h-12 rounded-[10px] bg-[#F4F4F5] border border-[#E5E7EB] flex items-center justify-center text-[#FF5722] shadow-2xs"
                    animate={shouldReduceMotion ? {} : {
                      y: [0, 2.5, 0],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  >
                    <Database size={20} />
                  </motion.div>

                  {/* Visual Cloud Badge 2: Core Server Engine */}
                  <motion.div
                    className="relative z-10 w-14 h-14 rounded-[12px] bg-[#FF5722] text-white flex items-center justify-center shadow-xs"
                    animate={shouldReduceMotion ? {} : {
                      y: [0, -3.5, 0],
                      scale: [1, 1.04, 1],
                      boxShadow: ['0 2px 8px rgba(255,87,34,0.2)', '0 6px 18px rgba(255,87,34,0.4)', '0 2px 8px rgba(255,87,34,0.2)'],
                    }}
                    transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <Cloud size={24} />
                  </motion.div>

                  {/* Visual Cloud Badge 3: Security Shield */}
                  <motion.div
                    className="relative z-10 w-12 h-12 rounded-[10px] bg-[#F4F4F5] border border-[#E5E7EB] flex items-center justify-center text-emerald-600 shadow-2xs"
                    animate={shouldReduceMotion ? {} : {
                      y: [0, 2.5, 0],
                      scale: [1, 1.06, 1],
                    }}
                    transition={{ duration: 5.0, repeat: Infinity, ease: 'easeInOut', delay: 1.0 }}
                  >
                    <ShieldCheck size={20} />
                  </motion.div>
                </div>

                {/* Status Pill below Cloud with live pulse */}
                <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5E7EB] text-[10px] font-mono text-[#4B5563] shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>SOC2 Type II • 99.99% Uptime SLA</span>
                </div>
              </div>

              {/* Content Text */}
              <div>
                <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#FF5722] mb-1.5">
                  ENTERPRISE SCALE
                </div>
                <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-[#111827] mb-2">
                  Warehouse native & secure
                </h3>
                <p className="text-sm text-[#4B5563] font-normal leading-relaxed">
                  Compute runs directly against your data storage with zero egress penalties.
                  Enterprise security controls ensure complete compliance across multi-tenant clusters.
                </p>
              </div>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}

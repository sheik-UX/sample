'use client';

import React from 'react';
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
import { ScrollReveal, StaggerContainer, StaggerItem } from './animations';

export default function AboutUs() {
  return (
    <section id="about" className="relative py-14 sm:py-18 md:py-22 px-4 sm:px-6 bg-[#FDFDFD] border-t border-[#E5E7EB] overflow-hidden">
      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4F4F5] border border-[#E5E7EB] text-xs font-mono font-semibold text-[#4B5563] mb-4 shadow-xs">
            <Sparkles size={13} className="text-[#FF5722] fill-[#FF5722]" />
            <span>Platform Architecture // Core Foundation</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-medium tracking-tight text-[#111827] leading-[1.06] mb-4">
            An operational foundation engineered for modern scale.
          </h2>

          <p className="font-serif text-lg sm:text-xl text-[#4B5563] font-normal leading-[1.65]">
            PaperFlow replaces fragile scheduled scripts and fragmented tools with resilient,
            automated workflow pipelines that execute in sub-second cycles.
          </p>
        </ScrollReveal>

        {/* 4-Card Bento Grid Layout */}
        <StaggerContainer className="grid grid-cols-12 gap-6">

          {/* Card 1: Platform / Infrastructure - Connects to the entire stack (col-span-12 lg:col-span-5) */}
          <StaggerItem className="col-span-12 lg:col-span-5">
            <div className="h-full rounded-[16px] bg-white border border-[#E5E7EB] p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-all hover:border-[#FF5722] group">
              {/* Visual Area: Concentric Radar with Architectural Connected Nodes */}
              <div className="relative w-full h-56 sm:h-64 rounded-[12px] bg-[#F4F4F5] border border-[#E5E7EB] flex items-center justify-center overflow-hidden mb-6">
                {/* Precision Concentric Hairlines */}
                <div className="absolute w-72 h-72 rounded-full border border-[#E5E7EB]" />
                <div className="absolute w-56 h-56 rounded-full border border-[#E5E7EB]" />
                <div className="absolute w-40 h-40 rounded-full border border-[#FFD0C2]" />
                <div className="absolute w-24 h-24 rounded-full border border-[#FF5722]/30" />

                {/* Central Core Hub */}
                <div className="relative z-10 w-12 h-12 rounded-[10px] bg-[#FF5722] text-white flex items-center justify-center font-bold text-base shadow-sm group-hover:scale-105 transition-transform duration-300">
                  P
                </div>

                {/* Grounded Integration Node Badges */}
                <div className="absolute top-6 left-10 p-2 rounded-[8px] bg-white border border-[#E5E7EB] shadow-xs text-[#4B5563] group-hover:-translate-y-0.5 transition-transform">
                  <Database size={15} className="text-[#FF5722]" />
                </div>

                <div className="absolute top-8 right-12 p-2 rounded-[8px] bg-white border border-[#E5E7EB] shadow-xs text-[#4B5563] group-hover:translate-y-0.5 transition-transform">
                  <GitBranch size={15} className="text-[#111827]" />
                </div>

                <div className="absolute bottom-8 left-12 p-2 rounded-[8px] bg-white border border-[#E5E7EB] shadow-xs text-[#4B5563] group-hover:translate-x-0.5 transition-transform">
                  <Server size={15} className="text-[#FF5722]" />
                </div>

                <div className="absolute bottom-10 right-10 p-2 rounded-[8px] bg-white border border-[#E5E7EB] shadow-xs text-[#4B5563] group-hover:-translate-x-0.5 transition-transform">
                  <Terminal size={15} className="text-[#111827]" />
                </div>

                <div className="absolute top-1/2 right-4 -translate-y-1/2 p-2 rounded-[8px] bg-white border border-[#E5E7EB] shadow-xs text-[#4B5563]">
                  <Share2 size={15} className="text-[#FF5722]" />
                </div>

                <div className="absolute top-1/2 left-4 -translate-y-1/2 p-2 rounded-[8px] bg-white border border-[#E5E7EB] shadow-xs text-[#4B5563]">
                  <Zap size={15} className="text-[#FF5722]" />
                </div>
              </div>

              {/* Content Text */}
              <div>
                <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#FF5722] mb-1.5">
                  INTEGRATED INFRASTRUCTURE
                </div>
                <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-[#111827] mb-2">
                  Connects to the entire stack
                </h3>
                <p className="font-serif text-sm text-[#4B5563] font-normal leading-relaxed">
                  PaperFlow quickly and securely connects to popular warehouses, relational databases,
                  and custom webhook APIs with sub-second event synchronization.
                </p>
              </div>
            </div>
          </StaggerItem>

          {/* Card 2: Powerful & Connected - Modern controls, out of the box (col-span-12 lg:col-span-7) */}
          <StaggerItem className="col-span-12 lg:col-span-7">
            <div className="h-full rounded-[16px] bg-white border border-[#E5E7EB] p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-all hover:border-[#FF5722] group">
              {/* Visual Area: Three Clean UI Panels Side-by-Side */}
              <div className="relative w-full h-56 sm:h-64 rounded-[12px] bg-[#F4F4F5] border border-[#E5E7EB] p-4 flex items-center justify-center gap-3 sm:gap-4 overflow-hidden mb-6">
                
                {/* Panel 1: Data Table Mini-Card */}
                <div className="w-1/3 max-w-[170px] h-44 rounded-[10px] bg-white border border-[#E5E7EB] p-3 flex flex-col justify-between shadow-xs">
                  <div className="flex items-center gap-1.5 pb-2 border-b border-[#E5E7EB]">
                    <Table size={13} className="text-[#FF5722]" />
                    <span className="text-[10px] font-mono font-semibold text-[#111827]">DATA SCHEMA</span>
                  </div>
                  <div className="space-y-1.5 py-1 text-[10px] font-mono text-[#4B5563]">
                    <div className="flex items-center gap-1 p-1 rounded bg-[#F4F4F5]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF5722]" />
                      <span>customers_cdc</span>
                    </div>
                    <div className="flex items-center gap-1 p-1 rounded bg-[#F4F4F5]">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span>orders_ledger</span>
                    </div>
                    <div className="flex items-center gap-1 p-1 rounded bg-[#F4F4F5]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#9CA3AF]" />
                      <span>telemetry_log</span>
                    </div>
                  </div>
                  <div className="text-[9px] font-mono text-[#9CA3AF] pt-1 border-t border-[#E5E7EB]">
                    CDC Sync Active
                  </div>
                </div>

                {/* Panel 2: Git Commit / Deployment Node */}
                <div className="w-1/3 max-w-[180px] h-44 rounded-[10px] bg-white border border-[#E5E7EB] p-3 flex flex-col justify-between shadow-xs">
                  <div className="flex items-center justify-between pb-2 border-b border-[#E5E7EB]">
                    <div className="flex items-center gap-1.5">
                      <GitCommit size={13} className="text-[#111827]" />
                      <span className="text-[10px] font-mono font-semibold text-[#111827]">WORKFLOW CI</span>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  </div>
                  <div className="my-auto space-y-1">
                    <div className="text-[10px] font-mono text-[#4B5563]">Commit #4a8f9</div>
                    <div className="p-1.5 rounded bg-[#FFF1EC] border border-[#FFD0C2] text-[10px] font-mono text-[#FF5722] font-semibold flex items-center justify-between">
                      <span>deploy:prod</span>
                      <Check size={11} strokeWidth={3} />
                    </div>
                  </div>
                  <div className="text-[9px] font-mono text-[#4B5563] pt-1 border-t border-[#E5E7EB]">
                    Branch: main (Synced)
                  </div>
                </div>

                {/* Panel 3: DAG Execution Split */}
                <div className="w-1/3 max-w-[170px] h-44 rounded-[10px] bg-white border border-[#E5E7EB] p-3 flex flex-col justify-between shadow-xs">
                  <div className="flex items-center gap-1.5 pb-2 border-b border-[#E5E7EB]">
                    <Layers size={13} className="text-[#FF5722]" />
                    <span className="text-[10px] font-mono font-semibold text-[#111827]">PIPELINE DAG</span>
                  </div>
                  <div className="my-auto flex flex-col items-center justify-center gap-1">
                    <div className="w-full text-center px-1.5 py-0.5 rounded bg-[#F4F4F5] text-[9px] font-mono text-[#111827] border border-[#E5E7EB]">
                      Ingest Node
                    </div>
                    <div className="h-3 w-px bg-[#FF5722]" />
                    <div className="w-full text-center px-1.5 py-0.5 rounded bg-[#FFF1EC] text-[9px] font-mono text-[#FF5722] font-semibold border border-[#FFD0C2]">
                      Transform (28ms)
                    </div>
                    <div className="h-3 w-px bg-[#FF5722]" />
                    <div className="w-full text-center px-1.5 py-0.5 rounded bg-emerald-50 text-[9px] font-mono text-emerald-700 border border-emerald-200">
                      Webhook Sent
                    </div>
                  </div>
                  <div className="text-[9px] font-mono text-emerald-600 font-semibold pt-1 border-t border-[#E5E7EB] text-center">
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
                <p className="font-serif text-sm text-[#4B5563] font-normal leading-relaxed">
                  Ensure engineering and operations teams are unified. Deep native integrations
                  let you orchestrate commits, schema changes, and automated webhooks without extra plumbing.
                </p>
              </div>
            </div>
          </StaggerItem>

          {/* Card 3: Intelligent & Simple - Less time servicing requests (col-span-12 lg:col-span-7) */}
          <StaggerItem className="col-span-12 lg:col-span-7">
            <div className="h-full rounded-[16px] bg-white border border-[#E5E7EB] p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-all hover:border-[#FF5722] group">
              {/* Visual Area: Stacked Declarative Rule Nodes */}
              <div className="relative w-full h-56 sm:h-64 rounded-[12px] bg-[#F4F4F5] border border-[#E5E7EB] p-5 flex flex-col justify-center gap-2.5 overflow-hidden mb-6">
                
                {/* Node 1 */}
                <div className="p-3 rounded-[10px] bg-white border border-[#E5E7EB] shadow-xs flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-xs text-[#111827] font-medium">
                    <Sparkles size={14} className="text-[#FF5722] shrink-0" />
                    <span>Reroute webhook drops exceeding 250ms latency threshold</span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0 font-semibold">
                    Automated
                  </span>
                </div>

                {/* Node 2 (Focal Highlight) */}
                <div className="p-3.5 rounded-[10px] bg-white border-2 border-[#FF5722] shadow-sm flex items-center justify-between gap-3 z-10">
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-[#111827] font-semibold">
                    <Sparkles size={15} className="text-[#FF5722] fill-[#FF5722] shrink-0" />
                    <span>What is our current multi-region edge ingestion velocity?</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-[#FFF1EC] text-[#FF5722] border border-[#FFD0C2] shrink-0 font-bold">
                    14,200 evt/s
                  </span>
                </div>

                {/* Node 3 */}
                <div className="p-3 rounded-[10px] bg-white border border-[#E5E7EB] shadow-xs flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-xs text-[#111827] font-medium">
                    <Sparkles size={14} className="text-[#FF5722] shrink-0" />
                    <span>Sync customer records to enterprise CRM with zero schema drift</span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#F4F4F5] text-[#4B5563] border border-[#E5E7EB] shrink-0">
                    Executed: 18ms
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
                <p className="font-serif text-sm text-[#4B5563] font-normal leading-relaxed">
                  Declarative automation empowers business and technical teams to answer critical questions
                  and execute complex data transformations instantly without ongoing operational friction.
                </p>
              </div>
            </div>
          </StaggerItem>

          {/* Card 4: Secure & Scalable - Warehouse native (col-span-12 lg:col-span-5) */}
          <StaggerItem className="col-span-12 lg:col-span-5">
            <div className="h-full rounded-[16px] bg-white border border-[#E5E7EB] p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-all hover:border-[#FF5722] group">
              {/* Visual Area: Architectural Cloud Container with Data Warehouse Nodes */}
              <div className="relative w-full h-56 sm:h-64 rounded-[12px] bg-[#F4F4F5] border border-[#E5E7EB] flex flex-col items-center justify-center overflow-hidden mb-6">
                
                {/* Cloud Contour Outline Container */}
                <div className="relative w-64 h-36 rounded-full border-2 border-[#E5E7EB] bg-white flex items-center justify-center gap-3 shadow-xs">
                  {/* Visual Cloud Badge 1: Snowflake / Warehouse */}
                  <div className="w-12 h-12 rounded-[10px] bg-[#F4F4F5] border border-[#E5E7EB] flex items-center justify-center text-[#FF5722] shadow-2xs">
                    <Database size={20} />
                  </div>

                  {/* Visual Cloud Badge 2: Core Server Engine */}
                  <div className="w-14 h-14 rounded-[12px] bg-[#FF5722] text-white flex items-center justify-center shadow-xs">
                    <Cloud size={24} />
                  </div>

                  {/* Visual Cloud Badge 3: Security Shield */}
                  <div className="w-12 h-12 rounded-[10px] bg-[#F4F4F5] border border-[#E5E7EB] flex items-center justify-center text-emerald-600 shadow-2xs">
                    <ShieldCheck size={20} />
                  </div>
                </div>

                {/* Status Pill below Cloud */}
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
                <p className="font-serif text-sm text-[#4B5563] font-normal leading-relaxed">
                  Compute runs directly against your data storage with zero egress penalties.
                  Enterprise security controls ensure complete compliance across multi-tenant clusters.
                </p>
              </div>
            </div>
          </StaggerItem>

        </StaggerContainer>
      </div>
    </section>
  );
}

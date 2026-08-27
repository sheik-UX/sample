'use client';

import React, { useState } from 'react';
import { ArrowUpRight, ExternalLink, Sparkles } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  client: string;
  year: string;
  category: string;
  ratio: 'wide' | 'tall' | 'standard';
  description: string;
  metrics: string;
  award: string;
  tags: string[];
  imageSrc: string;
}

export default function SelectedWork() {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const projects: Project[] = [
    {
      id: 'kronos',
      title: 'Kronos Neural Compute Engine',
      client: 'Kronos Infrastructure Inc.',
      year: '2026',
      category: 'Flagship Web & Product UX',
      ratio: 'wide',
      description:
        'A next-generation developer interface and interactive spatial documentation engine for decentralized AI compute clusters. Features sub-40ms WebGL shaders and real-time cluster telemetry.',
      metrics: '+310% Developer Onboarding',
      award: 'Awwwards Site of the Month • FWA of the Day',
      tags: ['Next.js App Router', 'WebGL Shaders', 'Design System'],
      imageSrc: '/assets/workflow_cluster.jpg',
    },
    {
      id: 'aether',
      title: 'Aether Spatial Acoustics',
      client: 'Aether Audio Labs',
      year: '2025',
      category: 'Brand Identity & Flagship Store',
      ratio: 'tall',
      description:
        'End-to-end brand system and interactive 3D commerce flagship for the world’s first beryllium-diaphragm spatial headphones.',
      metrics: '$14.2M First-Quarter Sales',
      award: 'Red Dot Best of the Best 2025',
      tags: ['Creative E-commerce', 'Brand Identity', '3D Configurator'],
      imageSrc: '/assets/product_assets.jpg',
    },
    {
      id: 'valence',
      title: 'Valence Neural Therapeutics',
      client: 'Valence Biome Bio',
      year: '2025',
      category: 'Scientific Canvas & Interface',
      ratio: 'standard',
      description:
        'Visualizing complex molecular drug synthesis in real time. We built a tactile, responsive data canvas allowing computational biologists to design and test compound viability in browser.',
      metrics: '$64M Series B Financing',
      award: 'Fast Company Innovation by Design',
      tags: ['Canvas UI', 'Scientific Viz', 'Enterprise Product'],
      imageSrc: '/assets/pipeline_engine.jpg',
    },
    {
      id: 'solaris',
      title: 'Solaris Energy Syndicate',
      client: 'Solaris Capital Partners',
      year: '2025',
      category: 'Flagship Web & Identity',
      ratio: 'wide',
      description:
        'A stark, editorial digital presence for a $500M climate infrastructure syndicate. Real-time planetary asset mapping and high-prestige typography.',
      metrics: '4.8× Inbound LP Dealflow',
      award: 'CSS Design Awards WOTD',
      tags: ['Editorial Web', 'Global Asset Map', 'TypeScript'],
      imageSrc: '/assets/frameworks_nodes.jpg',
    },
  ];

  const filters = ['All', 'Flagship Web', 'Product UX', 'Brand Identity'];

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category.toLowerCase().includes(activeFilter.toLowerCase()));

  return (
    <section id="work" className="relative py-24 md:py-36 bg-canvas">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-neutral-200">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                03 // SELECTED COMMISSIONS
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-neutral-950 leading-tight">
              Recent architectures engineered for undeniable market distinction.
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 flex-wrap">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                  activeFilter === filter
                    ? 'bg-neutral-950 text-white shadow-fine'
                    : 'bg-white text-neutral-600 border border-neutral-200/80 hover:border-neutral-400'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetric Case Study Layout */}
        <div className="mt-12 space-y-16 lg:space-y-24">
          {filteredProjects.map((project, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <article
                key={project.id}
                className="group relative rounded-2xl border border-neutral-200/90 bg-white p-6 sm:p-10 lg:p-12 shadow-fine hover:shadow-editorial transition-all duration-300 overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Visual Project Container */}
                  <div
                    className={`relative overflow-hidden rounded-xl bg-neutral-100 border border-neutral-200/80 ${
                      project.ratio === 'tall'
                        ? 'lg:col-span-5 aspect-[4/5]'
                        : project.ratio === 'standard'
                        ? 'lg:col-span-6 aspect-[4/3]'
                        : 'lg:col-span-7 aspect-[16/10]'
                    } ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
                  >
                    <img
                      src={project.imageSrc}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />

                    {/* Gradient Overlay for subtle depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Floating Corner Metric Badge */}
                    <div className="absolute bottom-4 left-4 bg-neutral-950/85 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-lg text-white font-mono text-xs shadow-lg">
                      <span className="text-emerald-400 font-semibold">{project.metrics}</span>
                    </div>
                  </div>

                  {/* Editorial Text Details */}
                  <div
                    className={`space-y-6 ${
                      project.ratio === 'tall'
                        ? 'lg:col-span-7'
                        : project.ratio === 'standard'
                        ? 'lg:col-span-6'
                        : 'lg:col-span-5'
                    } ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
                  >
                    <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
                      <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                        {project.client} • {project.year}
                      </span>
                      <span className="text-xs font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-100">
                        {project.category}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-neutral-950 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm sm:text-base text-neutral-600 font-normal leading-relaxed mt-3">
                        {project.description}
                      </p>
                    </div>

                    {/* Award Mention */}
                    <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 bg-neutral-50 p-3 rounded-lg border border-neutral-100">
                      <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      <span>{project.award}</span>
                    </div>

                    {/* Tech & Discipline Tags */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md text-xs font-mono bg-neutral-100 text-neutral-600 border border-neutral-200/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Link */}
                    <div className="pt-2">
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-900 group-hover:text-blue-600 transition-colors"
                      >
                        Read Case Study & Architecture
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

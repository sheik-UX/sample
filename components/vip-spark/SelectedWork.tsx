'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface SelectedWorkProps {
  onInquire: (projectName: string) => void;
}

interface Project {
  id: string;
  categoryLabel: string;
  title: string;
  location: string;
  year: string;
  capacity: string;
  summary: string;
  image: string;
  aspectClass: string;
  colSpanClass: string;
  specs: { label: string; value: string }[];
}

const projects: Project[] = [
  {
    id: 'project-1',
    categoryLabel: '01 / WEDDING',
    title: 'The Glasshouse Solstice',
    location: 'Lake Como, Italy',
    year: '2025',
    capacity: '220 Guests · 3-Day Botanical Build',
    summary:
      'A bespoke steel-and-glass conservatory erected along the cliff edge of Lake Como. Submerged line-array acoustic zoning and kinetic botanical chandeliers.',
    image:
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop',
    aspectClass: 'aspect-[16/9]',
    colSpanClass: 'lg:col-span-12',
    specs: [
      { label: 'Scenic Staging', value: 'Custom structural steel & glass pavilion' },
      { label: 'Floral Architecture', value: '14,000 hand-placed white olive & garden roses' },
      { label: 'Acoustic Direction', value: 'Submerged line-array with zero visual profile' },
      { label: 'Culinary Direction', value: 'Two-star Michelin curated five-course banquet' },
    ],
  },
  {
    id: 'project-2',
    categoryLabel: '02 / CORPORATE',
    title: 'Luminary Global Keynote',
    location: 'Geneva, Switzerland',
    year: '2025',
    capacity: '1,400 Delegates · 360° Monolith Arena',
    summary:
      'A sunken circular amphitheater surrounded by real-time reactive volumetric lighting and curved 2.1mm LED wall architecture.',
    image:
      'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1800&auto=format&fit=crop',
    aspectClass: 'aspect-[4/5]',
    colSpanClass: 'lg:col-span-5',
    specs: [
      { label: 'Stage Diameter', value: '38m sunken circular amphitheater' },
      { label: 'Visual Engine', value: 'Unreal Engine 5 real-time spatial projection' },
      { label: 'Simultaneous Cast', value: '18 languages broadcast live with sub-40ms latency' },
    ],
  },
  {
    id: 'project-3',
    categoryLabel: '03 / LIVE PRODUCTION',
    title: 'Nocturne Symphonic Gala',
    location: 'London, United Kingdom',
    year: '2025',
    capacity: '850 Patrons · Historical Heritage Hall',
    summary:
      'A 48-piece philharmonic ensemble performing within an 18th-century stone hall mapped with 128 moving-head robotic lighting fixtures.',
    image:
      'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1800&auto=format&fit=crop',
    aspectClass: 'aspect-[4/3]',
    colSpanClass: 'lg:col-span-7',
    specs: [
      { label: 'Rigging Matrix', value: '128 moving robotic beam heads & haze distribution' },
      { label: 'Orchestral Score', value: 'Original contemporary symphonic suite' },
      { label: 'Audio Latency', value: 'Zero-phase digital acoustic calibration' },
    ],
  },
  {
    id: 'project-4',
    categoryLabel: '04 / DESTINATION',
    title: 'Villa Ephrussi Private Soirée',
    location: 'Saint-Jean-Cap-Ferrat, France',
    year: '2024',
    capacity: '180 Guests · French Riviera Multi-Terrace',
    summary:
      'A multi-terrace coastal celebration across nine historic botanical gardens with a floating marine dance floor and midnight musical fireworks.',
    image:
      'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=2070&auto=format&fit=crop',
    aspectClass: 'aspect-[16/9]',
    colSpanClass: 'lg:col-span-12',
    specs: [
      { label: 'Marine Logistics', value: 'Flotilla of 14 bespoke tender transfers' },
      { label: 'Pyrotechnics', value: 'Synchronized musical drone & firework display' },
      { label: 'Security & Protocol', value: 'Autonomous perimeter and strict confidentiality' },
    ],
  },
];

export default function SelectedWork({ onInquire }: SelectedWorkProps) {
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  return (
    <section
      id="work"
      className="relative w-full bg-[#c4c3b6] text-[#000000] py-24 md:py-36 px-6 md:px-12 border-t border-[#dfdcd5]"
    >
      {/* Section Header with smooth whileInView */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-[1400px] mx-auto flex flex-col md:flex-row md:items-end justify-between border-b border-[#000000] pb-8 mb-16 md:mb-20"
      >
        <div>
          <span className="font-helvetica text-[10px] uppercase tracking-[0.25em] text-[#595855] block mb-3">
            Exhibition Archive · Folio
          </span>
          <h2 className="font-davinci text-5xl sm:text-7xl md:text-8xl lg:text-[94px] leading-[0.84] tracking-[-0.85px] font-medium text-[#000000] uppercase">
            SELECTED EXPERIENCES
          </h2>
        </div>
        <div className="mt-4 md:mt-0 text-left md:text-right font-helvetica text-xs uppercase tracking-[0.18em] text-[#595855]">
          <span>MUSEUM WALL LABELS</span>
          <span className="block text-[#000000] mt-0.5">EDITIONS 2024–2026</span>
        </div>
      </motion.div>

      {/* Museum Folio Project Cards */}
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{
              duration: 0.85,
              delay: (idx % 2) * 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            onClick={() => setActiveModalProject(project)}
            className={`group cursor-pointer ${project.colSpanClass}`}
          >
            {/* Elevated Bone Surface (#e7e5e4) */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#e7e5e4] rounded-[9px] border border-[#dfdcd5] p-6 sm:p-8 flex flex-col justify-between transition-colors group-hover:border-[#000000]"
            >
              {/* Image Container */}
              <div
                className={`relative w-full ${project.aspectClass} overflow-hidden rounded-[9px] bg-[#808080] mb-6 border border-[#dfdcd5]`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 80vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                  style={{ filter: 'contrast(1.05) brightness(0.96)' }}
                />
              </div>

              {/* Card Meta & Wall Label */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 border-b border-[#dfdcd5] pb-4 mb-4">
                <div>
                  <span className="font-helvetica text-[10px] uppercase tracking-[0.2em] text-[#595855] block mb-1">
                    {project.categoryLabel} · {project.location}
                  </span>
                  <h3 className="font-davinci text-2xl sm:text-3xl font-medium text-[#000000]">
                    {project.title}
                  </h3>
                </div>
                <div className="text-left sm:text-right font-helvetica text-xs uppercase tracking-wider text-[#595855]">
                  <span>{project.year}</span>
                </div>
              </div>

              {/* Stat Pair row & Inspect Link */}
              <div className="flex items-center justify-between font-helvetica text-xs text-[#000000] uppercase tracking-tight">
                <span className="font-medium">{project.capacity}</span>
                <span className="ghost-text-link text-xs">
                  Inspect Folio &rarr;
                </span>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Case Study Lightbox Modal with AnimatePresence */}
      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 bg-[#000000]/70"
              onClick={() => setActiveModalProject(null)}
              aria-hidden="true"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 15 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full max-w-3xl bg-[#e7e5e4] text-[#000000] rounded-[9px] border border-[#000000] p-6 sm:p-10 max-h-[90vh] overflow-y-auto"
              role="dialog"
              aria-modal="true"
            >
              {/* Close Button */}
              <div className="flex items-center justify-between border-b border-[#dfdcd5] pb-4 mb-6">
                <span className="font-helvetica text-[10px] uppercase tracking-[0.25em] text-[#595855]">
                  {activeModalProject.categoryLabel} · Exhibition File
                </span>
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="font-helvetica text-xs uppercase tracking-widest text-[#000000] hover:underline"
                >
                  Close ✕
                </button>
              </div>

              {/* Title */}
              <h3 className="font-davinci text-3xl sm:text-4xl text-[#000000] mb-2 font-medium">
                {activeModalProject.title}
              </h3>
              <p className="font-helvetica text-xs uppercase tracking-wider text-[#595855] mb-6">
                {activeModalProject.location} · {activeModalProject.year} ·{' '}
                {activeModalProject.capacity}
              </p>

              {/* Summary */}
              <p className="font-helvetica text-sm text-[#595855] leading-relaxed mb-6">
                {activeModalProject.summary}
              </p>

              {/* Specifications */}
              <div className="border-t border-[#dfdcd5] pt-6 mb-6">
                <span className="font-helvetica text-[10px] uppercase tracking-[0.25em] text-[#595855] block mb-4">
                  Folio Specifications
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeModalProject.specs.map((spec, i) => (
                    <div
                      key={i}
                      className="p-3 bg-[#c4c3b6]/50 rounded-[4px] border border-[#dfdcd5]"
                    >
                      <span className="font-helvetica text-[10px] uppercase tracking-wider text-[#595855] block mb-0.5">
                        {spec.label}
                      </span>
                      <span className="font-helvetica text-xs font-medium text-[#000000] block">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="flex items-center justify-between pt-4 border-t border-[#dfdcd5]">
                <span className="font-helvetica text-xs text-[#595855]">
                  Commission a similar celebration
                </span>
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => {
                    const title = activeModalProject.title;
                    setActiveModalProject(null);
                    onInquire(title);
                  }}
                  className="btn-pill-action"
                >
                  <span>Inquire Project</span>
                  <span>&rarr;</span>
                </motion.button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

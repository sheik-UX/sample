'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

interface VignetteItem {
  id: string;
  caption: string;
  subtitle: string;
  image: string;
  discipline: string;
}

const vignettes: VignetteItem[] = [
  {
    id: 'weddings',
    caption: 'Weddings & Scenic Architecture',
    subtitle: 'Lake Como · Historical Châteaux · Private Islands',
    discipline: 'Weddings',
    image:
      'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'corporate',
    caption: 'Summits & Executive Galas',
    subtitle: '360° Arenas · Kinetic Lighting · Global Telemetry',
    discipline: 'Corporate Events',
    image:
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'production',
    caption: 'Live Staging & Orchestration',
    subtitle: 'Philharmonic Ensembles · Heavy Truss · Low Haze',
    discipline: 'Event Production',
    image:
      'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'celebrations',
    caption: 'Private Confidential Soirées',
    subtitle: 'Bespoke Pavilions · Michelin Gastronomy · Secrecy',
    discipline: 'Private Celebrations',
    image:
      'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'destination',
    caption: 'Cross-Border Luxury Builds',
    subtitle: 'Remote Coves · Alpine Chalets · Aviation Routing',
    discipline: 'Destination Events',
    image:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'entertainment',
    caption: 'Headline Talent & Soundtracks',
    subtitle: 'Custom Scoring · Choreography · Artist Concierge',
    discipline: 'Entertainment',
    image:
      'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function Services({ onSelectService }: ServicesProps) {
  return (
    <section
      id="disciplines"
      className="relative w-full bg-[#000000] text-[#ffffff] py-24 md:py-36 px-6 md:px-12 border-t border-[#000000]"
    >
      {/* Centered Heading with gentle whileInView scroll reveal */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl mx-auto text-center mb-20 md:mb-28"
      >
        <span className="font-helvetica text-[10px] uppercase tracking-[0.25em] text-[#808080] block mb-4">
          Capabilities & Disciplines
        </span>
        <h2 className="font-davinci text-5xl sm:text-7xl md:text-8xl lg:text-[94px] leading-[0.84] tracking-[-0.85px] font-medium text-[#ffffff] uppercase">
          WHAT WE DO
        </h2>
        <p className="font-helvetica text-xs text-[#808080] uppercase tracking-[0.2em] mt-6 max-w-md mx-auto">
          Six disciplines engineered with millimetric precision and artistic
          reverence.
        </p>
      </motion.div>

      {/* 3-Column Grid of Circular Feature Vignettes */}
      <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-7">
        {vignettes.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{
              duration: 0.8,
              delay: index * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            onClick={() => onSelectService(item.discipline)}
            className="flex flex-col items-center text-center cursor-pointer group"
          >
            {/* Davinci 22px Caption */}
            <h3 className="font-davinci text-[22px] leading-[1.33] tracking-[-0.11px] font-normal text-[#ffffff] mb-6 group-hover:text-[#e7e5e4] transition-colors min-h-[30px]">
              {item.caption}
            </h3>

            {/* ~200px Circular Image Crop with whileHover */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="circular-vignette mb-6 bg-[#808080]"
            >
              <Image
                src={item.image}
                alt={item.caption}
                fill
                loading="lazy"
                sizes="200px"
                className="object-cover"
                style={{ filter: 'contrast(1.08) brightness(0.95)' }}
              />
            </motion.div>

            {/* Subtitle description */}
            <p className="font-helvetica text-[11px] uppercase tracking-[0.18em] text-[#808080] max-w-[220px] mb-4">
              {item.subtitle}
            </p>

            {/* Group of 3 Hexagonal Outline Indicators (~12px) */}
            <div className="flex items-center gap-2 mt-1">
              {[0, 1, 2].map((dot) => (
                <motion.svg
                  key={dot}
                  whileHover={{ rotate: 30, scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-opacity group-hover:opacity-100 opacity-60"
                >
                  <polygon
                    points="6,1 11,3.5 11,8.5 6,11 1,8.5 1,3.5"
                    stroke="#ffffff"
                    strokeWidth="1"
                  />
                </motion.svg>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

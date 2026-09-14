'use client';

import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    phase: 'DISCOVER',
    headline: 'Understanding the vision.',
    description:
      'Deep immersion into narrative, architectural constraints, guest expectations, and emotional tone. Zero ambiguity.',
  },
  {
    number: '02',
    phase: 'DESIGN',
    headline: 'Building the experience.',
    description:
      'Translating concepts into 3D spatial renders, acoustic models, floral schematics, and custom culinary timing.',
  },
  {
    number: '03',
    phase: 'EXECUTE',
    headline: 'Bringing every detail together.',
    description:
      'Millimetric backstage direction, structural rigging safety factors, international logistics, and zero-latency cueing.',
  },
  {
    number: '04',
    phase: 'CELEBRATE',
    headline: 'Creating the final moment.',
    description:
      'When the doors open, time slows down. An effortless sensory journey where the heavy production remains completely invisible.',
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative w-full bg-[#000000] text-[#ffffff] py-24 md:py-36 px-6 md:px-12 border-t border-[#000000]"
    >
      {/* Centered Heading with smooth whileInView */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl mx-auto text-center mb-20 md:mb-28"
      >
        <span className="font-helvetica text-[10px] uppercase tracking-[0.25em] text-[#808080] block mb-4">
          Production Methodology
        </span>
        <h2 className="font-davinci text-5xl sm:text-7xl md:text-8xl lg:text-[94px] leading-[0.84] tracking-[-0.85px] font-medium text-[#ffffff] uppercase">
          THE PROCESS
        </h2>
        <p className="font-helvetica text-xs text-[#808080] uppercase tracking-[0.2em] mt-6 max-w-md mx-auto">
          Four disciplined stages engineered for complete creative control and
          peace of mind.
        </p>
      </motion.div>

      {/* 4-Step Horizontal Progression on Desktop, Vertical on Mobile */}
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-[#595855]/40 border-y border-[#595855]/40">
        {steps.map((step, idx) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{
              duration: 0.8,
              delay: idx * 0.12,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={`py-10 md:px-8 flex flex-col justify-between ${
              idx === 0 ? 'md:pl-0' : ''
            } ${idx === steps.length - 1 ? 'md:pr-0' : ''}`}
          >
            <div>
              {/* Step Number & Hexagonal Outline Indicator */}
              <div className="flex items-center justify-between mb-8">
                <span className="font-davinci text-4xl text-[#ffffff] font-medium">
                  {step.number}
                </span>
                <motion.svg
                  whileHover={{ rotate: 30, scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="cursor-pointer"
                >
                  <polygon
                    points="6,1 11,3.5 11,8.5 6,11 1,8.5 1,3.5"
                    stroke="#ffffff"
                    strokeWidth="1"
                  />
                </motion.svg>
              </div>

              {/* Step Phase & Title */}
              <span className="font-helvetica text-[10px] uppercase tracking-[0.25em] text-[#808080] block mb-2 font-medium">
                PHASE / {step.phase}
              </span>
              <h3 className="font-davinci text-2xl text-[#ffffff] mb-4 font-normal leading-tight">
                {step.headline}
              </h3>

              {/* Step Description */}
              <p className="font-helvetica text-xs text-[#e7e5e4] font-light leading-relaxed">
                {step.description}
              </p>
            </div>

            {/* Micro Indicator */}
            <div className="mt-8 pt-4 border-t border-[#595855]/30 flex items-center justify-between font-helvetica text-[9px] uppercase tracking-[0.2em] text-[#808080]">
              <span>STAGE GATE 0{idx + 1}</span>
              <span>CONFIDENTIAL</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

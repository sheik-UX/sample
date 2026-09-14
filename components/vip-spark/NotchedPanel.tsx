'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

interface NotchedPanelProps {
  onOpenInquiry: () => void;
}

export default function NotchedPanel({ onOpenInquiry }: NotchedPanelProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: panelRef,
    offset: ['start end', 'end start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.0]);

  return (
    <section
      ref={panelRef}
      className="relative w-full min-h-[85vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-[#000000]"
    >
      {/* Full-Bleed Classical Oil Painting Panel with gentle scroll scale */}
      <motion.div
        style={{ scale: imageScale }}
        className="absolute inset-0 z-0 will-change-transform"
      >
        <Image
          src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=2400&auto=format&fit=crop"
          alt="Classical Renaissance landscape painting"
          fill
          loading="lazy"
          sizes="100vw"
          className="object-cover object-center"
          style={{ filter: 'contrast(1.05) brightness(0.9)' }}
        />
      </motion.div>

      {/* Floating Centered Notched Product Card with whileInView smooth reveal */}
      <div className="relative z-10 p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="notched-card w-[340px] sm:w-[400px] min-h-[380px] sm:min-h-[400px] bg-[#000000] text-[#ffffff] p-8 sm:p-10 flex flex-col justify-between shadow-none border-none"
        >
          {/* Top Card Label */}
          <div className="flex items-center justify-between border-b border-[#595855]/30 pb-4">
            <span className="font-helvetica text-[10px] uppercase tracking-[0.2em] text-[#808080]">
              Folio Entry · 001
            </span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#ffffff]" />
          </div>

          {/* Center Content */}
          <div className="py-4 space-y-4">
            <h2 className="font-davinci text-2xl sm:text-3xl leading-[1.1] font-medium text-[#ffffff]">
              MORE THAN AN EVENT.{' '}
              <span className="italic font-normal">AN EXPERIENCE.</span>
            </h2>
            <p className="font-helvetica text-xs sm:text-[13px] text-[#e7e5e4] font-light leading-relaxed">
              From intimate destination celebrations to large-scale productions,
              VIP Spark brings creative direction, spatial engineering, and
              uncompromising execution together to create moments people remember.
            </p>
          </div>

          {/* Bottom Card Footer: 'SCROLL' at 9px in lower-left + CTA */}
          <div className="pt-4 border-t border-[#595855]/30 flex items-center justify-between">
            <span className="font-helvetica text-[9px] font-normal tracking-[0.25em] text-[#ffffff] uppercase">
              SCROLL
            </span>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              onClick={onOpenInquiry}
              className="btn-pill-action-white text-[11px] py-1.5 px-3.5"
            >
              <span>Inspect Folio</span>
              <span>&rarr;</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

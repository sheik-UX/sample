'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface FinalCTAProps {
  onStartConversation: () => void;
}

export default function FinalCTA({ onStartConversation }: FinalCTAProps) {
  const whatsappUrl =
    'https://wa.me/?text=' +
    encodeURIComponent(
      'Hello VIP Spark, I would like to discuss planning an upcoming wedding / event.'
    );

  return (
    <section
      id="statement"
      className="relative w-full bg-[#c4c3b6] text-[#000000] py-28 md:py-36 px-6 md:px-12 border-t border-[#dfdcd5] text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl mx-auto flex flex-col items-center"
      >
        {/* Monoline Circled Monogram with subtle hover scale */}
        <motion.div
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.2 }}
          className="w-10 h-10 rounded-full border-[1.5px] border-[#000000] flex items-center justify-center mb-8"
        >
          <span className="font-davinci text-2xl font-medium text-[#000000] leading-none">
            V
          </span>
        </motion.div>

        {/* Micro-label */}
        <span className="font-helvetica text-[10px] uppercase tracking-[0.25em] text-[#595855] block mb-4">
          Commissions & Inquiries · 2026–2027
        </span>

        {/* 52px Davinci Serif Heading */}
        <h2 className="font-davinci text-4xl sm:text-5xl md:text-[52px] leading-[1.0] tracking-[-0.47px] font-medium text-[#000000] uppercase mb-6 max-w-3xl">
          LET’S MAKE YOUR NEXT EVENT{' '}
          <span className="italic font-normal">UNFORGETTABLE.</span>
        </h2>

        {/* Supporting Line */}
        <p className="font-helvetica text-xs sm:text-sm text-[#595855] max-w-lg mx-auto leading-relaxed mb-10">
          Tell us what you&apos;re planning. From intimate lakeside weddings in
          Lake Como to architectural global keynotes, our executive directors
          are ready to begin.
        </p>

        {/* Action Controls: Black Pill Button + Ghost Link */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            onClick={onStartConversation}
            className="btn-pill-action text-[12px] px-[17px] py-[9px]"
          >
            <span>Start a Conversation</span>
            <span>&rarr;</span>
          </motion.button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ghost-text-link text-xs uppercase tracking-wider"
          >
            Connect via WhatsApp &rarr;
          </a>
        </div>
      </motion.div>
    </section>
  );
}

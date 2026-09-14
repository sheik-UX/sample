'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Quote, Heart } from 'lucide-react';

interface HeroProps {
  onPlanEvent: () => void;
}

const tickerItems = [
  'Photography',
  'Venue Planning',
  'Catering & Menu',
  'Entertainment',
  'Videography',
  'Floral Architecture',
  'Spatial Staging',
  'Guest Concierge',
];

export default function Hero({ onPlanEvent }: HeroProps) {
  return (
    <section className="relative w-full bg-[#fdfbf7] text-[#111215] overflow-hidden select-none">
      {/* 1. Upper Editorial Headline Area */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-12 md:pt-20 pb-10 md:pb-14 text-center sm:text-left">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[#8c827a] mb-4 font-helvetica">
            <Heart className="w-3.5 h-3.5 text-[#d97757] fill-[#d97757]" />
            <span>Bespoke Weddings & Monumental Celebrations</span>
          </div>

          <h1 className="font-davinci text-5xl sm:text-6xl md:text-7xl lg:text-[88px] leading-[1.02] tracking-[-0.02em] font-normal text-[#1a1816]">
            Celebrate love <br />
            leave the stress to us.
          </h1>
        </motion.div>
      </div>

      {/* 2. Soft Ribbon Ticker Bar (Photography ✦ Venue Planning ✦ Catering & Menu...) */}
      <div className="w-full bg-[#f6eee9] border-y border-[#ebdcd4] py-3.5 overflow-hidden">
        <div className="flex items-center space-x-8 animate-marquee whitespace-nowrap">
          {[...tickerItems, ...tickerItems, ...tickerItems].map((item, idx) => (
            <div
              key={idx}
              className="inline-flex items-center space-x-6 text-sm sm:text-base font-davinci text-[#4a423d]"
            >
              <span className="tracking-wide">{item}</span>
              <span className="text-[#d97757] text-xs">✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Full-Width Visual Section with Couple & Floating Proof Cards */}
      <div className="relative w-full min-h-[620px] md:min-h-[780px] flex items-end justify-start bg-[#14161b] overflow-hidden">
        {/* Background Wedding Couple Visual */}
        <motion.div
          initial={{ scale: 1.06, opacity: 0.9 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=2400&auto=format&fit=crop"
            alt="Wedding couple celebrating with floral backdrop"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_35%]"
            style={{ filter: 'brightness(0.92) contrast(1.04)' }}
          />

          {/* Gentle gradient overlay at bottom for card contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        </motion.div>

        {/* Floating Cards Anchored at Bottom */}
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 pb-10 md:pb-16">
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6">
            {/* Left Dual Cards: Testimonial & Social Proof */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-end gap-4 max-w-2xl w-full">
              {/* Testimonial Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="bg-black/40 backdrop-blur-md border border-white/20 rounded-2xl p-5 sm:p-6 text-white max-w-sm flex-1 shadow-lg"
              >
                <div className="flex items-center gap-2 text-[#f6eee9] mb-3">
                  <Quote className="w-4 h-4 fill-white/20 text-white/40" />
                  <span className="text-[10px] uppercase tracking-widest text-white/60 font-helvetica">
                    Couple Experience
                  </span>
                </div>
                <p className="font-helvetica text-xs sm:text-[13px] text-white/90 leading-relaxed mb-4 font-light">
                  &ldquo;VIP Spark transformed our Lake Como wedding into pure
                  magic. Every single detail was seamless—we simply lived in the
                  moment.&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-2 border-t border-white/10">
                  <div className="w-8 h-8 rounded-full overflow-hidden relative border border-white/30">
                    <Image
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
                      alt="Arven De Willems"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <span className="font-helvetica text-xs font-medium text-white block">
                      Arven &amp; Juliette De Willems
                    </span>
                    <span className="font-helvetica text-[10px] text-white/60 block">
                      Villa Balbianello · Lake Como
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Trusted Metric Badge Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="bg-black/40 backdrop-blur-md border border-white/20 rounded-2xl p-5 sm:p-6 text-white flex flex-col justify-between shadow-lg"
              >
                {/* Overlapping Avatars + Arrow */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex -space-x-2.5 overflow-hidden">
                    <div className="inline-block h-8 w-8 rounded-full ring-2 ring-black/40 overflow-hidden relative">
                      <Image
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=120&auto=format&fit=crop"
                        alt="Client 1"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="inline-block h-8 w-8 rounded-full ring-2 ring-black/40 overflow-hidden relative">
                      <Image
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=120&auto=format&fit=crop"
                        alt="Client 2"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="inline-block h-8 w-8 rounded-full ring-2 ring-black/40 overflow-hidden relative">
                      <Image
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=120&auto=format&fit=crop"
                        alt="Client 3"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-[#d97757] flex items-center justify-center text-white text-xs">
                    &rarr;
                  </div>
                </div>

                <div>
                  <span className="font-helvetica text-xs font-medium text-white block">
                    Trusted by 500+
                  </span>
                  <span className="font-helvetica text-[10px] text-white/60 block">
                    Couples &amp; Families
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Right Action Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              <button
                onClick={onPlanEvent}
                className="group px-7 py-4 bg-[#d97757] hover:bg-[#c66445] text-white text-xs uppercase tracking-[0.2em] font-helvetica font-medium rounded-full flex items-center gap-3 transition-all duration-300 shadow-xl hover:shadow-[0_0_30px_rgba(217,119,87,0.4)]"
              >
                <span>Plan Your Wedding</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollReveal } from './animations';

export default function ScrubTextReveal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!textRef.current || !containerRef.current) return;

    const words = textRef.current.querySelectorAll<HTMLElement>('.scrub-word');

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      words.forEach((w) => {
        w.style.opacity = '1';
      });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        words,
        { opacity: 0.18 },
        {
          opacity: 1,
          stagger: 0.05,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
            end: 'bottom 50%',
            scrub: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const manifestoText =
    'Streamline operations with smart workflows. Optimize your daily tasks and harness data for clear outcomes. Expand capabilities across your entire product ecosystem with precision design, modular frameworks, and structured automation nodes.';

  return (
    <section
      ref={containerRef}
      className="relative py-14 sm:py-18 md:py-20 px-6 max-w-5xl mx-auto text-center bg-[#FDFDFD]"
    >
      <ScrollReveal>
        <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#FF5722] mb-6">
          CORE VALUE PROPOSITION
        </div>
      </ScrollReveal>

      <p
        ref={textRef}
        className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-[54px] font-normal tracking-tight text-[#111827] leading-[1.28]"
      >
        {manifestoText.split(' ').map((word, i) => (
          <span key={i} className="scrub-word inline-block mr-[0.26em] transition-opacity">
            {word}
          </span>
        ))}
      </p>
    </section>
  );
}

'use client';

import React, { useState } from 'react';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import { Heart, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenInquiry: () => void;
}

export default function Navbar({ onOpenInquiry }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  return (
    <header className="w-full bg-[#fdfbf7] border-b border-[#ebdcd4] py-4 px-6 md:px-12 flex items-center justify-between sticky top-0 z-40 transition-colors relative">
      {/* Discreet Scroll Progress Indicator */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#d97757] origin-left z-50 pointer-events-none"
      />

      {/* Top-Left: Brand Mark with Heart */}
      <a
        href="#"
        className="flex items-center gap-2.5 group focus:outline-none"
        aria-label="VIP Spark Home"
      >
        <div className="w-8 h-8 rounded-full bg-[#f6eee9] border border-[#ebdcd4] flex items-center justify-center transition-transform group-hover:scale-105">
          <Heart className="w-4 h-4 text-[#d97757] fill-[#d97757]" />
        </div>
        <div className="flex flex-col">
          <span className="font-davinci text-xl font-medium tracking-tight text-[#1a1816]">
            VIP Spark
          </span>
          <span className="font-helvetica text-[8px] uppercase tracking-[0.24em] text-[#8c827a]">
            Bespoke Weddings
          </span>
        </div>
      </a>

      {/* Center Navigation Links */}
      <nav className="hidden md:flex items-center space-x-9 text-xs font-helvetica tracking-[0.08em] text-[#59524c]">
        <a href="#" className="hover:text-[#d97757] transition-colors">
          Home
        </a>
        <a href="#about" className="hover:text-[#d97757] transition-colors">
          About us
        </a>
        <a href="#disciplines" className="hover:text-[#d97757] transition-colors">
          Services
        </a>
        <a href="#work" className="hover:text-[#d97757] transition-colors">
          Gallery
        </a>
        <a href="#statement" className="hover:text-[#d97757] transition-colors">
          Contact
        </a>
      </nav>

      {/* Top-Right: Pill CTA Button */}
      <div className="hidden md:flex items-center">
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          onClick={onOpenInquiry}
          className="px-5 py-2.5 bg-[#d97757] hover:bg-[#c66445] text-white text-xs font-helvetica font-medium rounded-full flex items-center gap-2 transition-all shadow-sm"
        >
          <span>Let&apos;s Connect</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </motion.button>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="flex md:hidden items-center gap-3">
        <button
          onClick={onOpenInquiry}
          className="px-3 py-1.5 bg-[#d97757] text-white text-xs rounded-full font-helvetica"
        >
          Connect
        </button>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-1.5 text-xs uppercase tracking-widest text-[#1a1816] border border-[#ebdcd4]"
          aria-label="Toggle navigation"
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-full left-0 w-full bg-[#fdfbf7] border-b border-[#ebdcd4] p-6 flex flex-col space-y-4 md:hidden z-40"
          >
            <a
              href="#"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-helvetica text-[#1a1816]"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-helvetica text-[#1a1816]"
            >
              About us
            </a>
            <a
              href="#disciplines"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-helvetica text-[#1a1816]"
            >
              Services
            </a>
            <a
              href="#work"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-helvetica text-[#1a1816]"
            >
              Gallery
            </a>
            <a
              href="#statement"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-helvetica text-[#1a1816]"
            >
              Contact
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

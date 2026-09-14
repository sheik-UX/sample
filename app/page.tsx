'use client';

import React, { useState } from 'react';
import Navbar from '@/components/vip-spark/Navbar';
import Hero from '@/components/vip-spark/Hero';
import NotchedPanel from '@/components/vip-spark/NotchedPanel';
import Services from '@/components/vip-spark/Services';
import SelectedWork from '@/components/vip-spark/SelectedWork';
import Process from '@/components/vip-spark/Process';
import FinalCTA from '@/components/vip-spark/FinalCTA';
import Footer from '@/components/vip-spark/Footer';
import InquiryDrawer from '@/components/vip-spark/InquiryDrawer';

export default function Home() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeServiceInquiry, setActiveServiceInquiry] = useState<string>('');

  const handleOpenInquiry = (service: string = '') => {
    setActiveServiceInquiry(service);
    setDrawerOpen(true);
  };

  const handleCloseInquiry = () => {
    setDrawerOpen(false);
  };

  return (
    <main className="overflow-x-hidden w-full max-w-full bg-[#c4c3b6] text-[#000000]">
      {/* 00 — Minimal Header on Putty (#c4c3b6): Monoline Circled Logo Mark & Ghost Links */}
      <Navbar onOpenInquiry={() => handleOpenInquiry()} />

      {/* 01 — Hero Wordmark Section: Putty Canvas, 52px Cluster, Stat Pair, Black Pill Button & 374px Cropped Wordmark */}
      <Hero onPlanEvent={() => handleOpenInquiry()} />

      {/* 02 — Full-Bleed Classical Painting Panel with Centered 400px Dark Notched Card */}
      <NotchedPanel onOpenInquiry={() => handleOpenInquiry()} />

      {/* 03 — Dark Feature Section (#000000): 94px Centered Heading, 200px Circular Vignettes & Hexagonal Dots */}
      <Services onSelectService={(service) => handleOpenInquiry(service)} />

      {/* 04 — Light Editorial Section (Putty #c4c3b6 & Bone #e7e5e4): Museum Folio Selected Experiences */}
      <SelectedWork onInquire={(project) => handleOpenInquiry(project)} />

      {/* 05 — Dark Feature Section (#000000): The 4-Stage Process with Hexagonal Indicators */}
      <Process />

      {/* 06 — Closing Chapter on Putty Canvas: 52px Davinci Heading, Black Pill Button & WhatsApp Link */}
      <FinalCTA onStartConversation={() => handleOpenInquiry()} />

      {/* 07 — Chalk Footer (#ebebeb): Circled Monogram & Studio Hallmarks */}
      <Footer />

      {/* Concierge Inquiry Drawer on Bone Canvas (#e7e5e4) */}
      <InquiryDrawer
        isOpen={drawerOpen}
        onClose={handleCloseInquiry}
        initialService={activeServiceInquiry}
      />
    </main>
  );
}

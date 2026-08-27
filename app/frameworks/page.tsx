import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FrameworksContent from './FrameworksContent';

export const metadata: Metadata = {
  title: 'PaperFlow Frameworks | Operational Workflows',
  description:
    'Structured architecture frameworks for building resilient, sub-second operational workflows, enterprise event buses, and real-time data pipelines.',
};

export default function FrameworksPage() {
  return (
    <main className="overflow-x-hidden w-full max-w-full bg-[#FDFBF7] text-[#111827] min-h-screen flex flex-col justify-between">
      <Navbar />
      <FrameworksContent />
      <Footer />
    </main>
  );
}

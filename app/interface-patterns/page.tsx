import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InterfacePatternsContent from './InterfacePatternsContent';

export const metadata: Metadata = {
  title: 'PaperFlow Interface Patterns | Workflow UI',
  description:
    'Explore crafted interface patterns, modular workflow builders, data tables, and automation controls engineered for operational clarity and rigorous visual hierarchy.',
};

export default function InterfacePatternsPage() {
  return (
    <main className="overflow-x-hidden w-full max-w-full bg-[#FDFBF7] text-[#111827] min-h-screen flex flex-col justify-between">
      <Navbar />
      <InterfacePatternsContent />
      <Footer />
    </main>
  );
}

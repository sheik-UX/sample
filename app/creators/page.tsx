import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CreatorsContent from './CreatorsContent';

export const metadata: Metadata = {
  title: 'PaperFlow Creators | Build Powerful Workflows',
  description:
    'Empowering creators, platform architects, and engineering teams to design, package, and deploy transformative operational workflows with speed and craft.',
};

export default function CreatorsPage() {
  return (
    <main className="overflow-x-hidden w-full max-w-full bg-[#FDFBF7] text-[#111827] min-h-screen flex flex-col justify-between">
      <Navbar />
      <CreatorsContent />
      <Footer />
    </main>
  );
}

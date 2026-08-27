import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PlansPricingContent from './PlansPricingContent';

export const metadata: Metadata = {
  title: 'PaperFlow Plans & Pricing | Workflow Automation',
  description:
    'Transparent subscription models and scalable plans engineered for modern teams. Choose a plan based on your operational workflow and automation needs.',
};

export default function PlansPricingPage() {
  return (
    <main className="overflow-x-hidden w-full max-w-full bg-[#FDFBF7] text-[#111827] min-h-screen flex flex-col justify-between">
      <Navbar />
      <PlansPricingContent />
      <Footer />
    </main>
  );
}

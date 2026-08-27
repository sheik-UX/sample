import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustProof from '@/components/TrustProof';
import ProblemSection from '@/components/ProblemSection';
import AboutUs from '@/components/AboutUs';
import HowItWorks from '@/components/HowItWorks';
import BentoGrid from '@/components/BentoGrid';
import UseCases from '@/components/UseCases';
import PinnedCaseStudies from '@/components/PinnedCaseStudies';
import ScrubTextReveal from '@/components/ScrubTextReveal';
import Integrations from '@/components/Integrations';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import PlanComparison from '@/components/PlanComparison';
import FAQSection from '@/components/FAQSection';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="overflow-x-hidden w-full max-w-full bg-[#FDFDFD] text-[#111827]">
      {/* 00 — Paperflow Sticky Navigation */}
      <Navbar />

      {/* 01 — HERO: Streamline operations with smart workflows */}
      <Hero />

      {/* 02 — TRUST / PROOF: Built for modern teams */}
      <TrustProof />

      {/* 03 — PROBLEM: Operations shouldn't be this complicated */}
      <ProblemSection />

      {/* 04 — SOLUTION: An operational foundation engineered for modern scale */}
      <AboutUs />

      {/* 05 — HOW IT WORKS: From idea to automated workflow */}
      <HowItWorks />

      {/* 06 — PRODUCT / FEATURES: Everything you need to build powerful workflows */}
      <BentoGrid />

      {/* 07 — USE CASES: Automate work across your entire organization */}
      <UseCases />

      {/* 08 — WORKFLOW EXAMPLES: Proven workflow architectures across modern teams */}
      <PinnedCaseStudies />
      <ScrubTextReveal />

      {/* 09 — INTEGRATIONS: Works with the tools your team already uses */}
      <Integrations />

      {/* 10 — CUSTOMER PROOF: Trusted by teams building modern operations */}
      <TestimonialCarousel />

      {/* 11 — PRICING: Compare plans designed for scale and clarity */}
      <PlanComparison />

      {/* 12 — FAQ: Frequently asked questions */}
      <FAQSection />

      {/* 13 — FINAL CTA: Streamline your operations with smart workflows */}
      <FinalCTA />

      {/* 14 — FOOTER: Site directory & copyright */}
      <Footer />
    </main>
  );
}

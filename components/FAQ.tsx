'use client';

import React, { useState } from 'react';
import { Plus, Minus, HelpCircle, ArrowUpRight } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: 'What types of companies and founders do you partner with?',
      answer:
        'We work with high-conviction founders, venture-backed scaleups (Series A to Pre-IPO), and established market pioneers looking to reposition their digital presence. Our typical partner has proven product-market fit or a transformative technical breakthrough and needs an architectural web flagship that commands market authority.',
      category: 'Fit & Scope',
    },
    {
      question: 'How long does a typical flagship engagement take?',
      answer:
        'A comprehensive flagship engagement (brand strategy, spatial design, and custom Next.js engineering) typically spans 6 to 10 weeks. Focused design-only or engineering-only sprints can be completed in 4 to 6 weeks. We strictly commit to fixed sprint timelines—no scope creep, no endless revisions.',
      category: 'Timeline',
    },
    {
      question: 'How is your pricing structured?',
      answer:
        'We operate on transparent, flat-fee sprint commitments rather than open-ended hourly billing. Typical engagements range from $25,000 for focused brand or product design sprints to $50,000–$90,000 for end-to-end flagship web transformations. Every proposal has guaranteed deliverables and explicit milestone handoffs.',
      category: 'Investment',
    },
    {
      question: 'Do you handle development in-house or outsource to contractors?',
      answer:
        '100% in-house, senior-led execution. You will never be handed off to junior developers or offshore third parties. The exact senior engineers and creative directors who lead your strategic kickoff are the ones writing your TypeScript code, tuning your WebGL shaders, and deploying your production build.',
      category: 'Team & Craft',
    },
    {
      question: 'What tech stack do you build with, and why?',
      answer:
        'Our default flagship stack is Next.js (App Router), TypeScript, Tailwind CSS, and edge caching on Vercel or AWS. For content management, we integrate headless solutions like Sanity or Strapi so your marketing team can update text and media without developer intervention. We prioritize zero bundle bloat and 100/100 Core Web Vitals.',
      category: 'Architecture',
    },
    {
      question: 'What happens after our website goes live?',
      answer:
        'Every project includes a 30-day warranty and hypercare period to monitor real-world analytics, optimize edge caching, and conduct live staff training. Following launch, many clients retain us on a quarterly strategic advisory for continuous iterative experimentation.',
      category: 'Post-Launch',
    },
  ];

  return (
    <section id="faq" className="relative py-24 md:py-36 bg-white border-b border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column Header */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                07 // CLARITY & ANSWERS
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-neutral-950 leading-tight">
              Frequently asked questions regarding our studio engagements.
            </h2>

            <p className="text-base text-neutral-600 font-normal leading-relaxed">
              We prioritize complete operational transparency. If you have a question not covered
              here, we are always happy to discuss specifics on a discovery call.
            </p>

            <div className="p-6 rounded-xl bg-canvas border border-neutral-200/90 shadow-fine space-y-3">
              <div className="text-sm font-medium text-neutral-900">Have a custom question?</div>
              <p className="text-xs text-neutral-600">
                Directly connect with our founding partners for a 20-minute scoping assessment.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-600 hover:underline pt-1"
              >
                Inquire directly <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column Accordion */}
          <div className="lg:col-span-7 divide-y divide-neutral-200 border-y border-neutral-200">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="py-6 transition-colors">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-start justify-between gap-4 text-left focus:outline-none group"
                    aria-expanded={isOpen}
                  >
                    <span className="text-lg sm:text-xl font-medium text-neutral-950 group-hover:text-blue-600 transition-colors">
                      {faq.question}
                    </span>
                    <span className="w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-600 group-hover:border-neutral-900 group-hover:text-neutral-900 transition-colors shrink-0 mt-0.5">
                      {isOpen ? (
                        <Minus className="w-3.5 h-3.5" />
                      ) : (
                        <Plus className="w-3.5 h-3.5" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="mt-4 pr-10 text-sm sm:text-base text-neutral-600 leading-relaxed font-normal animate-in fade-in-50 duration-200">
                      <p>{faq.answer}</p>
                      <div className="mt-3 text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                        Topic: {faq.category}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

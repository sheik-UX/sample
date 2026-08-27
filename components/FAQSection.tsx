'use client';

import React, { useState } from 'react';
import { Plus, Minus, Sparkles } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from './animations';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What is PaperFlow?',
      answer:
        'PaperFlow is an enterprise-grade workflow automation and orchestration platform designed to replace fragile scheduled scripts with resilient, sub-second execution pipelines. It unites database triggers, API webhooks, and complex business logic in an intuitive visual architecture.',
    },
    {
      question: 'How does PaperFlow connect with our existing tools?',
      answer:
        'PaperFlow provides pre-configured bi-directional connectors for PostgreSQL, GitHub, Stripe, AWS, Slack, and REST APIs. You can link existing data sources in seconds with automated schema discovery and continuous change data capture (CDC).',
    },
    {
      question: 'Can PaperFlow automate our existing workflows?',
      answer:
        'Yes. You can import legacy cron jobs, webhook handlers, and multi-step manual processes directly into PaperFlow rule nodes without rewriting your core backend code. We provide automated migration blueprints for standard operational setups.',
    },
    {
      question: 'Is PaperFlow suitable for growing teams?',
      answer:
        'Absolutely. PaperFlow scales seamlessly from solo engineers automating early flows to multi-region enterprise clusters processing over 14,000 events per second with an audited 99.99% uptime guarantee and SOC2 Type II compliance.',
    },
    {
      question: 'How does pricing work?',
      answer:
        'Our pricing is straightforward with transparent monthly and annual tiers based on active workflows and monthly task volumes. There are zero surprise compute multipliers or egress penalties. You can upgrade, downgrade, or prorate anytime.',
    },
    {
      question: 'How quickly can we get started?',
      answer:
        'You can deploy your first active smart workflow in under five minutes. Simply sign up, connect your data schema or webhook trigger, and test your first automated rule node directly in our live interactive playground.',
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="faq" className="relative py-14 sm:py-18 md:py-22 px-4 sm:px-6 bg-[#FDFDFD] border-t border-[#E5E7EB] overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4F4F5] border border-[#E5E7EB] text-xs font-mono font-semibold text-[#4B5563] mb-4 shadow-xs">
            <Sparkles size={13} className="text-[#FF5722] fill-[#FF5722]" />
            <span>Common Inquiries</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-medium tracking-tight text-[#111827] leading-[1.06] mb-4">
            Frequently asked questions.
          </h2>

          <p className="font-serif text-lg sm:text-xl text-[#4B5563] font-normal leading-[1.65]">
            Everything you need to know about PaperFlow architecture, integrations, security, and onboarding.
          </p>
        </ScrollReveal>

        {/* FAQ Accordion List with Stagger */}
        <StaggerContainer className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <StaggerItem key={idx}>
                <div className="rounded-[16px] border border-[#E5E7EB] bg-white overflow-hidden transition-all shadow-xs hover:border-[#FF5722]">
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg font-medium text-[#111827]">
                      {faq.question}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all shrink-0 ${
                        isOpen
                          ? 'bg-[#FFF1EC] border-[#FFD0C2] text-[#FF5722]'
                          : 'bg-[#F4F4F5] border-[#E5E7EB] text-[#4B5563]'
                      }`}
                    >
                      {isOpen ? <Minus size={15} strokeWidth={2.5} /> : <Plus size={15} strokeWidth={2.5} />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 font-serif text-sm sm:text-base text-[#4B5563] font-normal leading-relaxed border-t border-[#E5E7EB]/60">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Bottom Support Link */}
        <ScrollReveal delay={0.1} className="mt-12 text-center text-xs font-mono text-[#4B5563]">
          <span>Still have questions? </span>
          <a href="#contact" className="text-[#FF5722] font-semibold underline underline-offset-4 hover:text-[#E64A19]">
            Speak with an engineering architect
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}

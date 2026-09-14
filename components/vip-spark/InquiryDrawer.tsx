'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface InquiryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export default function InquiryDrawer({
  isOpen,
  onClose,
  initialService = '',
}: InquiryDrawerProps) {
  const [eventType, setEventType] = useState(initialService || 'Weddings');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    location: '',
    guestCount: '150–400 guests',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) {
      setEventType(initialService);
    }
  }, [initialService]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello VIP Spark, I would like to inquire about planning a ${eventType} for ${formData.guestCount}.`
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#000000]/60"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Slide-over Drawer Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-xl bg-[#e7e5e4] text-[#000000] border-l border-[#000000] shadow-none h-full flex flex-col justify-between overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-labelledby="drawer-title"
          >
            <div className="p-8 md:p-12">
              {/* Header */}
              <div className="flex items-center justify-between pb-6 border-b border-[#dfdcd5]">
                <div>
                  <span className="font-helvetica text-[10px] uppercase tracking-[0.25em] text-[#595855] block mb-1">
                    Concierge Inquiries
                  </span>
                  <h2
                    id="drawer-title"
                    className="font-davinci text-3xl md:text-4xl text-[#000000] font-medium"
                  >
                    Start a Conversation
                  </h2>
                </div>
                <button
                  onClick={onClose}
                  aria-label="Close inquiry drawer"
                  className="font-helvetica text-xs uppercase tracking-widest text-[#000000] hover:underline"
                >
                  Close ✕
                </button>
              </div>

              {submitted ? (
                <div className="py-16 text-center space-y-6">
                  <div className="w-12 h-12 rounded-full border-[1.5px] border-[#000000] flex items-center justify-center mx-auto">
                    <span className="font-davinci text-2xl font-medium">✓</span>
                  </div>
                  <h3 className="font-davinci text-2xl sm:text-3xl text-[#000000]">
                    Commission Brief Received
                  </h3>
                  <p className="font-helvetica text-xs sm:text-sm text-[#595855] max-w-md mx-auto leading-relaxed">
                    Thank you for entrusting VIP Spark with your vision. Our
                    executive creative directors will review your requirements and
                    respond within 24 business hours under strict confidentiality.
                  </p>
                  <div className="pt-4">
                    <motion.button
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => {
                        setSubmitted(false);
                        onClose();
                      }}
                      className="btn-pill-action"
                    >
                      <span>Return to Folio</span>
                    </motion.button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="pt-6 space-y-6">
                  {/* Discipline Selector */}
                  <div>
                    <label className="block font-helvetica text-[10px] uppercase tracking-[0.2em] text-[#595855] mb-2.5">
                      Commission Discipline
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        'Weddings',
                        'Corporate Events',
                        'Private Celebrations',
                        'Event Production',
                        'Destination Events',
                        'Entertainment',
                      ].map((service) => (
                        <button
                          type="button"
                          key={service}
                          onClick={() => setEventType(service)}
                          className={`text-left px-3 py-2 text-xs font-helvetica tracking-wider transition-all border ${
                            eventType === service
                              ? 'border-[#000000] bg-[#000000] text-[#ffffff] font-medium'
                              : 'border-[#dfdcd5] bg-[#c4c3b6]/40 text-[#000000] hover:border-[#000000]'
                          }`}
                        >
                          {service}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Personal Details */}
                  <div className="space-y-4 font-helvetica">
                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.2em] text-[#595855] mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Full name or organization"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full bg-[#c4c3b6]/40 border border-[#dfdcd5] px-3.5 py-2.5 text-xs text-[#000000] placeholder:text-[#595855]/60 focus:outline-none focus:border-[#000000]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] uppercase tracking-[0.2em] text-[#595855] mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="client@folio.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full bg-[#c4c3b6]/40 border border-[#dfdcd5] px-3.5 py-2.5 text-xs text-[#000000] placeholder:text-[#595855]/60 focus:outline-none focus:border-[#000000]"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] uppercase tracking-[0.2em] text-[#595855] mb-1">
                          Phone / WhatsApp
                        </label>
                        <input
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="w-full bg-[#c4c3b6]/40 border border-[#dfdcd5] px-3.5 py-2.5 text-xs text-[#000000] placeholder:text-[#595855]/60 focus:outline-none focus:border-[#000000]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] uppercase tracking-[0.2em] text-[#595855] mb-1">
                          Estimated Date / Season
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Summer 2026 or Oct 14"
                          value={formData.date}
                          onChange={(e) =>
                            setFormData({ ...formData, date: e.target.value })
                          }
                          className="w-full bg-[#c4c3b6]/40 border border-[#dfdcd5] px-3.5 py-2.5 text-xs text-[#000000] placeholder:text-[#595855]/60 focus:outline-none focus:border-[#000000]"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] uppercase tracking-[0.2em] text-[#595855] mb-1">
                          Guest Capacity
                        </label>
                        <select
                          value={formData.guestCount}
                          onChange={(e) =>
                            setFormData({ ...formData, guestCount: e.target.value })
                          }
                          className="w-full bg-[#c4c3b6]/40 border border-[#dfdcd5] px-3.5 py-2.5 text-xs text-[#000000] focus:outline-none focus:border-[#000000]"
                        >
                          <option value="Intimate (< 80 guests)">Intimate (&lt; 80 guests)</option>
                          <option value="80–250 guests">80–250 guests</option>
                          <option value="250–600 guests">250–600 guests</option>
                          <option value="600–2,500+ guests">600–2,500+ guests</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.2em] text-[#595855] mb-1">
                        Venue or Preferred Destination
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Lake Como, Paris, Saint-Moritz"
                        value={formData.location}
                        onChange={(e) =>
                          setFormData({ ...formData, location: e.target.value })
                        }
                        className="w-full bg-[#c4c3b6]/40 border border-[#dfdcd5] px-3.5 py-2.5 text-xs text-[#000000] placeholder:text-[#595855]/60 focus:outline-none focus:border-[#000000]"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.2em] text-[#595855] mb-1">
                        Aesthetic Vision & Scale Notes
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Briefly describe your vision, desired atmosphere, or technical requirements..."
                        value={formData.notes}
                        onChange={(e) =>
                          setFormData({ ...formData, notes: e.target.value })
                        }
                        className="w-full bg-[#c4c3b6]/40 border border-[#dfdcd5] px-3.5 py-2.5 text-xs text-[#000000] placeholder:text-[#595855]/60 focus:outline-none focus:border-[#000000] resize-none"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="btn-pill-action w-full py-3"
                    >
                      <span>Submit Commission Brief</span>
                      <span>&rarr;</span>
                    </motion.button>
                  </div>

                  {/* Direct WhatsApp link */}
                  <div className="pt-3 border-t border-[#dfdcd5] text-center">
                    <a
                      href={`https://wa.me/?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ghost-text-link text-xs uppercase tracking-wider"
                    >
                      Connect directly on WhatsApp &rarr;
                    </a>
                  </div>
                </form>
              )}
            </div>

            {/* Discreet Footer Note */}
            <div className="p-6 border-t border-[#dfdcd5] font-helvetica text-[10px] text-[#595855] flex justify-between items-center tracking-widest uppercase">
              <span>VIP SPARK · ARCHIVE</span>
              <span>LONDON · PARIS · LAKE COMO · NEW YORK</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

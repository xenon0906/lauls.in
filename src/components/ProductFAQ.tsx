"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

export interface FAQItem {
  question: string;
  answer: string;
}

interface Props {
  title?: string;
  subtitle?: string;
  items: FAQItem[];
  accentColor?: string;
}

export default function ProductFAQ({ title = "Frequently Asked Questions", subtitle, items, accentColor = "#DCA54C" }: Props) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-20 border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <HelpCircle size={16} style={{ color: accentColor }} />
            <span className="font-display font-bold uppercase tracking-widest text-[10px]" style={{ color: accentColor }}>FAQ</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-[#0A1628] mb-4">{title}</h2>
          {subtitle && (
            <p className="text-gray-500 text-sm max-w-2xl mx-auto">{subtitle}</p>
          )}
        </div>

        <div className="space-y-3">
          {items.map((item, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                activeIndex === idx
                  ? "shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
                  : "border-gray-100 hover:border-gray-200"
              }`}
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                className="w-full px-6 py-5 flex items-center justify-between text-left group"
                aria-expanded={activeIndex === idx}
              >
                <span className="font-display font-semibold text-sm md:text-base text-[#0A1628] pr-4" itemProp="name">
                  {item.question}
                </span>
                <div className={`p-1 rounded-md transition-colors flex-shrink-0 ${activeIndex === idx ? "bg-amber-50" : "bg-gray-50"}`}>
                  <ChevronDown size={16} className={`transition-transform duration-300 ${activeIndex === idx ? "rotate-180" : ""}`} style={{ color: accentColor }} />
                </div>
              </button>

              <AnimatePresence>
                {activeIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                      <p className="text-gray-600 text-sm leading-relaxed" itemProp="text">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
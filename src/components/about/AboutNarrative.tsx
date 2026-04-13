"use client";

import { motion } from "framer-motion";
import AutoImageRotator from "../AutoImageRotator";

const strengths = [
  { title: "Logistics", desc: "Pan India Warehouse" },
  { title: "Electric Trucks", desc: "Zero Emission Fleet" },
  { title: "Fe Alloy Distribution", desc: "15K MT Annual" },
  { title: "Alloy Steel Distribution", desc: "TATA Partner" },
];

export default function AboutNarrative() {
  return (
    <section className="bg-white py-24 w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center w-full max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-[#DCA54C]/10 rounded-full">
            <div className="w-1.5 h-1.5 rounded-full bg-[#DCA54C]" />
            <span className="text-[#DCA54C] font-display font-bold uppercase tracking-widest text-[10px]">Our Story</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-[#0A1628] leading-tight">
            A Narrative of Resilience, <br /> Growth & National Impact
          </h2>
        </div>

        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Image */}
          <div className="relative rounded-2xl overflow-hidden aspect-4/3 group shadow-2xl">
            <AutoImageRotator
              images={[
                 "/images/manufacturing.jpg",
                 "/images/stockyard.jpg",
                 "/images/team-group-2.jpg",
                 "/images/warehouse.jpg"
              ]}
              interval={5000}
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#0A1628]/80 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-white text-lg font-medium leading-relaxed">
                "We deliver the robust logistics and distribution networks that build the nation's infrastructure, ensuring uncompromising quality at every step."
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <div className="mb-12">
              <p className="text-gray-600 leading-relaxed mb-6">
                In 1994, Lauls Ltd began as a single distribution hub in New Delhi with a bold vision: to become the backbone of India's developing infrastructure ecosystem. What started as a modest operation has grown into a <strong className="text-[#0A1628]">multi-disciplinary conglomerate</strong> spanning four critical business verticals.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Over three decades, we've earned the trust of major industrial sectors, steel manufacturers, and logistics enterprises. Our continuous pursuit of excellence isn't just a tagline — it's proof of our relentless commitment to quality, precision, and reliability in every service we deliver.
              </p>
            </div>

            {/* 2x2 Grid of Strengths */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              {strengths.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#DCA54C]/10 flex items-center justify-center shrink-0 mt-1">
                     <div className="w-3 h-3 rounded-full bg-[#DCA54C]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0A1628] text-sm mb-1">{item.title}</h4>
                    <p className="text-gray-500 text-xs font-medium uppercase tracking-wider">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "Pan-India Dedicated Fleet",
    subtitle: "Heavy haulage across every state",
    desc: "Maintaining our own fleet of over 400 heavy commercial vehicles gives us complete control over supply chain timelines. We ensure zero third-party dependencies for enterprise critical cargo.",
    image: "/images/IMG_9993.JPG",
    chips: [
      { label: "Coverage", value: "All Indian States" },
      { label: "Cargo Types", value: "Bulk, Over-Dimensional" },
    ],
    link: "Explore Road Logistics"
  },
  {
    title: "Rail Freight Operations",
    subtitle: "Bulk material movement at scale",
    desc: "For unparalleled scale, Lauls Ltd operates dedicated railway sidings to mobilize tens of thousands of tons of raw material across the continent efficiently and affordably.",
    image: "/lauls image/IMG_9916.JPG",
    chips: [
      { label: "Capacity", value: "Mass Bulk Freight" },
      { label: "Network", value: "Direct Port/Mill Connect" },
    ],
    link: "Explore Rail Freight"
  },
  {
    title: "Zero-Emission EV Transport",
    subtitle: "Pioneering green logistics",
    desc: "We are aggressively electrifying our last-mile and mid-range fleet, deploying state-of-the-art Heavy Electric Trucks to decarbonize supply chains for our ESG-conscious partners.",
    image: "/lauls image/image copy 4.png",
    chips: [
      { label: "Emissions", value: "Net-Zero Fleet" },
      { label: "Use Case", value: "Sustainable Mid-Mile" },
    ],
    link: "View ESG Initiatives"
  },
  {
    title: "Strategic Warehousing",
    subtitle: "12 high-capacity national hubs",
    desc: "Our interconnected warehouse network offers secure, massive-scale storage for steel and alloys, enabling direct JIT (Just-In-Time) supply models directly to automotive plants and construction zones.",
    image: "/lauls image/image copy 9.png",
    chips: [
      { label: "Facilities", value: "12 Distribution Hubs" },
      { label: "Services", value: "JIT, Inventory Management" },
    ],
    link: "View Hub Locations"
  }
];

export default function LogisticsServices() {
  return (
    <section className="bg-white py-32 w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center w-full max-w-2xl mx-auto mb-24">
          <div className="text-[#DCA54C] font-bold text-[10px] tracking-widest uppercase mb-4">
            Operations
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-[#0A1628] mb-6 tracking-tight">
            Multi-modal scale
          </h2>
          <p className="text-gray-500 text-lg font-light">
            We operate an integrated web of road, rail, and warehousing infrastructure designed specifically to handle heavy industrial logistics without fail.
          </p>
        </div>

        {/* Alternating Row Layout */}
        <div className="flex flex-col gap-24 lg:gap-32">
          {services.map((service, idx) => (
            <div 
              key={idx}
              className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Image Side */}
              <motion.div 
                initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className="w-full lg:w-1/2"
              >
                <div className="relative w-full aspect-4/3 rounded-3xl overflow-hidden shadow-2xl bg-[#0A1628]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl pointer-events-none" />
                </div>
              </motion.div>

              {/* Text / Details Side */}
              <motion.div 
                initial={{ opacity: 0, x: idx % 2 === 0 ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="w-full lg:w-1/2 flex flex-col"
              >
                <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 bg-gray-50 border border-gray-100 rounded-full w-fit">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#DCA54C]" />
                  <span className="text-[#0A1628] font-display font-medium uppercase tracking-widest text-[10px]">Division {idx + 1}</span>
                </div>

                <h3 className="text-3xl md:text-5xl font-display font-bold text-[#0A1628] mb-4">
                  {service.title}
                </h3>
                
                <h4 className="text-lg md:text-xl text-gray-800 font-medium mb-6">
                  {service.subtitle}
                </h4>

                <p className="text-gray-500 font-light leading-relaxed mb-10 w-full lg:max-w-lg">
                  {service.desc}
                </p>

                {/* Highly visible specs block */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {service.chips.map((chip, i) => (
                    <div key={i} className="flex flex-col bg-[#0A1628] rounded-xl p-5 border border-[#0A1628]">
                       <span className="text-[#DCA54C] text-[10px] font-bold uppercase tracking-wider mb-2">{chip.label}</span>
                       <span className="text-white font-medium text-sm">{chip.value}</span>
                    </div>
                  ))}
                </div>

                {/* Call to action */}
                <Link href="/logistics/details" className="flex items-center gap-2 text-[#DCA54C] font-bold border-b-2 border-transparent hover:border-[#DCA54C] pb-1 transition-all w-max group">
                  {service.link} <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

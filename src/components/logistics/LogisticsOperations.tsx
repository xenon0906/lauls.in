"use client";

import { Truck, Zap, Train, Box } from "lucide-react";
import { motion } from "framer-motion";

const operations = [
  {
    icon: Truck,
    title: "Highway Cargo Fleets",
    description: "A robust national network of flatbeds, trailers, and specialized carriers executing oversized and heavy load transport.",
    stats: "300+ Active Vehicles"
  },
  {
    icon: Zap,
    title: "Electric Delivery Trucks",
    description: "Pioneering the green revolution in Indian logistics with zero-emission EV trucks optimized for sustainable middle-mile delivery.",
    stats: "Zero Carbon Emissions"
  },
  {
    icon: Train,
    title: "Railway Freight Integration",
    description: "Deep-rooted heritage in rail logistics, ensuring seamless multi-modal transfers and enormous bulk capacity handling.",
    stats: "Nationwide Rail Network"
  },
  {
    icon: Box,
    title: "Heavy Machinery Storage",
    description: "Strategic distribution hubs equipped with heavy-duty cranes and reinforced flooring for prime steel and precision tube storage.",
    stats: "12 Strategic Warehouses"
  }
];

export default function LogisticsOperations() {
  return (
    <section className="bg-white py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-[#0A1628] mb-6">
            Multi-Modal Specializations
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed font-light">
            We don't just move cargo; we architect supply chains. Explore the distinct operational divisions that make Lauls Ltd a leader in industrial transport.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {operations.map((op, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-gray-50 border border-gray-100 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <op.icon size={26} className="text-[#3b82f6]" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-[#0A1628] mb-4 font-display">{op.title}</h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed mb-6">
                {op.description}
              </p>
              <div className="mt-auto inline-flex items-center gap-2 px-3 py-1.5 bg-[#DCA54C]/10 rounded-md">
                <span className="text-[#DCA54C] text-[10px] uppercase tracking-widest font-bold">{op.stats}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

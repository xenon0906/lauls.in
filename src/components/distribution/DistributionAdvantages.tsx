"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Truck, Lightbulb } from "lucide-react";

export default function DistributionAdvantages() {
  const advantages = [
    {
      title: "Certified quality",
      icon: <ShieldCheck size={24} className="text-[#DCA54C]" />,
      desc: "Every product undergoes rigorous quality control at every stage. Full traceability and mill test certificates provided for each consignment.",
      tags: ["ISO 9001:2015", "Mill Test Certs"]
    },
    {
      title: "Pan-India delivery",
      icon: <Truck size={24} className="text-[#DCA54C]" />,
      desc: "Unmatched warehousing across major industrial hubs and our own heavy railway. Our logistics network ensures zero delays with dedicated fleet management.",
      tags: ["Ex-Stock", "Pre-Dispatch", "JIT Delivery"]
    },
    {
      title: "Custom solutions",
      icon: <Lightbulb size={24} className="text-[#DCA54C]" />,
      desc: "Tailor-made grades and specifications to match your exact requirements. We serve diverse applications to specific dimensional tolerances.",
      tags: ["Custom Grades", "Cut-to-Length", "JIT Supply"]
    }
  ];

  return (
    <section className="bg-[#fcf8f6] py-24 w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center w-full max-w-2xl mx-auto mb-16">
          <div className="text-[#DCA54C] font-bold text-[10px] tracking-widest uppercase mb-4">
            Our Values
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-[#0A1628] mb-6">
            The Lauls advantage
          </h2>
          <p className="text-gray-500 max-w-sm mx-auto">
            What sets us apart in the industrial steel distribution landscape.
          </p>
        </div>

        {/* 3 Advantage Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {advantages.map((adv, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-8 lg:p-10 border border-gray-100 shadow-xl shadow-gray-200/50 flex flex-col h-full hover:border-[#DCA54C]/50 transition-colors"
            >
              <div className="w-14 h-14 bg-[#DCA54C]/10 border border-[#DCA54C]/20 rounded-xl flex items-center justify-center mb-8">
                {adv.icon}
              </div>
              
              <h3 className="text-xl font-display font-bold text-[#0A1628] mb-4">
                {adv.title}
              </h3>
              
              <p className="text-gray-500 text-sm leading-relaxed mb-10 flex-grow font-light">
                {adv.desc}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {adv.tags.map(tag => (
                  <span key={tag} className="px-3 py-1.5 border border-gray-200 rounded text-gray-500 text-[10px] font-bold tracking-widest uppercase bg-gray-50">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

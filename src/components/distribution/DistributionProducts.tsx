"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    title: "Ferro Alloys",
    subtitle: "High-strength alloys for steel production",
    desc: "Sourced globally and processed to exact metallurgical standards, our ferro alloys guarantee enhanced strength, de-oxidation, and alloying capabilities for specialized steel manufacturing.",
    image: "/lauls image/image.png",
    chips: [
      { label: "Ferro Chrome", value: "HC, MC Grades" },
      { label: "Ferro Manganese", value: "Lumps & powder" },
    ],
    link: "Explore Ferro Alloys",
    href: "/products/ferro-alloys"
  },
  {
    title: "Steel Rounds",
    subtitle: "Alloy and mild steel rounds",
    desc: "Engineered for heavy-duty automotive and industrial machinery applications, our steel rounds offer superior machinability, grain consistency, and immense tensile strength.",
    image: "/lauls image/image copy.png",
    chips: [
      { label: "Alloy Steel", value: "SAE 4140, 4340" },
      { label: "Mild Steel", value: "IS 2062, ASTM A36" },
    ],
    link: "Explore Steel Rounds",
    href: "/products/steel-rounds"
  },
  {
    title: "Wire Rods",
    subtitle: "High tensile strength wire rods",
    desc: "Manufactured for precision forming processes. Excellent drawability and surface finish guarantee flawless execution in fastener production and heavy spring coiling.",
    image: "/lauls image/image copy 5.png",
    chips: [
      { label: "Carbon / Alloy", value: "SAE 1010, IS 7904" },
      { label: "Size range", value: "5.5 mm — 14 mm" },
    ],
    link: "Explore Wire Rods",
    href: "/products/wire-rods"
  },
  {
    title: "Precision Tubes",
    subtitle: "ERW and CEW tubes for industrial use",
    desc: "State-of-the-art structural and mechanical precision tubes. Our CDW and CEW tubes offer exact geometric tolerances perfect for hydraulic cylinders and automotive chassis.",
    image: "/lauls image/image copy 2.png",
    chips: [
      { label: "ERW Tubes", value: "IS 3601, ASTM A500" },
      { label: "Seamless", value: "ASTM A106, A53" },
    ],
    link: "Explore Precision Tubes",
    href: "/products/precision-tubes"
  }
];

export default function DistributionProducts() {
  return (
    <section className="bg-white py-32 w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center w-full max-w-2xl mx-auto mb-24">
          <div className="text-[#DCA54C] font-bold text-[10px] tracking-widest uppercase mb-4">
            Our Product Range
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-[#0A1628] mb-6 tracking-tight">
            Comprehensive steel solutions
          </h2>
          <p className="text-gray-500 text-lg font-light">
            We supply a diverse portfolio of tailored steel products to meet the intense demands of modern manufacturing and infrastructure.
          </p>
        </div>

        {/* Alternating Row Layout */}
        <div className="flex flex-col gap-24 lg:gap-32">
          {products.map((product, idx) => (
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
                    src={product.image}
                    alt={product.title}
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
                  {product.title}
                </h3>
                
                <h4 className="text-lg md:text-xl text-gray-800 font-medium mb-6">
                  {product.subtitle}
                </h4>

                <p className="text-gray-500 font-light leading-relaxed mb-10 w-full lg:max-w-lg">
                  {product.desc}
                </p>

                {/* Highly visible specs block */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {product.chips.map((chip, i) => (
                    <div key={i} className="flex flex-col bg-gray-50 rounded-xl p-5 border border-gray-100">
                       <span className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-2">{chip.label}</span>
                       <span className="text-[#0A1628] font-bold text-sm">{chip.value}</span>
                    </div>
                  ))}
                </div>

                {/* Call to action */}
                <Link href={product.href} className="flex items-center gap-2 text-[#DCA54C] font-bold border-b-2 border-transparent hover:border-[#DCA54C] pb-1 transition-all w-max group">
                  {product.link} <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

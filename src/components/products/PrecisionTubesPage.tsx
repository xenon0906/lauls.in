"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, ArrowRight, Cylinder } from "lucide-react";

const products = [
  {
    name: "ERW Steel Tubes",
    grade: "IS 1239 / IS 3601 / ASTM A513",
    image: "/images/products/precision_tubes_erw.png",
    use: "Structural, mechanical & automotive tube applications",
    specs: "OD: 15mm – 168mm | WT: 1.6mm – 8mm",
    desc: "Electric Resistance Welded (ERW) Steel Tubes are manufactured under rigorous quality controls and are the industry standard for structural, mechanical, and automotive applications. Lauls supplies ERW tubes conforming to IS 1239, IS 3601, and ASTM A513 standards.",
  },
  {
    name: "Square & Rectangular Hollow Sections",
    grade: "IS 4923",
    image: "/images/products/precision_tubes_erw.png",
    use: "Fabrication, furniture & construction frames",
    specs: "Size: 20×20 – 150×150mm | WT: 1.6–6mm",
    desc: "Square and Rectangular Hollow Sections (SHS/RHS) are the preferred structural shape for modern construction, industrial frames, furniture, and gates. All our hollow sections comply with IS 4923 and are available in a wide range of sizes and wall thicknesses.",
  },
];

export default function PrecisionTubesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[100svh] flex items-center overflow-hidden">
        <Image
          src="/images/products/precision_tubes_erw.png"
          alt="Precision Tubes"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-br from-[#0A1628]/97 via-[#0A1628]/80 to-transparent" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 pt-32 pb-20">
          <Link href="/products" className="inline-flex items-center gap-2 text-[#DCA54C] text-xs font-bold uppercase tracking-widest mb-6 hover:text-white transition-colors">
            <ArrowLeft size={14} /> Back to Products
          </Link>
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-purple-500/20 border border-purple-400/30 rounded-full">
            <Cylinder size={12} className="text-purple-400" />
            <span className="text-purple-300 text-[10px] font-black uppercase tracking-widest">Steel Distribution</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-black text-white leading-tight mb-4">
            Precision <span className="text-purple-400">Tubes</span>
          </h1>
          <p className="text-white/70 text-lg font-light max-w-2xl">ERW steel tubes built for India&apos;s toughest conditions. Manufactured under rigorous standards and supplied to auto, construction, and infrastructure sectors.</p>
        </div>
      </section>

      {/* Products */}
      <section className="bg-linear-to-br from-purple-50 to-white py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col gap-16">
          {products.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col lg:flex-row items-center gap-10 ${idx % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
            >
              <div className="w-full lg:w-2/5 rounded-2xl overflow-hidden aspect-4/3 shadow-xl relative">
                <Image src={p.image} alt={p.name} fill sizes="(max-width: 1024px) 100vw, 40vw" placeholder="blur" blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=" className="object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="w-full lg:w-3/5">
                <div className="text-purple-600 text-[10px] font-black uppercase tracking-widest mb-2">{p.grade}</div>
                <h2 className="text-3xl font-display font-black text-[#0A1628] mb-3">{p.name}</h2>
                <p className="text-gray-600 font-light leading-relaxed mb-6">{p.desc}</p>
                <div className="font-mono text-xs text-gray-500 bg-gray-50 border border-gray-100 rounded-lg px-4 py-3 mb-6">{p.specs}</div>
                <div className="text-sm text-gray-500 mb-8 italic">Used for: {p.use}</div>
                <Link href={`/contact?product=${encodeURIComponent(p.name)}&intent=quote#contact-form`} className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700 transition-all text-sm shadow-lg">
                  Get a Quote Today <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}

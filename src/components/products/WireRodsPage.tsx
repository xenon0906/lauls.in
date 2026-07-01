"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { cloudinary } from "@/utils/cloudinary";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { ArrowLeft, ArrowRight, Layers } from "lucide-react";
import ProductFAQ from "@/components/ProductFAQ";

const products = [
  {
    name: "Alloy Steel Wire Rods",
    grade: "SAE / IS Standards",
    images: [
      cloudinary("images/products/wire_rods_coils.png"),
      cloudinary("images/products/mild_wire_rods.png")
    ],
    use: "Automotive springs, fasteners & high-strength bolts",
    specs: "Dia: 5.5mm – 25mm | Coil Wt: 1–2 MT",
    desc: "Alloy Steel Wire Rods are precision-rolled for demanding applications including suspension springs, engine fasteners, and cold-headed bolts. Available in a wide range of SAE/AISI grades sourced from SAIL, Tata, and JSW.",
  },
  {
    name: "Mild Steel Wire Rods",
    grade: "IS 2062 / SAE 1006–1018",
    images: [
      cloudinary("images/products/mild_wire_rods.png"),
      cloudinary("images/products/wire_rods_coils.png")
    ],
    use: "Nails, fencing, binding wire, barbed wire",
    specs: "Dia: 5.5mm – 14mm | C: <0.15%",
    desc: "Mild Steel Wire Rods are the backbone of the wire industry, used for drawing into nails, binding wire, GI wire, and barbed wire. Available in standard IS 2062 and low-carbon SAE 1006–1018 grades for easy forming.",
  },
  {
    name: "Stainless Steel Wire Rods",
    grade: "SS 304 / 316 / 410 / 430",
    images: [
      cloudinary("images/products/stainless_wire_rods.png"),
      cloudinary("images/products/wire_rods_coils.png")
    ],
    use: "Pharmaceutical, food-grade and marine applications",
    specs: "Dia: 5.5mm – 16mm | Finish: Bright Annealed",
    desc: "Stainless Steel Wire Rods offer superior corrosion resistance for use in pharmaceutical equipment, food processing machinery, marine fittings, and medical devices. Available in 304, 316, 410, and 430 grades with bright annealed finish.",
  },
];

export default function WireRodsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[100svh] flex items-center overflow-hidden">
        <Image
          src={cloudinary("images/products/wire_rods_coils.png")}
          alt="Wire Rods Coils"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-br from-[#0A1628]/97 via-[#0A1628]/80 to-transparent" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 pt-32 pb-20">
          <Link href="/products" className="inline-flex items-center gap-2 text-[#DCA54C] text-xs font-bold uppercase tracking-widest mb-6 hover:text-white transition-colors">
            <ArrowLeft size={14} /> Back to Products
          </Link>
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-blue-500/20 border border-blue-400/30 rounded-full">
            <Layers size={12} className="text-blue-400" />
            <span className="text-blue-300 text-[10px] font-black uppercase tracking-widest">Steel Distribution</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-black text-white leading-tight mb-4">
            Wire <span className="text-[#3b82f6]">Rods</span>
          </h1>
          <p className="text-white/70 text-lg font-light max-w-2xl">Rolled to precision from India&apos;s leading mills. Stocked across all major grades and diameters for immediate dispatch to wire drawers, fastener manufacturers, and fabricators.</p>
        </div>
      </section>

      {/* Products */}
      <section className="bg-linear-to-br from-blue-50 to-white py-20">
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
                <Image
                  src={p.images[0]}
                  alt={p.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="w-full lg:w-3/5">
                <div className="text-[#3b82f6] text-[10px] font-black uppercase tracking-widest mb-2">{p.grade}</div>
                <h2 className="text-3xl font-display font-black text-[#0A1628] mb-3">{p.name}: <span className="text-gray-500 text-xl font-light">What Are Its Applications?</span></h2>
                <p className="text-gray-600 font-light leading-relaxed mb-6">{p.desc}</p>
                <div className="font-mono text-xs text-gray-500 bg-gray-50 border border-gray-100 rounded-lg px-4 py-3 mb-6">{p.specs}</div>
                <div className="text-sm text-gray-500 mb-8 italic">Used for: {p.use}</div>
                <Link href={`/contact?product=${encodeURIComponent(p.name)}&intent=quote#contact-form`} className="inline-flex items-center gap-2 px-6 py-3 bg-[#3b82f6] text-white font-bold rounded-lg hover:bg-blue-700 transition-all text-sm shadow-lg">
                  Get a Quote Today <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <ProductFAQ
        title="Wire Rods — Your Questions Answered"
        subtitle="Everything you need to know about our alloy steel, mild steel, and stainless steel wire rod specifications and applications."
        items={[
          {
            question: "What is the difference between alloy steel and mild steel wire rods?",
            answer: "Alloy Steel Wire Rods contain additional alloying elements like chromium, molybdenum, or nickel to enhance strength, hardness, and wear resistance — ideal for automotive springs, fasteners, and high-strength bolts. Mild Steel Wire Rods (SAE 1006-1018) have lower carbon content (<0.15%) for better ductility and formability, making them perfect for nails, binding wire, fencing, and general fabrication."
          },
          {
            question: "Which wire rod grade is best for automotive spring manufacturing?",
            answer: "For automotive suspension springs and engine valve springs, we recommend SAE 9254 or SAE 5160 alloy steel wire rods. These grades offer the fatigue resistance and tensile strength required for critical automotive applications. Our technical team can help match the exact SAE/AISI grade to your spring design specifications."
          },
          {
            question: "Do you supply stainless steel wire rods for pharmaceutical equipment?",
            answer: "Yes, we supply SS 304, 316, 410, and 430 grade stainless steel wire rods with bright annealed finish. SS 304 and SS 316 are ideal for pharmaceutical and food-grade equipment due to their excellent corrosion resistance. SS 316 offers superior resistance to chlorides and acidic environments compared to SS 304."
          },
          {
            question: "What diameter range and coil weights are available for wire rods?",
            answer: "Our alloy steel wire rods range from 5.5mm to 25mm diameter with coil weights of 1-2 MT. Mild steel wire rods range from 5.5mm to 14mm diameter. Stainless steel wire rods are available from 5.5mm to 16mm diameter. All stock is sourced from SAIL, TATA, and JSW mills with complete mill test certificates."
          },
          {
            question: "Can you supply wire rods for cold heading and fastener applications?",
            answer: "Absolutely. We stock SAE 1018, SAE 1022, and SAE 1035 grades specifically suited for cold heading operations. These grades offer excellent formability and consistent mechanical properties required for producing bolts, screws, nuts, and other cold-headed fasteners to IS and international standards."
          }
        ]}
        accentColor="#3b82f6"
      />
      <Footer />
    </main>
  );
}

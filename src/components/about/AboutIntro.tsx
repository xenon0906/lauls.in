"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutIntro() {
  return (
    <section className="relative w-full bg-white pb-24 overflow-hidden">
      {/* Hero-style Background Image Overlays with Attractive Cut Line */}
      <div className="absolute top-0 left-0 w-full h-[520px] lg:h-[620px] z-0 overflow-hidden border-b-2 border-highlight/60 shadow-[0_10px_40px_rgba(0,0,0,0.1)]">
        <Image 
          src="/lauls image/Screenshot 2026-05-12 at 8.02.05 PM.png" 
          alt="Metal Background" 
          fill 
          className="object-cover"
        />
        {/* Dark Navy Gradient from Left to Right */}
        <div className="absolute inset-0 bg-linear-to-r from-[#0A1628]/95 lg:from-[#0A1628]/90 via-[#0A1628]/40 to-transparent" />
      </div>

      {/* Subtle architectural grid pattern on the white background */}
      <div 
        className="absolute inset-0 top-[520px] lg:top-[620px] opacity-[0.03] z-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 pt-24 lg:pt-32">
        
        {/* Breadcrumb & Title */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="mb-16 lg:mb-24 mt-2"
        >
          <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-display font-semibold tracking-tight mb-4">
            About <span className="text-highlight">Us</span>
          </h1>
        </motion.div>

        {/* Asymmetric Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch relative">
          
          {/* Left Column: Headings & Text */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full">
            
            {/* Top Heading Area (On Dark Background) - Comes from Left */}
            <motion.div 
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="mb-12 lg:mb-24 mt-2"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="h-[2px] w-12 bg-highlight" />
                <span className="text-highlight font-display font-medium tracking-[0.2em] uppercase text-xs md:text-sm">WHO WE ARE</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-[3.25rem] font-display font-semibold text-white leading-[1.15] tracking-tight max-w-2xl">
                Our Brand Name Evokes Two Key Characteristics – <span className="text-highlight font-bold">Trust</span> And <span className="text-highlight font-bold">Industrial Excellence</span>
              </h2>
            </motion.div>

            {/* Bottom Text Area (On White Background) - Comes from Bottom */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.9 }}
              className="pt-8 lg:pt-16 pr-0 lg:pr-12 relative z-10"
            >
              <div className="relative pl-6 md:pl-8 border-l-4 border-highlight">
                <p className="text-[#0A1628] text-lg md:text-xl mb-6 leading-relaxed">
                  <strong className="font-display font-black text-2xl md:text-3xl tracking-tight mr-2">Founded in the year 1933</strong> 
                  in the industrial hub of India, Lauls Limited has grown from a regional enterprise into one of the most technologically-advanced logistics and manufacturing conglomerates. For over 90 years, Lauls has been the first choice for stockists, processors, and industrial end-users. Right since its inception, Lauls has steered its organizational capability in only one direction – to deliver the finest quality services.
                </p>
                <p className="text-[#0A1628]/70 text-base md:text-lg leading-relaxed font-medium">
                  As a top industrial partner in India, Lauls offers high-quality infrastructure solutions to major industries including <strong className="text-[#0A1628] font-bold">Automotive, Renewable Energy, Construction, Railways, Manufacturing, and Defense</strong>. When it comes to critical operations, Lauls provides its customers with a plethora of choices for diverse applications.
                </p>
              </div>
            </motion.div>

          </div>

          {/* Middle Column: Tall Image & Red Mission Box */}
          <div className="lg:col-span-3 flex flex-col gap-6 h-full">
            
            {/* Tall Image Flex-Grows - Comes from Bottom */}
            <motion.div 
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
              className="w-full relative shadow-2xl flex-grow min-h-[300px] rounded-xl overflow-hidden group"
            >
              <Image 
                src="/lauls image/image.png" 
                alt="Molten Alloy Casting" 
                fill 
                className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#0A1628]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>

            {/* Mission Box - Deep Navy Glassmorphism */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 1.3 }}
              className="bg-[#1B2F4D]/90 backdrop-blur-md border border-white/10 p-6 lg:p-8 text-white shadow-xl shrink-0 rounded-xl group hover:-translate-y-2 transition-transform duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-highlight/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <p className="font-medium text-sm lg:text-base leading-relaxed relative z-10">
                The company has achieved high standards of quality and customer delight by investing robustly in both people as well as processes. Combining vast experience with proven expertise, Lauls&apos;s vision has always been to reign supreme on the parameter of quality and choice.
              </p>
            </motion.div>

          </div>

          {/* Right Column: Stats Box & Bottom Image */}
          <div className="lg:col-span-3 flex flex-col gap-6 h-full">
            
            {/* Stats Box - Deep Navy Glassmorphism */}
            <motion.div 
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
              className="bg-[#1B2F4D]/90 backdrop-blur-md border border-white/10 p-8 lg:p-10 text-white relative overflow-hidden shadow-2xl shrink-0 aspect-square flex flex-col justify-center rounded-xl group hover:-translate-y-2 transition-transform duration-500"
            >
              {/* Dot Pattern Background */}
              <div 
                className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                style={{
                  backgroundImage: 'radial-gradient(circle at center, white 1px, transparent 1px)',
                  backgroundSize: '16px 16px'
                }}
              />
              <div className="relative z-10 flex flex-col gap-8">
                <div>
                  <div className="text-5xl lg:text-6xl font-display font-black mb-1 tracking-tighter drop-shadow-md">90+</div>
                  <div className="text-xs font-medium tracking-wide">Years Of Experience</div>
                </div>
                <div>
                  <div className="text-5xl lg:text-6xl font-display font-black mb-1 tracking-tighter drop-shadow-md">500+</div>
                  <div className="text-xs font-medium tracking-wide">Global Clients</div>
                </div>
              </div>
            </motion.div>

            {/* Bottom Image Flex-Grows - Comes from Bottom */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 1.1 }}
              className="w-full relative shadow-xl flex-grow min-h-[250px] rounded-xl overflow-hidden group"
            >
              <Image 
                src="/lauls image/image copy 2.png" 
                alt="Precision Manufacturing" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 1024px) 100vw, 25vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#0A1628]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}

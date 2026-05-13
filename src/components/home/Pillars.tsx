"use client";

import Image from "next/image";
import SectionWrapper from "../SectionWrapper";

export default function Pillars() {
  return (
    <SectionWrapper id="services" className="bg-[#FFFDF9] py-24 lg:py-32 w-full relative overflow-hidden font-sans">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0" />

      {/* Flowing Organic Background Blobs (The "Sandbank") */}
      <div className="absolute top-[20%] right-[-5%] w-[85%] h-[65%] bg-[#F2ECD9] rounded-[8rem] -rotate-2 z-0 opacity-80" />
      <div className="absolute bottom-[-5%] left-[-10%] w-[70%] h-[50%] bg-[#F2ECD9] rounded-[8rem] rotate-3 z-0 opacity-80" />

      {/* Widened container to use left/right margin space */}
      <div className="max-w-[1600px] w-full mx-auto px-6 lg:px-10 relative z-10">
        
        {/* The Exact 1:1 CSS Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative">
          
          {/* ROW 1 */}
          {/* 1. Header */}
          <div className="col-span-1 lg:col-span-2 pt-4 lg:pt-10 lg:pr-12 relative z-20 mb-8 lg:mb-0">
            <h2 className="text-5xl md:text-6xl lg:text-[4.5rem] font-display font-black text-[#0A1628] mb-6 tracking-tight leading-[1.05]">
              Our Core <br className="hidden lg:block" />
              Services
            </h2>
            <p className="text-gray-700 text-lg lg:text-xl font-medium leading-relaxed max-w-lg">
              From precision manufacturing to global logistics, we deliver end-to-end industrial solutions tailored to your enterprise needs.
            </p>
          </div>

          {/* 2. Map Card (Top Right, spans 2 columns) */}
          <div className="col-span-1 lg:col-span-2 flex flex-col md:flex-row bg-white rounded-[3rem] shadow-[0_20px_50px_-10px_rgba(0,0,0,0.06)] overflow-hidden relative z-20 hover:-translate-y-2 transition-transform duration-500 border border-white/60 lg:top-[190px]">
            <div className="w-full md:w-5/12 p-8 lg:p-10 flex flex-col justify-center bg-white z-10">
              <h3 className="text-2xl lg:text-3xl font-bold text-[#0A1628] mb-2">Logistics</h3>
              <p className="text-gray-600 text-base">End-to-end logistics solutions, ensuring reliable supply chains and operational efficiency.</p>
            </div>
            <div className="w-full md:w-7/12 relative h-[240px] md:h-auto md:rounded-l-[4rem] overflow-hidden shadow-[-10px_0_20px_rgba(0,0,0,0.04)] z-20">
              <Image src="/lauls image/Screenshot 2026-05-12 at 8.21.18 PM.png" fill className="object-cover" alt="Logistics" />
            </div>
          </div>

          {/* ROW 2 & 3 */}
          {/* 3. Machine Card (Tall, spans 2 rows) */}
          <div className="col-span-1 lg:row-span-2 bg-white rounded-[3rem] shadow-[0_20px_50px_-10px_rgba(0,0,0,0.06)] overflow-hidden flex flex-col relative z-20 hover:-translate-y-2 transition-transform duration-500 border border-white/60 h-full min-h-[480px]">
            <div className="h-[280px] lg:h-[360px] relative w-full border-b border-gray-50">
              <Image src="/lauls image/image copy.png" fill className="object-cover" alt="Steel Rounds" />
            </div>
            <div className="p-8 lg:p-10 flex-1 flex flex-col justify-center bg-white relative z-10">
              <h3 className="text-2xl font-bold text-[#0A1628] mb-2">Steel Rounds</h3>
              <p className="text-gray-600 text-base">Extensive stockyards distributing heavy alloy steel, precision tubes, and rounds.</p>
            </div>
          </div>

          {/* 4. The Fused Tab (Row 2, Col 2) */}
          <div className="col-span-1 hidden lg:flex flex-col justify-center bg-gradient-to-r from-white to-[#F8F9FA] rounded-r-[3rem] shadow-[15px_20px_40px_-10px_rgba(0,0,0,0.05)] p-8 pl-20 z-10 h-[150px] mt-[5rem] relative -translate-x-[40px] xl:-translate-x-[60px] w-[calc(100%+40px)] xl:w-[calc(100%+60px)] border border-white/60">
            <div className="pl-5 border-l-[3px] border-slate-200">
              <h3 className="text-xl font-bold text-[#0A1628] mb-1.5 tracking-tight">Precision Tubes</h3>
              <p className="text-gray-500 text-sm font-medium leading-relaxed">Flawless concentric engineering for critical high-pressure systems.</p>
            </div>
          </div>

          {/* Empty Space for Grid Alignment (Row 2, Col 3 & 4) */}
          <div className="col-span-2 hidden lg:block"></div>

          {/* ROW 3 (The 3 Small Bottom Cards) */}
          {/* 5. Highway Trucks */}
          <div className="col-span-1 bg-white rounded-[3rem] shadow-[0_20px_50px_-10px_rgba(0,0,0,0.06)] overflow-hidden flex flex-col relative z-20 hover:-translate-y-2 transition-transform duration-500 border border-white/60 h-full min-h-[360px]">
            <div className="h-[200px] lg:h-[220px] relative w-full border-b border-gray-50">
              <Image src="/lauls image/image.png" fill className="object-cover" alt="Ferro Alloys" />
            </div>
            <div className="p-8 flex-1 flex flex-col justify-center bg-white">
              <h3 className="text-xl font-bold text-[#0A1628] mb-2">Ferro Alloys</h3>
              <p className="text-gray-600 text-sm">Trading distinct, assayed alloy grades with full traceability.</p>
            </div>
          </div>

          {/* 6. EV Trucks */}
          <div className="col-span-1 bg-white rounded-[3rem] shadow-[0_20px_50px_-10px_rgba(0,0,0,0.06)] overflow-hidden flex flex-col relative z-20 hover:-translate-y-2 transition-transform duration-500 border border-white/60 h-full min-h-[360px]">
            <div className="h-[200px] lg:h-[220px] relative w-full border-b border-gray-50">
              <Image src="/lauls image/image copy 4.png" fill className="object-cover" alt="Electric Truck" />
            </div>
            <div className="p-8 flex-1 flex flex-col justify-center bg-white">
              <h3 className="text-xl font-bold text-[#0A1628] mb-2">Electric Truck</h3>
              <p className="text-gray-600 text-sm">Fleet-wide integration of distinct, sustainable transport solutions.</p>
            </div>
          </div>

          {/* 7. Meeting */}
          <div className="col-span-1 bg-white rounded-[3rem] shadow-[0_20px_50px_-10px_rgba(0,0,0,0.06)] overflow-hidden flex flex-col relative z-20 hover:-translate-y-2 transition-transform duration-500 border border-white/60 h-full min-h-[360px]">
            <div className="h-[200px] lg:h-[220px] relative w-full border-b border-gray-50">
              <Image src="/lauls image/image copy 5.png" fill className="object-cover" alt="Wire Rods" />
            </div>
            <div className="p-8 flex-1 flex flex-col justify-center bg-white">
              <h3 className="text-xl font-bold text-[#0A1628] mb-2">Wire Rods</h3>
              <p className="text-gray-600 text-sm">High-grade mild and stainless-steel wire for precise drawing and fabrication.</p>
            </div>
          </div>

        </div>

        {/* Footer Credit (Matching the bottom right of the image) */}
        <div className="mt-16 flex justify-end items-center gap-3 opacity-60">
          <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-blue-500 to-blue-300" />
          <p className="text-sm font-medium text-[#0A1628]">Designed by <span className="font-bold">Lauls Creative</span></p>
        </div>

      </div>
    </SectionWrapper>
  );
}

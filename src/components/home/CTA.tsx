"use client";

import Link from "next/link";
import { Phone, Clock, ShieldCheck, Globe, FileText, Mail } from "lucide-react";
import AutoImageRotator from "../AutoImageRotator";

export default function CTA() {
  return (
    <div id="cta" className="bg-[#0A1628] w-full py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Text Block */}
        <div className="lg:col-span-7">
          <div className="mb-6 inline-flex">
            <span className="px-4 py-1.5 bg-[#1B2F4D] rounded-full text-accent font-display font-medium uppercase tracking-[0.1em] text-[10px] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              LET'S BUILD TOGETHER
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
            Ready to Partner with<span className="text-[#3b82f6]">Lauls Ltd</span>?
          </h2>
          
          <p className="text-white/60 text-sm md:text-base max-w-xl mb-10 leading-relaxed font-light">
            Whether you need precision railway components, warehousing solutions, or ferro alloy supplies — our team is ready to deliver excellence tailored to your industrial requirements.
          </p>

          {/* 3 badges horizontal row */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <div className="flex items-center gap-3 px-5 py-4 bg-[#1B2F4D] rounded-xl flex-1">
              <Clock className="text-accent shrink-0" size={18} />
              <div>
                <div className="text-white font-bold text-xs tracking-wide">24Hr Response</div>
                <div className="text-white/40 text-[10px] mt-0.5">Quick turnaround</div>
              </div>
            </div>
            <div className="flex items-center gap-3 px-5 py-4 bg-[#1B2F4D] rounded-xl flex-1">
              <ShieldCheck className="text-accent shrink-0" size={18} />
              <div>
                <div className="text-white font-bold text-xs tracking-wide">RDSO Certified</div>
                <div className="text-white/40 text-[10px] mt-0.5">Quality assured</div>
              </div>
            </div>
            <div className="flex items-center gap-3 px-5 py-4 bg-[#1B2F4D] rounded-xl flex-1">
              <Globe className="text-accent shrink-0" size={18} />
              <div>
                <div className="text-white font-bold text-xs tracking-wide">12 Countries</div>
                <div className="text-white/40 text-[10px] mt-0.5">Global reach</div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link 
              href="/contact#contact-form"
              className="px-6 py-3 bg-[#3b82f6] text-white font-bold rounded-lg flex items-center gap-2 hover:bg-blue-600 transition-all text-sm shadow-lg shadow-blue-500/20"
            >
              <FileText size={16} />
              Request a Quote
            </Link>
            <Link 
              href="/contact#contact-form"
              className="px-6 py-3 border border-white/20 bg-[#1B2F4D] text-white font-bold rounded-lg flex items-center gap-2 hover:bg-[#253A5A] transition-all text-sm"
            >
              <Phone size={16} />
              Contact Sales
            </Link>
          </div>
        </div>

        {/* Right Image Block */}
        <div className="lg:col-span-5 flex justify-end">
          <div className="relative w-full max-w-[450px] aspect-square lg:h-[450px] rounded-2xl overflow-hidden group">
             <AutoImageRotator
               images={[
                 "/images/hero-banner.jpg",
                 "/images/banner-main.jpg",
                 "/images/trading.jpg",
                 "/images/stockyard.jpg"
               ]}
               interval={4500}
             />
             
             {/* Gradient for stats visibility */}
             <div className="absolute inset-0 bg-linear-to-t from-[#0A1628]/95 via-[#0A1628]/40 to-transparent pointer-events-none" />
             
             {/* Bottom overlaid content */}
             <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col gap-6">
               <div className="flex justify-between items-end">
                 <div>
                   <div className="text-2xl font-display font-bold text-white">30+</div>
                   <div className="text-white/60 text-[10px] mt-1 tracking-wide">Years</div>
                 </div>
                 <div>
                   <div className="text-2xl font-display font-bold text-white">500+</div>
                   <div className="text-white/60 text-[10px] mt-1 tracking-wide">Projects</div>
                 </div>
                 <div>
                   <div className="text-2xl font-display font-bold text-white">150+</div>
                   <div className="text-white/60 text-[10px] mt-1 tracking-wide">Clients</div>
                 </div>
               </div>
               
               <div className="inline-flex items-center gap-2 bg-[#253A5A]/80 backdrop-blur-md px-4 py-2 rounded-lg border border-white/5 w-fit">
                 <Mail size={14} className="text-[#3b82f6]" />
                 <span className="text-white text-xs font-medium tracking-wider">info@lauls.in</span>
               </div>
             </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

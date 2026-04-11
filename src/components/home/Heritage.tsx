"use client";

import Link from "next/link";
import SectionWrapper from "../SectionWrapper";
import { BadgeCheck, ShieldCheck, Globe } from "lucide-react";

export default function Heritage() {
  return (
    <SectionWrapper id="heritage" className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <div className="order-2 lg:order-1">
          <div className="flex items-center gap-2 mb-6">
            <div className="px-3 py-1 bg-accent/10 border border-accent/20 rounded-full">
              <span className="text-accent font-display font-semibold text-xs tracking-wider uppercase">
                Our Legacy
              </span>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary leading-tight mb-8">
            A Heritage of <br />
            <span className="text-accent">Industrial Excellence</span>
          </h2>
          
          <p className="text-primary/60 text-lg leading-relaxed mb-10 max-w-xl">
            Founded in 1933, Lauls Ltd. has grown from a regional enterprise into one of India's most respected names in railway manufacturing, warehousing, and ferrous alloy trading. Our commitment to quality and innovation drives everything we do.
          </p>
          
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                <BadgeCheck size={24} />
              </div>
              <div>
                <h4 className="font-display font-bold text-primary mb-1">Precision Manufacturing</h4>
                <p className="text-primary/50 text-sm">RDSO-approved components with zero-defect methodology</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h4 className="font-display font-bold text-primary mb-1">Quality Assurance</h4>
                <p className="text-primary/50 text-sm">ISO 9001:2015 & ISO 14001 certified processes</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                <Globe size={24} />
              </div>
              <div>
                <h4 className="font-display font-bold text-primary mb-1">Global Reach</h4>
                <p className="text-primary/50 text-sm">Serving clients across 12 countries with reliable supply chains</p>
              </div>
            </div>
          </div>
          
          <Link href="/about" className="mt-12 inline-block px-8 py-4 bg-accent text-white font-bold rounded-lg hover:bg-accent/90 transition-all shadow-lg shadow-accent/25">
            Learn More About Us
          </Link>
        </div>

        {/* Image Grid */}
        <div className="relative order-1 lg:order-2">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-3xl overflow-hidden aspect-[4/5] relative group shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop" 
                  alt="Logistics"
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
                <div className="absolute bottom-5 left-6 lg:bottom-6 lg:left-8">
                  <span className="text-white font-display font-bold text-xl lg:text-2xl drop-shadow-md">Logistics</span>
                </div>
              </div>
              {/* Precision Tubes moved here, under Logistics */}
              <div className="rounded-3xl overflow-hidden aspect-square relative group shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1590487988256-9ed24133863e?q=80&w=2070&auto=format&fit=crop" 
                  alt="Precision Tubes"
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
                <div className="absolute bottom-5 left-6 lg:bottom-6 lg:left-8">
                  <span className="text-white font-display font-bold text-xl lg:text-2xl drop-shadow-md">Precision Tubes</span>
                </div>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="rounded-3xl overflow-hidden aspect-square relative group shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop" 
                  alt="Ferro Alloys"
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
                <div className="absolute bottom-5 left-6 lg:bottom-6 lg:left-8">
                  <span className="text-white font-display font-bold text-xl lg:text-2xl drop-shadow-md">Ferro Alloys</span>
                </div>
              </div>
              <div className="rounded-3xl overflow-hidden aspect-[4/5] relative group shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2069&auto=format&fit=crop" 
                  alt="Steel Distribution"
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
                <div className="absolute bottom-5 left-6 lg:bottom-6 lg:left-8">
                  <span className="text-white font-display font-bold text-xl lg:text-2xl drop-shadow-md">Steel Distribution</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute -z-10 -top-10 -left-10 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
        </div>
      </div>
    </SectionWrapper>
  );
}

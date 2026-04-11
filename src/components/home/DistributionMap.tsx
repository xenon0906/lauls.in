"use client";

import SectionWrapper from "../SectionWrapper";
import { MapPin, Clock, ShieldCheck, Zap } from "lucide-react";

export default function DistributionMap() {
  return (
    <SectionWrapper id="distribution" className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Map Visualization (Stylized) */}
        <div className="relative aspect-square lg:aspect-auto h-[400px] md:h-[600px] bg-primary/5 rounded-[40px] p-8 md:p-12 flex items-center justify-center overflow-hidden">
          {/* Stylized Dots/Grid Background */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#0A1628 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
          
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Focal Point (Faridabad/Delhi NCR) */}
            <div className="absolute top-[40%] left-[45%] group">
              <div className="absolute -inset-4 bg-accent/20 rounded-full animate-ping" />
              <div className="relative bg-accent p-2 rounded-full shadow-xl shadow-accent/40 cursor-pointer">
                <MapPin className="text-white" size={24} />
              </div>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 glass px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-30">
                <span className="text-xs font-bold text-white">Central Hub: Faridabad</span>
              </div>
            </div>

            {/* Other Hub Pins */}
            <div className="absolute top-[30%] left-[40%] group opacity-60 hover:opacity-100 transition-opacity">
              <MapPin className="text-primary" size={20} />
              <span className="absolute left-6 top-0 text-[10px] font-bold text-primary/50 uppercase tracking-widest">Chandigarh</span>
            </div>
            <div className="absolute top-[35%] left-[50%] group opacity-60 hover:opacity-100 transition-opacity">
              <MapPin className="text-primary" size={20} />
              <span className="absolute left-6 top-0 text-[10px] font-bold text-primary/50 uppercase tracking-widest">Delhi NCR</span>
            </div>
            <div className="absolute bottom-[40%] right-[30%] group opacity-60 hover:opacity-100 transition-opacity">
              <MapPin className="text-primary" size={20} />
              <span className="absolute left-6 top-0 text-[10px] font-bold text-primary/50 uppercase tracking-widest">Kolkata</span>
            </div>

            {/* Labels & Global Text */}
            <div className="absolute bottom-8 left-8">
              <h4 className="font-display font-black text-6xl md:text-8xl text-primary/5 leading-none mb-2">INDIA</h4>
              <p className="text-primary/20 font-bold tracking-[0.4em] uppercase text-xs ml-2">Strategic Network</p>
            </div>
          </div>
          
          <div className="absolute top-8 right-8 bg-white p-4 rounded-2xl shadow-sm border border-primary/5">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-[10px] font-bold text-primary/40 uppercase">Operation Hubs</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary/20" />
                <span className="text-[10px] font-bold text-primary/40 uppercase">Distribution Points</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Side */}
        <div>
          <span className="text-accent font-display font-medium uppercase tracking-[0.3em] text-[10px] md:text-xs">Location Strategy</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mt-4 mb-8">
            Our Strategic <br />
            <span className="text-accent">Distribution Network</span>
          </h2>
          
          <p className="text-primary/60 text-lg leading-relaxed mb-12">
            Optimally positioned across North and East India, our hubs ensure seamless material movement and just-in-time delivery for the steel and railway industries.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="flex gap-4 group">
              <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-white transition-all">
                <Clock size={24} />
              </div>
              <div>
                <h4 className="font-display font-bold text-primary">24/7 Operations</h4>
                <p className="text-primary/50 text-sm">Round-the-clock dispatch & handling</p>
              </div>
            </div>
            <div className="flex gap-4 group">
              <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-white transition-all">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h4 className="font-display font-bold text-primary">WAREX Gold</h4>
                <p className="text-primary/50 text-sm">CII-Certified inventory management</p>
              </div>
            </div>
            <div className="flex gap-4 group">
              <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-white transition-all">
                <Zap size={24} />
              </div>
              <div>
                <h4 className="font-display font-bold text-primary">500K+ MT</h4>
                <p className="text-primary/50 text-sm">Annual transport capacity</p>
              </div>
            </div>
            <div className="flex gap-4 group">
              <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-white transition-all">
                <Zap size={24} />
              </div>
              <div>
                <h4 className="font-display font-bold text-primary">99% On-Time</h4>
                <p className="text-primary/50 text-sm">Unmatched delivery reliability</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 p-1 bg-primary/5 rounded-2xl">
             <div className="bg-white p-6 rounded-xl border border-primary/5 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-primary/30 uppercase tracking-widest block mb-1">Stockyard Management</span>
                    <span className="text-primary font-display font-bold text-xl">Exclusive TATA Steel stockyards</span>
                  </div>
                  <div className="bg-primary/5 px-4 py-2 rounded-lg font-bold text-primary text-xs whitespace-nowrap">
                    PRITHLA • FARIDABAD
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

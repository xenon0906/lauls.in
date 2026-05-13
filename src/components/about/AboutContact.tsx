"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import Image from "next/image";

export default function AboutContact() {
  const [selectedInterest, setSelectedInterest] = useState<string | null>(null);

  return (
    <section id="contact-form" className="bg-white py-24 w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row shadow-2xl rounded-2xl overflow-hidden bg-white border border-gray-100">
          
          {/* Left Visual Area */}
          <div className="lg:w-1/2 relative min-h-[400px] lg:min-h-full">
            <Image
              src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80"
              alt="Corporate Boardroom"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-r from-[#0A1628]/90 via-[#0A1628]/60 to-transparent" />
            <div className="absolute inset-0 p-12 flex flex-col justify-end lg:justify-center">
              <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full w-fit">
                <div className="w-1.5 h-1.5 rounded-full bg-[#DCA54C]" />
                <span className="text-white font-display font-medium uppercase tracking-widest text-[10px]">Get in Touch</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
                Let&apos;s Build India&apos;s <br /> <span className="text-[#DCA54C]">Future Together.</span>
              </h2>
              <p className="text-white/70 max-w-md leading-relaxed font-light">
                Whether you need expansive logistics solutions, zero-emission electric trucks, or reliable steel and alloy distribution — we are ready to partner.
              </p>
            </div>
          </div>

          {/* Right Form Area */}
          <div className="lg:w-1/2 p-10 md:p-16 bg-white">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="space-y-2">
                   <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Full Name</label>
                   <input type="text" className="w-full pb-2 border-b border-gray-200 focus:border-[#DCA54C] outline-none transition-colors text-[#0A1628] bg-transparent" placeholder="John Doe" />
                 </div>
                 <div className="space-y-2">
                   <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Email Address</label>
                   <input type="email" className="w-full pb-2 border-b border-gray-200 focus:border-[#DCA54C] outline-none transition-colors text-[#0A1628] bg-transparent" placeholder="john@company.com" />
                 </div>
              </div>

              <div className="space-y-2 pt-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Company</label>
                <input type="text" className="w-full pb-2 border-b border-gray-200 focus:border-[#DCA54C] outline-none transition-colors text-[#0A1628] bg-transparent" placeholder="Your Organizations Name" />
              </div>

              <div className="space-y-4 pt-4">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block">Interested In</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {['Logistics', 'Electric Trucks', 'Fe Alloy Distribution', 'Alloy Steel Distribution', 'Precision Tubes', 'Wire Rods'].map((item) => (
                    <label 
                      key={item} 
                      onClick={() => setSelectedInterest(item)}
                      className={`flex items-center gap-3 p-4 border rounded-xl cursor-pointer transition-colors ${selectedInterest === item ? 'border-[#DCA54C] bg-[#DCA54C]/5 shadow-sm' : 'border-gray-100 bg-gray-50/50 hover:border-[#DCA54C]/50'}`}
                    >
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${selectedInterest === item ? 'border-[#DCA54C]' : 'border-gray-300'}`}>
                         {selectedInterest === item && <div className="w-2 h-2 rounded-full bg-[#DCA54C]" />}
                      </div>
                      <span className={`text-sm font-medium transition-colors ${selectedInterest === item ? 'text-[#0A1628]' : 'text-gray-600'}`}>{item}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-2 pt-4">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Message</label>
                 <textarea rows={3} className="w-full pb-2 border-b border-gray-200 focus:border-[#DCA54C] outline-none transition-colors text-[#0A1628] bg-transparent resize-none" placeholder="Tell us about your requirements..."></textarea>
              </div>

              <div className="pt-6">
                <button type="submit" className="w-full py-4 bg-[#DCA54C] text-[#0A1628] font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-[#c5923b] transition-all shadow-xl shadow-[#DCA54C]/20">
                  <Send size={18} />
                  Send Inquiry
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

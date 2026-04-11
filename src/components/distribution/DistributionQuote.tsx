"use client";

import { CheckCircle2, ChevronDown } from "lucide-react";

export default function DistributionQuote() {
  const benefits = [
    "Competitive mill-direct pricing",
    "Bulk order discounts available",
    "Flexible payment terms for regular buyers",
    "Dedicated account manager assigned",
    "Complete documentation & test certificates"
  ];

  return (
    <section className="bg-white py-24 w-full border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center w-full max-w-2xl mx-auto mb-16">
          <div className="text-[#DCA54C] font-bold text-[10px] tracking-widest uppercase mb-4">
            Get in touch
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-[#0A1628] mb-6">
            Request a quote
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            Ensure your major requirements are met from a right partner. Within 24 hours with outmatched pricing and availability.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 rounded-2xl p-4 lg:p-8">
          
          {/* Left Dark Box - Why Request With Us */}
          <div className="lg:w-1/3 bg-[#0A1628] rounded-2xl p-8 lg:p-10 shadow-2xl flex flex-col justify-center border border-white/5">
            <div className="text-[#DCA54C] font-bold text-[10px] tracking-widest uppercase mb-4">
              Why Request With Us
            </div>
            <h3 className="text-2xl font-display font-bold text-white mb-4">
              Competitive mill-direct pricing
            </h3>
            <p className="text-white/60 text-sm font-light leading-relaxed mb-10">
              We source directly from primary mills and pass the savings on to you. No middlemen, no hidden charges.
            </p>
            
            <ul className="space-y-4">
              {benefits.map((text, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <CheckCircle2 size={18} className="text-[#DCA54C] shrink-0 mt-0.5" />
                  <span className="text-white/80 text-sm font-light leading-snug">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Form Area */}
          <div className="lg:w-2/3 lg:pl-4 py-4">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="space-y-2 relative">
                   <label className="text-xs font-bold text-gray-800 tracking-wide font-display">Full name</label>
                   <input type="text" className="w-full p-3 border border-gray-200 rounded-lg focus:border-[#DCA54C] outline-none transition-colors text-sm bg-gray-50/50" placeholder="Your name" />
                 </div>
                 <div className="space-y-2 relative">
                   <label className="text-xs font-bold text-gray-800 tracking-wide font-display">Company</label>
                   <input type="text" className="w-full p-3 border border-gray-200 rounded-lg focus:border-[#DCA54C] outline-none transition-colors text-sm bg-gray-50/50" placeholder="Company name" />
                 </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="space-y-2 relative">
                   <label className="text-xs font-bold text-gray-800 tracking-wide font-display">Email</label>
                   <input type="email" className="w-full p-3 border border-gray-200 rounded-lg focus:border-[#DCA54C] outline-none transition-colors text-sm bg-gray-50/50" placeholder="name@company.com" />
                 </div>
                 <div className="space-y-2 relative">
                   <label className="text-xs font-bold text-gray-800 tracking-wide font-display">Phone</label>
                   <input type="tel" className="w-full p-3 border border-gray-200 rounded-lg focus:border-[#DCA54C] outline-none transition-colors text-sm bg-gray-50/50" placeholder="+91 00000 00000" />
                 </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2 relative">
                  <label className="text-xs font-bold text-gray-800 tracking-wide font-display">Product category</label>
                  <div className="relative">
                    <select className="w-full p-3 border border-gray-200 rounded-lg focus:border-[#DCA54C] outline-none transition-colors text-sm bg-gray-50/50 appearance-none text-gray-500">
                      <option value="">Select a product category</option>
                      <option value="ferro">Ferro Alloys</option>
                      <option value="rounds">Steel Rounds</option>
                      <option value="rods">Wire Rods</option>
                      <option value="tubes">Precision Tubes</option>
                    </select>
                    <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                  </div>
                </div>
                <div className="space-y-2 relative">
                  <label className="text-xs font-bold text-gray-800 tracking-wide font-display">Quantity required</label>
                  <input type="text" className="w-full p-3 border border-gray-200 rounded-lg focus:border-[#DCA54C] outline-none transition-colors text-sm bg-gray-50/50" placeholder="e.g. 50 MT" />
                </div>
              </div>

              <div className="space-y-2 relative pt-2">
                <label className="text-xs font-bold text-gray-800 tracking-wide font-display">Additional requirements</label>
                 <textarea rows={4} className="w-full p-4 border border-gray-200 rounded-lg focus:border-[#DCA54C] outline-none transition-colors text-sm bg-gray-50/50 resize-none" placeholder="Specify grade, size, finish, or any special requirements..."></textarea>
              </div>

              <div className="pt-4">
                <button type="submit" className="w-full py-4 bg-white border border-[#E5E7EB] hover:border-[#DCA54C] text-[#0A1628] font-bold rounded-lg transition-all text-sm shadow-sm hover:shadow-md">
                  Submit enquiry →
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

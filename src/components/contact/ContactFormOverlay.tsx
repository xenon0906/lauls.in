"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactFormOverlay() {
  const [selectedInterest, setSelectedInterest] = useState<string | null>(null);

  return (
    <section className="relative w-full bg-[#fcf8f6] pb-24 border-b border-gray-100">
       <div className="max-w-7xl mx-auto px-6">
         <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 relative">
             
             {/* Left visual area (Sits below hero natively, slides up) 
                 We give it a top margin on desktop to push it down relative to the form's negative margin trick,
                 OR we just use a negative top margin on the parent container, and push this child down.
                 Let's pull the whole section up, and push the left side down. 
             */}
             <motion.div 
               initial={{ y: 80, opacity: 0 }}
               whileInView={{ y: 0, opacity: 1 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.8, ease: "easeOut" }}
               className="lg:w-1/2 relative rounded-3xl overflow-hidden shadow-2xl lg:mt-32 mt-12"
             >
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop" 
                  alt="Corporate Boardroom"
                  className="w-full h-full object-cover min-h-[500px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#0A1628]/95 via-[#0A1628]/60 to-transparent" />
                <div className="absolute inset-0 p-10 md:p-12 flex flex-col justify-end lg:justify-center">
                  <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full w-fit">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#DCA54C]" />
                    <span className="text-white font-display font-medium uppercase tracking-widest text-[10px]">Get in Touch</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight drop-shadow-md">
                    Let's Build India's <br /> <span className="text-[#DCA54C]">Future Together.</span>
                  </h2>
                  <p className="text-white/70 max-w-md leading-relaxed font-light drop-shadow">
                    Whether you need expansive logistics solutions, zero-emission electric trucks, or reliable steel and alloy distribution — we are ready to partner.
                  </p>
                </div>
             </motion.div>

             {/* Right Form Area (Overlaps Hero by utilizing negative margin) */}
             <motion.div 
               initial={{ y: 80, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
               className="lg:w-1/2 bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] p-10 lg:-mt-[25vh] z-20 relative border border-gray-100"
             >
               <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="space-y-1.5">
                     <label className="text-[10px] font-black text-gray-400 text-opacity-80 uppercase tracking-widest">Full Name</label>
                     <input type="text" className="w-full pb-3 border-b border-gray-200 focus:border-[#DCA54C] outline-none transition-colors text-[#0A1628] bg-transparent font-medium" placeholder="John Doe" />
                   </div>
                   <div className="space-y-1.5">
                     <label className="text-[10px] font-black text-gray-400 text-opacity-80 uppercase tracking-widest">Email Address</label>
                     <input type="email" className="w-full pb-3 border-b border-gray-200 focus:border-[#DCA54C] outline-none transition-colors text-[#0A1628] bg-transparent font-medium" placeholder="john@company.com" />
                   </div>
                </div>

                 <div className="space-y-1.5 pt-2">
                   <label className="text-[10px] font-black text-gray-400 text-opacity-80 uppercase tracking-widest">Company</label>
                   <input type="text" className="w-full pb-3 border-b border-gray-200 focus:border-[#DCA54C] outline-none transition-colors text-[#0A1628] bg-transparent font-medium" placeholder="Your Organizations Name" />
                 </div>

                 <div className="space-y-4 pt-6">
                   <label className="text-[10px] font-black text-gray-400 text-opacity-80 uppercase tracking-widest block">Interested In</label>
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                     {['Logistics', 'Electric Trucks', 'Fe Alloy Distribution', 'Alloy Steel Distribution'].map((item) => (
                       <label 
                         key={item} 
                         onClick={() => setSelectedInterest(item)}
                         className={`flex items-center gap-3 p-4 border rounded-xl cursor-pointer transition-colors ${selectedInterest === item ? 'border-[#3b82f6] bg-blue-50/20 shadow-sm' : 'border-gray-100 hover:border-blue-200 bg-gray-50/50 hover:bg-white'}`}
                       >
                         <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${selectedInterest === item ? 'border-[#3b82f6]' : 'border-gray-300 bg-white'}`}>
                            {selectedInterest === item && <div className="w-2 h-2 rounded-full bg-[#3b82f6]" />}
                         </div>
                         <span className={`text-sm font-medium transition-colors ${selectedInterest === item ? 'text-[#0A1628]' : 'text-gray-500'}`}>{item}</span>
                       </label>
                     ))}
                   </div>
                 </div>

                 <div className="space-y-1.5 pt-6">
                   <label className="text-[10px] font-black text-gray-400 text-opacity-80 uppercase tracking-widest">Message</label>
                    <textarea rows={3} className="w-full pb-3 border-b border-gray-200 focus:border-[#DCA54C] outline-none transition-colors text-[#0A1628] bg-transparent resize-none font-medium text-sm leading-relaxed" placeholder="Tell us about your requirements..."></textarea>
                 </div>

                 <div className="pt-6">
                   <button type="submit" className="w-full py-4 bg-[#DCA54C] text-[#0A1628] font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-[#c5923b] transition-all shadow-xl shadow-[#DCA54C]/20 text-sm uppercase tracking-wider">
                     <Send size={18} />
                     Send Inquiry
                   </button>
                 </div>
               </form>
             </motion.div>
         </div>
       </div>
    </section>
  )
}

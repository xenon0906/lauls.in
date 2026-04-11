"use client";

import { motion } from "framer-motion";
import { MapPin, Target, Network, Phone, ExternalLink } from "lucide-react";

export default function ContactLocations() {
  return (
    <section id="locations" className="bg-[#fcf8f6] py-24 md:py-32 w-full border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-6 md:px-12 flex flex-col items-center bg-white shadow-2xl rounded-3xl overflow-hidden border border-gray-100 p-10 md:p-16">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-6 px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full shadow-sm">
            <Target size={14} className="text-blue-600" />
            <span className="text-[#0A1628] font-display font-bold uppercase tracking-widest text-[10px]">Headquarters & Reach</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-display font-bold text-[#0A1628] mb-6 tracking-tight">
            Command Center
          </h2>
          
          <p className="text-gray-500 font-light text-lg leading-relaxed max-w-3xl mx-auto">
            Lauls Ltd is strategically positioned in the industrial heart of India. From our primary command center, we seamlessly coordinate a pan-India distribution network connecting our 12 megahubs to ports, mills, and manufacturing plants.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Interactive Address Card */}
          <a 
            href="https://www.google.com/maps/place/Lauls+Pvt.+Ltd./@28.3776046,77.299595,17z/data=!4m6!3m5!1s0x390cdc36e9105efd:0xf91f3b0fcb0c3e73!8m2!3d28.3775999!4d77.3021699!16s%2Fg%2F1tf567pg?entry=ttu&g_ep=EgoyMDI2MDQwOC4wIKXMDSoASAFQAw%3D%3D" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col gap-4 group p-8 border border-transparent shadow-sm rounded-2xl bg-gray-50 hover:bg-white hover:border-gray-200 hover:shadow-xl transition-all"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#0A1628] flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform tracking-normal text-white">
              <MapPin className="text-[#DCA54C]" size={28} />
            </div>
            <div>
              <h4 className="text-xl font-bold text-[#0A1628] mb-2 group-hover:text-[#DCA54C] transition-colors">Corporate Headquarters</h4>
              <p className="text-gray-500 font-light mb-4 text-sm">33 B Nit, Faridabad, Haryana 121001</p>
              <div className="inline-flex text-[#DCA54C] text-[10px] font-bold uppercase tracking-widest items-center gap-1 group-hover:text-[#0A1628] transition-colors">
                Open in Google Maps <ExternalLink size={12} />
              </div>
            </div>
          </a>

          {/* Interactive View - Phone */}
          <a 
            href="tel:+911294098300"
            className="flex flex-col gap-4 group p-8 border border-transparent shadow-sm rounded-2xl bg-gray-50 hover:bg-white hover:border-gray-200 hover:shadow-xl transition-all"
          >
            <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shrink-0 border border-gray-200 group-hover:bg-[#0A1628] transition-colors shadow-sm">
              <Phone className="text-gray-500 group-hover:text-[#DCA54C] transition-colors" size={28} />
            </div>
            <div>
              <h4 className="text-xl font-bold text-[#0A1628] mb-2">Direct Operations Line</h4>
              <p className="text-gray-500 font-light mb-4 text-sm">Available Mon-Sat, 9AM to 6PM</p>
              <div className="text-[#0A1628] font-bold text-lg tracking-wide">+91-129-4098300</div>
            </div>
          </a>

          {/* Interactive View - WhatsApp */}
          <a 
            href="https://wa.me/911294098300"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col gap-4 group p-8 border border-transparent shadow-sm rounded-2xl bg-gray-50 hover:bg-white hover:border-gray-200 hover:shadow-xl transition-all"
          >
            <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shrink-0 border border-gray-200 group-hover:bg-[#25D366] transition-colors shadow-sm">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors">
                 <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
            </div>
            <div>
              <h4 className="text-xl font-bold text-[#0A1628] mb-2">WhatsApp Business</h4>
              <p className="text-gray-500 font-light mb-4 text-sm">Rapid text support & document sharing.</p>
              <div className="text-[#0A1628] font-bold text-lg tracking-wide">Chat with +91-129-4098300</div>
            </div>
          </a>

          {/* Static Distribution */}
          <div className="flex flex-col gap-4 p-8 border border-transparent shadow-sm rounded-2xl bg-gray-50/50">
            <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shrink-0 border border-gray-200 shadow-sm">
              <Network className="text-gray-400" size={28} />
            </div>
            <div>
              <h4 className="text-xl font-bold text-[#0A1628] mb-2">National Distribution</h4>
              <p className="text-gray-500 font-light text-sm">12 strategically positioned high-capacity warehousing hubs ensuring seamless delivery networks.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

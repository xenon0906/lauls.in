"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function LogisticsArticle() {
  return (
    <section className="bg-white pb-24">
      <div className="max-w-3xl mx-auto px-6 md:px-8 text-lg font-light text-gray-600 leading-relaxed space-y-8">
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-2xl text-[#0A1628] font-medium leading-snug drop-shadow-sm"
        >
          <span className="text-6xl float-left mr-4 font-display font-black text-[#DCA54C] leading-none mt-2">I</span>n an era where industrial demands are escalating by the minute, maintaining control over the entire supply chain isn't just an advantage—it's an absolute necessity. 
        </motion.p>

        <p>
          At Lauls Ltd, we recognized early on that relying on fragmented third-party transporters to handle sensitive, heavy-duty cargo was a bottleneck. To deliver on our promise of absolute reliability, we didn’t just participate in the logistics sector; we built our own multi-modal empire from the ground up to ensure seamless, end-to-end delivery of industrial materials.
        </p>

        <h2 className="text-3xl font-display font-bold text-[#0A1628] mt-16 mb-6">The Power of the Highway Fleet</h2>
        
        <p>
          The backbone of our operation lies in our massive road infrastructure. With over <b>300 active heavy commercial vehicles</b>—ranging from reinforced flatbeds designed for raw steel billets to multi-axle trailers customized for over-dimensional project cargo—Lauls transverses the Indian subcontinent relentlessly. 
        </p>

        <p>
          By maintaining total ownership and direct management of our fleet, we completely bypass the delays, unreliability, and safety concerns often associated with outsourced dispatching. When an automotive plant needs high-tensile steel by dawn, our JIT (Just-In-Time) highway divisions ensure the cargo is already at the dock doors before the shift begins.
        </p>

        <div className="my-14 border-l-4 border-[#DCA54C] pl-6 py-2 bg-gray-50/50">
          <p className="text-2xl font-display font-bold text-[#0A1628] italic leading-relaxed">
            "Logistics at this scale is not about simply moving mass. It is about precision timing, absolute safety, and unbroken chains of custody."
          </p>
        </div>

        <h2 className="text-3xl font-display font-bold text-[#0A1628] mt-16 mb-6">Railway Freight Integration</h2>

        <p>
          While the highways offer speed and point-to-point delivery, the sheer volume of our operations requires heavy lifting that only the railways can provide. We pride ourselves on deep-rooted logistical partnerships with national railway authorities. 
        </p>
        
        <p>
          By utilizing dedicated railway sidings, we are capable of mobilizing tens of thousands of tons of raw materials—iron ore, ferro alloys, and steel scrap—across massive distances, slashing carbon footprints and heavy transportation costs for our industrial partners.
        </p>

        <div className="relative w-full aspect-video rounded-2xl overflow-hidden my-12 group">
           <Image
              src="/images/warehouse.jpg"
              alt="Train logistics"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
           />
           <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl"></div>
        </div>

        <h2 className="text-3xl font-display font-bold text-[#0A1628] mt-16 mb-6">Zero-Emission Future</h2>

        <p>
          A 90-year legacy doesn't mean staying in the past. As India pushes toward ambitious ESG goals, Lauls Ltd is aggressively pioneering green logistics. We are actively deploying state-of-the-art heavy <b>Electric Vehicles (EVs)</b> to decarbonize supply chains. 
        </p>

        <p>
          Targeting mid-mile and last-mile sustainable transport, these zero-emission trucks reflect our commitment to sustainable commerce. By merging our historical robust infrastructure with futuristic clean energy technologies, we aren’t just preparing for the future of Indian logistics—we are defining it.
        </p>

      </div>
    </section>
  );
}

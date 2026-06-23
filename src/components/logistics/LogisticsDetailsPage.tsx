"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Truck, Leaf, Warehouse, CheckCircle2, ChevronRight, Settings } from "lucide-react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutContact from "@/components/about/AboutContact";
import { cloudinary } from "@/utils/cloudinary";

const tabContent = {
  road: {
    id: "road",
    icon: Truck,
    label: "Road Logistics",
    title: "High-Capacity Road Freight & ODC Transport",
    subtitle: "End-to-end highway logistics with an owned fleet of 300+ heavy vehicles",
    description: "Maintaining absolute ownership and direct control of our road assets allows us to bypass the common bottlenecks of third-party transport. From raw steel billets to high-volume cargo, our road fleet operates on strict JIT (Just-In-Time) dispatch models to support key manufacturing and infrastructure projects across India.",
    image: cloudinary("images/IMG_9993.JPG"),
    stats: [
      { label: "Active Fleet", value: "300+ Commercial Vehicles" },
      { label: "Coverage", value: "All Indian States" },
      { label: "Dispatch Model", value: "JIT (Just-In-Time)" },
      { label: "Support", value: "24/7 GPS Tracking" }
    ],
    features: [
      "Custom flatbeds and heavy-duty multi-axle trailers optimized for heavy industrial loads.",
      "In-house dispatch management ensuring zero reliance on brokers or third-party operators.",
      "Real-time GPS tracking and geofencing to monitor high-value steel and alloy shipments.",
      "Strict compliance with national road safety regulations and load capacity limits."
    ],
    specs: [
      { parameter: "Fleet Capacity", detail: "20 Tons to 40 Tons per Vehicle" },
      { parameter: "Vehicle Types", detail: "Multi-axle Trailers, Flatbeds, Low-beds, EV Rigs" },
      { parameter: "Primary Cargo", detail: "Steel Billets, Coils, Wire Rods, Ferro Alloys, Machinery" },
      { parameter: "Tracking Telemetry", detail: "Real-time GPS, Speed Limiters, Route Geofencing" },
      { parameter: "Safety Certifications", detail: "ISO 9001:2015 & OHSAS 18001 Compliant" }
    ],
    ctaTitle: "Optimize Your Supply Chain With Our Fleet",
    ctaDesc: "Contact our logistics division today to discuss dedicated transport contracts, route pricing, and JIT delivery schedules.",
    ctaButton: "Get a Road Logistics Quote"
  },
  esg: {
    id: "esg",
    icon: Leaf,
    label: "ESG Initiatives",
    title: "Sustainable Logistics & Zero-Emission Fleet",
    subtitle: "Pioneering the transition to a 100% diesel-free fleet by 2027",
    description: "Lauls Ltd is actively leading the industrial sector's green transition. By deploying heavy-duty Electric Vehicles (EVs) alongside LNG and CNG assets, we are drastically reducing Scope 1 and Scope 3 greenhouse gas emissions. Powering our fleet and facilities is a robust captive solar network, creating a closed-loop sustainable transport ecosystem.",
    image: cloudinary("lauls image/image copy 4.png"),
    stats: [
      { label: "Emissions Target", value: "100% Diesel-Free by 2027" },
      { label: "Zero-Emission Fleet", value: "Heavy Electric Rigs" },
      { label: "Alternative Fuels", value: "LNG & CNG Vehicles" },
      { label: "Power Source", value: "25MW Captive Solar Network" }
    ],
    features: [
      "Heavy-duty electric commercial vehicles designed to carry massive payloads over mid-mile corridors.",
      "LNG/CNG trucks deployed on long-haul routes to minimize emissions over interstate cargo channels.",
      "Telematics and AI route planning to optimize fuel efficiency and battery charging locations.",
      "Transparent ESG reporting dashboards providing clients with precise carbon footprint calculations."
    ],
    specs: [
      { parameter: "EV Payload Capacity", detail: "Up to 55T Gross Weight" },
      { parameter: "EV Range & Power", detail: "250km+ range per charge, instant hub torque" },
      { parameter: "LNG/CNG Range", detail: "800km+ operational range for long-haul routes" },
      { parameter: "Charging Infrastructure", detail: "120kW+ DC Fast Chargers powered by captive solar" },
      { parameter: "Emission Reduction", detail: "Detailed Scope 3 carbon offset certification for partners" }
    ],
    ctaTitle: "Decarbonize Your Industrial Supply Chain",
    ctaDesc: "Request a custom ESG logistics consultation to calculate carbon offsets and integrate zero-emission vehicles into your supply chain.",
    ctaButton: "Consult on Green Transition"
  },
  warehousing: {
    id: "warehousing",
    icon: Warehouse,
    label: "Strategic Warehousing",
    title: "Smart Industrial Warehousing & Distribution Hubs",
    subtitle: "12 national hubs with state-of-the-art handling and JIT inventory management",
    description: "Our warehousing solutions are designed to support heavy manufacturing and automotive sectors. With 12 high-capacity hubs strategically located near industrial clusters, we enable seamless Just-In-Time (JIT) delivery. Our facilities are equipped with heavy overhead gantry cranes, advanced inventory tracking systems, and high-security protocols.",
    image: cloudinary("lauls image/image copy 9.png"),
    stats: [
      { label: "Hub Network", value: "12 High-Capacity Hubs" },
      { label: "Total Capacity", value: "500,000+ Metric Tons" },
      { label: "Siding Connect", value: "Direct Rail Siding Access" },
      { label: "Delivery Model", value: "JIT (Just-In-Time) Support" }
    ],
    features: [
      "Overhead gantry cranes ranging from 10T to 40T to safely handle coils, pipes, and billets.",
      "Humidity and temperature monitoring to preserve special alloy steel grades and prevent corrosion.",
      "Direct integration with client inventory systems for real-time stock levels and automated replenishment.",
      "On-site material processing services including cutting, slitting, and quality testing."
    ],
    specs: [
      { parameter: "Storage Area", detail: "Over 5,000,000 sq ft across 12 strategic hubs" },
      { parameter: "Key Locations", detail: "NCR, Faridabad, Rajasthan, Ludhiana, Mumbai, Chennai" },
      { parameter: "Handling Machinery", detail: "10T-40T EOT Cranes, specialized heavy forklifts" },
      { parameter: "Inventory Model", detail: "FIFO, LIFO, and custom JIT tracking" },
      { parameter: "Security Systems", detail: "24/7 CCTV, automated access control, inventory insurance" }
    ],
    ctaTitle: "Partner With Our Distribution Network",
    ctaDesc: "Enquire about long-term warehouse leasing, JIT supply coordination, or stockyard management services.",
    ctaButton: "Enquire About Warehousing"
  }
};

export default function LogisticsDetailsPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const activeTabKey = (searchParams.get("tab") || "road") as keyof typeof tabContent;
  const activeTab = tabContent[activeTabKey] || tabContent.road;

  const handleTabChange = (key: string) => {
    router.push(`/logistics/details?tab=${key}`, { scroll: false });
  };

  const handleScrollToContact = (e: React.MouseEvent, interest: string) => {
    e.preventDefault();
    const productParam = interest === "esg" ? "truck" : "logistics";
    router.replace(`/logistics/details?tab=${activeTabKey}&product=${productParam}`, { scroll: false });

    const contactSection = document.getElementById("contact-form");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-800">
      <Navbar />

      {/* Hero Header Section */}
      <section className="bg-[#0A1628] text-white pt-36 pb-12 w-full relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[#DCA54C] font-display font-bold uppercase tracking-widest text-xs">Logistics Division</span>
                <span className="text-white/20">•</span>
                <span className="text-white/60 text-xs font-semibold uppercase">Operational Profile</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight leading-none">
                Logistics Operations
              </h1>
            </div>
            <p className="text-white/50 text-base md:text-lg max-w-md mt-4 md:mt-0 font-light">
              Deep dive into the infrastructure, machinery, and sustainability goals driving Lauls&apos; multi-modal logistics ecosystem.
            </p>
          </div>

          {/* Interactive Navigation Tabs */}
          <div className="flex flex-wrap gap-2 md:gap-4 p-1.5 bg-[#122238] rounded-2xl border border-white/5">
            {Object.values(tabContent).map((tab) => {
              const TabIcon = tab.icon;
              const isActive = activeTab.id === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-display font-semibold text-sm transition-all duration-300 ${
                    isActive
                      ? "bg-[#DCA54C] text-[#0A1628] shadow-lg shadow-[#DCA54C]/10"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <TabIcon size={16} />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-20 w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
            >
              {/* Left Column: Details & Copy */}
              <div className="lg:col-span-7 space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 border border-amber-100 rounded-full w-fit">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#DCA54C]" />
                    <span className="text-[#0A1628] font-display font-bold uppercase tracking-widest text-[9px]">
                      {activeTab.label} Details
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-[#0A1628] tracking-tight">
                    {activeTab.title}
                  </h2>
                  <h3 className="text-lg md:text-xl text-[#0A1628]/80 font-medium leading-relaxed">
                    {activeTab.subtitle}
                  </h3>
                </div>

                <p className="text-slate-600 text-lg leading-relaxed font-light">
                  {activeTab.description}
                </p>

                {/* Features Checklist */}
                <div className="space-y-4 pt-4">
                  <h4 className="font-display font-bold text-slate-800 uppercase tracking-wider text-xs">Core Operational Advantages</h4>
                  <div className="grid grid-cols-1 gap-3.5">
                    {activeTab.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-[#DCA54C] shrink-0 mt-0.5" />
                        <span className="text-slate-600 text-base leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technical Specifications Table */}
                <div className="pt-8">
                  <h4 className="font-display font-bold text-[#0A1628] mb-4 uppercase tracking-wider text-xs flex items-center gap-2">
                    <Settings size={16} className="text-[#DCA54C]" /> Technical Specifications
                  </h4>
                  <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-xs bg-white">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-50 border-b border-slate-200">
                          <th className="px-6 py-4 text-xs font-bold uppercase text-[#0A1628] tracking-wider w-1/3">Parameter</th>
                          <th className="px-6 py-4 text-xs font-bold uppercase text-[#0A1628] tracking-wider">Specifications & Capacity</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-sm">
                        {activeTab.specs.map((spec, i) => (
                          <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                            <td className="px-6 py-4 font-bold text-[#0A1628]">{spec.parameter}</td>
                            <td className="px-6 py-4 text-slate-600 font-medium">{spec.detail}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Right Column: Visuals & Stats */}
              <div className="lg:col-span-5 space-y-8">
                {/* Immersive Image Frame */}
                <div className="relative aspect-4/3 w-full rounded-3xl overflow-hidden shadow-2xl bg-[#0A1628] group border border-slate-100">
                  <Image
                    src={activeTab.image}
                    alt={activeTab.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  {/* Subtle vignette and border */}
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-3xl pointer-events-none" />
                </div>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {activeTab.stats.map((stat, i) => (
                    <div key={i} className="bg-white border border-slate-150 rounded-2xl p-5 shadow-xs flex flex-col justify-between hover:border-[#DCA54C]/50 transition-colors">
                      <span className="text-slate-400 text-[10px] font-bold uppercase tracking-wider mb-2">{stat.label}</span>
                      <span className="text-[#0A1628] font-bold text-lg md:text-xl font-display tracking-tight leading-tight">{stat.value}</span>
                    </div>
                  ))}
                </div>

                {/* Dedicated Action CTA Box */}
                <div className="bg-[#0A1628] text-white rounded-3xl p-8 border border-white/5 relative overflow-hidden shadow-xl">
                  {/* Decorative background glow */}
                  <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl" />
                  
                  <div className="relative z-10 flex flex-col h-full justify-between">
                    <div>
                      <span className="text-[#DCA54C] font-display font-black uppercase tracking-widest text-[9px] mb-3 block">Direct Engagement</span>
                      <h4 className="text-xl md:text-2xl font-display font-bold text-white mb-3 tracking-tight">
                        {activeTab.ctaTitle}
                      </h4>
                      <p className="text-white/60 text-xs md:text-sm font-light leading-relaxed mb-6">
                        {activeTab.ctaDesc}
                      </p>
                    </div>

                    <a
                      href="#contact-form"
                      onClick={(e) => handleScrollToContact(e, activeTab.id)}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#DCA54C] text-[#0A1628] font-bold rounded-xl text-xs hover:bg-[#DCA54C]/90 transition-all shadow-lg shadow-[#DCA54C]/10 self-start group"
                    >
                      {activeTab.ctaButton} <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Contact Section */}
      <AboutContact />

      <Footer />
    </main>
  );
}

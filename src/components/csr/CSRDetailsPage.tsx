"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, HeartPulse, CheckCircle2, ChevronRight, Settings } from "lucide-react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutContact from "@/components/about/AboutContact";
import { cloudinary } from "@/utils/cloudinary";

const tabContent = {
  education: {
    id: "education",
    icon: BookOpen,
    label: "Education & Skilling",
    title: "SAVERA: Educational & Vocational Empowerment",
    subtitle: "Funding rural schools and technical vocational centers near manufacturing hubs",
    description: "At Lauls Ltd, we believe that education is the ultimate catalyst for community development. Through our SAVERA initiative, we fund and operate multiple rural schools and vocational training centers near our manufacturing plants. We combine modern classroom infrastructure (like STEM labs) with vocational apprenticeships to prepare local youth for engineering and technical industrial careers.",
    image: cloudinary("images/savera.png"),
    stats: [
      { label: "Students Sponsored", value: "5,000+ Annually" },
      { label: "Supported Schools", value: "3 Rural Clusters" },
      { label: "Trainee Placement", value: "85% Success Rate" },
      { label: "Financial Aid", value: "100% Free Education" }
    ],
    features: [
      "STEM Lab Integration – setting up high-tech computer and science labs in rural government schools.",
      "Girls' Scholarship Program – fully funding higher education and technical diplomas for female graduates.",
      "Vocational Internships – providing hands-on machinery training inside Lauls' logistics hubs.",
      "Teacher Training Seminars – upgrading local teaching standards with digital pedagogy workshops."
    ],
    specs: [
      { parameter: "Program Focus", detail: "K-12 Education, STEM Development, Industrial Apprenticeships" },
      { parameter: "Core Locations", detail: "NCR, Faridabad, Rajasthan (Alwar Cluster), Punjab" },
      { parameter: "Key Equipment", detail: "Smart Boards, Science Lab Kits, CNC Training Modules" },
      { parameter: "Corporate Sponsor", detail: "Lauls CSR Foundation" },
      { parameter: "Affiliations", detail: "Partnered with National Skill Development Corporation (NSDC)" }
    ],
    ctaTitle: "Support Our Educational Initiatives",
    ctaDesc: "Learn how your organization can partner with our SAVERA foundation to fund school resources, sponsor STEM labs, or hire vocational graduates.",
    ctaButton: "Enquire About Education Program"
  },
  healthcare: {
    id: "healthcare",
    icon: HeartPulse,
    label: "Community Healthcare",
    title: "SEWA: Accessible Medical & Health Infrastructure",
    subtitle: "Operating healthcare centers and mobile medical clinics in remote regions",
    description: "Healthcare is a fundamental human right, yet many rural and industrial mining communities remain underserved. Our SEWA initiative is dedicated to bridging this gap by establishing primary healthcare clinics and running mobile diagnostic vans. We provide free consultations, essential medicines, maternal healthcare, and eye/dental checkups directly to the doorsteps of local families.",
    image: cloudinary("images/sewa.png"),
    stats: [
      { label: "Primary Clinics", value: "4 Care Centers" },
      { label: "Mobile Coverage", value: "15+ Remote Villages" },
      { label: "Annual Beneficiaries", value: "25,000+ Treated" },
      { label: "Clean Water", value: "12 RO Plants Setup" }
    ],
    features: [
      "Mobile Diagnostic Vans – bringing doctors, diagnostic machinery, and medicines directly to villages.",
      "RO Clean Water Plants – setting up high-capacity water filtration hubs to combat waterborne fluorosis.",
      "Maternal & Child Care – providing free prenatal guidance, immunizations, and child nutrition kits.",
      "Annual Vision Camps – sponsoring cataract surgeries and free corrective eyewear for senior citizens."
    ],
    specs: [
      { parameter: "Medical Services", detail: "Diagnostics, Maternal Care, Preventive Medicine, Dispensary" },
      { parameter: "Clinic Locations", detail: "NCR, Mining Corridors in Rajasthan, Manufacturing Hubs in Haryana" },
      { parameter: "Mobile Fleet", detail: "2 Fully equipped Mobile Dispensary Vans" },
      { parameter: "Medical Partners", detail: "Collaborating with local Red Cross and regional healthcare NGOs" },
      { parameter: "Water Filtration", detail: "10,000 LPH Commercial RO Water Plants" }
    ],
    ctaTitle: "Sponsor a Healthcare Camp",
    ctaDesc: "Partner with our SEWA healthcare network to host monthly diagnostic camps or deploy clean drinking water RO systems in your local area.",
    ctaButton: "Enquire About Healthcare Services"
  }
};

export default function CSRDetailsPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const activeTabKey = (searchParams.get("tab") || "education") as keyof typeof tabContent;
  const activeTab = tabContent[activeTabKey] || tabContent.education;

  const handleTabChange = (key: string) => {
    router.push(`/csr/details?tab=${key}`, { scroll: false });
  };

  const handleScrollToContact = (e: React.MouseEvent, _interest: string) => {
    e.preventDefault();
    // Update query parameters to select CSR checkbox in AboutContact
    router.replace(`/csr/details?tab=${activeTabKey}&product=csr`, { scroll: false });

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
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[#DCA54C] font-display font-bold uppercase tracking-widest text-xs">CSR Foundation</span>
                <span className="text-white/20">•</span>
                <span className="text-white/60 text-xs font-semibold uppercase">Pillars of Impact</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight leading-none">
                CSR Initiatives
              </h1>
            </div>
            <p className="text-white/50 text-base md:text-lg max-w-md mt-4 md:mt-0 font-light">
              Explore the detailed reports, program milestones, and social development programs of the Lauls CSR Foundation.
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
                  <h4 className="font-display font-bold text-slate-800 uppercase tracking-wider text-xs">Core Program Focus Areas</h4>
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
                    <Settings size={16} className="text-[#DCA54C]" /> Program Framework
                  </h4>
                  <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-xs bg-white">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-50 border-b border-slate-200">
                          <th className="px-6 py-4 text-xs font-bold uppercase text-[#0A1628] tracking-wider w-1/3">Parameter</th>
                          <th className="px-6 py-4 text-xs font-bold uppercase text-[#0A1628] tracking-wider">Program Detail</th>
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
                  <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl" />
                  
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
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#DCA54C] text-[#0A1628] font-bold rounded-xl text-xs hover:bg-[#DCA54C]/90 transition-all shadow-lg shadow-[#DCA54C]/10 self-start group cursor-pointer"
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

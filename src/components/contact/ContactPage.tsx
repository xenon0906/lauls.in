"use client";

import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { 
  Phone, Mail, MessageCircle, MapPin, 
  Send, Loader2, CheckCircle, AlertCircle, ChevronDown, ExternalLink
} from "lucide-react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { cloudinary } from "@/utils/cloudinary";

const LinkedinIcon = ({ className, size, strokeWidth }: { className?: string; size?: number; strokeWidth?: number }) => (
  <svg 
    className={className} 
    width={size || 24} 
    height={size || 24} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth={strokeWidth || 1.5} 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const locations = [
  {
    title: "Corporate Headquarters",
    description: "Plot No. 33 B NIT, Faridabad, Haryana - 121001",
    image: cloudinary("images/stockyard-lauls.jpg"),
    mapLink: "https://www.google.com/maps/search/33+B+Nit,+Faridabad"
  },
  {
    title: "Delhi Distribution Hub",
    description: "C-55/2, Wazirpur Industrial Area, New Delhi - 110052",
    image: cloudinary("lauls image/image copy 9.png"),
    mapLink: "https://www.google.com/maps/search/Wazirpur+Industrial+Area,+New+Delhi"
  },
  {
    title: "Central Warehousing",
    description: "Plot No. 1401/2 & 1415, GIDC Estate, Palwal, Haryana",
    image: cloudinary("lauls image/image copy 13.png"),
    mapLink: "https://www.google.com/maps/search/Palwal+Haryana"
  },
  {
    title: "Regional Sales Office",
    description: "1603-1605, Block D, Westgate Hwy, Ahmedabad, Gujarat",
    image: cloudinary("images/trading.jpg"),
    mapLink: "https://www.google.com/maps/search/Ahmedabad+Gujarat"
  }
];

type FormStatus = "idle" | "loading" | "success" | "error";

export default function ContactPage() {
  const searchParams = useSearchParams();

  // Form State
  const initialInterest = useMemo(() => {
    const product = searchParams.get("product");
    if (!product) return "Logistics";
    const pLower = product.toLowerCase();
    if (pLower.includes("wire") || pLower.includes("alloy")) return "Wire Rods";
    if (pLower.includes("tube") || pLower.includes("precision")) return "Precision Tubes";
    if (pLower.includes("logistics")) return "Logistics";
    if (pLower.includes("truck")) return "Electric Trucks";
    if (pLower.includes("csr") || pLower.includes("social")) return "CSR & Social Impact";
    return "Alloy Steel Distribution";
  }, [searchParams]);

  const [selectedInterest, setSelectedInterest] = useState<string>(initialInterest);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [honey, setHoney] = useState("");

  useEffect(() => {
    setSelectedInterest(initialInterest);
  }, [initialInterest]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (honey) {
      setStatus("success");
      setStatusMessage("Thank you for reaching out! Our team will contact you within 24 hours.");
      return;
    }

    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus("error");
      setStatusMessage("Please fill in your name, email, and message.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setStatus("error");
      setStatusMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setStatusMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          name: name.trim(), 
          email: email.trim(), 
          company: company.trim(), 
          interest: selectedInterest, 
          message: message.trim() 
        }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus("success");
        setStatusMessage(data.message);
        setName(""); setEmail(""); setCompany(""); setMessage("");
      } else {
        setStatus("error");
        setStatusMessage(data.error || "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setStatusMessage("Network error. Please try again.");
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const hash = window.location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 500);
    }
  }, []);

  const handleScrollToForm = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-[#DCA54C] selection:text-[#0A1628] overflow-x-hidden" aria-label="Contact Lauls Private Limited">
      <Navbar />

      {/* --- SECTION 1: HERO (Solid Navy Split Layout) --- */}
      <section className="relative w-full pt-36 pb-36 lg:pt-44 lg:pb-48 bg-[#0A1628] overflow-visible flex items-center min-h-[70vh] lg:min-h-[75vh]">
        {/* Subtle noise and radial lights */}
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] pointer-events-none mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-radial-gradient from-blue-500/10 to-transparent blur-3xl pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Hero Text */}
            <div className="w-full lg:col-span-7 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-3 mb-6 text-[#DCA54C] font-bold text-xs tracking-widest uppercase"
              >
                <span className="w-8 h-px bg-[#DCA54C]"></span>
                Connect with Lauls
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6 tracking-tight leading-tight"
              >
                Let&apos;s Build India&apos;s <br />
                <span className="text-[#DCA54C]">Industrial Backbone</span> Together.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-white/70 text-base sm:text-lg lg:text-xl font-light leading-relaxed mb-8 max-w-2xl"
              >
                Whether you are scaling supply chains with our zero-emission EV fleet, sourcing precision steel wire rods, or organizing national logistics, our command centers are ready to assist.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <button
                  onClick={handleScrollToForm}
                  className="px-6 py-3.5 bg-[#DCA54C] text-[#0A1628] font-bold hover:bg-white hover:text-[#0A1628] transition-all text-sm flex items-center gap-2.5 rounded-xl shadow-lg shadow-[#DCA54C]/10 group"
                >
                  Submit Inquiry Form
                  <ChevronDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
                </button>
                <a
                  href="tel:+911294098300"
                  className="px-6 py-3.5 border border-white/20 text-white font-bold hover:bg-white/5 transition-all text-sm flex items-center gap-2.5 rounded-xl"
                >
                  <Phone size={16} className="text-[#DCA54C]" />
                  Call +91-129-4098300
                </a>
              </motion.div>
            </div>

            {/* Right Column: Animated Overlapping Image Showcase */}
            <div className="w-full lg:col-span-5 relative h-[360px] xs:h-[420px] lg:h-[380px] xl:h-[440px] flex items-center justify-center">
              
              {/* Image 1: Steel Stockyard Operations (Top-Left) - Animates sliding from the left/top */}
              <motion.div
                initial={{ opacity: 0, x: -60, y: -20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                whileHover={{ x: -8, y: -8, scale: 1.02 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute top-0 left-0 w-[58%] h-[60%] rounded-3xl overflow-hidden shadow-2xl border border-white/10 z-10 cursor-pointer"
              >
                <Image
                  src={cloudinary("images/IMG_9927.JPG")}
                  alt="Steel Warehouse Operations"
                  fill
                  priority
                  sizes="(max-width: 1024px) 45vw, 25vw"
                  className="object-cover hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-[#0A1628]/20" />
              </motion.div>

              {/* Image 2: EV Fleet Truck (Bottom-Right) - Animates sliding up from the bottom */}
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ x: 8, y: 8, scale: 1.02 }}
                transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
                className="absolute bottom-0 right-0 w-[63%] h-[65%] rounded-3xl overflow-hidden shadow-2xl border-2 border-[#DCA54C] z-20 cursor-pointer"
              >
                <Image
                  src={cloudinary("lauls image/image copy 4.png")}
                  alt="Lauls Green Logistics Truck"
                  fill
                  priority
                  sizes="(max-width: 1024px) 50vw, 28vw"
                  className="object-cover hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-[#0A1628]/10" />
              </motion.div>

              {/* Image 3: Logistics Operations (Bottom-Left overlap) - Animates sliding from the right */}
              <motion.div
                initial={{ opacity: 0, x: 60, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                whileHover={{ x: 8, y: -8, scale: 1.05 }}
                transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
                className="absolute bottom-6 left-4 w-[38%] h-[38%] rounded-2xl overflow-hidden shadow-xl border border-white/10 z-30 cursor-pointer hidden sm:block"
              >
                <Image
                  src={cloudinary("images/IMG_9993.JPG")}
                  alt="Lauls Transportation Command"
                  fill
                  sizes="10vw"
                  className="object-cover"
                />
              </motion.div>

            </div>

          </div>
        </div>
      </section>

      {/* --- SECTION 2: FORM & COMPANY DETAILS SPLIT --- */}
      <section id="contact-form" className="relative pb-24 z-20 bg-slate-50" aria-label="Contact Form and Company Details">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Left Column: Spacious Inquiry Form */}
            <div className="lg:col-span-7 mt-8 lg:-mt-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 p-6 sm:p-10 md:p-12"
              >
                <div className="mb-8">
                  <span className="text-[#DCA54C] font-bold uppercase tracking-widest text-xs">Direct Request</span>
                  <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#0A1628] mt-2 mb-3">
                    Submit Your Specifications
                  </h2>
                  <p className="text-gray-500 font-light text-sm sm:text-base">
                    Select your operational area of interest and details below. Our corporate sales team will review and respond within 2 hours.
                  </p>
                </div>

                {status === "success" ? (
                  <div className="py-16 flex flex-col items-center justify-center text-center">
                    <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mb-6">
                      <CheckCircle className="text-emerald-500" size={32} />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-[#0A1628] mb-3">Inquiry Submitted Successfully</h3>
                    <p className="text-gray-500 text-base mb-8 max-w-md">{statusMessage}</p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="px-6 py-3 bg-[#0A1628] text-white rounded-xl font-bold hover:bg-[#DCA54C] hover:text-[#0A1628] transition-colors text-sm"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-6">
                    <div className="hidden" aria-hidden="true">
                      <input type="text" name="website" value={honey} onChange={(e) => setHoney(e.target.value)} tabIndex={-1} autoComplete="off" />
                    </div>

                    {/* Category Selector */}
                    <div className="space-y-3">
                      <label className="text-xs font-bold text-[#0A1628] uppercase tracking-wider block">
                        1. What area of business does this concern?
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Logistics", "Electric Trucks", "Alloy Steel Distribution",
                          "Precision Tubes", "Wire Rods", "CSR & Social Impact"
                        ].map((item) => (
                          <button
                            key={item}
                            type="button"
                            onClick={() => setSelectedInterest(item)}
                            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all border ${
                              selectedInterest === item
                                ? "bg-[#0A1628] text-white border-[#0A1628] shadow-md shadow-[#0A1628]/15"
                                : "bg-slate-50 text-gray-600 border-slate-200 hover:border-[#DCA54C] hover:bg-white"
                            }`}
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="border-t border-slate-100 pt-6 space-y-4">
                      <label className="text-xs font-bold text-[#0A1628] uppercase tracking-wider block">
                        2. Share Your Contact Info
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:border-[#DCA54C] focus:bg-white focus:ring-4 focus:ring-[#DCA54C]/10 outline-none transition-all text-[#0A1628] text-sm placeholder:text-gray-400"
                            placeholder="Full Name *"
                          />
                        </div>
                        <div className="space-y-1">
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:border-[#DCA54C] focus:bg-white focus:ring-4 focus:ring-[#DCA54C]/10 outline-none transition-all text-[#0A1628] text-sm placeholder:text-gray-400"
                            placeholder="Corporate Email Address *"
                          />
                        </div>
                        <div className="space-y-1 sm:col-span-2">
                          <input
                            type="text"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:border-[#DCA54C] focus:bg-white focus:ring-4 focus:ring-[#DCA54C]/10 outline-none transition-all text-[#0A1628] text-sm placeholder:text-gray-400"
                            placeholder="Company Name (Optional)"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-3">
                      <label className="text-xs font-bold text-[#0A1628] uppercase tracking-wider block">
                        3. Describe Your Requirement
                      </label>
                      <textarea
                        rows={5}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:border-[#DCA54C] focus:bg-white focus:ring-4 focus:ring-[#DCA54C]/10 outline-none transition-all text-[#0A1628] text-sm resize-none placeholder:text-gray-400"
                        placeholder="Please details steel grades, dimensions, payloads, destination routes, or custom warehousing specifications..."
                      />
                    </div>

                    {status === "error" && statusMessage && (
                      <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-100 rounded-xl text-red-600 text-sm font-medium">
                        <AlertCircle size={18} className="shrink-0" />
                        {statusMessage}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full sm:w-auto px-8 py-3.5 bg-[#DCA54C] text-[#0A1628] font-bold rounded-xl flex items-center justify-center gap-2.5 hover:bg-[#c5923b] transition-all shadow-lg shadow-[#DCA54C]/15 disabled:opacity-70"
                    >
                      {status === "loading" ? (
                        <><Loader2 size={18} className="animate-spin" /> Submitting...</>
                      ) : (
                        <><Send size={18} /> Submit Requirement</>
                      )}
                    </button>
                  </form>
                )}
              </motion.div>
            </div>

            {/* Right Column: Clean Corporate Directory Card */}
            <div className="lg:col-span-5 flex flex-col gap-6 lg:-mt-20">
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-[#0A1628] text-white rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden border border-white/5"
              >
                {/* Light reflection effect */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#DCA54C]/10 rounded-full blur-3xl pointer-events-none"></div>

                <div className="relative z-10 space-y-6">
                  <div>
                    <span className="text-[#DCA54C] font-bold text-xs uppercase tracking-widest block mb-1">Corporate Identity</span>
                    <h3 className="text-xl font-display font-bold">Lauls Private Limited</h3>
                    <p className="text-xs text-white/40 mt-1 font-mono">CIN / GSTIN: 06AAACL3118P1ZF</p>
                  </div>

                  <hr className="border-white/10" />

                  {/* Direct Channels */}
                  <div className="space-y-4">
                    <h3 className="text-white/50 text-[10px] font-bold uppercase tracking-widest">Connect Directly</h3>

                    {/* Phones */}
                    <div className="space-y-3">
                      <a href="tel:+911294098300" className="flex items-center gap-3.5 group hover:text-[#DCA54C] transition-colors">
                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-[#DCA54C] group-hover:border-[#DCA54C] transition-all">
                          <Phone size={16} className="text-white/60 group-hover:text-[#0A1628] transition-colors" />
                        </div>
                        <div>
                          <p className="text-[10px] text-white/40 uppercase font-bold tracking-wider">Board Line</p>
                          <p className="text-sm font-semibold">+91-129-4098300</p>
                        </div>
                      </a>

                      <a href="https://wa.me/919818688470" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3.5 group hover:text-emerald-400 transition-colors">
                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-emerald-500 group-hover:border-emerald-500 transition-all">
                          <MessageCircle size={16} className="text-white/60 group-hover:text-white transition-colors" />
                        </div>
                        <div>
                          <p className="text-[10px] text-white/40 uppercase font-bold tracking-wider">WhatsApp Business</p>
                          <p className="text-sm font-semibold">Start Chat Support</p>
                        </div>
                      </a>
                    </div>

                    <hr className="border-white/10" />

                    {/* Emails by Department */}
                    <div className="space-y-3">
                      <a href="mailto:sales@lauls.in" className="flex items-center gap-3.5 group hover:text-[#DCA54C] transition-colors">
                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-[#DCA54C] group-hover:border-[#DCA54C] transition-all">
                          <Mail size={16} className="text-white/60 group-hover:text-[#0A1628] transition-colors" />
                        </div>
                        <div>
                          <p className="text-[10px] text-white/40 uppercase font-bold tracking-wider">Sales & Logistics</p>
                          <p className="text-sm font-semibold font-mono">sales@lauls.in</p>
                        </div>
                      </a>

                      <a href="mailto:ferroalloys@lauls.in" className="flex items-center gap-3.5 group hover:text-[#DCA54C] transition-colors">
                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-[#DCA54C] group-hover:border-[#DCA54C] transition-all">
                          <Mail size={16} className="text-white/60 group-hover:text-[#0A1628] transition-colors" />
                        </div>
                        <div>
                          <p className="text-[10px] text-white/40 uppercase font-bold tracking-wider">Ferro Alloys</p>
                          <p className="text-sm font-semibold font-mono">ferroalloys@lauls.in</p>
                        </div>
                      </a>

                      <a href="mailto:info@lauls.in" className="flex items-center gap-3.5 group hover:text-[#DCA54C] transition-colors">
                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-[#DCA54C] group-hover:border-[#DCA54C] transition-all">
                          <Mail size={16} className="text-white/60 group-hover:text-[#0A1628] transition-colors" />
                        </div>
                        <div>
                          <p className="text-[10px] text-white/40 uppercase font-bold tracking-wider">General Inquiries</p>
                          <p className="text-sm font-semibold font-mono">info@lauls.in</p>
                        </div>
                      </a>
                    </div>

                    <hr className="border-white/10" />

                    {/* Socials & Address */}
                    <div className="space-y-4 pt-1">
                      <a href="https://www.linkedin.com/company/10073868" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3.5 group hover:text-sky-400 transition-colors">
                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-sky-500 group-hover:border-sky-500 transition-all">
                          <LinkedinIcon size={16} className="text-white/60 group-hover:text-white transition-colors" />
                        </div>
                        <div>
                          <p className="text-[10px] text-white/40 uppercase font-bold tracking-wider">LinkedIn</p>
                          <p className="text-sm font-semibold">Lauls Private Limited</p>
                        </div>
                      </a>

                      <div className="flex items-start gap-3.5">
                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                          <MapPin size={16} className="text-white/60" />
                        </div>
                        <div>
                          <p className="text-[10px] text-white/40 uppercase font-bold tracking-wider">Registered Office</p>
                          <p className="text-sm text-white/80 leading-relaxed font-medium">
                            Plot No. 33 B NIT, Faridabad, <br />
                            Haryana, India - 121001
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>

          </div>

        </div>
      </section>

      {/* --- SECTION 3: LOCATIONS NETWORK GRID --- */}
      <section className="py-24 bg-white border-t border-slate-200" aria-label="Office Locations">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <MapPin size={16} className="text-[#DCA54C]" />
                <span className="text-[#DCA54C] font-bold uppercase tracking-widest text-xs">National Reach</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-[#0A1628] tracking-tight">
                Our Operational Network
              </h2>
            </div>
            <p className="text-gray-500 text-sm sm:text-base max-w-md mt-4 md:mt-0 font-light leading-relaxed">
              Lauls operates high-capacity steel warehouses, distribution hubs, and smart logistics control complexes across strategic trade corridors in India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {locations.map((loc, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group flex flex-col rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:border-slate-200 transition-all duration-300 bg-white"
              >
                <div className="relative w-full aspect-[4/3] bg-slate-100 overflow-hidden">
                  <Image
                    src={loc.image}
                    alt={loc.title}
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-[#0A1628]/10 group-hover:bg-transparent transition-colors" />
                  
                  <a
                    href={loc.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 px-3.5 py-2 bg-white/95 backdrop-blur-xs text-[#0A1628] text-xs font-bold rounded-xl hover:bg-[#DCA54C] transition-colors shadow-sm"
                  >
                    View Map <ExternalLink size={11} />
                  </a>
                </div>
                
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-[#0A1628] font-bold text-base mb-1.5">{loc.title}</h3>
                    <p className="text-gray-500 text-xs sm:text-sm font-light leading-relaxed">{loc.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

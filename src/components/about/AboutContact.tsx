"use client";

import { useState, useEffect, Suspense, useMemo } from "react";
import { Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { cloudinary } from "@/utils/cloudinary";
import { motion } from "framer-motion";

type FormStatus = "idle" | "loading" | "success" | "error";

function ContactFormInner() {
  const searchParams = useSearchParams();

  // Derive initial values from URL params without calling setState inside effects
  const initialInterest = useMemo(() => {
    const product = searchParams.get("product");
    if (!product) return null;
    const pLower = product.toLowerCase();
    if (pLower.includes("wire") || pLower.includes("alloy")) return "Wire Rods";
    if (pLower.includes("tube") || pLower.includes("precision")) return "Precision Tubes";
    if (pLower.includes("logistics")) return "Logistics";
    if (pLower.includes("truck")) return "Electric Trucks";
    if (pLower.includes("csr") || pLower.includes("social") || pLower.includes("edu") || pLower.includes("health")) return "CSR & Social Impact";
    return "Alloy Steel Distribution";
  }, [searchParams]);

  const initialMessage = useMemo(() => {
    const product = searchParams.get("product");
    const intent = searchParams.get("intent");
    if (product && intent === "quote") {
      return `Hello, I'm interested in getting a quote for ${product} for my industrial applications. Could you please provide more information?`;
    }
    return "";
  }, [searchParams]);

  const [selectedInterest, setSelectedInterest] = useState<string | null>(initialInterest);
  const [message, setMessage] = useState<string>(initialMessage);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [honey, setHoney] = useState("");

  useEffect(() => {
    if (initialInterest) {
      /* eslint-disable-next-line react-hooks/set-state-in-effect */
      setSelectedInterest(initialInterest);
    }
  }, [initialInterest]);

  useEffect(() => {
    if (initialMessage) {
      /* eslint-disable-next-line react-hooks/set-state-in-effect */
      setMessage(initialMessage);
    }
  }, [initialMessage]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (honey) {
      // Silently discard spam but simulate success to bots
      setStatus("success");
      setStatusMessage("Thank you for reaching out! Our team will contact you within 24 hours.");
      return;
    }

    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus("error");
      setStatusMessage("Please fill in your name, email, and message.");
      return;
    }

    // Client-side email validation
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
          message: message.trim(),
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setStatusMessage(data.message);
        // Reset form
        setName("");
        setEmail("");
        setCompany("");
        setSelectedInterest(null);
        setMessage("");
      } else {
        setStatus("error");
        setStatusMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setStatusMessage("Network error. Please check your connection and try again.");
    }
  };

  if (status === "success") {
    return (
      <div className="h-full flex flex-col items-center justify-center text-center py-16 gap-6">
        <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center">
          <CheckCircle className="text-emerald-500" size={32} />
        </div>
        <div>
          <h3 className="text-2xl font-display font-bold text-[#0A1628] mb-2">
            Inquiry Sent!
          </h3>
          <p className="text-gray-500 max-w-sm leading-relaxed">{statusMessage}</p>
        </div>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 px-6 py-2.5 border border-[#DCA54C] text-[#DCA54C] font-bold rounded-lg hover:bg-[#DCA54C]/5 transition-all text-sm"
        >
          Send Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit} noValidate>
      {/* Honeypot Spam Protection Field */}
      <div className="hidden" aria-hidden="true">
        <input
          type="text"
          name="website"
          value={honey}
          onChange={(e) => setHoney(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-2">
          <label htmlFor="contact-name" className="text-xs font-bold text-[#0A1628] uppercase tracking-wider block">
            Full Name <span className="text-red-400">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:border-[#DCA54C] focus:bg-white focus:ring-4 focus:ring-[#DCA54C]/10 outline-none transition-all text-[#0A1628] text-sm placeholder:text-gray-400"
            placeholder="Enter your full name"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="contact-email" className="text-xs font-bold text-[#0A1628] uppercase tracking-wider block">
            Email Address <span className="text-red-400">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:border-[#DCA54C] focus:bg-white focus:ring-4 focus:ring-[#DCA54C]/10 outline-none transition-all text-[#0A1628] text-sm placeholder:text-gray-400"
            placeholder="you@company.com"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="contact-company" className="text-xs font-bold text-[#0A1628] uppercase tracking-wider block">
          Company / Organisation
        </label>
        <input
          id="contact-company"
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:border-[#DCA54C] focus:bg-white focus:ring-4 focus:ring-[#DCA54C]/10 outline-none transition-all text-[#0A1628] text-sm placeholder:text-gray-400"
          placeholder="Enter your company name"
        />
      </div>

      <div className="space-y-3">
        <label className="text-xs font-bold text-[#0A1628] uppercase tracking-wider block">
          Interested In
        </label>
        <div className="flex flex-wrap gap-2">
          {[
            "Logistics",
            "Electric Trucks",
            "Fe Alloy Distribution",
            "Alloy Steel Distribution",
            "Precision Tubes",
            "Wire Rods",
            "CSR & Social Impact",
          ].map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setSelectedInterest(item)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all border ${selectedInterest === item
                  ? "bg-[#0A1628] text-white border-[#0A1628] shadow-md shadow-[#0A1628]/15"
                  : "bg-slate-50 text-gray-600 border-slate-200 hover:border-[#DCA54C] hover:bg-white"
                }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="contact-message" className="text-xs font-bold text-[#0A1628] uppercase tracking-wider block">
          Message <span className="text-red-400">*</span>
        </label>
        <textarea
          id="contact-message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:border-[#DCA54C] focus:bg-white focus:ring-4 focus:ring-[#DCA54C]/10 outline-none transition-all text-[#0A1628] text-sm resize-none placeholder:text-gray-400"
          placeholder="Describe your industrial requirement in detail..."
        />
      </div>

      {status === "error" && statusMessage && (
        <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-100 rounded-xl">
          <AlertCircle className="text-red-400 shrink-0 mt-0.5" size={18} />
          <p className="text-red-600 text-sm">{statusMessage}</p>
        </div>
      )}

      <div className="pt-2">
        <button
          id="contact-submit"
          type="submit"
          disabled={status === "loading"}
          className="w-full py-4 bg-[#DCA54C] text-[#0A1628] font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-[#c5923b] transition-all shadow-xl shadow-[#DCA54C]/20 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {status === "loading" ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              Sending Inquiry...
            </>
          ) : (
            <>
              <Send size={18} />
              Send Inquiry
            </>
          )}
        </button>
      </div>
    </form>
  );
}

export default function AboutContact() {
  const [cardOrder, setCardOrder] = useState<number[]>([0, 1, 2]);

  const handleCardClick = (idx: number) => {
    setCardOrder((prev) => {
      const newOrder = prev.filter((i) => i !== idx);
      newOrder.push(idx);
      return newOrder;
    });
  };

  return (
    <section id="contact-form" className="bg-white py-24 w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row shadow-2xl rounded-3xl overflow-hidden bg-white border border-gray-100">

          {/* Left Visual Area */}
          <div className="lg:w-1/2 p-8 sm:p-12 flex flex-col justify-between bg-[#0A1628] relative overflow-hidden min-h-[520px] lg:min-h-full">
            {/* Background design accents */}
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] pointer-events-none mix-blend-overlay"></div>
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 bg-white/5 border border-white/10 rounded-full w-fit">
                <div className="w-1.5 h-1.5 rounded-full bg-[#DCA54C]" />
                <span className="text-white font-display font-medium uppercase tracking-widest text-[10px]">
                  Get in Touch
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4 leading-tight">
                Let&apos;s Build India&apos;s <br />{" "}
                <span className="text-[#DCA54C]">Future Together.</span>
              </h2>
              <p className="text-white/60 max-w-md leading-relaxed font-light text-sm sm:text-base mb-6">
                Whether you need expansive logistics solutions, zero-emission electric trucks, or reliable steel and alloy distribution — we are ready to partner.
              </p>

              {/* Horizontal Stats Bar in the gap */}
              <div className="grid grid-cols-3 gap-4 py-4 border-y border-white/10 max-w-md">
                <div>
                  <p className="text-lg sm:text-xl font-display font-bold text-[#DCA54C]">Est. 1933</p>
                  <p className="text-[9px] sm:text-[10px] text-white/50 uppercase tracking-wider font-semibold mt-1">90+ Yrs Legacy</p>
                </div>
                <div className="border-l border-white/10 pl-4">
                  <p className="text-lg sm:text-xl font-display font-bold text-white">RDSO</p>
                  <p className="text-[9px] sm:text-[10px] text-white/50 uppercase tracking-wider font-semibold mt-1">Railways Approved</p>
                </div>
                <div className="border-l border-white/10 pl-4">
                  <p className="text-lg sm:text-xl font-display font-bold text-white">100% EV</p>
                  <p className="text-[9px] sm:text-[10px] text-white/50 uppercase tracking-wider font-semibold mt-1">Green Trucking</p>
                </div>
              </div>
            </div>

            {/* Overlapping Rounded Image Collage */}
            <div className="relative w-full h-[240px] xs:h-[280px] sm:h-[240px] lg:h-[240px] xl:h-[280px] mt-8 z-10">
              {/* Card 1: EV Fleet (Background overlapping card left) */}
              <motion.div
                onClick={() => handleCardClick(0)}
                initial={{ opacity: 0, x: -30, rotate: -3 }}
                animate={{ 
                  opacity: 1, 
                  x: 0, 
                  rotate: -5,
                  scale: cardOrder.indexOf(0) === 2 ? 1.04 : 1
                }}
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.4 }}
                style={{ zIndex: (cardOrder.indexOf(0) + 1) * 10 }}
                className="absolute top-4 left-0 w-[48%] h-[75%] rounded-2xl overflow-hidden shadow-xl border border-white/10 cursor-pointer select-none"
              >
                <Image
                  src={cloudinary("lauls image/image copy 11.png")}
                  alt="Lauls EV Fleet Logistics"
                  fill
                  sizes="15vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[#0A1628]/25" />
              </motion.div>

              {/* Card 2: Steel Stockyard (Middle background card) */}
              <motion.div
                onClick={() => handleCardClick(1)}
                initial={{ opacity: 0, y: 30, rotate: 1 }}
                animate={{ 
                  opacity: 1, 
                  y: 0, 
                  rotate: 2,
                  scale: cardOrder.indexOf(1) === 2 ? 1.04 : 1
                }}
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.4 }}
                style={{ zIndex: (cardOrder.indexOf(1) + 1) * 10 }}
                className="absolute bottom-2 left-[25%] w-[50%] h-[75%] rounded-2xl overflow-hidden shadow-2xl border border-white/10 cursor-pointer select-none"
              >
                <Image
                  src={cloudinary("images/IMG_9956.JPG")}
                  alt="Steel Stockyard"
                  fill
                  sizes="15vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[#0A1628]/15" />
              </motion.div>

              {/* Card 3: EV Green Truck (Foreground overlapping card right with Gold Border) */}
              <motion.div
                onClick={() => handleCardClick(2)}
                initial={{ opacity: 0, x: 30, rotate: 3 }}
                animate={{ 
                  opacity: 1, 
                  x: 0, 
                  rotate: 4,
                  scale: cardOrder.indexOf(2) === 2 ? 1.04 : 1
                }}
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.4 }}
                style={{ zIndex: (cardOrder.indexOf(2) + 1) * 10 }}
                className="absolute bottom-0 right-0 w-[50%] h-[75%] rounded-2xl overflow-hidden shadow-2xl border-2 border-[#DCA54C] cursor-pointer select-none"
              >
                <Image
                  src={cloudinary("lauls image/image copy 12.png")}
                  alt="Lauls EV Cargo Truck"
                  fill
                  sizes="15vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[#0A1628]/10" />
              </motion.div>
            </div>
          </div>

          {/* Right Form Area */}
          <div className="lg:w-1/2 p-10 md:p-16 bg-white">
            <Suspense
              fallback={
                <div className="h-full flex items-center justify-center text-gray-500">
                  Loading form...
                </div>
              }
            >
              <ContactFormInner />
            </Suspense>
          </div>

        </div>
      </div>
    </section>
  );
}

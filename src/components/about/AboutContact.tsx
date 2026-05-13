"use client";

import { useState, Suspense, useMemo } from "react";
import { Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus("error");
      setStatusMessage("Please fill in your name, email, and message.");
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">
            Full Name <span className="text-red-400">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full pb-2 border-b border-gray-200 focus:border-[#DCA54C] outline-none transition-colors text-[#0A1628] bg-transparent placeholder:text-gray-300"
            placeholder="Enter your full name"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">
            Email Address <span className="text-red-400">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full pb-2 border-b border-gray-200 focus:border-[#DCA54C] outline-none transition-colors text-[#0A1628] bg-transparent placeholder:text-gray-300"
            placeholder="you@company.com"
          />
        </div>
      </div>

      <div className="space-y-2 pt-2">
        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">
          Company / Organisation
        </label>
        <input
          id="contact-company"
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="w-full pb-2 border-b border-gray-200 focus:border-[#DCA54C] outline-none transition-colors text-[#0A1628] bg-transparent placeholder:text-gray-300"
          placeholder="Enter your company name"
        />
      </div>

      <div className="space-y-4 pt-4">
        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block">
          Interested In
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            "Logistics",
            "Electric Trucks",
            "Fe Alloy Distribution",
            "Alloy Steel Distribution",
            "Precision Tubes",
            "Wire Rods",
          ].map((item) => (
            <label
              key={item}
              onClick={() => setSelectedInterest(item)}
              className={`flex items-center gap-3 p-4 border rounded-xl cursor-pointer transition-all select-none ${
                selectedInterest === item
                  ? "border-[#DCA54C] bg-[#DCA54C]/5 shadow-sm"
                  : "border-gray-100 bg-gray-50/50 hover:border-[#DCA54C]/50"
              }`}
            >
              <div
                className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors shrink-0 ${
                  selectedInterest === item ? "border-[#DCA54C]" : "border-gray-300"
                }`}
              >
                {selectedInterest === item && (
                  <div className="w-2 h-2 rounded-full bg-[#DCA54C]" />
                )}
              </div>
              <span
                className={`text-sm font-medium transition-colors ${
                  selectedInterest === item ? "text-[#0A1628]" : "text-gray-600"
                }`}
              >
                {item}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="space-y-2 pt-4">
        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">
          Message <span className="text-red-400">*</span>
        </label>
        <textarea
          id="contact-message"
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="w-full pb-2 border-b border-gray-200 focus:border-[#DCA54C] outline-none transition-colors text-[#0A1628] bg-transparent resize-none placeholder:text-gray-300"
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
  return (
    <section id="contact-form" className="bg-white py-24 w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row shadow-2xl rounded-2xl overflow-hidden bg-white border border-gray-100">

          {/* Left Visual Area */}
          <div className="lg:w-1/2 relative min-h-[400px] lg:min-h-full">
            <Image
              src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1200"
              alt="Industrial steel manufacturing facility — Lauls Ltd"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-r from-[#0A1628]/90 via-[#0A1628]/60 to-transparent" />
            <div className="absolute inset-0 p-12 flex flex-col justify-end lg:justify-center">
              <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full w-fit">
                <div className="w-1.5 h-1.5 rounded-full bg-[#DCA54C]" />
                <span className="text-white font-display font-medium uppercase tracking-widest text-[10px]">
                  Get in Touch
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
                Let&apos;s Build India&apos;s <br />{" "}
                <span className="text-[#DCA54C]">Future Together.</span>
              </h2>
              <p className="text-white/70 max-w-md leading-relaxed font-light">
                Whether you need expansive logistics solutions, zero-emission electric trucks, or reliable steel and alloy distribution — we are ready to partner.
              </p>
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

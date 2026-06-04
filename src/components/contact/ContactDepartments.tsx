"use client";

import { Mail, Phone, MessageCircle } from "lucide-react";

const LinkedinIcon = ({ className, size, strokeWidth }: { className?: string; size?: number; strokeWidth?: number }) => (
  <svg 
    className={className} 
    width={size || 28} 
    height={size || 28} 
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

export default function ContactDepartments() {
  const methods = [
    { 
      title: "SALES", 
      value: "sales@lauls.in", 
      href: "mailto:sales@lauls.in",
      Icon: Mail 
    },
    { 
      title: "GENERAL", 
      value: "info@lauls.in", 
      href: "mailto:info@lauls.in",
      Icon: Mail 
    },
    { 
      title: "DIRECT LINE", 
      value: "+91-129-4098300", 
      href: "tel:+911294098300",
      Icon: Phone 
    },
    { 
      title: "WHATSAPP", 
      value: "+91-129-4098300", 
      href: "https://wa.me/911294098300",
      Icon: MessageCircle 
    },
    { 
      title: "FERRO ALLOYS", 
      value: "ferroalloys@lauls.in", 
      href: "mailto:ferroalloys@lauls.in",
      Icon: Mail 
    },
    { 
      title: "LINKEDIN", 
      value: "Lauls Private Limited", 
      href: "https://www.linkedin.com/company/10073868",
      Icon: LinkedinIcon 
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24 w-full border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-[#0A1628] mb-12 tracking-tight">
          Connect Directly
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {methods.map((method, idx) => {
            const { Icon } = method;
            return (
              <div key={idx} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 group">
                 <div className="w-16 h-16 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-center shrink-0 shadow-sm transition-all group-hover:bg-[#0A1628]">
                   <Icon className="text-gray-400 group-hover:text-[#DCA54C] transition-colors" size={28} strokeWidth={1.5} />
                 </div>
                 <div className="pt-1">
                   <h4 className="text-sm font-bold text-[#0A1628] uppercase tracking-widest mb-1">{method.title}</h4>
                   <a 
                     href={method.href} 
                     target={method.title === "WHATSAPP" || method.title === "LINKEDIN" ? "_blank" : undefined} 
                     rel="noopener noreferrer" 
                     className="text-[#3b82f6] hover:text-[#0A1628] transition-colors text-lg font-medium break-words"
                   >
                     {method.value}
                   </a>
                 </div>
              </div>
            );
          })}
        </div>

        {/* Company Information Card */}
        <div className="mt-16 bg-gray-50 border border-gray-100 rounded-2xl p-8 max-w-3xl">
          <h3 className="text-lg font-bold text-[#0A1628] mb-6 uppercase tracking-wider">Company Information</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Legal Name</div>
              <div className="text-gray-800 font-medium">Lauls Private Limited</div>
            </div>
            <div>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">GSTIN</div>
              <div className="text-gray-800 font-mono font-semibold">06AAACL3118P1ZF</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

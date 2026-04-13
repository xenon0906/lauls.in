"use client";

import { Mail, Phone, MessageCircle } from "lucide-react";

export default function ContactDepartments() {
  const methods = [
    { 
      title: "SALES", 
      value: "sales@laulsltd.com", 
      href: "mailto:sales@laulsltd.com",
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
  ];

  return (
    <section className="bg-white py-16 md:py-24 w-full border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-[#0A1628] mb-12 tracking-tight">
          Connect Directly
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
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
                     target={method.title === "WHATSAPP" ? "_blank" : undefined} 
                     rel="noopener noreferrer" 
                     className="text-[#3b82f6] hover:text-[#0A1628] transition-colors text-lg font-medium"
                   >
                     {method.value}
                   </a>
                 </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

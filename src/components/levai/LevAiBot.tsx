"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  companyInfo,
  contactInfo,
  locations,
  directors,
  products,
  services,
  stats,
  certifications,
  operatingHours,
} from "@/data/levai-knowledge";

/* ─── Types ─── */
interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
  quickReplies?: QuickReply[];
}

interface QuickReply {
  label: string;
  action: string;
}

/* ─── Quick Reply Definitions ─── */
const initialQuickReplies: QuickReply[] = [
  { label: "About Lauls", action: "about" },
  { label: "Our Products", action: "products" },
  { label: "Contact Us", action: "contact" },
  { label: "Leadership", action: "directors" },
];

const productQuickReplies: QuickReply[] = [
  { label: "Ferro Alloys", action: "ferro-alloys" },
  { label: "Wire Rods", action: "wire-rods" },
  { label: "Steel Rounds", action: "steel-rounds" },
  { label: "Precision Tubes", action: "precision-tubes" },
];

const afterProductQuickReplies: QuickReply[] = [
  { label: "Other Products", action: "products" },
  { label: "Contact Sales", action: "contact" },
  { label: "Our Services", action: "services" },
];

const contactQuickReplies: QuickReply[] = [
  { label: "Call Now", action: "call" },
  { label: "WhatsApp", action: "whatsapp" },
  { label: "Email Us", action: "emails" },
  { label: "Office Locations", action: "locations" },
];

const generalQuickReplies: QuickReply[] = [
  { label: "Products", action: "products" },
  { label: "Services", action: "services" },
  { label: "Contact", action: "contact" },
  { label: "Certifications", action: "certifications" },
];

/* ─── Response Generator ─── */
function generateResponse(input: string): {
  text: string;
  quickReplies: QuickReply[];
} {
  const lower = input.toLowerCase().trim();

  // Greetings
  if (
    lower.match(/^(hi|hello|hey|namaste|good\s*(morning|afternoon|evening))/)
  ) {
    return {
      text: `Namaste! Welcome to ${companyInfo.name}. I'm LevAI, your virtual assistant. How can I help you today?`,
      quickReplies: initialQuickReplies,
    };
  }

  // About / Company
  if (
    lower.match(
      /(about|company|who are|history|founded|legacy|story|tell me about)/
    )
  ) {
    return {
      text: `${companyInfo.name} was ${companyInfo.founded ? `founded in ${companyInfo.founded}` : "established"} by ${companyInfo.founder}. ${companyInfo.description}

We serve industries including Automotive, Renewable Energy, Construction, Railways, Manufacturing, and Defense.`,
      quickReplies: [
        { label: "Our Leadership", action: "directors" },
        { label: "Our Products", action: "products" },
        { label: "Certifications", action: "certifications" },
      ],
    };
  }

  // Directors / Leadership / Owner
  if (
    lower.match(
      /(director|owner|leadership|team|who runs|management|leader|board)/
    )
  ) {
    const dirText = directors
      .map(
        (d) =>
          `${d.name} - ${d.role}\n  "${d.quote}"`
      )
      .join("\n\n");
    return {
      text: `Our leadership team:\n\n${dirText}\n\nTogether, they carry forward a 90+ year legacy of industrial excellence.`,
      quickReplies: [
        { label: "Contact Us", action: "contact" },
        { label: "Our Story", action: "about" },
      ],
    };
  }

  // Products overview
  if (
    lower.match(
      /(product|steel|alloy|wire|tube|ferro|catalog|range|what do you sell|what do you supply)/
    ) &&
    !lower.match(/(ferro|wire|round|tube|precision)/)
  ) {
    return {
      text: `We offer 4 major product categories:\n\n1. Ferro Alloys (TATA Steel authorized distributor)\n2. Wire Rods (Alloy, Mild & Stainless)\n3. Steel Rounds (Alloy & Mild Steel)\n4. Precision Tubes (ERW & Hollow Sections)\n\nAll sourced from top mills like SAIL, TATA, and JSW.`,
      quickReplies: productQuickReplies,
    };
  }

  // Ferro Alloys
  if (lower.match(/(ferro|ferroalloy|ferro manganese|ferro chrome|ferro silicon|silico manganese)/)) {
    const fa = products["ferro-alloys"];
    const items = fa.items.map((i) => `  ${i.name} (${i.grade}) - ${i.specs}`).join("\n");
    return {
      text: `${fa.name} - ${fa.tagline}\n\n${fa.description}\n\nOur range:\n${items}\n\nWe are the authorized TATA Steel Ferro Alloys distributor for Northern India.`,
      quickReplies: afterProductQuickReplies,
    };
  }

  // Wire Rods
  if (lower.match(/(wire\s*rod|wire)/)) {
    const wr = products["wire-rods"];
    const items = wr.items.map((i) => `  ${i.name} (${i.grade}) - ${i.specs}`).join("\n");
    return {
      text: `${wr.name} - ${wr.tagline}\n\n${wr.description}\n\nOur range:\n${items}`,
      quickReplies: afterProductQuickReplies,
    };
  }

  // Steel Rounds
  if (lower.match(/(steel\s*round|rounds|round bar)/)) {
    const sr = products["steel-rounds"];
    const items = sr.items.map((i) => `  ${i.name} (${i.grade}) - ${i.specs}`).join("\n");
    return {
      text: `${sr.name} - ${sr.tagline}\n\n${sr.description}\n\nOur range:\n${items}`,
      quickReplies: afterProductQuickReplies,
    };
  }

  // Precision Tubes
  if (lower.match(/(tube|precision\s*tube|erw|hollow\s*section)/)) {
    const pt = products["precision-tubes"];
    const items = pt.items.map((i) => `  ${i.name} (${i.grade}) - ${i.specs}`).join("\n");
    return {
      text: `${pt.name} - ${pt.tagline}\n\n${pt.description}\n\nOur range:\n${items}`,
      quickReplies: afterProductQuickReplies,
    };
  }

  // Services
  if (lower.match(/(service|logistics|transport|shipping|warehousing|ev|electric|truck|distribution)/)) {
    const svcText = services
      .map((s, i) => `${i + 1}. ${s.name}\n   ${s.description}`)
      .join("\n\n");
    return {
      text: `Our core services:\n\n${svcText}`,
      quickReplies: [
        { label: "Contact Sales", action: "contact" },
        { label: "Our Products", action: "products" },
      ],
    };
  }

  // Contact
  if (lower.match(/(contact|phone|call|number|reach|talk|speak)/)) {
    return {
      text: `Reach us at:\n\nPhone: ${contactInfo.phone}\nWhatsApp: ${contactInfo.whatsapp}\n\nEmail departments:\n  Sales: sales@lauls.in\n  Ferro Alloys: ferroalloys@lauls.in\n  General: info@lauls.in\n\nLinkedIn: ${contactInfo.linkedin}`,
      quickReplies: [
        { label: "Call Now", action: "call" },
        { label: "WhatsApp", action: "whatsapp" },
        { label: "Office Locations", action: "locations" },
      ],
    };
  }

  // Emails
  if (lower.match(/(email|mail|e-mail)/)) {
    return {
      text: `Email us at:\n\n  Sales & Logistics: sales@lauls.in\n  Ferro Alloys: ferroalloys@lauls.in\n  General Inquiries: info@lauls.in`,
      quickReplies: contactQuickReplies,
    };
  }

  // Locations / Address
  if (lower.match(/(location|address|where|office|headquarters|branch|warehouse)/)) {
    const locText = locations
      .map((l) => `${l.title} (${l.type})\n  ${l.address}`)
      .join("\n\n");
    return {
      text: `Our operational network:\n\n${locText}`,
      quickReplies: [
        { label: "Contact Us", action: "contact" },
        { label: "Our Services", action: "services" },
      ],
    };
  }

  // Certifications
  if (lower.match(/(certif|iso|warex|rdso|approved|compliance|quality)/)) {
    return {
      text: `Our certifications & accreditations:\n\n${certifications.map((c) => `  ${c}`).join("\n")}\n\nWe maintain the highest standards of quality across all operations.`,
      quickReplies: [
        { label: "Our Products", action: "products" },
        { label: "Contact Us", action: "contact" },
      ],
    };
  }

  // Stats / Numbers
  if (lower.match(/(stat|number|how many|capacity|volume|fleet|size)/)) {
    return {
      text: `Key numbers:\n\n  ${stats.years} Years of Legacy\n  ${stats.clients} Global Clients\n  ${stats.warehouses} Warehouses across India\n  ${stats.steelHandled} of Steel handled\n  ${stats.truckFleet} Truck Fleet\n  ${stats.certifications.join(", ")}`,
      quickReplies: generalQuickReplies,
    };
  }

  // Operating Hours
  if (lower.match(/(hour|timing|open|close|when|time|schedule)/)) {
    return {
      text: `Operating Hours:\n\n  Days: ${operatingHours.days}\n  Hours: ${operatingHours.hours}\n  Timezone: ${operatingHours.timezone}`,
      quickReplies: contactQuickReplies,
    };
  }

  // Quote / Pricing
  if (lower.match(/(price|pricing|quote|cost|rate|how much|tariff)/)) {
    return {
      text: `For pricing and custom quotes, please contact our sales team:\n\n  Phone: ${contactInfo.phone}\n  Email: sales@lauls.in\n  WhatsApp: ${contactInfo.whatsapp}\n\nOur team will provide competitive, mill-direct pricing within 24 hours.`,
      quickReplies: contactQuickReplies,
    };
  }

  // Thanks
  if (lower.match(/(thank|thanks|dhanyavaad|shukriya)/)) {
    return {
      text: `You're welcome! If you need anything else, feel free to ask. Have a great day!`,
      quickReplies: initialQuickReplies,
    };
  }

  // Default fallback
  return {
    text: `I can help you with:\n\n  About Lauls - Our 90+ year legacy\n  Products - Ferro Alloys, Wire Rods, Steel Rounds, Tubes\n  Services - Logistics, EV Fleet, Distribution\n  Contact - Phone, Email, WhatsApp\n  Leadership - Our directors\n  Certifications - ISO, WAREX, RDSO\n\nWhat would you like to know?`,
    quickReplies: initialQuickReplies,
  };
}

/* ─── Bot Icon SVG ─── */
function BotIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2C6.48 2 2 6.48 2 12v4c0 1.1.9 2 2 2h1v-7H4.07C4.56 6.81 7.88 4 12 4s7.44 2.81 7.93 7H19v7h1c1.1 0 2-.9 2-2v-4c0-5.52-4.48-10-10-10z"
        fill="currentColor"
      />
      <circle cx="8.5" cy="12.5" r="1.5" fill="white" />
      <circle cx="15.5" cy="12.5" r="1.5" fill="white" />
      <path
        d="M9 16.5c0 .83.67 1.5 1.5 1.5h3c.83 0 1.5-.67 1.5-1.5"
        stroke="white"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <rect x="10" y="1" width="4" height="3" rx="1" fill="currentColor" />
      <circle cx="18" cy="8" r="2" fill="currentColor" opacity="0.6" />
    </svg>
  );
}

/* ─── Main Component ─── */
export default function LevAiBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      text: `Namaste! I'm LevAI, virtual assistant of ${companyInfo.name}. How can I help you today?`,
      sender: "bot",
      timestamp: new Date(),
      quickReplies: initialQuickReplies,
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [unread, setUnread] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, scrollToBottom]);

  useEffect(() => {
    if (isOpen) {
      setUnread(0);
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const addBotMessage = useCallback(
    (text: string, quickReplies?: QuickReply[]) => {
      setIsTyping(true);
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: `bot-${Date.now()}`,
            text,
            sender: "bot",
            timestamp: new Date(),
            quickReplies,
          },
        ]);
        setIsTyping(false);
      }, 600 + Math.random() * 400);
    },
    []
  );

  const handleSend = useCallback(
    (text: string) => {
      if (!text.trim()) return;

      const userMsg: Message = {
        id: `user-${Date.now()}`,
        text: text.trim(),
        sender: "user",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, userMsg]);
      setInput("");

      const response = generateResponse(text);
      addBotMessage(response.text, response.quickReplies);
    },
    [addBotMessage]
  );

  const handleQuickReply = useCallback(
    (action: string) => {
      // Handle special actions
      if (action === "call") {
        window.open(`tel:${contactInfo.phoneRaw}`, "_self");
        return;
      }
      if (action === "whatsapp") {
        window.open(
          `https://wa.me/${contactInfo.whatsappRaw}`,
          "_blank"
        );
        return;
      }

      const labelMap: Record<string, string> = {
        about: "Tell me about Lauls",
        products: "What products do you offer?",
        contact: "How can I contact you?",
        directors: "Who are the directors?",
        services: "What services do you provide?",
        certifications: "What certifications do you have?",
        locations: "Where are your offices?",
        emails: "What are your email addresses?",
        "ferro-alloys": "Tell me about Ferro Alloys",
        "wire-rods": "Tell me about Wire Rods",
        "steel-rounds": "Tell me about Steel Rounds",
        "precision-tubes": "Tell me about Precision Tubes",
      };

      const userText = labelMap[action] || action;

      const userMsg: Message = {
        id: `user-${Date.now()}`,
        text: userText,
        sender: "user",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, userMsg]);

      const response = generateResponse(userText);
      addBotMessage(response.text, response.quickReplies);
    },
    [addBotMessage]
  );

  return (
    <>
      {/* Floating Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 50 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[100] w-16 h-16 rounded-full bg-gradient-to-br from-[#0A1628] to-[#1B2F4D] text-white shadow-2xl shadow-[#0A1628]/40 flex items-center justify-center border-2 border-[#DCA54C]/30 hover:border-[#DCA54C] transition-colors group"
            aria-label="Open LevAI Chat"
          >
            <BotIcon className="w-8 h-8 text-[#DCA54C] group-hover:text-white transition-colors" />
            {/* Pulse ring */}
            <span className="absolute w-full h-full rounded-full bg-[#DCA54C]/20 animate-ping -z-10" />
            {/* Unread badge */}
            {unread > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-[10px] font-bold flex items-center justify-center text-white border-2 border-white">
                {unread}
              </span>
            )}
            {/* LevAI label */}
            <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[9px] font-black uppercase tracking-widest text-[#0A1628] bg-[#DCA54C] px-2 py-0.5 rounded-full whitespace-nowrap">
              LevAI
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[100] w-[360px] sm:w-[400px] h-[600px] max-h-[80vh] bg-white rounded-3xl shadow-2xl shadow-black/20 border border-gray-200 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#0A1628] to-[#1B2F4D] px-5 py-4 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#DCA54C]/20 flex items-center justify-center border border-[#DCA54C]/40">
                  <BotIcon className="w-6 h-6 text-[#DCA54C]" />
                </div>
                <div>
                  <h3 className="text-white font-display font-bold text-sm tracking-tight">
                    LevAI
                  </h3>
                  <p className="text-white/50 text-[10px] font-medium">
                    Lauls Virtual Assistant
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-white/20 hover:text-white transition-all"
                aria-label="Close chat"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M1 1l12 12M13 1L1 13" />
                </svg>
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 bg-gray-50/50">
              {messages.map((msg) => (
                <div key={msg.id}>
                  <div
                    className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                        msg.sender === "user"
                          ? "bg-[#0A1628] text-white rounded-br-md"
                          : "bg-white text-gray-800 border border-gray-100 shadow-sm rounded-bl-md"
                      }`}
                    >
                      <p className="whitespace-pre-line">{msg.text}</p>
                    </div>
                  </div>
                  {/* Quick Replies */}
                  {msg.quickReplies && msg.sender === "bot" && (
                    <div className="flex flex-wrap gap-2 mt-2 ml-1">
                      {msg.quickReplies.map((qr) => (
                        <button
                          key={qr.action}
                          onClick={() => handleQuickReply(qr.action)}
                          className="px-3 py-1.5 bg-white border border-[#DCA54C]/30 text-[#0A1628] text-xs font-semibold rounded-full hover:bg-[#DCA54C] hover:text-[#0A1628] hover:border-[#DCA54C] transition-all shadow-sm"
                        >
                          {qr.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white border border-gray-100 shadow-sm px-4 py-3 rounded-2xl rounded-bl-md">
                    <div className="flex gap-1.5">
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0ms]" />
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:150ms]" />
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:300ms]" />
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="px-4 py-3 bg-white border-t border-gray-100 shrink-0">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend(input);
                }}
                className="flex items-center gap-2"
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything about Lauls..."
                  className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-[#DCA54C] focus:ring-2 focus:ring-[#DCA54C]/10 transition-all"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isTyping}
                  className="w-11 h-11 bg-[#0A1628] text-white rounded-xl flex items-center justify-center hover:bg-[#DCA54C] hover:text-[#0A1628] transition-all disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
                  aria-label="Send message"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 2L11 13" />
                    <path d="M22 2L15 22L11 13L2 9L22 2Z" />
                  </svg>
                </button>
              </form>
              <p className="text-center text-[9px] text-gray-400 mt-2 font-medium">
                Powered by LevAI | Lauls Private Limited
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

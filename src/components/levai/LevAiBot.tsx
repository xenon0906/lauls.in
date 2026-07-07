"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
  prompt: string;
}

/* ─── Quick Reply Definitions ─── */
const initialQuickReplies: QuickReply[] = [
  { label: "About Lauls", prompt: "Tell me about Lauls Private Limited" },
  { label: "Our Products", prompt: "What products does Lauls offer?" },
  { label: "Contact Us", prompt: "How can I contact Lauls?" },
  { label: "Leadership", prompt: "Who are the directors of Lauls?" },
];

const afterReply: QuickReply[] = [
  { label: "Products", prompt: "What products does Lauls offer?" },
  { label: "Services", prompt: "What services does Lauls provide?" },
  { label: "Contact", prompt: "How can I contact Lauls?" },
  { label: "Locations", prompt: "Where are Lauls offices located?" },
];

/* ─── Bot Icon SVG ─── */
function BotIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 2C6.48 2 2 6.48 2 12v4c0 1.1.9 2 2 2h1v-7H4.07C4.56 6.81 7.88 4 12 4s7.44 2.81 7.93 7H19v7h1c1.1 0 2-.9 2-2v-4c0-5.52-4.48-10-10-10z"
        fill="currentColor"
      />
      <circle cx="8.5" cy="12.5" r="1.5" fill="white" />
      <circle cx="15.5" cy="12.5" r="1.5" fill="white" />
      <path d="M9 16.5c0 .83.67 1.5 1.5 1.5h3c.83 0 1.5-.67 1.5-1.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
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
      text: "Namaste! I'm LevAI, virtual assistant of Lauls Private Limited. I can help you with our products, services, contact info, and more. How can I assist you today?",
      sender: "bot",
      timestamp: new Date(),
      quickReplies: initialQuickReplies,
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, scrollToBottom]);

  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 300);
  }, [isOpen]);

  const callAI = useCallback(async (history: { role: string; content: string }[]) => {
    try {
      const res = await fetch("/api/levai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history }),
      });
      const data = await res.json();
      return data.reply || "I'm having trouble connecting. Please try again or call us at +91-129-4098300.";
    } catch {
      return "Network error. Please check your connection and try again.";
    }
  }, []);

  const sendMessage = useCallback(
    async (text: string) => {
      if (!text.trim() || isTyping) return;

      const userMsg: Message = {
        id: `user-${Date.now()}`,
        text: text.trim(),
        sender: "user",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, userMsg]);
      setInput("");
      setIsTyping(true);

      const history = [...messages, userMsg].map((m) => ({
        role: m.sender === "user" ? "user" : "assistant",
        content: m.text,
      }));

      const reply = await callAI(history);

      setMessages((prev) => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          text: reply,
          sender: "bot",
          timestamp: new Date(),
          quickReplies: afterReply,
        },
      ]);
      setIsTyping(false);
    },
    [messages, isTyping, callAI]
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
            <span className="absolute w-full h-full rounded-full bg-[#DCA54C]/20 animate-ping -z-10" />
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
                <div className="w-10 h-10 rounded-full bg-[#DCA54C]/20 flex items-center justify-center border border-[#DCA54C]/40 shrink-0">
                  <BotIcon className="w-6 h-6 text-[#DCA54C]" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-white font-display font-bold text-sm tracking-tight">LevAI</h3>
                  <p className="text-white/50 text-[10px] font-medium truncate">Lauls Virtual Assistant</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-white/20 hover:text-white transition-all shrink-0"
                aria-label="Close chat"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M1 1l12 12M13 1L1 13" />
                </svg>
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-gray-50/50 min-h-0">
              {messages.map((msg) => (
                <div key={msg.id} className="break-words">
                  <div className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[85%] px-4 py-3 text-sm leading-relaxed break-words whitespace-pre-wrap overflow-hidden ${
                        msg.sender === "user"
                          ? "bg-[#0A1628] text-white rounded-2xl rounded-br-md"
                          : "bg-white text-gray-800 border border-gray-100 shadow-sm rounded-2xl rounded-bl-md"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                  {msg.quickReplies && msg.sender === "bot" && (
                    <div className="flex flex-wrap gap-1.5 mt-2 ml-1">
                      {msg.quickReplies.map((qr) => (
                        <button
                          key={qr.label}
                          onClick={() => sendMessage(qr.prompt)}
                          disabled={isTyping}
                          className="px-3 py-1.5 bg-white border border-[#DCA54C]/30 text-[#0A1628] text-xs font-semibold rounded-full hover:bg-[#DCA54C] hover:text-[#0A1628] hover:border-[#DCA54C] transition-all shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {qr.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

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
                  sendMessage(input);
                }}
                className="flex items-center gap-2"
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything about Lauls..."
                  disabled={isTyping}
                  className="flex-1 min-w-0 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-[#DCA54C] focus:ring-2 focus:ring-[#DCA54C]/10 transition-all disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isTyping}
                  className="w-11 h-11 bg-[#0A1628] text-white rounded-xl flex items-center justify-center hover:bg-[#DCA54C] hover:text-[#0A1628] transition-all disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
                  aria-label="Send message"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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

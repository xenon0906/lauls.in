"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const messages = [
  "Have a project? Chat with us! 👋",
  "Get a quick quote on WhatsApp.",
  "Need industrial steel? Let's talk.",
  "Connect with our sales team.",
];

export default function FloatingContact() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);

  // Determine message based on pathname
  let message = "Hello, I'm interested in industrial solutions from Lauls Ltd. Could you provide more information?";
  
  if (pathname.includes("wire-rods")) {
    message = "Hello, I'm interested in Alloy Steel Wire Rod solutions for industrial applications. Could you provide a quote or more information?";
  } else if (pathname.includes("ferro-alloys")) {
    message = "Hello, I'm interested in Ferro Alloy products for steel manufacturing. Could we discuss availability and grades?";
  } else if (pathname.includes("precision-tubes")) {
    message = "Hello, I'm interested in ERW Precision Tubes and Hollow Sections. Could we discuss my requirements?";
  } else if (pathname.includes("steel-rounds")) {
    message = "Hello, I'm interested in Alloy and Mild Steel Rounds for engineering applications. Could you share details?";
  } else if (pathname.includes("logistics")) {
    message = "Hello, I'd like to learn more about your steel warehousing and logistics solutions.";
  } else if (pathname.includes("electric-truck")) {
    message = "Hello, I'm interested in your zero-emission Electric Trucks for industrial logistics.";
  }

  const encodedMessage = encodeURIComponent(message);
  const waUrl = `https://wa.me/919818688470?text=${encodedMessage}`;

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = window.innerHeight;

      // Show after scrolling 300px, but hide when reaching near the footer (within 500px of the bottom)
      const isPastStart = scrollY > 300;
      const isNearBottom = scrollY + clientHeight >= scrollHeight - 500;

      setIsVisible(isPastStart && !isNearBottom);
    };
    
    // Check initial position on load
    handleScroll();
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Cycle messages every 4 seconds
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % messages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ opacity: 0, y: 50, scale: 0.5 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.5 }}
          className="fixed bottom-6 left-6 md:bottom-8 md:left-8 z-[100] flex flex-col gap-4 items-start"
        >
          {/* WhatsApp Action Area */}
          <div className="relative flex items-center group">
            {/* Animated Rotating Tooltip */}
            <AnimatePresence mode="wait">
              <motion.div
                key={messageIndex}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-full left-0 mb-3 whitespace-nowrap bg-white text-primary text-sm font-semibold py-2.5 px-4 rounded-xl shadow-xl shadow-black/10 border border-black/5 pointer-events-none"
              >
                {messages[messageIndex]}
                {/* Tooltip Arrow */}
                <div className="absolute -bottom-1.5 left-[22px] w-3 h-3 bg-white rotate-45 border-r border-b border-black/5"></div>
              </motion.div>
            </AnimatePresence>

            {/* WhatsApp Button */}
            <a 
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#1ebe5d] text-white rounded-full shadow-2xl shadow-[#25D366]/40 transition-all hover:scale-110 active:scale-95 border-2 border-white/20"
              aria-label="WhatsApp Us"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 group-hover:animate-pulse">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
              {/* Pulse effect */}
              <span className="absolute w-full h-full rounded-full bg-[#25D366] opacity-40 animate-ping -z-10" />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

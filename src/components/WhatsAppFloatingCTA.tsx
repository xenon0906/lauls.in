"use client";

import { usePathname } from "next/navigation";
import { MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function WhatsAppFloatingCTA() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);

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
  // Default WhatsApp number: +911294098300 (or another if specified)
  const waUrl = `https://wa.me/911294098300?text=${encodedMessage}`;

  useEffect(() => {
    // Show button after a small delay to not distract from initial load
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl hover:shadow-[#25D366]/40 transition-all group"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={28} className="fill-current" />
          
          {/* Tooltip */}
          <span className="absolute right-full mr-4 bg-white text-[#0A1628] text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Chat with us
          </span>
          
          {/* Pulse effect */}
          <span className="absolute w-full h-full rounded-full bg-[#25D366] opacity-40 animate-ping -z-10" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}

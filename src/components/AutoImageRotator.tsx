"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AutoImageRotatorProps {
  images: string[];
  interval?: number;
  className?: string;
  imgClassName?: string;
}

export default function AutoImageRotator({
  images,
  interval = 5000,
  className = "absolute inset-0",
  imgClassName = "object-cover w-full h-full transition-transform duration-700 group-hover:scale-110",
}: AutoImageRotatorProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images, interval]);

  if (!images || images.length === 0) return null;

  return (
    <div className={`overflow-hidden ${className}`}>
      <AnimatePresence>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt="Rotator slide"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 1, transition: { duration: 1.2 } }} // stays behind until unmount
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className={`absolute inset-0 ${imgClassName}`}
        />
      </AnimatePresence>
    </div>
  );
}

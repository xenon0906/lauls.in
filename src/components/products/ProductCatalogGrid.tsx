"use client";

import { useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const productCategories = [
  {
    category: "Ferro Alloys",
    href: "/products/ferro-alloys",
    tagline: "TATA Steel Authorized",
    count: "4 Products",
    image: "/images/trading.jpg",
    items: [
      { name: "Ferro Manganese", grade: "HC / MC / LC" },
      { name: "Ferro Chrome", grade: "HC / MC / LC" },
      { name: "Ferro Silicon", grade: "FeSi 45–75" },
      { name: "Silico Manganese", grade: "Std / High" },
    ],
  },
  {
    category: "Wire Rods",
    href: "/products/wire-rods",
    tagline: "Multi-Grade Supply",
    count: "3 Products",
    image: "/images/manufacturing.jpg",
    items: [
      { name: "Alloy Steel Wire Rods", grade: "SAE / IS" },
      { name: "Mild Steel Wire Rods", grade: "IS 2062" },
      { name: "Stainless Steel Wire Rods", grade: "SS 304/316" },
    ],
  },
  {
    category: "Steel Rounds",
    href: "/products/steel-rounds",
    tagline: "Precision-Grade",
    count: "2 Products",
    image: "/images/stockyard.jpg",
    items: [
      { name: "Alloy Steel Rounds", grade: "EN Series" },
      { name: "Mild Steel Rounds", grade: "IS 2062" },
    ],
  },
  {
    category: "Precision Tubes",
    href: "/products/precision-tubes",
    tagline: "ERW & Hollow Sections",
    count: "2 Products",
    image: "/images/warehouse.jpg",
    items: [
      { name: "ERW Steel Tubes", grade: "IS 1239" },
      { name: "SHS / RHS Sections", grade: "IS 4923" },
    ],
  },
];

interface ProductCatalogGridProps {
  onClose?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export default function ProductCatalogGrid({
  onClose,
  onMouseEnter,
  onMouseLeave,
}: ProductCatalogGridProps) {
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Escape") onClose?.();
    },
    [onClose]
  );

  return (
    <div
      role="menu"
      aria-label="Product catalog"
      onKeyDown={handleKeyDown}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="absolute top-full left-0 w-full z-40"
    >
      <div className="bg-[#070e1a] border-t border-white/[0.04] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-7">
          {/* Grid of 4 category cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {productCategories.map((cat) => (
              <Link
                key={cat.category}
                href={cat.href}
                role="menuitem"
                onClick={() => onClose?.()}
                className="group relative rounded-lg overflow-hidden border border-white/[0.05] hover:border-[#DCA54C]/30 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300"
              >
                {/* Top image with overlay */}
                <div className="relative h-24 overflow-hidden">
                  <Image
                    src={cat.image}
                    alt={cat.category}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover brightness-75 group-hover:brightness-90 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#070e1a] to-transparent" />
                  {/* Category badge */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                    <h3 className="font-display font-bold text-white text-[15px] tracking-tight drop-shadow-lg">
                      {cat.category}
                    </h3>
                    <span className="text-[9px] text-white/40 font-bold uppercase tracking-widest whitespace-nowrap">
                      {cat.count}
                    </span>
                  </div>
                </div>

                {/* Product list */}
                <div className="px-3 pt-2.5 pb-3">
                  <p className="text-[10px] text-[#DCA54C]/60 font-bold uppercase tracking-widest mb-2">
                    {cat.tagline}
                  </p>
                  {cat.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center justify-between py-[5px] border-b border-white/[0.03] last:border-b-0"
                    >
                      <span className="text-[12px] text-white/60 group-hover:text-white/80 transition-colors truncate">
                        {item.name}
                      </span>
                      <span className="text-[10px] text-white/20 font-mono ml-2 shrink-0">
                        {item.grade}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Hover arrow indicator */}
                <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight size={11} className="text-[#DCA54C]" />
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom strip */}
          <div className="mt-5 pt-3.5 border-t border-white/[0.04] flex items-center justify-between">
            <Link
              href="/products"
              onClick={() => onClose?.()}
              className="inline-flex items-center gap-2 text-[13px] text-white/40 hover:text-[#DCA54C] transition-colors group/cta"
            >
              <span className="font-medium">View Complete Catalog</span>
              <ArrowRight
                size={13}
                className="group-hover/cta:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              href="/contact"
              onClick={() => onClose?.()}
              className="px-4 py-1.5 rounded-full text-[11px] font-semibold text-[#DCA54C] border border-[#DCA54C]/20 hover:bg-[#DCA54C]/10 hover:border-[#DCA54C]/40 transition-all"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

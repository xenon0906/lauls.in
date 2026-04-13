"use client";

import { useCallback } from "react";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

const productCategories = [
  {
    category: "Ferro Alloys",
    href: "/products/ferro-alloys",
    items: ["Ferro Manganese", "Ferro Chrome", "Ferro Silicon", "Silico Manganese"],
    accent: "bg-amber-500",
  },
  {
    category: "Wire Rods",
    href: "/products/wire-rods",
    items: ["Alloy Steel Wire Rods", "Mild Steel Wire Rods", "Stainless Steel Wire Rods"],
    accent: "bg-blue-500",
  },
  {
    category: "Steel Rounds",
    href: "/products/steel-rounds",
    items: ["Alloy Steel Rounds", "Mild Steel Rounds"],
    accent: "bg-emerald-500",
  },
  {
    category: "Precision Tubes",
    href: "/products/precision-tubes",
    items: ["ERW Steel Tubes", "Square & Rectangular Sections"],
    accent: "bg-purple-500",
  },
];

interface ProductCatalogGridProps {
  onClose?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export default function ProductCatalogGrid({ onClose, onMouseEnter, onMouseLeave }: ProductCatalogGridProps) {
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
      {/* Glass backdrop */}
      <div className="backdrop-blur-2xl bg-[#0a1628]/90 border-t border-b border-white/[0.06] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-6">
          {/* Category grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6">
            {productCategories.map((cat) => (
              <div key={cat.category} className="group/cat">
                {/* Category header */}
                <Link
                  href={cat.href}
                  onClick={() => onClose?.()}
                  role="menuitem"
                  className="flex items-center gap-2 mb-3 group/link"
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${cat.accent} shrink-0`} />
                  <span className="text-[11px] font-display font-bold text-white uppercase tracking-[0.15em] group-hover/link:text-accent transition-colors">
                    {cat.category}
                  </span>
                  <ChevronRight size={12} className="text-white/20 group-hover/link:text-accent group-hover/link:translate-x-0.5 transition-all" />
                </Link>

                {/* Product items */}
                <ul className="space-y-0.5 pl-3.5">
                  {cat.items.map((item) => (
                    <li key={item}>
                      <Link
                        href={cat.href}
                        onClick={() => onClose?.()}
                        role="menuitem"
                        className="block py-1.5 text-[13px] text-white/45 hover:text-white transition-colors leading-snug"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="mt-5 pt-4 border-t border-white/[0.05] flex items-center justify-between">
            <Link
              href="/products"
              onClick={() => onClose?.()}
              className="inline-flex items-center gap-1.5 text-[13px] text-white/50 hover:text-accent font-medium transition-colors group/all"
            >
              Browse all products
              <ArrowRight size={13} className="group-hover/all:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="/contact"
              onClick={() => onClose?.()}
              className="text-[12px] text-accent/60 hover:text-accent transition-colors"
            >
              Request a Quote &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

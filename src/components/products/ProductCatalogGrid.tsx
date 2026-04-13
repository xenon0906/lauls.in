"use client";

import { useCallback } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const productCategories = [
  {
    category: "Ferro Alloys",
    href: "/products/ferro-alloys",
    items: [
      "Ferro Manganese",
      "Ferro Chrome",
      "Ferro Silicon",
      "Silico Manganese",
    ],
  },
  {
    category: "Wire Rods",
    href: "/products/wire-rods",
    items: [
      "Alloy Steel Wire Rods",
      "Mild Steel Wire Rods",
      "Stainless Steel Wire Rods",
    ],
  },
  {
    category: "Steel Rounds",
    href: "/products/steel-rounds",
    items: [
      "Alloy Steel Rounds",
      "Mild Steel Rounds",
    ],
  },
  {
    category: "Precision Tubes",
    href: "/products/precision-tubes",
    items: [
      "ERW Steel Tubes",
      "Square & Rectangular Sections",
    ],
  },
];

interface ProductCatalogGridProps {
  onClose?: () => void;
}

export default function ProductCatalogGrid({ onClose }: ProductCatalogGridProps) {
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
      className="w-full hidden md:block"
    >
      <div className="bg-[#060d19] border-t border-white/6">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6">
          {/* 4-column grid */}
          <div className="grid grid-cols-4 gap-8">
            {productCategories.map((cat) => (
              <div key={cat.category}>
                {/* Category heading */}
                <Link
                  href={cat.href}
                  onClick={() => onClose?.()}
                  className="group flex items-center gap-2 mb-4"
                >
                  <div className="w-1 h-4 rounded-full bg-[#DCA54C]" />
                  <span className="text-sm font-display font-bold text-white tracking-wide group-hover:text-[#DCA54C] transition-colors">
                    {cat.category}
                  </span>
                </Link>

                {/* Product list */}
                <div className="space-y-1 pl-3">
                  {cat.items.map((item) => (
                    <Link
                      key={item}
                      href={cat.href}
                      onClick={() => onClose?.()}
                      role="menuitem"
                      className="block py-1.5 text-[13px] text-white/40 hover:text-white hover:translate-x-1 transition-all duration-200"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/6">
            <Link
              href="/products"
              onClick={() => onClose?.()}
              className="text-sm text-white/50 hover:text-[#DCA54C] transition-colors inline-flex items-center gap-2 group"
            >
              View Complete Catalog
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              onClick={() => onClose?.()}
              className="text-xs font-semibold text-[#DCA54C]/80 hover:text-[#DCA54C] border border-[#DCA54C]/20 hover:border-[#DCA54C]/50 px-4 py-1.5 rounded-full transition-all"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

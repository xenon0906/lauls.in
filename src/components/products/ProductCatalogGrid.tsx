"use client";

import { useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const productCategories = [
  {
    category: "Ferro Alloys",
    href: "/products/ferro-alloys",
    items: [
      { name: "Ferro Manganese", image: "/images/products/ferro_manganese_1778571486667.png" },
      { name: "Ferro Chrome", image: "/images/products/ferro_chrome_1778571501692.png" },
      { name: "Ferro Silicon", image: "/images/products/ferro_silicon_1778571520226.png" },
      { name: "Silico Manganese", image: "/images/products/silico_manganese_1778571539533.png" },
    ],
  },
  {
    category: "Wire Rods",
    href: "/products/wire-rods",
    items: [
      { name: "Alloy Steel Wire Rods", image: "/images/products/alloy_wire_rods_1778571554783.png" },
      { name: "Mild Steel Wire Rods", image: "/images/products/mild_wire_rods_1778571571818.png" },
      { name: "Stainless Steel Wire Rods", image: "/images/products/stainless_wire_rods_1778571588871.png" },
    ],
  },
  {
    category: "Steel Rounds",
    href: "/products/steel-rounds",
    items: [
      { name: "Alloy Steel Rounds", image: "/images/products/alloy_steel_rounds_1778571606218.png" },
      { name: "Mild Steel Rounds", image: "/images/products/mild_steel_rounds_1778571621519.png" },
    ],
  },
  {
    category: "Precision Tubes",
    href: "/products/precision-tubes",
    items: [
      { name: "ERW Steel Tubes", image: "/images/products/erw_steel_tubes_1778571635920.png" },
      { name: "Square & Rectangular Sections", image: "/images/products/hollow_sections_1778571651283.png" },
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
                <div className="space-y-3 pl-3">
                  {cat.items.map((item) => (
                    <Link
                      key={item.name}
                      href={cat.href}
                      onClick={() => onClose?.()}
                      role="menuitem"
                      className="group/item flex items-center gap-3 py-1.5 text-[13px] text-white/50 hover:text-white transition-all duration-300"
                    >
                      <div className="relative w-16 h-10 rounded-md overflow-hidden border border-white/10 group-hover/item:border-[#DCA54C]/50 transition-colors shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          sizes="32px"
                          quality={60}
                          className="object-cover"
                        />
                      </div>
                      <span className="group-hover/item:translate-x-1 transition-transform">{item.name}</span>
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

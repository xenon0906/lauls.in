"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ProductCatalogGrid from "./products/ProductCatalogGrid";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Logistics", href: "/logistics" },
  { name: "Distribution", href: "/distribution" },
  { name: "Products", href: "/products" },
  { name: "Electric Truck", href: "/electric-truck" },
  { name: "CSR", href: "/csr" },
];

const productCategories = [
  { name: "Ferro Alloys", href: "/products/ferro-alloys" },
  { name: "Wire Rods", href: "/products/wire-rods" },
  { name: "Steel Rounds", href: "/products/steel-rounds" },
  { name: "Precision Tubes", href: "/products/precision-tubes" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (pathname === href) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const openProducts = useCallback(() => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setIsProductsOpen(true);
  }, []);

  const closeProductsDelayed = useCallback(() => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsProductsOpen(false);
    }, 200);
  }, []);

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  const closeAll = useCallback(() => {
    setIsMobileMenuOpen(false);
    setIsProductsOpen(false);
    setIsMobileProductsOpen(false);
  }, []);

  const handleProductsKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setIsProductsOpen((prev) => !prev);
    } else if (e.key === "Escape") {
      setIsProductsOpen(false);
    }
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" onClick={(e) => handleLinkClick(e, "/")} className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Lauls Ltd"
            width={144}
            height={22}
            priority
            className="h-8 w-auto"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="py-6"
              onMouseEnter={() => link.name === "Products" && openProducts()}
              onMouseLeave={() => link.name === "Products" && closeProductsDelayed()}
            >
              {link.name === "Products" ? (
                <button
                  type="button"
                  aria-haspopup="true"
                  aria-expanded={isProductsOpen}
                  onKeyDown={handleProductsKeyDown}
                  onClick={() => setIsProductsOpen((prev) => !prev)}
                  className="text-sm font-medium text-white/80 hover:text-white transition-colors flex items-center gap-1"
                >
                  {link.name}
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${
                      isProductsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
              ) : (
                <Link
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`text-sm font-medium transition-colors ${pathname === link.href ? 'text-accent' : 'text-white/80 hover:text-white'}`}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}

          {/* Phone & Mail */}
          <div className="flex items-center gap-2 border-l border-white/20 pl-5">
            <a
              href="tel:+911294098300"
              title="+91-129-4098300"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all hover:scale-110 group"
            >
              <Phone size={15} className="text-white/70 group-hover:text-white transition-colors" />
            </a>
            <a
              href="mailto:info@lauls.in"
              title="info@lauls.in"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all hover:scale-110 group"
            >
              <Mail size={15} className="text-white/70 group-hover:text-white transition-colors" />
            </a>
          </div>
          <Link
            href="/contact"
            onClick={(e) => handleLinkClick(e, "/contact")}
            className="px-6 py-2.5 bg-accent hover:bg-accent/90 text-white text-sm font-semibold rounded-full transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-accent/25"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white min-w-11 min-h-11 flex items-center justify-center"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* === DESKTOP MEGA MENU — rendered as direct child of <nav> === */}
      <AnimatePresence>
        {isProductsOpen && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            onMouseEnter={openProducts}
            onMouseLeave={closeProductsDelayed}
          >
            <ProductCatalogGrid onClose={() => setIsProductsOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* === MOBILE MENU === */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-primary border-b border-white/10 overflow-hidden"
            role="menu"
          >
            <div className="flex flex-col gap-1 p-6 max-h-[80vh] overflow-y-auto">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.name === "Products" ? (
                    <>
                      <button
                        type="button"
                        onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                        aria-expanded={isMobileProductsOpen}
                        className="w-full flex items-center justify-between text-lg font-medium text-white/80 hover:text-white py-3 min-h-11"
                      >
                        <span>Products</span>
                        <ChevronDown
                          size={18}
                          className={`transition-transform duration-200 ${
                            isMobileProductsOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {isMobileProductsOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 pb-2 space-y-1 border-l-2 border-accent/30 ml-2">
                              {productCategories.map((cat) => (
                                <Link
                                  key={cat.name}
                                  href={cat.href}
                                  onClick={(e) => {
                                    handleLinkClick(e, cat.href);
                                    closeAll();
                                  }}
                                  role="menuitem"
                                  className={`flex items-center py-2.5 text-base transition-colors min-h-11 ${pathname === cat.href ? 'text-accent' : 'text-white/60 hover:text-accent'}`}
                                >
                                  {cat.name}
                                </Link>
                              ))}
                              <Link
                                href="/products"
                                onClick={(e) => {
                                  handleLinkClick(e, "/products");
                                  closeAll();
                                }}
                                role="menuitem"
                                className="flex items-center py-2.5 text-base text-accent font-semibold hover:text-white transition-colors min-h-11"
                              >
                                View All Products
                              </Link>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={(e) => {
                        handleLinkClick(e, link.href);
                        closeAll();
                      }}
                      role="menuitem"
                      className={`block text-lg font-medium py-3 min-h-11 ${pathname === link.href ? 'text-accent' : 'text-white/80 hover:text-white'}`}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                href="/contact"
                onClick={(e) => {
                  handleLinkClick(e, "/contact");
                  closeAll();
                }}
                className="mt-2 w-full py-3 bg-accent text-center text-white font-semibold rounded-xl min-h-11"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Globe, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const pathname = usePathname();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (pathname === href) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  return (
    <footer className="bg-primary pt-20 pb-10 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
             <Link href="/" onClick={(e) => handleLinkClick(e, "/")} className="flex items-center gap-2">
              <Image src="/images/logo.png" alt="Lauls Ltd" width={144} height={32} className="h-8 w-auto" />
            </Link>
            <p className="text-white/40 text-sm leading-relaxed">
              Engineering the backbone of Indian Railways and powering the EV supply chain. A legacy of precision wire rods, trust, and industrial steel excellence since 1933.
            </p>
            <div className="flex gap-4">
              <a href="https://lauls.in" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-accent hover:border-accent transition-all">
                <Globe size={18} />
              </a>
              <a href="mailto:info@lauls.in" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-accent hover:border-accent transition-all">
                <Mail size={18} />
              </a>
              <a href="tel:+911294098300" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-accent hover:border-accent transition-all">
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-white mb-6 uppercase tracking-widest text-xs">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Logistics", href: "/logistics" },
                { name: "Products", href: "/products" },
                { name: "Electric Truck", href: "/electric-truck" },
                { name: "Distribution", href: "/distribution" },
                { name: "CSR", href: "/csr" }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} onClick={(e) => handleLinkClick(e, item.href)} className={`text-sm transition-colors ${pathname === item.href ? 'text-highlight' : 'text-white/40 hover:text-highlight'}`}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-white mb-6 uppercase tracking-widest text-xs">Our Services</h4>
            <ul className="space-y-4">
              {[
                { name: "EV Wire Solutions", href: "/products/wire-rods" },
                { name: "Industrial Steel", href: "/products/steel-rounds" },
                { name: "Precision Tubes", href: "/products/precision-tubes" },
                { name: "Ferro Alloys", href: "/products/ferro-alloys" },
                { name: "EV Logistics", href: "/logistics" },
                { name: "Steel Distribution", href: "/distribution" },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} onClick={(e) => handleLinkClick(e, item.href)} className={`text-sm transition-colors ${pathname === item.href ? 'text-accent' : 'text-white/40 hover:text-accent'}`}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-bold text-white mb-6 uppercase tracking-widest text-xs">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <MapPin className="text-accent shrink-0" size={18} />
                <span className="text-white/40 text-sm">33-B, NIT, Faridabad, Haryana, India</span>
              </li>
              <li className="flex gap-4">
                <Phone className="text-accent shrink-0" size={18} />
                <span className="text-white/40 text-sm">+91-129-4098300</span>
              </li>
              <li className="flex gap-4">
                <Mail className="text-accent shrink-0" size={18} />
                <span className="text-white/40 text-sm">info@lauls.in</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Embedded CTA */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-12 flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-md">
          <div>
            <h4 className="text-xl font-display font-bold text-white mb-2">Ready to discuss your requirements?</h4>
            <p className="text-white/60 text-sm">Get in touch with our experts for custom industrial and EV supply chain solutions.</p>
          </div>
          <Link href="/contact" className="px-6 py-3 bg-highlight text-[#0A1628] font-bold rounded-lg hover:bg-[#c5923b] transition-all text-sm whitespace-nowrap shadow-lg">
            Request Industrial Consultation
          </Link>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/20 text-xs">
            © {new Date().getFullYear()} Lauls Ltd. All Rights Reserved. | Est. 1933
          </p>
          <div className="flex gap-8 items-center">
            <a href="https://wick.co.in" target="_blank" rel="noopener noreferrer" className="text-white/20 hover:text-accent text-xs transition-colors flex items-center gap-1.5 font-medium">
              Powered by Wick Network
            </a>
            <span className="text-white/10 text-xs">|</span>
            <Link href="/privacy-policy" className="text-white/20 hover:text-white text-xs transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-white/20 hover:text-white text-xs transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
